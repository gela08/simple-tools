import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CountdownCalculator from "@/components/tools/CountdownCalculator";

export const metadata: Metadata = {
  title: "Days Until Calculator",
  description: "Calculate how many days until any future date.",
};

export default function Page() {
  return (
    <ToolLayout toolId="countdown-calculator" title="Days Until Calculator" description="Calculate how many days until any future date.">
      <CountdownCalculator />
    </ToolLayout>
  );
}
