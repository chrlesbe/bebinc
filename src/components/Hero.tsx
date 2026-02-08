"use client";

import { motion } from "framer-motion";
import { trackCtaClick } from "@/lib/analytics";

const STAGGER = 0.12;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,169,110,0.06),transparent)]" />

      <div className="relative z-10 text-center">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-cream-muted"
        >
          Financial Analyst &middot; ESSEC Business School
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-display text-6xl leading-[1.05] tracking-tight text-cream sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Charles
          <br />
          <span className="text-gold">Bébin</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 + STAGGER * 2 }}
          className="mx-auto mt-8 max-w-md text-base font-light leading-relaxed text-cream-muted sm:text-lg"
        >
          Ambitious BBA student driven by finance, discipline,
          <br className="hidden sm:block" /> and a global perspective.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + STAGGER * 3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="https://www.linkedin.com/in/charles-bebin/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackCtaClick({
                cta_name: "view_linkedin",
                cta_location: "hero",
                cta_destination: "linkedin",
              })
            }
            className="group inline-flex items-center gap-2.5 bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-deep transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_32px_rgba(201,169,110,0.25)]"
          >
            View LinkedIn
            <svg
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={() =>
              trackCtaClick({
                cta_name: "get_in_touch",
                cta_location: "hero",
                cta_destination: "contact_section",
              })
            }
            className="inline-flex items-center gap-2 border border-cream/15 px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition-all duration-300 hover:border-cream/40 hover:bg-white/5"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-cream-muted/50">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-cream-muted/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
