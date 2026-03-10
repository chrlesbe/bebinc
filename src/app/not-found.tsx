"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";

export default function NotFound() {
    return (
        <>
            <Navigation />
            <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
                <AnimatedSection className="flex flex-col items-center text-center">
                    <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gold/10 text-gold shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>

                    <h1 className="mb-4 font-display text-5xl font-bold text-cream sm:text-7xl">
                        404
                    </h1>
                    <h2 className="mb-8 text-2xl font-light text-cream-muted sm:text-3xl">
                        Route off-grid.
                    </h2>
                    <p className="mb-12 max-w-md text-base leading-relaxed text-cream-muted opacity-80">
                        The page you are looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back to familiar territory.
                    </p>

                    <Link
                        href="/"
                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Return Home
                        </span>
                        <div className="absolute inset-0 z-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>
                </AnimatedSection>
            </div>
        </>
    );
}
