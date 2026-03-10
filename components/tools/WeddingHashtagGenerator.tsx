"use client";
import { useState } from "react";

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

export default function WeddingHashtagGenerator() {
  const [bride, setBride] = useState("");
  const [groom, setGroom] = useState("");
  const [nickname, setNickname] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState("");

  const generate = () => {
    if (!bride.trim() || !groom.trim()) {
      setError("Please enter both names.");
      return;
    }
    setError("");
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
          </button>
        )}
      </div>

      {hashtags.length > 0 && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-ink">{hashtags.length} hashtags generated:</p>
            <button onClick={copyAll}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${copied === "__all__" ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand-orange/40"}`}>
              {copied === "__all__" ? "✓ Copied all!" : "Copy all"}
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <button key={tag} onClick={() => handleCopy(tag)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${
                  copied === tag ? "border-green-400 bg-green-50 text-green-700" : "border-border bg-surface-muted text-ink hover:border-rose-300 hover:bg-rose-50"
                }`}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
