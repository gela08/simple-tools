import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import ReadingTime from "@/components/tools/ReadingTime";

export const metadata: Metadata = {
  title: "Reading Time Calculator",
  description:
    "Estimate how long it takes to read any text. Paste your article or blog post for an instant reading time estimate.",
};

export default function ReadingTimePage() {
  return (
    <ToolLayout
      toolId="reading-time"
      title="Reading Time Calculator"
      description="Paste your article or content and get an estimated reading time based on average adult reading speed (200 words per minute)."
      howTo={[
        { step: "Paste your article or text", detail: "Drop in any blog post, essay, or content." },
        { step: "See the reading time", detail: "Estimated minutes and seconds appear instantly." },
        { step: "Adjust WPM if needed", detail: "Change the words-per-minute rate to match your audience." },
      ]}
    >
      <ReadingTime />
    </ToolLayout>
  );
}
