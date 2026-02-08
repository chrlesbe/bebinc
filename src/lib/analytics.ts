/**
 * GA4 Analytics — Decision-grade event tracking for bebinc.com
 *
 * Events follow object_action naming convention (lowercase, underscores).
 * Every event maps to a business decision. No vanity tracking.
 *
 * Measurement ID is loaded from NEXT_PUBLIC_GA_ID env variable.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

/* ── Low-level gtag helper ───────────────────── */

type GtagCommand = "config" | "event" | "set";

export function gtag(command: GtagCommand, ...args: unknown[]) {
  if (typeof window === "undefined" || !GA_ID) return;
  window.gtag?.(command, ...args);
}

/* ── Page view (enhanced) ────────────────────── */

export function trackPageView(url: string) {
  gtag("config", GA_ID, { page_path: url });
}

/* ── CTA clicks ──────────────────────────────── */

interface CtaClickParams {
  cta_name: string;
  cta_location: string;
  cta_destination?: string;
}

export function trackCtaClick(params: CtaClickParams) {
  gtag("event", "cta_clicked", params);
}

/* ── Content gate events ─────────────────────── */

export function trackContentGateLinkedIn() {
  gtag("event", "content_gate_linkedin", {
    method: "gate_overlay",
  });
}

export function trackContentGateUnlocked() {
  gtag("event", "content_gate_unlocked", {
    method: "gate_overlay",
  });
}

/* ── Section viewed (scroll depth) ───────────── */

export function trackSectionViewed(sectionName: string) {
  gtag("event", "section_viewed", {
    section_name: sectionName,
  });
}

/* ── Contact link clicked ────────────────────── */

export function trackContactClick(contactMethod: string) {
  gtag("event", "contact_clicked", {
    contact_method: contactMethod,
  });
}

/* ── Type augmentation for window.gtag ───────── */

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
