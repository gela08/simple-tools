"use client";
import { useState } from "react";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [unique, setUnique] = useState(false);
  const [results, setResults] = useState<number[]>([]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    setError("");
    if (min >= max) { setError("Min must be less than Max."); return; }
    if (unique && count > max - min + 1) { setError("Not enough unique numbers in that range."); return; }

    let nums: number[] = [];
    if (unique) {
      const pool = Array.from({ length: max - min + 1 }, (_, i) => min + i);
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      nums = pool.slice(0, count);
    } else {
      nums = Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    }
    setResults(nums);
  };

  const copyAll = async () => {
    try { await navigator.clipboard.writeText(results.join(", ")); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Minimum</label>
          <input type="number" value={min} onChange={(e) => setMin(+e.target.value)}
<<<<<<< HEAD
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
=======
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Maximum</label>
          <input type="number" value={max} onChange={(e) => setMax(+e.target.value)}
<<<<<<< HEAD
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
=======
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-ink">
<<<<<<< HEAD
          How many numbers: <span className="text-brand font-bold">{count}</span>
        </label>
        <input type="range" min={1} max={50} value={count} onChange={(e) => setCount(+e.target.value)} className="w-full accent-brand" />
=======
          How many numbers: <span className="text-brand-orange font-bold">{count}</span>
        </label>
        <input type="range" min={1} max={50} value={count} onChange={(e) => setCount(+e.target.value)} className="w-full accent-brand-orange" />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        <div className="mt-1 flex justify-between text-xs text-ink-subtle"><span>1</span><span>50</span></div>
      </div>

      <label className="flex items-center gap-2 text-sm font-medium text-ink cursor-pointer">
<<<<<<< HEAD
        <input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} className="accent-brand" />
=======
        <input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} className="accent-brand-orange" />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        No repeats (unique numbers only)
      </label>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button onClick={generate}
<<<<<<< HEAD
        className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95">
=======
        className="flex items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-orange-dark active:scale-95">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        🎱 Generate
      </button>

      {results.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-ink">{results.length === 1 ? "Result" : `${results.length} numbers`}:</p>
<<<<<<< HEAD
            <button onClick={copyAll} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand/40"}`}>
=======
            <button onClick={copyAll} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand-orange/40"}`}>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
              {copied ? "✓ Copied" : "Copy all"}
            </button>
          </div>
          {results.length === 1 ? (
            <div className="flex items-center justify-center rounded-2xl bg-surface-muted border border-border py-10">
              <span className="text-6xl font-extrabold font-display text-ink">{results[0]}</span>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {results.map((n, i) => (
                <span key={i} className="rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm font-bold text-ink">{n}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
