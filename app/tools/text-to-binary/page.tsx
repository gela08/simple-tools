import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextToBinary from "@/components/tools/TextToBinary";

export const metadata: Metadata = {
  title: "Text to Binary Converter",
  description: "Convert text to binary code and binary back to readable text. Great for developers and students.",
};

export default function TextToBinaryPage() {
  return (
    <ToolLayout
      toolId="text-to-binary"
      title="Text to Binary Converter"
      description="Convert text to binary code and binary back to readable text. Great for developers and students."
    >
      <TextToBinary />
    </ToolLayout>
  );
}
