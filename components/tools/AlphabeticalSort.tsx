"use client";
import { useState } from "react";

export default function AlphabeticalSort() {
  const [input, setInput] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [copied, setCopied] = useState(false);

  const lines = input.split("\n").map((l) => l.trim()).filter(Boolean);
  const sorted = [...lines].sort((a, b) =>
    order === "asc" ? a.localeCompare(b) : b.localeCompare(a)
  );
  const output = sorted.join("\n");

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        {([["asc", "A → Z"], ["desc", "Z → A"]] as const).map(([id, label]) => (
          <button key={id} onClick={() => setOrder(id)}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
              order === id ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border text-ink-muted hover:border-brand-orange/40"
            }`}>{label}</button>
        ))}
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Items to sort (one per line)</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          placeholder={"banana\napple\ncherry\ndate\nelderberry"}
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" rows={7} />
      </div>
      {output && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">Sorted ({sorted.length} items)</label>
            <div className="flex gap-2">
              <button onClick={() => setInput("")} className="text-xs text-ink-subtle hover:text-ink border border-border rounded-lg px-3 py-1.5">Reset</button>
              <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand-orange/40"}`}>
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink whitespace-pre-wrap font-mono">{output}</div>
        </div>
      )}
    </div>
  );
}
