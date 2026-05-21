import Link from "next/link";
import { MonoLabel } from "@/components/ui/mono-label";

const systems = [
  { name: "Engineering", status: "operational" },
  { name: "Operations", status: "operational" },
  { name: "Email response", status: "operational" },
  { name: "Slack response", status: "operational" },
];

const links = {
  product: [
    { label: "AI Agents", href: "#agents" },
    { label: "Internal Software", href: "#services" },
    { label: "Data Infra", href: "#services" },
    { label: "Advisory", href: "#services" },
  ],
  agency: [
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Writing", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:hello@dialedin.solutions" },
  ],
};

export function StatusFooter() {
  return (
    <footer className="bg-bg-elev">
      {/* status strip */}
      <div className="border-y border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-fg-muted">
              all systems operational
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-faint">
            {systems.map((s) => (
              <span key={s.name} className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                <span>{s.name}</span>
              </span>
            ))}
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-faint">
            last incident :: 47d ago
          </span>
        </div>
      </div>

      {/* main */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo />
            <div className="flex items-baseline gap-1.5">
              <span className="text-[15px] font-medium tracking-tight text-fg">
                DialedIN
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">
                /// solutions
              </span>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
            A software & AI operations agency. We build the systems mid-market
            teams need in production.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link
              href="mailto:hello@dialedin.solutions"
              className="font-mono text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline"
            >
              hello@dialedin.solutions
            </Link>
          </div>
        </div>

        <FooterCol title="services" links={links.product} />
        <FooterCol title="agency" links={links.agency} />
        <FooterCol title="resources" links={links.resources} />
      </div>

      {/* bottom legal/version */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-faint">
          <span>© {new Date().getFullYear()} DialedIN Solutions · all rights reserved</span>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-fg-muted">privacy</Link>
            <Link href="#" className="hover:text-fg-muted">terms</Link>
            <span>·</span>
            <span>dialedin.web v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <MonoLabel>{title}</MonoLabel>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="1" y="1" width="20" height="20" rx="3" stroke="currentColor" className="text-fg-dim" strokeWidth="1.2" />
      <rect x="5" y="5" width="12" height="12" rx="2" stroke="currentColor" className="text-fg-muted" strokeWidth="1.2" />
      <rect x="9" y="9" width="4" height="4" rx="0.5" className="fill-emerald-400" />
    </svg>
  );
}
