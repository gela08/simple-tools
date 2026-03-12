import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import NumberSort from "@/components/tools/NumberSort";

export const metadata: Metadata = {
  title: "Number Sort",
<<<<<<< HEAD
  description: "Sort a list of numbers from lowest to highest or vice versa instantly.",
=======
<<<<<<< HEAD
  description: "Sort a list of numbers from lowest to highest or vice versa instantly.",
};

export default function NumberSortPage() {
  return (
    <ToolLayout
      toolId="number-sort"
      title="Number Sort"
      description="Sort a list of numbers from lowest to highest or vice versa instantly."
    >
=======
  description: "Sort a list of numbers from lowest to highest or vice versa.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function NumberSortPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="number-sort"
      title="Number Sort"
      description="Sort a list of numbers from lowest to highest or vice versa instantly."
    >
=======
    <ToolLayout toolId="number-sort" title="Number Sort" description="Sort a list of numbers from lowest to highest or vice versa.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <NumberSort />
    </ToolLayout>
  );
}
