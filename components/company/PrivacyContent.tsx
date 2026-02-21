"use client";

import { motion } from "framer-motion";
import { COMPANY } from "@/lib/constants";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly, such as your name, email address, company name, and project details when you fill out our contact form or communicate with us. We may also automatically collect technical information like your IP address, browser type, and pages visited.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to respond to your inquiries, provide our engineering services, communicate project updates, improve our website and services, and comply with legal obligations. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell, trade, or rent your personal information. We may share information with trusted service providers who assist us in operating our website and business, provided they agree to keep this information confidential.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.",
  },
  {
    title: "Contact Us",
    content: `If you have questions about this Privacy Policy, please contact us at ${COMPANY.email}.`,
  },
];

export default function PrivacyContent() {
  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-f-p text-[var(--foreground-dim)] mb-12"
        >
          Last updated: February 2026
        </motion.p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <h2 className="text-f-h4 mb-3">{section.title}</h2>
              <p className="text-f-p text-[var(--foreground-dim)] leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
