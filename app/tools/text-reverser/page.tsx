import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextReverser from "@/components/tools/TextReverser";

export const metadata: Metadata = {
  title: "Text Reverser — Flip Text or Words Instantly",
  description:
    "Reverse any text character by character or word by word. Perfect for fun, puzzles, or specific formatting needs. Fast, free, and runs entirely in your browser.",
  keywords: [
    "text reverser",
    "reverse text online",
    "backwards text generator",
    "reverse words in sentence",
    "flip text tool",
  ],
};

export default function TextReverserPage() {
  return (
    <ToolLayout
      toolId="text-reverser"
      title="Text Reverser"
      description="Flip your content in a flash. Choose between reversing the entire string character by character or just swapping the order of the words."
      howTo={[
        { 
          step: "Paste your text", 
          detail: "Enter the phrase or paragraph you want to flip into the input box." 
        },
        { 
          step: "Select reversal mode", 
          detail: "Choose 'Reverse Characters' for a mirror effect or 'Reverse Words' to keep words intact but flip their sequence." 
        },
        { 
          step: "Copy and share", 
          detail: "Your reversed text is ready instantly. Use the copy button to use it anywhere." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <TextReverser />
      </div>
    </ToolLayout>
  );
}