"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-32 relative border-t border-[var(--border-color)] with-diagonal-lines">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[1]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-f-h2-mobile lg:text-f-h1">
            Ready to build your next{" "}
            <span className="text-[var(--accent-primary)]">
              breakthrough product?
            </span>
          </h2>
          <p className="text-f-h4-mobile lg:text-f-h4 text-[var(--foreground-dim)] mt-6 max-w-2xl mx-auto">
            Let&apos;s transform your ideas into precision-engineered software
          </p>
          <div className="mt-10">
            <Link href={COMPANY.bookingUrl} className="btn-primary text-base py-4 px-10">
              Book a Free Call
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
