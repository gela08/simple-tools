"use client";

import { useState } from "react";
import ToolCard from "@/components/ui/ToolCard";
import SearchBar from "@/components/ui/SearchBar";
import { tools, categoryLabels, searchTools, type ToolCategory } from "@/data/tools";

const ALL_CATEGORIES: ToolCategory[] = ["text", "formatter", "sorter", "generator", "fun", "utility"];

export default function ToolsGrid() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ToolCategory | "all">("all");

  const baseResults = query ? searchTools(query) : tools;
  const filtered = activeCategory === "all"
    ? baseResults
    : baseResults.filter((t) => t.category === activeCategory);

  const categoryCounts = ALL_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = tools.filter((t) => t.category === cat).length;
    return acc;
  }, {} as Record<ToolCategory, number>);

  return (
    <>
      {/* Search */}
      <div className="mb-6 max-w-md">
        <SearchBar placeholder={`Search ${tools.length} tools…`} />
      </div>

      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
            activeCategory === "all"
              ? "border-brand-orange bg-brand-orange text-white"
              : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/40"
          }`}
        >
          All ({tools.length})
        </button>
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              activeCategory === cat
                ? "border-brand-orange bg-brand-orange text-white"
                : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/40"
            }`}
          >
            {categoryLabels[cat]} ({categoryCounts[cat]})
          </button>
        ))}
      </div>

      {/* Results */}
      {query && (
        <p className="mb-4 text-sm text-ink-muted">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border bg-surface-muted py-16 text-center">
          <p className="text-3xl mb-3">🔍</p>
          <p className="font-medium text-ink">No tools found</p>
          <p className="mt-1 text-sm text-ink-muted">Try a different search term or category.</p>
        </div>
      ) : query || activeCategory !== "all" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} animationDelay={`${i * 0.04}s`} />
          ))}
        </div>
      ) : (
        ALL_CATEGORIES.map((cat) => {
          const catTools = tools.filter((t) => t.category === cat);
          if (!catTools.length) return null;
          return (
            <section key={cat} className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <h2 id={cat} className="font-display text-xl font-bold text-ink">{categoryLabels[cat]}</h2>
                <span className="rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-ink-subtle">
                  {catTools.length}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catTools.map((tool, i) => (
                  <ToolCard key={tool.id} tool={tool} animationDelay={`${i * 0.04}s`} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </>
  );
}
