import Link from "next/link";
import { StatusPill } from "@/components/ui/status-pill";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="DialedIN Solutions home"
        >
          <Logo />
          <div className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-medium tracking-tight text-fg">
              DialedIN
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">
              /// solutions
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { href: "#services", label: "Services" },
            { href: "#agents", label: "AI Agents" },
            { href: "#work", label: "Work" },
            { href: "#team", label: "Team" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-fg-muted transition-colors hover:bg-surface hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <StatusPill variant="live" pulse>
              Accepting Q3 work
            </StatusPill>
          </div>
          <Link
            href="#contact"
            className="rounded-md border border-border-strong bg-surface px-3 py-1.5 text-sm font-medium text-fg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-colors hover:bg-surface-hover"
          >
            Scope a project
            <span className="ml-1.5 font-mono text-fg-dim">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  // Concentric squares — knob/dial inspired, no glow
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="20"
        height="20"
        rx="3"
        stroke="currentColor"
        className="text-fg-dim"
        strokeWidth="1.2"
      />
      <rect
        x="5"
        y="5"
        width="12"
        height="12"
        rx="2"
        stroke="currentColor"
        className="text-fg-muted"
        strokeWidth="1.2"
      />
      <rect
        x="9"
        y="9"
        width="4"
        height="4"
        rx="0.5"
        className="fill-emerald-400"
      />
    </svg>
  );
}
