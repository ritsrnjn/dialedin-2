"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-24 relative border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="text-f-h2-mobile lg:text-f-h2 mt-6">
            What our{" "}
            <span className="text-[var(--accent-primary)]">clients</span> say
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              className="card p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    fill="var(--accent-primary)"
                    color="var(--accent-primary)"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-f-h4-mobile lg:text-f-h4 text-[var(--foreground-muted)] mb-8 leading-relaxed">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[var(--accent-primary)] flex items-center justify-center flex-shrink-0">
                  <span className="text-black text-f-p font-bold">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-f-p text-[var(--foreground)]">{t.name}</p>
                  <p className="text-f-p text-[var(--foreground-dim)]">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
