import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PercentageCalculator from "@/components/tools/PercentageCalculator";

export const metadata: Metadata = {
  title: "Percentage Calculator",
<<<<<<< HEAD
  description: "Calculate percentages, tips, discounts, and percent change. Three calculators in one.",
=======
<<<<<<< HEAD
  description: "Calculate percentages, tips, discounts, and percent change. Three calculators in one.",
};

export default function PercentageCalculatorPage() {
  return (
    <ToolLayout
      toolId="percentage-calculator"
      title="Percentage Calculator"
      description="Calculate percentages, tips, discounts, and percent change. Three calculators in one."
    >
=======
  description: "Calculate percentages, tips, discounts, and percent change.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function PercentageCalculatorPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="percentage-calculator"
      title="Percentage Calculator"
      description="Calculate percentages, tips, discounts, and percent change. Three calculators in one."
    >
=======
    <ToolLayout toolId="percentage-calculator" title="Percentage Calculator" description="Calculate percentages, tips, discounts, and percent change.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <PercentageCalculator />
    </ToolLayout>
  );
}
