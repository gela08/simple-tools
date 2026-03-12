"use client";

import { useState } from "react";
import CopyButton from "@/components/ui/CopyButton";
import { removeExtraSpaces } from "@/lib/utils";

export default function RemoveSpaces() {
  const [input, setInput] = useState("");

  const output = input ? removeExtraSpaces(input) : "";
  const spacesRemoved = input.length - output.length;

  return (
    <div className="space-y-6">
      {/* Input */}
      <div>
        <label className="mb-2 block text-sm font-medium text-ink-muted">
          Paste your messy text
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste text with extra spaces, tabs, or blank lines..."
          className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink placeholder-ink-subtle transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/20"
          rows={6}
        />
      </div>

      {/* Stats row */}
      {input && (
        <div className="flex flex-wrap gap-4 text-sm text-ink-muted">
          <span>
            Before:{" "}
            <strong className="text-ink">{input.length}</strong> chars
          </span>
          <span>
            After:{" "}
            <strong className="text-ink">{output.length}</strong> chars
          </span>
          {spacesRemoved > 0 && (
            <span className="font-medium text-green-600">
              −{spacesRemoved} characters removed
            </span>
          )}
        </div>
      )}

      {/* Output */}
      {output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-ink-muted">
              Cleaned text
            </label>
            <CopyButton text={output} />
          </div>
          <div className="min-h-[120px] rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-ink whitespace-pre-wrap break-words select-text">
            {output}
          </div>
        </div>
      )}

      {/* Clear */}
      <button
        onClick={() => setInput("")}
        disabled={!input}
        className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Clear
      </button>
    </div>
  );
}
