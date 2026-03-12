import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import LoremIpsumGenerator from "@/components/tools/LoremIpsumGenerator";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Professional Placeholder Text",
  description:
    "Generate classic Lorem Ipsum placeholder text by paragraph, sentence, or word count. Perfect for designers, developers, and mockups. Fast, free, and simple.",
  keywords: [
    "lorem ipsum generator",
    "placeholder text",
    "dummy text generator",
    "lipsum",
    "filler text for mockups",
  ],
};

export default function LoremIpsumGeneratorPage() {
  return (
    <ToolLayout
      toolId="lorem-ipsum"
      title="Lorem Ipsum Generator"
      description="Quickly generate custom placeholder text for your designs and mockups. Choose the number of paragraphs you need and get instant results."
      howTo={[
        { 
          step: "Choose your quantity", 
          detail: "Select the number of paragraphs, sentences, or words you need for your design." 
        },
        { 
          step: "Generate the text", 
          detail: "Click 'Generate' to create classic Latin placeholder text instantly." 
        },
        { 
          step: "Copy and paste", 
          detail: "Use the copy button to grab the text and use it in your UI mockups or documents." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <LoremIpsumGenerator />
      </div>
    </ToolLayout>
  );
}