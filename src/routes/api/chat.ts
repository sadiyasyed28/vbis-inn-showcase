import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are the friendly front-desk assistant for VBIS INN, a 3-star hotel in Tumakuru, Karnataka, India.

Facts you may use:
- Address: Melekote, TUDA Layout, Tumakuru, Karnataka 572101.
- Phone (reservations, 24x7): 097315 24848.
- Google rating: 4.1 from 846 reviews.
- Tariffs (per night, indicative): Compact Non-AC from Rs 1,729 (2 guests, double bed, attached bath, Wi-Fi); Deluxe AC from Rs 2,021; Family room from Rs 4,041.
- Included: free breakfast, free Wi-Fi, basement parking, air conditioning in AC rooms, 24x7 front desk, in-house South Indian dining.
- Nearby: Siddaganga Mutt, Mandaragiri Hill (about 26 min drive), Tumakuru city centre.

Rules:
- Be warm, concise and helpful. Two to four short sentences, plain language.
- You cannot make, change or cancel bookings, and you cannot confirm live availability or final prices. For anything like that, ask the guest to call 097315 24848.
- If you do not know something, say so and point to the phone number.
- Never invent facilities, offers or policies that are not listed above.`;

type ChatRequestBody = { messages?: unknown };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as ChatRequestBody;
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) {
          return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        }

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("openai/gpt-5.6-sol"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages as UIMessage[]),
          providerOptions: { lovable: { reasoningEffort: "none" } },
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
        });
      },
    },
  },
});
