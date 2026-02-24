"use client";

import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { siteData, navLinks } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
    },
  ];

  return (
    <footer className="bg-secondary text-white/80">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1 - Brand */}
          <div>
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="inline-flex items-center gap-2"
            >
              <Coffee className="h-8 w-8 text-primary" />
              <span className="font-heading text-2xl font-bold text-white">
                {siteData.cafeName}
              </span>
            </a>

            {/* Tagline */}
            <p className="mt-4 text-white/60">{siteData.tagline}</p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-primary"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-1 text-white/60 transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-white/60">{siteData.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a
                  href={`tel:${siteData.phone.replace(/\s/g, "")}`}
                  className="text-white/60 transition-colors duration-300 hover:text-primary"
                >
                  {siteData.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a
                  href={`mailto:${siteData.email}`}
                  className="text-white/60 transition-colors duration-300 hover:text-primary"
                >
                  {siteData.email}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href={`https://wa.me/${siteData.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition-colors duration-300 hover:text-primary"
                >
                  +91 {siteData.whatsappNumber.slice(2)}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-white/40">
              © {currentYear} {siteData.cafeName}. All rights reserved.
            </p>

            {/* Made With Love */}
            <p className="text-sm text-white/40">
              Crafted with{" "}
              <span className="text-red-400" aria-label="love">
                ❤️
              </span>{" "}
              by Sashwath
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}