"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { tools, type Tool } from "@/data/tools";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onClose?: () => void;
  autoFocus?: boolean;
  placeholder?: string;
}

const getIconBg = (color: string) => {
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
    const filtered = tools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        (t.tags ?? []).some((tag) => tag.toLowerCase().includes(q)) ||
        t.category.toLowerCase().includes(q)
    ).slice(0, 7);
    
    setResults(filtered);
    setActive(0);
  }, [query]);

  const go = (slug: string) => {
    router.push(slug);
    setQuery("");
    setResults([]);
    onClose?.();
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { 
      e.preventDefault(); 
      setActive((a) => Math.min(a + 1, results.length - 1)); 
    }
    if (e.key === "ArrowUp") { 
      e.preventDefault(); 
      setActive((a) => Math.max(a - 1, 0)); 
    }
    if (e.key === "Enter" && results[active]) {
      go(results[active].slug);
    }
    if (e.key === "Escape") { 
      setQuery(""); 
      setResults([]); 
      onClose?.(); 
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKey}
          placeholder={placeholder}
          className="w-full rounded-xl border border-border bg-surface-muted py-2.5 pl-10 pr-10 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10 transition-all"
        />

        {query && (
          <button 
            onClick={() => { setQuery(""); setResults([]); }} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink p-1 rounded-md hover:bg-surface-card transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-border bg-white shadow-xl shadow-brand/5 animate-in fade-in slide-in-from-top-2 duration-200">
          {results.map((t, i) => {
            const ToolIcon = t.icon;
            return (
              <button
                key={t.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(t.slug)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
                  i === active ? "bg-brand/5" : "hover:bg-surface-muted"
                } ${i !== results.length - 1 ? "border-b border-border" : ""}`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${getIconBg(t.color)}`}>
                  <ToolIcon size={16} strokeWidth={2.5} />
                </span>
                
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink truncate">{t.name}</p>
                  <p className="text-[10px] text-ink-subtle truncate uppercase font-black tracking-widest">{t.category}</p>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {query.trim() && results.length === 0 && (
        <div className="absolute top-full z-50 mt-2 w-full rounded-xl border border-border bg-white px-4 py-6 text-center shadow-xl animate-in fade-in slide-in-from-top-2">
          <p className="text-sm text-ink-subtle">
            No tools found for <span className="font-bold text-ink">"{query}"</span>
          </p>
        </div>
      )}
    </div>
  );
}