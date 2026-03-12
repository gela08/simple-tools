import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import ListRandomizer from "@/components/tools/ListRandomizer";

export const metadata: Metadata = {
  title: "List Randomizer — Shuffle Lists Randomly",
  description:
    "Shuffle any list into a completely random order instantly. Perfect for giveaways, classroom team picks, or deciding a random order for tasks.",
  keywords: [
    "list randomizer",
    "shuffle list online",
    "randomize lines",
    "random order generator",
    "giveaway picker",
  ],
};

export default function ListRandomizerPage() {
  return (
    <ToolLayout
      toolId="list-randomizer"
      title="List Randomizer"
      description="Need to mix things up? Paste your list and shuffle it into a completely random order with one click. Fast, fair, and private."
      howTo={[
        { 
          step: "Enter your items", 
          detail: "Paste your list into the text area. Make sure each item is on a new line." 
        },
        { 
          step: "Shuffle the list", 
          detail: "Click the 'Randomize' button to rearrange the items using a secure random algorithm." 
        },
        { 
          step: "Copy your result", 
          detail: "Grab your newly shuffled list and use it for your giveaway or project." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <ListRandomizer />
      </div>
    </ToolLayout>
  );
}