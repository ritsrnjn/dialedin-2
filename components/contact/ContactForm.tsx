"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
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
  const [selectedBudget, setSelectedBudget] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClasses =
    "w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-[var(--foreground)] text-f-p placeholder:text-[var(--foreground-dim)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors";

  return (
    <section className="py-24 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="card p-12 text-center">
                  <div className="w-16 h-16 bg-[var(--accent-green)] flex items-center justify-center mx-auto mb-6">
                    <Check size={32} color="#000" />
                  </div>
                  <h3 className="text-f-h3 mb-2">Message Sent</h3>
                  <p className="text-f-p text-[var(--foreground-dim)]">
                    Thanks for reaching out. We&apos;ll get back to you within
                    one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-f-p text-[var(--foreground-muted)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={inputClasses}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-f-p text-[var(--foreground-muted)] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={inputClasses}
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-f-p text-[var(--foreground-muted)] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className={inputClasses}
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-f-p text-[var(--foreground-muted)] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={inputClasses}
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-f-p text-[var(--foreground-muted)] mb-2">
                      What do you need? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="">Select a service area</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-f-p text-[var(--foreground-muted)] mb-3">
                      Budget Range
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedBudget(opt)}
                          className={`px-4 py-2 text-f-p border transition-all ${
                            selectedBudget === opt
                              ? "border-[var(--accent-primary)] text-[var(--accent-primary)]"
                              : "border-[var(--border-color)] text-[var(--foreground-dim)] hover:border-[var(--foreground-dim)]"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="budget" value={selectedBudget} />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-f-p text-[var(--foreground-muted)] mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* Submit */}
                  <button type="submit" className="btn-primary text-base py-4 px-10">
                    Send Message
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24 space-y-10"
            >
              <div>
                <p className="text-f-p uppercase tracking-widest text-[var(--foreground-dim)] mb-3">
                  Email
                </p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="actionable text-f-h4 text-[var(--foreground)]"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div>
                <p className="text-f-p uppercase tracking-widest text-[var(--foreground-dim)] mb-3">
                  Phone
                </p>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="actionable text-f-h4 text-[var(--foreground)]"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div>
                <p className="text-f-p uppercase tracking-widest text-[var(--foreground-dim)] mb-3">
                  Response Time
                </p>
                <p className="text-f-p text-[var(--foreground-muted)]">
                  We respond to every inquiry within one business day.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-f-h4 mb-2">Not sure where to start?</h3>
                <p className="text-f-p text-[var(--foreground-dim)]">
                  That&apos;s perfectly fine. Just describe your idea or
                  challenge and we&apos;ll help you figure out the right
                  approach.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
