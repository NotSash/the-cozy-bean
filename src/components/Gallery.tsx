"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
import { galleryImages } from "@/data/siteData";
import type { GalleryImage } from "@/types";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Handle Escape key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedImage, closeLightbox]);

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
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
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

  // Determine image height based on span property
  const getImageHeight = (span?: "tall" | "wide" | "normal"): string => {
    switch (span) {
      case "tall":
        return "h-80 md:h-96";
      case "wide":
        return "h-56 md:h-64";
      default:
        return "h-64 md:h-72";
    }
  };

  return (
    <section id="gallery" className="section-padding bg-accent/30">
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
            Gallery
          </span>

          {/* Heading */}
          <h2 className="mt-4 font-heading text-4xl font-bold text-secondary md:text-5xl">
            Moments at The Cozy Bean
          </h2>
        </motion.div>

        {/* Gallery Grid - Masonry Style with CSS Columns */}
        <motion.div
          className="mt-12 columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl break-inside-avoid ${getImageHeight(image.span)}`}
              variants={imageVariants}
              onClick={() => openLightbox(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(image);
                }
              }}
              aria-label={`View larger image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
                  <ZoomIn className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Dark Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/90"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-hidden="true"
            />

            {/* Close Button */}
            <button
              className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Large Image */}
            <motion.div
              className="relative z-10 max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <Image
                src={selectedImage.src.replace("w=800", "w=1600")}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
                priority
              />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-center text-white">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}