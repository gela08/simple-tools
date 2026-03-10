import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import LineSorter from "@/components/tools/LineSorter";

export const metadata: Metadata = {
  title: "Line Sorter",
  description: "Sort lines alphabetically, reverse, or by length.",
};

export default function Page() {
  return (
    <ToolLayout toolId="line-sorter" title="Line Sorter" description="Sort lines alphabetically, reverse, or by length.">
      <LineSorter />
    </ToolLayout>
  );
}
