"use client";

import { useState, useCallback } from "react";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
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
  // Witty English — wordplay and clever combos
  witty_english: {
    adj: ["clever", "witty", "snappy", "sharp", "quick", "bright", "savvy", "slick", "crisp", "punchy", "sly", "keen"],
    noun: ["quill", "wit", "banter", "spark", "remark", "pun", "verse", "notion", "muse", "flash", "jab", "quip"],
  },
  // Witty Filipino — names that feel natural in PH social media culture
  witty_filipino: {
    adj: ["kulit", "bibo", "siga", "taray", "bongga", "swak", "lupet", "husay", "ganda", "galing", "pogi", "cool", "astig"],
    noun: ["anak", "ate", "kuya", "beh", "idol", "bayani", "tsimay", "pare", "chic", "diva", "boss", "bes"],
  },
<<<<<<< HEAD
=======
};

type Style = keyof typeof WORDS;

interface StyleMeta {
  id: Style;
  label: string;
  icon: React.ReactNode;
  example: string;
}

// Minimal SVG icons for each style
const IconCute = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const IconAesthetic = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);
const IconGaming = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>
);
const IconClean = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);
const IconPro = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconFunny = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconWitty = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);
const IconPH = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const STYLE_META: StyleMeta[] = [
  { id: "cute", label: "Cute", icon: <IconCute />, example: "sweetbunny" },
  { id: "aesthetic", label: "Aesthetic", icon: <IconAesthetic />, example: "lunarrose" },
  { id: "gaming", label: "Gaming", icon: <IconGaming />, example: "shadowwolf" },
  { id: "clean", label: "Clean", icon: <IconClean />, example: "swiftpeak" },
  { id: "professional", label: "Professional", icon: <IconPro />, example: "alexstudio" },
  { id: "funny", label: "Funny", icon: <IconFunny />, example: "chunkypotato" },
  { id: "witty_english", label: "Witty English", icon: <IconWitty />, example: "snappyquill" },
  { id: "witty_filipino", label: "Witty Filipino", icon: <IconPH />, example: "kulitboss" },
];

// ── Generator logic ────────────────────────────────────────────────────────

=======
const ADJECTIVES = {
  cute: ["sweet", "fluffy", "tiny", "soft", "pastel", "rosy", "gentle", "dainty", "cozy", "lumi", "boba", "starry", "cloud", "honey", "bunny"],
  aesthetic: ["aurora", "celeste", "lunar", "misty", "violet", "silver", "golden", "velvet", "twilight", "ethereal", "cosmic", "dreamy", "astral", "solar"],
  gaming: ["shadow", "void", "dark", "epic", "ultra", "mega", "hyper", "iron", "pixel", "phantom", "stealth", "turbo", "ghost", "glitch", "neon"],
  clean: ["swift", "clear", "prime", "noble", "bright", "pure", "crisp", "clean", "sharp", "smart", "bold", "keen", "calm", "wise"],
  professional: ["exec", "dev", "pro", "chief", "lead", "senior", "prime", "elite", "master", "expert", "chief", "core"],
  funny: ["chunky", "wiggly", "derpy", "zany", "goofy", "silly", "wobbly", "squishy", "floopy", "bonkers", "nutty", "wacky"],
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

type Style = keyof typeof WORDS;

interface StyleMeta {
  id: Style;
  label: string;
  icon: React.ReactNode;
  example: string;
}

// Minimal SVG icons for each style
const IconCute = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const IconAesthetic = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);
const IconGaming = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>
);
const IconClean = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);
const IconPro = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconFunny = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconWitty = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);
const IconPH = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const STYLE_META: StyleMeta[] = [
  { id: "cute", label: "Cute", icon: <IconCute />, example: "sweetbunny" },
  { id: "aesthetic", label: "Aesthetic", icon: <IconAesthetic />, example: "lunarrose" },
  { id: "gaming", label: "Gaming", icon: <IconGaming />, example: "shadowwolf" },
  { id: "clean", label: "Clean", icon: <IconClean />, example: "swiftpeak" },
  { id: "professional", label: "Professional", icon: <IconPro />, example: "alexstudio" },
  { id: "funny", label: "Funny", icon: <IconFunny />, example: "chunkypotato" },
  { id: "witty_english", label: "Witty English", icon: <IconWitty />, example: "snappyquill" },
  { id: "witty_filipino", label: "Witty Filipino", icon: <IconPH />, example: "kulitboss" },
];

<<<<<<< HEAD
// ── Generator logic ────────────────────────────────────────────────────────

=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

<<<<<<< HEAD
function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 12);
}

function generateUsername(style: Style, input: string): string {
  const bank = WORDS[style];
  const adj = randomItem(bank.adj);
  const noun = randomItem(bank.noun);
=======
<<<<<<< HEAD
function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 12);
}

function generateUsername(style: Style, input: string): string {
  const bank = WORDS[style];
  const adj = randomItem(bank.adj);
  const noun = randomItem(bank.noun);
=======
function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function generateUsername(style: Style, input: string): string {
  const adj = randomItem(ADJECTIVES[style]);
  const noun = randomItem(NOUNS[style]);
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
  const num = Math.floor(Math.random() * 99) + 1;
  const hasInput = input.trim().length > 0;
  const base = hasInput ? slugify(input.trim().split(/\s+/)[0]) : "";

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
  // Filipino style uses Tagalog connectors
  const isFilipino = style === "witty_filipino";
  const connectors = isFilipino
    ? ["ng", "ni", "na", "at", "sa"]
    : ["_", ".", "", "", "x"];
<<<<<<< HEAD
=======

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

// ── Component ──────────────────────────────────────────────────────────────

=======
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
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9

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

<<<<<<< HEAD
// ── Component ──────────────────────────────────────────────────────────────

=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
export default function UsernameGenerator() {
  const [style, setStyle] = useState<Style>("gaming");
  const [input, setInput] = useState("");
  const [usernames, setUsernames] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const generate = useCallback(() => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
    // Generate 12 usernames, deduplicate
    const results = Array.from({ length: 20 }, () => generateUsername(style, input));
    const unique = [...new Set(results)].slice(0, 12);
    setUsernames(unique);
<<<<<<< HEAD
=======
=======
    setUsernames(Array.from({ length: 10 }, () => generateUsername(style, input)));
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
  }, [style, input]);

  const handleCopy = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopied(name);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
<<<<<<< HEAD
    <div className="space-y-5">

      {/* Optional input */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Your name, nickname, or keyword{" "}
          <span className="text-ink-subtle">(optional)</span>
=======
<<<<<<< HEAD
    <div className="space-y-5">

      {/* Optional input */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Your name, nickname, or keyword{" "}
          <span className="text-ink-subtle">(optional)</span>
=======
    <div className="space-y-6">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Your name, nickname, or keyword <span className="text-ink-subtle">(optional)</span>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
<<<<<<< HEAD
          placeholder="e.g. alex, galaxy, coding"
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
=======
<<<<<<< HEAD
          placeholder="e.g. alex, galaxy, coding"
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {/* Style selector */}
      <div>
        <p className="mb-2 text-sm font-medium text-ink">Choose a style:</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
=======
          placeholder="e.g. alex, galaxy, coding…"
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
        />
      </div>

      {/* Style selector */}
      <div>
        <p className="mb-2 text-sm font-medium text-ink">Choose a style:</p>
<<<<<<< HEAD
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
=======
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          {STYLE_META.map((s) => (
            <button
              key={s.id}
              onClick={() => { setStyle(s.id); setUsernames([]); }}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition-all ${
                style === s.id
<<<<<<< HEAD
                  ? "border-brand bg-brand/10 font-semibold text-brand"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand/40"
              }`}
            >
              <span className="shrink-0">{s.icon}</span>
              <div className="min-w-0">
                <div className="font-medium truncate">{s.label}</div>
                <div className="text-xs opacity-60 truncate">{s.example}</div>
=======
<<<<<<< HEAD
                  ? "border-brand bg-brand/10 font-semibold text-brand"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand/40"
              }`}
            >
              <span className="shrink-0">{s.icon}</span>
              <div className="min-w-0">
                <div className="font-medium truncate">{s.label}</div>
                <div className="text-xs opacity-60 truncate">{s.example}</div>
=======
                  ? "border-brand-orange bg-brand-orange/10 font-semibold text-brand-orange"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/40"
              }`}
            >
              <span>{s.emoji}</span>
              <div>
                <div className="font-medium">{s.label}</div>
                <div className="text-xs opacity-60">{s.example}</div>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
              </div>
            </button>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* Generate button */}
=======
<<<<<<< HEAD
      {/* Generate button */}
      <button
        onClick={generate}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 sm:w-auto"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Generate Usernames
      </button>

      {/* Results grid */}
      {usernames.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-medium text-ink-muted">Click any username to copy:</p>
=======
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <button
        onClick={generate}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 sm:w-auto"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Generate Usernames
      </button>

      {/* Results grid */}
      {usernames.length > 0 && (
        <div>
<<<<<<< HEAD
          <p className="mb-3 text-sm font-medium text-ink-muted">Click any username to copy:</p>
=======
          <p className="mb-3 text-sm font-medium text-ink-muted">Click to copy:</p>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {usernames.map((name) => (
              <button
                key={name}
                onClick={() => handleCopy(name)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                  copied === name
                    ? "border-green-400 bg-green-50 text-green-700"
<<<<<<< HEAD
                    : "border-border bg-surface-muted text-ink hover:border-brand/50 hover:bg-brand/5"
                }`}
              >
                <span className="font-mono">{name}</span>
                <span className="ml-2 shrink-0 text-xs text-ink-subtle">
                  {copied === name ? "Copied" : "copy"}
=======
<<<<<<< HEAD
                    : "border-border bg-surface-muted text-ink hover:border-brand/50 hover:bg-brand/5"
                }`}
              >
                <span className="font-mono">{name}</span>
                <span className="ml-2 shrink-0 text-xs text-ink-subtle">
                  {copied === name ? "Copied" : "copy"}
=======
                    : "border-border bg-surface-muted text-ink hover:border-brand-orange/50 hover:bg-brand-orange/5"
                }`}
              >
                <span className="font-mono">{name}</span>
                <span className="ml-2 text-xs text-ink-subtle">
                  {copied === name ? "✓ Copied" : "copy"}
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
                </span>
              </button>
            ))}
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          <button
            onClick={generate}
            className="mt-4 text-sm font-medium text-brand hover:underline"
          >
            Generate more
<<<<<<< HEAD
=======
=======
          <button onClick={generate} className="mt-4 text-sm font-medium text-brand-orange hover:underline">
            Generate more →
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          </button>
        </div>
      )}

<<<<<<< HEAD
      {/* Placeholder state */}
=======
<<<<<<< HEAD
      {/* Placeholder state */}
=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      {usernames.length === 0 && (
        <div className="rounded-2xl bg-surface-muted p-8 text-center text-sm text-ink-subtle">
          Choose a style and hit Generate to get started.
        </div>
      )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9

      <p className="text-xs text-ink-subtle">
        All usernames are generated locally. Nothing is stored or sent anywhere.
      </p>
<<<<<<< HEAD
=======
=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
    </div>
  );
}
