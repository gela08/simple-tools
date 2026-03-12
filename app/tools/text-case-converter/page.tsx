import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextCaseConverter from "@/components/tools/TextCaseConverter";

export const metadata: Metadata = {
  title: "Text Case Converter",
  description:
<<<<<<< HEAD
    "Convert text to UPPERCASE, lowercase, Title Case, sentence case, and camelCase instantly.",
=======
<<<<<<< HEAD
    "Convert text to UPPERCASE, lowercase, Title Case, sentence case, and camelCase instantly.",
=======
    "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, or camelCase instantly. Free online text case converter.",
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function TextCaseConverterPage() {
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
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
<<<<<<< HEAD
=======
=======
    <div className="select-none">
      <ToolLayout
        toolId="text-case-converter"
        title="Text Case Converter"
        description="Convert between uppercase, lowercase, title case, sentence case, and camelCase instantly."
      >
        <TextCaseConverter />
      </ToolLayout>
    </div>

>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
  );
}
