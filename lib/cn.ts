// Minimal className joiner — avoids the clsx/tailwind-merge dep for now.
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
