"use client";
import { useState } from "react";

export default function CapitalizeSentences() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const output = input
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Input text</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="paste your text here. it doesn't matter if it's all lowercase. every sentence will be capitalized automatically."
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" rows={5} />
      </div>
      {output && input && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">Result</label>
            <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand/40"}`}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <div className="rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink whitespace-pre-wrap">{output}</div>
        </div>
      )}
    </div>
  );
}
