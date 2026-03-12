"use client";
import { useState, useEffect, useMemo } from "react";

export default function RepetitionTimer() {
  const [count, setCount] = useState("");
  const [intervalSec, setIntervalSec] = useState("");
  const [breakMins, setBreakMins] = useState("");
  const [breakFreq, setBreakFreq] = useState("");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 10000);
    return () => clearInterval(timer);
  }, []);

  // UseMemo prevents unnecessary heavy math on every single keystroke
  const stats = useMemo(() => {
    const n = parseInt(count) || 0;
    const i = parseInt(intervalSec) || 0;
    const bM = parseInt(breakMins) || 0;
    const bF = parseInt(breakFreq) || 0;

    const numBreaks = bF > 0 && n > bF ? Math.floor((n - 1) / bF) : 0;
    const activeSecs = n * i;
    const breakSecs = numBreaks * (bM * 60);
    const totalSecs = activeSecs + breakSecs;

    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;

    const finishDate = new Date(now.getTime() + totalSecs * 1000);
    const finishStr = finishDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return { h, m, s, numBreaks, activeSecs, finishStr };
  }, [count, intervalSec, breakMins, breakFreq, now]);

  const handleReset = () => {
    setCount("");
    setIntervalSec("");
    setBreakMins("");
    setBreakFreq("");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {/* We move the InputField logic inline to ensure it never loses focus */}
        {[
          { label: "Total Reps", val: count, set: setCount, ph: "300" },
          { label: "Sec Per Rep", val: intervalSec, set: setIntervalSec, ph: "30" },
          { label: "Break (Mins)", val: breakMins, set: setBreakMins, ph: "5" },
          { label: "Break Every X", val: breakFreq, set: setBreakFreq, ph: "50" },
        ].map((field) => (
          <div key={field.label} className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-ink-subtle ml-1">
              {field.label}
            </label>
            <input 
              type="number" 
              value={field.val} 
              onChange={(e) => field.set(e.target.value)} 
              placeholder={field.ph}
              className="w-full rounded-xl border border-border bg-surface-muted px-3 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
            />
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl border-2 border-brand/20 bg-brand/5 p-6 text-center">
          <p className="text-xs text-ink-subtle font-semibold uppercase tracking-widest mb-1">Total Duration</p>
          <p className="text-4xl font-black font-display text-ink">
            {stats.h > 0 && `${stats.h}h `}{stats.m}m {stats.s}s
          </p>
          {stats.numBreaks > 0 && (
            <p className="mt-2 text-xs text-brand font-medium">
              Includes {stats.numBreaks} {stats.numBreaks === 1 ? 'break' : 'breaks'}
            </p>
          )}
        </div>

        <div className="rounded-xl border border-border bg-surface-muted p-4 flex items-center justify-between">
          <div className="text-left">
            <p className="text-[10px] font-bold text-ink-subtle uppercase tracking-tight">Estimated Finish</p>
            <p className="text-xl font-bold text-ink">{stats.finishStr}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-ink-subtle uppercase tracking-tight">Active Work</p>
            <p className="text-sm font-semibold text-ink-muted">{Math.floor(stats.activeSecs / 60)} mins</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <button onClick={handleReset} className="text-xs font-medium text-ink-subtle hover:text-brand transition-colors underline decoration-dotted underline-offset-4">
          Clear all inputs
        </button>
      </div>
    </div>
  );
}