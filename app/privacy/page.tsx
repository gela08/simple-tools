import type { Metadata } from "next";
import { ShieldCheck, Cookie, LineChart, Globe, Lock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Simple Tools Hub privacy policy — we don't collect your data. All processing happens in your browser.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 select-none">
      {/* Header */}
      <div className="mb-12 border-b border-border pb-8">
        <h1 className="font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm font-medium text-ink-subtle uppercase tracking-widest">
          Last updated: March 2026
        </p>
      </div>

      <div className="space-y-12">
        {/* The "No-Tracking" Hero Badge */}
        <div className="group rounded-3xl bg-emerald-50/50 p-8 ring-1 ring-emerald-500/20 transition-all hover:bg-emerald-50">
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-200">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-emerald-900">
                Privacy is our Default
              </h2>
              <p className="mt-2 text-base leading-relaxed text-emerald-800/80">
                We do not collect your text, usage data, or personal information. 
                Our business model is based on utility, not data brokerage. 
                All tools run 100% locally in your browser.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid gap-10">
          {[
            {
              icon: Lock,
              title: "1. Data Collection",
              body: "We do not store, log, or transmit any text you enter into our tools. All processing happens locally in your browser using JavaScript. When you close the tab, the data is gone.",
            },
            {
              icon: Cookie,
              title: "2. Cookies & Local Storage",
              body: "We do not use tracking cookies. Some tools may use 'Local Storage' to save your preferences (like dark mode or a recent tool list), but this data never leaves your computer.",
            },
            {
              icon: LineChart,
              title: "3. Analytics",
              body: "We skip the invasive trackers. We use privacy-first, anonymous analytics to see which tools are popular, but we don't track who you are or where you come from.",
            },
            {
              icon: Globe,
              title: "4. Third-Party Requests",
              body: "Fonts and icons are optimized via Next.js to minimize external requests. We don't load scripts from social media networks or ad platforms.",
            },
            {
              icon: ShieldCheck,
              title: "5. Your Rights",
              body: "Since we don't collect personal data, there's no database to search or account to delete. You have the ultimate right: total anonymity.",
            },
            {
              icon: Mail,
              title: "6. Contact",
              body: "Have questions about our security or privacy practices? Reach out via the email listed on our About page.",
            },
          ].map((section) => (
            <div key={section.title} className="flex gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-ink-subtle">
                <section.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold text-ink">
                  {section.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">
                  {section.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-16 rounded-2xl border border-border bg-surface-card p-6 text-center italic text-ink-subtle">
          "The most secure data is the data that was never collected."
        </div>
      </div>
    </div>
  );
}