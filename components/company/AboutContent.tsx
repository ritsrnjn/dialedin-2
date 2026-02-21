"use client";

import { motion } from "framer-motion";
import { Code2, Eye, Target, Users } from "lucide-react";
import { STATS } from "@/lib/constants";

const values = [
  {
    title: "Engineering Excellence",
    description:
      "We write clean, tested, maintainable code. No shortcuts, no tech debt by choice.",
    icon: <Code2 size={28} />,
  },
  {
    title: "Radical Transparency",
    description:
      "You'll always know where your project stands. Open communication, no surprises.",
    icon: <Eye size={28} />,
  },
  {
    title: "Outcome-Driven",
    description:
      "We measure success by your business outcomes, not by lines of code shipped.",
    icon: <Target size={28} />,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We build relationships, not just software. Most of our clients have been with us for years.",
    icon: <Users size={28} />,
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Story */}
      <section className="py-24 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-label">Our Story</span>
              <h2 className="text-f-h2-mobile lg:text-f-h3 mt-6 mb-6">
                Built by engineers, for companies that build
              </h2>
              <div className="space-y-4 text-f-p text-[var(--foreground-dim)] leading-relaxed">
                <p>
                  DialedIn Solutions was founded with a simple belief: companies
                  deserve engineering partners who care as much about the product
                  as they do.
                </p>
                <p>
                  We&apos;re not a body shop. We don&apos;t throw warm bodies at
                  problems. We assemble focused, senior-level engineering teams
                  that embed with your organization, understand your domain, and
                  ship production-grade software on time.
                </p>
                <p>
                  From AI-powered decision tools to HIPAA-compliant health
                  platforms, we&apos;ve delivered across industries where quality
                  isn&apos;t optional — it&apos;s the whole point.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="card aspect-square flex items-center justify-center with-diagonal-lines relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--card-bg)] to-transparent z-[1]" />
                <div className="relative z-10 text-center">
                  <div className="text-f-h0-mobile lg:text-f-h0 text-[var(--accent-primary)]">
                    DS
                  </div>
                  <p className="text-f-p uppercase tracking-widest text-[var(--foreground-dim)] mt-2">
                    DialedIn Solutions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="section-label">How We Work</span>
            <h2 className="text-f-h2-mobile lg:text-f-h2 mt-6">
              Our{" "}
              <span className="text-[var(--accent-primary)]">values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="card p-6 md:p-8"
              >
                <div className="w-12 h-12 flex items-center justify-center text-[var(--accent-primary)] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-f-h3-mobile lg:text-f-h3 mb-3">
                  {value.title}
                </h3>
                <p className="text-f-p text-[var(--foreground-dim)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-b border-[var(--border-color)] with-dots">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
    </>
  );
}
