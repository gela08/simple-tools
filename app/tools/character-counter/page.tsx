import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CharacterCounter from "@/components/tools/CharacterCounter";

export const metadata: Metadata = {
  title: "Character Counter — Real-Time Text Length & Limits",
  description:
    "Count characters with and without spaces instantly. Check your text length against limits for Twitter/X, Instagram, SMS, and SEO meta descriptions.",
  keywords: [
    "character counter",
    "word counter",
    "twitter character limit",
    "sms character count",
    "letter counter online",
  ],
};

export default function CharacterCounterPage() {
  return (
    <ToolLayout
      toolId="character-counter"
      title="Character Counter"
      description="Track your text length in real-time. Whether you're writing a tweet, an SMS, or an SEO title, our tool ensures you stay within the perfect character limit."
      howTo={[
        { 
          step: "Paste or type your text", 
          detail: "Enter your content into the editor. The character count updates instantly as you type." 
        },
        { 
          step: "Review length metrics", 
          detail: "See total characters (with spaces), character count excluding spaces, and total word count." 
        },
        { 
          step: "Check platform limits", 
          detail: "Use the built-in indicators to see if your text fits within limits for Twitter/X (280) and SMS (160)." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <CharacterCounter />
      </div>
    </ToolLayout>
  );
}