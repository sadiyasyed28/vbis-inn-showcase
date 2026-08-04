import { MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";

const SUGGESTIONS = [
  "What are your room tariffs?",
  "Is breakfast included?",
  "What's nearby the hotel?",
  "What is check-in check-out timing?",
];

const PHONE = "09731524848";
const PHONE_DISPLAY = "097315 24848";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  parts: { type: "text"; text: string }[];
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (open && !isTyping) textareaRef.current?.focus();
  }, [open, isTyping]);

  const getAssistantResponse = (userInput: string): string => {
    const query = userInput.toLowerCase();

    if (
      query.includes("tariff") ||
      query.includes("room") ||
      query.includes("price") ||
      query.includes("cost") ||
      query.includes("rent") ||
      query.includes("charge")
    ) {
      return "Our room tariffs are: Compact Non-AC from ₹1,729/night (2 guests), Deluxe AC from ₹2,021/night (2 guests), and Family Room from ₹4,041/night (3 guests). All rates include free breakfast, Wi-Fi, and parking. For exact availability or booking, please call us at 097315 24848!";
    }
    if (
      query.includes("breakfast") ||
      query.includes("food") ||
      query.includes("dining") ||
      query.includes("coffee") ||
      query.includes("menu") ||
      query.includes("lunch") ||
      query.includes("dinner") ||
      query.includes("eat")
    ) {
      return "Yes, complimentary South Indian breakfast (Idli, Vada, Dosa, and Filter Coffee) is served to all guests from 7:00 AM. For lunch and dinner, our in-house bistro serves Veg Thalis (₹180), Nati Koli Biryani (₹240), Paneer Butter Masala (₹160), and more!";
    }
    if (
      query.includes("nearby") ||
      query.includes("sightseeing") ||
      query.includes("visit") ||
      query.includes("mutt") ||
      query.includes("hill") ||
      query.includes("attraction") ||
      query.includes("temple") ||
      query.includes("lake")
    ) {
      return "Tumakuru has beautiful sights! Mandaragiri Hill (Jain temple & lake view) is a 26-min drive, Shree Siddaganga Mutt is 21 mins, and the 75-foot Sri Kote Anjaneya Statue is just 7 mins away. Trekking at Devarayanadurga Hills is also popular!";
    }
    if (
      query.includes("hot water") ||
      query.includes("warm water") ||
      query.includes("shower") ||
      query.includes("geyser") ||
      query.includes("water")
    ) {
      return "Yes! 24/7 hot water is fully available in all guest washrooms, powered by eco-friendly solar water heaters with boiler backups.";
    }
    if (
      query.includes("parking") ||
      query.includes("car") ||
      query.includes("vehicle") ||
      query.includes("bike")
    ) {
      return "Yes, we offer secure, dedicated basement parking for our guests free of charge. The parking space is monitored 24/7 via CCTV surveillance for your peace of mind.";
    }
    if (
      query.includes("check-in") ||
      query.includes("checkin") ||
      query.includes("checkout") ||
      query.includes("check-out") ||
      query.includes("time") ||
      query.includes("timing")
    ) {
      return "Standard check-in is 12:00 PM and check-out is 11:00 AM. Flexible check-in/out can be requested depending on room availability—please call us directly at 097315 24848 to arrange this.";
    }
    if (
      query.includes("clean") ||
      query.includes("hygiene") ||
      query.includes("dirty") ||
      query.includes("sanitize") ||
      query.includes("service")
    ) {
      return "We maintain strict hygiene and sanitization standards. All bed sheets, linens, towels, and bathrooms are thoroughly deep-cleaned and disinfected before every guest check-in.";
    }
    if (
      query.includes("location") ||
      query.includes("address") ||
      query.includes("where") ||
      query.includes("reach") ||
      query.includes("direction") ||
      query.includes("highway")
    ) {
      return "We are located at Melekote, TUDA Layout, Tumakuru, Karnataka 572101, just 5 minutes off the NH-48 Bengaluru Highway. You can view our live Google Map directly on the 'Local Guide' dashboard tab!";
    }

    return "Thank you for reaching out! I can assist with tariffs, amenities, local dining, or nearby tourist attractions. For bookings or reservations, please contact our front desk directly at 097315 24848.";
  };

  const send = (text: string) => {
    const value = text.trim();
    if (!value || isTyping) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      role: "user",
      parts: [{ type: "text", text: value }],
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate standard front desk typing delay
    setTimeout(() => {
      const assistantReply = getAssistantResponse(value);
      const assistantMsg: ChatMessage = {
        id: Math.random().toString(),
        role: "assistant",
        parts: [{ type: "text", text: assistantReply }],
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with the front desk"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[min(75vh,32rem)] w-[min(92vw,23rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-fade-in">
          <header className="flex items-start justify-between gap-3 border-b border-border bg-secondary px-4 py-3">
            <div>
              <p className="font-medium leading-tight">VBIS INN Front Desk</p>
              <p className="text-xs text-muted-foreground">
                Ask about rooms, local guide, or parking
              </p>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="mt-0.5 inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs hover:bg-accent transition-colors"
            >
              <Phone className="h-3 w-3" /> Call
            </a>
          </header>

          <Conversation className="flex-1">
            <ConversationContent className="gap-3 p-4">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Namaskara! I can help you with tariffs, dining menus, local sights, or transit times. For bookings, please call our front desk directly.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => send(s)}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground hover:bg-accent transition-colors text-left"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => {
                const text = message.parts
                  .map((part) => (part.type === "text" ? part.text : ""))
                  .join("");
                if (!text) return null;
                return (
                  <Message from={message.role} key={message.id}>
                    <MessageContent>
                      <MessageResponse>{text}</MessageResponse>
                    </MessageContent>
                  </Message>
                );
              })}

              {isTyping && (
                <Shimmer className="text-sm text-muted-foreground">Front desk typing...</Shimmer>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <div className="border-t border-border p-3 bg-background">
            <PromptInput
              onSubmit={(message, event) => {
                event.preventDefault();
                send(message.text ?? "");
              }}
            >
              <PromptInputTextarea
                ref={textareaRef}
                placeholder="Ask about rooms, menus, locations..."
              />
              <PromptInputFooter className="justify-end">
                <PromptInputSubmit status={isTyping ? "submitting" : "idle"} disabled={isTyping} />
              </PromptInputFooter>
            </PromptInput>
          </div>
        </div>
      )}
    </>
  );
}
