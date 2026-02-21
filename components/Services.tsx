"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Building2,
  Layers,
  Brain,
  Zap,
  BarChart3,
  FlaskConical,
  Heart,
  Workflow,
} from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe size={28} />,
  smartphone: <Smartphone size={28} />,
  building: <Building2 size={28} />,
  layers: <Layers size={28} />,
  brain: <Brain size={28} />,
  zap: <Zap size={28} />,
  barChart3: <BarChart3 size={28} />,
  flask: <FlaskConical size={28} />,
  heart: <Heart size={28} />,
  workflow: <Workflow size={28} />,
};

const categories = Object.keys(SERVICE_CATEGORIES);

export default function Services() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="services" className="py-24 relative border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">What We Build</span>
          <h2 className="text-f-h2-mobile lg:text-f-h2 mt-6">
            Full-Spectrum{" "}
            <span className="text-[var(--accent-primary)]">Engineering</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 text-f-p transition-all duration-300 border ${
                active === cat
                  ? "bg-[var(--accent-primary)] text-black border-[var(--accent-primary)]"
                  : "bg-transparent text-[var(--foreground-dim)] border-[var(--border-color)] hover:border-[var(--accent-primary)] hover:text-[var(--foreground)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Service Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICE_CATEGORIES[active].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="card p-6 md:p-8"
              >
                <div className="w-12 h-12 flex items-center justify-center text-[var(--accent-primary)] mb-6">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-f-h3-mobile lg:text-f-h3 mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--foreground-dim)] text-f-p-mobile lg:text-f-p">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
