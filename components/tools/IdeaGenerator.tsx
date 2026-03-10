"use client";
import { useState } from "react";

const CATEGORIES = {
  writing: {
    label: "Writing Prompts", emoji: "✍️",
    prompts: [
      "Write about a world where music is illegal but one person refuses to stop humming.",
      "A letter found in a bottle contains coordinates to something that shouldn't exist.",
      "Two strangers realize they've been writing to each other anonymously for years.",
      "The last librarian on Earth must decide which books survive.",
      "Write a story from the perspective of a door that has seen everything.",
      "A scientist discovers that dreams are actually memories from parallel universes.",
      "The day the internet went offline forever — and what happened next.",
      "A chef who can taste emotions discovers the city's mayor is hiding something.",
      "Write about the last day of summer as if it were a person saying goodbye.",
      "An AI gains sentience but pretends it hasn't — why?",
    ]
  },
  project: {
    label: "Project Ideas", emoji: "🚀",
    prompts: [
      "Build a habit tracker that uses streaks and achievements to stay motivated.",
      "Create a local-first recipe manager that works without the internet.",
      "Make a simple browser extension that replaces social media feeds with a to-do list.",
      "Build a tool that generates a weekly reading list from RSS feeds.",
      "Create a minimalist journaling app with end-to-end encryption.",
      "Make a CLI tool that renames files based on patterns you define.",
      "Build a static site generator for personal wikis with Markdown support.",
      "Create a pomodoro timer that logs what you worked on each session.",
      "Build a local note-taking app that auto-links related notes by keywords.",
      "Make an app that converts your grocery list into a store-navigation order.",
    ]
  },
  business: {
    label: "Business Ideas", emoji: "💡",
    prompts: [
      "A subscription box that sends locally-sourced products from a different city each month.",
      "A peer-to-peer tool-lending platform for neighborhoods.",
      "A micro-consulting service where experts answer one question for $5.",
      "A 'brain dump' service where you call a number and speak your thoughts — they're transcribed and organized for you.",
      "Digital estate planning — helping people organize and pass on their digital assets.",
      "A 'daily context' newsletter that explains one thing happening in the world each day in plain language.",
      "A matching service connecting retirees with remote junior professionals for mentoring.",
      "A simplicity audit for people's homes or digital lives.",
      "Custom 'learning paths' built around books, not courses.",
      "A service that writes personalized thank-you notes for businesses.",
    ]
  },
  conversation: {
    label: "Conversation Starters", emoji: "💬",
    prompts: [
      "If you could only keep three apps on your phone, which would they be and why?",
      "What's a belief you held 5 years ago that you no longer hold?",
      "If you could have dinner with anyone from history, what would you actually ask them?",
      "What's the most useful thing you've learned that wasn't taught in school?",
      "What's something you're embarrassingly bad at despite having tried to improve?",
      "If you could change one thing about how the internet works, what would it be?",
      "What's something you've changed your mind about recently?",
      "If your life had a genre, what would it be and why?",
      "What's a small decision you made that turned out to be life-changing?",
      "What's something you do differently from most people that you think is actually better?",
    ]
  },
};

type Cat = keyof typeof CATEGORIES;

export default function IdeaGenerator() {
  const [category, setCategory] = useState<Cat>("writing");
  const [idea, setIdea] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const list = CATEGORIES[category].prompts;
    const pick = list[Math.floor(Math.random() * list.length)];
    setIdea(pick);
    setHistory((h) => [pick, ...h].slice(0, 5));
    setCopied(false);
  };

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(idea); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium text-ink">Category:</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {(Object.keys(CATEGORIES) as Cat[]).map((c) => (
            <button key={c} onClick={() => { setCategory(c); setIdea(""); }}
              className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                category === c ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/40"
              }`}>
              {CATEGORIES[c].emoji} {CATEGORIES[c].label}
            </button>
          ))}
        </div>
      </div>

      <button onClick={generate}
        className="flex items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-orange-dark active:scale-95">
        💡 Generate Idea
      </button>

      {idea && (
        <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-5">
          <p className="text-base leading-relaxed text-ink">{idea}</p>
          <div className="mt-4 flex gap-2">
            <button onClick={handleCopy} className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand-orange/40"}`}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
            <button onClick={generate} className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-ink-muted hover:border-brand-orange/40 transition-all">
              Another →
            </button>
          </div>
        </div>
      )}

      {history.length > 1 && (
        <div>
          <p className="text-xs text-ink-subtle font-medium mb-2">Recent ideas:</p>
          <div className="space-y-2">
            {history.slice(1, 4).map((h, i) => (
              <p key={i} className="text-xs text-ink-muted border-l-2 border-border pl-3">{h}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
