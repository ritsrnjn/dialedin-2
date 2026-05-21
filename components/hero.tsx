import Link from "next/link";
import { StatusPill } from "@/components/ui/status-pill";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* faint grid overlay */}
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-20 pt-20 sm:pt-28 lg:flex-row lg:items-start lg:gap-16 lg:pb-28">
        {/* Left: copy */}
        <div className="flex-1 lg:max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <StatusPill variant="live" pulse>
              v1.0 · live
            </StatusPill>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">
              DialedIN Solutions / software & ai ops agency
            </span>
          </div>

          <h1 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Software that runs your business.
            <br />
            <span className="text-fg-muted">
              Not just software that{" "}
              <span className="relative inline-block text-fg">
                demos well
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2 w-full text-emerald-400/70"
                  fill="none"
                >
                  <path
                    d="M2 8 Q 50 2 100 6 T 198 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted sm:text-xl">
            DialedIN designs, builds, and operates the internal software, data
            infrastructure, and AI agents that mid-market teams need in
            production — not in a slide deck.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-4 py-2.5 text-sm font-medium text-emerald-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-colors hover:bg-emerald-400/15"
            >
              Scope a project
              <span className="font-mono text-emerald-300 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-hover"
            >
              View services
              <span className="font-mono text-fg-dim">↓</span>
            </Link>
          </div>

          {/* trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-dim">
            <span className="text-fg-faint">trusted stacks ::</span>
            {["Next.js", "Postgres", "dbt", "Airflow", "OpenAI", "Anthropic", "AWS", "Vercel"].map(
              (tool) => (
                <span key={tool} className="text-fg-muted">
                  {tool}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right: terminal-style console preview */}
        <div className="lg:w-[420px] lg:flex-shrink-0">
          <ConsolePreview />
        </div>
      </div>
    </section>
  );
}

function ConsolePreview() {
  // Static, server-rendered terminal panel — sets the infra-tool tone without faking liveness.
  const lines: Array<{ time: string; level: "info" | "ok" | "warn"; text: string }> = [
    { time: "08:14:02", level: "info", text: "agent.42 · pricing-watch :: scheduled" },
    { time: "08:14:07", level: "ok", text: "pipeline.dbt-daily · run #2147 · ok" },
    { time: "08:14:09", level: "info", text: "agent.18 · ticket-triage :: 12 routed" },
    { time: "08:14:14", level: "ok", text: "deploy · internal-portal v0.42.1 · ok" },
    { time: "08:14:18", level: "warn", text: "agent.07 · retry 1/3 · backoff 30s" },
    { time: "08:14:21", level: "ok", text: "agent.07 · recovered · run ok" },
    { time: "08:14:25", level: "info", text: "report · weekly-ops · sent to slack" },
  ];

  const levelClass = {
    info: "text-sky-300",
    ok: "text-emerald-300",
    warn: "text-amber-300",
  };

  return (
    <div className="overflow-hidden rounded-lg border border-border-strong bg-bg-elev shadow-[0_0_40px_-12px_rgba(0,0,0,0.5)]">
      {/* titlebar */}
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-zinc-700" />
          <span className="size-2.5 rounded-full bg-zinc-700" />
          <span className="size-2.5 rounded-full bg-zinc-700" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">
          dialedin · ops feed
        </span>
        <StatusPill variant="live" pulse>
          live
        </StatusPill>
      </div>

      {/* lines */}
      <div className="space-y-1 px-3 py-3 font-mono text-[12px] leading-relaxed tabular">
        {lines.map((l, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="shrink-0 text-fg-faint">{l.time}</span>
            <span className={`shrink-0 ${levelClass[l.level]}`}>
              {l.level === "ok" ? "✓" : l.level === "warn" ? "!" : "›"}
            </span>
            <span className="text-fg-muted">{l.text}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-fg-faint">{">"}</span>
          <span className="inline-block h-[14px] w-[7px] bg-emerald-400/80 animate-[blink_1.1s_steps(2,end)_infinite]" />
        </div>
      </div>

      {/* footer meta */}
      <div className="flex items-center justify-between border-t border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
        <span>region :: us-east-1</span>
        <span>latency :: 42ms</span>
        <span>uptime :: 99.97%</span>
      </div>
    </div>
  );
}
