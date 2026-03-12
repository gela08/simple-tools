"use client";

import { useState } from "react";
import { 
  Trash2, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  Eraser, 
  Info 
} from "lucide-react";
import CopyButton from "@/components/ui/CopyButton";
import { removeExtraSpaces } from "@/lib/utils";

export default function RemoveSpaces() {
  const [input, setInput] = useState("");

  const output = input ? removeExtraSpaces(input) : "";
  const spacesRemoved = input.length - output.length;

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1">
          <FileText size={14} className="text-brand" />
          <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
            Paste your messy text
          </label>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste text with extra spaces, tabs, or blank lines..."
          className="w-full rounded-2xl border border-border bg-surface-muted px-4 py-4 text-sm text-ink placeholder:text-ink-subtle transition-all focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 shadow-inner min-h-[160px]"
          rows={6}
        />
      </div>

      {/* Stats Row */}
      {input && (
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold animate-in fade-in slide-in-from-left-2">
          <div className="flex items-center gap-2 rounded-xl bg-surface-muted px-3 py-2 border border-border text-ink-subtle">
            <span className="opacity-60">Before:</span>
            <span className="text-ink font-bold">{input.length.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-surface-muted px-3 py-2 border border-border text-ink-subtle">
            <span className="opacity-60">After:</span>
            <span className="text-ink font-bold">{output.length.toLocaleString()}</span>
          </div>
          {spacesRemoved > 0 && (
            <div className="flex items-center gap-2 rounded-xl bg-green-50 px-3 py-2 border border-green-100 text-green-700 shadow-sm animate-bounce-short">
              <Sparkles size={14} />
              <span>{spacesRemoved.toLocaleString()} characters removed</span>
            </div>
          )}
        </div>
      )}

      {/* Output Section */}
      {output && (
        <div className="animate-in fade-in zoom-in duration-300">
          <div className="mb-3 flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-600" />
              <label className="text-xs font-bold uppercase tracking-widest text-ink-subtle">
                Cleaned text
              </label>
            </div>
            <CopyButton text={output} />
          </div>
          <div className="min-h-[140px] rounded-2xl border border-border bg-white px-5 py-5 text-sm text-ink whitespace-pre-wrap break-words select-text shadow-sm transition-all hover:border-brand/30">
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
          <Trash2 size={14} className="transition-transform group-hover:rotate-12" />
          <span>Clear All</span>
        </button>
        
        {!input && (
          <div className="flex items-center gap-2 text-[11px] text-ink-subtle italic">
            <Info size={12} />
            <p>Removes duplicate spaces, tabs, and blank lines.</p>
          </div>
        )}
      </div>
    </div>
  );
}