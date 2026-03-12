"use client";

import ToolsGrid from "@/components/ui/ToolsGrid";
import { tools } from "@/data/tools";
import { LayoutGrid } from "lucide-react";

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Header Section */}
      <div className="mb-12">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
          <LayoutGrid size={24} />
        </div>
        <h1 className="font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          All Tools
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Explore our collection of {tools.length} privacy-first utilities. Everything runs locally in your browser—no data is ever sent to a server.
        </p>
      </div>

      {/* Grid with Search/Filtering */}
      <ToolsGrid />
    </div>
  );
}