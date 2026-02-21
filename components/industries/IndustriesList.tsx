"use client";

import { motion } from "framer-motion";
import {
  Microscope, Stethoscope, Dumbbell, DollarSign, Home,
  Check, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { INDUSTRIES_DETAILED } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  microscope: <Microscope size={28} />,
  stethoscope: <Stethoscope size={28} />,
  dumbbell: <Dumbbell size={28} />,
  dollarSign: <DollarSign size={28} />,
  home: <Home size={28} />,
};

export default function IndustriesList() {
  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-6">
          {INDUSTRIES_DETAILED.map((industry, i) => (
            <motion.div
              key={industry.slug}
              id={industry.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="card p-6 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Title + Description */}
                <div>
                  <div className="w-12 h-12 flex items-center justify-center text-[var(--accent-primary)] mb-4">
                    {iconMap[industry.icon]}
                  </div>
                  <h2 className="text-f-h3-mobile lg:text-f-h3 mb-3">
                    {industry.title}
                  </h2>
                  <p className="text-f-p text-[var(--foreground-dim)] leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-f-p uppercase tracking-widest text-[var(--foreground-dim)] mb-4">
                    What We Deliver
                  </p>
                  <ul className="space-y-3">
                    {industry.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={14}
                          className="mt-0.5 flex-shrink-0 text-[var(--accent-primary)]"
                        />
                        <span className="text-f-p text-[var(--foreground-muted)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex lg:justify-end lg:items-start">
                  <Link href="/contact" className="btn-secondary">
                    Discuss a Project
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
