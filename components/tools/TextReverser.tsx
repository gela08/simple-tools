"use client";
import { useState } from "react";
import { 
  RotateCcw, 
  ArrowLeftRight, 
  Type, 
  Copy, 
  CheckCircle2, 
  AlignLeft 
} from "lucide-react";

export default function TextReverser() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"chars" | "words">("chars");
  const [copied, setCopied] = useState(false);

  const output = mode === "chars"
    ? input.split("").reverse().join("")
    : input.split(" ").reverse().join(" ");

  const handleCopy = async () => {
    if (!output) return;
    try { 
      await navigator.clipboard.writeText(output); 
      setCopied(true); 
      setTimeout(() => setCopied(false), 1500); 
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="flex gap-2 p-1 bg-surface-muted rounded-2xl w-fit border border-border">
        {( [["chars", "Characters"], ["words", "Words"]] as const).map(([id, label]) => (
          <button 
            key={id} 
            onClick={() => setMode(id)}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 ${
              mode === id 
                ? "bg-white text-brand shadow-sm ring-1 ring-border" 
                : "text-ink-subtle hover:text-ink"
            }`}
          >
            <ArrowLeftRight size={14} className={id === "words" ? "rotate-90" : ""} />
            {label}
          </button>
        ))}
      </div>

      {/* Input Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Type size={14} className="text-brand" />
          <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
            Input Text
          </label>
        </div>
        <textarea 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste your text here..."
          className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-4 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 shadow-inner transition-all" 
          rows={4} 
        />
      </div>

      {/* Result Section */}
      {output && (
        <div className="space-y-3 animate-in fade-in zoom-in duration-300">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <AlignLeft size={14} className="text-brand" />
              <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
                Reversed Result
              </label>
            </div>
            <button 
              onClick={handleCopy} 
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider border rounded-xl px-4 py-2 transition-all active:scale-95 ${
                copied 
                  ? "border-green-400 bg-green-50 text-green-700" 
                  : "border-border bg-white text-ink-muted hover:border-brand/40 hover:text-brand shadow-sm"
              }`}
            >
              {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="rounded-2xl border border-border bg-white px-5 py-5 text-sm text-ink break-all whitespace-pre-wrap font-mono shadow-sm transition-colors hover:border-brand/30 select-text">
            {output}
          </div>
        </div>
      )}

      {/* Footer / Reset */}
      <div className="flex items-center justify-between border-t border-border/50 pt-4">
        <button
          onClick={() => setInput("")}
          disabled={!input}
          className="group flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink-subtle transition-all hover:bg-red-50 hover:text-red-600 disabled:opacity-0"
        >
          <RotateCcw size={14} className="transition-transform group-hover:-rotate-90" />
          <span>Reset</span>
        </button>
        
        {!input && (
          <p className="text-[11px] text-ink-subtle italic">
            Flip your text backward by character or entire words.
          </p>
        )}
      </div>
    </div>
  );
}