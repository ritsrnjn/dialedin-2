"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="py-20 border-t border-b border-[var(--border-color)] with-dots">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-f-h1-mobile lg:text-f-h2 text-[var(--accent-primary)]">
                {stat.value}
              </div>
              <p className="text-f-p text-[var(--foreground-dim)] uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
