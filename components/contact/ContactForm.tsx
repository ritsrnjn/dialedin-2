"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

const budgetOptions = [
  "Under $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k – $250k",
  "$250k+",
];

const serviceOptions = [
  "AI & LLM-Powered Tools",
  "Web Application",
  "Mobile Application",
  "CRM & Workflows",
  "Scientific Software",
  "Health & Fitness Platform",
  "Enterprise Solution",
  "Automation",
  "Data & Analytics",
  "Architecture & Infrastructure",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up to Supabase or email service
    setSubmitted(true);
  }

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              {submitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgb(22, 163, 74)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message Sent
                  </h3>
                  <p className="text-slate-500">
                    Thanks for reaching out. We&apos;ll get back to you within
                    one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      What do you need? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all appearance-none"
                    >
                      <option value="">Select a service area</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Budget Range
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {budgetOptions.map((opt) => (
                        <label
                          key={opt}
                          className="relative cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="budget"
                            value={opt}
                            className="peer sr-only"
                          />
                          <span className="inline-block rounded-full border border-slate-200 px-5 py-2 text-sm text-slate-600 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all hover:border-slate-300">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all resize-none"
                      placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-9 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all duration-300"
                  >
                    Send Message
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
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScrollReveal delay={0.2}>
              <div className="sticky top-32 space-y-10">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    Email
                  </h3>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    Phone
                  </h3>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
                    Response Time
                  </h3>
                  <p className="text-slate-600">
                    We respond to every inquiry within one business day.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Not sure where to start?
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    That&apos;s perfectly fine. Just describe your idea or challenge
                    and we&apos;ll help you figure out the right approach.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
