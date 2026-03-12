"use client";
import { useState } from "react";

export default function ListRandomizer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const shuffle = () => {
    const lines = input.split("\n").map((l) => l.trim()).filter(Boolean);
    // Fisher-Yates shuffle algorithm
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    setOutput(lines.join("\n"));
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy list", err);
    }
  };

  const reset = () => {
    setInput("");
    setOutput("");
    setCopied(false);
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Your list (one item per line)
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"Alice\nBob\nCharlie\nDiana\nEthan"}
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
          rows={7}
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={shuffle}
          disabled={!input.trim()}
          className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 disabled:opacity-60 shadow-sm"
        >
          🎲 Shuffle List
        </button>
        {(input || output) && (
          <button
            onClick={reset}
            className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-ink-muted hover:border-brand/40 hover:text-brand transition-all"
          >
            Reset
          </button>
        )}
      </div>

      {output && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">Shuffled Result</label>
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