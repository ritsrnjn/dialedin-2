import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusPill } from "@/components/ui/status-pill";
import { MonoLabel } from "@/components/ui/mono-label";

type Service = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  engagement: string;
  status: "featured" | "available";
  featured?: boolean;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: "ai-agents",
    number: "SVC_01",
    title: "AI Agents",
    tagline: "Digital teammates that run on a schedule.",
    description:
      "We build agents that scrape, monitor, report, triage, and act. They live in Slack, your inbox, your CRM, your warehouse — and they show up on a cadence you control, from real-time to weekly.",
    stack: ["OpenAI", "Anthropic", "LangGraph", "Temporal", "Postgres"],
    engagement: "6–12 wks · from $35k",
    status: "featured",
    featured: true,
    icon: <IconAgents />,
  },
  {
    id: "internal-software",
    number: "SVC_02",
    title: "Internal Software",
    tagline: "The tools your team needs that SaaS can't sell you.",
    description:
      "Custom dashboards, admin panels, internal portals, and workflow apps. Built on your data, in your stack, with your auth.",
    stack: ["Next.js", "tRPC", "Prisma", "Postgres", "Tailwind"],
    engagement: "4–10 wks · from $25k",
    status: "available",
    icon: <IconSoftware />,
  },
  {
    id: "data-infra",
    number: "SVC_03",
    title: "Data Infrastructure",
    tagline: "Make your data work for you, not the other way around.",
    description:
      "Pipelines, warehouses, dbt models, observability. The plumbing that makes every dashboard, report, and agent in your stack possible.",
    stack: ["dbt", "Snowflake", "BigQuery", "Airflow", "Fivetran"],
    engagement: "6–14 wks · from $40k",
    status: "available",
    icon: <IconData />,
  },
  {
    id: "advisory",
    number: "SVC_04",
    title: "Technical Advisory",
    tagline: "Senior engineers in the room when you need them.",
    description:
      "Fractional CTO, architecture reviews, hiring panels, technical due diligence. For teams that need senior judgment, not more hands.",
    stack: ["Architecture", "Hiring", "DD", "Roadmaps"],
    engagement: "Retainer · from $8k/mo",
    status: "available",
    icon: <IconAdvisory />,
  },
];

export function Services() {
  const featured = services.find((s) => s.featured)!;
  const rest = services.filter((s) => !s.featured);

  return (
    <section id="services" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="services / 04 modules"
          title="Four practices. One operating discipline."
          description="Each service ships independently or composes with the others. The featured one is the wedge most teams hire us for first."
        />

        <div className="mt-14 grid gap-4">
          {/* Featured row */}
          <ServiceCard service={featured} featured />

          {/* Remaining 3 in a row */}
          <div className="grid gap-4 md:grid-cols-3">
            {rest.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  return (
    <Link
      href={`#${service.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-strong hover:bg-surface-hover"
    >
      {/* top meta bar */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-3">
          <MonoLabel>{service.number}</MonoLabel>
          <span className="text-fg-faint">·</span>
          <MonoLabel className="text-fg-muted">
            {service.id.replace(/-/g, "_")}
          </MonoLabel>
        </div>
        <StatusPill variant={featured ? "accent" : "live"} pulse={featured}>
          {featured ? "Featured" : "Available"}
        </StatusPill>
      </div>

      <div
        className={
          featured
            ? "grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr]"
            : "flex flex-1 flex-col gap-5 p-6"
        }
      >
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-md border border-border bg-bg-elev text-fg-muted">
              {service.icon}
            </span>
            <h3
              className={
                featured
                  ? "text-2xl font-medium tracking-tight text-fg sm:text-3xl"
                  : "text-xl font-medium tracking-tight text-fg"
              }
            >
              {service.title}
            </h3>
          </div>

          <p
            className={
              featured
                ? "text-lg leading-relaxed text-fg sm:text-xl"
                : "text-[15px] leading-relaxed text-fg"
            }
          >
            {service.tagline}
          </p>

          <p
            className={
              featured
                ? "mt-3 max-w-xl text-[15px] leading-relaxed text-fg-muted"
                : "mt-2 text-sm leading-relaxed text-fg-muted"
            }
          >
            {service.description}
          </p>
        </div>

        {/* Right column — stack + engagement */}
        <div
          className={
            featured
              ? "flex flex-col justify-between gap-6 rounded-lg border border-border bg-bg-elev p-5"
              : "mt-auto flex flex-col gap-3 border-t border-border pt-4"
          }
        >
          <div>
            <MonoLabel>Stack</MonoLabel>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {service.stack.map((t) => (
                <span
                  key={t}
                  className="rounded border border-border bg-bg px-2 py-0.5 font-mono text-[11px] text-fg-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <MonoLabel>Typical engagement</MonoLabel>
            <div className="mt-1.5 font-mono text-sm text-fg tabular">
              {service.engagement}
            </div>
          </div>

          {featured && (
            <div className="flex items-center justify-between border-t border-border pt-4">
              <MonoLabel>Read more</MonoLabel>
              <span className="font-mono text-sm text-fg-muted transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </div>
          )}
        </div>
      </div>

      {!featured && (
        <div className="flex items-center justify-between border-t border-border px-6 py-3">
          <MonoLabel>Read more</MonoLabel>
          <span className="font-mono text-sm text-fg-muted transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </div>
      )}
    </Link>
  );
}

/* ---------- Tiny inline icons (1.5px stroke, line-art) ---------- */

function IconAgents() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="3" y="4" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="7" cy="9" r="1" fill="currentColor" />
      <circle cx="11" cy="9" r="1" fill="currentColor" />
      <path d="M9 2v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconSoftware() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="3" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 7h14" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="4.5" cy="5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function IconData() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <ellipse cx="9" cy="4.5" rx="6" ry="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 4.5v4c0 1.1 2.7 2 6 2s6-.9 6-2v-4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 8.5v4c0 1.1 2.7 2 6 2s6-.9 6-2v-4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function IconAdvisory() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 15c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
