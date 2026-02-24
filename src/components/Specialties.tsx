"use client";

import { motion } from "framer-motion";
import { Coffee, Leaf, Heart, Clock, LucideIcon } from "lucide-react";
import { specialties } from "@/data/siteData";

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Leaf,
  Heart,
  Clock,
};

export default function Specialties() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section className="section-padding bg-accent/30">
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
            Why Choose Us
          </span>

          {/* Heading */}
          <h2 className="mt-4 font-heading text-4xl font-bold text-secondary md:text-5xl">
            What Makes Us Special
          </h2>
        </motion.div>

        {/* Specialties Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {specialties.map((specialty, index) => {
            const IconComponent = iconMap[specialty.icon] || Coffee;

            return (
              <motion.div
                key={index}
                className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                variants={itemVariants}
              >
                {/* Icon Circle */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-heading text-xl font-semibold text-secondary">
                  {specialty.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-relaxed text-text-muted">
                  {specialty.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}