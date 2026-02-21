"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

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
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
                Why Join Us
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Work That Matters
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perks.map((perk, i) => (
              <ScrollReveal key={perk.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-slate-100 bg-white p-8 h-full">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
                Open Positions
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Current Openings
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4 max-w-3xl mx-auto">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-slate-100 bg-white p-8 hover:border-blue-200 hover:shadow-sm transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mb-2">
                        {job.type}
                      </p>
                      <p className="text-sm text-slate-500">
                        {job.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button href="/contact" variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-slate-500">
                Don&apos;t see the right role?{" "}
                <a
                  href="/contact"
                  className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Send us your resume
                </a>{" "}
                — we&apos;re always looking for talented engineers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
