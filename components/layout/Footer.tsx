import Link from "next/link";
import { tools, categoryLabels, type ToolCategory } from "@/data/tools";

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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted">
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
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {tools.length} free, fast, and privacy-friendly tools. No account, no tracking, no ads.
            </p>
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
              </ul>
            </div>
          ))}

          {/* Site links column */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              More Tools
            </h3>
            <ul className="space-y-2">
              {FOOTER_CATS.slice(2).map((cat) => (
                <li key={cat}>
                  <Link href="/tools" className="text-sm text-ink-muted transition-colors hover:text-ink">
                    {categoryLabels[cat]}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              Site
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/tools", label: "All Tools" },
                { href: "/about", label: "About" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── "More from the developer" showcase ──
            Uncomment and populate OTHER_WORKS array above to activate.
            Lightweight manual display — no heavy slider library. */}
        {OTHER_WORKS.length > 0 && (
          <div className="mt-10 border-t border-border pt-8">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              More from the developer
            </h3>
            <div className="flex flex-wrap gap-3">
              {OTHER_WORKS.map((work) => (
                <a
                  key={work.url}
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-surface-card px-4 py-3 text-sm transition-all hover:border-brand/30 hover:shadow-card"
                >
                  <div className="font-medium text-ink group-hover:text-brand">
                    {work.title}
                  </div>
                  <div className="mt-0.5 text-xs text-ink-subtle">{work.description}</div>
                </a>
              ))}
            </div>
          </div>
        )}

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
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
