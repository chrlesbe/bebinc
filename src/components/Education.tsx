"use client";

import AnimatedSection from "./AnimatedSection";

interface School {
  name: string;
  degree: string;
  period: string;
  grade?: string;
  coursework?: string;
  activities?: string;
  note?: string;
}

const SCHOOLS: School[] = [
  {
    name: "ESSEC Business School",
    degree: "Bachelor of Business Administration (BBA)",
    period: "2025 — 2029",
    grade: "16.03 / 20.00",
    coursework:
      "Financial Accounting, Mathematics, Microeconomics, Statistics, Data Analysis",
    activities:
      "ECE (ESSEC Club of Economics), Finance Society, Basketball, Badminton, Padel",
    note: "#1 four-year BBA program in France (Le Point, L'Étudiant, Challenges)",
  },
  {
    name: "Lycée Jean-Pierre Vernant",
    degree: "French Baccalauréat",
    period: "Sep 2022 — Jul 2025",
    grade: "Mathematics: 18 · Economic and Social Sciences: 17",
    activities:
      "Class Delegate, Member of the School Committee, Volunteer for school events",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection trackSection="education">
          <span className="accent-line" />
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Education
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SCHOOLS.map((school, i) => (
            <AnimatedSection key={school.name} delay={i * 0.12}>
              <article className="group h-full border border-white/5 bg-navy/30 p-7 transition-all duration-300 hover:border-gold/15 hover:bg-navy-light/20">
                {/* Period badge */}
                <p className="text-xs font-medium tracking-wide text-gold/70">
                  {school.period}
                </p>

                {/* School name */}
                <h3 className="mt-3 font-display text-xl text-cream">
                  {school.name}
                </h3>

                {/* Degree */}
                <p className="mt-1 text-sm font-light text-cream-muted">
                  {school.degree}
                </p>

                {/* Grade */}
                {school.grade && (
                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-px w-3 bg-gold/40" />
                    <p className="text-xs text-cream-muted/70">
                      <span className="text-cream/80">{school.grade}</span>
                    </p>
                  </div>
                )}

                {/* Coursework */}
                {school.coursework && (
                  <div className="mt-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream-muted/40">
                      Coursework
                    </p>
                    <p className="mt-1.5 text-xs font-light leading-relaxed text-cream-muted/70">
                      {school.coursework}
                    </p>
                  </div>
                )}

                {/* Activities */}
                {school.activities && (
                  <div className="mt-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream-muted/40">
                      Activities
                    </p>
                    <p className="mt-1.5 text-xs font-light leading-relaxed text-cream-muted/70">
                      {school.activities}
                    </p>
                  </div>
                )}

                {/* Note */}
                {school.note && (
                  <p className="mt-5 border-t border-white/5 pt-4 text-xs font-medium italic text-gold/50">
                    {school.note}
                  </p>
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
