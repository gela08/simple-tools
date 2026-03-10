"use client";
import { useState } from "react";

export default function TextReverser() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"chars" | "words">("chars");
  const [copied, setCopied] = useState(false);

  const output = mode === "chars"
    ? input.split("").reverse().join("")
    : input.split(" ").reverse().join(" ");

  const handleCopy = async () => {
    if (!output) return;
    try { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        {([["chars", "Reverse characters"], ["words", "Reverse words"]] as const).map(([id, label]) => (
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
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Input</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste your text here…"
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" rows={4} />
=======
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" rows={4} />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      </div>
      {output && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">Result</label>
<<<<<<< HEAD
            <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand/40"}`}>
=======
            <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand-orange/40"}`}>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <div className="rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink break-all whitespace-pre-wrap font-mono">{output}</div>
        </div>
      )}
    </div>
  );
}
