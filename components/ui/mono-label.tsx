import { cn } from "@/lib/cn";

export function MonoLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.14em] text-fg-dim",
        className
      )}
    >
      {children}
    </span>
  );
}
