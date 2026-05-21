import { SectionHeader } from "@/components/ui/section-header";
import { StatusPill } from "@/components/ui/status-pill";
import { MonoLabel } from "@/components/ui/mono-label";

// NOTE FOR USER: replace with real case studies when you have them.
// Each card is structured around a verifiable outcome metric.
const work = [
  {
    id: "case_01",
    sector: "Series B Fintech",
    title: "Replaced a 6-person ops team with 4 agents.",
    problem:
      "Manual reconciliation across Stripe, ACH, and internal ledger. 40+ hours/week of repetitive work.",
    solution:
      "Built a fleet of reconciliation agents with a human-in-the-loop dashboard. Edge cases escalated to ops; routine cases auto-resolved.",
    metrics: [
      { label: "Ops time saved", value: "92%" },
      { label: "Recon accuracy", value: "99.7%" },
      { label: "Shipped in", value: "9 wks" },
    ],
    stack: ["Python", "Postgres", "Anthropic", "Temporal"],
    services: ["AI Agents", "Data Infrastructure"],
  },
  {
    id: "case_02",
    sector: "B2B SaaS · 200 employees",
    title: "Killed five Notion docs with one internal app.",
    problem:
      "Sales ops, finance, and legal each kept their own pricing spreadsheets. Conflicting numbers everywhere.",
    solution:
      "Built a custom pricing portal on top of their warehouse. Single source of truth. Audit trail. Approval workflow.",
    metrics: [
      { label: "Tools replaced", value: "5" },
      { label: "Deal cycle", value: "−34%" },
      { label: "Shipped in", value: "6 wks" },
    ],
    stack: ["Next.js", "Postgres", "tRPC", "Auth0"],
    services: ["Internal Software"],
  },
  {
    id: "case_03",
    sector: "Healthtech · pre-Series A",
    title: "Stood up a warehouse before they hired a data team.",
    problem:
      "Founders were running the business off CSVs and Stripe exports. No analytics, no investor reporting, no clean source.",
    solution:
      "Snowflake + dbt + Fivetran. 12 modeled tables. Self-serve dashboards. Documented for the data hire they made next.",
    metrics: [
      { label: "Data sources", value: "11" },
      { label: "Modeled tables", value: "12" },
      { label: "Shipped in", value: "5 wks" },
    ],
    stack: ["Snowflake", "dbt", "Fivetran", "Lightdash"],
    services: ["Data Infrastructure", "Technical Advisory"],
  },
];

export function Work() {
  return (
    <section id="work" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="work / selected"
          title="Recent engagements."
          description="A few of the systems we've shipped. Sector and metrics anonymized; happy to walk through specifics under NDA."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {work.map((w) => (
            <article
              key={w.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-strong hover:bg-surface-hover"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <MonoLabel>{w.id}</MonoLabel>
                <StatusPill variant="idle">Shipped</StatusPill>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-dim">
                    {w.sector}
                  </div>
                  <h3 className="mt-2 text-lg font-medium leading-snug tracking-tight text-fg">
                    {w.title}
                  </h3>
                </div>

                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
                      Problem
                    </dt>
                    <dd className="text-fg-muted">{w.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
                      What we shipped
                    </dt>
                    <dd className="text-fg-muted">{w.solution}</dd>
                  </div>
                </dl>

                <div className="mt-auto grid grid-cols-3 divide-x divide-border border-y border-border">
                  {w.metrics.map((m) => (
                    <div key={m.label} className="px-3 py-3">
                      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-faint">
                        {m.label}
                      </div>
                      <div className="mt-1 font-mono text-lg font-medium tracking-tight text-fg tabular">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {w.services.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-violet-400/20 bg-violet-400/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-violet-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-fg-faint">
          {/* swap-in pointer for the user */}
          /// case studies are illustrative · live engagements available under NDA
        </p>
      </div>
    </section>
  );
}
