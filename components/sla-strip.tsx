import { MonoLabel } from "@/components/ui/mono-label";

// Honest "SLA-style" metrics for a serious agency — capability not vanity.
const metrics = [
  { label: "On-call response", value: "< 2 hrs", sub: "business hours" },
  { label: "Typical engagement", value: "4–12 wks", sub: "fixed scope, fixed price" },
  { label: "Stack coverage", value: "30+ tools", sub: "ts, py, sql, k8s" },
  { label: "Last incident", value: "47 days", sub: "across active deployments" },
];

export function SlaStrip() {
  return (
    <section
      aria-label="Service level metrics"
      className="border-b border-border bg-bg-elev"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="px-6 py-5">
            <MonoLabel>{m.label}</MonoLabel>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-medium tracking-tight text-fg tabular sm:text-[28px]">
                {m.value}
              </span>
            </div>
            <div className="mt-0.5 font-mono text-[11px] text-fg-faint">
              {m.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
