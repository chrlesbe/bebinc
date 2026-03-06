"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
    return (
        <section id="projects" className="px-6 pb-28 pt-10 lg:pb-36 lg:pt-16">
            <div className="mx-auto max-w-4xl">
                <AnimatedSection trackSection="projects">
                    <span className="accent-line" />
                    <h2 className="font-display text-3xl text-cream sm:text-4xl">
                        Selected Work
                    </h2>
                </AnimatedSection>

                <div className="mt-14 space-y-8">
                    <AnimatedSection delay={0.1}>
                        <Link href="/projects/findesk" className="block focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-navy-deep rounded-2xl">
                            <article className="group relative overflow-hidden rounded-2xl border border-white/5 bg-navy/50 transition-colors hover:border-gold/30 hover:bg-navy p-6 sm:p-10">
                                <div className="flex flex-col gap-8 md:flex-row md:items-center">
                                    <div className="w-full md:w-2/5 shrink-0 overflow-hidden rounded-xl bg-navy-deep/50 aspect-video relative border border-white/10 group-hover:border-gold/20 transition-colors">
                                        <img src="/findesk-preview.png" alt="FinDesk Dashboard Preview" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-display text-2xl text-cream sm:text-3xl">
                                                FinDesk
                                            </h3>
                                            <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-gold">
                                                Web App
                                            </span>
                                        </div>

                                        <p className="text-sm font-medium text-gold/80">
                                            Next.js 14 · Appwrite · Tailwind CSS · AI Integration
                                        </p>

                                        <p className="text-base font-light leading-relaxed text-cream-muted">
                                            A comprehensive personal finance dashboard designed to consolidate
                                            expense tracking, budgeting, and live stock market watchlists.
                                            Built with performance and security in mind, featuring AI-powered
                                            spending insights and robust server-side analytics.
                                        </p>

                                        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-cream transition-colors group-hover:text-gold">
                                                View Case Study
                                                <ArrowRight />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

function ArrowRight() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
        >
            <path d="M3.33334 8H12.6667" />
            <path d="M8 3.33334L12.6667 8L8 12.6667" />
        </svg>
    );
}
