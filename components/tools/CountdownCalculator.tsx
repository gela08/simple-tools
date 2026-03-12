"use client";
import { useState } from "react";

export default function CountdownCalculator() {
  const [date, setDate] = useState("");
  const [label, setLabel] = useState("");

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = date ? new Date(date + "T00:00:00") : null;
  const diff = target ? Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) : null;

  const weeks = diff !== null ? Math.floor(Math.abs(diff) / 7) : null;
  const months = diff !== null ? Math.floor(Math.abs(diff) / 30.44) : null;
  const isPast = diff !== null && diff < 0;

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Target date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Event name <span className="text-ink-subtle">(optional)</span></label>
          <input type="text" value={label} onChange={(e) => setLabel(e.target.value)}
            placeholder="e.g. Birthday, Holiday…"
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
        </div>
      </div>

      {diff !== null && (
        <div className={`rounded-2xl border-2 p-6 text-center ${isPast ? "border-red-200 bg-red-50" : "border-brand/20 bg-brand/5"}`}>
          {label && <p className="text-sm font-medium text-ink-muted mb-2">{label}</p>}
          <p className={`text-6xl font-extrabold font-display ${isPast ? "text-red-600" : "text-brand"}`}>
            {Math.abs(diff)}
          </p>
          <p className="text-lg font-semibold text-ink mt-1">{Math.abs(diff) === 1 ? "day" : "days"} {isPast ? "ago" : "away"}</p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-ink-muted">
            <span>~{weeks} week{weeks !== 1 ? "s" : ""}</span>
            <span>~{months} month{months !== 1 ? "s" : ""}</span>
          </div>
          {diff === 0 && <p className="mt-3 text-lg font-bold text-green-600">🎉 That's today!</p>}
        </div>
      )}
    </div>
  );
}
