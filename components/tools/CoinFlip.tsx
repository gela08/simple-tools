"use client";
import { useState } from "react";

export default function CoinFlip() {
  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [history, setHistory] = useState<("heads" | "tails")[]>([]);

  const flip = () => {
    setFlipping(true);
    setTimeout(() => {
      const r = Math.random() < 0.5 ? "heads" : "tails";
      setResult(r);
      setHistory((h) => [r, ...h].slice(0, 10));
      setFlipping(false);
    }, 400);
  };

  const headsCount = history.filter((h) => h === "heads").length;
  const tailsCount = history.filter((h) => h === "tails").length;

  return (
    <div className="space-y-6 text-center">
      <div className={`mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 text-6xl transition-all duration-300 ${
        flipping ? "animate-spin border-brand-orange/40 bg-brand-orange/5" :
        result === "heads" ? "border-amber-400 bg-amber-50" :
        result === "tails" ? "border-slate-400 bg-slate-50" : "border-border bg-surface-muted"
      }`}>
        {flipping ? "🪙" : result === "heads" ? "👑" : result === "tails" ? "🦅" : "🪙"}
      </div>

      {result && !flipping && (
        <p className="text-2xl font-bold text-ink capitalize">{result}!</p>
      )}
      {!result && !flipping && (
        <p className="text-sm text-ink-subtle">Press the button to flip the coin.</p>
      )}

      <button onClick={flip} disabled={flipping}
        className="rounded-xl bg-brand-orange px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-orange-dark active:scale-95 disabled:opacity-60">
        {flipping ? "Flipping…" : "🪙 Flip Coin"}
      </button>

      {history.length > 0 && (
        <div className="text-left">
          <div className="mb-2 flex gap-4 text-sm text-ink-muted">
            <span>👑 Heads: <strong className="text-ink">{headsCount}</strong></span>
            <span>🦅 Tails: <strong className="text-ink">{tailsCount}</strong></span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {history.map((h, i) => (
              <span key={i} className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                h === "heads" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"
              }`}>{h}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
