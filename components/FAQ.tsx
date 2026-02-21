"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 relative border-t border-[var(--border-color)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">FAQs</span>
          <h2 className="text-f-h2-mobile lg:text-f-h2 mt-6">
            Common{" "}
            <span className="text-[var(--accent-primary)]">questions</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-0">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="border-b border-[var(--border-color)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between py-6 text-left gap-4"
              >
                <span className="text-f-h4-mobile lg:text-f-h4 text-[var(--foreground)]">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-[var(--foreground-dim)]">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-f-p-mobile lg:text-f-p text-[var(--foreground-dim)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
