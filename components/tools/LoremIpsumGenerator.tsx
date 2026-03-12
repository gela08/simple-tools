"use client";
import { useState } from "react";

const WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");

function makeSentence(): string {
  const len = 8 + Math.floor(Math.random() * 10);
  const words = Array.from({ length: len }, () => WORDS[Math.floor(Math.random() * WORDS.length)]);
  return words[0].charAt(0).toUpperCase() + words[0].slice(1) + " " + words.slice(1).join(" ") + ".";
}

function makeParagraph(): string {
  const count = 3 + Math.floor(Math.random() * 4);
  return Array.from({ length: count }, makeSentence).join(" ");
}

export default function LoremIpsumGenerator() {
  const [paras, setParas] = useState(3);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => setOutput(Array.from({ length: paras }, makeParagraph).join("\n\n"));

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(output); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-ink">
          Paragraphs: <span className="font-bold text-brand">{paras}</span>
        </label>
        <input type="range" min={1} max={10} value={paras} onChange={(e) => setParas(+e.target.value)} className="w-full accent-brand" />
        <div className="mt-1 flex justify-between text-xs text-ink-subtle"><span>1</span><span>10</span></div>
      </div>
      <button onClick={generate} className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95">
        📄 Generate Lorem Ipsum
      </button>
      {output && (
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-ink">Output</label>
            <button onClick={handleCopy} className={`text-xs font-medium border rounded-lg px-3 py-1.5 transition-all ${copied ? "border-green-400 bg-green-50 text-green-700" : "border-border text-ink-muted hover:border-brand/40"}`}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <div className="max-h-72 overflow-y-auto rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink whitespace-pre-wrap">{output}</div>
        </div>
      )}
    </div>
  );
}
