import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RemoveDuplicateLines from "@/components/tools/RemoveDuplicateLines";

export const metadata: Metadata = {
  title: "Remove Duplicate Lines — Clean Up Lists Instantly",
  description:
    "Remove repeated lines from any list or block of text in one click. Perfect for cleaning up email lists, keyword sets, and code. Fast, free, and private.",
  keywords: [
    "remove duplicate lines",
    "list cleaner",
    "deduplicate text",
    "remove repeated lines online",
    "clean email list",
  ],
};

export default function RemoveDuplicateLinesPage() {
  return (
    <ToolLayout
      toolId="remove-duplicate-lines"
      title="Remove Duplicate Lines"
      description="Quickly clean up your data by removing duplicate entries. Just paste your list, and we'll ensure every line is unique while preserving your original order."
      howTo={[
        { 
          step: "Paste your list", 
          detail: "Enter your text or list into the input area. Each line will be checked for duplicates." 
        },
        { 
          step: "Clean the text", 
          detail: "The tool automatically identifies and removes repeating lines instantly." 
        },
        { 
          step: "Copy your unique list", 
          detail: "Click the copy button to get your cleaned, unique data back to your clipboard." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <RemoveDuplicateLines />
      </div>
    </ToolLayout>
  );
}