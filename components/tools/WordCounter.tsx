"use client";

import { useState } from "react";
import StatCard from "@/components/ui/StatCard";
import CopyButton from "@/components/ui/CopyButton";
import {
  countWords,
  countSentences,
  countParagraphs,
} from "@/lib/utils";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = countWords(text);
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = countSentences(text);
  const paragraphs = countParagraphs(text);

  return (
    <div className="space-y-6">
      {/* Input */}
      <div>
        <label
          htmlFor="word-counter-input"
          className="mb-2 block text-sm font-medium text-ink-muted select-none"
        >
          Paste or type your text below
        </label>
        <textarea
          id="word-counter-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder-ink-subtle transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
          rows={7}
        />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 select-none">
        <StatCard label="Words" value={words} highlight />
        <StatCard label="Characters" value={chars} />
        <StatCard label="No Spaces" value={charsNoSpaces} />
        <StatCard label="Sentences" value={sentences} />
        <StatCard label="Paragraphs" value={paragraphs} />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 select-none">
        <CopyButton text={text} disabled={!text} />
        <button
          onClick={() => setText("")}
          disabled={!text}
          className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
