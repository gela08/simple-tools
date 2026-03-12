"use client";
import { useState } from "react";

export default function RemoveDuplicateLines() {
  const [input, setInput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [copied, setCopied] = useState(false);

  const lines = input.split("\n");
  const seen = new Set<string>();
  
  const output = lines.filter((line) => {
    const trimmed = line.trim();
    if (trimmed === "") return false;
    
    const key = caseSensitive ? trimmed : trimmed.toLowerCase();
    if (seen.has(key)) return false;
    
    seen.add(key);
    return true;
  }).join("\n");

  const totalLines = lines.filter((l) => l.trim()).length;
  const uniqueLines = output.split("\n").filter((l) => l.trim()).length;
  const removed = totalLines - uniqueLines;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Options */}
      <div className="flex items-center">
        <label className="flex items-center gap-3 text-sm font-semibold text-ink cursor-pointer group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              checked={caseSensitive}
              onChange={(e) => setCaseSensitive(e.target.checked)}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-border bg-surface-muted checked:bg-brand checked:border-brand transition-all"
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px]">
              ✓
            </span>
          </div>
          <span className="group-hover:text-brand transition-colors">Case-sensitive matching</span>
        </label>
      </div>

      {/* Input Area */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
          Input (one item per line)
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"apple\nbanana\napple\ncherry\nbanana"}
          className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all shadow-inner"
          rows={6}
        />
      </div>

      {/* Result Display */}
      {output && (
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
                Cleaned Result
              </label>
              {removed > 0 && (
                <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600 ring-1 ring-inset ring-red-600/10">
                  {removed} duplicate{removed !== 1 ? "s" : ""} removed
                </span>
              )}
            </div>
            <button
              onClick={handleCopy}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-lg border transition-all ${
                copied
                  ? "border-green-400 bg-green-50 text-green-700"
                  : "border-border bg-white text-ink-muted hover:border-brand/40 hover:text-brand shadow-sm"
              }`}
            >
              {copied ? "✓ Copied" : "Copy Result"}
            </button>
          </div>
          
          <div className="max-h-[300px] overflow-y-auto rounded-2xl border border-border bg-white px-4 py-4 text-sm text-ink whitespace-pre-wrap font-mono shadow-sm">
            {output}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!input.trim() && (
        <div className="rounded-2xl border border-dashed border-border bg-surface-muted/50 p-10 text-center text-sm font-medium text-ink-subtle italic">
          Enter lines above to remove duplicates...
        </div>
      )}
    </div>
  );
}