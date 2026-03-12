import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { ShieldCheck, Zap, EyeOff, Heart, ChevronRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Simple Tools Hub — free, fast, and privacy-friendly online tools for everyday tasks.",
};

// Helper for the icon backgrounds in the list
const getIconBg = (color: string) => {
  const map: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    amber: "bg-amber-100 text-amber-600",
    cyan: "bg-cyan-100 text-cyan-600",
    teal: "bg-teal-100 text-teal-600",
    lime: "bg-green-100 text-green-600",
    violet: "bg-violet-100 text-violet-600",
    slate: "bg-slate-200 text-slate-600",
    green: "bg-emerald-100 text-emerald-600",
    pink: "bg-pink-100 text-pink-600",
    indigo: "bg-indigo-100 text-indigo-600",
    orange: "bg-orange-100 text-orange-600",
    yellow: "bg-yellow-100 text-yellow-600",
    fuchsia: "bg-fuchsia-100 text-fuchsia-600",
    red: "bg-red-100 text-red-600",
    rose: "bg-rose-100 text-rose-600",
    emerald: "bg-emerald-100 text-emerald-600",
    sky: "bg-sky-100 text-sky-600",
  };
  return map[color] || "bg-gray-100 text-gray-600";
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 select-none">
      {/* Header */}
      <div className="mb-16 text-center sm:text-left">
        <h1 className="font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          About Simple Tools Hub
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          We build tiny, useful tools that just work. No accounts, no tracking, and definitely no ads.
          Everything stays right in your browser.
        </p>
      </div>

      {/* Philosophy Grid */}
      <div className="mb-20 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Zap, title: "Pure Speed", desc: "No heavy frameworks or bloat. Just instant results." },
          { icon: EyeOff, title: "100% Private", desc: "Your data never leaves your device. Ever." },
          { icon: ShieldCheck, title: "Clean UI", desc: "No ads, popups, or dark patterns. Just utility." },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-border bg-surface-card p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <item.icon size={20} />
            </div>
            <h3 className="font-display font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Detailed Story */}
      <section className="prose prose-slate max-w-none border-t border-border pt-16">
        <div className="space-y-6 text-base leading-relaxed text-ink-muted">
          <p>
            Simple Tools Hub was born out of a specific frustration: the modern web is cluttered.
            Most online utilities today are buried under layers of ads, cookie banners, and
            "sign up to download" walls. We wanted to create a sanctuary of simple, functional tools.
          </p>
          <p>
            Our architecture is simple: <strong className="text-ink font-bold">Client-Side First</strong>.
            When you use our Word Counter or Password Generator, the logic happens on your own CPU.
            This means the tools work offline once loaded, and your sensitive information is never
            transmitted over the wire.
          </p>
        </div>
      </section>

      {/* Tool list */}
      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between border-b border-border pb-4">
          <h2 className="font-display text-2xl font-black tracking-tight text-ink">
            Current Tools ({tools.length})
          </h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <li key={tool.id}>
                <Link
                  href={tool.slug}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-surface-card p-4 transition-all hover:-translate-y-1 hover:border-brand/20 hover:shadow-lg"
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${getIconBg(tool.color)} transition-transform group-hover:scale-110`}>
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-ink group-hover:text-brand truncate">
                      {tool.name}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-ink-subtle">
                      Explore <ChevronRight size={10} />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Footer Info / Contact */}
      <section className="mt-24 rounded-[2rem] bg-ink p-8 text-center text-white sm:p-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 mb-6">
          <Heart size={24} className="text-brand" fill="currentColor" />
        </div>
        <h2 className="font-display text-2xl font-bold">Open & Honest</h2>
        <p className="mt-4 text-white/70">
          This project is built with love for the developer community.
          Have a tool suggestion or found a bug?
        </p>
        <div className="mt-8 flex justify-center">
          {/* Use Link from next/link to navigate to your contact page */}
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-ink transition-transform hover:scale-105 active:scale-95"
          >
            <Mail size={18} />
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}