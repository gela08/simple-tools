"use client";
import { useState } from "react";

const DICE_TYPES = [4, 6, 8, 10, 12, 20, 100];
const DICE_EMOJI: Record<number, string> = {4:"🔺",6:"🎲",8:"🔷",10:"🔟",12:"🔵",20:"⚡",100:"💯"};

export default function DiceRoller() {
  const [dieType, setDieType] = useState(6);
  const [count, setCount] = useState(2);
  const [results, setResults] = useState<number[]>([]);
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);
    setTimeout(() => {
      setResults(Array.from({ length: count }, () => Math.floor(Math.random() * dieType) + 1));
      setRolling(false);
    }, 300);
  };

  const total = results.reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium text-ink">Dice type:</p>
        <div className="flex flex-wrap gap-2">
          {DICE_TYPES.map((d) => (
            <button key={d} onClick={() => { setDieType(d); setResults([]); }}
              className={`rounded-xl border px-4 py-2.5 text-sm font-bold transition-all ${
                dieType === d ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/40"
              }`}>
              {DICE_EMOJI[d]} d{d}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-ink">Number of dice: <span className="font-bold text-brand-orange">{count}</span></p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <button key={n} onClick={() => { setCount(n); setResults([]); }}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                count === n ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border text-ink-muted hover:border-brand-orange/40"
              }`}>{n}</button>
          ))}
        </div>
      </div>

      <button onClick={roll} disabled={rolling}
        className="flex items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-orange-dark active:scale-95 disabled:opacity-60">
        {rolling ? "Rolling…" : `🎲 Roll ${count}d${dieType}`}
      </button>

      {results.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-3">
            {results.map((r, i) => (
              <div key={i} className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 text-2xl font-bold transition-all ${
                r === dieType ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : r === 1 ? "border-red-300 bg-red-50 text-red-600" : "border-border bg-surface-muted text-ink"
              }`}>{r}</div>
            ))}
          </div>
          {count > 1 && (
            <p className="mt-3 text-sm text-ink-muted">
              Total: <span className="font-bold text-ink text-base">{total}</span>
              <span className="ml-2 text-ink-subtle">· Average: {(total / count).toFixed(1)}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
