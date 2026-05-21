import { SectionHeader } from "@/components/ui/section-header";
import { StatusPill } from "@/components/ui/status-pill";
import { MonoLabel } from "@/components/ui/mono-label";

// NOTE FOR USER: swap names, backgrounds, initials with real team data.
const team = [
  {
    id: "team_01",
    initials: "RR",
    name: "Ritesh Ranjan",
    role: "Founder · Engineering",
    background:
      "10+ yrs across data infra & ai systems. Previously built X at Y.",
    specialties: ["AI Agents", "Architecture", "Data"],
    status: "live" as const,
    statusText: "Available · scoping calls",
    currentlyOn: "case_01",
  },
  {
    id: "team_02",
    initials: "EW",
    name: "Engineering Lead",
    role: "Senior Engineer",
    background:
      "Ex-staff at a Series-C SaaS. Ships internal tools faster than the rest of us.",
    specialties: ["Next.js", "tRPC", "Postgres"],
    status: "warn" as const,
    statusText: "Deployed · 1 slot opening",
    currentlyOn: "case_02",
  },
  {
    id: "team_03",
    initials: "DI",
    name: "Data & Infra Lead",
    role: "Principal Engineer",
    background:
      "Built and ran the warehouse at a unicorn fintech. dbt early adopter.",
    specialties: ["dbt", "Warehouses", "Pipelines"],
    status: "live" as const,
    statusText: "Available",
    currentlyOn: "case_03",
  },
  {
    id: "team_04",
    initials: "AD",
    name: "AI Engineer",
    role: "Senior · Agents",
    background:
      "Spent the last 2 years shipping LLM systems to production. Knows where the bodies are buried.",
    specialties: ["Agents", "Eval", "Orchestration"],
    status: "warn" as const,
    statusText: "Deployed",
    currentlyOn: "case_01",
  },
];

export function Team() {
  return (
    <section id="team" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="team / fleet view"
          title="Senior engineers. No middle layer."
          description="When you hire DialedIN, the people on the call are the people writing the code. We stay small on purpose — every engagement gets a named lead."
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article
              key={m.id}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong hover:bg-surface-hover"
            >
              <div className="flex items-center justify-between">
                <MonoLabel>{m.id}</MonoLabel>
                <StatusPill variant={m.status} pulse={m.status === "live"}>
                  {m.status === "live" ? "available" : "deployed"}
                </StatusPill>
              </div>

              {/* Avatar — initials in a square (no photo placeholders, less awkward when blank) */}
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-md border border-border bg-bg-elev font-mono text-sm font-medium text-fg">
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-medium text-fg">{m.name}</div>
                  <div className="truncate text-xs text-fg-muted">{m.role}</div>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-fg-muted">
                {m.background}
              </p>

              <div>
                <MonoLabel>specialties</MonoLabel>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {m.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border bg-bg px-1.5 py-0.5 font-mono text-[10px] text-fg-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
                <span>{m.statusText}</span>
                <span>on::{m.currentlyOn}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
