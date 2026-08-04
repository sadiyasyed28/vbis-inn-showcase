import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  Menu,
  X,
  Sun,
  Moon,
  Globe,
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

// Multi-language Translation Dictionary
const translations = {
  en: {
    dashboard: "Dashboard",
    overview: "Overview",
    stay: "Stay",
    dining: "Taste of Tumakuru",
    guide: "Local Guide",
    story: "Our Story",
    call: "Call",
    callDesk: "Call Front Desk",
    getDirections: "Get directions",
    starRating: "3-star hotel · Melekote, Tumakuru",
    heroTitle: "A calm, comfortable stay in the heart of Tumakuru",
    heroDesc: "Clean AC rooms, complimentary breakfast and secure parking — minutes from Siddaganga Mutt, Amanikere and the Bengaluru highway.",
    reviewsCount: "846 Google Reviews",
    startingTariff: "Starting Tariff",
    perNight: "per night",
    breakfastWifi: "Breakfast & Wi-Fi",
    frontDesk247: "Front Desk",
    welcomeTitle: "Welcome to Tumakuru's Preferred Comfort Stop",
    welcomeDesc: "Located conveniently close to the NH-48 Bengaluru Highway, VBIS INN is a sanctuary of hospitality designed for leisure, business travelers, and pilgrims. We prioritize absolute cleanliness, comfortable mattress setups, and quiet corridors so that you can rest fully.",
    amenitiesTitle: "Core Amenities Included",
    bookingTitle: "Immediate Booking",
    bookingDesc: "By booking directly with the front desk via phone, you avoid third-party agency commission and get instant reservation confirmation.",
    noPrepayment: "No prepayment required.",
    guestWords: "Guest Words",
    reviewsSubtitle: "What visitors say about us",
    tariffTitle: "Decent Rooms, Clear Pricing",
    tariffDesc: "All rooms feature attach baths, high-speed Wi-Fi, toiletries, and fresh towels. Tariffs include breakfast.",
    bestValue: "Best Value",
    bistroTitle: "In-House Bistro & Rooftop",
    bistroDesc: "Start your morning with piping hot idlis and traditional filter coffee. Our chef curates a blend of local Karnataka specialties, alongside North Indian and Chinese options for dinner.",
    breakfastTab: "Breakfast",
    mealsTab: "Lunch/Dinner",
    beveragesTab: "Beverages",
    exploreRegion: "Explore the Region",
    guideTitle: "Attractions Within Quick Reach",
    guideDesc: "Tumakuru is home to beautiful hills, historic temples, and scenic lakes. Click on any attraction to open directions in Google Maps.",
    highwayProx: "Highway Proximity",
    highwayProxDesc: "Just 5 mins from NH-48",
    storyTitle: "A Family Tradition of Comfort & Hygiene",
    commitmentTitle: "Commitment to our Guests",
    cottonLinens: "100% Cotton Linens",
    laundryPolicy: "All linens are professionally laundered after every checkout.",
    standardCheckIn: "Standard Check-in is 12:00 PM; check-out is 11:00 AM. Flexible timings upon availability.",
  },
  kn: {
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    overview: "ಅವಲೋಕನ",
    stay: "ಕೊಠಡಿಗಳು",
    dining: "ತುಮಕೂರಿನ ರುಚಿ",
    guide: "ಸ್ಥಳೀಯ ಮಾರ್ಗದರ್ಶಿ",
    story: "ನಮ್ಮ ಕಥೆ",
    call: "ಕರೆ ಮಾಡಿ",
    callDesk: "ಸ್ವಾಗತಕಾರರಿಗೆ ಕರೆ ಮಾಡಿ",
    getDirections: "ಮಾರ್ಗಸೂಚಿ ಪಡೆಯಿರಿ",
    starRating: "೩-ಸ್ಟಾರ್ ಹೋಟೆಲ್ · ಮೇಲಕೋಟೆ, ತುಮಕೂರು",
    heroTitle: "ತುಮಕೂರಿನ ಹೃದಯಭಾಗದಲ್ಲಿ ಪ್ರಶಾಂತ ಮತ್ತು ಆರಾಮದಾಯಕ ವಾಸ್ತವ್ಯ",
    heroDesc: "ಸ್ವಚ್ಛವಾದ ಎಸಿ ಕೊಠಡಿಗಳು, ಉಚಿತ ಉಪಾಹಾರ ಮತ್ತು ಸುರಕ್ಷಿತ ಪಾರ್ಕಿಂಗ್ — ಸಿದ್ಧಗಂಗಾ ಮಠ, ಅಮಾನಿಕೆರೆ ಮತ್ತು ಬೆಂಗಳೂರು ಹೆದ್ದಾರಿಯಿಂದ ಕೆಲವೇ ನಿಮಿಷಗಳ ದೂರದಲ್ಲಿದೆ.",
    reviewsCount: "೮೪೬ ಗೂಗಲ್ ವಿಮರ್ಶೆಗಳು",
    startingTariff: "ಪ್ರಾರಂಭಿಕ ದರ",
    perNight: "ಪ್ರತಿ ರಾತ್ರಿಗೆ",
    breakfastWifi: "ಉಪಾಹಾರ ಮತ್ತು ವೈ-ಫೈ",
    frontDesk247: "ಸ್ವಾಗತ ಕೌಂಟರ್",
    welcomeTitle: "ತುಮಕೂರಿನ ಆದ್ಯತೆಯ ಆರಾಮದಾಯಕ ತಾಣಕ್ಕೆ ಸುಸ್ವಾಗತ",
    welcomeDesc: "NH-48 ಬೆಂಗಳೂರು ಹೆದ್ದಾರಿಗೆ ಹತ್ತಿರದಲ್ಲಿರುವ VBIS INN ಪ್ರವಾಸಿಗರು, ಉದ್ಯಮಿಗಳು ಮತ್ತು ಯಾತ್ರಾರ್ಥಿಗಳಿಗೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಆತಿಥ್ಯದ ತಾಣವಾಗಿದೆ. ನೀವು ವಿಶ್ರಾಂತಿ ಪಡೆಯಲು ಸ್ವಚ್ಛತೆ, ಆರಾಮದಾಯಕ ಹಾಸಿಗೆಗಳು ಮತ್ತು ಶಾಂತ ಕಾರಿಡಾರ್‌ಗಳಿಗೆ ನಾವು ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ.",
    amenitiesTitle: "ಒಳಗೊಂಡಿರುವ ಪ್ರಮುಖ ಸೌಲಭ್ಯಗಳು",
    bookingTitle: "ತತ್ಕ್ಷಣದ ಬುಕಿಂಗ್",
    bookingDesc: "ಫೋನ್ ಮೂಲಕ ನೇರವಾಗಿ ಸ್ವಾಗತಕಾರರೊಂದಿಗೆ ಬುಕ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಸಂಸ್ಥೆಗಳ ಕಮಿಷನ್ ತಪ್ಪಿಸಬಹುದು ಮತ್ತು ತಕ್ಷಣದ ದೃಢೀಕರಣ ಪಡೆಯಬಹುದು.",
    noPrepayment: "ಯಾವುದೇ ಮುಂಗಡ ಪಾವತಿ ಅಗತ್ಯವಿಲ್ಲ.",
    guestWords: "ಅತಿಥಿಗಳ ಮಾತುಗಳು",
    reviewsSubtitle: "ನಮ್ಮ ಬಗ್ಗೆ ಸಂದರ್ಶಕರು ಏನು ಹೇಳುತ್ತಾರೆ",
    tariffTitle: "ಉತ್ತಮ ಕೊಠಡಿಗಳು, ಪಾರದರ್ಶಕ ದರಗಳು",
    tariffDesc: "ಎಲ್ಲಾ ಕೊಠಡಿಗಳು ಅಟ್ಯಾಚ್ಡ್ ಬಾತ್‌ರೂಮ್, ಹೈ-ಸ್ಪೀಡ್ ವೈ-ಫೈ ಮತ್ತು ತಾಜಾ ಟವೆಲ್‌ಗಳನ್ನು ಹೊಂದಿವೆ. ದರಗಳು ಉಪಾಹಾರವನ್ನು ಒಳಗೊಂಡಿವೆ.",
    bestValue: "ಅತ್ಯುತ್ತಮ ಮೌಲ್ಯ",
    bistroTitle: "ಹೋಟೆಲ್ ರೆಸ್ಟೋರೆಂಟ್ ಮತ್ತು ರೂಫ್‌ಟಾಪ್",
    bistroDesc: "ಬಿಸಿ ಬಿಸಿ ಇಡ್ಲಿ ವಡೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಫಿಲ್ಟರ್ ಕಾಫಿಯೊಂದಿಗೆ ನಿಮ್ಮ ಬೆಳಗನ್ನು ಪ್ರಾರಂಭಿಸಿ. ನಮ್ಮ ಬಾಣಸಿಗರು ಸ್ಥಳೀಯ ಕರ್ನಾಟಕದ ವಿಶೇಷತೆಗಳೊಂದಿಗೆ ಉತ್ತರ ಭಾರತೀಯ ಮತ್ತು ಚೈನೀಸ್ ಭಕ್ಷ್ಯಗಳನ್ನು ನೀಡುತ್ತಾರೆ.",
    breakfastTab: "ಉಪಾಹಾರ",
    mealsTab: "ಊಟ/ರಾತ್ರಿ ಊಟ",
    beveragesTab: "ಪಾನೀಯಗಳು",
    exploreRegion: "ಪ್ರದೇಶವನ್ನು ಅನ್ವೇಷಿಸಿ",
    guideTitle: "ಹತ್ತಿರದ ಪ್ರವಾಸಿ ತಾಣಗಳು",
    guideDesc: "ತುಮಕೂರು ಸುಂದರವಾದ ಬೆಟ್ಟಗಳು, ಐತಿಹಾಸಿಕ ದೇವಾಲಯಗಳು ಮತ್ತು ಕೆರೆಗಳಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದೆ. ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ತೆರೆಯಲು ಯಾವುದೇ ತಾಣದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    highwayProx: "ಹೆದ್ದಾರಿಗೆ ಸಾಮೀಪ್ಯ",
    highwayProxDesc: "ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿಯಿಂದ ಕೇವಲ ೫ ನಿಮಿಷ",
    storyTitle: "ಆರಾಮ ಮತ್ತು ನೈರ್ಮಲ್ಯದ ಕೌಟುಂಬಿಕ ಸಂಪ್ರದಾಯ",
    commitmentTitle: "ನಮ್ಮ ಅತಿಥಿಗಳಿಗೆ ಬದ್ಧತೆ",
    cottonLinens: "೧೦೦% ಹತ್ತಿ ಬೆಡ್ ಶೀಟ್‌ಗಳು",
    laundryPolicy: "ಪ್ರತಿ ಚೆಕ್‌ಔಟ್ ನಂತರ ಬೆಡ್ ಶೀಟ್‌ಗಳನ್ನು ವೃತ್ತಿಪರವಾಗಿ ತೊಳೆಯಲಾಗುತ್ತದೆ.",
    standardCheckIn: "ಚೆಕ್-ಇನ್ ಮಧ್ಯಾಹ್ನ 12:00; ಚೆಕ್-ಔಟ್ ಬೆಳಗ್ಗೆ 11:00. ಲಭ್ಯತೆಗೆ ಅನುಗುಣವಾಗಿ ಹೊಂದಿಕೊಳ್ಳುವ ಸಮಯ.",
  },
  hi: {
    dashboard: "डैशबोर्ड",
    overview: "अवलोकन",
    stay: "कमरे",
    dining: "तुमकुर का स्वाद",
    guide: "स्थानीय गाइड",
    story: "हमारी कहानी",
    call: "कॉल करें",
    callDesk: "रिसेप्शन पर कॉल करें",
    getDirections: "दिशा-निर्देश",
    starRating: "3-स्टार होटल · मेलेकोटे, तुमकुर",
    heroTitle: "तुमकुर के केंद्र में एक शांत, आरामदायक प्रवास",
    heroDesc: "स्वच्छ एसी कमरे, मानार्थ नाश्ता और सुरक्षित पार्किंग — सिद्धगंगा मठ, अमानिकेरे और बेंगलुरु राजमार्ग से कुछ ही मिनट की दूरी पर।",
    reviewsCount: "846 Google समीक्षाएं",
    startingTariff: "प्रारंभिक किराया",
    perNight: "प्रति रात",
    breakfastWifi: "नाश्ता और वाई-फाई",
    frontDesk247: "रिसेप्शन डेस्क",
    welcomeTitle: "तुमकुर के पसंदीदा आरामदायक पड़ाव में आपका स्वागत है",
    welcomeDesc: "NH-48 बेंगलुरु राजमार्ग के पास स्थित, VBIS INN यात्रियों, व्यवसायियों और तीर्थयात्रियों के लिए डिज़ाइन किया गया आतिथ्य का एक सुंदर स्थान है। हम स्वच्छता, आरामदायक बिस्तरों और शांत वातावरण को प्राथमिकता देते हैं ताकि आप पूरी तरह आराम कर सकें।",
    amenitiesTitle: "शामिल मुख्य सुविधाएं",
    bookingTitle: "तत्काल बुकिंग",
    bookingDesc: "फोन द्वारा सीधे फ्रंट डेस्क से बुकिंग करके, आप बिचौलियों के कमीशन से बचते हैं और तुरंत पुष्टि प्राप्त करते हैं।",
    noPrepayment: "किसी अग्रिम भुगतान की आवश्यकता नहीं है।",
    guestWords: "अतिथियों के शब्द",
    reviewsSubtitle: "हमारे बारे में मेहमान क्या कहते हैं",
    tariffTitle: "शानदार कमरे, स्पष्ट मूल्य",
    tariffDesc: "सभी कमरों में अटैच बाथरूम, हाई-स्पीड वाई-फाई और तौलिये शामिल हैं। किराए में नाश्ता शामिल है।",
    bestValue: "सर्वोत्तम मूल्य",
    bistroTitle: "इन-हाउस बिस्ट्रो और रूफटॉप",
    bistroDesc: "गर्मागर्म इडली वड़ा और पारंपरिक फ़िल्टर कॉफ़ी के साथ अपने दिन की शुरुआत करें। हमारे शेफ कर्नाटक के स्थानीय व्यंजनों के साथ उत्तर भारतीय और चीनी भोजन परोसते हैं।",
    breakfastTab: "नाश्ता",
    mealsTab: "लंच/डिनर",
    beveragesTab: "पेय पदार्थ",
    exploreRegion: "क्षेत्र का अन्वेषण करें",
    guideTitle: "आस-पास के आकर्षण",
    guideDesc: "तुमकुर सुंदर पहाड़ियों, ऐतिहासिक मंदिरों और झीलों का घर है। मानचित्र खोलने के लिए किसी भी आकर्षण पर क्लिक करें।",
    highwayProx: "राजमार्ग से निकटता",
    highwayProxDesc: "NH-48 से केवल 5 मिनट दूर",
    storyTitle: "आराम और स्वच्छता की पारिवारिक परंपरा",
    commitmentTitle: "हमारे मेहमानों के प्रति प्रतिबद्धता",
    cottonLinens: "100% सूती बेडशीट",
    laundryPolicy: "प्रत्येक चेकआउट के बाद बिस्तरों की पेशेवर धुलाई की जाती है।",
    standardCheckIn: "चेक-इन दोपहर 12:00 बजे; चेक-आउट सुबह 11:00 बजे। उपलब्धता के आधार पर लचीला समय।",
  },
};

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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sri+Kote+Anjaneya+Statue+Tumakuru",
  },
  {
    name: "Amanikere Park",
    time: "8 min",
    rating: "4.2",
    tip: "Beautiful lakefront park with walkways and boating. Great for peaceful evening walks.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Amanikere+Park+Tumakuru",
  },
  {
    name: "Shree Siddaganga Mutt",
    time: "21 min",
    rating: "4.8",
    tip: "Historic and sacred spiritual center offering daily free meals to thousands of pilgrims.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shree+Siddaganga+Mutt+Tumakuru",
  },
  {
    name: "Mandaragiri Hill",
    time: "26 min",
    rating: "4.6",
    tip: "Unique peacock-feather shaped Jain temple with a climb of 400 steps. Scenic sunset views.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mandaragiri+Hill+Tumakuru",
  },
  {
    name: "Namada Chilume Deer Park",
    time: "31 min",
    rating: "4.5",
    tip: "Wooded deer park with nature trails leading to a spring.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Namada+Chilume+Deer+Park+Tumakuru",
  },
  {
    name: "Ramadevara Betta",
    time: "35 min",
    rating: "4.4",
    tip: "Hills featuring stairs leading to multiple temples, plus sweeping views.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ramadevara+Betta+Tumakuru",
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
  }),
});

function CallButton({
  variant = "solid",
  label = "Call",
}: {
  variant?: "solid" | "outline";
  label?: string;
}) {
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
      {label} {PHONE_DISPLAY}
    </a>
  );
}

function Index() {
  const [activeTab, setActiveTab] = useState<"overview" | "stay" | "dining" | "guide" | "story">(
    "overview"
  );
  const [foodFilter, setFoodFilter] = useState<"breakfast" | "meals" | "beverages">("breakfast");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "kn" | "hi">("en");
  const [darkMode, setDarkMode] = useState(false);

  // Initialize Theme from system or local storage
  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-300">
      {/* Universal Sticky Header containing site name, inline desktop navbar, theme toggle and language translator */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            {/* Hamburger Button for Mobile Drawer */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-foreground hover:bg-secondary focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div>
              <span className="font-display text-2xl leading-none">VBIS INN</span>
              <span className="ml-3 hairline-label text-muted-foreground hidden lg:inline-block">
                Tumakuru
              </span>
            </div>

            {/* Desktop Inline Navigation Bar right after the name of the site */}
            <nav className="hidden md:flex items-center ml-8 gap-1">
              {[
                { id: "overview", label: t.overview, icon: Compass },
                { id: "stay", label: t.stay, icon: BedDouble },
                { id: "dining", label: t.dining, icon: Utensils },
                { id: "guide", label: t.guide, icon: MapPin },
                { id: "story", label: t.story, icon: BookOpen },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-sm transition-all relative ${
                      isActive
                        ? "text-primary bg-secondary/80 font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${isActive ? "text-brass" : ""}`} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary transition-colors text-foreground focus:outline-none"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5 text-brass" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Translation Selection Menu */}
            <div className="relative flex items-center bg-secondary hover:bg-border rounded-md px-2 py-1.5 transition-colors text-xs font-medium gap-1 text-foreground">
              <Globe className="h-3.5 w-3.5 text-muted-foreground" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as any)}
                className="bg-transparent pr-1 font-semibold focus:outline-none cursor-pointer text-foreground"
                aria-label="Select Language"
              >
                <option value="en" className="bg-card text-foreground">EN</option>
                <option value="kn" className="bg-card text-foreground">ಕನ್ನಡ</option>
                <option value="hi" className="bg-card text-foreground">हिंदी</option>
              </select>
            </div>

            {/* Quick Call Button */}
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{t.call}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay named as Dashboard */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-ink/40 backdrop-blur-xs animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 bottom-0 z-40 w-64 bg-background border-r border-border p-6 flex flex-col gap-6 shadow-2xl animate-slide-in-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-display text-2xl leading-none text-primary">
                {t.dashboard}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {[
                { id: "overview", label: t.overview, icon: Compass },
                { id: "stay", label: t.stay, icon: BedDouble },
                { id: "dining", label: t.dining, icon: Utensils },
                { id: "guide", label: t.guide, icon: MapPin },
                { id: "story", label: t.story, icon: BookOpen },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-medium text-left transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${isActive ? "text-brass-foreground" : "text-brass"}`}
                    />
                    {tab.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-border pt-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 w-full"
              >
                <Phone className="h-4 w-4" />
                {t.callDesk}
              </a>
            </div>
          </div>
        </div>
      )}

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
            <p className="hairline-label text-brass">{t.starRating}</p>
            <h1 className="mt-4 max-w-2xl text-5xl leading-[1.05] text-background sm:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-base text-background/80">
              {t.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-background">
              <CallButton label={t.call} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-background/50 px-6 py-3 text-sm font-medium transition-colors hover:bg-background/10"
              >
                <Navigation className="h-4 w-4" />
                {t.getDirections}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Horizontal Tabs scrollbar - remains as secondary helper on mobile */}
      <section className="border-b border-border bg-card sticky top-[69px] z-10 shadow-sm md:hidden">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex overflow-x-auto scrollbar-none py-1 gap-2">
            {[
              { id: "overview", label: t.overview, icon: Compass },
              { id: "stay", label: t.stay, icon: BedDouble },
              { id: "dining", label: t.dining, icon: Utensils },
              { id: "guide", label: t.guide, icon: MapPin },
              { id: "story", label: t.story, icon: BookOpen },
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
                    {t.welcomeTitle}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                    {t.welcomeDesc}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
                    <div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-brass text-brass" />
                        <span className="text-xl font-semibold">4.1</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{t.reviewsCount}</p>
                    </div>
                    <div>
                      <span className="text-xl font-semibold">₹1,729</span>
                      <p className="text-xs text-muted-foreground mt-1">{t.startingTariff}</p>
                    </div>
                    <div>
                      <span className="text-xl font-semibold">Free</span>
                      <p className="text-xs text-muted-foreground mt-1">{t.breakfastWifi}</p>
                    </div>
                    <div>
                      <span className="text-xl font-semibold">24×7</span>
                      <p className="text-xs text-muted-foreground mt-1">{t.frontDesk247}</p>
                    </div>
                  </div>

                  <div className="mt-10 border border-border bg-card p-6 rounded-sm">
                    <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                      <Heart className="h-4 w-4 text-brass" /> {t.amenitiesTitle}
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

                {/* Right contact card */}
                <div className="border border-border bg-card p-8 rounded-sm shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="hairline-label text-brass">{t.bookingTitle}</span>
                    <h3 className="text-3xl font-display mt-2">Skip Middlemen Commission</h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {t.bookingDesc}
                    </p>
                  </div>
                  <div className="mt-8 border-t border-border pt-6">
                    <div className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Front Desk Staff Active
                    </div>
                    <CallButton label={t.call} />
                    <p className="text-xs text-muted-foreground mt-2">{t.noPrepayment}</p>
                  </div>
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="mt-20 border-t border-border pt-16">
                <p className="hairline-label text-muted-foreground">{t.guestWords}</p>
                <h3 className="text-4xl mt-2 font-display">{t.reviewsSubtitle}</h3>
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
                <div className="md:col-span-7 relative">
                  <img
                    src={roomImg}
                    alt="VBIS INN double guest room layout"
                    className="aspect-4/3 w-full object-cover shadow-xl rounded-sm"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-brass text-brass-foreground p-6 hidden lg:block rounded-sm shadow-lg max-w-xs">
                    <span className="hairline-label text-[10px]">Strict Standard</span>
                    <h4 className="text-lg font-medium mt-1">{t.cottonLinens}</h4>
                    <p className="text-xs mt-1 text-brass-foreground/80">
                      {t.laundryPolicy}
                    </p>
                  </div>
                </div>

                <div className="bg-card p-8 md:p-10 md:col-span-5 border border-border shadow-md rounded-sm">
                  <p className="hairline-label text-brass">Tariff Plan</p>
                  <h2 className="mt-2 text-4xl font-display">{t.tariffTitle}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {t.tariffDesc}
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
                                {t.bestValue}
                              </span>
                            )}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{room.detail}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-semibold font-display">{room.from}</span>
                          <p className="text-[10px] text-muted-foreground">/ {t.perNight}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <CallButton label={t.call} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: DINING */}
        {activeTab === "dining" && (
          <section className="animate-fade-in py-16">
            <div className="mx-auto max-w-6xl px-5">
              <div className="grid gap-12 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5 md:order-2">
                  <p className="hairline-label text-brass">Authentic Dining</p>
                  <h2 className="mt-2 text-4xl font-display">{t.bistroTitle}</h2>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {t.bistroDesc}
                  </p>

                  {/* Filter controls */}
                  <div className="mt-8 flex gap-2 border-b border-border pb-2">
                    {[
                      { id: "breakfast", label: t.breakfastTab },
                      { id: "meals", label: t.mealsTab },
                      { id: "beverages", label: t.beveragesTab },
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
                  <p className="hairline-label text-brass font-medium">{t.exploreRegion}</p>
                  <h2 className="text-4xl mt-2 font-display">{t.guideTitle}</h2>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {t.guideDesc}
                  </p>

                  <div className="mt-8 divide-y divide-border border-y border-border">
                    {nearbyWithTips.map((place) => (
                      <div key={place.name} className="py-4 group">
                        <div className="flex justify-between items-center">
                          <a
                            href={place.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold hover:text-brass hover:underline transition-colors flex items-center gap-1.5"
                          >
                            <span>{place.name}</span>
                            <Navigation className="h-3 w-3 text-brass opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
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
                      <span className="text-xs font-semibold text-primary block">{t.highwayProx}</span>
                      <span className="text-xs text-muted-foreground">{t.highwayProxDesc}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 5: OUR STORY */}
        {activeTab === "story" && (
          <section className="animate-fade-in py-16">
            <div className="mx-auto max-w-6xl px-5">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div>
                  <p className="hairline-label text-brass">{t.story}</p>
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
                  <h3 className="text-2xl font-display mb-4 text-primary">{t.commitmentTitle}</h3>
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
