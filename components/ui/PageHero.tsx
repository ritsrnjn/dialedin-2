"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({
  title,
  subtitle,
  badge,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 with-diagonal-lines">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-2 text-f-p text-[var(--foreground-dim)]">
              <li>
                <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <span>/</span>
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-[var(--foreground-muted)]">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-[var(--foreground)] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="section-label">{badge}</span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-f-h1-mobile lg:text-f-h2 mt-6 max-w-3xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 text-f-h4-mobile lg:text-f-h4 text-[var(--foreground-dim)] max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
