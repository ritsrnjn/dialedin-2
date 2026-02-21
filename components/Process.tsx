"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 relative border-t border-[var(--border-color)] with-diagonal-lines"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-[1]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">How It Works</span>
          <h2 className="text-f-h2-mobile lg:text-f-h2 mt-6">
            Our easy{" "}
            <span className="text-[var(--accent-primary)]">3-step method</span>{" "}
            to accelerate your roadmap
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              className="card p-6 md:p-8 relative"
            >
              {/* Step number */}
              <div className="w-14 h-14 bg-[var(--accent-primary)] flex items-center justify-center mb-6">
                <span className="text-black text-f-h3 font-bold">
                  {step.number}
                </span>
              </div>

              <h3 className="text-f-h3-mobile lg:text-f-h3 mb-4">
                {step.title}
              </h3>
              <p className="text-[var(--foreground-dim)] text-f-p-mobile lg:text-f-p">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
