import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import WordCounter from "@/components/tools/WordCounter";

export const metadata: Metadata = {
  title: "Word Counter — Real-Time Text Statistics",
  description:
    "Count words, characters, sentences, and paragraphs instantly. A free, fast, and private online word counter with real-time results for writers and editors.",
  keywords: [
    "word counter",
    "character count",
    "sentence counter",
    "paragraph counter",
    "text analyzer online",
    "word count tool",
  ],
};

export default function WordCounterPage() {
  return (
    <ToolLayout
      toolId="word-counter"
      title="Word Counter"
      description="Analyze your text in real time. Simply paste your content or start typing to get an instant breakdown of word count, character density, and structural statistics."
      howTo={[
        { 
          step: "Paste or type your text", 
          detail: "Enter your content into the main text area. The analysis starts the moment you begin typing." 
        },
        { 
          step: "Monitor live statistics", 
          detail: "View word, character, sentence, and paragraph counts at the top of the interface as they update live." 
        },
        { 
          step: "Copy or clear content", 
          detail: "Use the built-in buttons to quickly copy your entire text or clear the workspace to start fresh on a new draft." 
        },
      ]}
    >
      <div className="mx-auto max-w-4xl">
        <WordCounter />
      </div>
    </ToolLayout>
  );
}