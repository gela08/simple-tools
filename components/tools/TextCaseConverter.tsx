"use client";

import { useState } from "react";
import { 
  Type, 
  RotateCcw, 
  Copy, 
  CheckCircle2, 
  Sparkles,
  Baseline
} from "lucide-react";
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
    case "uppercase": return text.toUpperCase();
    case "lowercase": return text.toLowerCase();
    case "titlecase": return toTitleCase(text);
    case "sentencecase": return toSentenceCase(text);
    case "camelcase": return toCamelCase(text);
    default: return text;
  }
}

export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const [activeCase, setActiveCase] = useState<CaseType>("titlecase");

  const output = input ? convert(input, activeCase) : "";

  return (
    <div className="space-y-6">
      {/* Case Selector Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Baseline size={14} className="text-brand" />
          <p className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
            Choose Format
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(c.id)}
              title={`Example: "${c.example}"`}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all active:scale-95 ${
                activeCase === c.id
                  ? "border-brand bg-brand text-white shadow-md shadow-brand/20"
                  : "border-border bg-surface-muted text-ink-muted hover:border-brand/40 hover:text-ink"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <Type size={14} className="text-brand" />
          <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
            Input Text
          </label>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your text here to transform it..."
          className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-4 text-sm text-ink placeholder:text-ink-subtle transition-all focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 shadow-inner min-h-[140px]"
          rows={5}
        />
      </div>

      {/* Result Section */}
      {output && (
        <div className="space-y-3 animate-in fade-in zoom-in duration-300">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-600" />
              <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
                Result
              </label>
            </div>
            <CopyButton text={output} />
          </div>
          <div className="min-h-[100px] rounded-2xl border border-border bg-white px-5 py-5 text-sm text-ink whitespace-pre-wrap break-words shadow-sm transition-colors hover:border-brand/30 select-text">
            {output}
          </div>
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex items-center justify-between border-t border-border/50 pt-4">
        <button
          onClick={() => setInput("")}
          disabled={!input}
          className="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-ink-subtle transition-all hover:bg-red-50 hover:text-red-600 disabled:opacity-0 active:scale-95"
        >
          <RotateCcw size={14} className="transition-transform group-hover:-rotate-45" />
          <span>Clear All</span>
        </button>

        {!input && (
          <div className="flex items-center gap-2 text-[11px] text-ink-subtle italic">
            <Sparkles size={12} className="text-brand/60" />
            <p>Ready to transform your text format.</p>
          </div>
        )}
      </div>
    </div>
  );
}