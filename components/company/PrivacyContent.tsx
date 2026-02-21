"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
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
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at the email address below.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.",
  },
  {
    title: "Contact Us",
    content: `If you have questions about this Privacy Policy or our data practices, please contact us at ${COMPANY.email}.`,
  },
];

export default function PrivacyContent() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-sm text-slate-400 mb-12">
            Last updated: February 2026
          </p>
        </ScrollReveal>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 0.05}>
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
