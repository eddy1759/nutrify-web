import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Playfair_Display } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Nutrify — AI Food Label Scanner & Nutrition Intelligence",
    template: "%s | Nutrify AI",
  },
  description:
    "Nutrify is an AI-powered food label scanner that uses OCR, BERT-based NOVA classification, and LLM agents to analyze ingredients, detect additives, and deliver clean-label nutrition insights.",
  keywords: [
    "AI food label scanner",
    "nutrition intelligence",
    "NOVA classification",
    "clean label analysis",
    "ingredient OCR",
    "food additive detection",
    "ultra-processed food detection",
    "AI nutrition API",
    "BERT food classifier",
  ],
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
    <html lang="en" suppressHydrationWarning>
      <head>
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Nutrify",
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS, Android, Web",
          description:
            "AI-powered food label scanner using OCR, BERT-based NOVA classification, and LLM agents for clean-label nutrition analysis.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          creator: {
            "@type": "Organization",
            name: "Nutrify",
          },
        }),
      }}
    />
  </head>
      <body
        className={`${GeistSans.variable} ${inter.variable} ${playfair.variable} antialiased font-sans bg-slate-50 text-slate-900 selection:bg-emerald-500/30 overflow-x-hidden`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
