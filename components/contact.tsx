"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusPill } from "@/components/ui/status-pill";
import { MonoLabel } from "@/components/ui/mono-label";

const projectTypes = [
  "AI Agents",
  "Internal Software",
  "Data Infrastructure",
  "Technical Advisory",
  "Not sure yet",
];

const budgetRanges = [
  "< $25k",
  "$25k – $75k",
  "$75k – $200k",
  "$200k+",
  "Not sure",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="contact / scope a project"
          title="Tell us what you're trying to build."
          description="One short form. Real human reads it. We reply within two business hours with a yes, a no, or a question."
        />

        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-surface">
          {/* form header bar */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="flex items-center gap-2">
              <MonoLabel>POST</MonoLabel>
              <span className="font-mono text-xs text-fg-muted">
                /scope-request
              </span>
            </div>
            <StatusPill variant="live" pulse>
              Inbox: 1h 42m median
            </StatusPill>
          </div>

          {submitted ? (
            <SubmittedState onReset={() => setSubmitted(false)} />
          ) : (
            <form
              className="grid gap-5 p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: wire to real endpoint (Resend / Plunk / etc.)
                setSubmitted(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="01 · email" id="email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className={fieldClasses}
                  />
                </Field>

                <Field label="02 · company" id="company">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Where you work"
                    className={fieldClasses}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="03 · project type" id="projectType">
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled className="bg-bg">
                      Select…
                    </option>
                    {projectTypes.map((p) => (
                      <option key={p} value={p} className="bg-bg">
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="04 · budget range" id="budget">
                  <select
                    id="budget"
                    name="budget"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled className="bg-bg">
                      Select…
                    </option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b} className="bg-bg">
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="05 · tell us about the project" id="details">
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={5}
                  placeholder="What are you trying to do? What's in the way? What does success look like?"
                  className={`${fieldClasses} resize-y`}
                />
              </Field>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                <p className="font-mono text-[11px] text-fg-faint">
                  Median reply :: 1h 42m · No newsletter, no follow-up spam.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-md border border-emerald-400/40 bg-emerald-400/15 px-4 py-2.5 text-sm font-medium text-emerald-100 transition-colors hover:bg-emerald-400/25"
                >
                  <span className="font-mono text-emerald-300">$</span>
                  send scope request
                  <span className="font-mono text-emerald-300 transition-transform group-hover:translate-x-0.5">
                    ↵
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const fieldClasses =
  "w-full rounded-md border border-border bg-bg px-3 py-2.5 text-sm text-fg placeholder:text-fg-faint focus:border-border-strong focus:outline-none";

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id}>
        <MonoLabel>{label}</MonoLabel>
      </label>
      {children}
    </div>
  );
}

function SubmittedState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 px-6 py-16 text-center">
      <StatusPill variant="live" pulse>
        Request received · queued
      </StatusPill>
      <h3 className="text-2xl font-medium tracking-tight text-fg">
        Got it. We&apos;ll be in your inbox shortly.
      </h3>
      <p className="max-w-md text-fg-muted">
        A human will read this within two business hours. If we&apos;re a fit,
        you&apos;ll get a short questionnaire and a 30-min scoping call invite.
        If we&apos;re not, we&apos;ll tell you that too.
      </p>
      <button
        onClick={onReset}
        className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-fg-muted hover:text-fg"
      >
        ← send another
      </button>
    </div>
  );
}
