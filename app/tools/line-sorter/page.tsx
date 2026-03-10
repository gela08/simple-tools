import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import LineSorter from "@/components/tools/LineSorter";

export const metadata: Metadata = {
  title: "Line Sorter",
  description: "Sort lines of text alphabetically, reverse alphabetically, or by line length.",
};

export default function LineSorterPage() {
  return (
    <ToolLayout
      toolId="line-sorter"
      title="Line Sorter"
      description="Sort lines of text alphabetically, reverse alphabetically, or by line length."
    >
      <LineSorter />
    </ToolLayout>
  );
}
