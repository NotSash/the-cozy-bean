"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Menu, X, MessageCircle } from "lucide-react";
import { siteData, navLinks } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  // Handle scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${id}`);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: "-80px 0px -50% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Handle nav link click
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }

      closeMobileMenu();
    },
    [closeMobileMenu]
  );

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(siteData.whatsappMessage)}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom flex h-full items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 transition-colors duration-300"
            aria-label={`${siteData.cafeName} - Go to home`}
          >
            <Coffee
              className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            />
            <span
              className={`font-heading text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-secondary" : "text-white"
              }`}
            >
              {siteData.cafeName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href
                    ? isScrolled
                      ? "text-primary"
                      : "text-white"
                    : isScrolled
                      ? "text-secondary hover:text-primary"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            {/* WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-whatsapp px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-whatsapp/90 hover:shadow-lg"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex items-center justify-center md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-7 w-7 transition-colors duration-300 ${
                  isScrolled ? "text-secondary" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-7 w-7 transition-colors duration-300 ${
                  isScrolled ? "text-secondary" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Slide-in Panel */}
            <motion.div
              id="mobile-menu"
              className="fixed right-0 top-0 z-50 flex h-full w-[300px] max-w-[80vw] flex-col bg-background shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Panel Header */}
              <div className="flex h-20 items-center justify-between border-b border-accent px-6">
                <div className="flex items-center gap-2">
                  <Coffee className="h-7 w-7 text-primary" />
                  <span className="font-heading text-lg font-bold text-secondary">
                    {siteData.cafeName}
                  </span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-accent"
                >
                  <X className="h-6 w-6 text-secondary" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-1 flex-col px-6 pt-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`border-b border-accent/50 py-4 text-lg font-medium transition-colors duration-300 ${
                      activeSection === link.href
                        ? "text-primary"
                        : "text-secondary hover:text-primary"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* WhatsApp Button at Bottom */}
              <div className="border-t border-accent p-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-whatsapp/90"
                  onClick={closeMobileMenu}
                  aria-label="Order on WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                  Order on WhatsApp
                </a>

                {/* Contact Info */}
                <p className="mt-4 text-center text-sm text-text-muted">
                  {siteData.phone}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}