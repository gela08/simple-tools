import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CapitalizeSentences from "@/components/tools/CapitalizeSentences";

export const metadata: Metadata = {
  title: "Capitalize Sentences — Auto-Fix Text Formatting",
  description:
    "Automatically capitalize the first letter of every sentence and fix common formatting errors instantly. Fast, free, and runs entirely in your browser.",
  keywords: [
    "capitalize sentences",
    "sentence case converter",
    "fix text formatting",
    "auto capitalization tool",
    "online text editor",
  ],
};

export default function CapitalizeSentencesPage() {
  return (
    <ToolLayout
      toolId="capitalize-sentences"
      title="Capitalize Sentences"
      description="Paste your text and we'll automatically capitalize the first letter of every sentence. Perfect for fixing quickly typed notes or unformatted drafts."
      howTo={[
        { 
          step: "Paste your text", 
          detail: "Enter your unformatted or lowercase text into the input area." 
        },
        { 
          step: "Apply formatting", 
          detail: "The tool will automatically detect sentence boundaries and capitalize the first letter of each." 
        },
        { 
          step: "Copy and use", 
          detail: "Click the copy button to get your professionally formatted text back." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <CapitalizeSentences />
      </div>
    </ToolLayout>
  );
}