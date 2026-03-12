"use client";
import { useState } from "react";

export default function RandomNamePicker() {
  const [input, setInput] = useState("");
  const [winner, setWinner] = useState<string | null>(null);
  const [picking, setPicking] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const names = input.split("\n").map((n) => n.trim()).filter(Boolean);

  const pick = () => {
    if (names.length < 2) return;
    setPicking(true);
    let iterations = 0;
    const max = 15;
    const interval = setInterval(() => {
      setWinner(names[Math.floor(Math.random() * names.length)]);
      iterations++;
      if (iterations >= max) {
        clearInterval(interval);
        const final = names[Math.floor(Math.random() * names.length)];
        setWinner(final);
        setHistory((h) => [final, ...h].slice(0, 5));
        setPicking(false);
      }
    }, 80);
  };

  const handleCopy = async () => {
    if (!winner) return;
    try { await navigator.clipboard.writeText(winner); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Enter names — one per line
        </label>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          placeholder={"Alice\nBob\nCharlie\nDiana\nEthan"}
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          rows={6} />
        <p className="mt-1 text-xs text-ink-subtle">{names.length} name{names.length !== 1 ? "s" : ""} entered</p>
      </div>

      <button onClick={pick} disabled={names.length < 2 || picking}
        className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 disabled:opacity-60">
        🎯 {picking ? "Picking…" : "Pick a Name"}
      </button>

      {winner && (
        <div className="rounded-2xl border-2 border-brand/30 bg-brand/5 p-6 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-ink-subtle mb-1">🎉 Winner</p>
          <p className="text-3xl font-extrabold font-display text-ink">{winner}</p>
          <button onClick={handleCopy} className={`mt-3 text-sm font-medium border rounded-lg px-4 py-1.5 transition-all ${copied ? "border-green-400 text-green-600" : "border-border text-ink-muted hover:border-brand/40"}`}>
            {copied ? "✓ Copied!" : "Copy name"}
          </button>
        </div>
      )}

      {history.length > 1 && (
        <div>
          <p className="text-xs font-medium text-ink-subtle mb-2">Previous picks:</p>
          <div className="flex flex-wrap gap-2">
            {history.slice(1).map((n, i) => (
              <span key={i} className="rounded-full bg-surface-muted border border-border px-3 py-1 text-sm text-ink-muted">{n}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
