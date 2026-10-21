import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  themeColor: "#F5F0E6",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
