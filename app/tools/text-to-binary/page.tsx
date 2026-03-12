import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextToBinary from "@/components/tools/TextToBinary";

export const metadata: Metadata = {
  title: "Text to Binary Converter",
<<<<<<< HEAD
  description: "Convert text to binary code and binary back to readable text. Great for developers and students.",
=======
<<<<<<< HEAD
  description: "Convert text to binary code and binary back to readable text. Great for developers and students.",
};

export default function TextToBinaryPage() {
  return (
    <ToolLayout
      toolId="text-to-binary"
      title="Text to Binary Converter"
      description="Convert text to binary code and binary back to readable text. Great for developers and students."
    >
=======
  description: "Convert text to binary code or decode binary back to text.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function TextToBinaryPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="text-to-binary"
      title="Text to Binary Converter"
      description="Convert text to binary code and binary back to readable text. Great for developers and students."
    >
=======
    <ToolLayout toolId="text-to-binary" title="Text to Binary Converter" description="Convert text to binary code or decode binary back to text.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <TextToBinary />
    </ToolLayout>
  );
}
