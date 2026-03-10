import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import IdeaGenerator from "@/components/tools/IdeaGenerator";

export const metadata: Metadata = {
  title: "Idea Generator",
  description: "Get random creative writing prompts and project ideas.",
};

export default function Page() {
  return (
    <ToolLayout toolId="idea-generator" title="Idea Generator" description="Get random creative writing prompts and project ideas.">
      <IdeaGenerator />
    </ToolLayout>
  );
}
