"use client";

import { useMemo, useState, useCallback } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Heart,
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  Trash2,
  Users,
  User,
  Hash,
  PenTool,
  Globe,
  Stars,
  Wand2,
} from "lucide-react";

import { StyleMode } from "@/lib/wedding-hashtag-data";
import {
  generateHashtags,
  getFirstName,
  sanitizeRaw,
} from "@/lib/wedding-hashtag-utils";

interface WeddingStyleMeta {
  id: StyleMode;
  label: string;
  icon: LucideIcon;
  hint: string;
}

const WEDDING_STYLE_META: WeddingStyleMeta[] = [
  { id: "all", label: "All", icon: Stars, hint: "A bit of everything" },
  { id: "classic", label: "Classic", icon: Heart, hint: "Traditional" },
  { id: "modern", label: "Modern", icon: Wand2, hint: "Clean & trendy" },
  { id: "witty", label: "Witty", icon: PenTool, hint: "Puns & play" },
  { id: "filipino", label: "Filipino", icon: Globe, hint: "Local flavor" },
  { id: "romantic", label: "Romantic", icon: Sparkles, hint: "Sweet vibes" },
  { id: "minimal", label: "Minimal", icon: Hash, hint: "Short & neat" },
];

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

  const handleGenerate = useCallback(() => {
    const cleanBride = sanitizeRaw(bride);
    const cleanGroom = sanitizeRaw(groom);

    if (!cleanBride || !cleanGroom) {
      setError("Please enter both names.");
      return;
    }

    if (!getFirstName(cleanBride) || !getFirstName(cleanGroom)) {
      setError("Please enter valid names.");
      return;
    }

    setError("");
    setHashtags(generateHashtags(cleanBride, cleanGroom, nickname, style));
  }, [bride, groom, nickname, style]);

  const reset = useCallback(() => {
    setBride("");
    setGroom("");
    setNickname("");
    setHashtags([]);
    setCopied(null);
    setError("");
    setStyle("all");
  }, []);

  const handleCopy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      setError("Copy failed. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="flex items-center gap-1.5 px-1 text-xs font-bold uppercase tracking-widest text-ink-subtle">
            <User size={12} />
            Bride's Name
            <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            value={bride}
            onChange={(e) => setBride(e.target.value)}
            placeholder="e.g. Emma Rose"
            className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink shadow-inner transition-all focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-1.5 px-1 text-xs font-bold uppercase tracking-widest text-ink-subtle">
            <User size={12} />
            Groom's Name
            <span className="text-brand">*</span>
          </label>
          <input
            type="text"
            value={groom}
            onChange={(e) => setGroom(e.target.value)}
            placeholder="e.g. James Taylor"
            className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink shadow-inner transition-all focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="flex items-center gap-1.5 px-1 text-xs font-bold uppercase tracking-widest text-ink-subtle">
          <Users size={12} />
          Couple Nickname
          <span className="opacity-50">(Optional)</span>
        </label>

        <div className="relative">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="e.g. EmJay or TaylorMade"
            className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-3 pr-12 text-sm text-ink shadow-inner transition-all focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
          />

          {(bride || groom || nickname) && (
            <button
              type="button"
              onClick={reset}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-ink-subtle transition-colors hover:text-red-500"
              title="Clear all"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <label className="px-1 text-xs font-bold uppercase tracking-widest text-ink-subtle">
          Choose a Vibe
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {WEDDING_STYLE_META.map((s) => {
            const Icon = s.icon;
            const active = style === s.id;

            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setStyle(s.id);
                  setHashtags([]);
                }}
                className={`flex flex-col items-center gap-1 rounded-2xl border p-3 text-center transition-all active:scale-95 ${
                  active
                    ? "border-brand bg-brand/5 text-brand shadow-sm"
                    : "border-border bg-white text-ink-muted hover:border-brand/40"
                }`}
              >
                <Icon
                  size={18}
                  className={active ? "text-brand" : "text-ink-subtle"}
                />
                <span className="text-[11px] font-bold uppercase tracking-tight">
                  {s.label}
                </span>
                <span className="text-[9px] font-medium leading-none opacity-60">
                  {s.hint}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {error && (
        <p className="animate-pulse px-1 text-[11px] font-bold text-red-500">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleGenerate}
        disabled={!canGenerate}
        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-brand px-6 py-4 text-sm font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <RefreshCw
          size={18}
          className="duration-500 transition-transform group-hover:rotate-180"
        />
        {hashtags.length > 0 ? "Regenerate Tags" : "Generate Hashtags"}
      </button>

      {hashtags.length > 0 ? (
        <div className="animate-in slide-in-from-bottom-2 fade-in space-y-3 duration-500">
          <div className="flex items-center justify-between px-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-subtle">
              The Lineup
            </p>
            <button
              type="button"
              onClick={() => handleCopy(hashtags.join(" "), "__all__")}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all ${
                copied === "__all__"
                  ? "text-green-600"
                  : "text-brand hover:underline"
              }`}
            >
              {copied === "__all__" ? "Copied All!" : "Copy All"}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {hashtags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleCopy(tag, tag)}
                className={`group flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                  copied === tag
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-border bg-white text-ink hover:border-brand hover:shadow-sm"
                }`}
              >
                <span className="font-mono text-sm font-medium">{tag}</span>
                {copied === tag ? (
                  <Check size={14} className="text-green-600" />
                ) : (
                  <Copy
                    size={14}
                    className="text-ink-subtle opacity-0 transition-opacity group-hover:opacity-100"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border-2 border-dashed border-border bg-surface-muted/50 p-8 text-center">
          <p className="text-sm font-medium text-ink-subtle">
            Enter the couple&apos;s names and choose a vibe to get started.
          </p>
        </div>
      )}

      <p className="text-center text-[10px] font-medium uppercase tracking-widest text-ink-subtle opacity-60">
        Privacy Guaranteed • Local Generation
      </p>
    </div>
  );
}