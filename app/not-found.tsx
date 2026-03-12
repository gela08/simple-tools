"use client";

import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
<<<<<<< HEAD
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      {/* Visual Element */}
      <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-brand/5 animate-in fade-in zoom-in duration-500">
        <div className="absolute inset-0 animate-pulse rounded-3xl bg-brand/5" />
        <Search className="h-10 w-10 text-brand" strokeWidth={1.5} />
        <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-surface-card font-display text-xs font-black text-brand shadow-card border border-brand/10">
          404
        </div>
=======
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
<<<<<<< HEAD
      <div className="text-6xl font-extrabold text-brand/30 font-display">
=======
      <div className="text-6xl font-extrabold text-brand-orange/30 font-display">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        404
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      </div>

      {/* Text Content */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
        <h1 className="font-display text-3xl font-black tracking-tight text-ink sm:text-4xl">
          Tool not found
        </h1>
        <p className="mx-auto mt-4 max-w-xs text-base leading-relaxed text-ink-muted">
          We couldn't find the page you're looking for. It might have been moved or renamed.
        </p>
      </div>

      {/* Navigation Actions */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
        <Link
          href="/"
<<<<<<< HEAD
          className="group flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-xl shadow-brand/20 transition-all hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98]"
=======
<<<<<<< HEAD
          className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark"
=======
          className="rounded-xl bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-orange-dark"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
        >
          <Home size={18} />
          Back to Home
        </Link>
        <Link
          href="/tools"
          className="group flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface-card px-6 py-3 text-sm font-bold text-ink transition-all hover:bg-surface-muted"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Browse All Tools
        </Link>
      </div>

      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-3xl" />
      </div>
    </div>
  );
}