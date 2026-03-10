import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Simple Tools Hub — Free Online Text & Utility Tools",
    template: "%s | Simple Tools Hub",
  },
  description:
    "Free, fast, and privacy-friendly online tools. Word counter, character counter, text case converter, reading time calculator, and more.",
  
  // --- ADD THIS SECTION ---
  icons: {
    icon: "/icon.png", // Path to your icon in the /public folder
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png", // Optional: for iOS home screen
  },
  // ------------------------

  keywords: [
    "word counter",
    "character counter",
    "text tools",
    "online tools",
    "text case converter",
    "reading time calculator",
    "username generator",
  ],
  authors: [{ name: "Simple Tools Hub" }],
  creator: "Simple Tools Hub",
  metadataBase: new URL("https://simpletoolshub.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simpletoolshub.com",
    siteName: "Simple Tools Hub",
    title: "Simple Tools Hub — Free Online Text & Utility Tools",
    description: "Free, fast, and privacy-friendly online tools. No signup needed.",
    images: [
      {
        url: '/icon.png', 
        width: 1200,
        height: 630,
        alt: "Simple Tools Hub Preview",
      },
    ], // Fixed the missing closing brace here
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Tools Hub — Free Online Text & Utility Tools",
    description: "Free, fast, privacy-friendly tools. No signup needed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-surface-bg font-body text-ink antialiased overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
