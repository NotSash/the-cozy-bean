"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/siteData";

export default function Testimonials() {
  const headerVariants = {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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

  // Get initials from author name
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Label */}
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>

          {/* Heading */}
          <h2 className="mt-4 font-heading text-4xl font-bold text-secondary md:text-5xl">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={cardVariants}
            >
              {/* Decorative Quote Icon */}
              <div className="absolute left-6 top-4" aria-hidden="true">
                <Quote className="h-12 w-12 text-primary/20" />
              </div>

              {/* Star Rating */}
              <div className="relative z-10 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="mt-4 text-lg italic leading-relaxed text-text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author Section */}
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {getInitials(testimonial.author)}
                </div>

                {/* Author Info */}
                <div>
                  <p className="font-semibold text-secondary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-muted">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-text-muted">
            Join thousands of happy customers who start their day with us.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-4 inline-flex items-center gap-2 font-semibold text-primary transition-colors duration-300 hover:text-primary/80"
          >
            Visit us today
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}