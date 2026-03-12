import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import AlphabeticalSort from "@/components/tools/AlphabeticalSort";

export const metadata: Metadata = {
  title: "Alphabetical Sort — Quickly Sort Lists A-Z or Z-A",
  description:
    "Organize any list of names, words, or items alphabetically. Supports A-Z and Z-A sorting, case sensitivity options, and line-by-line processing. Fast, free, and private.",
  keywords: [
    "alphabetical sort",
    "sort list online",
    "A-Z sorter",
    "alphabetize list",
    "text sorter tool",
  ],
};

export default function AlphabeticalSortPage() {
  return (
    <ToolLayout
      toolId="alphabetical-sort"
      title="Alphabetical Sort"
      description="Paste your list and organize it instantly. Whether it's names, inventory, or random notes, we'll sort them from A to Z or Z to A in a single click."
      howTo={[
        { 
          step: "Paste your list", 
          detail: "Enter your items into the text area, with each item on a new line." 
        },
        { 
          step: "Choose sort order", 
          detail: "Select whether you want to sort alphabetically (A-Z) or in reverse (Z-A)." 
        },
        { 
          step: "Copy your result", 
          detail: "Once sorted, click the copy button to grab your organized list." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <AlphabeticalSort />
      </div>
    </ToolLayout>
  );
}