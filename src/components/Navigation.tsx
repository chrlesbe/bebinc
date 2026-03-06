"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackCtaClick } from "@/lib/analytics";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
          ? "bg-navy-deep/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-xl tracking-tight text-cream transition-colors hover:text-gold"
          >
            BebinC
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-light tracking-wide text-cream-muted transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/charles-bebin/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackCtaClick({
                    cta_name: "linkedin",
                    cta_location: "navbar",
                    cta_destination: "linkedin",
                  })
                }
                className="inline-flex items-center gap-2 border border-gold/30 px-5 py-2 text-sm font-medium tracking-wide text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                LinkedIn
                <ArrowUpRight />
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-all duration-300 ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-navy-deep/98 backdrop-blur-sm md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-display text-2xl text-cream transition-colors hover:text-gold"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://www.linkedin.com/in/charles-bebin/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackCtaClick({
                  cta_name: "linkedin",
                  cta_location: "mobile_menu",
                  cta_destination: "linkedin",
                })
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="mt-4 border border-gold/30 px-6 py-3 text-sm font-medium tracking-wide text-gold transition-all hover:border-gold hover:bg-gold/10"
            >
              LinkedIn
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ArrowUpRight() {
  return (
    <svg
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
  );
}
