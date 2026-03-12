import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextToBinary from "@/components/tools/TextToBinary";

export const metadata: Metadata = {
  title: "Text to Binary Converter — Encode & Decode Binary Code",
  description:
    "Easily convert text to binary and binary code back to readable text. A perfect utility for developers, students, and learning computer science basics.",
  keywords: [
    "text to binary",
    "binary to text",
    "binary converter",
    "binary code translator",
    "ascii to binary",
    "binary decoder",
  ],
};

export default function TextToBinaryPage() {
  return (
    <ToolLayout
      toolId="text-to-binary"
      title="Text to Binary Converter"
      description="Translate plain text into 0s and 1s, or decode binary strings back into readable characters. Fast, accurate, and completely private."
      howTo={[
        { 
          step: "Choose your mode", 
          detail: "Select whether you want to convert 'Text to Binary' or 'Binary to Text' using the toggle." 
        },
        { 
          step: "Input your data", 
          detail: "Paste your text or binary string into the input area. The conversion happens in real-time." 
        },
        { 
          step: "Copy the output", 
          detail: "Once the conversion is complete, use the copy button to grab your results instantly." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <TextToBinary />
      </div>
    </ToolLayout>
  );
}