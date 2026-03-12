"use client";

import { useMemo, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

type StyleMode =
  | "all"
  | "classic"
  | "modern"
  | "witty"
  | "minimal"
  | "filipino";

// ── Helpers ──────────────────────────────────────────────────────────────────

function sanitizeRaw(input: string): string {
  return input.replace(/\s+/g, " ").trim();
}

function cleanTag(input: string): string {
  return sanitizeRaw(input).replace(/[^a-zA-Z0-9]/g, "");
}

function cap(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function toTitleCaseWords(input: string): string[] {
  return sanitizeRaw(input)
    .split(" ")
    .filter(Boolean)
    .map(cap);
}

function getFirstName(full: string): string {
  return toTitleCaseWords(full)[0] || "";
}

function getLastName(full: string): string {
  const parts = toTitleCaseWords(full);
  return parts[parts.length - 1] || "";
}

function getInitials(...parts: string[]): string {
  return parts
    .filter(Boolean)
    .map((p) => p[0]?.toUpperCase() || "")
    .join("");
}

function hasFullName(input: string): boolean {
  return toTitleCaseWords(input).length > 1;
}

function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function safePush(target: string[], value: string) {
  const cleaned = value.replace(/\s+/g, "");
  if (!cleaned) return;
  if (!/^#?[A-Za-z0-9]+$/.test(cleaned)) return;
  target.push(cleaned.startsWith("#") ? cleaned : `#${cleaned}`);
}

/** Returns a short “best sounding” chunk from the front of a name */
function frontChunk(name: string): string {
  const n = cleanTag(name);
  if (n.length <= 4) return n;
  const vowels = "aeiouAEIOU";
  for (let i = 2; i < Math.min(n.length, 5); i++) {
    if (vowels.includes(n[i])) {
      return n.slice(0, i + 1);
    }
  }
  return n.slice(0, Math.ceil(n.length / 2));
}

/** Returns a short “best sounding” chunk from the back of a name */
function backChunk(name: string): string {
  const n = cleanTag(name);
  if (n.length <= 4) return n;
  const vowels = "aeiouAEIOU";
  for (let i = n.length - 2; i >= Math.max(1, n.length - 5); i--) {
    if (vowels.includes(n[i])) {
      return n.slice(i);
    }
  }
  return n.slice(Math.floor(n.length / 2));
}

/** Smarter merged couple name */
function smartBlend(a: string, b: string): string {
  const first = frontChunk(a);
  const second = backChunk(b);

  let merged = `${first}${second}`;
  merged = merged.replace(/(.)\1+/g, "$1"); // reduce double letters
  return cap(merged);
}

/** Alternate merge */
function reverseBlend(a: string, b: string): string {
  const first = frontChunk(b);
  const second = backChunk(a);
  let merged = `${first}${second}`;
  merged = merged.replace(/(.)\1+/g, "$1");
  return cap(merged);
}

/** Try embedding part of a name inside a word */
function findEmbedded(name: string, word: string): string | null {
  const n = cleanTag(name).toLowerCase();
  const w = word.toLowerCase();
  if (n.length < 3) return null;

  for (let len = Math.min(5, n.length); len >= 3; len--) {
    const startSub = n.slice(0, len);
    if (w.includes(startSub)) return startSub;
  }

  for (let len = Math.min(5, n.length); len >= 3; len--) {
    const endSub = n.slice(n.length - len);
    if (w.includes(endSub)) return endSub;
  }

  return null;
}

function embedInWord(name: string, word: string): string | null {
  const sub = findEmbedded(name, word);
  if (!sub) return null;

  const lower = word.toLowerCase();
  const idx = lower.indexOf(sub);
  if (idx === -1) return null;

  return word.slice(0, idx) + sub.toUpperCase() + word.slice(idx + sub.length);
}

function scoreTag(tag: string, brideFirst: string, groomFirst: string): number {
  let score = 0;
  const t = tag.toLowerCase();

  if (t.includes(brideFirst.toLowerCase())) score += 3;
  if (t.includes(groomFirst.toLowerCase())) score += 3;
  if (tag.length >= 10 && tag.length <= 24) score += 3;
  if (tag.length > 24 && tag.length <= 32) score += 1;
  if (/(.)\1\1/i.test(tag)) score -= 2;
  if (/[^a-zA-Z0-9#]/.test(tag)) score -= 3;
  if (/\d{4}/.test(tag)) score += 1;

  return score;
}

// ── Generators ────────────────────────────────────────────────────────────────

function generateClassic(
  bride: string,
  groom: string,
  nickname: string
): string[] {
  const year = new Date().getFullYear();

  const brideFirst = cap(getFirstName(bride));
  const groomFirst = cap(getFirstName(groom));
  const brideLast = cap(getLastName(bride));
  const groomLast = cap(getLastName(groom));

  const brideClean = cleanTag(bride);
  const groomClean = cleanTag(groom);
  const nick = cleanTag(nickname);

  const blend1 = smartBlend(brideFirst, groomFirst);
  const blend2 = reverseBlend(brideFirst, groomFirst);

  const tags: string[] = [];

  safePush(tags, `#${brideFirst}And${groomFirst}`);
  safePush(tags, `#${groomFirst}And${brideFirst}`);
  safePush(tags, `#${brideFirst}${groomFirst}${year}`);
  safePush(tags, `#${brideFirst}Weds${groomFirst}`);
  safePush(tags, `#${brideFirst}Loves${groomFirst}`);
  safePush(tags, `#${groomFirst}Loves${brideFirst}`);
  safePush(tags, `#${blend1}Forever`);
  safePush(tags, `#${blend2}Wedding`);
  safePush(tags, `#${blend1}${year}`);

  if (hasFullName(groom)) {
    safePush(tags, `#The${groomLast}s`);
    safePush(tags, `#The${groomLast}Wedding`);
    safePush(tags, `#Officially${groomLast}`);
    safePush(tags, `#ToHaveAndTo${groomLast}`);
  }

  if (hasFullName(bride) && hasFullName(groom)) {
    safePush(tags, `#${brideClean}And${groomClean}`);
  }

  if (nick) {
    safePush(tags, `#${cap(nick)}Wedding`);
    safePush(tags, `#${cap(nick)}Forever`);
    safePush(tags, `#${cap(nick)}InLove`);
  }

  return tags;
}

function generateModern(bride: string, groom: string): string[] {
  const year = new Date().getFullYear();

  const brideFirst = cap(getFirstName(bride));
  const groomFirst = cap(getFirstName(groom));
  const brideLast = cap(getLastName(bride));
  const groomLast = cap(getLastName(groom));

  const initials = getInitials(brideFirst, groomFirst);
  const blend1 = smartBlend(brideFirst, groomFirst);
  const blend2 = reverseBlend(brideFirst, groomFirst);

  const tags: string[] = [];

  safePush(tags, `#${initials}TiedTheKnot`);
  safePush(tags, `#${initials}GetsMarried`);
  safePush(tags, `#${blend1}Era`);
  safePush(tags, `#${blend1}Mode`);
  safePush(tags, `#${blend2}Collective`);
  safePush(tags, `#${brideFirst}${groomFirst}Official`);
  safePush(tags, `#${brideFirst}${groomFirst}Forever`);
  safePush(tags, `#${brideFirst}Meets${groomFirst}`);
  safePush(tags, `#${groomFirst}Found${brideFirst}`);
  safePush(tags, `#${brideFirst}${groomFirst}${year}`);

  if (hasFullName(groom)) {
    safePush(tags, `#Newly${groomLast}`);
  }

  if (hasFullName(bride)) {
    safePush(tags, `#From${brideLast}To${groomLast || brideLast}`);
  }

  return tags;
}

function generateMinimal(bride: string, groom: string): string[] {
  const year = new Date().getFullYear();

  const brideFirst = cap(getFirstName(bride));
  const groomFirst = cap(getFirstName(groom));
  const initials = getInitials(brideFirst, groomFirst);

  const tags: string[] = [];

  safePush(tags, `#${brideFirst}${groomFirst}`);
  safePush(tags, `#${groomFirst}${brideFirst}`);
  safePush(tags, `#${initials}${year}`);
  safePush(tags, `#${initials}Forever`);
  safePush(tags, `#${initials}Wedding`);
  safePush(tags, `#${brideFirst}x${groomFirst}`);
  safePush(tags, `#${groomFirst}x${brideFirst}`);
  safePush(tags, `#${smartBlend(brideFirst, groomFirst)}`);

  return tags;
}

function generateWitty(bride: string, groom: string): string[] {
  const brideFirst = cap(getFirstName(bride));
  const groomFirst = cap(getFirstName(groom));
  const groomLast = cap(getLastName(groom));

  const patterns: { word: string; name: string; partner: string }[] = [
    { word: "forever", name: brideFirst, partner: groomFirst },
    { word: "finally", name: brideFirst, partner: groomFirst },
    { word: "finally", name: groomFirst, partner: brideFirst },
    { word: "together", name: groomFirst, partner: brideFirst },
    { word: "perfect", name: brideFirst, partner: groomFirst },
    { word: "always", name: brideFirst, partner: groomFirst },
    { word: "beloved", name: groomFirst, partner: brideFirst },
    { word: "enchanted", name: groomFirst, partner: brideFirst },
  ];

  const tags: string[] = [];

  for (const { word, name, partner } of patterns) {
    const embedded = embedInWord(name, word);
    if (embedded && embedded.toLowerCase() !== word.toLowerCase()) {
      safePush(tags, `#${embedded}With${partner}`);
      safePush(tags, `#${embedded}Together`);
    }
  }

  safePush(tags, `#${brideFirst}SaidYes`);
  safePush(tags, `#${groomFirst}SaidIDo`);
  safePush(tags, `#${brideFirst}Found${groomFirst}`);
  safePush(tags, `#${groomFirst}Found${brideFirst}`);
  safePush(tags, `#BetterTogether${groomLast || groomFirst}`);
  safePush(tags, `#${smartBlend(brideFirst, groomFirst)}EverAfter`);

  return tags;
}

function generateFilipino(bride: string, groom: string): string[] {
  const year = new Date().getFullYear();

  const brideFirst = cap(getFirstName(bride));
  const groomFirst = cap(getFirstName(groom));
  const groomLast = cap(getLastName(groom));
  const initials = getInitials(brideFirst, groomFirst);

  const tags: string[] = [];

  safePush(tags, `#${brideFirst}AtSi${groomFirst}`);
  safePush(tags, `#${groomFirst}AtSi${brideFirst}`);
  safePush(tags, `#${brideFirst}ParaKay${groomFirst}`);
  safePush(tags, `#${groomFirst}ParaKay${brideFirst}`);
  safePush(tags, `#${brideFirst}At${groomFirst}Habambuhay`);
  safePush(tags, `#SaWakas${brideFirst}At${groomFirst}`);
  safePush(tags, `#${brideFirst}YesNaKay${groomFirst}`);
  safePush(tags, `#${groomFirst}NahanapSi${brideFirst}`);
  safePush(tags, `#${brideFirst}MrsNa${groomLast || groomFirst}`);
  safePush(tags, `#${initials}Kasalan${year}`);
  safePush(tags, `#${smartBlend(brideFirst, groomFirst)}NaYan`);

  const embedded1 = embedInWord(brideFirst, "forever");
  const embedded2 = embedInWord(groomFirst, "officially");

  if (embedded1) safePush(tags, `#${embedded1}NaTalaga`);
  if (embedded2) safePush(tags, `#${embedded2}NaSila`);

  return tags;
}

function generateHashtags(
  bride: string,
  groom: string,
  nickname: string,
  style: StyleMode
): string[] {
  const brideFirst = cap(getFirstName(bride));
  const groomFirst = cap(getFirstName(groom));

  const buckets: string[] = [];

  if (style === "all" || style === "classic") {
    buckets.push(...generateClassic(bride, groom, nickname));
  }
  if (style === "all" || style === "modern") {
    buckets.push(...generateModern(bride, groom));
  }
  if (style === "all" || style === "witty") {
    buckets.push(...generateWitty(bride, groom));
  }
  if (style === "all" || style === "minimal") {
    buckets.push(...generateMinimal(bride, groom));
  }
  if (style === "all" || style === "filipino") {
    buckets.push(...generateFilipino(bride, groom));
  }

  const filtered = unique(
    buckets.filter((tag) => {
      const body = tag.replace(/^#/, "");
      return body.length >= 4 && body.length <= 34;
    })
  );

  return shuffle(
    filtered.sort(
      (a, b) =>
        scoreTag(b, brideFirst, groomFirst) -
        scoreTag(a, brideFirst, groomFirst)
    )
  ).slice(0, 24);
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function WeddingHashtagGenerator() {
  const [bride, setBride] = useState("");
  const [groom, setGroom] = useState("");
  const [nickname, setNickname] = useState("");
  const [style, setStyle] = useState<StyleMode>("all");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState("");

  const canGenerate = useMemo(() => {
    return sanitizeRaw(bride).length > 0 && sanitizeRaw(groom).length > 0;
  }, [bride, groom]);

  const generate = () => {
    if (!canGenerate) {
      setError("Please enter both names.");
      return;
    }

    const brideFirst = getFirstName(bride);
    const groomFirst = getFirstName(groom);

    if (!brideFirst || !groomFirst) {
      setError("Please enter valid names.");
      return;
    }

    setError("");
    setHashtags(generateHashtags(bride, groom, nickname, style));
  };

  const handleCopy = async (tag: string) => {
    try {
      await navigator.clipboard.writeText(tag);
      setCopied(tag);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  const handleCopyAll = async () => {
    try {
      await navigator.clipboard.writeText(hashtags.join(" "));
      setCopied("__all__");
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  const styleOptions: { value: StyleMode; label: string; hint: string }[] = [
    { value: "all", label: "All Styles", hint: "Balanced mix" },
    { value: "classic", label: "Classic", hint: "Traditional" },
    { value: "modern", label: "Modern", hint: "Clean & trendy" },
    { value: "witty", label: "Witty", hint: "Playful" },
    { value: "minimal", label: "Minimal", hint: "Short & neat" },
    { value: "filipino", label: "Filipino", hint: "Local flavor" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-ink">Wedding Hashtag Generator</h2>
        <p className="text-sm text-ink-muted">
          Cleaner, smarter hashtag ideas based on first names, full names, nicknames, and style.
        </p>
      </div>

      {/* Style selection */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-ink">Hashtag style</label>
        <div className="grid gap-2 sm:grid-cols-3 xl:grid-cols-6">
          {styleOptions.map((option) => {
            const active = style === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setStyle(option.value);
                  setHashtags([]);
                }}
                className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                  active
                    ? "border-brand bg-brand text-white shadow-sm"
                    : "border-border bg-surface-muted text-ink hover:border-brand/40 hover:bg-brand/5"
                }`}
              >
                <div className="text-sm font-semibold">{option.label}</div>
                <div
                  className={`mt-1 text-xs ${
                    active ? "text-white/80" : "text-ink-subtle"
                  }`}
                >
                  {option.hint}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Inputs */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Bride's Name <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            value={bride}
            onChange={(e) => setBride(e.target.value)}
            placeholder="e.g. Emma Rose or Emma"
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
          <p className="mt-1 text-xs text-ink-subtle">
            First name only works too.
          </p>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Groom's Name <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            value={groom}
            onChange={(e) => setGroom(e.target.value)}
            placeholder="e.g. James Taylor or James"
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
          <p className="mt-1 text-xs text-ink-subtle">
            Full names help generate surname-based tags.
          </p>
        </div>
      </div>

      {/* Optional nickname */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Couple Nickname <span className="text-ink-subtle">(optional)</span>
        </label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="e.g. EmJay, JamEm, TaylorMade"
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={generate}
          className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95"
        >
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          Generate Hashtags
        </button>

        {hashtags.length > 0 && (
          <button
            onClick={generate}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium text-ink-muted transition-all hover:border-brand/40"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Regenerate
          </button>
        )}
      </div>

      {/* Results */}
      {hashtags.length > 0 && (
        <div className="rounded-2xl border border-border bg-white/60 p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-ink">
                {hashtags.length} hashtag suggestions
              </p>
              <p className="text-xs text-ink-subtle">
                Click one to copy, or copy everything at once.
              </p>
            </div>

            <button
              onClick={handleCopyAll}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                copied === "__all__"
                  ? "border-green-400 bg-green-50 text-green-700"
                  : "border-border text-ink-muted hover:border-brand/40"
              }`}
            >
              {copied === "__all__" ? "Copied all!" : "Copy all"}
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleCopy(tag)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${
                  copied === tag
                    ? "border-green-400 bg-green-50 text-green-700"
                    : "border-border bg-surface-muted text-ink hover:border-brand/40 hover:bg-brand/5"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Notes */}
      <div className="space-y-1 text-xs text-ink-subtle">
        <p>Tips: full names create better surname-style hashtags, but first names still work well.</p>
        <p>All hashtags are generated locally. No names are stored or sent anywhere.</p>
      </div>
    </div>
  );
}