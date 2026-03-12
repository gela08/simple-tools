"use client";
import { useState } from "react";

const ANSWERS = [
  { val: "YES", emoji: "✅", color: "border-green-400 bg-green-50 text-green-700", sub: "Go for it!" },
  { val: "YES", emoji: "✅", color: "border-green-400 bg-green-50 text-green-700", sub: "Absolutely!" },
  { val: "YES", emoji: "✅", color: "border-green-400 bg-green-50 text-green-700", sub: "Signs point to yes." },
  { val: "NO", emoji: "❌", color: "border-red-400 bg-red-50 text-red-700", sub: "Not this time." },
  { val: "NO", emoji: "❌", color: "border-red-400 bg-red-50 text-red-700", sub: "The answer is no." },
  { val: "NO", emoji: "❌", color: "border-red-400 bg-red-50 text-red-700", sub: "Don't do it." },
  { val: "MAYBE", emoji: "🤔", color: "border-amber-400 bg-amber-50 text-amber-700", sub: "Ask again later." },
];

export default function YesNoPicker() {
  const [answer, setAnswer] = useState<typeof ANSWERS[0] | null>(null);
  const [question, setQuestion] = useState("");
  const [spinning, setSpinning] = useState(false);

  const pick = () => {
    setSpinning(true);
    setTimeout(() => {
      setAnswer(ANSWERS[Math.floor(Math.random() * ANSWERS.length)]);
      setSpinning(false);
    }, 500);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Your question <span className="text-ink-subtle">(optional)</span>
        </label>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. Should I go for it?"
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20" />
      </div>

      <button onClick={pick} disabled={spinning}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 disabled:opacity-60">
        {spinning ? "Deciding…" : "🎱 Ask the Universe"}
      </button>

      {answer && !spinning && (
        <div className={`rounded-2xl border-2 p-8 text-center ${answer.color}`}>
          <div className="text-5xl">{answer.emoji}</div>
          <div className="mt-3 text-4xl font-extrabold font-display">{answer.val}</div>
          <div className="mt-2 text-sm font-medium opacity-80">{answer.sub}</div>
          {question && <div className="mt-3 text-xs opacity-60 italic">"{question}"</div>}
        </div>
      )}
    </div>
  );
}
