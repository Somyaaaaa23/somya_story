import type { Metadata, Viewport } from "next";
import { Gloock, Instrument_Serif, Inter_Tight, Pinyon_Script } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const script = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-script", display: "swap" });
const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const hand = Gloock({ subsets: ["latin"], weight: "400", variable: "--font-hand", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Somya Upadhyay — A Developer's Field Notes",
  description: "Somya Upadhyay is a B.Tech CSE student at BIT Mesra building software and applied AI/ML: GraphSentinel, PharmaDrishti, two accepted research papers, and hackathon wins.",
  applicationName: "Somya — Origin Story",
  authors: [{ name: "Somya Upadhyay" }],
  openGraph: {
    title: "Somya Upadhyay — A Developer's Field Notes",
    description: "I didn't start with a master plan. I started by building.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somya Upadhyay — A Developer's Field Notes",
    description: "I didn't start with a master plan. I started by building.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFCF8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${script.variable} ${sans.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
