"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { tools, type Tool } from "@/data/tools";
import { Search, X } from "lucide-react"; // Import Lucide icons

interface SearchBarProps {
  onClose?: () => void;
  autoFocus?: boolean;
  placeholder?: string;
}

// Helper to map your color strings to background classes for the small icons
const getIconBg = (color: string) => {
  const map: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    amber: "bg-amber-100 text-amber-600",
    cyan: "bg-cyan-100 text-cyan-600",
    teal: "bg-teal-100 text-teal-600",
    lime: "bg-green-100 text-green-600",
    violet: "bg-violet-100 text-violet-600",
    slate: "bg-slate-200 text-slate-600",
    green: "bg-emerald-100 text-emerald-600",
    pink: "bg-pink-100 text-pink-600",
    indigo: "bg-indigo-100 text-indigo-600",
    orange: "bg-orange-100 text-orange-600",
    yellow: "bg-yellow-100 text-yellow-600",
    fuchsia: "bg-fuchsia-100 text-fuchsia-600",
    red: "bg-red-100 text-red-600",
    rose: "bg-rose-100 text-rose-600",
    emerald: "bg-emerald-100 text-emerald-600",
    sky: "bg-sky-100 text-sky-600",
  };
  return map[color] || "bg-gray-100 text-gray-600";
};

export default function SearchBar({ onClose, autoFocus, placeholder = "Search tools…" }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Tool[]>([]);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(
      tools.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          (t.tags ?? []).some((tag) => tag.toLowerCase().includes(q)) ||
          t.category.toLowerCase().includes(q)
      ).slice(0, 7)
    );
    setActive(0);
  }, [query]);

  const go = (slug: string) => {
    router.push(slug);
    setQuery("");
    setResults([]);
    onClose?.();
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    if (e.key === "Enter" && results[active]) go(results[active].slug);
    if (e.key === "Escape") { setQuery(""); setResults([]); onClose?.(); }
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        {/* Lucide Search Icon */}
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKey}
          placeholder={placeholder}
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted py-2.5 pl-10 pr-10 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
=======
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted py-2.5 pl-9 pr-4 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
=======
          className="w-full rounded-xl border border-border bg-surface-muted py-2.5 pl-9 pr-4 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
        />

        {query && (
          <button 
            onClick={() => { setQuery(""); setResults([]); }} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {results.length > 0 && (
<<<<<<< HEAD
        <div className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-border bg-surface-card shadow-xl">
          {results.map((t, i) => {
            // Get the dynamic Icon component
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => go(t.slug)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                  i === active ? "bg-brand/5" : "hover:bg-surface-muted"
                } ${i !== results.length - 1 ? "border-b border-border" : ""}`}
              >
                {/* Updated Icon Container */}
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${getIconBg(t.color)}`}>
                  <Icon size={16} strokeWidth={2.5} />
                </span>
                
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink truncate">{t.name}</p>
                  <p className="text-[11px] text-ink-subtle truncate uppercase tracking-tight">{t.category}</p>
                </div>
              </button>
            );
          })}
=======
        <div className="absolute top-full z-50 mt-1 w-full overflow-hidden rounded-xl border border-border bg-surface-card shadow-card-hover">
          {results.map((t, i) => (
            <button
              key={t.id}
              onClick={() => go(t.slug)}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
<<<<<<< HEAD
                i === active ? "bg-brand/10" : "hover:bg-surface-muted"
=======
                i === active ? "bg-brand-orange/10" : "hover:bg-surface-muted"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
              } ${i !== results.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm ${t.color}`}>{t.emoji}</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink truncate">{t.name}</p>
                <p className="text-xs text-ink-subtle truncate">{t.description}</p>
              </div>
            </button>
          ))}
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
        </div>
      )}

      {query.trim() && results.length === 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-xl border border-border bg-surface-card px-4 py-4 text-center text-sm text-ink-subtle shadow-card">
          No tools found for <span className="font-bold text-ink">"{query}"</span>
        </div>
      )}
    </div>
  );
}