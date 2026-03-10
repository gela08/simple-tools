import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Simple Tools Hub — free, fast, and privacy-friendly online tools for everyday tasks.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 select-none">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
          About Simple Tools Hub
        </h1>
        <p className="mt-3 text-base leading-relaxed text-ink-muted">
          We build tiny, useful tools that just work — no login, no tracking,
          no ads. Everything runs in your browser.
        </p>
      </div>

      {/* Story */}
      <section className="prose-custom space-y-4 text-ink-muted">
        <p className="leading-relaxed">
          Simple Tools Hub started with a simple frustration: most online
          utilities are bloated, covered in ads, demand your email, and track
          everything you type. We wanted to fix that.
        </p>
        <p className="leading-relaxed">
          Every tool on this site runs entirely in your browser. Your text is{" "}
          <strong className="text-ink">never sent to any server</strong>. There
          are no analytics scripts watching what you type, and no ad networks
          profiling your behavior.
        </p>
        <p className="leading-relaxed">
          We keep things fast on purpose — no heavy JavaScript frameworks, no
          unnecessary animations, no popups. Just functional, well-designed
          tools you can use on any device.
        </p>
      </section>

      {/* Tool list */}
      <section className="mt-12">
        <h2 className="mb-4 font-display text-xl font-bold text-ink">
          Current Tools ({tools.length})
        </h2>
        <ul className="space-y-2">
          {tools.map((tool) => (
            <li key={tool.id}>
              <Link
                href={tool.slug}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <span className="text-xl">{tool.emoji}</span>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    {tool.name}
                  </div>
                  <div className="text-xs text-ink-subtle">
                    {tool.description}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Philosophy */}
      <section className="mt-12 rounded-2xl bg-brand/5 p-6 ring-1 ring-brand/15">
        <h2 className="mb-2 font-display text-lg font-bold text-ink">
          Our Philosophy
        </h2>
        <ul className="space-y-1.5 text-sm text-ink-muted">
          {[
            "Free, always.",
            "No tracking. No ads. No dark patterns.",
            "All processing runs in your browser.",
            "Optimized for speed and low-end devices.",
            "Accessible to everyone.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-brand">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
