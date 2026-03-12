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

const FEATURED_IDS = [
  "word-counter", "password-generator", "wedding-hashtag",
  "unit-converter", "age-calculator", "spin-the-wheel",
];

const CATEGORIES: ToolCategory[] = ["text", "formatter", "generator", "sorter", "fun", "utility"];

const WHY_ITEMS = [
  {
    title: "Instant Results",
    body: "Every tool processes your input in real time — no submit buttons, no loading spinners.",
    icon: <Zap size={20} />,
  },
  {
    title: "100% Private",
    body: "All processing happens in your browser. Your text never leaves your device.",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Works Everywhere",
    body: "Fully responsive design that works on any device — phone, tablet, or desktop.",
    icon: <Smartphone size={20} />,
  },
];

export default function HomePage() {
  const featured = FEATURED_IDS
    .map((id) => tools.find((t) => t.id === id))
    .filter(Boolean) as typeof tools;

  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border bg-gradient-to-b from-brand/5 to-surface-bg ">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24 select-none">
          <div className="mx-auto max-w-2xl">
            {/* Live badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              {tools.length} Free Tools — No Account Needed
            </div>

            <h1 className="font-display text-4xl font-black tracking-tight text-ink sm:text-6xl">
              Tools that just{" "}
              <span className="relative inline-block text-brand">
                work
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                  <path d="M2 6 C50 2 150 2 198 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-ink-muted sm:text-xl">
              From text utilities to random generators, sorting tools, and everyday calculators.
              All free, all instant, all private.
            </p>

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
                Quick Start
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest text-ink-subtle">
              {["No signup", "No tracking", "No ads", "Free forever"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-green-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Tools ── */}
      <section id="featured" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex items-end justify-between select-none">
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
          {featured.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} animationDelay={`${i * 0.05}s`} />
          ))}
        </div>
      </section>

      {/* ── Browse by Category ── */}
      <section className="border-y border-border bg-surface-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 select-none">
          <div className="mb-10 flex items-center gap-3">
            <LayoutGrid className="text-brand" size={28} />
            <h2 className="font-display text-2xl font-black tracking-tight text-ink sm:text-4xl">
              Browse by Category
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const catTools = tools.filter((t) => t.category === cat);
              if (!catTools.length) return null;
              return (
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
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold text-brand">
                    Explore category <ChevronRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why section ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center select-none">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}