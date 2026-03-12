import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import LineSorter from "@/components/tools/LineSorter";

export const metadata: Metadata = {
  title: "Line Sorter — Sort Text Alphabetically or by Length",
  description:
    "Organize your text lines instantly. Sort alphabetically, in reverse, or by character length. Fast, free, and privacy-focused online text sorting tool.",
  keywords: [
    "line sorter",
    "sort lines alphabetically",
    "sort text by length",
    "text organizer",
    "list sorter tool",
  ],
};

export default function LineSorterPage() {
  return (
    <ToolLayout
      toolId="line-sorter"
      title="Line Sorter"
      description="Clean up your lists and data. Sort your lines of text alphabetically, by length, or in reverse with just a single click."
      howTo={[
        { 
          step: "Paste your text", 
          detail: "Enter your list or text block into the input area. Each line will be treated as a separate item." 
        },
        { 
          step: "Choose a sort method", 
          detail: "Select A-Z, Z-A, or sort by line length to organize your content." 
        },
        { 
          step: "Copy the result", 
          detail: "Your sorted text is ready immediately. Use the copy button to take it with you." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <LineSorter />
      </div>
    </ToolLayout>
  );
}