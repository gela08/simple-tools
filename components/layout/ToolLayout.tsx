"use client";
import Link from "next/link";
import { Info, ShieldCheck, ChevronRight, LayoutGrid } from "lucide-react";
import ToolCard from "@/components/ui/ToolCard";
import { getRelatedTools } from "@/data/tools";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
interface HowToStep {
  step: string;
  detail?: string;
}

<<<<<<< HEAD
=======
=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
interface ToolLayoutProps {
  toolId: string;
  title: string;
  description: string;
<<<<<<< HEAD
  intro?: string;
  howTo?: HowToStep[];
=======
<<<<<<< HEAD
  /** Short one-liner shown above the tool card */
  intro?: string;
  /** Step-by-step usage instructions */
  howTo?: HowToStep[];
=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
  children: React.ReactNode;
}

export default function ToolLayout({
  toolId,
  title,
  description,
<<<<<<< HEAD
  intro,
  howTo,
=======
<<<<<<< HEAD
  intro,
  howTo,
=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
  children,
}: ToolLayoutProps) {
  const related = getRelatedTools(toolId);

  return (
<<<<<<< HEAD
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 animate-in fade-in duration-700">
      
      {/* Breadcrumb - Clean & Interactive */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-ink-subtle sm:text-sm">
        <Link href="/" className="flex items-center gap-1 hover:text-brand transition-colors">
          <LayoutGrid size={14} />
          Home
        </Link>
        <ChevronRight size={12} className="text-border" />
        <Link href="/tools" className="hover:text-brand transition-colors">Tools</Link>
        <ChevronRight size={12} className="text-border" />
        <span className="text-ink-muted truncate font-semibold">{title}</span>
      </nav>

      {/* Page header */}
      <header className="mb-8 sm:mb-10">
        <h1 className="font-display text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-5xl">
=======
<<<<<<< HEAD
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">

      {/* Breadcrumb */}
      <nav className="mb-5 flex items-center gap-1.5 text-xs text-ink-subtle sm:text-sm">
        <Link href="/" className="hover:text-ink-muted transition-colors">Home</Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-ink-muted transition-colors">Tools</Link>
=======
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-ink-subtle">
        <Link href="/" className="hover:text-ink-muted">
          Home
        </Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-ink-muted">
          Tools
        </Link>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        <span>/</span>
        <span className="text-ink-muted">{title}</span>
      </nav>

<<<<<<< HEAD
      {/* Page header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="font-display text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
          {description}
        </p>
      </div>

      {/* How to use instructions — shown when howTo prop is provided */}
      {howTo && howTo.length > 0 && (
        <div className="mb-6 rounded-xl border border-brand/20 bg-brand/5 px-5 py-4">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand">
            {/* Info icon */}
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How to use
          </h2>
          <ol className="space-y-1.5">
            {howTo.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-ink-muted">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-xs font-bold text-brand">
                  {i + 1}
                </span>
                <span>
                  <span className="font-medium text-ink">{item.step}</span>
                  {item.detail && <span className="text-ink-muted"> — {item.detail}</span>}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Intro text above tool card */}
      {intro && (
        <p className="mb-4 text-sm text-ink-muted">{intro}</p>
      )}

      {/* Privacy notice — all tools run locally */}
      <div className="mb-4 flex items-center gap-1.5 text-xs text-ink-subtle">
        <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        All processing happens locally in your browser. Nothing is sent to any server.
      </div>

      {/* Tool UI card */}
      <div className="rounded-2xl border border-border bg-surface-card p-5 shadow-tool sm:p-7">
=======
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          {title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg max-w-2xl">
          {description}
        </p>
      </header>

<<<<<<< HEAD
      {/* How to use instructions */}
      {howTo && howTo.length > 0 && (
        <section className="mb-8 rounded-2xl border border-brand/10 bg-brand/5 p-5 sm:p-6">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand">
            <Info size={16} strokeWidth={2.5} />
            Quick Start Guide
=======
      {/* Tool UI */}
      <div className="rounded-2xl border border-border bg-surface-card p-6 shadow-tool sm:p-8">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        {children}
      </div>

      {/* Related tools */}
      {related.length > 0 && (
<<<<<<< HEAD
        <section className="mt-12">
          <h2 className="mb-4 font-display text-lg font-bold text-ink sm:text-xl">
            Related Tools
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
=======
        <section className="mt-14">
          <h2 className="mb-4 font-display text-xl font-bold text-ink">
            Related Tools
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          </h2>
          <ol className="space-y-3">
            {howTo.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-ink-muted leading-snug">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-brand text-[11px] font-black text-white shadow-sm shadow-brand/20">
                  {i + 1}
                </span>
                <span>
                  <strong className="text-ink font-semibold">{item.step}</strong>
                  {item.detail && <span className="block mt-0.5 text-xs opacity-80">{item.detail}</span>}
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Privacy notice - Enhanced with Lucide */}
      <div className="mb-5 flex items-center gap-2 rounded-lg bg-green-500/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-green-700 sm:text-xs w-fit border border-green-500/10">
        <ShieldCheck size={14} strokeWidth={2.5} />
        Privacy Focused: All processing happens in your browser
      </div>

      {/* Main Tool UI container */}
      <main className="relative rounded-3xl border border-border bg-surface-card p-1 shadow-2xl shadow-black/[0.03]">
        <div className="rounded-[22px] border border-border/50 bg-white p-6 sm:p-10">
          {intro && (
            <p className="mb-6 text-sm italic text-ink-subtle border-l-2 border-border pl-4">
              {intro}
            </p>
          )}
          {children}
        </div>
      </main>

      {/* Related tools section */}
      {related.length > 0 && (
        <section className="mt-16 pt-8 border-t border-border">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-ink">
              Continue Exploring
            </h2>
            <Link href="/tools" className="text-xs font-bold text-brand hover:underline">
              View all tools
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
            {related.map((tool) => (
              <ToolCard key={tool.id} tool={tool} compact />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}