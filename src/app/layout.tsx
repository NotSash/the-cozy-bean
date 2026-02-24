import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/siteData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Cozy Bean | Best Coffee Shop in Chennai",
  description:
    "Visit The Cozy Bean for freshly brewed coffee, homemade snacks, and a cozy ambiance in Anna Nagar, Chennai. Open 7 days a week.",
  keywords: [
    "coffee shop chennai",
    "best cafe chennai",
    "coffee near me",
    "anna nagar cafe",
    "filter coffee chennai",
    "cozy bean",
  ],
  openGraph: {
    title: "The Cozy Bean | Best Coffee Shop in Chennai",
    description:
      "Visit The Cozy Bean for freshly brewed coffee, homemade snacks, and a cozy ambiance in Anna Nagar, Chennai. Open 7 days a week.",
    type: "website",
    locale: "en_IN",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://thecozybean.in",
  name: siteData.cafeName,
  description:
    "Visit The Cozy Bean for freshly brewed coffee, homemade snacks, and a cozy ambiance in Anna Nagar, Chennai. Open 7 days a week.",
  telephone: siteData.phone,
  email: siteData.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "42, Anna Nagar East",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600102",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "23:00",
    },
  ],
  priceRange: "₹₹",
  servesCuisine: ["Coffee", "Tea", "Snacks", "Desserts"],
  image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
  url: "https://thecozybean.in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}