"use client";
import { useState } from "react";

export default function RemoveDuplicateLines() {
  const [input, setInput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [copied, setCopied] = useState(false);

  const lines = input.split("\n");
  const seen = new Set<string>();
  const output = lines.filter((line) => {
    const key = caseSensitive ? line.trim() : line.trim().toLowerCase();
    if (line.trim() === "") return false;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).join("\n");

  const removed = lines.filter((l) => l.trim()).length - output.split("\n").filter((l) => l.trim()).length;

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-5">
      <label className="flex items-center gap-2 text-sm font-medium text-ink cursor-pointer">
<<<<<<< HEAD
        <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} className="accent-brand" />
=======
        <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} className="accent-brand-orange" />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        Case-sensitive matching
      </label>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Input (one item per line)</label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          placeholder={"apple\nbanana\napple\ncherry\nbanana"}
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" rows={6} />
=======
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" rows={6} />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      </div>
      {output && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">
              Result
              {removed > 0 && <span className="ml-2 text-xs text-red-500">({removed} duplicate{removed !== 1 ? "s" : ""} removed)</span>}
            </label>
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
