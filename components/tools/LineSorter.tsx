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
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text", err);
    }
  };

  const modes = [
    ["az", "A → Z"],
    ["za", "Z → A"],
    ["len-asc", "Shortest first"],
    ["len-desc", "Longest first"],
  ] as const;

  return (
    <div className="space-y-5">
      {/* Mode Selection */}
      <div>
        <p className="mb-2 text-sm font-medium text-ink">Sort order:</p>
        <div className="flex flex-wrap gap-2">
          {modes.map(([id, label]) => (
            <button
              key={id}
              onClick={() => setMode(id)}
              className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
                mode === id
                  ? "border-brand bg-brand/10 text-brand shadow-sm"
                  : "border-border text-ink-muted hover:border-brand/40 bg-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Lines to sort
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="One item per line..."
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
          rows={7}
        />
      </div>

      {/* Output Display */}
      {output && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">Sorted result</label>
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
          <div className="rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink whitespace-pre-wrap font-mono shadow-inner min-h-[100px]">
            {output}
          </div>
        </div>
      )}
    </div>
  );
}