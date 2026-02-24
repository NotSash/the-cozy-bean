"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  ExternalLink,
} from "lucide-react";
import { siteData } from "@/data/siteData";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      phone: "",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(siteData.whatsappMessage)}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteData.address)}`;

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
    <section id="contact" className="section-padding bg-accent/30">
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
            Get in Touch
          </span>

          {/* Heading */}
          <h2 className="mt-4 font-heading text-4xl font-bold text-secondary md:text-5xl">
            Visit Us
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side - Contact Info & Form */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Address</h3>
                  <p className="mt-1 text-text-muted">{siteData.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Phone</h3>
                  <a
                    href={`tel:${siteData.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-text-muted transition-colors duration-300 hover:text-primary"
                  >
                    {siteData.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">Email</h3>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="mt-1 block text-text-muted transition-colors duration-300 hover:text-primary"
                  >
                    {siteData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8">
              <h3 className="font-heading text-xl font-semibold text-secondary">
                Opening Hours
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-text-muted">{siteData.hours.weekday}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-text-muted">{siteData.hours.weekend}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-whatsapp/90 hover:shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp
            </a>

            {/* Contact Form */}
            <div className="mt-10">
              <h3 className="font-heading text-xl font-semibold text-secondary">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-secondary"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-accent bg-white px-4 py-3 text-secondary transition-all duration-300 placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-secondary"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-accent bg-white px-4 py-3 text-secondary transition-all duration-300 placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-secondary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    className="w-full resize-none rounded-xl border border-accent bg-white px-4 py-3 text-secondary transition-all duration-300 placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.p
                    className="text-center text-sm text-whatsapp"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Thanks! We&apos;ll get back to you soon.
                  </motion.p>
                )}

                {/* Note */}
                <p className="mt-4 text-center text-sm text-text-muted">
                  We&apos;ll get back to you within 24 hours
                </p>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Google Map */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {/* Map Container */}
            <div className="flex-1 overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0080692917867!2d80.2088!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6a09a7e5!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Cozy Bean location on Google Maps"
                className="h-full min-h-[400px] w-full lg:min-h-full"
              />
            </div>

            {/* Get Directions Button */}
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <ExternalLink className="h-5 w-5" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}