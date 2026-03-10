import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextToBinary from "@/components/tools/TextToBinary";

export const metadata: Metadata = {
  title: "Text to Binary Converter",
  description: "Convert text to binary code or decode binary back to text.",
};

export default function Page() {
  return (
    <ToolLayout toolId="text-to-binary" title="Text to Binary Converter" description="Convert text to binary code or decode binary back to text.">
      <TextToBinary />
    </ToolLayout>
  );
}
