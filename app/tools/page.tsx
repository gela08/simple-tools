import type { Metadata } from "next";
import ToolsGrid from "@/components/ui/ToolsGrid";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "All Tools",
  description:
    "Browse all free online tools — word counter, password generator, unit converter, dice roller, wedding hashtag generator, and more.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
          All Tools
        </h1>
        <p className="mt-2 text-base text-ink-muted">
          {tools.length} free tools — all run instantly in your browser, no signup required.
        </p>
      </div>
      <ToolsGrid />
    </div>
  );
}
