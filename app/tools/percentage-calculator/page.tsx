import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PercentageCalculator from "@/components/tools/PercentageCalculator";

export const metadata: Metadata = {
  title: "Percentage Calculator",
  description: "Calculate percentages, tips, discounts, and percent change.",
};

export default function Page() {
  return (
    <ToolLayout toolId="percentage-calculator" title="Percentage Calculator" description="Calculate percentages, tips, discounts, and percent change.">
      <PercentageCalculator />
    </ToolLayout>
  );
}
