"use client";

import Link from "next/link";
import type { Tool } from "@/data/tools";
import { categoryLabels } from "@/data/tools";
import { ChevronRight } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
  compact?: boolean;
  animationDelay?: string;
}

/**
 * Maps the color string from our data to specific Tailwind classes.
 */
const getColorClasses = (color: string) => {
  const map: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    amber: "bg-amber-50 text-amber-600",
    cyan: "bg-cyan-50 text-cyan-600",
    teal: "bg-teal-50 text-teal-600",
    lime: "bg-green-50 text-green-600",
    violet: "bg-violet-50 text-violet-600",
    slate: "bg-slate-100 text-slate-600",
    green: "bg-emerald-50 text-emerald-600",
    pink: "bg-pink-50 text-pink-600",
    indigo: "bg-indigo-50 text-indigo-600",
    orange: "bg-orange-50 text-orange-600",
    yellow: "bg-yellow-50 text-yellow-600",
    fuchsia: "bg-fuchsia-50 text-fuchsia-600",
    red: "bg-red-50 text-red-600",
    rose: "bg-rose-50 text-rose-600",
    emerald: "bg-emerald-50 text-emerald-600",
    sky: "bg-sky-50 text-sky-600",
  };
  return map[color] || "bg-gray-50 text-gray-600";
};

export default function ToolCard({
  tool,
  compact = false,
  animationDelay,
}: ToolCardProps) {
  const Icon = tool.icon;
  const colorClasses = getColorClasses(tool.color);

  return (
    <Link
      href={tool.slug}
      className="group"
      style={animationDelay ? { animationDelay } : undefined}
    >
      <div
        className={`h-full rounded-2xl border border-border bg-surface-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover ${
          compact ? "p-4" : "p-6"
        } shadow-card animate-in fade-in slide-in-from-bottom-3 fill-mode-both`}
      >
        {/* Icon area */}
        <div
          className={`flex items-center justify-center rounded-xl ${colorClasses} ${
            compact ? "h-9 w-9" : "h-11 w-11"
          } mb-3 select-none transition-all group-hover:scale-110 group-hover:bg-opacity-100`}
          aria-hidden="true"
        >
          <Icon size={compact ? 18 : 22} strokeWidth={2.5} />
        </div>

        {/* Content Section */}
        <div>
          <h3
            className={`font-display font-bold text-ink ${
              compact ? "text-sm" : "text-base"
            }`}
          >
            {tool.name}
          </h3>

          {!compact && (
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted line-clamp-2">
              {tool.description}
            </p>
          )}

          {/* Category Badge */}
          <span
            className={`inline-block rounded-full bg-surface-muted px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-subtle ${
              compact ? "mt-2" : "mt-3"
            }`}
          >
            {categoryLabels[tool.category]}
          </span>
        </div>

        {/* Action Hint */}
        {!compact && (
          <div className="mt-5 flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-brand opacity-0 transition-all -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
            Try this tool
            <ChevronRight size={14} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </Link>
  );
}