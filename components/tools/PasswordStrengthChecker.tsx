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
  if (pct >= 70) { label = "Good"; color = "bg-blue-500"; textColor = "text-blue-600"; }
  if (pct >= 90) { label = "Strong"; color = "bg-green-500"; textColor = "text-green-600"; }
  return { checks, score, pct, label, color, textColor };
}

export default function PasswordStrengthChecker() {
  const [pwd, setPwd] = useState("");
  const [show, setShow] = useState(false);

  const result = pwd ? analyze(pwd) : null;

  const tips = [
    [result?.checks.length8, result?.checks.length12, result?.checks.length16, "Use at least 8 chars (12+ is better)"],
    [result?.checks.hasUpper, "Include uppercase letters (A–Z)"],
    [result?.checks.hasLower, "Include lowercase letters (a–z)"],
    [result?.checks.hasNumber, "Include numbers (0–9)"],
    [result?.checks.hasSymbol, "Include symbols (!@#$%…)"],
    [result?.checks.noCommon, "Avoid common words like 'password'"],
    [result?.checks.noRepeat, "Avoid repeated characters (aaa, 111)"],
  ];

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Enter your password</label>
        <div className="relative">
          <input type={show ? "text" : "password"} value={pwd} onChange={(e) => setPwd(e.target.value)}
            placeholder="Type your password…"
<<<<<<< HEAD
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 pr-12 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
=======
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 pr-12 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" />
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
          <button onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink text-sm">
            {show ? "Hide" : "Show"}
          </button>
        </div>
        <p className="mt-1 text-xs text-ink-subtle">Your password is never sent anywhere — analysis runs in your browser.</p>
      </div>

      {result && (
        <div className="space-y-4">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className={`text-sm font-semibold ${result.textColor}`}>{result.label}</span>
              <span className="text-xs text-ink-subtle">{pwd.length} characters</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-border">
              <div className={`h-full rounded-full transition-all duration-300 ${result.color}`} style={{ width: `${result.pct}%` }} />
            </div>
          </div>

          <div className="space-y-1.5">
            {([
              [result.checks.length8 && result.checks.length12 && result.checks.length16, "Length is great (16+)"],
              [result.checks.length8 && result.checks.length12 && !result.checks.length16, "Good length (12+). Could be longer."],
              [result.checks.length8 && !result.checks.length12, "Minimum length met. Use 12+ for better security."],
              [!result.checks.length8, "Too short — use at least 8 characters"],
              [result.checks.hasUpper, "Includes uppercase letters ✓"],
              [!result.checks.hasUpper, "Add uppercase letters (A–Z)"],
              [result.checks.hasLower, "Includes lowercase letters ✓"],
              [result.checks.hasNumber, "Includes numbers ✓"],
              [!result.checks.hasNumber, "Add numbers (0–9)"],
              [result.checks.hasSymbol, "Includes symbols ✓"],
              [!result.checks.hasSymbol, "Add symbols like !@#$ for strength"],
              [!result.checks.noCommon, "⚠️ Contains a common/weak word"],
              [!result.checks.noRepeat, "⚠️ Contains repeated characters"],
            ] as [boolean, string][]).filter(([cond]) => cond !== undefined).map(([cond, msg], i) => (
              <div key={i} className={`flex items-center gap-2 text-xs ${cond ? "text-green-600" : "text-red-500"}`}>
                <span>{cond ? "✓" : "✗"}</span>
                <span>{msg}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
