"use client";

import { useState } from "react";
import { countWords, readingTimeMinutes } from "@/lib/utils";

const SPEEDS = [
  { label: "Slow (150 wpm)", wpm: 150 },
  { label: "Average (200 wpm)", wpm: 200 },
  { label: "Fast (300 wpm)", wpm: 300 },
];

export default function ReadingTime() {
  const [text, setText] = useState("");
  const [wpm, setWpm] = useState(200);

  const words = countWords(text);
  const minutes = text.trim() ? Math.max(1, Math.ceil(words / wpm)) : 0;
  const seconds = text.trim() ? Math.round((words / wpm) * 60) : 0;

  return (
    <div className="space-y-6">
      {/* Speed selector */}
      <div>
        <p className="mb-2 text-sm font-medium text-ink-muted">
          Reading speed:
        </p>
        <div className="flex flex-wrap gap-2">
          {SPEEDS.map((s) => (
            <button
              key={s.wpm}
              onClick={() => setWpm(s.wpm)}
              className={`rounded-lg border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                wpm === s.wpm
<<<<<<< HEAD
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand/50"
=======
                  ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/50"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div>
        <label className="mb-2 block text-sm font-medium text-ink-muted">
          Paste your text below
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste an article, blog post, essay, or any text..."
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder-ink-subtle transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
=======
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder-ink-subtle transition-colors focus:border-brand-orange focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
          rows={7}
        />
      </div>

      {/* Result */}
      {text.trim() ? (
<<<<<<< HEAD
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-brand/5 p-8 ring-1 ring-brand/15 sm:flex-row sm:justify-around">
          {/* Time */}
          <div className="text-center">
            <div className="stat-number text-5xl font-extrabold text-brand">
=======
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-brand-orange/5 p-8 ring-1 ring-brand-orange/15 sm:flex-row sm:justify-around">
          {/* Time */}
          <div className="text-center">
            <div className="stat-number text-5xl font-extrabold text-brand-orange">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
              {minutes}
            </div>
            <div className="mt-1 text-sm font-medium text-ink-muted">
              {minutes === 1 ? "minute" : "minutes"} to read
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-16 w-px bg-border sm:block" />

          {/* Words */}
          <div className="text-center">
            <div className="stat-number text-4xl font-bold text-ink">
              {words.toLocaleString()}
            </div>
            <div className="mt-1 text-sm font-medium text-ink-muted">
              words
            </div>
          </div>

          {/* Exact time */}
          <div className="hidden h-16 w-px bg-border sm:block" />
          <div className="text-center">
            <div className="stat-number text-4xl font-bold text-ink">
              ~{seconds}s
            </div>
            <div className="mt-1 text-sm font-medium text-ink-muted">
              exact time
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-surface-muted p-8 text-center text-sm text-ink-subtle">
          Paste some text above to see your estimated reading time.
        </div>
      )}

      {/* Clear */}
      <button
        onClick={() => setText("")}
        disabled={!text}
        className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Clear
      </button>
    </div>
  );
}
