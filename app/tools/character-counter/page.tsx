import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CharacterCounter from "@/components/tools/CharacterCounter";

export const metadata: Metadata = {
  title: "Character Counter",
  description:
    "Count characters with and without spaces. Check against Twitter, Instagram, and SMS character limits instantly.",
};

export default function CharacterCounterPage() {
  return (
    <div className="select-none">
      <ToolLayout
        toolId="character-counter"
        title="Character Counter"
        description="Count characters with and without spaces. Check against platform limits in real time."
      >
        <CharacterCounter />
      </ToolLayout>
    </div>
  );
}
