import { SectionHeader } from "@/components/ui/section-header";
import { MonoLabel } from "@/components/ui/mono-label";

const steps = [
  {
    n: "01",
    title: "Discovery",
    short: "We listen first.",
    body: "A working session with your team. We map what exists, what hurts, and what's worth building. You leave with a written scope, fixed price, and our honest opinion — even if it means hiring someone else.",
    duration: "1 wk",
  },
  {
    n: "02",
    title: "Design",
    short: "We architect before we build.",
    body: "Data model, API surface, agent contracts, deployment topology. Decisions written down, not assumed. You see the system on paper before a single commit.",
    duration: "1–2 wks",
  },
  {
    n: "03",
    title: "Build",
    short: "We ship in weeks, not quarters.",
    body: "Senior engineers only. Twice-weekly demos. You get a Linear board, a Slack channel, and direct access to whoever's writing the code. No PMs in between.",
    duration: "3–10 wks",
  },
  {
    n: "04",
    title: "Operate",
    short: "We don't disappear at launch.",
    body: "We carry the pager. Monthly ops review, SLA-backed response, quarterly tune-ups. The systems we build stay alive — or we fix them on our dime.",
    duration: "Ongoing",
  },
];

export function Process() {
  return (
    <section id="process" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="process / 04 phases"
          title="How a DialedIN engagement runs."
          description="Predictable cadence. No theatre. The same four phases every time, so you always know what next week looks like."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative flex flex-col gap-4 bg-surface p-6 transition-colors hover:bg-surface-hover"
            >
              <div className="flex items-center justify-between">
                <MonoLabel>phase_{s.n}</MonoLabel>
                <span className="rounded border border-border bg-bg px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-dim">
                  {s.duration}
                </span>
              </div>

              <div>
                <div className="font-mono text-5xl font-medium tracking-tight text-fg-faint group-hover:text-fg-dim">
                  {s.n}
                </div>
                <h3 className="mt-2 text-xl font-medium tracking-tight text-fg">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-fg">{s.short}</p>
              </div>

              <p className="text-sm leading-relaxed text-fg-muted">{s.body}</p>

              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                  <span className="font-mono text-fg-faint">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
