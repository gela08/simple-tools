"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { tools, type Tool } from "@/data/tools";

interface SearchBarProps {
  onClose?: () => void;
  autoFocus?: boolean;
  placeholder?: string;
}

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
        <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKey}
          placeholder={placeholder}
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted py-2.5 pl-9 pr-4 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
=======
          className="w-full rounded-xl border border-border bg-surface-muted py-2.5 pl-9 pr-4 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        />
        {query && (
          <button onClick={() => { setQuery(""); setResults([]); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>

      {results.length > 0 && (
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
        </div>
      )}

      {query.trim() && results.length === 0 && (
        <div className="absolute top-full z-50 mt-1 w-full rounded-xl border border-border bg-surface-card px-4 py-3 text-sm text-ink-subtle shadow-card">
          No tools found for "{query}"
        </div>
      )}
    </div>
  );
}
