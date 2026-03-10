import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import WordCounter from "@/components/tools/WordCounter";

export const metadata: Metadata = {
  title: "Word Counter",
  description:
    "Count words, characters, sentences, and paragraphs instantly. Free online word counter with real-time results.",
};

export default function WordCounterPage() {
  return (
    <div className="select-none">
      <ToolLayout
        toolId="word-counter"
        title="Word Counter"
        description="Count words, characters, sentences, and paragraphs in real time. Just paste your text and see instant results."
      >
        <WordCounter />
      </ToolLayout>
    </div>
  );
}
