"use client";
import { useState } from "react";

export default function NumberSort() {
  const [input, setInput] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [copied, setCopied] = useState(false);

  const lines = input.split("\n").map((l) => l.trim()).filter(Boolean);
  const parsed = lines.map((l) => ({ raw: l, n: parseFloat(l) }));
  const invalid = parsed.filter((p) => isNaN(p.n));
  const valid = parsed.filter((p) => !isNaN(p.n));
  
  const sorted = [...valid].sort((a, b) => 
    order === "asc" ? a.n - b.n : b.n - a.n
  );
  const output = sorted.map((p) => p.raw).join("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="space-y-5">
      {/* Sort Order Selection */}
      <div className="flex gap-2">
        {([["asc", "Low → High"], ["desc", "High → Low"]] as const).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setOrder(id)}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
              order === id
                ? "border-brand bg-brand/10 text-brand shadow-sm"
                : "border-border text-ink-muted hover:border-brand/40 bg-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Numbers to sort (one per line)
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"42\n7\n100\n3.14\n-5"}
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
          rows={7}
        />
        {invalid.length > 0 && (
          <p className="mt-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg border border-amber-100 animate-in fade-in duration-300">
            ⚠️ Skipping {invalid.length} non-numeric line{invalid.length !== 1 ? "s" : ""}:{" "}
            <span className="font-mono">{invalid.map((p) => p.raw).join(", ")}</span>
          </p>
        )}
      </div>

      {/* Output Display */}
      {output && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">
              Sorted ({sorted.length} numbers)
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setInput("")}
                className="text-xs text-ink-subtle hover:text-ink border border-border rounded-lg px-3 py-1.5 hover:bg-surface transition-colors"
              >
                Clear
              </button>
              <button
                onClick={handleCopy}
                className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${
                  copied
                    ? "border-green-400 bg-green-50 text-green-700"
                    : "border-border text-ink-muted hover:border-brand/40 bg-white"
                }`}
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink whitespace-pre-wrap font-mono shadow-inner">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}