import Link from "next/link";
import { Linkedin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services#web" },
    { label: "Mobile Apps", href: "/services#mobile" },
    { label: "AI & LLM Tools", href: "/services#ai" },
    { label: "Enterprise Solutions", href: "/services#enterprise" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Industries", href: "/industries" },
    { label: "Careers", href: "/company/careers" },
    { label: "Privacy Policy", href: "/company/privacy" },
  ],
  Pages: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[var(--accent-primary)] flex items-center justify-center">
                <span className="text-black font-bold text-sm">DS</span>
              </div>
              <span className="logo-text text-[var(--foreground)]">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-f-p text-[var(--foreground-dim)] leading-relaxed max-w-xs">
              {COMPANY.description}
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-f-p uppercase tracking-widest text-[var(--foreground-muted)] mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="actionable text-f-p text-[var(--foreground-dim)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-f-p text-[var(--foreground-dim)]">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
          <a
            href={COMPANY.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground-dim)] hover:text-[var(--accent-primary)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
