import {
  FILIPINO_BASES,
  StyleMode,
  WITTY_PATTERNS,
  MODERN_BRIDGES,
  ROMANTIC_WORDS,
  CLASSIC_WORDS,
  MINIMAL_ENDINGS,
} from "./wedding-hashtag-data";

/** Standardizes raw input to single spaces and trimmed ends */
export function sanitizeRaw(input: string): string {
  return input.replace(/\s+/g, " ").trim();
}

/** Removes all non-alphanumeric characters for clean hashtag bodies */
export function cleanTag(input: string): string {
  return sanitizeRaw(input).replace(/[^a-zA-Z0-9]/g, "");
}

/** Capitalizes the first letter and lowers the rest */
export function cap(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function toTitleCaseWords(input: string): string[] {
  return sanitizeRaw(input)
    .split(" ")
    .filter(Boolean)
    .map(cap);
}

export function getFirstName(full: string): string {
  return toTitleCaseWords(full)[0] || "";
}

export function getLastName(full: string): string {
  const parts = toTitleCaseWords(full);
  return parts.length > 1 ? parts[parts.length - 1] : "";
}

export function hasFullName(input: string): boolean {
  return toTitleCaseWords(input).length > 1;
}

export function getInitials(...parts: string[]): string {
  return parts
    .filter(Boolean)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");
}

export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

export function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

/** Validates and pushes a hashtag to the target array */
export function safePush(target: string[], value: string) {
  const cleaned = value.replace(/\s+/g, "");
  if (!cleaned) return;
  if (!/^#?[A-Za-z0-9]+$/.test(cleaned)) return;
  target.push(cleaned.startsWith("#") ? cleaned : `#${cleaned}`);
}

function pushMany(target: string[], values: string[]) {
  values.forEach((value) => safePush(target, value));
}

// ── Blending Logic ──────────────────────────────────────────────────────────

export function frontChunk(name: string): string {
  const n = cleanTag(name);
  if (n.length <= 4) return n;
  const vowels = "aeiouAEIOU";

  for (let i = 2; i < Math.min(n.length, 5); i++) {
    if (vowels.includes(n[i])) return n.slice(0, i + 1);
  }

  return n.slice(0, Math.ceil(n.length / 2));
}

export function backChunk(name: string): string {
  const n = cleanTag(name);
  if (n.length <= 4) return n;
  const vowels = "aeiouAEIOU";

  for (let i = n.length - 2; i >= Math.max(1, n.length - 5); i--) {
    if (vowels.includes(n[i])) return n.slice(i);
  }

  return n.slice(Math.floor(n.length / 2));
}

export function smartBlend(a: string, b: string): string {
  let merged = `${frontChunk(a)}${backChunk(b)}`;
  merged = merged.replace(/(.)\1{2,}/g, "$1$1");
  return cap(merged);
}

export function reverseBlend(a: string, b: string): string {
  return smartBlend(b, a);
}

// ── Pattern Matching ────────────────────────────────────────────────────────

export function findEmbedded(name: string, word: string): string | null {
  const n = cleanTag(name).toLowerCase();
  const w = cleanTag(word).toLowerCase();

  if (n.length < 3) return null;

  for (let len = Math.min(5, n.length); len >= 3; len--) {
    const fromStart = n.slice(0, len);
    if (w.includes(fromStart)) return fromStart;
  }

  for (let len = Math.min(5, n.length); len >= 3; len--) {
    const fromEnd = n.slice(n.length - len);
    if (w.includes(fromEnd)) return fromEnd;
  }

  return null;
}

export function embedInWord(name: string, word: string): string | null {
  const sub = findEmbedded(name, word);
  if (!sub) return null;

  const cleanWord = cleanTag(word);
  const lower = cleanWord.toLowerCase();
  const idx = lower.indexOf(sub);
  if (idx === -1) return null;

  return (
    cleanWord.slice(0, idx) +
    name.toUpperCase() +
    cleanWord.slice(idx + sub.length)
  );
}

// ── Scoring ──────────────────────────────────────────────────────────────────

export function scoreTag(tag: string, brideFirst: string, groomFirst: string): number {
  let score = 0;
  const t = tag.toLowerCase();

  if (t.includes(brideFirst.toLowerCase())) score += 3;
  if (t.includes(groomFirst.toLowerCase())) score += 3;
  if (tag.length >= 12 && tag.length <= 24) score += 3;
  if (tag.length >= 9 && tag.length <= 28) score += 1;
  if (/(.)\1\1/i.test(tag)) score -= 5;
  if (/\d{4}/.test(tag)) score += 1;

  return score;
}

// ── Style Generators ────────────────────────────────────────────────────────

function generateClassic(bride: string, groom: string, nickname: string): string[] {
  const year = new Date().getFullYear();
  const bF = cap(getFirstName(bride));
  const gF = cap(getFirstName(groom));
  const bL = cap(getLastName(bride));
  const gL = cap(getLastName(groom));
  const nick = cap(cleanTag(nickname));
  const blendA = smartBlend(bF, gF);
  const blendB = reverseBlend(bF, gF);
  const initials = getInitials(bF, gF);

  const tags: string[] = [];

  pushMany(tags, [
    `${bF}And${gF}`,
    `${gF}And${bF}`,
    `${bF}Weds${gF}`,
    `${gF}Weds${bF}`,
    `${bF}${gF}${year}`,
    `${bF}Loves${gF}`,
    `${gF}Loves${bF}`,
    `${blendA}Forever`,
    `${blendB}Wedding`,
    `${blendA}${year}`,
    `${initials}Wedding`,
    `${initials}Forever`,
  ]);

  CLASSIC_WORDS.forEach((word) => {
    pushMany(tags, [
      `${bF}${gF}${cleanTag(word)}`,
      `${bF}And${gF}${cleanTag(word)}`,
    ]);
  });

  if (gL) {
    pushMany(tags, [
      `The${gL}s`,
      `The${gL}Wedding`,
      `Officially${gL}`,
      `ToHaveAndTo${gL}`,
      `MrAndMrs${gL}`,
      `Finally${gL}`,
    ]);
  }

  if (bL && gL) {
    pushMany(tags, [
      `${bL}To${gL}`,
      `${bF}${gL}Wedding`,
    ]);
  }

  if (nick) {
    pushMany(tags, [
      `${nick}Wedding`,
      `${nick}Forever`,
      `${nick}${year}`,
      `${nick}InLove`,
    ]);
  }

  return tags;
}

function generateModern(bride: string, groom: string): string[] {
  const year = new Date().getFullYear();
  const bF = cap(getFirstName(bride));
  const gF = cap(getFirstName(groom));
  const initials = getInitials(bF, gF);
  const blendA = smartBlend(bF, gF);
  const blendB = reverseBlend(bF, gF);

  const tags: string[] = [];

  MODERN_BRIDGES.forEach((bridge) => {
    const w = cleanTag(bridge);
    pushMany(tags, [
      `${w}${bF}${gF}`,
      `${bF}${w}${gF}`,
      `${initials}${w}`,
    ]);
  });

  pushMany(tags, [
    `${initials}Squared`,
    `${initials}${year}`,
    `${blendA}Era`,
    `${blendA}Mode`,
    `${blendB}Edit`,
    `${blendA}Collective`,
    `${bF}${gF}Official`,
    `${bF}Meets${gF}`,
    `${gF}Meets${bF}`,
    `${bF}${gF}Now`,
    `${blendA}Studio`,
  ]);

  return tags;
}

function generateWitty(bride: string, groom: string): string[] {
  const bF = cap(getFirstName(bride));
  const gF = cap(getFirstName(groom));
  const gL = cap(getLastName(groom));
  const blendA = smartBlend(bF, gF);

  const tags: string[] = [];

  WITTY_PATTERNS.forEach((pattern) => {
    const word = pattern.word;

    const brideEmbed = embedInWord(bF, word);
    const groomEmbed = embedInWord(gF, word);

    if (brideEmbed) {
      pushMany(tags, [
        brideEmbed,
        `${brideEmbed}With${gF}`,
        `${brideEmbed}Together`,
      ]);
    }

    if (groomEmbed) {
      pushMany(tags, [
        groomEmbed,
        `${groomEmbed}With${bF}`,
        `${groomEmbed}Together`,
      ]);
    }

    pushMany(tags, [
      `${bF}${cleanTag(word)}${gF}`,
      `${gF}${cleanTag(word)}${bF}`,
    ]);
  });

  pushMany(tags, [
    `${bF}SaidYes`,
    `${gF}SaidIDo`,
    `${bF}Found${gF}`,
    `${gF}Found${bF}`,
    `${blendA}EverAfter`,
    `${bF}SaidYesToThe${gL || "Groom"}`,
    `BetterTogether${bF}${gF}`,
  ]);

  return tags;
}

function generateMinimal(bride: string, groom: string): string[] {
  const year = new Date().getFullYear();
  const bF = cap(getFirstName(bride));
  const gF = cap(getFirstName(groom));
  const initials = getInitials(bF, gF);
  const blendA = smartBlend(bF, gF);
  const blendB = reverseBlend(bF, gF);

  const tags: string[] = [];

  pushMany(tags, [
    `${bF}${gF}`,
    `${gF}${bF}`,
    `${initials}${year}`,
    `${initials}Forever`,
    `${initials}Love`,
    `${blendA}`,
    `${blendB}`,
    `${bF}x${gF}`,
    `${gF}x${bF}`,
  ]);

  MINIMAL_ENDINGS.forEach((ending) => {
    const e = cleanTag(ending);
    pushMany(tags, [
      `${bF}${e}`,
      `${gF}${e}`,
      `${initials}${e}`,
    ]);
  });

  return tags;
}

function generateFilipino(bride: string, groom: string): string[] {
  const year = new Date().getFullYear();
  const bF = cap(getFirstName(bride));
  const gF = cap(getFirstName(groom));
  const gL = cap(getLastName(groom));
  const initials = getInitials(bF, gF);
  const blendA = smartBlend(bF, gF);

  const tags: string[] = [];

  pushMany(tags, [
    `${bF}AtSi${gF}`,
    `${gF}AtSi${bF}`,
    `${bF}ParaKay${gF}`,
    `${gF}ParaKay${bF}`,
    `${bF}At${gF}Habambuhay`,
    `${bF}MrsNa${gL || gF}`,
    `${initials}Kasalan${year}`,
    `${blendA}NaYan`,
    `SaWakas${bF}At${gF}`,
    `${bF}YesNaKay${gF}`,
  ]);

  FILIPINO_BASES.forEach((base) => {
    const w = cleanTag(base);
    pushMany(tags, [
      `${w}${bF}${gF}`,
      `${w}${bF}At${gF}`,
      `${bF}${w}${gF}`,
    ]);
  });

  return tags;
}

function generateRomantic(bride: string, groom: string): string[] {
  const bF = cap(getFirstName(bride));
  const gF = cap(getFirstName(groom));
  const blendA = smartBlend(bF, gF);
  const blendB = reverseBlend(bF, gF);

  const tags: string[] = [];

  ROMANTIC_WORDS.forEach((word) => {
    const w = cleanTag(word);
    pushMany(tags, [
      `${bF}${gF}${w}`,
      `${bF}And${gF}${w}`,
      `${w}${bF}${gF}`,
      `${blendA}${w}`,
      `${blendB}${w}`,
    ]);
  });

  pushMany(tags, [
    `${bF}My${gF}`,
    `${gF}My${bF}`,
    `${bF}${gF}Forever`,
    `${blendA}Soul`,
    `${blendA}Promise`,
    `${blendB}Heart`,
  ]);

  return tags;
}

// ── Main Export ─────────────────────────────────────────────────────────────

export function generateHashtags(
  bride: string,
  groom: string,
  nickname: string,
  style: StyleMode
): string[] {
  const bF = cap(getFirstName(bride));
  const gF = cap(getFirstName(groom));
  let tags: string[] = [];

  if (style === "all" || style === "classic") {
    tags.push(...generateClassic(bride, groom, nickname));
  }

  if (style === "all" || style === "modern") {
    tags.push(...generateModern(bride, groom));
  }

  if (style === "all" || style === "witty") {
    tags.push(...generateWitty(bride, groom));
  }

  if (style === "all" || style === "minimal") {
    tags.push(...generateMinimal(bride, groom));
  }

  if (style === "all" || style === "filipino") {
    tags.push(...generateFilipino(bride, groom));
  }

  if (style === "all" || style === "romantic") {
    tags.push(...generateRomantic(bride, groom));
  }

  return shuffle(
    unique(
      tags.filter((t) => t.length > 5 && t.length < 34)
    ).sort((a, b) => scoreTag(b, bF, gF) - scoreTag(a, bF, gF))
  ).slice(0, style === "all" ? 24 : 20);
}