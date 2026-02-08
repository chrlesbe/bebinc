"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import {
  trackContentGateLinkedIn,
  trackContentGateUnlocked,
} from "@/lib/analytics";

interface ContentGateProps {
  children: ReactNode;
}

export default function ContentGate({ children }: ContentGateProps) {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="relative">
      {/* Blurred content */}
      <div
        className={`transition-all duration-700 ease-out ${
          unlocked
            ? "blur-0 saturate-100"
            : "pointer-events-none select-none blur-[6px] saturate-50"
        }`}
      >
        {children}
      </div>

      {/* Gate overlay */}
      <AnimatePresence>
        {!unlocked && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-20 flex items-start justify-center"
          >
            {/* Gradient mask — fades from transparent at top to solid navy */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-navy-deep/70 to-navy-deep" />

            {/* CTA card */}
            <div className="sticky top-[40vh] z-30 mx-6 flex max-w-md flex-col items-center text-center">
              {/* Accent line */}
              <span className="mb-5 block h-px w-10 bg-gold/50" />

              <h3 className="font-display text-2xl text-cream sm:text-3xl">
                Want to see more?
              </h3>

              <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-cream-muted">
                View my full experience, education, and credentials — or connect
                with me directly on LinkedIn.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                {/* Primary: LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/charles-bebin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContentGateLinkedIn()}
                  className="group inline-flex items-center justify-center gap-2.5 bg-gold px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-deep transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_32px_rgba(201,169,110,0.25)]"
                >
                  View on LinkedIn
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

                {/* Secondary: Reveal on site */}
                <button
                  onClick={() => {
                    trackContentGateUnlocked();
                    setUnlocked(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 border border-cream/15 px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition-all duration-300 hover:border-cream/40 hover:bg-white/5"
                >
                  See on Website
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
