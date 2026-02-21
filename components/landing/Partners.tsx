"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const partners = [
  "TechCorp",
  "Innovate Labs",
  "Vertex AI",
  "MedFlow",
  "FinanceHub",
  "ScaleOps",
];

export default function Partners() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-10">
            Trusted by innovative teams
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-xl font-bold text-slate-300 hover:text-slate-400 transition-colors cursor-default tracking-tight"
              >
                {partner}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
