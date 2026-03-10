import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata = {
    title: "ER Terminal | Charles Bébin",
    description: "An equity research and valuation platform featuring interactive DCF models and real-time financial tracking.",
};

export default function ERTerminalPage() {
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
                                    ER Terminal
                                </h1>
                                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm font-medium text-gold">
                                    Full-Stack App
                                </span>
                            </div>
                            <p className="text-xl font-light text-cream-muted leading-relaxed max-w-2xl">
                                A personal equity research and valuation platform built to perform professional-grade fundamental analysis, build DCF models, and track prediction market sentiment.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="https://terminal.bebinc.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg bg-cream px-5 py-2.5 text-sm font-medium text-navy transition-transform hover:scale-105"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Visit Website
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
                                        Finance students and aspiring analysts often lack accessible tools to practice professional-grade fundamental analysis outside of static Excel spreadsheets. Existing solutions are either prohibitively expensive or too basic, making it hard to gain real-world modeling experience.
                                    </p>
                                    <p>
                                        I built ER Terminal to solve this. Wrapped in a beautiful navy and gold aesthetic reminiscent of professional finance platforms, it allows users to pull live market data, iterate on <strong>interactive DCF models</strong>, maintain research notes, and run peer comparables seamlessly in the browser.
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
                                        {["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Appwrite", "Recharts"].map(t => (
                                            <span key={t} className="rounded bg-white/5 px-2 py-1 text-xs text-cream-muted">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-24 space-y-8">
                            <a href="https://terminal.bebinc.com/dashboard" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group block">
                                <img src="/er-terminal-detail-1.png" alt="ER Terminal Dashboard" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                                    <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h4 className="text-xl font-medium text-gold">ER Terminal Dashboard</h4>
                                        <p className="text-sm text-cream-muted">A comprehensive view of market data and portfolio metrics.</p>
                                    </div>
                                </div>
                            </a>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <a href="https://terminal.bebinc.com/screener" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group block">
                                    <img src="/er-terminal-detail-2.png" alt="ER Terminal DCF Model" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                                        <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h4 className="text-xl font-medium text-gold">Stock Screener</h4>
                                            <p className="text-sm text-cream-muted">Filter and discover equities using custom financial parameters.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://terminal.bebinc.com/research/NVDA" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group block">
                                    <img src="/er-terminal-detail-3.png" alt="ER Terminal Comparables" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                                        <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h4 className="text-xl font-medium text-gold">Stock Overview</h4>
                                            <p className="text-sm text-cream-muted">In-depth financial profile and metrics for individual equities.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://terminal.bebinc.com/research/NVDA" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group block">
                                    <img src="/er-terminal-detail-4.png" alt="ER Terminal Screener" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                                        <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h4 className="text-xl font-medium text-gold">Financials</h4>
                                            <p className="text-sm text-cream-muted">Filter through available financial data seamlessly.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://terminal.bebinc.com/research/NVDA" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group block">
                                    <img src="/er-terminal-detail-5.png" alt="ER Terminal Analysis" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                                        <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h4 className="text-xl font-medium text-gold">Peers</h4>
                                            <p className="text-sm text-cream-muted">In-depth research notes intertwined with real-time financial tracking.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <a href="https://terminal.bebinc.com/dashboard" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group block">
                                <img src="/er-terminal-detail-6.png" alt="ER Terminal Mobile View" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center backdrop-blur-sm">
                                    <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h4 className="text-xl font-medium text-gold">Valuation</h4>
                                        <p className="text-sm text-cream-muted">Input fundamental metrics to build comprehensive Discounted Cash Flow valuations.</p>
                                    </div>
                                </div>
                            </a>
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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Interactive DCF Valuation</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Engineered a pure TypeScript DCF calculator offering real-time value updates as users adjust margin, CapEx, and growth sliders. Includes a dynamic 5x5 WACC vs Growth sensitivity matrix.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Live Financial Data Integration</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Built advanced server-side proxies using Vercel serverless functions to aggregate data from Yahoo Finance and other sources. Uses optimized React Query caching to eliminate redundant calls and ensure fast loads.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Polymarket Sentiment Tracking</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Integrated the Polymarket API to surface prediction markets relevant to watched equities. Provides a unique, quantitative overlay of real-money sentiment directly alongside fundamental analysis.
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Professional Terminal UI</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Designed a custom component system using Tailwind CSS and Radix UI primitives. The deep navy background with sharp gold accents and native monospace typography reflects the premium aesthetic of institutional platforms.
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
