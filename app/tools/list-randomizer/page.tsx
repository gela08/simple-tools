import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import ListRandomizer from "@/components/tools/ListRandomizer";

export const metadata: Metadata = {
  title: "List Randomizer",
  description: "Shuffle any list into a completely random order instantly.",
};

export default function Page() {
  return (
    <ToolLayout toolId="list-randomizer" title="List Randomizer" description="Shuffle any list into a completely random order instantly.">
      <ListRandomizer />
    </ToolLayout>
  );
}
