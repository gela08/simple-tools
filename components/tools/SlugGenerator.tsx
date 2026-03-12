"use client";
import { useState } from "react";

export default function SlugGenerator() {
  const [input, setInput] = useState("");
  const [separator, setSeparator] = useState<"-" | "_">("-");
  const [copied, setCopied] = useState(false);

  // Generate slug based on input and chosen separator
  const output = input
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents/diacritics
    .replace(/[^a-z0-9\s-_]/g, "") // Remove non-alphanumeric except spaces/hyphens
    .replace(/[\s-_]+/g, separator) // Replace spaces and existing separators with chosen one
    .replace(new RegExp(`^${separator}+|${separator}+$`, "g"), ""); // Trim leading/trailing separators

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
          Title or Text
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. How to Build a React App in 2026"
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
        />
      </div>

      {/* Separator Selection */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
          Separator
        </p>
        <div className="flex gap-2">
          {(["-", "_"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSeparator(s)}
              className={`flex h-10 w-12 items-center justify-center rounded-lg border text-lg font-bold transition-all ${
                separator === s
                  ? "border-brand bg-brand/10 text-brand shadow-sm"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand/40"
              }`}
            >
              {s}
            </button>
          ))}
          <span className="flex items-center text-xs text-ink-subtle italic ml-2">
            Using {separator === "-" ? "hyphens" : "underscores"}
          </span>
        </div>
      </div>

      {/* Output Section */}
      {output && (
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
              Generated Slug
            </label>
            <button
              onClick={handleCopy}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-lg border transition-all ${
                copied
                  ? "border-green-400 bg-green-50 text-green-700"
                  : "border-border bg-white text-ink-muted hover:border-brand/40 hover:text-brand shadow-sm"
              }`}
            >
              {copied ? "✓ Copied" : "Copy Slug"}
            </button>
          </div>
          
          <div className="rounded-xl border border-brand/20 bg-brand/5 px-4 py-4 text-base font-mono text-brand break-all shadow-inner">
            {output}
          </div>
          
          <p className="text-[11px] text-ink-subtle italic">
            URL Preview: <span className="text-ink-muted">your-site.com/blog/</span>
            <span className="text-brand font-semibold">{output}</span>
          </p>
        </div>
      )}

      {/* Empty State */}
      {!input.trim() && (
        <div className="rounded-2xl border border-dashed border-border bg-surface-muted/50 p-10 text-center text-sm font-medium text-ink-subtle">
          Type something above to generate a URL-friendly slug.
        </div>
      )}
    </div>
  );
}