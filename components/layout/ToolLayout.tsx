import Link from "next/link";
import ToolCard from "@/components/ui/ToolCard";
import { getRelatedTools } from "@/data/tools";

interface ToolLayoutProps {
  toolId: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolLayout({
  toolId,
  title,
  description,
  children,
}: ToolLayoutProps) {
  const related = getRelatedTools(toolId);

  return (
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
        <span>/</span>
        <span className="text-ink-muted">{title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-base text-ink-muted">{description}</p>
      </div>

      {/* Tool UI */}
      <div className="rounded-2xl border border-border bg-surface-card p-6 shadow-tool sm:p-8">
        {children}
      </div>

      {/* Related tools */}
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-4 font-display text-xl font-bold text-ink">
            Related Tools
          </h2>
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
