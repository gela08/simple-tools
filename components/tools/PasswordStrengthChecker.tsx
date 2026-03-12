"use client";
import { useState } from "react";

function analyze(pwd: string) {
  const checks = {
    length8: pwd.length >= 8,
    length12: pwd.length >= 12,
    length16: pwd.length >= 16,
    hasUpper: /[A-Z]/.test(pwd),
    hasLower: /[a-z]/.test(pwd),
    hasNumber: /[0-9]/.test(pwd),
    hasSymbol: /[^A-Za-z0-9]/.test(pwd),
    noCommon: !["password","123456","qwerty","abc123","letmein","welcome","monkey","dragon"].some(p => pwd.toLowerCase().includes(p)),
    noRepeat: !/(.)\1{2,}/.test(pwd),
  };
  
  const score = Object.values(checks).filter(Boolean).length;
  const pct = Math.round((score / 9) * 100);
  
  let label = "Very Weak"; let color = "bg-red-500"; let textColor = "text-red-600";
  if (pct >= 30) { label = "Weak"; color = "bg-orange-400"; textColor = "text-orange-600"; }
  if (pct >= 50) { label = "Fair"; color = "bg-yellow-400"; textColor = "text-yellow-600"; }
  if (pct >= 70) { label = "Good"; color = "bg-brand"; textColor = "text-brand"; }
  if (pct >= 90) { label = "Strong"; color = "bg-green-500"; textColor = "text-green-600"; }
  
  return { checks, score, pct, label, color, textColor };
}

export default function PasswordStrengthChecker() {
  const [pwd, setPwd] = useState("");
  const [show, setShow] = useState(false);

  const result = pwd ? analyze(pwd) : null;

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Enter your password</label>
        <div className="relative">
          <input 
            type={show ? "text" : "password"} 
            value={pwd} 
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Type your password…"
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 pr-12 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
          />
          <button 
            onClick={() => setShow(!show)} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-wider text-ink-subtle hover:text-brand transition-colors"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
        <p className="mt-2 text-[11px] text-ink-subtle flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-green-400"></span>
          Privacy: Analysis runs locally in your browser.
        </p>
      </div>

      {result && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className={`text-sm font-bold uppercase tracking-tight ${result.textColor}`}>
                {result.label}
              </span>
              <span className="text-xs font-medium text-ink-subtle">{pwd.length} characters</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-border/40">
              <div 
                className={`h-full rounded-full transition-all duration-500 ease-out ${result.color}`} 
                style={{ width: `${result.pct}%` }} 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 bg-surface-muted/50 p-3 rounded-xl border border-border/50">
            {([
              [result.checks.length8 && result.checks.length12 && result.checks.length16, "Length is great (16+)"],
              [result.checks.length8 && result.checks.length12 && !result.checks.length16, "Good length (12+)"],
              [result.checks.length8 && !result.checks.length12, "Minimum length met"],
              [!result.checks.length8, "Too short (use 8+)"],
              [result.checks.hasUpper, "Uppercase letters"],
              [!result.checks.hasUpper, "Add uppercase letters"],
              [result.checks.hasLower, "Lowercase letters"],
              [result.checks.hasNumber, "Numbers included"],
              [!result.checks.hasNumber, "Add numbers"],
              [result.checks.hasSymbol, "Symbols included"],
              [!result.checks.hasSymbol, "Add symbols"],
              [!result.checks.noCommon, "⚠️ Common/weak word"],
              [!result.checks.noRepeat, "⚠️ Repeated characters"],
            ] as [boolean, string][]).map(([cond, msg], i) => (
              <div key={i} className={`flex items-center gap-2 text-[11px] font-medium ${cond ? "text-green-600" : "text-ink-subtle/60"}`}>
                <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${cond ? "bg-green-100 text-green-700" : "bg-border/30 text-ink-subtle"}`}>
                  {cond ? "✓" : "○"}
                </span>
                <span>{msg}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}