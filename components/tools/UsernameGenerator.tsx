"use client";

import { useState, useCallback } from "react";

const ADJECTIVES = {
  cute: ["sweet", "fluffy", "tiny", "soft", "pastel", "rosy", "gentle", "dainty", "cozy", "lumi", "boba", "starry", "cloud", "honey", "bunny"],
  aesthetic: ["aurora", "celeste", "lunar", "misty", "violet", "silver", "golden", "velvet", "twilight", "ethereal", "cosmic", "dreamy", "astral", "solar"],
  gaming: ["shadow", "void", "dark", "epic", "ultra", "mega", "hyper", "iron", "pixel", "phantom", "stealth", "turbo", "ghost", "glitch", "neon"],
  clean: ["swift", "clear", "prime", "noble", "bright", "pure", "crisp", "clean", "sharp", "smart", "bold", "keen", "calm", "wise"],
  professional: ["exec", "dev", "pro", "chief", "lead", "senior", "prime", "elite", "master", "expert", "chief", "core"],
  funny: ["chunky", "wiggly", "derpy", "zany", "goofy", "silly", "wobbly", "squishy", "floopy", "bonkers", "nutty", "wacky"],
};

const NOUNS = {
  cute: ["panda", "bunny", "mochi", "star", "moon", "pearl", "rose", "lily", "dove", "cupcake", "kitty", "blossom", "cloud", "angel"],
  aesthetic: ["rose", "veil", "mist", "aura", "bloom", "tide", "prism", "echo", "sage", "nebula", "lotus", "zephyr", "reverie"],
  gaming: ["wolf", "blade", "hawk", "dragon", "titan", "reaper", "striker", "viper", "raven", "phantom", "sniper", "hunter", "crusher"],
  clean: ["wave", "peak", "spark", "core", "flow", "drift", "pulse", "ridge", "arc", "orbit", "nexus", "axis"],
  professional: ["solutions", "works", "studio", "labs", "tech", "group", "systems", "ventures", "consulting", "media"],
  funny: ["potato", "noodle", "penguin", "waffle", "banana", "pickle", "burrito", "hamster", "goblin", "dinosaur", "platypus"],
};

type Style = "cute" | "aesthetic" | "gaming" | "clean" | "professional" | "funny";

const STYLE_META: { id: Style; label: string; emoji: string; example: string }[] = [
  { id: "cute", label: "Cute", emoji: "🌸", example: "sweetbunny99" },
  { id: "aesthetic", label: "Aesthetic", emoji: "✨", example: "lunarrose" },
  { id: "gaming", label: "Gaming", emoji: "🎮", example: "shadowwolf42" },
  { id: "clean", label: "Clean", emoji: "🧊", example: "swiftpeak" },
  { id: "professional", label: "Professional", emoji: "💼", example: "alexstudio" },
  { id: "funny", label: "Funny", emoji: "😂", example: "chunkypotato7" },
];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function generateUsername(style: Style, input: string): string {
  const adj = randomItem(ADJECTIVES[style]);
  const noun = randomItem(NOUNS[style]);
  const num = Math.floor(Math.random() * 99) + 1;
  const hasInput = input.trim().length > 0;
  const base = hasInput ? slugify(input.trim().split(/\s+/)[0]) : "";

  const variants = hasInput
    ? [
        `${base}${noun}`,
        `${base}_${noun}`,
        `${adj}${base}`,
        `${base}${num}`,
        `${adj}_${base}`,
        `${base}.${noun}`,
        `${base}${adj}`,
        `the${base}${noun}`,
      ]
    : style === "professional"
    ? [`${adj}${noun}`, `${noun}${adj}`, `${adj}.${noun}`]
    : [`${adj}${noun}${num}`, `${adj}_${noun}`, `${adj}${noun}`, `${noun}${num}`];

  return randomItem(variants);
}

export default function UsernameGenerator() {
  const [style, setStyle] = useState<Style>("gaming");
  const [input, setInput] = useState("");
  const [usernames, setUsernames] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const generate = useCallback(() => {
    setUsernames(Array.from({ length: 10 }, () => generateUsername(style, input)));
  }, [style, input]);

  const handleCopy = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopied(name);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Your name, nickname, or keyword <span className="text-ink-subtle">(optional)</span>
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. alex, galaxy, coding…"
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-ink">Choose a style:</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {STYLE_META.map((s) => (
            <button
              key={s.id}
              onClick={() => { setStyle(s.id); setUsernames([]); }}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition-all ${
                style === s.id
                  ? "border-brand-orange bg-brand-orange/10 font-semibold text-brand-orange"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/40"
              }`}
            >
              <span>{s.emoji}</span>
              <div>
                <div className="font-medium">{s.label}</div>
                <div className="text-xs opacity-60">{s.example}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={generate}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-orange-dark active:scale-95 sm:w-auto"
      >
        🎲 Generate Usernames
      </button>

      {usernames.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-medium text-ink-muted">Click to copy:</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {usernames.map((name) => (
              <button
                key={name}
                onClick={() => handleCopy(name)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                  copied === name
                    ? "border-green-400 bg-green-50 text-green-700"
                    : "border-border bg-surface-muted text-ink hover:border-brand-orange/50 hover:bg-brand-orange/5"
                }`}
              >
                <span className="font-mono">{name}</span>
                <span className="ml-2 text-xs text-ink-subtle">
                  {copied === name ? "✓ Copied" : "copy"}
                </span>
              </button>
            ))}
          </div>
          <button onClick={generate} className="mt-4 text-sm font-medium text-brand-orange hover:underline">
            Generate more →
          </button>
        </div>
      )}

      {usernames.length === 0 && (
        <div className="rounded-2xl bg-surface-muted p-8 text-center text-sm text-ink-subtle">
          Choose a style and hit Generate to get started.
        </div>
      )}
    </div>
  );
}
