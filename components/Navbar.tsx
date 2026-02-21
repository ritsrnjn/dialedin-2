"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-color)] bg-black/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--accent-primary)] flex items-center justify-center">
              <span className="text-black font-bold text-sm">DS</span>
            </div>
            <span className="logo-text text-[var(--foreground)]">
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-f-p text-[var(--foreground-dim)] hover:text-[var(--foreground)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href={COMPANY.bookingUrl} className="btn-primary">
              Book a Call
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[var(--foreground)] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-[var(--border-color)] bg-black"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-f-h4-mobile text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={COMPANY.bookingUrl}
                className="btn-primary mt-2 text-center"
                onClick={() => setMobileOpen(false)}
              >
                Book a Call
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
