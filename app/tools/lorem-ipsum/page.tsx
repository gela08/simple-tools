import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import LoremIpsumGenerator from "@/components/tools/LoremIpsumGenerator";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator",
  description: "Generate classic Lorem Ipsum placeholder text for mockups.",
};

export default function Page() {
  return (
    <ToolLayout toolId="lorem-ipsum" title="Lorem Ipsum Generator" description="Generate classic Lorem Ipsum placeholder text for mockups.">
      <LoremIpsumGenerator />
    </ToolLayout>
  );
}
