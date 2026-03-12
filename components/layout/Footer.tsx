"use client";

import Link from "next/link";
import Image from "next/image";
import { tools, categoryLabels, type ToolCategory } from "@/data/tools";

<<<<<<< HEAD
// Categories to show in footer tool columns
const FOOTER_CATS: ToolCategory[] = ["text", "formatter", "generator", "sorter", "fun", "utility"];

// ── Developer info ──
const DEVELOPER_NAME = "Angela Gardan";
const DEVELOPER_PORTFOLIO = "https://akaizer.vercel.app/";
const DEVELOPER_GITHUB = ""; //https://github.com/gela08

// ── Showcase items ──
const OTHER_WORKS = [
  { 
    title: "My Portfolio", 
    description: "Personal projects, professional work, and technical blog.", 
    url: "https://akaizer.vercel.app/" 
  },
  { 
    title: "Jelly Photobooth", 
    description: "A fun, web-based online photobooth with nostalgic filters.", 
    url: "https://jelly-photobooth.vercel.app/" 
  },
  { 
    title: "Love Circuit Game Hub", 
    description: "A personalized web-based arcade filled with nostalgic charm and custom-coded surprises.",
    url: "https://valentines-surprise-for-zeke.vercel.app/" 
  },
  { 
    title: "HCDC CETSO Portal", 
    description: "A centralized student management system for attendance tracking and organizational programs.",
    url: "https://hcdc-cetso-portal.vercel.app/" 
  },
];
=======
<<<<<<< HEAD
// Categories to show in footer tool columns
const FOOTER_CATS: ToolCategory[] = ["text", "formatter", "generator", "sorter", "fun", "utility"];

// ── Developer info — update DEVELOPER_NAME and links below ──
const DEVELOPER_NAME = "your name";
const DEVELOPER_PORTFOLIO = ""; // e.g. "https://yourportfolio.com"
const DEVELOPER_GITHUB = "";    // e.g. "https://github.com/yourhandle"

// ── Showcase items — add your other works here ──
// Each entry: { title, description, url }
const OTHER_WORKS: { title: string; description: string; url: string }[] = [
  // Example:
  // { title: "My Portfolio", description: "Personal projects and work", url: "https://yourportfolio.com" },
  // { title: "Another Project", description: "A brief description", url: "https://project.com" },
];
=======
const CATEGORIES: ToolCategory[] = ["text", "formatter", "generator", "sorter", "fun", "utility"];
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
<<<<<<< HEAD
    <footer className="border-t border-border bg-surface-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Brand & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-2.5 font-display text-xl font-extrabold text-ink transition-opacity hover:opacity-90">
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-brand transition-transform group-hover:scale-105">
                <Image
                  src="/icon.png"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </span>
              <span>
                Simple<span className="text-brand">Tools</span>
              </span>
=======
    <footer className="border-t border-border bg-surface-muted">
<<<<<<< HEAD
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">

        {/* Main grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
              {/* Brand icon — inline SVG lightning bolt */}
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13 2L4.09 12.96A1 1 0 005 14.5h6.5L10 22l9.91-11.04A1 1 0 0019 9.5H12.5L13 2z" />
                </svg>
              </span>
              Simple<span className="text-brand">Tools</span>
=======
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-orange text-xs text-white">⚡</span>
              Simple<span className="text-brand-orange">Tools</span>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {tools.length} free, fast, and privacy-first tools. No accounts, no tracking, just pure utility running right in your browser.
            </p>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-widest text-ink-subtle">
              © {currentYear} Simple Tools Hub
            </p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <p className="mt-4 text-xs text-ink-subtle">
              © {new Date().getFullYear()} Simple Tools Hub
            </p>
          </div>

          {/* Tool category columns — first two categories */}
          {FOOTER_CATS.slice(0, 2).map((cat) => (
            <div key={cat}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                {categoryLabels[cat]}
              </h3>
              <ul className="space-y-2">
                {tools
                  .filter((t) => t.category === cat)
                  .slice(0, 5)
                  .map((t) => (
                    <li key={t.id}>
                      <Link
                        href={t.slug}
                        className="text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        {t.name}
                      </Link>
                    </li>
                  ))}
=======
            <p className="mt-4 text-xs text-ink-subtle">© {new Date().getFullYear()} Simple Tools Hub </p>
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          </div>

          {/* Columns 2 & 3: Dynamic Tool Categories */}
          {FOOTER_CATS.slice(0, 2).map((cat) => (
            <div key={cat}>
<<<<<<< HEAD
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-subtle">
                {categoryLabels[cat]}
              </h3>
              <ul className="space-y-3">
                {tools
                  .filter((t) => t.category === cat)
                  .slice(0, 5)
                  .map((t) => (
                    <li key={t.id}>
                      <Link
                        href={t.slug}
                        className="text-sm text-ink-muted transition-colors hover:text-brand"
                      >
                        {t.name}
                      </Link>
                    </li>
                  ))}
=======
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-subtle">{categoryLabels[cat]}</h3>
              <ul className="space-y-2">
                {tools.filter((t) => t.category === cat).slice(0, 5).map((t) => (
                  <li key={t.id}>
                    <Link href={t.slug} className="text-sm text-ink-muted transition-colors hover:text-ink">
                      {t.name}
                    </Link>
                  </li>
                ))}
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
              </ul>
            </div>
          ))}

<<<<<<< HEAD
          {/* Column 4: Site Links */}
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-subtle">
              Resources
            </h3>
            <ul className="space-y-3">
=======
<<<<<<< HEAD
          {/* Site links column */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              More Tools
            </h3>
            <ul className="space-y-2">
              {FOOTER_CATS.slice(2).map((cat) => (
=======
          {/* Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-subtle">More Tools</h3>
            <ul className="space-y-2">
              {CATEGORIES.slice(2).map((cat) => (
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
                <li key={cat}>
                  <Link href="/tools" className="text-sm text-ink-muted transition-colors hover:text-ink">
                    {categoryLabels[cat]}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD

            <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              Site
            </h3>
=======
            <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wider text-ink-subtle">Site</h3>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
            <ul className="space-y-2">
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
              {[
                { href: "/tools", label: "Browse All Tools" },
                { href: "/about", label: "About This Site" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
<<<<<<< HEAD
=======
=======
                  <Link href={link.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        {/* ── Developer Showcase Section ── */}
        {OTHER_WORKS.length > 0 && (
          <div className="mt-16 border-t border-border pt-12">
            <div className="mb-8">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">
                Developer Showcase
              </h3>
              <p className="mt-1 text-sm text-ink-muted">Handcrafted projects by {DEVELOPER_NAME}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
=======
<<<<<<< HEAD
        {/* ── "More from the developer" showcase ──
            Uncomment and populate OTHER_WORKS array above to activate.
            Lightweight manual display — no heavy slider library. */}
        {OTHER_WORKS.length > 0 && (
          <div className="mt-10 border-t border-border pt-8">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              More from the developer
            </h3>
            <div className="flex flex-wrap gap-3">
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
              {OTHER_WORKS.map((work) => (
                <a
                  key={work.url}
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5"
                >
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-brand/5 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
                  
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-start justify-between">
                      <h4 className="font-bold text-ink group-hover:text-brand transition-colors">
                        {work.title}
                      </h4>
                      <svg className="h-4 w-4 text-ink-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted line-clamp-2">
                      {work.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-brand opacity-0 transition-all translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                      Visit Project <span>→</span>
                    </div>
                  </div>
=======
                  className="group rounded-xl border border-border bg-surface-card px-4 py-3 text-sm transition-all hover:border-brand/30 hover:shadow-card"
                >
                  <div className="font-medium text-ink group-hover:text-brand">
                    {work.title}
                  </div>
                  <div className="mt-0.5 text-xs text-ink-subtle">{work.description}</div>
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                </a>
              ))}
            </div>
          </div>
        )}

<<<<<<< HEAD
        {/* ── Final Credits Bar ── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center text-[11px] text-ink-subtle sm:flex-row sm:text-left">
          <p>Built with Next.js and Tailwind CSS. All processing happens on the client side.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              Designed by 
              <a href={DEVELOPER_PORTFOLIO} target="_blank" rel="noopener noreferrer" className="font-bold text-ink hover:text-brand transition-colors">
                {DEVELOPER_NAME}
              </a>
            </span>
            {DEVELOPER_GITHUB && (
              <a href={DEVELOPER_GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors" aria-label="GitHub">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
=======
        {/* ── Bottom bar — developer credit ── */}
        <div className="mt-8 border-t border-border pt-6 flex flex-col items-center gap-2 text-center text-xs text-ink-subtle sm:flex-row sm:justify-between">
          <p>All tools run locally in your browser — no data is collected or stored.</p>
          <p className="flex items-center gap-1.5">
            Developed by{" "}
            {DEVELOPER_PORTFOLIO ? (
              <a
                href={DEVELOPER_PORTFOLIO}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand hover:underline"
              >
                {DEVELOPER_NAME}
              </a>
            ) : (
              <span className="font-medium text-ink-muted">{DEVELOPER_NAME}</span>
            )}
            {DEVELOPER_GITHUB && (
              <a
                href={DEVELOPER_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="ml-1 text-ink-subtle hover:text-ink"
              >
                {/* GitHub icon */}
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}
<<<<<<< HEAD
          </div>
=======
          </p>
=======
        {/* Bottom bar — ad-ready slot */}
        {/* AD_SLOT: footer-bottom — 728x90 leaderboard can go here in future */}
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-ink-subtle">
          Made with ♥ · All tools run in your browser · No data is collected or stored
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
        </div>
      </div>
    </footer>
  );
}