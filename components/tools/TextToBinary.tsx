"use client";
import { useState } from "react";
import { 
  Binary, 
  Type, 
  ArrowLeftRight, 
  Copy, 
  CheckCircle2, 
  AlertCircle,
  RotateCcw
} from "lucide-react";

function textToBin(t: string) {
  return t.split("").map((c) => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
}

function binToText(b: string) {
  try {
    return b.trim().split(/\s+/).map((byte) => {
      const n = parseInt(byte, 2);
      if (isNaN(n)) throw new Error();
      return String.fromCharCode(n);
    }).join("");
  } catch { return null; }
}

export default function TextToBinary() {
  const [mode, setMode] = useState<"to" | "from">("to");
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const output = input.trim()
    ? mode === "to" ? textToBin(input) : binToText(input)
    : null;

  const handleCopy = async () => {
    if (!output) return;
    try { 
      await navigator.clipboard.writeText(output); 
      setCopied(true); 
      setTimeout(() => setCopied(false), 1500); 
    } catch {}
  };

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <div className="flex p-1 bg-surface-muted rounded-2xl w-fit border border-border">
        {( [["to", "Text → Binary"], ["from", "Binary → Text"]] as const).map(([id, label]) => (
          <button 
            key={id} 
            onClick={() => { setMode(id); setInput(""); }}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 ${
              mode === id 
                ? "bg-white text-brand shadow-sm ring-1 ring-border" 
                : "text-ink-subtle hover:text-ink"
            }`}
          >
            <Binary size={14} className={id === "from" ? "rotate-180" : ""} />
            {label}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          {mode === "to" ? <Type size={14} className="text-brand" /> : <Binary size={14} className="text-brand" />}
          <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
            {mode === "to" ? "Text input" : "Binary input (space-separated)"}
          </label>
        </div>
        <textarea 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "to" ? "Type your text here…" : "01001000 01100101 01101100 01101100 01101111"}
          className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-4 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 font-mono shadow-inner min-h-[140px]" 
          rows={4} 
        />
      </div>

      {/* Result Area */}
      {output !== null && output !== undefined && (
        <div className="space-y-3 animate-in fade-in zoom-in duration-300">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-600" />
              <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
                {mode === "to" ? "Binary output" : "Decoded text"}
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
          <div className="max-h-48 overflow-y-auto rounded-2xl border border-border bg-white px-5 py-5 text-sm font-mono text-ink break-all shadow-sm">
            {output}
          </div>
        </div>
      )}

      {/* Error State */}
      {output === null && input.trim() && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 border border-red-100 text-red-700 text-sm animate-in shake-in">
          <AlertCircle size={16} />
          <p>Invalid binary input. Ensure each byte is 8 bits separated by spaces.</p>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border/50 pt-4">
        <button
          onClick={() => setInput("")}
          disabled={!input}
          className="group flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink-subtle transition-all hover:bg-red-50 hover:text-red-600 disabled:opacity-0"
        >
          <RotateCcw size={14} className="transition-transform group-hover:-rotate-180 duration-500" />
          <span>Reset</span>
        </button>
        
        {!input && (
          <p className="text-[11px] text-ink-subtle italic">
            Convert UTF-8 text to raw binary and back.
          </p>
        )}
      </div>
    </div>
  );
}