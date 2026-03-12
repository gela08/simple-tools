import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import ListRandomizer from "@/components/tools/ListRandomizer";

export const metadata: Metadata = {
  title: "List Randomizer",
<<<<<<< HEAD
  description: "Shuffle any list into a completely random order. Great for giveaways and team picks.",
=======
<<<<<<< HEAD
  description: "Shuffle any list into a completely random order. Great for giveaways and team picks.",
};

export default function ListRandomizerPage() {
  return (
    <ToolLayout
      toolId="list-randomizer"
      title="List Randomizer"
      description="Shuffle any list into a completely random order. Great for giveaways and team picks."
    >
=======
  description: "Shuffle any list into a completely random order instantly.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function ListRandomizerPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="list-randomizer"
      title="List Randomizer"
      description="Shuffle any list into a completely random order. Great for giveaways and team picks."
    >
=======
    <ToolLayout toolId="list-randomizer" title="List Randomizer" description="Shuffle any list into a completely random order instantly.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <ListRandomizer />
    </ToolLayout>
  );
}
