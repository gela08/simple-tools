import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PercentageCalculator from "@/components/tools/PercentageCalculator";

export const metadata: Metadata = {
  title: "Percentage Calculator",
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
};

export default function Page() {
  return (
    <ToolLayout toolId="percentage-calculator" title="Percentage Calculator" description="Calculate percentages, tips, discounts, and percent change.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      <PercentageCalculator />
    </ToolLayout>
  );
}
