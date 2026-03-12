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
    if (min >= max) {
      setError("Minimum must be less than Maximum.");
      return;
    }
    if (unique && count > max - min + 1) {
      setError("Not enough unique numbers in that range.");
      return;
    }

    let nums: number[] = [];
    if (unique) {
      const pool = Array.from({ length: max - min + 1 }, (_, i) => min + i);
      // Fisher-Yates Shuffle
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      nums = pool.slice(0, count);
    } else {
      nums = Array.from(
        { length: count },
        () => Math.floor(Math.random() * (max - min + 1)) + min
      );
    }
    setResults(nums);
  };

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(results.join(", "));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Range Inputs */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Minimum</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(+e.target.value)}
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Maximum</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(+e.target.value)}
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
          />
        </div>
      </div>

      {/* Count Slider */}
      <div>
        <label className="mb-2 block text-sm font-medium text-ink">
          How many numbers: <span className="text-brand font-bold">{count}</span>
        </label>
        <input
          type="range"
          min={1}
          max={50}
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          className="w-full accent-brand cursor-pointer"
        />
        <div className="mt-1 flex justify-between text-[10px] font-bold uppercase tracking-wider text-ink-subtle">
          <span>1</span>
          <span>50</span>
        </div>
      </div>

      {/* Unique Checkbox */}
      <label className="flex items-center gap-3 text-sm font-medium text-ink cursor-pointer group">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            checked={unique}
            onChange={(e) => setUnique(e.target.checked)}
            className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-border bg-surface-muted checked:bg-brand checked:border-brand transition-all"
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
            ✓
          </span>
        </div>
        <span className="group-hover:text-brand transition-colors">No repeats (unique numbers only)</span>
      </label>

      {error && (
        <p className="text-xs font-semibold text-red-500 bg-red-50 p-2.5 rounded-lg border border-red-100 animate-in fade-in slide-in-from-left-1">
          ⚠️ {error}
        </p>
      )}

      <button
        onClick={generate}
        className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 shadow-sm shadow-brand/20"
      >
        🎱 Generate Numbers
      </button>

      {/* Results Display */}
      {results.length > 0 && (
        <div className="animate-in fade-in zoom-in duration-300">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
              {results.length === 1 ? "Result" : `${results.length} Generated Numbers`}
            </p>
            <button
              onClick={copyAll}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                copied
                  ? "border-green-400 bg-green-50 text-green-700"
                  : "border-border bg-white text-ink-muted hover:border-brand/40 hover:text-brand"
              }`}
            >
              {copied ? "✓ Copied" : "Copy all"}
            </button>
          </div>

          {results.length === 1 ? (
            <div className="flex items-center justify-center rounded-2xl bg-surface-muted border border-border py-12 shadow-inner">
              <span className="text-7xl font-black font-display text-brand drop-shadow-sm">
                {results[0]}
              </span>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2 p-1">
              {results.map((n, i) => (
                <span
                  key={i}
                  className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-sm hover:border-brand/30 transition-colors"
                >
                  {n}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}