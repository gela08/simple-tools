"use client";
import { useState, useCallback } from "react";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMS = "0123456789";
const SYMS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generate(len: number, upper: boolean, lower: boolean, nums: boolean, syms: boolean): string {
  let chars = "";
  const required: string[] = [];
  if (upper) { chars += UPPER; required.push(UPPER[Math.floor(Math.random() * UPPER.length)]); }
  if (lower) { chars += LOWER; required.push(LOWER[Math.floor(Math.random() * LOWER.length)]); }
  if (nums)  { chars += NUMS;  required.push(NUMS[Math.floor(Math.random()  * NUMS.length)]); }
  if (syms)  { chars += SYMS;  required.push(SYMS[Math.floor(Math.random()  * SYMS.length)]); }
  if (!chars) return "";
  const rest = Array.from({ length: len - required.length }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  );
  return [...required, ...rest].sort(() => Math.random() - 0.5).join("");
}

function strength(pwd: string): { score: number; label: string; color: string } {
  let s = 0;
  if (pwd.length >= 8) s++;
  if (pwd.length >= 12) s++;
  if (pwd.length >= 16) s++;
  if (/[A-Z]/.test(pwd)) s++;
  if (/[a-z]/.test(pwd)) s++;
  if (/[0-9]/.test(pwd)) s++;
  if (/[^A-Za-z0-9]/.test(pwd)) s++;
  if (s <= 2) return { score: s, label: "Weak", color: "bg-red-400" };
  if (s <= 4) return { score: s, label: "Fair", color: "bg-yellow-400" };
  if (s <= 5) return { score: s, label: "Good", color: "bg-blue-400" };
  return { score: s, label: "Strong", color: "bg-green-500" };
}

export default function PasswordGenerator() {
  const [len, setLen] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [nums, setNums] = useState(true);
  const [syms, setSyms] = useState(true);
  const [count, setCount] = useState(5);
  const [passwords, setPasswords] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const generate_ = useCallback(() => {
    setPasswords(Array.from({ length: count }, () => generate(len, upper, lower, nums, syms)));
  }, [len, upper, lower, nums, syms, count]);

  const handleCopy = async (p: string) => {
    try { await navigator.clipboard.writeText(p); setCopied(p); setTimeout(() => setCopied(null), 1500); } catch {}
  };

  const Toggle = ({ label, val, set }: { label: string; val: boolean; set: (v: boolean) => void }) => (
    <button
      onClick={() => set(!val)}
      className={`rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
        val ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border text-ink-muted hover:border-brand-orange/40"
      }`}
    >
      {val ? "✓" : "○"} {label}
    </button>
  );

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Password length: <span className="font-bold text-brand-orange">{len}</span>
        </label>
        <input type="range" min={6} max={64} value={len} onChange={(e) => setLen(+e.target.value)}
          className="w-full accent-brand-orange" />
        <div className="mt-1 flex justify-between text-xs text-ink-subtle"><span>6</span><span>64</span></div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-ink">Include:</p>
        <div className="flex flex-wrap gap-2">
          <Toggle label="Uppercase A–Z" val={upper} set={setUpper} />
          <Toggle label="Lowercase a–z" val={lower} set={setLower} />
          <Toggle label="Numbers 0–9" val={nums} set={setNums} />
          <Toggle label="Symbols !@#" val={syms} set={setSyms} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-ink">How many:</label>
        {[1, 3, 5, 10].map((n) => (
          <button key={n} onClick={() => setCount(n)}
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all ${
              count === n ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border text-ink-muted hover:border-brand-orange/40"
            }`}>{n}</button>
        ))}
      </div>

      <button onClick={generate_}
        className="flex items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-orange-dark active:scale-95">
        🔐 Generate Passwords
      </button>

      {passwords.length > 0 && (
        <div className="space-y-2">
          {passwords.map((p, i) => {
            const s = strength(p);
            return (
              <div key={i} className="rounded-xl border border-border bg-surface-muted p-3">
                <div className="flex items-center justify-between gap-2">
                  <code className="flex-1 break-all text-sm text-ink">{p}</code>
                  <button onClick={() => handleCopy(p)}
                    className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                      copied === p ? "border-green-400 bg-green-50 text-green-700" : "border-border bg-white text-ink-muted hover:border-brand-orange/40"
                    }`}>
                    {copied === p ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                    <div className={`h-full rounded-full transition-all ${s.color}`} style={{ width: `${(s.score / 7) * 100}%` }} />
                  </div>
                  <span className="text-xs text-ink-subtle">{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
