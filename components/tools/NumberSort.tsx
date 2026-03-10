"use client";
import { useState } from "react";

export default function NumberSort() {
  const [input, setInput] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const lines = input.split("\n").map((l) => l.trim()).filter(Boolean);
  const parsed = lines.map((l) => ({ raw: l, n: parseFloat(l) }));
  const invalid = parsed.filter((p) => isNaN(p.n));
  const valid = parsed.filter((p) => !isNaN(p.n));
  const sorted = [...valid].sort((a, b) => order === "asc" ? a.n - b.n : b.n - a.n);
  const output = sorted.map((p) => p.raw).join("\n");

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        {([["asc", "Low → High"], ["desc", "High → Low"]] as const).map(([id, label]) => (
          <button key={id} onClick={() => setOrder(id)}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
<<<<<<< HEAD
              order === id ? "border-brand bg-brand/10 text-brand" : "border-border text-ink-muted hover:border-brand/40"
=======
              order === id ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border text-ink-muted hover:border-brand-orange/40"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
            }`}>{label}</button>
        ))}
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Numbers to sort (one per line)</label>
        <textarea value={input} onChange={(e) => { setInput(e.target.value); setError(""); }}
          placeholder={"42\n7\n100\n3.14\n-5"}
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" rows={7} />
=======
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" rows={7} />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        {invalid.length > 0 && <p className="mt-1 text-xs text-amber-600">Skipping {invalid.length} non-numeric line{invalid.length !== 1 ? "s" : ""}: {invalid.map(p=>p.raw).join(", ")}</p>}
      </div>
      {output && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">Sorted ({sorted.length} numbers)</label>
            <div className="flex gap-2">
              <button onClick={() => setInput("")} className="text-xs text-ink-subtle hover:text-ink border border-border rounded-lg px-3 py-1.5">Reset</button>
<<<<<<< HEAD
              <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand/40"}`}>
=======
              <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand-orange/40"}`}>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
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
