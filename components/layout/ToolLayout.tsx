"use client";
import Link from "next/link";
import { Info, ShieldCheck, ChevronRight, LayoutGrid } from "lucide-react";
import ToolCard from "@/components/ui/ToolCard";
import { getRelatedTools } from "@/data/tools";

interface HowToStep {
  step: string;
  detail?: string;
}

interface ToolLayoutProps {
  toolId: string;
  title: string;
  description: string;
  intro?: string;
  howTo?: HowToStep[];
  children: React.ReactNode;
}

export default function ToolLayout({
  toolId,
  title,
  description,
  intro,
  howTo,
  children,
}: ToolLayoutProps) {
  const related = getRelatedTools(toolId);

  return (
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
          {title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg max-w-2xl">
          {description}
        </p>
      </header>

      {/* How to use instructions */}
      {howTo && howTo.length > 0 && (
        <section className="mb-8 rounded-2xl border border-brand/10 bg-brand/5 p-5 sm:p-6">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand">
            <Info size={16} strokeWidth={2.5} />
            Quick Start Guide
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
            {related.map((tool) => (
              <ToolCard key={tool.id} tool={tool} compact />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}