import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import LineSorter from "@/components/tools/LineSorter";

export const metadata: Metadata = {
  title: "Line Sorter",
<<<<<<< HEAD
  description: "Sort lines of text alphabetically, reverse alphabetically, or by line length.",
=======
<<<<<<< HEAD
  description: "Sort lines of text alphabetically, reverse alphabetically, or by line length.",
};

export default function LineSorterPage() {
  return (
    <ToolLayout
      toolId="line-sorter"
      title="Line Sorter"
      description="Sort lines of text alphabetically, reverse alphabetically, or by line length."
    >
=======
  description: "Sort lines alphabetically, reverse, or by length.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function LineSorterPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="line-sorter"
      title="Line Sorter"
      description="Sort lines of text alphabetically, reverse alphabetically, or by line length."
    >
=======
    <ToolLayout toolId="line-sorter" title="Line Sorter" description="Sort lines alphabetically, reverse, or by length.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <LineSorter />
    </ToolLayout>
  );
}
