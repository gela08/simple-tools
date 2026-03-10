"use client";
import { useState } from "react";

export default function LineSorter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"az" | "za" | "len-asc" | "len-desc">("az");
  const [copied, setCopied] = useState(false);

  const lines = input.split("\n").map((l) => l.trim()).filter(Boolean);
  const sorted = [...lines].sort((a, b) => {
    if (mode === "az") return a.localeCompare(b);
    if (mode === "za") return b.localeCompare(a);
    if (mode === "len-asc") return a.length - b.length;
    return b.length - a.length;
  });
  const output = sorted.join("\n");

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  const modes = [["az","A → Z"],["za","Z → A"],["len-asc","Shortest first"],["len-desc","Longest first"]] as const;

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-sm font-medium text-ink">Sort order:</p>
        <div className="flex flex-wrap gap-2">
          {modes.map(([id, label]) => (
            <button key={id} onClick={() => setMode(id)}
              className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
<<<<<<< HEAD
                mode === id ? "border-brand bg-brand/10 text-brand" : "border-border text-ink-muted hover:border-brand/40"
=======
                mode === id ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border text-ink-muted hover:border-brand-orange/40"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
              }`}>{label}</button>
          ))}
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Lines to sort</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="One item per line…"
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" rows={7} />
=======
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" rows={7} />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      </div>
      {output && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">Sorted</label>
<<<<<<< HEAD
            <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand/40"}`}>
=======
            <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand-orange/40"}`}>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <div className="rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink whitespace-pre-wrap font-mono">{output}</div>
        </div>
      )}
    </div>
  );
}
