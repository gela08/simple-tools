import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextCaseConverter from "@/components/tools/TextCaseConverter";

export const metadata: Metadata = {
  title: "Text Case Converter — UPPERCASE, lowercase, Title Case & more",
  description:
    "Instantly transform your text between UPPERCASE, lowercase, Title Case, Sentence case, and camelCase. A fast, free, and private online text case converter.",
  keywords: [
    "text case converter",
    "convert to uppercase",
    "title case generator",
    "sentence case tool",
    "camelCase converter",
    "text transformer",
  ],
};

export default function TextCaseConverterPage() {
  return (
    <ToolLayout
      toolId="text-case-converter"
      title="Text Case Converter"
      description="Easily switch between text formats. Whether you need to fix a 'caps lock' mistake or format strings for code, our tool handles uppercase, lowercase, title case, sentence case, and camelCase instantly."
      howTo={[
        { 
          step: "Paste or type your text", 
          detail: "Enter any text you wish to format into the input area." 
        },
        { 
          step: "Choose a case format", 
          detail: "Select from UPPERCASE, lowercase, Title Case, Sentence case, or camelCase. The conversion happens instantly." 
        },
        { 
          step: "Copy the result", 
          detail: "Click the copy button to grab your newly formatted text and use it in your project or document." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <TextCaseConverter />
      </div>
    </ToolLayout>
  );
}