import Link from "next/link";
import type { Tool } from "@/data/tools";
import { categoryLabels } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
  compact?: boolean;
  animationDelay?: string;
}

export default function ToolCard({
  tool,
  compact = false,
  animationDelay,
}: ToolCardProps) {
  return (
    <Link
      href={tool.slug}
      className="group animate-fade-up"
      style={animationDelay ? { animationDelay } : undefined}
    >
      <div
<<<<<<< HEAD
        className={`h-full rounded-2xl border border-border bg-surface-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover ${
          compact ? "p-4" : "p-5 sm:p-6"
        } shadow-card`}
      >
        {/* Icon area — colored background with emoji rendered as text (not as content) */}
        <div
          className={`flex items-center justify-center rounded-xl ${tool.color} ${
            compact ? "h-9 w-9 text-lg" : "h-11 w-11 text-xl"
          } mb-3 select-none`}
          aria-hidden="true"
=======
        className={`h-full rounded-2xl border border-border bg-surface-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover ${
          compact ? "p-4" : "p-6"
        } shadow-card`}
      >
        {/* Icon */}
        <div
          className={`flex items-center justify-center rounded-xl ${tool.color} ${
            compact ? "h-10 w-10 text-xl" : "h-12 w-12 text-2xl"
          } mb-4`}
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        >
          {tool.emoji}
        </div>

        {/* Content */}
        <div>
          <h3
            className={`font-display font-bold text-ink ${
              compact ? "text-sm" : "text-base"
            }`}
          >
            {tool.name}
          </h3>

          {!compact && (
<<<<<<< HEAD
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted line-clamp-2">
=======
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
              {tool.description}
            </p>
          )}

<<<<<<< HEAD
          {/* Category pill */}
          <span
            className={`inline-block rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-ink-subtle ${
=======
          {/* Category badge */}
          <span
            className={`mt-3 inline-block rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-ink-subtle ${
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
              compact ? "mt-2" : "mt-3"
            }`}
          >
            {categoryLabels[tool.category]}
          </span>
        </div>

<<<<<<< HEAD
        {/* "Use tool" hint — shows on hover, full-size cards only */}
        {!compact && (
          <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
=======
        {/* Arrow indicator */}
        {!compact && (
          <div className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-orange opacity-0 transition-opacity group-hover:opacity-100">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
            Use tool
            <svg
              className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
<<<<<<< HEAD
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
=======
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
            </svg>
          </div>
        )}
      </div>
    </Link>
  );
}
