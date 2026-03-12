"use client";

import { useState, useCallback } from "react";
import { 
  Sparkles, 
  Gamepad2, 
  Leaf, 
  Briefcase, 
  Laugh, 
  Globe, 
  PenTool, 
  Heart,
  RefreshCw,
  Copy,
  Check
} from "lucide-react";

// ── Word banks by style ────────────────────────────────────────────────────

const WORDS: Record<string, { adj: string[]; noun: string[] }> = {
  cute: {
    adj: ["sweet", "fluffy", "tiny", "soft", "pastel", "rosy", "gentle", "dainty", "cozy", "lumi", "starry", "honey", "bubbly", "peachy", "velvet"],
    noun: ["panda", "bunny", "mochi", "star", "moon", "pearl", "rose", "lily", "dove", "kitty", "blossom", "cloud", "angel", "cookie", "petal"],
  },
  aesthetic: {
    adj: ["aurora", "celeste", "lunar", "misty", "violet", "silver", "golden", "velvet", "twilight", "cosmic", "dreamy", "astral", "solar", "mystic", "noir"],
    noun: ["rose", "veil", "mist", "aura", "bloom", "tide", "prism", "echo", "sage", "nebula", "lotus", "zephyr", "reverie", "dusk", "ember"],
  },
  gaming: {
    adj: ["shadow", "void", "dark", "epic", "ultra", "mega", "hyper", "iron", "pixel", "phantom", "stealth", "turbo", "ghost", "glitch", "neon"],
    noun: ["wolf", "blade", "hawk", "dragon", "titan", "reaper", "striker", "viper", "raven", "phantom", "sniper", "hunter", "crusher", "apex", "storm"],
  },
  clean: {
    adj: ["swift", "clear", "prime", "noble", "bright", "pure", "crisp", "sharp", "smart", "bold", "keen", "calm", "wise", "true", "light"],
    noun: ["wave", "peak", "spark", "core", "flow", "drift", "pulse", "ridge", "arc", "orbit", "nexus", "axis", "mark", "path", "node"],
  },
  professional: {
    adj: ["exec", "dev", "pro", "lead", "senior", "prime", "elite", "master", "expert", "core", "chief", "main"],
    noun: ["solutions", "works", "studio", "labs", "tech", "group", "systems", "ventures", "media", "design", "hub", "co"],
  },
  funny: {
    adj: ["chunky", "wiggly", "derpy", "zany", "goofy", "silly", "wobbly", "squishy", "floopy", "bonkers", "nutty", "wacky", "crispy", "soggy", "spicy"],
    noun: ["potato", "noodle", "penguin", "waffle", "banana", "pickle", "burrito", "hamster", "goblin", "dinosaur", "platypus", "taco", "muffin", "duck"],
  },
  witty_english: {
    adj: ["clever", "witty", "snappy", "sharp", "quick", "bright", "savvy", "slick", "crisp", "punchy", "sly", "keen"],
    noun: ["quill", "wit", "banter", "spark", "remark", "pun", "verse", "notion", "muse", "flash", "jab", "quip"],
  },
  witty_filipino: {
    adj: ["kulit", "bibo", "siga", "taray", "bongga", "swak", "lupet", "husay", "ganda", "galing", "pogi", "cool", "astig"],
    noun: ["anak", "ate", "kuya", "beh", "idol", "bayani", "tsimay", "pare", "chic", "diva", "boss", "bes"],
  },
};

type Style = keyof typeof WORDS;

interface StyleMeta {
  id: Style;
  label: string;
  icon: any;
  example: string;
}

const STYLE_META: StyleMeta[] = [
  { id: "cute", label: "Cute", icon: Heart, example: "sweetbunny" },
  { id: "aesthetic", label: "Aesthetic", icon: Sparkles, example: "lunarrose" },
  { id: "gaming", label: "Gaming", icon: Gamepad2, example: "shadowwolf" },
  { id: "clean", label: "Clean", icon: Leaf, example: "swiftpeak" },
  { id: "professional", label: "Professional", icon: Briefcase, example: "alexstudio" },
  { id: "funny", label: "Funny", icon: Laugh, example: "chunkypotato" },
  { id: "witty_english", label: "Witty English", icon: PenTool, example: "snappyquill" },
  { id: "witty_filipino", label: "Witty Filipino", icon: Globe, example: "kulitboss" },
];

// ── Generator logic ────────────────────────────────────────────────────────

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 12);
}

function generateUsername(style: Style, input: string): string {
  const bank = WORDS[style];
  const adj = randomItem(bank.adj);
  const noun = randomItem(bank.noun);
  const num = Math.floor(Math.random() * 99) + 1;
  const hasInput = input.trim().length > 0;
  const base = hasInput ? slugify(input.trim().split(/\s+/)[0]) : "";

  const isFilipino = style === "witty_filipino";
  const connectors = isFilipino ? ["ng", "ni", "na", "at", "sa"] : ["_", ".", "", "", "x"];
  const sep = randomItem(connectors);

  if (hasInput) {
    const patterns = [
      `${base}${noun}`,
      `${adj}${base}`,
      `${base}${num}`,
      `${adj}_${base}`,
      isFilipino ? `${base}${sep}${noun}` : `${base}.${noun}`,
      `${base}${adj}`,
      `the${base}${noun}`,
      isFilipino ? `si${base}` : `${adj}${base}${num}`,
    ];
    return randomItem(patterns);
  }

  if (style === "professional") {
    return randomItem([`${adj}${noun}`, `${noun}${adj}`, `${adj}.${noun}`, `${adj}${noun}hq`]);
  }

  if (isFilipino) {
    return randomItem([
      `${adj}${sep}${noun}`,
      `${adj}${noun}`,
      `${noun}${num}`,
      `si${noun}${adj}`,
      `${adj}${noun}${num}`,
    ]);
  }

  return randomItem([`${adj}${noun}${num}`, `${adj}_${noun}`, `${adj}${noun}`, `${noun}${num}`]);
}

export default function UsernameGenerator() {
  const [style, setStyle] = useState<Style>("gaming");
  const [input, setInput] = useState("");
  const [usernames, setUsernames] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const generate = useCallback(() => {
    const results = Array.from({ length: 20 }, () => generateUsername(style, input));
    const unique = [...new Set(results)].slice(0, 12);
    setUsernames(unique);
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
      {/* Optional input */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle px-1">
          Base Keyword <span className="opacity-50">(Optional)</span>
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. alex, galaxy, dev"
          className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all shadow-inner"
        />
      </div>

      {/* Style selector */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle px-1">Choose a Style</label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {STYLE_META.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => { setStyle(s.id); setUsernames([]); }}
                className={`flex flex-col items-center gap-1 rounded-2xl border p-3 text-center transition-all active:scale-95 ${
                  style === s.id
                    ? "border-brand bg-brand/5 text-brand shadow-sm"
                    : "border-border bg-white text-ink-muted hover:border-brand/40"
                }`}
              >
                <Icon size={18} className={style === s.id ? "text-brand" : "text-ink-subtle"} />
                <span className="text-[11px] font-bold uppercase tracking-tight">{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Generate button */}
      <button
        onClick={generate}
        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-brand px-6 py-4 text-sm font-bold text-white transition-all hover:bg-brand-dark active:scale-[0.98] shadow-lg shadow-brand/20"
      >
        <RefreshCw size={18} className="transition-transform group-hover:rotate-180 duration-500" />
        Generate Usernames
      </button>

      {/* Results grid */}
      {usernames.length > 0 ? (
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-subtle px-1">Suggestions</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {usernames.map((name) => (
              <button
                key={name}
                onClick={() => handleCopy(name)}
                className={`group flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                  copied === name
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-border bg-white text-ink hover:border-brand hover:shadow-sm"
                }`}
              >
                <span className="font-mono text-sm font-medium">{name}</span>
                {copied === name ? (
                  <Check size={14} className="text-green-600" />
                ) : (
                  <Copy size={14} className="text-ink-subtle opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-dashed border-border bg-surface-muted/50 p-8 text-center">
          <p className="text-sm font-medium text-ink-subtle">
            Pick a style and hit generate to see the magic.
          </p>
        </div>
      )}

      <p className="text-[10px] text-center text-ink-subtle uppercase tracking-widest font-medium opacity-60">
        Local Generation • No Data Stored
      </p>
    </div>
  );
}