"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusPill } from "@/components/ui/status-pill";
import { MonoLabel } from "@/components/ui/mono-label";
import { cn } from "@/lib/cn";

type Cadence = {
  id: string;
  label: string;
  intervalSec: number; // for demo purposes — actual scheduling is conceptual
};

const cadences: Cadence[] = [
  { id: "5m", label: "Every 5 min", intervalSec: 12 },
  { id: "1h", label: "Hourly", intervalSec: 20 },
  { id: "1d", label: "Daily", intervalSec: 30 },
  { id: "1w", label: "Weekly", intervalSec: 45 },
];

const taskSuggestions = [
  "Monitor competitor pricing pages",
  "Triage new Zendesk tickets by intent",
  "Summarize yesterday's Stripe activity to Slack",
  "Scrape new Crunchbase entries for Series B SaaS",
  "Watch our error logs and open Linear issues",
];

type Agent = {
  id: string;
  task: string;
  cadence: Cadence;
  createdAt: number;
  runs: number;
  status: "running" | "executing" | "idle";
};

const MAX_AGENTS = 3;

export function AgentsDemo() {
  return (
    <section id="agents" className="relative border-b border-border py-24 sm:py-32">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">
          {/* Left: copy */}
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="featured / svc_01 — ai agents"
              title={
                <>
                  Hire a digital teammate. <br />
                  <span className="text-fg-muted">
                    Pick a cadence. Pick a task. Deploy.
                  </span>
                </>
              }
              description="Most of what your team does on repeat is automatable. We build the agents — and the guardrails, observability, and human-in-the-loop checkpoints that make them safe to run."
            />

            <ul className="mt-10 space-y-4">
              {[
                {
                  k: "Scheduled or event-driven",
                  v: "Cron, webhooks, polling, queues. Real-time when it has to be, batch when it doesn't.",
                },
                {
                  k: "Lives in your stack",
                  v: "Slack, email, CRM, warehouse, your internal portal. Not a chatbot in a corner.",
                },
                {
                  k: "Observable & reversible",
                  v: "Every run logged, every action auditable, every decision overrideable.",
                },
                {
                  k: "We run them, not you",
                  v: "On-call rotation, alerting, monthly reviews. You see the output, we own the uptime.",
                },
              ].map((row) => (
                <li key={row.k} className="flex gap-4 border-t border-border pt-4">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <div>
                    <div className="font-medium text-fg">{row.k}</div>
                    <div className="mt-0.5 text-sm text-fg-muted">{row.v}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: interactive demo */}
          <DemoPanel />
        </div>
      </div>
    </section>
  );
}

function DemoPanel() {
  const [task, setTask] = useState<string>(taskSuggestions[0]);
  const [cadence, setCadence] = useState<Cadence>(cadences[1]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [now, setNow] = useState<number>(0);

  // Hydration-safe: start ticking only after mount.
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  // Increment run count when cadence interval elapses (visual only).
  useEffect(() => {
    if (agents.length === 0) return;
    const interval = setInterval(() => {
      setAgents((prev) =>
        prev.map((a) => {
          const elapsed = (Date.now() - a.createdAt) / 1000;
          const expectedRuns = Math.floor(elapsed / a.cadence.intervalSec);
          if (expectedRuns > a.runs) {
            return { ...a, runs: expectedRuns, status: "executing" };
          }
          if (a.status === "executing") {
            // settle back to running after a beat
            return { ...a, status: "running" };
          }
          return a;
        })
      );
    }, 500);
    return () => clearInterval(interval);
  }, [agents.length]);

  const deploy = () => {
    if (!task.trim()) return;
    const id = `agent_${Math.random().toString(36).slice(2, 6)}`;
    const created = Date.now();
    setAgents((prev) => {
      const next: Agent = {
        id,
        task: task.trim(),
        cadence,
        createdAt: created,
        runs: 1,
        status: "running",
      };
      const combined = [next, ...prev];
      return combined.slice(0, MAX_AGENTS);
    });
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-bg-elev shadow-[0_0_60px_-20px_rgba(0,0,0,0.5)]">
      {/* titlebar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-faint">
          <span className="size-2 rounded-sm bg-emerald-400" />
          dialedin · agent console
        </div>
        <MonoLabel className="text-fg-faint">try-it / demo</MonoLabel>
      </div>

      {/* config */}
      <div className="space-y-5 border-b border-border p-5">
        <div>
          <MonoLabel>01 · task</MonoLabel>
          <div className="mt-2">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="What should the agent do?"
              className="w-full rounded-md border border-border bg-bg px-3 py-2.5 font-mono text-sm text-fg placeholder:text-fg-faint focus:border-border-strong focus:outline-none"
              maxLength={120}
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {taskSuggestions.map((s) => (
              <button
                key={s}
                onClick={() => setTask(s)}
                className={cn(
                  "rounded-full border px-2 py-0.5 font-mono text-[11px] transition-colors",
                  task === s
                    ? "border-violet-400/40 bg-violet-400/10 text-violet-200"
                    : "border-border bg-bg text-fg-muted hover:border-border-strong hover:text-fg"
                )}
              >
                {s.split(" ").slice(0, 3).join(" ")}…
              </button>
            ))}
          </div>
        </div>

        <div>
          <MonoLabel>02 · cadence</MonoLabel>
          <div className="mt-2 grid grid-cols-4 gap-1.5">
            {cadences.map((c) => {
              const active = cadence.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setCadence(c)}
                  className={cn(
                    "rounded-md border px-2 py-2 text-center font-mono text-[12px] transition-colors",
                    active
                      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                      : "border-border bg-bg text-fg-muted hover:border-border-strong hover:text-fg"
                  )}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={deploy}
          disabled={!task.trim()}
          className="group flex w-full items-center justify-center gap-2 rounded-md border border-emerald-400/40 bg-emerald-400/15 px-4 py-2.5 text-sm font-medium text-emerald-100 transition-colors hover:bg-emerald-400/25 disabled:cursor-not-allowed disabled:border-border disabled:bg-surface disabled:text-fg-faint"
        >
          <span className="font-mono text-emerald-300 group-disabled:text-fg-faint">$</span>
          deploy agent
          <span className="font-mono text-emerald-300 transition-transform group-hover:translate-x-0.5 group-disabled:text-fg-faint">
            ↵
          </span>
        </button>
      </div>

      {/* deployed agents */}
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <MonoLabel>active fleet · {agents.length}/{MAX_AGENTS}</MonoLabel>
          {agents.length === MAX_AGENTS && (
            <MonoLabel className="text-fg-faint">demo cap reached</MonoLabel>
          )}
        </div>

        {agents.length === 0 ? (
          <EmptyFleet />
        ) : (
          <div className="space-y-2">
            {agents.map((a) => (
              <AgentRow key={a.id} agent={a} now={now} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyFleet() {
  return (
    <div className="rounded-md border border-dashed border-border bg-bg/40 p-6 text-center">
      <div className="font-mono text-[12px] text-fg-faint">
        no agents deployed
      </div>
      <div className="mt-1 text-sm text-fg-muted">
        Pick a task + cadence above, then hit <span className="font-mono text-fg">deploy</span>.
      </div>
    </div>
  );
}

function AgentRow({ agent, now }: { agent: Agent; now: number }) {
  const interval = agent.cadence.intervalSec * 1000;
  const elapsedSinceLastRun = useMemo(() => {
    if (!now) return 0;
    const totalElapsed = now - agent.createdAt;
    return totalElapsed % interval;
  }, [now, agent.createdAt, interval]);

  const nextRunIn = Math.max(0, Math.ceil((interval - elapsedSinceLastRun) / 1000));
  const progress = Math.min(100, (elapsedSinceLastRun / interval) * 100);

  const justRan = agent.status === "executing";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md border bg-bg px-4 py-3 transition-colors",
        justRan ? "border-emerald-400/40" : "border-border"
      )}
    >
      {/* progress bar across bottom */}
      <div
        className="absolute bottom-0 left-0 h-px bg-emerald-400/60 transition-[width] duration-1000 ease-linear"
        style={{ width: `${progress}%` }}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-faint">
              {agent.id}
            </span>
            <span className="text-fg-faint">·</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-dim">
              {agent.cadence.label}
            </span>
          </div>
          <div className="mt-1 truncate text-sm text-fg">{agent.task}</div>
        </div>
        <StatusPill variant={justRan ? "live" : "info"} pulse={justRan}>
          {justRan ? "executing" : "running"}
        </StatusPill>
      </div>

      <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-fg-faint tabular">
        <span>
          runs <span className="text-fg-muted">{agent.runs}</span>
        </span>
        <span>
          next run in <span className="text-fg-muted">{nextRunIn}s</span>
        </span>
      </div>
    </div>
  );
}
