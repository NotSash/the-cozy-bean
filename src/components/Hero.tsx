"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80')",
        }}
        aria-hidden="true"
      />

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
              ☕ Welcome to {siteData.cafeName}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            {siteData.heroHeading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg md:text-xl"
            variants={itemVariants}
          >
            {siteData.heroSubheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <a
              href="#menu"
              onClick={(e) => handleScrollToSection(e, "#menu")}
              className="w-full rounded-full bg-primary px-8 py-4 text-base font-semibold text-secondary transition-all duration-300 hover:bg-primary/90 hover:shadow-lg sm:w-auto"
            >
              View Menu
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "#contact")}
              className="w-full rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-secondary sm:w-auto"
            >
              Visit Us
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a
            href="#about"
            onClick={(e) => handleScrollToSection(e, "#about")}
            className="flex flex-col items-center gap-2 text-white/60 transition-colors duration-300 hover:text-white"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}