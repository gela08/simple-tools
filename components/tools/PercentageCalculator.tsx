"use client";
import { useState } from "react";

/**
 * Extracted InputField to prevent focus loss and re-renders
 */
const InputField = ({ val, set, ph }: { val: string; set: (v: string) => void; ph: string }) => (
  <input 
    type="number" 
    value={val} 
    onChange={(e) => set(e.target.value)} 
    placeholder={ph}
    className="w-full rounded-xl border border-border bg-surface-muted px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
  />
);

/**
 * Reusable Result display with animation
 */
const Result = ({ val, label }: { val: string | null; label: string }) => val ? (
  <div className="rounded-xl border border-brand/20 bg-brand/5 p-3 animate-in fade-in zoom-in duration-200">
    <p className="text-xs text-ink-subtle mb-0.5 font-medium">{label}</p>
    <p className="text-xl font-bold font-display text-brand tracking-tight">{val}</p>
  </div>
) : null;

export default function PercentageCalculator() {
  const [a1, setA1] = useState(""); const [b1, setB1] = useState("");
  const [a2, setA2] = useState(""); const [b2, setB2] = useState("");
  const [a3, setA3] = useState(""); const [b3, setB3] = useState("");

  // Calculation Logic
  const r1 = a1 && b1 ? `${((+a1 / +b1) * 100).toFixed(2)}%` : null;
  const r2 = a2 && b2 ? (+b2 * +a2 / 100).toFixed(2) : null;
  const r3 = a3 && b3 ? `${(((+b3 - +a3) / Math.abs(+a3)) * 100).toFixed(2)}%` : null;
  const isIncrease = a3 && b3 && +b3 > +a3;

  return (
    <div className="space-y-6">
      {/* Box 1: What % is X of Y? */}
      <div className="rounded-2xl border border-border bg-white/50 p-4 space-y-3 transition-all hover:border-brand/30">
        <p className="text-sm font-semibold text-ink">What percentage is X of Y?</p>
        <div className="grid grid-cols-2 gap-3">
          <InputField val={a1} set={setA1} ph="X (e.g. 25)" />
          <InputField val={b1} set={setB1} ph="Y (e.g. 200)" />
        </div>
        <Result val={r1} label={`${a1 || 'X'} is ___ of ${b1 || 'Y'}`} />
      </div>

      {/* Box 2: What is X% of Y? */}
      <div className="rounded-2xl border border-border bg-white/50 p-4 space-y-3 transition-all hover:border-brand/30">
        <p className="text-sm font-semibold text-ink">What is X% of Y?</p>
        <div className="grid grid-cols-2 gap-3">
          <InputField val={a2} set={setA2} ph="X% (e.g. 15)" />
          <InputField val={b2} set={setB2} ph="of Y (e.g. 80)" />
        </div>
        <Result val={r2} label={`${a2 || 'X'}% of ${b2 || 'Y'} =`} />
      </div>

      {/* Box 3: % Change */}
      <div className="rounded-2xl border border-border bg-white/50 p-4 space-y-3 transition-all hover:border-brand/30">
        <p className="text-sm font-semibold text-ink">Percentage change from X to Y</p>
        <div className="grid grid-cols-2 gap-3">
          <InputField val={a3} set={setA3} ph="From (e.g. 80)" />
          <InputField val={b3} set={setB3} ph="To (e.g. 100)" />
        </div>
        {r3 && (
          <div className="rounded-xl border border-brand/20 bg-brand/5 p-3 animate-in fade-in zoom-in duration-200">
            <p className="text-xs text-ink-subtle mb-0.5 font-medium">Change from {a3} to {b3}</p>
            <p className={`text-xl font-bold font-display tracking-tight ${isIncrease ? "text-green-600" : "text-red-600"}`}>
              {isIncrease ? "↑ +" : "↓ "}{r3}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}