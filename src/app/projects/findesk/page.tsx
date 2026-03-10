import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata = {
    title: "FinDesk | Charles Bébin",
    description: "A comprehensive personal finance dashboard with AI insights, expense tracking, and live stock market data.",
};

export default function FinDeskPage() {
    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-background pb-20 pt-32 lg:pt-40">
                <main className="mx-auto max-w-4xl px-6">

                    {/* Back Button */}
                    <AnimatedSection>
                        <Link
                            href="/#projects"
                            className="inline-flex items-center gap-2 text-sm text-cream-muted transition-colors hover:text-gold mb-12"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Projects
                        </Link>
                    </AnimatedSection>

                    {/* Header */}
                    <AnimatedSection delay={0.1}>
                        <div className="mb-16">
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <h1 className="font-display text-4xl text-cream sm:text-5xl md:text-6xl">
                                    FinDesk
                                </h1>
                                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm font-medium text-gold">
                                    Full-Stack App
                                </span>
                            </div>
                            <p className="text-xl font-light text-cream-muted leading-relaxed max-w-2xl">
                                A personal finance command center bridging the gap between daily expense tracking and long-term market investing, powered by AI.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="https://findesk.bebinc.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg bg-cream px-5 py-2.5 text-sm font-medium text-navy transition-transform hover:scale-105"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Overview */}
                    <AnimatedSection delay={0.2}>
                        <div className="grid gap-12 md:grid-cols-3 mb-16">
                            <div className="md:col-span-2 space-y-6">
                                <h2 className="font-display text-2xl text-cream">Overview</h2>
                                <div className="space-y-4 text-cream-muted font-light leading-relaxed">
                                    <p>
                                        Managing personal finances often means jumping between multiple disjointed apps: one for tracking daily coffee runs, another for monitoring stock portfolios, and yet another for budgeting. FinDesk solves this fragmentation by providing a unified, secure dashboard.
                                    </p>
                                    <p>
                                        I built FinDesk to be the ultimate companion for financial awareness. It doesn&apos;t just display numbers; it actively generates <strong>insights using Groq&apos;s extremely fast LLMs</strong> to summarize spending habits and highlight anomalies in real time.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-8 rounded-2xl bg-navy/50 p-6 border border-white/5 h-fit">
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">Role</h3>
                                    <p className="text-sm text-cream-muted leading-relaxed">Lead Developer & Designer</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">Timeline</h3>
                                    <p className="text-sm text-cream-muted leading-relaxed">2026</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">Technologies</h3>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Appwrite", "Groq AI", "Recharts"].map(t => (
                                            <span key={t} className="rounded bg-white/5 px-2 py-1 text-xs text-cream-muted">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Screenshots */}
                        <div className="mb-24 space-y-8">
                            <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                <img src="/findesk-detail-1.png" alt="FinDesk Dashboard" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                    <img src="/findesk-detail-2.png" alt="FinDesk Live Watchlist" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                </div>
                                <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                    <img src="/findesk-detail-3.png" alt="FinDesk AI Insights" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Key Features */}
                    <AnimatedSection delay={0.3}>
                        <div className="mb-24">
                            <h2 className="font-display text-2xl text-cream mb-8">Engineering Features</h2>

                            <div className="grid gap-6 sm:grid-cols-2">

                                {/* Feature 1 */}
                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">AI-Powered Insights</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Integrated the Groq API for near-instantaneous LLM inference. The system securely analyzes monthly spending patterns and auto-generates readable financial summaries.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Live Stock Watchlist</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Utilizes Alpha Vantage API to track global equities. Implemented a reliable batch-fetching Next.js API route to drastically reduce client-side requests and avoid rate limits.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Robust Server Auth</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Uses Appwrite for secure BaaS. Developed a custom server-side tracker enforcing strict API rate constraints and precise usage telemetry directly to a secure collection.
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Bespoke UI/UX</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Designed entirely from scratch with Tailwind CSS and Framer Motion. Features a deep dark mode with dynamic, vibrant chart colors, ensuring absolute legibility and a premium feel.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </AnimatedSection>

                </main>
            </div>
        </>
    );
}
