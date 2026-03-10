"use client";

import { useState } from "react";
import StatCard from "@/components/ui/StatCard";
import CopyButton from "@/components/ui/CopyButton";

const LIMITS = [
  { platform: "Twitter / X", max: 280 },
  { platform: "Instagram bio", max: 150 },
  { platform: "Meta description", max: 160 },
  { platform: "SMS", max: 160 },
];

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [selectedLimit, setSelectedLimit] = useState<number | null>(null);

  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text ? text.split("\n").length : 0;

  const remaining =
    selectedLimit !== null ? selectedLimit - chars : null;
  const overLimit = remaining !== null && remaining < 0;

  return (
    <div className="space-y-6">
      {/* Platform limit buttons */}
      <div>
        <p className="mb-2 text-sm font-medium text-ink-muted">
          Check against a platform limit:
        </p>
        <div className="flex flex-wrap gap-2">
          {LIMITS.map((l) => (
            <button
              key={l.platform}
              onClick={() =>
                setSelectedLimit(selectedLimit === l.max ? null : l.max)
              }
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedLimit === l.max
                  ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/50 hover:text-ink"
              }`}
            >
              {l.platform} ({l.max})
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className={`w-full rounded-xl border bg-surface-muted px-4 py-3 text-sm text-ink placeholder-ink-subtle transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
            overLimit
              ? "border-red-400 focus:border-red-400 focus:ring-red-200"
              : "border-border focus:border-brand-orange focus:ring-brand-orange/20"
          }`}
          rows={7}
        />

        {/* Character progress bar */}
        {selectedLimit !== null && (
          <div className="mt-2">
            <div className="flex justify-between text-xs text-ink-subtle mb-1">
              <span>{chars} characters used</span>
              <span className={overLimit ? "font-semibold text-red-500" : ""}>
                {overLimit
                  ? `${Math.abs(remaining!)} over limit`
                  : `${remaining} remaining`}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-surface-muted overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-150 ${
                  overLimit
                    ? "bg-red-500"
                    : chars / selectedLimit > 0.8
                    ? "bg-amber-400"
                    : "bg-brand-orange"
                }`}
                style={{
                  width: `${Math.min(100, (chars / selectedLimit) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Characters" value={chars} highlight />
        <StatCard label="No Spaces" value={charsNoSpaces} />
        <StatCard label="Words" value={words} />
        <StatCard label="Lines" value={lines} />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <CopyButton text={text} disabled={!text} />
        <button
          onClick={() => {
            setText("");
            setSelectedLimit(null);
          }}
          disabled={!text}
          className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
