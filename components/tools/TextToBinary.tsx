"use client";
import { useState } from "react";

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
    try { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        {([["to", "Text → Binary"], ["from", "Binary → Text"]] as const).map(([id, label]) => (
          <button key={id} onClick={() => { setMode(id); setInput(""); }}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
<<<<<<< HEAD
              mode === id ? "border-brand bg-brand/10 text-brand" : "border-border text-ink-muted hover:border-brand/40"
=======
<<<<<<< HEAD
              mode === id ? "border-brand bg-brand/10 text-brand" : "border-border text-ink-muted hover:border-brand/40"
=======
              mode === id ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border text-ink-muted hover:border-brand-orange/40"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
            }`}>{label}</button>
        ))}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          {mode === "to" ? "Text input" : "Binary input (space-separated bytes)"}
        </label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "to" ? "Type your text here…" : "01001000 01100101 01101100 01101100 01101111"}
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 font-mono"
=======
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 font-mono"
=======
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 font-mono"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          rows={4} />
      </div>

      {output !== null && output !== undefined && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">{mode === "to" ? "Binary output" : "Decoded text"}</label>
<<<<<<< HEAD
            <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand/40"}`}>
=======
<<<<<<< HEAD
            <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand/40"}`}>
=======
            <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand-orange/40"}`}>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <div className="max-h-48 overflow-y-auto rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm font-mono text-ink break-all">
            {output}
          </div>
        </div>
      )}
      {output === null && input.trim() && (
        <p className="text-sm text-red-500">Invalid binary input. Make sure each byte is 8 bits separated by spaces.</p>
      )}
    </div>
  );
}
