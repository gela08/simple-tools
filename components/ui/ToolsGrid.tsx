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
<<<<<<< HEAD
  const filtered =
    activeCategory === "all"
      ? baseResults
      : baseResults.filter((t) => t.category === activeCategory);
=======
  const filtered = activeCategory === "all"
    ? baseResults
    : baseResults.filter((t) => t.category === activeCategory);
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f

  const categoryCounts = ALL_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = tools.filter((t) => t.category === cat).length;
    return acc;
  }, {} as Record<ToolCategory, number>);

  return (
    <>
<<<<<<< HEAD
      {/* Search input */}
      <div className="mb-5 max-w-md">
        <SearchBar placeholder={`Search ${tools.length} tools...`} />
      </div>

      {/* Category filter pills — horizontally scrollable on mobile */}
      <div className="mb-7 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        <button
          onClick={() => setActiveCategory("all")}
          className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
            activeCategory === "all"
              ? "border-brand bg-brand text-white"
              : "border-border bg-surface-muted text-ink-muted hover:border-brand/40"
=======
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
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
          }`}
        >
          All ({tools.length})
        </button>
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
<<<<<<< HEAD
            className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              activeCategory === cat
                ? "border-brand bg-brand text-white"
                : "border-border bg-surface-muted text-ink-muted hover:border-brand/40"
=======
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              activeCategory === cat
                ? "border-brand-orange bg-brand-orange text-white"
                : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/40"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
            }`}
          >
            {categoryLabels[cat]} ({categoryCounts[cat]})
          </button>
        ))}
      </div>

<<<<<<< HEAD
      {/* Search result count */}
=======
      {/* Results */}
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      {query && (
        <p className="mb-4 text-sm text-ink-muted">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

<<<<<<< HEAD
      {/* Empty state — no emoji */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border bg-surface-muted py-16 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-border">
            <svg className="h-5 w-5 text-ink-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
=======
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-border bg-surface-muted py-16 text-center">
          <p className="text-3xl mb-3">🔍</p>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
          <p className="font-medium text-ink">No tools found</p>
          <p className="mt-1 text-sm text-ink-muted">Try a different search term or category.</p>
        </div>
      ) : query || activeCategory !== "all" ? (
<<<<<<< HEAD
        /* Flat grid for filtered results */
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
=======
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
          {filtered.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} animationDelay={`${i * 0.04}s`} />
          ))}
        </div>
      ) : (
<<<<<<< HEAD
        /* Grouped by category for browse view */
=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        ALL_CATEGORIES.map((cat) => {
          const catTools = tools.filter((t) => t.category === cat);
          if (!catTools.length) return null;
          return (
<<<<<<< HEAD
            <section key={cat} className="mb-10">
              <div className="mb-4 flex items-center gap-3">
                <h2 id={cat} className="font-display text-lg font-bold text-ink sm:text-xl">
                  {categoryLabels[cat]}
                </h2>
=======
            <section key={cat} className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <h2 id={cat} className="font-display text-xl font-bold text-ink">{categoryLabels[cat]}</h2>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
                <span className="rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-ink-subtle">
                  {catTools.length}
                </span>
              </div>
<<<<<<< HEAD
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
=======
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
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
