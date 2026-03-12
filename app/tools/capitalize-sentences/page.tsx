import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CapitalizeSentences from "@/components/tools/CapitalizeSentences";

export const metadata: Metadata = {
  title: "Capitalize Sentences",
  description: "Auto-capitalize the first letter of every sentence instantly. Fix formatting in one click.",
};

export default function CapitalizeSentencesPage() {
  return (
    <ToolLayout
      toolId="capitalize-sentences"
      title="Capitalize Sentences"
      description="Auto-capitalize the first letter of every sentence instantly. Fix formatting in one click."
    >
      <CapitalizeSentences />
    </ToolLayout>
  );
}
