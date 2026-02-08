import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Charles Bébin | Financial Analyst & ESSEC BBA",
  description:
    "Charles Bébin — Financial Analyst at ECE (ESSEC Club of Economics). Global BBA student at ESSEC Business School, Singapore. Available for internships and collaborative projects in finance.",
  keywords: [
    "Charles Bébin",
    "Financial Analyst",
    "ESSEC Business School",
    "BBA",
    "Finance",
    "Singapore",
  ],
  authors: [{ name: "Charles Bébin" }],
  openGraph: {
    title: "Charles Bébin | Financial Analyst & ESSEC BBA",
    description:
      "Financial Analyst at ECE | Global BBA at ESSEC Business School, Singapore.",
    url: "https://bebinc.com",
    siteName: "BebinC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Bébin | Financial Analyst & ESSEC BBA",
    description:
      "Financial Analyst at ECE | Global BBA at ESSEC Business School, Singapore.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${jakarta.variable} noise-overlay`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
