import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import AgeCalculator from "@/components/tools/AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator",
  description: "Calculate your exact age in years, months, and days.",
};

export default function Page() {
  return (
    <ToolLayout toolId="age-calculator" title="Age Calculator" description="Calculate your exact age in years, months, and days.">
      <AgeCalculator />
    </ToolLayout>
  );
}
