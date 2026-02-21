"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { COMPANY, PARTNERS } from "@/lib/constants";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-[#2E2E2E] border-t-[#FF4D00] animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-20 pb-4 min-h-0 md:min-h-[700px]">
      {/* Spline 3D Scene - Desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute inset-0 spline-container hidden md:block"
      >
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-[#2E2E2E] border-t-[#FF4D00] animate-spin" />
            </div>
          }
        >
          <Spline scene="https://prod.spline.design/NQ9Qs07-tYHSubNq/scene.splinecode" />
        </Suspense>
      </motion.div>

      {/* Mobile fallback background */}
      <div className="absolute inset-0 md:hidden with-diagonal-lines opacity-30" />

      {/* Content Layer */}
      <div className="relative md:absolute md:inset-0 z-10 flex items-start md:items-center pt-0 md:pt-0 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0 }}
              className="flex items-center justify-center mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#2E2E2E] text-f-p text-[#E6E6E6]"
                style={{
                  textShadow:
                    "0 0 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 bg-[#FF4D00]"
                  style={{ boxShadow: "0 0 6px rgba(255,77,0,0.5)" }}
                />
                Engineering Contracting
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-f-h1-mobile lg:text-f-h1 mb-5"
              style={{
                textShadow:
                  "0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7)",
              }}
            >
              Build Software That{" "}
              <span className="text-[#FF4D00]">Scales</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-f-p text-[#C4C4C4] max-w-2xl mx-auto mb-8"
              style={{
                textShadow:
                  "0 0 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)",
              }}
            >
              {COMPANY.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <Link
                href={COMPANY.bookingUrl}
                className="btn-primary px-6 py-3 pointer-events-auto"
              >
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#services"
                className="btn-secondary px-6 py-3 pointer-events-auto"
              >
                Our Services
              </Link>
            </motion.div>

            {/* Logo Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="w-full"
            >
              <p className="text-[#757575] text-f-p-mobile text-center mb-4 uppercase tracking-widest">
                Trusted by innovative teams
              </p>
              <div className="relative overflow-hidden">
                <div className="flex items-center animate-scroll">
                  {[...PARTNERS, ...PARTNERS, ...PARTNERS].map(
                    (partner, i) => (
                      <div
                        key={`${partner}-${i}`}
                        className="flex-shrink-0 mx-4 md:mx-6"
                      >
                        <span className="text-f-h4 text-[#757575] opacity-50 whitespace-nowrap">
                          {partner}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
