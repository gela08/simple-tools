import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import NumberSort from "@/components/tools/NumberSort";

export const metadata: Metadata = {
  title: "Number Sort",
  description: "Sort a list of numbers from lowest to highest or vice versa instantly.",
};

export default function NumberSortPage() {
  return (
    <ToolLayout
      toolId="number-sort"
      title="Number Sort"
      description="Sort a list of numbers from lowest to highest or vice versa instantly."
    >
      <NumberSort />
    </ToolLayout>
  );
}
