import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextCaseConverter from "@/components/tools/TextCaseConverter";

export const metadata: Metadata = {
  title: "Text Case Converter",
  description:
    "Convert text to UPPERCASE, lowercase, Title Case, sentence case, and camelCase instantly.",
};

export default function TextCaseConverterPage() {
  return (
    <ToolLayout
      toolId="text-case-converter"
      title="Text Case Converter"
      description="Instantly transform your text between multiple case formats: uppercase, lowercase, title case, sentence case, and camelCase."
      howTo={[
        { step: "Paste or type your text", detail: "Enter any text in the input area." },
        { step: "Choose a case format", detail: "Click any of the case buttons: UPPER, lower, Title, Sentence, or camelCase." },
        { step: "Copy the result", detail: "Use the Copy button to copy the converted text." },
      ]}
    >
      <TextCaseConverter />
    </ToolLayout>
  );
}
