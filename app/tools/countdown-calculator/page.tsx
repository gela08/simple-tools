import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CountdownCalculator from "@/components/tools/CountdownCalculator";

export const metadata: Metadata = {
  title: "Days Until Calculator",
  description: "Calculate how many days, weeks, and months until any future date.",
};

export default function CountdownCalculatorPage() {
  return (
    <ToolLayout
      toolId="countdown-calculator"
      title="Days Until Calculator"
      description="Calculate how many days, weeks, and months until any future date."
    >
      <CountdownCalculator />
    </ToolLayout>
  );
}
