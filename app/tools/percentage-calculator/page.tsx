import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PercentageCalculator from "@/components/tools/PercentageCalculator";

export const metadata: Metadata = {
  title: "Percentage Calculator — Fast & Accurate Math Tools",
  description:
    "Calculate percentages, price discounts, tips, and percentage change between two values. Simple, fast, and works instantly in your browser.",
  keywords: [
    "percentage calculator",
    "discount calculator",
    "tip calculator",
    "percent change formula",
    "math tools online",
  ],
};

export default function PercentageCalculatorPage() {
  return (
    <ToolLayout
      toolId="percentage-calculator"
      title="Percentage Calculator"
      description="Handle all your percentage math in one place. Whether you're calculating a store discount, a restaurant tip, or a year-over-year growth rate, we've got you covered."
      howTo={[
        { 
          step: "Choose your calculation", 
          detail: "Select the specific mode you need: basic percentage, discount/tip, or percentage change." 
        },
        { 
          step: "Input your values", 
          detail: "Enter the numbers into the corresponding fields. The result updates in real-time as you type." 
        },
        { 
          step: "Get your answer", 
          detail: "View the final calculated value and copy it to your clipboard if needed." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <PercentageCalculator />
      </div>
    </ToolLayout>
  );
}