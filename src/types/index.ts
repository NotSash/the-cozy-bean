export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "coffee" | "tea" | "snacks" | "desserts";
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
}

export interface SiteData {
  cafeName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  whatsappNumber: string;
  whatsappMessage: string;
  hours: {
    weekday: string;
    weekend: string;
  };
  heroHeading: string;
  heroSubheading: string;
  aboutText: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface Specialty {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}