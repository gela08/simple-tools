import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import AlphabeticalSort from "@/components/tools/AlphabeticalSort";

export const metadata: Metadata = {
  title: "Alphabetical Sort",
  description: "Sort any list of words or items from A to Z or Z to A instantly.",
};

export default function AlphabeticalSortPage() {
  return (
    <ToolLayout
      toolId="alphabetical-sort"
      title="Alphabetical Sort"
      description="Sort any list of words or items from A to Z or Z to A instantly."
    >
      <AlphabeticalSort />
    </ToolLayout>
  );
}
