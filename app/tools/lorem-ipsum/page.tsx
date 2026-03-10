import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import LoremIpsumGenerator from "@/components/tools/LoremIpsumGenerator";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator",
<<<<<<< HEAD
  description: "Generate classic Lorem Ipsum placeholder text by paragraph count for designs and mockups.",
};

export default function LoremIpsumGeneratorPage() {
  return (
    <ToolLayout
      toolId="lorem-ipsum"
      title="Lorem Ipsum Generator"
      description="Generate classic Lorem Ipsum placeholder text by paragraph count for designs and mockups."
    >
=======
  description: "Generate classic Lorem Ipsum placeholder text for mockups.",
};

export default function Page() {
  return (
    <ToolLayout toolId="lorem-ipsum" title="Lorem Ipsum Generator" description="Generate classic Lorem Ipsum placeholder text for mockups.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      <LoremIpsumGenerator />
    </ToolLayout>
  );
}
