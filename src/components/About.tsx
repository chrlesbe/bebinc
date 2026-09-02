"use client";

import AnimatedSection from "./AnimatedSection";

const HIGHLIGHTS = [
  { label: "Based in", value: "Singapore" },
  { label: "Studying at", value: "ESSEC Business School" },
  { label: "Recognition", value: "Dean's List — Top 6%" },
  { label: "Focus", value: "Finance & Economics" },
  { label: "Available for", value: "Internships & Projects" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection trackSection="about">
          <span className="accent-line" />
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            About
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-8 max-w-2xl text-base font-light leading-[1.8] text-cream-muted sm:text-lg">
            Global BBA Student at ESSEC Business School (Asia-Pacific Campus). I
            am an ambitious and curious student driven by a genuine desire to
            learn and continuously improve. My academic journey — from French
            secondary education to ESSEC&apos;s Global BBA — has shaped a
            mindset grounded in discipline, adaptability, and an eagerness to
            take on new challenges.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mt-6 max-w-2xl text-base font-light leading-[1.8] text-cream-muted sm:text-lg">
            As President of the ESSEC Singapore Basketball Association, I
            lead the association&apos;s operations and team representation on
            campus — building on a long-time background as a competitive
            basketball player that shaped my resilience and ability to work
            effectively within a group.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-6 max-w-2xl text-base font-light leading-[1.8] text-cream-muted sm:text-lg">
            At ESSEC, I aim to deepen my understanding of business and finance
            while developing a strong international perspective. I value rigorous
            environments that encourage intellectual growth, collaboration, and
            integrity.
          </p>
        </AnimatedSection>

        {/* Highlights grid */}
        <AnimatedSection delay={0.4}>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-white/5 sm:grid-cols-5">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="bg-navy/50 px-5 py-6 transition-colors duration-300 hover:bg-navy-light/40"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream-muted/60">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-cream">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
