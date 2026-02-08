"use client";

import AnimatedSection from "./AnimatedSection";
import { trackContactClick } from "@/lib/analytics";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/charles-bebin/",
    external: true,
    trackAs: "linkedin",
  },
  {
    label: "charles.bebin@gmail.com",
    href: "mailto:charles.bebin@gmail.com",
    external: false,
    trackAs: "email_gmail",
  },
  {
    label: "charles.bebin@essec.edu",
    href: "mailto:charles.bebin@essec.edu",
    external: false,
    trackAs: "email_essec",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-16 pt-28 lg:pt-36">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection trackSection="contact">
          <span className="accent-line" />
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Get in Touch
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-cream-muted sm:text-lg">
            Available for internships, collaborative projects, and professional
            experiences. Don&apos;t hesitate to reach out.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => trackContactClick(link.trackAs)}
                className="group inline-flex items-center gap-2.5 border border-white/8 px-6 py-3.5 text-sm font-medium text-cream transition-all duration-300 hover:border-gold/30 hover:bg-gold/5 hover:text-gold"
              >
                {link.label}
                {link.external && (
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
                )}
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.3}>
          <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
            <p className="font-display text-sm text-cream-muted/40">
              &copy; {new Date().getFullYear()} Charles Bébin
            </p>
            <p className="text-xs text-cream-muted/25">
              Singapore &middot; bebinc.com
            </p>
          </footer>
        </AnimatedSection>
      </div>
    </section>
  );
}
