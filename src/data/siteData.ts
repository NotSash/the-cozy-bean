import type { SiteData, NavLink, Specialty, Testimonial, GalleryImage } from "@/types";

export const siteData: SiteData = {
  cafeName: "The Cozy Bean",
  tagline: "Brewing happiness since 2020",
  phone: "+91 98765 43210",
  email: "hello@thecozybean.in",
  address: "42, Anna Nagar East, Chennai - 600102",
  whatsappNumber: "919876543210",
  whatsappMessage: "Hi! I'd like to place an order from The Cozy Bean",
  hours: {
    weekday: "Monday - Friday: 7:00 AM - 10:00 PM",
    weekend: "Saturday - Sunday: 8:00 AM - 11:00 PM",
  },
  heroHeading: "Where Every Cup Tells a Story",
  heroSubheading:
    "Freshly brewed coffee, homemade snacks, and good vibes in the heart of Chennai",
  aboutText:
    "Founded in 2020, The Cozy Bean was born from a simple dream — to create a cozy corner in Chennai where coffee lovers can escape the chaos of daily life. We source our beans from local Indian farms and roast them fresh every week. Every cup is crafted with love, every snack is made in-house, and every customer becomes family.",
  stats: [
    { value: "5+", label: "Years of Brewing" },
    { value: "10,000+", label: "Happy Customers" },
    { value: "25+", label: "Menu Items" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const specialties: Specialty[] = [
  {
    icon: "Coffee",
    title: "Freshly Roasted Beans",
    description:
      "We roast our beans in-house every week for maximum freshness",
  },
  {
    icon: "Leaf",
    title: "100% Natural Ingredients",
    description:
      "No artificial flavors or preservatives — just pure goodness",
  },
  {
    icon: "Heart",
    title: "Made with Love",
    description:
      "Every item is handcrafted by our passionate team",
  },
  {
    icon: "Clock",
    title: "Open 7 Days",
    description:
      "From early morning to late evening, we're here for you",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Best filter coffee in Chennai! I come here every morning before work. The staff knows my order by heart now.",
    author: "Priya M.",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The ambiance is perfect for working remotely. Great WiFi, amazing coffee, and the brownies are to die for!",
    author: "Rahul S.",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Found my new favorite spot! The cold brew is fantastic and the prices are very reasonable.",
    author: "Ananya K.",
    rating: 5,
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80",
    alt: "Warm and inviting café interior with wooden furniture and ambient lighting",
    span: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
    alt: "Barista pouring fresh coffee into a ceramic cup",
    span: "normal",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
    alt: "Beautiful latte art heart design in a white coffee cup",
    span: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80",
    alt: "Delicious breakfast spread with coffee and fresh pastries",
    span: "wide",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80",
    alt: "Cozy café corner with comfortable seating and warm lights",
    span: "tall",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
    alt: "Skilled barista preparing specialty espresso drink",
    span: "normal",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    alt: "Outdoor café seating area with plants and natural light",
    span: "normal",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=800&q=80",
    alt: "Friends enjoying coffee and conversation at café table",
    span: "wide",
  },
];