"use client";

import { useState } from "react";
import CopyButton from "@/components/ui/CopyButton";
import { toTitleCase, toSentenceCase, toCamelCase } from "@/lib/utils";

type CaseType =
  | "uppercase"
  | "lowercase"
  | "titlecase"
  | "sentencecase"
  | "camelcase";

const CASES: { id: CaseType; label: string; example: string }[] = [
  { id: "uppercase", label: "UPPERCASE", example: "HELLO WORLD" },
  { id: "lowercase", label: "lowercase", example: "hello world" },
  { id: "titlecase", label: "Title Case", example: "Hello World" },
  { id: "sentencecase", label: "Sentence case", example: "Hello world" },
  { id: "camelcase", label: "camelCase", example: "helloWorld" },
];

function convert(text: string, type: CaseType): string {
  switch (type) {
    case "uppercase":
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase();
    case "titlecase":
      return toTitleCase(text);
    case "sentencecase":
      return toSentenceCase(text);
    case "camelcase":
      return toCamelCase(text);
  }
}

export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const [activeCase, setActiveCase] = useState<CaseType>("titlecase");

  const output = input ? convert(input, activeCase) : "";

  return (
    <div className="space-y-6">
      {/* Case selector */}
      <div>
        <p className="mb-2 text-sm font-medium text-ink-muted">
          Choose a case format:
        </p>
        <div className="flex flex-wrap gap-2">
          {CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(c.id)}
              title={`Example: "${c.example}"`}
              className={`rounded-lg border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCase === c.id
<<<<<<< HEAD
                  ? "border-brand bg-brand text-white"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand/50 hover:text-ink"
=======
<<<<<<< HEAD
                  ? "border-brand bg-brand text-white"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand/50 hover:text-ink"
=======
                  ? "border-brand-orange bg-brand-orange text-white"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand-orange/50 hover:text-ink"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div>
        <label className="mb-2 block text-sm font-medium text-ink-muted">
          Input text
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your text here..."
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder-ink-subtle transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
=======
<<<<<<< HEAD
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder-ink-subtle transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
=======
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder-ink-subtle transition-colors focus:border-brand-orange focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          rows={5}
        />
      </div>

      {/* Output */}
      {output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-ink-muted">
              Result
            </label>
            <CopyButton text={output} />
          </div>
          <div className="min-h-[80px] rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink whitespace-pre-wrap break-words">
            {output}
          </div>
        </div>
      )}

      {/* Reset */}
      <div className="flex gap-2">
        <button
          onClick={() => setInput("")}
          disabled={!input}
          className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
