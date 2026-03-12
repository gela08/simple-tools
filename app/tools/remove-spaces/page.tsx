import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RemoveSpaces from "@/components/tools/RemoveSpaces";

export const metadata: Metadata = {
  title: "Remove Extra Spaces — Clean Up Text Formatting",
  description:
    "Remove duplicate spaces, trailing whitespace, and blank lines from any text instantly. Perfect for cleaning up messy copy-pasted content and formatting code.",
  keywords: [
    "remove extra spaces",
    "trim whitespace",
    "text cleaner",
    "remove blank lines",
    "format text online",
    "remove trailing spaces",
  ],
};

export default function RemoveSpacesPage() {
  return (
    <ToolLayout
      toolId="remove-spaces"
      title="Remove Extra Spaces"
      description="Instantly clean up messy text. Our tool removes double spaces, trims trailing whitespace from the start and end of lines, and can even collapse empty lines for a professional finish."
      howTo={[
        { 
          step: "Paste your text", 
          detail: "Drop your messy or unformatted text into the input field." 
        },
        { 
          step: "Choose cleaning options", 
          detail: "Select whether you want to remove extra spaces, trailing whitespace, or empty lines." 
        },
        { 
          step: "Copy the clean version", 
          detail: "Grab your perfectly formatted text with one click and use it anywhere." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <RemoveSpaces />
      </div>
    </ToolLayout>
  );
}