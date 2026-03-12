import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import LoremIpsumGenerator from "@/components/tools/LoremIpsumGenerator";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator",
  description: "Generate classic Lorem Ipsum placeholder text by paragraph count for designs and mockups.",
};

export default function LoremIpsumGeneratorPage() {
  return (
    <ToolLayout
      toolId="lorem-ipsum"
      title="Lorem Ipsum Generator"
      description="Generate classic Lorem Ipsum placeholder text by paragraph count for designs and mockups."
    >
      <LoremIpsumGenerator />
    </ToolLayout>
  );
}
