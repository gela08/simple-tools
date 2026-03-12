"use client";

import { useState } from "react";
import { countWords } from "@/lib/utils";

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
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
          Reading speed
        </p>
        <div className="flex flex-wrap gap-2">
          {SPEEDS.map((s) => (
            <button
              key={s.wpm}
              onClick={() => setWpm(s.wpm)}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all active:scale-95 ${
                wpm === s.wpm
                  ? "border-brand bg-brand/10 text-brand shadow-sm shadow-brand/10"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand/40 hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
          Paste your text
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste an article, blog post, essay, or any text..."
          className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-4 text-sm text-ink placeholder:text-ink-subtle transition-all focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 shadow-inner min-h-[180px]"
          rows={7}
        />
      </div>

      {/* Result */}
      {text.trim() ? (
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-brand/5 p-8 ring-1 ring-brand/15 sm:flex-row sm:justify-around animate-in zoom-in fade-in duration-300">
          {/* Time */}
          <div className="text-center group">
            <div className="text-5xl font-black font-display text-brand drop-shadow-sm transition-transform group-hover:scale-110">
              {minutes}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ink-subtle">
              {minutes === 1 ? "minute" : "minutes"} to read
            </div>
          </div>

          <div className="hidden h-12 w-px bg-brand/20 sm:block" />

          {/* Words */}
          <div className="text-center">
            <div className="text-3xl font-extrabold font-display text-ink">
              {words.toLocaleString()}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ink-subtle">
              words
            </div>
          </div>

          <div className="hidden h-12 w-px bg-brand/20 sm:block" />

          {/* Exact time */}
          <div className="text-center">
            <div className="text-3xl font-extrabold font-display text-ink">
              ~{seconds}s
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ink-subtle">
              exact time
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-surface-muted/50 p-10 text-center text-sm font-medium text-ink-subtle">
          Waiting for text to analyze...
        </div>
      )}

      {/* Clear */}
      <div className="flex justify-end">
        <button
          onClick={() => setText("")}
          disabled={!text}
          className="group flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink-subtle transition-all hover:bg-red-50 hover:text-red-600 disabled:opacity-0"
        >
          <span>✕</span>
          <span>Clear Text</span>
        </button>
      </div>
    </div>
  );
}