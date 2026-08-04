import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  Compass,
  BedDouble,
  Heart,
  ChevronRight,
  BookOpen,
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

const nearbyWithTips = [
  {
    name: "Sri Kote Anjaneya Statue",
    time: "7 min",
    rating: "4.7",
    tip: "Famous 75-foot tall Lord Hanuman statue. Best visited in the morning.",
  },
  {
    name: "Amanikere Park",
    time: "8 min",
    rating: "4.2",
    tip: "Beautiful lakefront park with walkways and boating. Great for peaceful evening walks.",
  },
  {
    name: "Shree Siddaganga Mutt",
    time: "21 min",
    rating: "4.8",
    tip: "Historic and sacred spiritual center offering daily free meals to thousands of pilgrims.",
  },
  {
    name: "Mandaragiri Hill",
    time: "26 min",
    rating: "4.6",
    tip: "Unique peacock-feather shaped Jain temple with a climb of 400 steps. Scenic sunset views.",
  },
  {
    name: "Namada Chilume Deer Park",
    time: "31 min",
    rating: "4.5",
    tip: "Wooded deer park with nature trails leading to a spring.",
  },
  {
    name: "Ramadevara Betta",
    time: "35 min",
    rating: "4.4",
    tip: "Hills featuring stairs leading to multiple temples, plus sweeping views.",
  },
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

const menuItems = {
  breakfast: [
    {
      name: "Idli Vada Combo",
      price: "₹60",
      desc: "Steamed rice cakes & crispy lentil donut, served with sambar and fresh coconut chutney.",
    },
    {
      name: "Ghee Masala Dosa",
      price: "₹80",
      desc: "Crispy golden crepe filled with spiced potato mash, served with ghee.",
    },
    {
      name: "Chow Chow Bath",
      price: "₹90",
      desc: "A harmonious combination of sweet pineapple kesari bath and savory semolina khara bath.",
    },
    {
      name: "Traditional Filter Coffee",
      price: "₹30",
      desc: "Freshly brewed chicory-infused South Indian filter coffee.",
    },
  ],
  meals: [
    {
      name: "VBIS Special Veg Thali",
      price: "₹180",
      desc: "South Indian lunch meals served with rice, sambar, rasam, dry veg curries, curd, and dessert.",
    },
    {
      name: "Nati Koli Biryani",
      price: "₹240",
      desc: "Local country-style chicken biryani cooked slow with aromatic jeeraga samba rice.",
    },
    {
      name: "Paneer Butter Masala & Roti",
      price: "₹160",
      desc: "Rich tomato-butter gravy cooked with paneer, served with freshly baked butter rotis.",
    },
  ],
  beverages: [
    {
      name: "Hot Saffron Badam Milk",
      price: "₹50",
      desc: "Warm sweetened milk infused with real almonds, saffron, and cardamoms.",
    },
    {
      name: "Fresh Lime Mint Soda",
      price: "₹45",
      desc: "Refreshing carbonated soda infused with freshly squeezed lime and fresh mint.",
    },
  ],
};

const storyDetails = {
  title: "A Family Tradition of Comfort & Hygiene",
  paragraphs: [
    "Established with a core focus of serving travelers passing through Tumakuru, VBIS INN represents clean, simple, and affordable luxury. We believe a budget-friendly stay shouldn't compromise on hygiene, sleep quality, or service.",
    "Managed by local hoteliers, we take pride in offering personalized care. From clean sheets to fresh filter coffee, every detail is overseen by our resident staff to ensure you feel right at home.",
  ],
  stats: [
    { value: "4.1★", label: "840+ Google Reviews" },
    { value: "24/7", label: "Front Desk & Care" },
    { value: "100%", label: "Hygiene & Cleanliness" },
  ],
};

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
  const [activeTab, setActiveTab] = useState<"overview" | "stay" | "dining" | "guide" | "story">(
    "overview"
  );
  const [foodFilter, setFoodFilter] = useState<"breakfast" | "meals" | "beverages">("breakfast");

  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-300">
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

      {/* Hero Section with Asymmetrical Gradient Mask */}
      <section className="relative">
        <img
          src={heroExterior}
          alt="VBIS INN hotel exterior lit up at dusk in Tumakuru"
          width={1600}
          height={1008}
          className="h-[52vh] min-h-[380px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-transparent max-md:bg-ink/75" />
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

      {/* Interactive Explorer Dashboard Tabs */}
      <section className="border-b border-border bg-card sticky top-[69px] z-10 shadow-sm">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex overflow-x-auto scrollbar-none py-1 gap-2 md:justify-center">
            {[
              { id: "overview", label: "Overview", icon: Compass },
              { id: "stay", label: "Stay", icon: BedDouble },
              { id: "dining", label: "Taste of Tumakuru", icon: Utensils },
              { id: "guide", label: "Local Guide", icon: MapPin },
              { id: "story", label: "Our Story", icon: BookOpen },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-4 text-sm font-medium transition-all relative shrink-0 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-brass" : ""}`} />
                  {tab.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brass animate-fade-in" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Content View Area */}
      <main className="min-h-[50vh] bg-background">
        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <section className="animate-fade-in py-16">
            <div className="mx-auto max-w-6xl px-5">
              <div className="grid gap-12 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h2 className="text-4xl text-foreground font-display">
                    Welcome to Tumakuru's Preferred Comfort Stop
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                    Located conveniently close to the NH-48 Bengaluru Highway, VBIS INN is a
                    sanctuary of hospitality designed for leisure, business travelers, and pilgrims. 
                    We prioritize absolute cleanliness, comfortable mattress setups, and quiet corridors 
                    so that you can rest fully.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
                    <div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-brass text-brass" />
                        <span className="text-xl font-semibold">4.1</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">846 Google Reviews</p>
                    </div>
                    <div>
                      <span className="text-xl font-semibold">₹1,729</span>
                      <p className="text-xs text-muted-foreground mt-1">Starting Tariff</p>
                    </div>
                    <div>
                      <span className="text-xl font-semibold">Free</span>
                      <p className="text-xs text-muted-foreground mt-1">Breakfast & Wi-Fi</p>
                    </div>
                    <div>
                      <span className="text-xl font-semibold">24×7</span>
                      <p className="text-xs text-muted-foreground mt-1">Front Desk</p>
                    </div>
                  </div>

                  <div className="mt-10 border border-border bg-card p-6 rounded-sm">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Heart className="h-4 w-4 text-brass" /> Core Amenities Included
                    </h3>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {amenities.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-3 text-sm">
                          <Icon className="h-4 w-4 shrink-0 text-brass" />
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right block: Quick contact card */}
                <div className="border border-border bg-card p-8 rounded-sm shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="hairline-label text-brass">Immediate Booking</span>
                    <h3 className="text-3xl font-display mt-2">Skip Middlemen Commission</h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      By booking directly with the front desk via phone, you avoid third-party agency 
                      commission and get instant reservation confirmation.
                    </p>
                  </div>
                  <div className="mt-8 border-t border-border pt-6">
                    <div className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Front Desk Staff Active
                    </div>
                    <CallButton />
                    <p className="text-xs text-muted-foreground mt-2">No prepayment required.</p>
                  </div>
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="mt-20 border-t border-border pt-16">
                <p className="hairline-label text-muted-foreground">Guest Words</p>
                <h3 className="text-4xl mt-2 font-display">What visitors say about us</h3>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {reviews.map((r) => (
                    <figure key={r.author} className="relative overflow-hidden border-l-2 border-brass bg-card p-6 shadow-sm">
                      <span className="absolute -right-2 -top-6 font-display text-8xl text-brass/10 select-none">“</span>
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-brass text-brass" />
                        ))}
                      </div>
                      <blockquote className="font-display text-lg leading-snug text-foreground">
                        “{r.quote}”
                      </blockquote>
                      <figcaption className="mt-4 text-xs text-muted-foreground">{r.author}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: STAY */}
        {activeTab === "stay" && (
          <section className="animate-fade-in py-16">
            <div className="mx-auto max-w-6xl px-5">
              <div className="grid gap-12 md:grid-cols-12 md:items-start">
                {/* Overlapping Layout Style */}
                <div className="md:col-span-7 relative">
                  <img
                    src={roomImg}
                    alt="VBIS INN double guest room layout"
                    className="aspect-4/3 w-full object-cover shadow-xl rounded-sm"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-brass text-brass-foreground p-6 hidden lg:block rounded-sm shadow-lg max-w-xs">
                    <span className="hairline-label text-[10px]">Strict Standard</span>
                    <h4 className="text-lg font-medium mt-1">100% Cotton Linens</h4>
                    <p className="text-xs mt-1 text-brass-foreground/80">
                      All linens are professionally laundered after every checkout.
                    </p>
                  </div>
                </div>

                <div className="bg-card p-8 md:p-10 md:col-span-5 border border-border shadow-md rounded-sm">
                  <p className="hairline-label text-brass">Tariff Plan</p>
                  <h2 className="mt-2 text-4xl font-display">Decent Rooms, Clear Pricing</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    All rooms feature attach baths, high-speed Wi-Fi, toiletries, and fresh towels. 
                    Tariffs include breakfast.
                  </p>

                  <div className="mt-8 space-y-6">
                    {rooms.map((room, i) => (
                      <div
                        key={room.name}
                        className="group relative flex items-center justify-between border-b border-border pb-4 transition-all duration-300"
                      >
                        <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-brass transition-all duration-300 group-hover:w-full" />
                        <div>
                          <h4 className="text-lg font-medium flex items-center gap-2">
                            {room.name}
                            {i === 0 && (
                              <span className="text-[10px] uppercase tracking-wider bg-accent text-accent-foreground px-1.5 py-0.5 rounded-sm">
                                Best Value
                              </span>
                            )}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{room.detail}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-semibold font-display">{room.from}</span>
                          <p className="text-[10px] text-muted-foreground">/ night</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <CallButton />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: TASTE OF TUMAKURU (DINING) */}
        {activeTab === "dining" && (
          <section className="animate-fade-in py-16">
            <div className="mx-auto max-w-6xl px-5">
              <div className="grid gap-12 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5 md:order-2">
                  <p className="hairline-label text-brass">Authentic Dining</p>
                  <h2 className="mt-2 text-4xl font-display">In-House Bistro & Rooftop</h2>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Start your morning with piping hot idlis and traditional filter coffee. 
                    Our chef curates a blend of local Karnataka specialties, alongside North Indian 
                    and Chinese options for dinner.
                  </p>

                  {/* Filter controls */}
                  <div className="mt-8 flex gap-2 border-b border-border pb-2">
                    {[
                      { id: "breakfast", label: "Breakfast" },
                      { id: "meals", label: "Lunch/Dinner" },
                      { id: "beverages", label: "Beverages" },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setFoodFilter(btn.id as any)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-all ${
                          foodFilter === btn.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-border"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* Selected Menu Category */}
                  <div className="mt-6 space-y-5">
                    {menuItems[foodFilter].map((item) => (
                      <div key={item.name} className="flex justify-between gap-4">
                        <div>
                          <h4 className="text-sm font-medium">{item.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1 max-w-xs">{item.desc}</p>
                        </div>
                        <span className="text-sm font-semibold text-brass font-display shrink-0">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-7 md:order-1 relative">
                  <img
                    src={diningImg}
                    alt="Authentic South Indian Breakfast set at VBIS INN"
                    className="aspect-4/3 w-full object-cover shadow-xl rounded-sm"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: LOCAL GUIDE */}
        {activeTab === "guide" && (
          <section className="animate-fade-in py-16">
            <div className="mx-auto max-w-6xl px-5">
              <div className="grid gap-12 md:grid-cols-12 md:items-start">
                <div className="md:col-span-6">
                  <p className="hairline-label text-brass font-medium">Explore the Region</p>
                  <h2 className="text-4xl mt-2 font-display">Attractions Within Quick Reach</h2>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Tumakuru is home to beautiful hills, historic temples, and scenic lakes. 
                    Use our custom distance index below to plan your trip itinerary.
                  </p>

                  <div className="mt-8 divide-y divide-border border-y border-border">
                    {nearbyWithTips.map((place) => (
                      <div key={place.name} className="py-4 group">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold group-hover:text-brass transition-colors">
                            {place.name}
                          </span>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
                            <span className="flex items-center gap-0.5">
                              <Star className="h-3.5 w-3.5 fill-brass text-brass" />
                              {place.rating}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {place.time}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed max-w-md hidden group-hover:block animate-fade-in">
                          {place.tip}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-6 space-y-6">
                  {/* Google Maps Location Iframe Embed */}
                  <div className="w-full h-[320px] border border-border rounded-sm overflow-hidden shadow-md">
                    <iframe
                      src="https://maps.google.com/maps?q=VBIS%20INN%20Melekote%20TUDA%20Layout%20Tumakuru%20Karnataka%20572101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="VBIS INN Live Location Map"
                    ></iframe>
                  </div>

                  <div className="relative">
                    <img
                      src={nearbyImg}
                      alt="Scenic Jain temple on top of Mandaragiri Hill near Tumakuru"
                      className="aspect-video w-full object-cover shadow-md rounded-sm animate-fade-in"
                    />
                    <div className="absolute top-4 right-4 bg-background/95 backdrop-blur px-4 py-3 rounded-sm border border-border shadow-sm">
                      <span className="text-xs font-semibold text-primary block">Highway Proximity</span>
                      <span className="text-xs text-muted-foreground">Just 5 mins from NH-48</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 5: OUR STORY (ABOUT US) */}
        {activeTab === "story" && (
          <section className="animate-fade-in py-16">
            <div className="mx-auto max-w-6xl px-5">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div>
                  <p className="hairline-label text-brass">Our Story</p>
                  <h2 className="text-4xl mt-2 font-display">{storyDetails.title}</h2>
                  
                  <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                    {storyDetails.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
                    {storyDetails.stats.map((stat, idx) => (
                      <div key={idx}>
                        <span className="text-2xl font-semibold text-primary font-display block">
                          {stat.value}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-border bg-card p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-display mb-4 text-primary">Commitment to our Guests</h3>
                  <ul className="space-y-4">
                    {[
                      {
                        title: "Strict Hygiene Checks",
                        desc: "Sanitized corridors, spotless washrooms, and deep-cleaned mattresses prior to guest arrival.",
                      },
                      {
                        title: "Genuine Local Hospitality",
                        desc: "Our hosts are native to Tumakuru and can guide you with tailored sightseeing tips.",
                      },
                      {
                        title: "No Hidden Costs",
                        desc: "The price we state is the price you pay. Free Wi-Fi, water, and parking are standard.",
                      },
                    ].map((policy) => (
                      <li key={policy.title} className="flex gap-3">
                        <ChevronRight className="h-4 w-4 shrink-0 text-brass mt-1" />
                        <div>
                          <h4 className="text-sm font-semibold">{policy.title}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {policy.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

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
