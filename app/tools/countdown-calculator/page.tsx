import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CountdownCalculator from "@/components/tools/CountdownCalculator";

export const metadata: Metadata = {
  title: "Days Until Calculator",
<<<<<<< HEAD
  description: "Calculate how many days, weeks, and months until any future date.",
};

export default function CountdownCalculatorPage() {
  return (
    <ToolLayout
      toolId="countdown-calculator"
      title="Days Until Calculator"
      description="Calculate how many days, weeks, and months until any future date."
    >
=======
  description: "Calculate how many days until any future date.",
};

export default function Page() {
  return (
    <ToolLayout toolId="countdown-calculator" title="Days Until Calculator" description="Calculate how many days until any future date.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      <CountdownCalculator />
    </ToolLayout>
  );
}
