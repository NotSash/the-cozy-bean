"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function About() {
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Decorative Background Element */}
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-primary/20 lg:-bottom-6 lg:-right-6"
              aria-hidden="true"
            />

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
                alt="Barista carefully preparing a fresh cup of coffee at The Cozy Bean"
                width={600}
                height={700}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -left-4 rounded-xl bg-white p-4 shadow-lg lg:-left-8 lg:p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="font-heading text-3xl font-bold text-primary lg:text-4xl">
                {siteData.stats[0].value}
              </p>
              <p className="mt-1 text-sm text-text-muted">
                {siteData.stats[0].label}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section Label */}
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </span>

            {/* Heading */}
            <h2 className="mt-4 font-heading text-4xl font-bold text-secondary md:text-5xl">
              Our Story
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              {siteData.aboutText}
            </p>

            {/* Stats Row */}
            <motion.div
              className="mt-10 grid grid-cols-3 gap-4 border-t border-accent pt-10 lg:gap-8"
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {siteData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative text-center lg:text-left"
                  variants={statItemVariants}
                >
                  <p className="font-heading text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-text-muted md:text-sm">
                    {stat.label}
                  </p>

                  {/* Divider (visible on desktop, except last item) */}
                  {index < siteData.stats.length - 1 && (
                    <div
                      className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-accent lg:block"
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Optional CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-secondary/90 hover:shadow-lg"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}