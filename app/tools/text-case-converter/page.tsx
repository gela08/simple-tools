import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextCaseConverter from "@/components/tools/TextCaseConverter";

export const metadata: Metadata = {
  title: "Text Case Converter",
  description:
    "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, or camelCase instantly. Free online text case converter.",
};

export default function TextCaseConverterPage() {
  return (
    <div className="select-none">
      <ToolLayout
        toolId="text-case-converter"
        title="Text Case Converter"
        description="Convert between uppercase, lowercase, title case, sentence case, and camelCase instantly."
      >
        <TextCaseConverter />
      </ToolLayout>
    </div>

  );
}
