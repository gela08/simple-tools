"use client";
import { useState } from "react";

export default function SlugGenerator() {
  const [input, setInput] = useState("");
  const [separator, setSeparator] = useState<"-" | "_">("-");
  const [copied, setCopied] = useState(false);

  const output = input.trim()
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-_]/g, "")
    .replace(/[\s-_]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Title or text</label>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. How to Build a React App in 2024"
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
      </div>
      {output && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">Slug</label>
            <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand/40"}`}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <div className="rounded-xl border border-brand/20 bg-brand/5 px-4 py-3 text-sm font-mono text-brand break-all">{output}</div>
          <p className="mt-2 text-xs text-ink-subtle">
            Ready to use in URLs: <code className="text-ink-muted">/blog/{output}</code>
          </p>
        </div>
      )}
    </div>
  );
}
