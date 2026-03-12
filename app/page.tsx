"use client";

import Link from "next/link";
import { 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  LayoutGrid,
  ChevronRight
} from "lucide-react";
import ToolCard from "@/components/ui/ToolCard";
import { tools, categoryLabels, type ToolCategory } from "@/data/tools";

<<<<<<< HEAD
=======
export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Simple Tools Hub — Free Online Text and Utility Tools",
=======
  title: "Simple Tools Hub — Free Online Text & Utility Tools",
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
  description:
    "Fast, free, and privacy-friendly online tools. Word counter, password generator, unit converter, dice roller, and 30+ more. No signup needed.",
};

>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
const FEATURED_IDS = [
  "word-counter", "password-generator", "wedding-hashtag",
  "unit-converter", "age-calculator", "spin-the-wheel",
];

const CATEGORIES: ToolCategory[] = ["text", "formatter", "generator", "sorter", "fun", "utility"];

<<<<<<< HEAD
=======
<<<<<<< HEAD
// Feature items for the "Why" section — no emojis, use SVG icons
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
const WHY_ITEMS = [
  {
    title: "Instant Results",
    body: "Every tool processes your input in real time — no submit buttons, no loading spinners.",
<<<<<<< HEAD
    icon: <Zap size={20} />,
=======
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
  },
  {
    title: "100% Private",
    body: "All processing happens in your browser. Your text never leaves your device.",
<<<<<<< HEAD
    icon: <ShieldCheck size={20} />,
=======
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
  },
  {
    title: "Works Everywhere",
    body: "Fully responsive design that works on any device — phone, tablet, or desktop.",
<<<<<<< HEAD
    icon: <Smartphone size={20} />,
  },
];

export default function HomePage() {
  const featured = FEATURED_IDS
    .map((id) => tools.find((t) => t.id === id))
    .filter(Boolean) as typeof tools;
=======
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const featured = FEATURED_IDS
    .map((id) => tools.find((t) => t.id === id))
    .filter(Boolean) as typeof tools;
=======
export default function HomePage() {
  const featured = FEATURED_IDS.map((id) => tools.find((t) => t.id === id)).filter(Boolean) as typeof tools;
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9

  return (
    <>
      {/* ── Hero ── */}
<<<<<<< HEAD
      <section className="border-b border-border bg-gradient-to-b from-brand/5 to-surface-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
=======
<<<<<<< HEAD
      <section className="border-b border-border bg-gradient-to-b from-brand-subtle to-surface-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl">
            {/* Live badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-sm font-medium text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
=======
      <section className="border-b border-border bg-gradient-to-b from-surface-muted to-surface-bg">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          <div className="mx-auto max-w-2xl">
            {/* Live badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
              <span className="relative flex h-2 w-2">
<<<<<<< HEAD
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
=======
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
              </span>
              {tools.length} Free Tools — No Account Needed
            </div>

<<<<<<< HEAD
            <h1 className="font-display text-4xl font-black tracking-tight text-ink sm:text-6xl">
=======
<<<<<<< HEAD
            <h1 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Tools that just{" "}
              <span className="relative inline-block text-brand">
                work
                {/* Decorative underline */}
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                  <path d="M2 6 C50 2 150 2 198 6" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
=======
            <h1 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
              Tools that just{" "}
              <span className="relative inline-block text-brand">
                work
<<<<<<< HEAD
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                  <path d="M2 6 C50 2 150 2 198 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
=======
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                  <path d="M2 6 C50 2 150 2 198 6" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                </svg>
              </span>
            </h1>

<<<<<<< HEAD
            <p className="mt-8 text-lg leading-relaxed text-ink-muted sm:text-xl">
=======
<<<<<<< HEAD
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg">
=======
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
              From text utilities to random generators, sorting tools, and everyday calculators.
              All free, all instant, all private.
            </p>

<<<<<<< HEAD
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/tools"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand/20 transition-all hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              >
                Browse All Tools
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#featured"
                className="w-full rounded-2xl border border-border bg-surface-card px-8 py-4 text-base font-bold text-ink transition-all hover:bg-surface-muted sm:w-auto"
              >
=======
<<<<<<< HEAD
            <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
              <Link
                href="/tools"
                className="w-full rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-md active:translate-y-0 sm:w-auto"
              >
                Browse All {tools.length} Tools
              </Link>
              <Link
                href="#featured"
                className="w-full rounded-xl border border-border bg-surface-card px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 sm:w-auto"
              >
=======
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/tools" className="rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-md">
                Browse All {tools.length} Tools →
              </Link>
              <Link href="#featured" className="rounded-xl border border-border bg-surface-card px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-sm">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                Quick Start
              </Link>
            </div>
          </div>

<<<<<<< HEAD
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest text-ink-subtle">
            {["No signup", "No tracking", "No ads", "Free forever"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-500" />
=======
<<<<<<< HEAD
          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-ink-subtle sm:gap-6">
            {["No signup", "No tracking", "No ads", "Works offline", "Free forever"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
=======
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-ink-subtle">
            {["No signup", "No tracking", "No ads", "Works offline", "Free forever"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ── Featured Tools ── */}
      <section id="featured" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex items-end justify-between">
=======
<<<<<<< HEAD
      {/* ── Featured Tools ── */}
      <section id="featured" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="mb-6 flex items-end justify-between sm:mb-7">
          <div>
            <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl lg:text-3xl">
              Featured Tools
            </h2>
            <p className="mt-1 text-sm text-ink-muted">Popular picks to get you started.</p>
          </div>
          <Link href="/tools" className="shrink-0 text-sm font-medium text-brand hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
=======
      {/* ── Featured ── */}
      <section id="featured" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-7 flex items-end justify-between">
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          <div>
            <h2 className="font-display text-2xl font-black tracking-tight text-ink sm:text-4xl">
              Featured Tools
            </h2>
            <p className="mt-2 text-ink-muted">Hand-picked essentials for your daily workflow.</p>
          </div>
          <Link href="/tools" className="group hidden items-center gap-1 text-sm font-bold text-brand sm:flex">
            View all
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
          {featured.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} animationDelay={`${i * 0.05}s`} />
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* ── Browse by Category ── */}
      <section className="border-y border-border bg-surface-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex items-center gap-3">
            <LayoutGrid className="text-brand" size={28} />
            <h2 className="font-display text-2xl font-black tracking-tight text-ink sm:text-4xl">
              Browse by Category
            </h2>
          </div>
=======
<<<<<<< HEAD
      {/* ── Browse by Category ── */}
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <h2 className="mb-6 font-display text-xl font-extrabold text-ink sm:mb-7 sm:text-2xl lg:text-3xl">
            Browse by Category
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
=======
      {/* ── Categories ── */}
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="mb-7 font-display text-2xl font-extrabold text-ink sm:text-3xl">Browse by Category</h2>
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
            {CATEGORIES.map((cat) => {
              const catTools = tools.filter((t) => t.category === cat);
              if (!catTools.length) return null;
              return (
<<<<<<< HEAD
                <Link
                  key={cat}
                  href={`/tools?category=${cat}`}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-surface-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-display text-lg font-black text-ink">{categoryLabels[cat]}</h3>
                      <span className="rounded-lg bg-surface-muted px-2 py-1 text-[10px] font-black uppercase text-ink-subtle">
                        {catTools.length} Tools
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {catTools.slice(0, 3).map((t) => (
                        <span key={t.id} className="text-xs text-ink-muted">
                          {t.name}
                        </span>
                      ))}
                    </div>
=======
<<<<<<< HEAD
                <Link
                  key={cat}
                  href={`/tools#${cat}`}
                  className="group rounded-2xl border border-border bg-surface-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-card-hover shadow-card"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-display font-bold text-ink">{categoryLabels[cat]}</h3>
                    <span className="rounded-full bg-surface-muted px-2 py-0.5 text-xs font-medium text-ink-subtle">
                      {catTools.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {first3.map((t) => (
                      <span
                        key={t.id}
                        className="rounded-full border border-border px-2.5 py-0.5 text-xs text-ink-muted"
                      >
                        {t.name}
                      </span>
                    ))}
                    {catTools.length > 3 && (
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-ink-subtle">
                        +{catTools.length - 3} more
                      </span>
                    )}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
                    Browse {categoryLabels[cat]}
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
=======
                <Link key={cat} href={`/tools#${cat}`}
                  className="group rounded-2xl border border-border bg-surface-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-card-hover shadow-card">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-display font-bold text-ink">{categoryLabels[cat]}</h3>
                    <span className="rounded-full bg-surface-muted px-2 py-0.5 text-xs font-medium text-ink-subtle">{catTools.length}</span>
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold text-brand">
                    Explore category <ChevronRight size={14} />
                  </div>
<<<<<<< HEAD
=======
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-orange opacity-0 transition-opacity group-hover:opacity-100">
                    Browse {categoryLabels[cat]} →
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
                  </span>
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why section ── */}
<<<<<<< HEAD
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-black tracking-tight text-ink sm:text-4xl">
            Built for speed. Designed for privacy.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className="group rounded-3xl border border-border bg-surface-card p-8 text-left transition-colors hover:border-brand/20">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
=======
      <section className="border-t border-border">
<<<<<<< HEAD
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl lg:text-3xl">
              Built for speed. Designed for everyone.
            </h2>
            <p className="mt-3 text-sm text-ink-muted sm:text-base">
              Utility tools should load instantly, work without accounts, respect your privacy, and stay out of your way.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:mt-10">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-surface-card p-6 shadow-card">
                {/* Icon badge */}
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  {item.icon}
                </div>
=======
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Built for speed. Designed for everyone.
            </h2>
            <p className="mt-3 text-ink-muted">
              We believe utility tools should load instantly, work without accounts, respect your privacy, and stay out of your way.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { emoji: "⚡", title: "Instant Results", body: "Every tool processes your input in real time — no submit buttons, no loading spinners." },
              { emoji: "🔒", title: "100% Private", body: "All processing happens in your browser. Your text never leaves your device." },
              { emoji: "📱", title: "Works Everywhere", body: "Fully responsive design that works on any device — phone, tablet, or desktop." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-surface-card p-6 shadow-card">
                <div className="mb-3 text-3xl">{item.emoji}</div>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
                <h3 className="font-display font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.body}</p>
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}