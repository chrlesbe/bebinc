import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata = {
    title: "C&P Conciergerie | Charles Bébin",
    description: "A marketing website and revenue simulator for an Airbnb & Booking property management concierge in Vendôme, France.",
};

export default function CPConciergeriePage() {
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
                                    C&amp;P Conciergerie
                                </h1>
                                <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-sm font-medium text-gold">
                                    Client Website
                                </span>
                            </div>
                            <p className="text-xl font-light text-cream-muted leading-relaxed max-w-2xl">
                                A marketing and lead-generation website for a short-term rental property management concierge in Vendôme, France, built to convert property owners into clients with a live revenue simulator.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="https://cp-conciergerie.com"
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
                                        C&amp;P Conciergerie manages Airbnb and Booking.com listings for property owners around Vendôme, in the Loire Valley. Their biggest hurdle wasn&apos;t service quality — it was getting a hesitant property owner from &quot;curious&quot; to &quot;convinced&quot; without a phone call.
                                    </p>
                                    <p>
                                        I designed and built the site to close that gap: a fast, statically-generated Eleventy site with an <strong>interactive revenue simulator</strong> that estimates a property&apos;s monthly income from just its location, type, and size, dedicated pages for each service area to capture local search, and a lead form wired straight to a serverless contact endpoint. I&apos;m now rebuilding it as a Next.js + Appwrite platform with a dedicated dashboard for owners to track their own bookings and revenue.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-8 rounded-2xl bg-navy/50 p-6 border border-white/5 h-fit">
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">Role</h3>
                                    <p className="text-sm text-cream-muted leading-relaxed">Freelance Web Developer &amp; Designer</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">Timeline</h3>
                                    <p className="text-sm text-cream-muted leading-relaxed">2026 — Present</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">Technologies</h3>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {["Eleventy", "JavaScript", "Vercel", "Sentry"].map(t => (
                                            <span key={t} className="rounded bg-white/5 px-2 py-1 text-xs text-cream-muted">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">V2 (In Development)</h3>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {["Next.js 16", "Appwrite", "Tailwind CSS 4", "Turborepo"].map(t => (
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
                                <img src="/cp-conciergerie-preview.png" alt="C&P Conciergerie Homepage" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                    <img src="/cp-conciergerie-detail-1.png" alt="C&P Conciergerie Services Section" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                </div>
                                <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                    <img src="/cp-conciergerie-detail-2.png" alt="C&P Conciergerie Revenue Simulator" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                <img src="/cp-conciergerie-detail-3.png" alt="C&P Conciergerie Dynamic Pricing" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3v-6m-3 6v-9m-2 9h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Live Revenue Simulator</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Built an interactive calculator that estimates monthly rental income in real time as a visitor adjusts property type, location, and room count — turning a cold visitor into a qualified lead before they ever pick up the phone.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Local SEO Architecture</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Statically generated with Eleventy for near-instant load times, with dedicated pages per service town and a generated sitemap so the site ranks for hyper-local searches across the Vendômois.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Privacy-First Monitoring</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Self-hosted the Sentry error-monitoring bundle instead of a third-party loader script, and built a custom consent flow so analytics only load after explicit visitor opt-in — keeping the site compliant by design.
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21h2m0 0h10M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-4h4v4" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Owner Dashboard (V2)</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Currently architecting a Next.js + Appwrite rebuild as a pnpm monorepo, adding a dedicated owner-facing panel backed by a real database so clients can track their bookings and revenue without calling the office.
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
