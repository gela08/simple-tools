import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import IdeaGenerator from "@/components/tools/IdeaGenerator";

export const metadata: Metadata = {
  title: "Idea Generator — Creative Writing Prompts & Project Ideas",
  description:
    "Generate random creative writing prompts, drawing ideas, and project starters instantly. The perfect tool for beating creative block and finding inspiration.",
  keywords: [
    "idea generator",
    "creative writing prompts",
    "random project ideas",
    "inspiration tool",
    "drawing prompts",
    "story starters",
  ],
};

export default function IdeaGeneratorPage() {
  return (
    <ToolLayout
      toolId="idea-generator"
      title="Idea Generator"
      description="Feeling stuck? Generate random creative writing prompts and project ideas to get your gears turning again. Perfect for writers, artists, and developers."
      howTo={[
        { 
          step: "Select a category", 
          detail: "Choose between Writing, Coding, Art, or Business to narrow down your inspiration." 
        },
        { 
          step: "Generate an idea", 
          detail: "Click the 'Generate' button to receive a unique, randomly selected prompt." 
        },
        { 
          step: "Save for later", 
          detail: "Copy your favorite prompts or generate a new one until you find the perfect spark." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <IdeaGenerator />
      </div>
    </ToolLayout>
  );
}