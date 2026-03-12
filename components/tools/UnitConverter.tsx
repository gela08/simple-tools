"use client";
import { useState, useEffect } from "react";
import { 
  Ruler, Scale, Thermometer, Maximize, Zap, 
  Calculator, RotateCcw, ArrowRightLeft, User, Droplets 
} from "lucide-react";

type Category = "length" | "weight" | "temperature" | "area" | "speed" | "height" | "volume";

export default function UnitConverter() {
  const [cat, setCat] = useState<Category>("height");
  const [convIdx, setConvIdx] = useState(0);
  const [val, setVal] = useState("");
  // Additional state for the dual-input height conversion
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const CONVERSIONS: Record<Category, { from: string; to: string; label: string; convert: (v: any) => any }[]> = {
    height: [
      { 
        from: "cm", 
        to: "feet/inches", 
        label: "cm → Feet & Inches", 
        convert: (v) => {
          const totalInches = v / 2.54;
          const f = Math.floor(totalInches / 12);
          const i = Math.round(totalInches % 12);
          return `${f}'${i}"`;
        } 
      },
      { 
        from: "feet/inches", 
        to: "cm", 
        label: "Feet & Inches → cm", 
        convert: ({ f, i }: { f: number, i: number }) => {
          const totalInches = (f * 12) + i;
          return (totalInches * 2.54).toFixed(2);
        }
      }
    ],
    // ... rest of your length, weight, temp, volume, area, speed conversions stay the same
    length: [
      { from: "km", to: "miles", label: "km → miles", convert: (v) => v * 0.621371 },
      { from: "miles", to: "km", label: "miles → km", convert: (v) => v / 0.621371 },
      { from: "cm", to: "inches", label: "cm → inches", convert: (v) => v * 0.393701 },
      { from: "meters", to: "feet", label: "meters → feet", convert: (v) => v * 3.28084 },
    ],
    weight: [
      { from: "kg", to: "lbs", label: "kg → lbs", convert: (v) => v * 2.20462 },
      { from: "lbs", to: "kg", label: "lbs → kg", convert: (v) => v / 2.20462 },
    ],
    temperature: [
      { from: "°C", to: "°F", label: "Celsius → Fahrenheit", convert: (v) => (v * 9/5) + 32 },
      { from: "°F", to: "°C", label: "Fahrenheit → Celsius", convert: (v) => (v - 32) * 5/9 },
    ],
    volume: [
      { from: "Liters", to: "Gallons", label: "Liters → Gallons", convert: (v) => v * 0.264172 },
      { from: "Gallons", to: "Liters", label: "Gallons → Liters", convert: (v) => v / 0.264172 },
    ],
    area: [
      { from: "sqft", to: "sqm", label: "sq ft → sq m", convert: (v) => v * 0.092903 },
      { from: "acres", to: "hectares", label: "acres → hectares", convert: (v) => v * 0.404686 },
    ],
    speed: [
      { from: "km/h", to: "mph", label: "km/h → mph", convert: (v) => v * 0.621371 },
      { from: "m/s", to: "km/h", label: "m/s → km/h", convert: (v) => v * 3.6 },
    ],
  };

  const CATEGORY_MAP: Record<Category, { label: string; icon: any }> = {
    height: { label: "Height", icon: User },
    length: { label: "Length", icon: Ruler },
    weight: { label: "Weight", icon: Scale },
    temperature: { label: "Temp", icon: Thermometer },
    volume: { label: "Volume", icon: Droplets },
    area: { label: "Area", icon: Maximize },
    speed: { label: "Speed", icon: Zap }
  };

  const conv = CONVERSIONS[cat][Math.min(convIdx, CONVERSIONS[cat].length - 1)];
  
  // Logic to handle which result to display
  let result = null;
  if (cat === "height" && convIdx === 1) {
    if (feet || inches) result = conv.convert({ f: Number(feet), i: Number(inches) });
  } else if (val) {
    result = conv.convert(+val);
  }

  const formatResult = (res: any) => {
    if (typeof res === "string") return res;
    return res % 1 === 0 ? res.toLocaleString() : Number(res).toFixed(2);
  };

  return (
    <div className="space-y-6">
      {/* Category Selection */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle px-1">Unit Category</label>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(CONVERSIONS) as Category[]).map((c) => {
            const Icon = CATEGORY_MAP[c].icon;
            return (
              <button
                key={c}
                onClick={() => { setCat(c); setConvIdx(0); setVal(""); setFeet(""); setInches(""); }}
                className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all active:scale-95 ${
                  cat === c ? "border-brand bg-brand text-white shadow-md shadow-brand/20" : "border-border bg-surface-muted text-ink-muted hover:border-brand/40"
                }`}
              >
                <Icon size={14} /> {CATEGORY_MAP[c].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Conversion Type Selection */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle px-1">Select Conversion</label>
        <div className="flex flex-wrap gap-2">
          {CONVERSIONS[cat].map((c, i) => (
            <button
              key={i}
              onClick={() => { setConvIdx(i); setVal(""); setFeet(""); setInches(""); }}
              className={`rounded-lg border px-3 py-1.5 text-xs font-bold transition-all active:scale-95 ${
                convIdx === i ? "border-brand bg-brand/10 text-brand" : "border-border bg-white text-ink-muted hover:border-brand/40"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Field(s) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Calculator size={14} className="text-brand" />
          <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
            {cat === "height" && convIdx === 1 ? "Enter Height" : `Value in ${conv.from}`}
          </label>
        </div>

        {cat === "height" && convIdx === 1 ? (
          <div className="flex gap-3">
            <input
              type="number"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              placeholder="Feet"
              className="w-1/2 rounded-2xl border border-border bg-surface-muted px-4 py-4 text-sm text-ink focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 shadow-inner transition-all font-mono"
            />
            <input
              type="number"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              placeholder="Inches"
              className="w-1/2 rounded-2xl border border-border bg-surface-muted px-4 py-4 text-sm text-ink focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 shadow-inner transition-all font-mono"
            />
          </div>
        ) : (
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder={`Enter ${conv.from}...`}
            className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-4 text-sm text-ink focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 shadow-inner transition-all font-mono"
          />
        )}
      </div>

      {/* Result Display */}
      {result !== null && (
        <div className="rounded-3xl border-2 border-brand/20 bg-brand/5 p-8 text-center animate-in fade-in zoom-in duration-300">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-subtle mb-2">Result</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-lg font-medium text-ink-muted">
              {cat === "height" && convIdx === 1 ? `${feet || 0}'${inches || 0}"` : `${val} ${conv.from}`}
            </span>
            <ArrowRightLeft size={16} className="text-brand/40" />
            <div className="flex flex-col items-center">
              <p className="text-4xl font-extrabold font-display text-brand tracking-tight">
                {formatResult(result)}
              </p>
              <p className="text-sm font-bold text-brand/60 uppercase tracking-widest">
                {cat === "height" && convIdx === 0 ? "Result" : conv.to}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer / Reset */}
      <div className="flex items-center justify-between border-t border-border/50 pt-4">
        <button
          onClick={() => { setVal(""); setFeet(""); setInches(""); }}
          className="group flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest text-ink-subtle transition-all hover:bg-red-50 hover:text-red-600 active:scale-95"
        >
          <RotateCcw size={14} className="transition-transform group-hover:-rotate-180 duration-500" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}