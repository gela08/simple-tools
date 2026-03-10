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
<<<<<<< HEAD
    <ToolLayout
      toolId="word-counter"
      title="Word Counter"
      description="Count words, characters, sentences, and paragraphs in real time. Just paste your text and see instant results."
      howTo={[
        { step: "Paste or type your text", detail: "Click the text area and paste in any content." },
        { step: "See live counts", detail: "Word, character, sentence, and paragraph counts update instantly." },
        { step: "Copy or clear", detail: "Use the Copy button to copy your text, or Clear to start fresh." },
      ]}
    >
      <WordCounter />
    </ToolLayout>
=======
    <div className="select-none">
      <ToolLayout
        toolId="word-counter"
        title="Word Counter"
        description="Count words, characters, sentences, and paragraphs in real time. Just paste your text and see instant results."
      >
        <WordCounter />
      </ToolLayout>
    </div>
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
  );
}
