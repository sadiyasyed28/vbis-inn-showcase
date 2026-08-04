import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  Star,
  Wifi,
  Car,
  Snowflake,
  Coffee,
  Utensils,
  ShieldCheck,
  Clock,
  Navigation,
} from "lucide-react";

import heroExterior from "@/assets/hero-exterior.jpg";
import roomImg from "@/assets/room.jpg";
import diningImg from "@/assets/dining.jpg";
import nearbyImg from "@/assets/nearby.jpg";

const PHONE = "09731524848";
const PHONE_DISPLAY = "097315 24848";
const ADDRESS = "Melekote, TUDA Layout, Tumakuru, Karnataka 572101";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=VBIS+INN+Melekote+TUDA+Layout+Tumakuru+Karnataka+572101";

const amenities = [
  { icon: Coffee, label: "Free breakfast" },
  { icon: Snowflake, label: "Air conditioning" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Basement parking" },
  { icon: Utensils, label: "In-house dining" },
  { icon: ShieldCheck, label: "24×7 front desk" },
];

const rooms = [
  {
    name: "Compact Non-AC",
    from: "₹1,729",
    detail: "2 guests · double bed · attached bath · Wi-Fi",
  },
  {
    name: "Deluxe AC",
    from: "₹2,021",
    detail: "2 guests · air conditioned · TV · daily housekeeping",
  },
  {
    name: "Family Room",
    from: "₹4,041",
    detail: "3 guests · extra bed · air conditioned",
  },
];

const nearby = [
  { name: "Sri Kote Anjaneya Statue", time: "7 min", rating: "4.7" },
  { name: "Amanikere Park", time: "8 min", rating: "4.2" },
  { name: "Shree Siddaganga Mutt", time: "21 min", rating: "4.8" },
  { name: "Mandaragiri Hill", time: "26 min", rating: "4.6" },
  { name: "Namada Chilume Deer Park", time: "31 min", rating: "4.5" },
  { name: "Ramadevara Betta", time: "35 min", rating: "4.4" },
];

const reviews = [
  {
    quote: "Neat rooms, good service, limited basement parking, good location.",
    author: "T M",
  },
  {
    quote: "Hotel atmosphere is very nice, thanks to staff, very nice place.",
    author: "Vijaya Chandra HN",
  },
  {
    quote: "Rooms are decent and food is tasty. Stayed one night on the drive to Ooty.",
    author: "SachinRaikar · Tripadvisor",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VBIS INN — 3-Star Hotel in Tumakuru, Karnataka" },
      {
        name: "description",
        content:
          "Stay at VBIS INN in Melekote, TUDA Layout, Tumakuru. AC rooms from ₹1,729, free breakfast, Wi-Fi and parking. Book direct on 097315 24848.",
      },
      { property: "og:title", content: "VBIS INN — 3-Star Hotel in Tumakuru" },
      {
        property: "og:description",
        content:
          "Comfortable rooms, free breakfast and parking, minutes from Siddaganga Mutt and Mandaragiri Hill. Call 097315 24848.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "VBIS INN",
          starRating: { "@type": "Rating", ratingValue: "3" },
          telephone: "+91 97315 24848",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Melekote, TUDA Layout",
            addressLocality: "Tumakuru",
            addressRegion: "Karnataka",
            postalCode: "572101",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.1",
            reviewCount: "846",
          },
          amenityFeature: amenities.map((a) => ({
            "@type": "LocationFeatureSpecification",
            name: a.label,
            value: true,
          })),
        }),
      },
    ],
  }),
});

function CallButton({ variant = "solid" }: { variant?: "solid" | "outline" }) {
  const base =
    "inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-medium transition-colors";
  return (
    <a
      href={`tel:${PHONE}`}
      className={
        variant === "solid"
          ? `${base} bg-brass text-brass-foreground hover:bg-brass/85`
          : `${base} border border-current text-current hover:bg-foreground/5`
      }
    >
      <Phone className="h-4 w-4" />
      Call {PHONE_DISPLAY}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <span className="font-display text-2xl leading-none">VBIS INN</span>
            <span className="ml-3 hairline-label text-muted-foreground">Tumakuru</span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <img
          src={heroExterior}
          alt="VBIS INN hotel exterior lit up at dusk in Tumakuru"
          width={1600}
          height={1008}
          className="h-[68vh] min-h-[420px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-5">
            <p className="hairline-label text-brass">3-star hotel · Melekote, Tumakuru</p>
            <h1 className="mt-4 max-w-2xl text-5xl leading-[1.05] text-background sm:text-6xl">
              A calm, comfortable stay in the heart of Tumakuru
            </h1>
            <p className="mt-5 max-w-xl text-base text-background/80">
              Clean AC rooms, complimentary breakfast and secure parking — minutes from
              Siddaganga Mutt, Amanikere and the Bengaluru highway.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-background">
              <CallButton />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-background/50 px-6 py-3 text-sm font-medium transition-colors hover:bg-background/10"
              >
                <Navigation className="h-4 w-4" />
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-6 sm:grid-cols-4">
          <div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-brass text-brass" />
              <span className="text-lg font-medium">4.1</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">846 Google reviews</p>
          </div>
          <div>
            <span className="text-lg font-medium">₹1,729</span>
            <p className="mt-1 text-xs text-muted-foreground">Rooms from, per night</p>
          </div>
          <div>
            <span className="text-lg font-medium">Free</span>
            <p className="mt-1 text-xs text-muted-foreground">Breakfast &amp; Wi-Fi</p>
          </div>
          <div>
            <span className="text-lg font-medium">24×7</span>
            <p className="mt-1 text-xs text-muted-foreground">Reception &amp; check-in</p>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="hairline-label text-muted-foreground">Rooms &amp; tariff</p>
        <h2 className="mt-3 text-4xl">Pick a room, call, and it's held for you</h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Direct rates are the same or better than travel sites — and there's no booking fee.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {rooms.map((room, i) => (
            <article
              key={room.name}
              className="flex flex-col border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              {i === 0 && (
                <span className="hairline-label mb-4 w-fit bg-accent px-2 py-1 text-accent-foreground">
                  Best value
                </span>
              )}
              <h3 className="text-2xl">{room.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{room.detail}</p>
              <p className="mt-6 font-display text-3xl">
                {room.from}
                <span className="ml-2 font-sans text-xs text-muted-foreground">/ night</span>
              </p>
              <a
                href={`tel:${PHONE}`}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" /> Reserve by phone
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Stay / imagery */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <img
            src={roomImg}
            alt="Twin bed air-conditioned guest room at VBIS INN"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
          <div>
            <p className="hairline-label text-muted-foreground">The stay</p>
            <h2 className="mt-3 text-4xl">Everything a night away should have</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Rooms are cleaned daily and kept simple: fresh linen, hot water, working AC and
              a quiet corridor. Downstairs, the dining room serves South Indian breakfast from
              7 am and a full à la carte menu through the evening.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {amenities.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <Icon className="h-4 w-4 shrink-0 text-brass" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 md:grid-cols-2 md:items-center">
          <div className="md:order-2">
            <p className="hairline-label text-muted-foreground">Dining</p>
            <h2 className="mt-3 text-4xl">Filter coffee at 7, biryani by 8</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Complimentary breakfast for every guest — idli, dosa, upma and filter coffee.
              The multi-cuisine restaurant and rooftop lounge stay open to residents and
              walk-in guests alike.
            </p>
          </div>
          <img
            src={diningImg}
            alt="South Indian breakfast served at the VBIS INN restaurant"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-4/3 w-full object-cover md:order-1"
          />
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="hairline-label text-muted-foreground">Guest words</p>
        <h2 className="mt-3 text-4xl">4.1 across 846 reviews</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.author} className="border-l-2 border-brass bg-card p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-brass text-brass" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs text-muted-foreground">{r.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Nearby */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="hairline-label text-muted-foreground">Around you</p>
            <h2 className="mt-3 text-4xl">Temples, hills and lakes within half an hour</h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {nearby.map((p) => (
                <li key={p.name} className="flex items-center justify-between gap-4 py-3">
                  <span className="text-sm">{p.name}</span>
                  <span className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-brass text-brass" />
                      {p.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {p.time}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={nearbyImg}
            alt="Jain temple atop Mandaragiri Hill near Tumakuru"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl">Rooms available tonight</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-primary-foreground/75">
            Call the front desk directly — no booking fee, no prepayment, instant confirmation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CallButton />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
            >
              <MapPin className="h-4 w-4" />
              View on map
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl">VBIS INN</p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{ADDRESS}</p>
          </div>
          <div className="text-sm sm:text-right">
            <a href={`tel:${PHONE}`} className="block hover:text-brass">
              {PHONE_DISPLAY}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-muted-foreground hover:text-brass"
            >
              Directions on Google Maps
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} VBIS INN, Tumakuru
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
