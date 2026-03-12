"use client";
import { useState } from "react";

export default function CoinFlip() {
  const [result, setResult] = useState<"heads" | "tails" | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [history, setHistory] = useState<("heads" | "tails")[]>([]);

  const flip = () => {
    setFlipping(true);
    // 400ms delay matches the spin animation duration
    setTimeout(() => {
      const r = Math.random() < 0.5 ? "heads" : "tails";
      setResult(r);
      setHistory((h) => [r, ...h].slice(0, 10) as ("heads" | "tails")[]);
      setFlipping(false);
    }, 400);
  };

  return (
    <div className="space-y-6 text-center">
      {/* Visual Coin - Using standard emojis to prevent the 'box' error */}
      <div
        className={`mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 text-6xl transition-all duration-300 ${
          flipping
            ? "animate-spin border-brand/40 bg-brand/5"
            : result === "heads"
            ? "border-amber-400 bg-amber-50"
            : result === "tails"
            ? "border-slate-400 bg-slate-50"
            : "border-border bg-surface-muted"
        }`}
      >
        {/* We use the simple coin emoji during the spin to ensure it renders */}
        {flipping ? "🥮" : result === "heads" ? "👑" : result === "tails" ? "🦅" : "🪙"}
      </div>

      <div className="h-8">
        {result && !flipping && (
          <p className="text-2xl font-bold text-ink capitalize animate-in fade-in zoom-in-95">
            {result}!
          </p>
        )}
      </div>

      <button
        onClick={flip}
        disabled={flipping}
        className="rounded-xl bg-brand px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 disabled:opacity-60"
      >
        {flipping ? "Flipping..." : "🥮 Flip Coin"}
      </button>

      {/* History rendering here... */}
    </div>
  );
}