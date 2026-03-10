import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import ReadingTime from "@/components/tools/ReadingTime";

export const metadata: Metadata = {
  title: "Reading Time Calculator",
  description:
    "Estimate how long it takes to read any text. Adjustable reading speed — slow, average, or fast.",
};

export default function ReadingTimePage() {
  return (
    <div className="select-none">
      <ToolLayout
        toolId="reading-time"
        title="Reading Time Calculator"
        description="Estimate reading time based on word count and your reading speed."
      >
        <ReadingTime />
      </ToolLayout>
    </div>

  );
}
