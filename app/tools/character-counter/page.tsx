import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CharacterCounter from "@/components/tools/CharacterCounter";

export const metadata: Metadata = {
  title: "Character Counter",
  description:
    "Count characters with and without spaces instantly. Ideal for Twitter/X posts, SMS, and meta descriptions.",
};

export default function CharacterCounterPage() {
  return (
    <ToolLayout
      toolId="character-counter"
      title="Character Counter"
      description="Track exact character counts in real time. Ideal for Twitter/X posts, SMS messages, and meta descriptions."
      howTo={[
        { step: "Paste or type your text", detail: "Character counts update instantly as you type." },
        { step: "Check the limit indicators", detail: "See how your text compares to Twitter/X (280) and SMS (160) limits." },
        { step: "Copy your text", detail: "Use the Copy button to copy the content." },
      ]}
    >
      <CharacterCounter />
    </ToolLayout>
  );
}
