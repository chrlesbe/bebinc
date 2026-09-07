import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata = {
    title: "C&P Conciergerie | Charles Bébin",
    description: "A public lead-generation site and an internal operations panel for a short-term rental concierge in Vendôme, France.",
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
                                    Client Platform
                                </span>
                            </div>
                            <p className="text-xl font-light text-cream-muted leading-relaxed max-w-2xl">
                                Two products for a short-term rental concierge in Vendôme, France: a public site that turns property owners into leads, and a private panel where the gérants work those leads without leaving the browser.
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
                                <span className="flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-cream-muted">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Panel is private
                                </span>
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
                                        C&amp;P Conciergerie manages Airbnb and Booking.com listings for owners around Vendôme, in the Loire Valley. Almost everyone landing on the site is an owner who is curious but not yet convinced, and the site&apos;s job is to get them past that without a phone call.
                                    </p>
                                    <p>
                                        The first version was a static Eleventy site built around an <strong>interactive revenue simulator</strong>: estimate what a property earns from its sector, type and size, then ask for a real quote. It worked, and it exposed the actual bottleneck. Every lead it produced landed in an inbox, and nobody could see which ones had been answered.
                                    </p>
                                    <p>
                                        So I rebuilt it as a pnpm monorepo of two Next.js 16 applications sharing a UI package and an error-reporting package over one Appwrite database. <strong>The site</strong> carries the simulator, a four-step lead form and the local SEO surface. <strong>The panel</strong> is the other half: a lead pipeline, a planning view, and a two-way email thread per lead, so a reply from an owner arrives where the work happens instead of in a mailbox nobody shares.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-8 rounded-2xl bg-navy/50 p-6 border border-white/5 h-fit">
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">Role</h3>
                                    <p className="text-sm text-cream-muted leading-relaxed">Freelance Web Developer &amp; Designer, sole engineer</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">Timeline</h3>
                                    <p className="text-sm text-cream-muted leading-relaxed">2026 to present. V1 shipped on Eleventy; the V2 platform has been live since September 2026.</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">Stack</h3>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Appwrite", "Resend", "Vercel", "pnpm workspaces"].map(t => (
                                            <span key={t} className="rounded bg-white/5 px-2 py-1 text-xs text-cream-muted">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gold mb-2">Shape</h3>
                                    <p className="text-sm text-cream-muted leading-relaxed">
                                        Two deployed apps, <span className="text-cream">cp-conciergerie.com</span> and <span className="text-cream">admin.cp-conciergerie.com</span>, over two shared workspace packages. A push to main deploys both.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Screenshots */}
                        <div className="mb-24 space-y-8">
                            <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                <img src="/cp-conciergerie-preview.png" alt="C&P Conciergerie homepage" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                    <img src="/cp-conciergerie-detail-1.png" alt="C&P Conciergerie key figures and distribution platforms" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                </div>
                                <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                    <img src="/cp-conciergerie-detail-2.png" alt="C&P Conciergerie revenue simulator" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* The Public Site */}
                    <AnimatedSection delay={0.3}>
                        <div className="mb-24">
                            <h2 className="font-display text-2xl text-cream mb-8">The Public Site</h2>

                            <div className="grid gap-6 sm:grid-cols-2">

                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3v-6m-3 6v-9m-2 9h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Revenue Simulator</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Estimates monthly income in real time as the visitor adjusts sector, property type, surface and bedrooms. It states its own limits on the same page: the figure is gross, before the 20 % commission and cleaning. The estimate survives contact with a real quote.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Hardened Lead Capture</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        A four-step wizard posts to a route handler that validates every field server-side, throttles by IP, and answers a honeypot hit with the same success response a real submission gets, so a bot learns nothing to tune against. Firewall rules at the edge cover what a page-level trap cannot.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Structured for Search and for Assistants</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        A generated sitemap and robots rules, per-page metadata, and JSON-LD carrying the business, its service area, its breadcrumbs and its FAQ, so a tool asked about notice periods in the Vendômois can quote the answer the site actually wrote instead of guessing from prose.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Error Reporting That Costs Nothing</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        The Sentry SDK is 29 KB gzipped, too much to put on every view of a brochure site. A shared shim buffers errors and only fetches the bundle once one actually happens, then replays what it caught. Analytics stay unloaded until the visitor opts in.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </AnimatedSection>

                    {/* The Operations Panel */}
                    <AnimatedSection delay={0.35}>
                        <div className="mb-24">
                            <h2 className="font-display text-2xl text-cream mb-6">The Operations Panel</h2>
                            <p className="text-cream-muted font-light leading-relaxed max-w-2xl mb-10">
                                A second Next.js app at admin.cp-conciergerie.com, behind an Appwrite session. It is not an owner-facing dashboard. It is the tool the gérants run the business from: every lead the site produces, where it stands, what is scheduled, and the whole email thread attached to it.
                            </p>

                            <div className="mb-12 space-y-8">
                                <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                    <img src="/cp-conciergerie-panel-1.png" alt="Panel overview: counters, lead funnel and recent activity" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                        <img src="/cp-conciergerie-panel-2.png" alt="Panel leads table with status filters" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                    </div>
                                    <div className="overflow-hidden rounded-2xl bg-navy/30 border border-white/10 group">
                                        <img src="/cp-conciergerie-panel-3.png" alt="Panel email conversation on a single lead" className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                                    </div>
                                </div>

                                <p className="text-xs text-cream-muted/70">
                                    Panel screenshots use seeded demo data. No real client information is shown.
                                </p>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">

                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Lead Pipeline</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Leads move through nouveau, contacté, qualifié, and converti or perdu. The funnel reads those statuses cumulatively rather than as buckets, so a converted lead still counts as having passed every stage before it, and a lead nobody has looked at counts as work to do, not as a zero.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Two-Way Email, In the Thread</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        Each lead gets its own reply address. Replies arrive through a Resend inbound webhook, are deduplicated, and are filed against the lead, with quoted history, signatures and long legal footers folded away so the actual message is what you read first.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">A Sender Has to Prove Who It Is</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        The inbound webhook is the only endpoint reachable without a session that also writes to the database, so its signature check is the entire security boundary and nothing runs ahead of it. A <code className="text-gold/80">From</code> address is text the sender types, so the receiving server&apos;s DMARC verdict has to pass before it can decide whose thread a message joins.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/5 bg-navy/30 p-8 transition-colors hover:bg-navy/50">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="mb-2 text-lg font-medium text-cream">Built for Daily Use</h3>
                                    <p className="text-sm font-light text-cream-muted leading-relaxed">
                                        A planning view for scheduled work, bulk status changes, a command palette that searches leads by name, and loading skeletons shaped like the page they stand in for, so nothing jumps down the screen the moment the figures land.
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
