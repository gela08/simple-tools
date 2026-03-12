import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextReverser from "@/components/tools/TextReverser";

export const metadata: Metadata = {
  title: "Text Reverser",
<<<<<<< HEAD
  description: "Reverse any text character by character or word by word. Instant results, no signup needed.",
=======
<<<<<<< HEAD
  description: "Reverse any text character by character or word by word. Instant results, no signup needed.",
};

export default function TextReverserPage() {
  return (
    <ToolLayout
      toolId="text-reverser"
      title="Text Reverser"
      description="Reverse any text character by character or word by word. Instant results, no signup needed."
    >
=======
  description: "Reverse any text character by character or word by word instantly.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function TextReverserPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="text-reverser"
      title="Text Reverser"
      description="Reverse any text character by character or word by word. Instant results, no signup needed."
    >
=======
    <ToolLayout toolId="text-reverser" title="Text Reverser" description="Reverse any text character by character or word by word instantly.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <TextReverser />
    </ToolLayout>
  );
}
