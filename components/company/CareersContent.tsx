"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const perks = [
  { title: "Remote-First", description: "Work from anywhere. We care about output, not office hours." },
  { title: "Challenging Projects", description: "Real problems across AI, healthcare, fintech, and more." },
  { title: "Senior-Level Team", description: "Work alongside experienced engineers who push you to grow." },
  { title: "Competitive Pay", description: "Market-rate compensation plus performance-based bonuses." },
];

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time · Remote",
    description: "Build end-to-end features across React, Node.js, and cloud infrastructure for client projects.",
  },
  {
    title: "AI / ML Engineer",
    type: "Full-time · Remote",
    description: "Design and deploy LLM-powered tools, ML pipelines, and intelligent automation systems.",
  },
  {
    title: "Mobile Engineer (React Native)",
    type: "Contract · Remote",
    description: "Develop cross-platform mobile applications with a focus on performance and user experience.",
  },
];

export default function CareersContent() {
  return (
    <>
      {/* Perks */}
      <section className="py-24 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="section-label">Why Join Us</span>
            <h2 className="text-f-h2-mobile lg:text-f-h2 mt-6">
              Work that{" "}
              <span className="text-[var(--accent-primary)]">matters</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="card p-6 md:p-8"
              >
                <h3 className="text-f-h3-mobile lg:text-f-h3 mb-2">
                  {perk.title}
                </h3>
                <p className="text-f-p text-[var(--foreground-dim)]">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 border-t border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="section-label">Open Positions</span>
            <h2 className="text-f-h2-mobile lg:text-f-h2 mt-6">
              Current{" "}
              <span className="text-[var(--accent-primary)]">openings</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="card p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-f-h4 mb-1">{job.title}</h3>
                    <p className="text-f-p text-[var(--accent-primary)] mb-2">
                      {job.type}
                    </p>
                    <p className="text-f-p text-[var(--foreground-dim)]">
                      {job.description}
                    </p>
                  </div>
                  <Link href="/contact" className="btn-secondary flex-shrink-0">
                    Apply
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-f-p text-[var(--foreground-dim)]">
              Don&apos;t see the right role?{" "}
              <Link
                href="/contact"
                className="actionable text-[var(--accent-primary)]"
              >
                Send us your resume
              </Link>{" "}
              — we&apos;re always looking for talented engineers.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
