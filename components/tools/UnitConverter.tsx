"use client";
import { useState } from "react";

type Category = "length" | "weight" | "temperature" | "area" | "speed";

const CONVERSIONS: Record<Category, { from: string; to: string; label: string; convert: (v: number) => number; reverseConvert: (v: number) => number }[]> = {
  length: [
    { from: "km", to: "miles", label: "km → miles", convert: (v) => v * 0.621371, reverseConvert: (v) => v / 0.621371 },
    { from: "miles", to: "km", label: "miles → km", convert: (v) => v / 0.621371, reverseConvert: (v) => v * 0.621371 },
    { from: "cm", to: "inches", label: "cm → inches", convert: (v) => v * 0.393701, reverseConvert: (v) => v / 0.393701 },
    { from: "meters", to: "feet", label: "meters → feet", convert: (v) => v * 3.28084, reverseConvert: (v) => v / 3.28084 },
    { from: "inches", to: "cm", label: "inches → cm", convert: (v) => v * 2.54, reverseConvert: (v) => v / 2.54 },
  ],
  weight: [
    { from: "kg", to: "lbs", label: "kg → lbs", convert: (v) => v * 2.20462, reverseConvert: (v) => v / 2.20462 },
    { from: "lbs", to: "kg", label: "lbs → kg", convert: (v) => v / 2.20462, reverseConvert: (v) => v * 2.20462 },
    { from: "grams", to: "oz", label: "grams → oz", convert: (v) => v * 0.035274, reverseConvert: (v) => v / 0.035274 },
    { from: "oz", to: "grams", label: "oz → grams", convert: (v) => v / 0.035274, reverseConvert: (v) => v * 0.035274 },
  ],
  temperature: [
    { from: "°C", to: "°F", label: "Celsius → Fahrenheit", convert: (v) => (v * 9/5) + 32, reverseConvert: (v) => (v - 32) * 5/9 },
    { from: "°F", to: "°C", label: "Fahrenheit → Celsius", convert: (v) => (v - 32) * 5/9, reverseConvert: (v) => (v * 9/5) + 32 },
    { from: "°C", to: "K", label: "Celsius → Kelvin", convert: (v) => v + 273.15, reverseConvert: (v) => v - 273.15 },
  ],
  area: [
    { from: "sqft", to: "sqm", label: "sq ft → sq m", convert: (v) => v * 0.092903, reverseConvert: (v) => v / 0.092903 },
    { from: "sqm", to: "sqft", label: "sq m → sq ft", convert: (v) => v / 0.092903, reverseConvert: (v) => v * 0.092903 },
    { from: "acres", to: "hectares", label: "acres → hectares", convert: (v) => v * 0.404686, reverseConvert: (v) => v / 0.404686 },
  ],
  speed: [
    { from: "km/h", to: "mph", label: "km/h → mph", convert: (v) => v * 0.621371, reverseConvert: (v) => v / 0.621371 },
    { from: "mph", to: "km/h", label: "mph → km/h", convert: (v) => v / 0.621371, reverseConvert: (v) => v * 0.621371 },
    { from: "m/s", to: "km/h", label: "m/s → km/h", convert: (v) => v * 3.6, reverseConvert: (v) => v / 3.6 },
  ],
};

const CATEGORY_LABELS: Record<Category, string> = {
  length: "📏 Length", weight: "⚖️ Weight", temperature: "🌡️ Temperature", area: "📐 Area", speed: "💨 Speed"
};

export default function UnitConverter() {
  const [cat, setCat] = useState<Category>("length");
  const [convIdx, setConvIdx] = useState(0);
  const [val, setVal] = useState("");

  const conv = CONVERSIONS[cat][Math.min(convIdx, CONVERSIONS[cat].length - 1)];
  const result = val ? conv.convert(+val) : null;

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-sm font-medium text-ink">Category:</p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(CONVERSIONS) as Category[]).map((c) => (
            <button key={c} onClick={() => { setCat(c); setConvIdx(0); setVal(""); }}
              className={`rounded-xl border px-3 py-2 text-sm font-medium transition-all ${
                cat === c ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/40"
              }`}>{CATEGORY_LABELS[c]}</button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-ink">Convert:</p>
        <div className="flex flex-wrap gap-2">
          {CONVERSIONS[cat].map((c, i) => (
            <button key={i} onClick={() => { setConvIdx(i); setVal(""); }}
              className={`rounded-xl border px-3 py-2 text-sm font-medium transition-all ${
                convIdx === i ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/40"
              }`}>{c.label}</button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Value in {conv.from}</label>
        <input type="number" value={val} onChange={(e) => setVal(e.target.value)}
          placeholder={`Enter value in ${conv.from}…`}
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" />
      </div>

      {result !== null && (
        <div className="rounded-2xl border-2 border-brand-orange/20 bg-brand-orange/5 p-5 text-center">
          <p className="text-sm text-ink-muted">{val} {conv.from} =</p>
          <p className="text-4xl font-extrabold font-display text-brand-orange mt-1">
            {result % 1 === 0 ? result.toLocaleString() : result.toFixed(4)}
          </p>
          <p className="text-lg text-ink-muted">{conv.to}</p>
        </div>
      )}
    </div>
  );
}
