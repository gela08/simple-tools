import type { Metadata } from "next";
import Link from "next/link";
import ToolCard from "@/components/ui/ToolCard";
import { tools, categoryLabels, type ToolCategory } from "@/data/tools";

export const metadata: Metadata = {
  title: "Simple Tools Hub — Free Online Text & Utility Tools",
  description:
    "Fast, free, and privacy-friendly online tools. Word counter, password generator, unit converter, dice roller, and 30+ more. No signup needed.",
};

const FEATURED_IDS = [
  "word-counter", "password-generator", "wedding-hashtag",
  "unit-converter", "age-calculator", "spin-the-wheel",
];

const CATEGORIES: ToolCategory[] = ["text", "formatter", "generator", "sorter", "fun", "utility"];

export default function HomePage() {
  const featured = FEATURED_IDS.map((id) => tools.find((t) => t.id === id)).filter(Boolean) as typeof tools;

  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border bg-gradient-to-b from-surface-muted to-surface-bg">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <div className="mx-auto max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/8 px-4 py-1.5 text-sm font-medium text-brand-orange">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
              </span>
              {tools.length} Free Tools — No Account Needed
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Tools that just{" "}
              <span className="relative inline-block text-brand-orange">
                work
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" aria-hidden="true">
                  <path d="M2 6 C50 2 150 2 198 6" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              From text utilities to random generators, sorting tools, and everyday calculators.
              All free, all instant, all private.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/tools" className="rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-md">
                Browse All {tools.length} Tools →
              </Link>
              <Link href="#featured" className="rounded-xl border border-border bg-surface-card px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-sm">
                Quick Start
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-ink-subtle">
            {["No signup", "No tracking", "No ads", "Works offline", "Free forever"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured ── */}
      <section id="featured" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Featured Tools</h2>
            <p className="mt-1 text-sm text-ink-muted">Popular picks to get you started.</p>
          </div>
          <Link href="/tools" className="text-sm font-medium text-brand-orange hover:underline">View all →</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} animationDelay={`${i * 0.05}s`} />
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="border-t border-border bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="mb-7 font-display text-2xl font-extrabold text-ink sm:text-3xl">Browse by Category</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const catTools = tools.filter((t) => t.category === cat);
              if (!catTools.length) return null;
              const first3 = catTools.slice(0, 3);
              return (
                <Link key={cat} href={`/tools#${cat}`}
                  className="group rounded-2xl border border-border bg-surface-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-card-hover shadow-card">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-display font-bold text-ink">{categoryLabels[cat]}</h3>
                    <span className="rounded-full bg-surface-muted px-2 py-0.5 text-xs font-medium text-ink-subtle">{catTools.length}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {first3.map((t) => (
                      <span key={t.id} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-ink-muted">{t.name}</span>
                    ))}
                    {catTools.length > 3 && <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-ink-subtle">+{catTools.length - 3} more</span>}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-orange opacity-0 transition-opacity group-hover:opacity-100">
                    Browse {categoryLabels[cat]} →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why section ── */}
      <section className="border-t border-border">
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
                <h3 className="font-display font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
