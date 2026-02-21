"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
              How It Works
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Simple. Seamless. Streamlined.
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Three steps to turn your idea into production-ready software.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.15}>
              <div className="relative">
                {/* Connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-blue-300 to-blue-100" />
                )}

                <div className="text-center">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 mb-8">
                    <span className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
