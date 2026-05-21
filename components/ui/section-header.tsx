import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">
        <span className="text-fg-faint">{"//"}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="max-w-3xl text-balance text-3xl font-medium tracking-tight text-fg sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
