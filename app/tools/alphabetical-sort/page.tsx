import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import AlphabeticalSort from "@/components/tools/AlphabeticalSort";

export const metadata: Metadata = {
  title: "Alphabetical Sort",
  description: "Sort any list of items from A to Z or Z to A.",
};

export default function Page() {
  return (
    <ToolLayout toolId="alphabetical-sort" title="Alphabetical Sort" description="Sort any list of items from A to Z or Z to A.">
      <AlphabeticalSort />
    </ToolLayout>
  );
}
