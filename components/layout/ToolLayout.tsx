import Link from "next/link";
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
  /** Short one-liner shown above the tool card */
  intro?: string;
  /** Step-by-step usage instructions */
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
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">

      {/* Breadcrumb */}
      <nav className="mb-5 flex items-center gap-1.5 text-xs text-ink-subtle sm:text-sm">
        <Link href="/" className="hover:text-ink-muted transition-colors">Home</Link>
        <span>/</span>
        <Link href="/tools" className="hover:text-ink-muted transition-colors">Tools</Link>
        <span>/</span>
        <span className="text-ink-muted">{title}</span>
      </nav>

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
        {children}
      </div>

      {/* Related tools */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 font-display text-lg font-bold text-ink sm:text-xl">
            Related Tools
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {related.map((tool) => (
              <ToolCard key={tool.id} tool={tool} compact />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
