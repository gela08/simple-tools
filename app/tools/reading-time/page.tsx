import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import ReadingTime from "@/components/tools/ReadingTime";

export const metadata: Metadata = {
  title: "Reading Time Calculator — Estimate Content Length",
  description:
    "Estimate how long it takes to read any text instantly. Features adjustable reading speeds (WPM) for slow, average, or fast readers. Perfect for blog posts and articles.",
  keywords: [
    "reading time calculator",
    "wpm estimator",
    "calculate reading time",
    "blog post length checker",
    "words per minute tool",
  ],
};

export default function ReadingTimePage() {
  return (
    <ToolLayout
      toolId="reading-time"
      title="Reading Time Calculator"
      description="Estimate how long it will take to read your content. Whether you're writing a blog post or preparing a speech, get a precise time estimate based on adjustable reading speeds."
      howTo={[
        { 
          step: "Paste your text", 
          detail: "Enter your article, blog post, or essay into the text area to start the analysis." 
        },
        { 
          step: "View the estimate", 
          detail: "The total reading time in minutes and seconds is calculated instantly based on your text length." 
        },
        { 
          step: "Adjust reading speed", 
          detail: "Fine-tune the Words Per Minute (WPM) setting to match your target audience—from slow (150) to fast (250)." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <ReadingTime />
      </div>
    </ToolLayout>
  );
}