"use client";

import { motion } from "framer-motion";
import {
  Globe, Smartphone, Building2, Layers, Brain, Zap,
  BarChart3, FlaskConical, Heart, Workflow, Check,
} from "lucide-react";
import { SERVICES_DETAILED } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe size={32} />,
  smartphone: <Smartphone size={32} />,
  building: <Building2 size={32} />,
  layers: <Layers size={32} />,
  brain: <Brain size={32} />,
  zap: <Zap size={32} />,
  barChart3: <BarChart3 size={32} />,
  flask: <FlaskConical size={32} />,
  heart: <Heart size={32} />,
  workflow: <Workflow size={32} />,
};

export default function ServicesList() {
  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-16 lg:space-y-24">
          {SERVICES_DETAILED.map((service, i) => (
            <motion.div
              key={service.slug}
              id={service.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                i % 2 === 1 ? "" : ""
              }`}
            >
              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 flex items-center justify-center text-[var(--accent-primary)] mb-6">
                  {iconMap[service.icon]}
                </div>
                <h2 className="text-f-h2-mobile lg:text-f-h3 mb-4">
                  {service.title}
                </h2>
                <p className="text-f-h4-mobile lg:text-f-p text-[var(--foreground-dim)] mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 flex-shrink-0 text-[var(--accent-primary)]"
                      />
                      <span className="text-f-p text-[var(--foreground-muted)]">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="card aspect-[4/3] flex items-center justify-center with-diagonal-lines relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--card-bg)] to-transparent z-[1]" />
                  <div className="relative z-10 text-[var(--foreground-dim)] opacity-20 scale-[4]">
                    {iconMap[service.icon]}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
