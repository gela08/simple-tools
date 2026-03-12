import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CapitalizeSentences from "@/components/tools/CapitalizeSentences";

export const metadata: Metadata = {
  title: "Capitalize Sentences",
<<<<<<< HEAD
  description: "Auto-capitalize the first letter of every sentence instantly. Fix formatting in one click.",
=======
<<<<<<< HEAD
  description: "Auto-capitalize the first letter of every sentence instantly. Fix formatting in one click.",
};

export default function CapitalizeSentencesPage() {
  return (
    <ToolLayout
      toolId="capitalize-sentences"
      title="Capitalize Sentences"
      description="Auto-capitalize the first letter of every sentence instantly. Fix formatting in one click."
    >
=======
  description: "Auto-capitalize the first letter of every sentence instantly.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function CapitalizeSentencesPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="capitalize-sentences"
      title="Capitalize Sentences"
      description="Auto-capitalize the first letter of every sentence instantly. Fix formatting in one click."
    >
=======
    <ToolLayout toolId="capitalize-sentences" title="Capitalize Sentences" description="Auto-capitalize the first letter of every sentence instantly.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <CapitalizeSentences />
    </ToolLayout>
  );
}
