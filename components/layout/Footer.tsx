import Link from "next/link";
import { tools, categoryLabels, type ToolCategory } from "@/data/tools";

const CATEGORIES: ToolCategory[] = ["text", "formatter", "generator", "sorter", "fun", "utility"];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-orange text-xs text-white">⚡</span>
              Simple<span className="text-brand-orange">Tools</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {tools.length} free, fast, and privacy-friendly tools. No account, no tracking, no ads.
            </p>
            <p className="mt-4 text-xs text-ink-subtle">© {new Date().getFullYear()} Simple Tools Hub </p>
          </div>

          {/* Tool categories */}
          {CATEGORIES.slice(0, 2).map((cat) => (
            <div key={cat}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-subtle">{categoryLabels[cat]}</h3>
              <ul className="space-y-2">
                {tools.filter((t) => t.category === cat).slice(0, 5).map((t) => (
                  <li key={t.id}>
                    <Link href={t.slug} className="text-sm text-ink-muted transition-colors hover:text-ink">
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Links */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-subtle">More Tools</h3>
            <ul className="space-y-2">
              {CATEGORIES.slice(2).map((cat) => (
                <li key={cat}>
                  <Link href="/tools" className="text-sm text-ink-muted transition-colors hover:text-ink">
                    {categoryLabels[cat]}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wider text-ink-subtle">Site</h3>
            <ul className="space-y-2">
              {[
                { href: "/tools", label: "All Tools" },
                { href: "/about", label: "About" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar — ad-ready slot */}
        {/* AD_SLOT: footer-bottom — 728x90 leaderboard can go here in future */}
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-ink-subtle">
          Made with ♥ · All tools run in your browser · No data is collected or stored
        </div>
      </div>
    </footer>
  );
}
