"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl bg-slate-950 px-8 py-20 lg:px-20 lg:py-28 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />

            <div className="relative text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                Ready to Build Something
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Extraordinary?
                </span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
                Let&apos;s discuss your project. Book a free consultation and
                we&apos;ll map out the path from idea to launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={COMPANY.bookingUrl} size="lg">
                  Book a Free Consultation
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button
                  href={`mailto:${COMPANY.email}`}
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600"
                >
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
