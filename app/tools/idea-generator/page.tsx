import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import IdeaGenerator from "@/components/tools/IdeaGenerator";

export const metadata: Metadata = {
  title: "Idea Generator",
<<<<<<< HEAD
  description: "Get random creative writing prompts and project ideas. Great for beating creative block.",
=======
<<<<<<< HEAD
  description: "Get random creative writing prompts and project ideas. Great for beating creative block.",
};

export default function IdeaGeneratorPage() {
  return (
    <ToolLayout
      toolId="idea-generator"
      title="Idea Generator"
      description="Get random creative writing prompts and project ideas. Great for beating creative block."
    >
=======
  description: "Get random creative writing prompts and project ideas.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function IdeaGeneratorPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="idea-generator"
      title="Idea Generator"
      description="Get random creative writing prompts and project ideas. Great for beating creative block."
    >
=======
    <ToolLayout toolId="idea-generator" title="Idea Generator" description="Get random creative writing prompts and project ideas.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <IdeaGenerator />
    </ToolLayout>
  );
}
