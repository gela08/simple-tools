import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import NumberSort from "@/components/tools/NumberSort";

export const metadata: Metadata = {
  title: "Number Sort — Sort Numerical Lists Instantly",
  description:
    "Organize any list of numbers from lowest to highest or highest to lowest. Handles decimals, negatives, and large datasets with ease. Fast, free, and runs in your browser.",
  keywords: [
    "number sort",
    "sort numbers online",
    "ascending order calculator",
    "descending order tool",
    "numerical list organizer",
  ],
};

export default function NumberSortPage() {
  return (
    <ToolLayout
      toolId="number-sort"
      title="Number Sort"
      description="Quickly organize your numerical data. Whether it's prices, measurements, or random IDs, we'll sort your list from lowest to highest or vice versa in one click."
      howTo={[
        { 
          step: "Enter your numbers", 
          detail: "Paste or type your numbers into the input area, separated by lines, commas, or spaces." 
        },
        { 
          step: "Select sort order", 
          detail: "Choose between Ascending (Smallest to Largest) or Descending (Largest to Smallest)." 
        },
        { 
          step: "Copy your result", 
          detail: "Get your perfectly ordered numerical list immediately. Click the copy button to use it anywhere." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <NumberSort />
      </div>
    </ToolLayout>
  );
}