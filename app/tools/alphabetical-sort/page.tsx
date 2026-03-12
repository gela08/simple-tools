import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import AlphabeticalSort from "@/components/tools/AlphabeticalSort";

export const metadata: Metadata = {
  title: "Alphabetical Sort",
<<<<<<< HEAD
  description: "Sort any list of words or items from A to Z or Z to A instantly.",
=======
<<<<<<< HEAD
  description: "Sort any list of words or items from A to Z or Z to A instantly.",
};

export default function AlphabeticalSortPage() {
  return (
    <ToolLayout
      toolId="alphabetical-sort"
      title="Alphabetical Sort"
      description="Sort any list of words or items from A to Z or Z to A instantly."
    >
=======
  description: "Sort any list of items from A to Z or Z to A.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function AlphabeticalSortPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="alphabetical-sort"
      title="Alphabetical Sort"
      description="Sort any list of words or items from A to Z or Z to A instantly."
    >
=======
    <ToolLayout toolId="alphabetical-sort" title="Alphabetical Sort" description="Sort any list of items from A to Z or Z to A.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <AlphabeticalSort />
    </ToolLayout>
  );
}
