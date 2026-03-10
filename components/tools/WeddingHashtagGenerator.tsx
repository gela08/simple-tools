"use client";
import { useState } from "react";

<<<<<<< HEAD
// ── Helpers ──────────────────────────────────────────────────────────────────

function clean(s: string): string {
  return s.trim().replace(/[^a-zA-Z0-9]/g, "");
}

function cap(s: string): string {
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function firstName(full: string): string {
  return full.trim().split(/\s+/)[0] || full;
}

function lastName(full: string): string {
  const parts = full.trim().split(/\s+/);
  return parts[parts.length - 1] || full;
}

/** Find a substring of `name` that appears inside `word` (case-insensitive, min 3 chars) */
function findEmbedded(name: string, word: string): string | null {
  const n = name.toLowerCase();
  const w = word.toLowerCase();
  // Try different length substrings from the start of the name
  for (let len = Math.min(n.length, 6); len >= 3; len--) {
    const sub = n.slice(0, len);
    if (w.includes(sub)) return sub;
  }
  // Try from the end
  for (let len = Math.min(n.length, 6); len >= 3; len--) {
    const sub = n.slice(n.length - len);
    if (w.includes(sub)) return sub;
  }
  return null;
}

/** Replace embedded name inside a word with stylized caps version */
function embedInWord(name: string, word: string): string | null {
  const sub = findEmbedded(name, word);
  if (!sub) return null;
  const wordLower = word.toLowerCase();
  const idx = wordLower.indexOf(sub);
  const before = word.slice(0, idx);
  const namepart = name.slice(0, sub.length).toUpperCase();
  const after = word.slice(idx + sub.length);
  return before + namepart + after;
}

// ── English witty generator ──────────────────────────────────────────────────

function generateEnglish(bride: string, groom: string, nickname?: string): string[] {
  const b = clean(bride);
  const g = clean(groom);
  const bFirst = cap(firstName(bride));
  const gFirst = cap(firstName(groom));
  const bLast = cap(lastName(bride));
  const gLast = cap(lastName(groom));
  const year = new Date().getFullYear();
  const nick = nickname ? clean(nickname) : "";

  // Portmanteau: merge first halves
  const bHalf = bFirst.slice(0, Math.ceil(bFirst.length / 2));
  const gHalf = gFirst.slice(Math.ceil(gFirst.length / 2));
  const merged = cap(bHalf.toLowerCase() + gHalf.toLowerCase());

  // Words to embed names into
  const embedWords: { word: string; name: string; nameLabel: string }[] = [
    { word: "Finally", name: firstName(bride), nameLabel: bFirst },
    { word: "Finally", name: firstName(groom), nameLabel: gFirst },
    { word: "perfectly", name: firstName(groom), nameLabel: gFirst },
    { word: "matched", name: firstName(groom), nameLabel: gFirst },
    { word: "enchanted", name: firstName(groom), nameLabel: gFirst },
    { word: "excited", name: firstName(groom), nameLabel: gFirst },
    { word: "forever", name: firstName(bride), nameLabel: bFirst },
    { word: "always", name: firstName(bride), nameLabel: bFirst },
    { word: "beginning", name: firstName(bride), nameLabel: bFirst },
    { word: "together", name: firstName(groom), nameLabel: gFirst },
    { word: "terrific", name: firstName(groom), nameLabel: gFirst },
    { word: "perfect", name: firstName(bride), nameLabel: bFirst },
    { word: "beautiful", name: firstName(bride), nameLabel: bFirst },
    { word: "belong", name: firstName(bride), nameLabel: bFirst },
    { word: "complete", name: firstName(groom), nameLabel: gFirst },
    { word: "waiting", name: firstName(groom), nameLabel: gFirst },
    { word: "amazing", name: firstName(bride), nameLabel: bFirst },
    { word: "fantastic", name: firstName(bride), nameLabel: bFirst },
  ];

  const puns: string[] = [];
  for (const { word, name, nameLabel } of embedWords) {
    const result = embedInWord(name, word);
    if (result && result !== word) {
      // Build hashtag: embedded result + partner
      const partner = nameLabel === bFirst ? gFirst : bFirst;
      puns.push(`#${result}With${partner}`);
      puns.push(`#${result}ForEver`);
    }
  }

  const tags: string[] = [
    // Classic merged
    `#${b}And${g}`,
    `#${g}And${b}`,
    `#${b}Weds${g}`,
    `#${bFirst}Forever${gFirst}`,
    `#${bFirst}Loves${gFirst}`,
    `#${gFirst}Loves${bFirst}`,

    // Portmanteau
    ...(merged !== bFirst && merged !== gFirst ? [`#${merged}${year}`, `#${merged}Forever`] : []),

    // Last name traditions
    `#The${gLast}s`,
    `#The${gLast}Wedding`,
    `#FinallyMrs${gLast}`,
    `#HappilyEverAfter${gLast}`,
    `#MakingIt${gLast}Official`,

    // Sweet phrases
    `#${bFirst}SaidYes`,
    `#${gFirst}SaidIDo`,
    `#${bFirst}FoundHer${gFirst}`,
    `#${gFirst}FoundHis${bFirst}`,
    `#${bFirst}And${gFirst}${year}`,
    `#ToHaveAndTo${gLast}`,
    `#${bFirst}Chose${gFirst}`,
    `#GodGave${gFirst}A${bFirst}`,
    `#${bFirst}LoveStory`,
    `#${gLast}LoveStory`,
    `#Better${gLast}Together`,
    `#${bFirst}BeginsWithForever`,
    `#${gFirst}IsForever`,

    // Pun embeds
    ...puns.slice(0, 8),
  ];

  if (nick) {
    tags.push(
      `#${cap(nick)}Wedding`,
      `#${cap(nick)}Forever`,
      `#The${cap(nick)}Affair`
    );
  }

  // Dedupe and shuffle
  const unique = [...new Set(tags.filter(Boolean))];
  return unique.sort(() => Math.random() - 0.5).slice(0, 20);
}

// ── Filipino witty generator ─────────────────────────────────────────────────

function generateFilipino(bride: string, groom: string): string[] {
  const bFirst = cap(firstName(bride));
  const gFirst = cap(firstName(groom));
  const bLast = cap(lastName(bride));
  const gLast = cap(lastName(groom));
  const b = clean(bride);
  const g = clean(groom);
  const year = new Date().getFullYear();

  // Filipino witty embed words — common in PH wedding hashtags
  const filWords: { word: string; name: string }[] = [
    { word: "finally", name: firstName(bride) },
    { word: "finally", name: firstName(groom) },
    { word: "sobrang", name: firstName(bride) },
    { word: "talaga", name: firstName(groom) },
    { word: "perfect", name: firstName(bride) },
    { word: "mahal", name: firstName(bride) },
    { word: "soulmate", name: firstName(groom) },
    { word: "panalo", name: firstName(groom) },
    { word: "mister", name: firstName(groom) },
    { word: "missus", name: firstName(bride) },
    { word: "forever", name: firstName(bride) },
    { word: "officially", name: firstName(bride) },
    { word: "totoo", name: firstName(groom) },
  ];

  const puns: string[] = [];
  for (const { word, name } of filWords) {
    const result = embedInWord(name, word);
    if (result && result !== word) {
      const other = cap(firstName(name === firstName(bride) ? groom : bride));
      puns.push(`#${result}Na${other}`);
      puns.push(`#${result}NaJud`);
    }
  }

  const tags: string[] = [
    // Filipino declaration style
    `#${bFirst}AtSi${gFirst}`,
    `#${gFirst}AtSi${bFirst}`,
    `#FinALLYSama${bFirst}At${gFirst}`,
    `#${bFirst}OO${gFirst}`,
    `#${gFirst}ParaKay${bFirst}`,
    `#${bFirst}ParaKay${gFirst}`,

    // Tagalog love phrases
    `#MahalKitaHanggang${gFirst}`,
    `#${bFirst}NaHanap${gFirst}`,
    `#${gFirst}NaHanap${bFirst}`,
    `#${bFirst}AtSi${gFirst}Habambuhay`,
    `#${gFirst}SagotNi${bFirst}`,
    `#${bFirst}SagotNi${gFirst}`,

    // Filipino slang + witty
    `#${bFirst}NaLang${gFirst}NaLang`,
    `#${gFirst}PaLangPala`,
    `#TotoongMahal${gFirst}Kay${bFirst}`,
    `#${bFirst}JudAng${gFirst}`,
    `#${gFirst}NaSayo${bFirst}`,
    `#${bFirst}MrsNa${gLast}`,

    // Classic with Filipino twist
    `#${b}at${g}${year}`,
    `#${bFirst}HaraHari${gFirst}`,
    `#${gFirst}NanalogNay`,
    `#${bFirst}AtSi${gFirst}SaWakas`,
    `#${gFirst}GotHisEndgame${bFirst}`,
    `#${bFirst}YesNaSa${gFirst}`,

    // Pun embeds
    ...puns.slice(0, 8),
  ];

  const unique = [...new Set(tags.filter(Boolean))];
  return unique.sort(() => Math.random() - 0.5).slice(0, 20);
}

// ── Component ─────────────────────────────────────────────────────────────────

type Language = "english" | "filipino";

=======
function slugify(s: string) {
  return s.trim().replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "");
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function generateHashtags(bride: string, groom: string, nickname?: string): string[] {
  const b = slugify(bride);
  const g = slugify(groom);
  const bC = cap(bride.trim().split(/\s+/)[0]);
  const gC = cap(groom.trim().split(/\s+/)[0]);
  const bLast = bride.trim().split(/\s+/).slice(-1)[0];
  const gLast = groom.trim().split(/\s+/).slice(-1)[0];
  const bFirstName = bride.trim().split(/\s+/)[0];
  const gFirstName = groom.trim().split(/\s+/)[0];
  const nick = nickname ? slugify(nickname) : "";
  const year = new Date().getFullYear();

  const merged1 = bFirstName.slice(0, Math.ceil(bFirstName.length / 2)) + gFirstName.slice(Math.floor(gFirstName.length / 2));
  const merged2 = gFirstName.slice(0, Math.ceil(gFirstName.length / 2)) + bFirstName.slice(Math.floor(bFirstName.length / 2));

  const tags: string[] = [
    // Classic merged name
    `#${b}And${g}`,
    `#${g}And${b}`,
    `#${b}Weds${g}`,
    `#${g}Weds${b}`,

    // Pun / rhyme style
    `#Better${cap(gLast)}Together`,
    `#Always${cap(bLast)}`,
    `#The${cap(gLast)}Way`,
    `#${cap(bLast)}ToBe`,
    `#${cap(gLast)}Forever`,

    // Merged portmanteau names
    `#${cap(merged1)}${year}`,
    `#${cap(merged2)}`,

    // "The [Last Name]s" style
    `#The${cap(gLast)}s`,
    `#The${cap(bLast)}s`,
    `#The${cap(gLast)}Wedding`,
    `#The${cap(bLast)}Wedding`,

    // Cute phrases
    `#${bC}Found${gC}`,
    `#${gC}Found${bC}`,
    `#${bC}SaidYes`,
    `#${gC}SaidIDo`,
    `#${bC}Chose${gC}`,

    // Date-based
    `#${b}${g}${year}`,
    `#${g}${b}${year}`,
    `#${bC}And${gC}${year}`,

    // Love wordplay
    `#SomebodyLovesMe${cap(gLast)}`,
    `#${cap(bLast)}LoveStory`,
    `#${cap(gLast)}LoveStory`,
    `#FinallyMrs${cap(gLast)}`,
    `#MakingIt${cap(gLast)}`,
    `#HappilyEverAfter${cap(gLast)}`,
    `#FinallyMr${cap(bLast)}AndMrs${cap(gLast)}`,

    // Cute rhymes with names
    `#${bC}LovesHer${gC}`,
    `#${gC}LovesHis${bC}`,
    `#ToHaveAndTo${cap(gLast)}`,
    `#SheFoundHer${gC}`,
    `#HeFoundHis${bC}`,
  ];

  if (nick) {
    tags.push(`#${cap(nick)}Wedding`, `#${cap(nick)}AndLove`, `#${cap(nick)}Forever`);
  }

  // Deduplicate and return top 20 randomized
  const unique = [...new Set(tags)];
  return unique.sort(() => Math.random() - 0.5).slice(0, 20);
}

>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
export default function WeddingHashtagGenerator() {
  const [bride, setBride] = useState("");
  const [groom, setGroom] = useState("");
  const [nickname, setNickname] = useState("");
<<<<<<< HEAD
  const [language, setLanguage] = useState<Language>("english");
=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState("");

  const generate = () => {
    if (!bride.trim() || !groom.trim()) {
      setError("Please enter both names.");
      return;
    }
    setError("");
<<<<<<< HEAD
    const result =
      language === "filipino"
        ? generateFilipino(bride, groom)
        : generateEnglish(bride, groom, nickname);
    setHashtags(result);
  };

  const handleCopy = async (tag: string) => {
    try {
      await navigator.clipboard.writeText(tag);
      setCopied(tag);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(hashtags.join(" "));
      setCopied("__all__");
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };

  return (
    <div className="space-y-5">

      {/* Language toggle */}
      <div>
        <p className="mb-2 text-sm font-medium text-ink">Hashtag style:</p>
        <div className="flex gap-2">
          {(["english", "filipino"] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); setHashtags([]); }}
              className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
                language === lang
                  ? "border-brand bg-brand text-white"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand/40"
              }`}
            >
              {lang === "english" ? "Witty English" : "Witty Filipino"}
            </button>
          ))}
        </div>
      </div>

      {/* Name inputs */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Bride's Full Name <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            value={bride}
            onChange={(e) => setBride(e.target.value)}
            placeholder="e.g. Emma Rose"
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Groom's Full Name <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            value={groom}
            onChange={(e) => setGroom(e.target.value)}
            placeholder="e.g. James Taylor"
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      {/* Nickname — English only */}
      {language === "english" && (
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Couple Nickname <span className="text-ink-subtle">(optional)</span>
          </label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="e.g. EmJay, TaylorMade"
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={generate}
          className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95"
        >
          {/* Heart icon */}
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          Generate Hashtags
        </button>
        {hashtags.length > 0 && (
          <button
            onClick={generate}
            className="flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium text-ink-muted hover:border-brand/40 transition-all"
          >
            {/* Refresh icon */}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Regenerate
=======
    setHashtags(generateHashtags(bride, groom, nickname));
  };

  const handleCopy = async (tag: string) => {
    try { await navigator.clipboard.writeText(tag); setCopied(tag); setTimeout(() => setCopied(null), 1500); } catch {}
  };

  const copyAll = async () => {
    try { await navigator.clipboard.writeText(hashtags.join(" ")); setCopied("__all__"); setTimeout(() => setCopied(null), 1500); } catch {}
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Bride's Full Name *</label>
          <input type="text" value={bride} onChange={(e) => setBride(e.target.value)}
            placeholder="e.g. Emma Rose"
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Groom's Full Name *</label>
          <input type="text" value={groom} onChange={(e) => setGroom(e.target.value)}
            placeholder="e.g. James Taylor"
            className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Couple Nickname <span className="text-ink-subtle">(optional)</span>
        </label>
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}
          placeholder="e.g. EmJay, TaylorMade…"
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20" />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex flex-wrap gap-3">
        <button onClick={generate}
          className="flex items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-orange-dark active:scale-95">
          💒 Generate Hashtags
        </button>
        {hashtags.length > 0 && (
          <button onClick={generate} className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-ink-muted hover:border-brand-orange/40 transition-all">
            🔄 Regenerate
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
          </button>
        )}
      </div>

<<<<<<< HEAD
      {/* Results */}
      {hashtags.length > 0 && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-ink">{hashtags.length} hashtags generated — click any to copy:</p>
            <button
              onClick={copyAll}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                copied === "__all__"
                  ? "border-green-400 bg-green-50 text-green-700"
                  : "border-border text-ink-muted hover:border-brand/40"
              }`}
            >
              {copied === "__all__" ? "Copied all!" : "Copy all"}
=======
      {hashtags.length > 0 && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-ink">{hashtags.length} hashtags generated:</p>
            <button onClick={copyAll}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${copied === "__all__" ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand-orange/40"}`}>
              {copied === "__all__" ? "✓ Copied all!" : "Copy all"}
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag) => (
<<<<<<< HEAD
              <button
                key={tag}
                onClick={() => handleCopy(tag)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${
                  copied === tag
                    ? "border-green-400 bg-green-50 text-green-700"
                    : "border-border bg-surface-muted text-ink hover:border-brand/40 hover:bg-brand/5"
                }`}
              >
=======
              <button key={tag} onClick={() => handleCopy(tag)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${
                  copied === tag ? "border-green-400 bg-green-50 text-green-700" : "border-border bg-surface-muted text-ink hover:border-rose-300 hover:bg-rose-50"
                }`}>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
<<<<<<< HEAD

      {/* Privacy note */}
      <p className="text-xs text-ink-subtle">
        All hashtags are generated locally. Your names are never stored or sent anywhere.
      </p>
=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
    </div>
  );
}
