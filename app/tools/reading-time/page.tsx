import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import ReadingTime from "@/components/tools/ReadingTime";

export const metadata: Metadata = {
  title: "Reading Time Calculator",
  description:
<<<<<<< HEAD
    "Estimate how long it takes to read any text. Paste your article or blog post for an instant reading time estimate.",
=======
<<<<<<< HEAD
    "Estimate how long it takes to read any text. Paste your article or blog post for an instant reading time estimate.",
=======
    "Estimate how long it takes to read any text. Adjustable reading speed — slow, average, or fast.",
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function ReadingTimePage() {
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
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
<<<<<<< HEAD
=======
=======
    <div className="select-none">
      <ToolLayout
        toolId="reading-time"
        title="Reading Time Calculator"
        description="Estimate reading time based on word count and your reading speed."
      >
        <ReadingTime />
      </ToolLayout>
    </div>

>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
  );
}
