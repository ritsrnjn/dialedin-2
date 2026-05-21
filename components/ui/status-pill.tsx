import { cn } from "@/lib/cn";

type Variant = "live" | "warn" | "info" | "accent" | "idle";

const styles: Record<Variant, string> = {
  live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  warn: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  info: "border-sky-400/30 bg-sky-400/10 text-sky-300",
  accent: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  idle: "border-zinc-700 bg-zinc-800/40 text-zinc-400",
};

const dotColors: Record<Variant, string> = {
  live: "bg-emerald-400 text-emerald-400",
  warn: "bg-amber-400 text-amber-400",
  info: "bg-sky-400 text-sky-400",
  accent: "bg-violet-400 text-violet-400",
  idle: "bg-zinc-500 text-zinc-500",
};

export function StatusPill({
  variant = "live",
  pulse = false,
  children,
  className,
}: {
  variant?: Variant;
  pulse?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("pill", styles[variant], className)}>
      <span
        className={cn(
          "size-1.5 rounded-full",
          dotColors[variant],
          pulse && "animate-[pulseDot_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        )}
      />
      {children}
    </span>
  );
}
