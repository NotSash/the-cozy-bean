"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { menuItems, categories } from "@/data/menuData";
import { siteData } from "@/data/siteData";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  const formatCategoryName = (category: string): string => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const generateWhatsAppLink = (itemName: string, price: number): string => {
    const message = `Hi! I'd like to order: ${itemName} (₹${price})`;
    return `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="menu" className="section-padding bg-background">
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
            Our Menu
          </span>

          {/* Heading */}
          <h2 className="mt-4 font-heading text-4xl font-bold text-secondary md:text-5xl">
            Delicious Offerings
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-lg text-text-muted">
            Something for every mood
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2.5 font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-accent text-secondary hover:bg-primary/20"
              }`}
              aria-pressed={activeCategory === category}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Category Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-secondary backdrop-blur-sm">
                      {formatCategoryName(item.category)}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Name and Price Row */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-lg font-semibold text-secondary">
                      {item.name}
                    </h3>
                    <span className="whitespace-nowrap text-lg font-bold text-primary">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-sm text-text-muted">
                    {item.description}
                  </p>

                  {/* WhatsApp Order Button */}
                  <a
                    href={generateWhatsAppLink(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp/10 px-4 py-2 text-sm font-medium text-whatsapp transition-all duration-300 hover:bg-whatsapp hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Add to WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg text-text-muted">
              No items found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}