"use client";

import Link from "next/link";
import { CheckCircle2, Home, ArrowLeft } from "lucide-react";

export default function ContactSuccess() {
  return (
    <div className="bg-surface-bg flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      {/* Success Icon with Pulse Effect */}
      <div className="relative mb-8">
        <div className="absolute inset-0 animate-ping rounded-3xl bg-emerald-500/20 duration-[2000ms]" />
        {/* Change h-24 w-24 to include shrink-0 */}
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-[2rem] bg-emerald-50 text-emerald-500 animate-in zoom-in duration-500">
          <CheckCircle2 size={48} />
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
        <h1 className="font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          Message <span className="text-emerald-500">Received!</span>
        </h1>

      </div>
      <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink-muted">
        I've got your feedback. I usually read and respond to inquiries personally within 1-3 business days.
      </p>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <Link
          href="/"
          className="group flex items-center justify-center gap-2 rounded-2xl bg-brand px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Home size={20} />
          Back to Home
        </Link>
        <Link
          href="/tools"
          className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface-card px-8 py-4 text-base font-bold text-ink transition-all hover:bg-surface-muted active:scale-[0.98]"
        >
          <ArrowLeft size={20} />
          Keep Browsing
        </Link>
      </div>

      {/* Decorative background element to match home page */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>
    </div>
  );
}