import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CapitalizeSentences from "@/components/tools/CapitalizeSentences";

export const metadata: Metadata = {
  title: "Capitalize Sentences",
  description: "Auto-capitalize the first letter of every sentence instantly.",
};

export default function Page() {
  return (
    <ToolLayout toolId="capitalize-sentences" title="Capitalize Sentences" description="Auto-capitalize the first letter of every sentence instantly.">
      <CapitalizeSentences />
    </ToolLayout>
  );
}
