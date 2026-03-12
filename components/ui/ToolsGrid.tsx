"use client";

import { useState } from "react";
import ToolCard from "@/components/ui/ToolCard";
import SearchBar from "@/components/ui/SearchBar";
import { tools, categoryLabels, searchTools, type ToolCategory } from "@/data/tools";
import { Search } from "lucide-react";

const ALL_CATEGORIES: ToolCategory[] = ["text", "formatter", "sorter", "generator", "fun", "utility"];

export default function ToolsGrid() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ToolCategory | "all">("all");

  // Filter logic
  const baseResults = query ? searchTools(query) : tools;
  const filtered =
    activeCategory === "all"
      ? baseResults
      : baseResults.filter((t) => t.category === activeCategory);

  // Stats for the pills
  const categoryCounts = ALL_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = tools.filter((t) => t.category === cat).length;
    return acc;
  }, {} as Record<ToolCategory, number>);

  return (
    <>
      {/* Search Input 
          Note: We pass setQuery to the SearchBar so this component 
          can react to what the user types.
      */}
      <div className="mb-8 max-w-md">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-ink-subtle">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={`Search ${tools.length} tools...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-2xl border border-border bg-surface-card py-4 pl-11 pr-4 text-sm font-medium outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/5 shadow-sm"
          />
        </div>
      </div>

      {/* Category filter pills */}
      <div className="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setActiveCategory("all")}
          className={`shrink-0 rounded-xl border px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
            activeCategory === "all"
              ? "border-brand bg-brand text-white shadow-lg shadow-brand/20"
              : "border-border bg-surface-card text-ink-muted hover:border-brand/40"
          }`}
        >
          All ({tools.length})
        </button>
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 rounded-xl border px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
              activeCategory === cat
                ? "border-brand bg-brand text-white shadow-lg shadow-brand/20"
                : "border-border bg-surface-card text-ink-muted hover:border-brand/40"
            }`}
          >
            {categoryLabels[cat]} ({categoryCounts[cat] || 0})
          </button>
        ))}
      </div>

      {/* Result feedback */}
      {query && (
        <p className="mb-6 text-sm font-medium text-ink-muted">
          Found {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

      {/* Grid Rendering */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border bg-surface-muted/30 py-20 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-card text-ink-subtle shadow-sm">
            <Search size={24} strokeWidth={1.5} />
          </div>
          <p className="text-lg font-bold text-ink">No tools found</p>
          <p className="mt-2 text-sm text-ink-muted">Try adjusting your search or category filter.</p>
          <button 
            onClick={() => { setQuery(""); setActiveCategory("all"); }}
            className="mt-6 text-xs font-bold uppercase tracking-widest text-brand hover:underline"
          >
            Clear all filters
          </button>
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
            <section key={cat} className="mb-16 last:mb-0">
              <div className="mb-6 flex items-center gap-3">
                <h2 id={cat} className="font-display text-xl font-black tracking-tight text-ink sm:text-2xl">
                  {categoryLabels[cat]}
                </h2>
                <span className="rounded-lg bg-surface-muted px-2 py-1 text-[10px] font-black uppercase text-ink-subtle">
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