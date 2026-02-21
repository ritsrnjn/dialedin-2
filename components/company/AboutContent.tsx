"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { STATS } from "@/lib/constants";

const values = [
  {
    title: "Engineering Excellence",
    description:
      "We write clean, tested, maintainable code. No shortcuts, no tech debt by choice.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Radical Transparency",
    description:
      "You'll always know where your project stands. Open communication, no surprises.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    title: "Outcome-Driven",
    description:
      "We measure success by your business outcomes, not by lines of code shipped.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Long-Term Partnership",
    description:
      "We build relationships, not just software. Most of our clients have been with us for years.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Mission */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
                  Our Story
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                  Built by engineers, for companies that build
                </h2>
                <div className="space-y-4 text-slate-500 leading-relaxed">
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
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="relative aspect-square rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      DS
                    </div>
                    <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-widest">
                      DialedIn Solutions
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
                How We Work
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Our Values
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-slate-100 p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats (inline) */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
