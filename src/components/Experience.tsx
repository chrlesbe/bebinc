"use client";

import AnimatedSection from "./AnimatedSection";

interface Role {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  skills?: string[];
}

const ROLES: Role[] = [
  {
    title: "Financial Analyst",
    company: "ECE — ESSEC Club of Economics",
    type: "",
    period: "Jan 2026 — Present",
    location: "Singapore · On-site",
    bullets: [
      "Financial Analysis & Research within ESSEC's leading economics club.",
      "Developing skills in financial accounting and quantitative analysis.",
    ],
    skills: ["Financial Analysis", "Research", "Financial Accounting"],
  },
  {
    title: "Sales Assistant",
    company: "The Lunar Rabbit Boulangerie",
    type: "Part-time",
    period: "Oct 2025 — Present",
    location: "Singapore · On-site",
    bullets: [
      "Provided exceptional customer service in a high-traffic retail environment.",
      "Managed cash transactions and point-of-sale operations with accuracy.",
      "Executed closing tasks while upholding high service standards.",
    ],
    skills: ["Customer Service", "Time Management", "Operations"],
  },
  {
    title: "Independent Contractor",
    company: "Freelance",
    type: "Remote",
    period: "Jun 2022 — Present",
    location: "Remote",
    bullets: [
      "Delivered high-quality digital content using Adobe Creative Suite.",
      "Designed content growth strategies — 25,000+ engaged followers.",
      "Developed responsive websites and custom automation tools, enhancing client efficiency by up to 30%.",
    ],
    skills: [
      "Adobe Creative Suite",
      "Web Development",
      "Content Strategy",
      "Automation",
    ],
  },
  {
    title: "Construction Assistant",
    company: "Actual Group",
    type: "Contract",
    period: "Jul 2025 — Aug 2025",
    location: "Toulouse, France · On-site",
    bullets: [
      "Collaborated with a dedicated team in a fast-paced construction environment.",
      "Developed strong reliability and physical endurance while adhering to strict safety procedures.",
    ],
  },
  {
    title: "Founder & Project Manager",
    company: "Multiplayer Server Development",
    type: "Self-employed",
    period: "Jan 2021 — Aug 2025",
    location: "France · Remote",
    bullets: [
      "Founded and scaled multiplayer roleplay servers — 10,000+ users.",
      "Designed back-end systems and front-end interfaces using Lua, JavaScript, and MySQL.",
      "Led community management and monetization strategies for sustainable growth.",
    ],
    skills: ["Project Management", "Full-Stack Development", "Community Growth"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection trackSection="experience">
          <span className="accent-line" />
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Experience
          </h2>
        </AnimatedSection>

        <div className="mt-14 space-y-0">
          {ROLES.map((role, i) => (
            <AnimatedSection key={role.title + role.company} delay={i * 0.08}>
              <article className="group relative border-t border-white/5 py-8 transition-colors duration-300 hover:bg-white/[0.015] sm:py-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  {/* Left: role info */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-cream sm:text-2xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-cream-muted">
                      {role.company}
                      {role.type && (
                        <span className="text-cream-muted/50">
                          {" "}
                          · {role.type}
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Right: period & location */}
                  <div className="shrink-0 text-left sm:text-right">
                    <p className="text-sm font-medium text-gold/80">
                      {role.period}
                    </p>
                    <p className="mt-0.5 text-xs text-cream-muted/50">
                      {role.location}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-5 space-y-2">
                  {role.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm font-light leading-relaxed text-cream-muted"
                    >
                      <span className="mt-2 block h-px w-3 shrink-0 bg-gold/40" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                {role.skills && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-white/5 bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-wide text-cream-muted/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
