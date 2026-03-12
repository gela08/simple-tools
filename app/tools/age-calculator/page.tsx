import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import AgeCalculator from "@/components/tools/AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator",
  description:
    "Calculate your exact age in years, months, and days. Also shows days until your next birthday.",
};

export default function AgeCalculatorPage() {
  return (
    <ToolLayout
      toolId="age-calculator"
      title="Age Calculator"
      description="Enter your birth date and get your precise age down to the day. Also shows how many days until your next birthday."
      howTo={[
        { step: "Enter your date of birth", detail: "Use the date picker to select your birthday." },
        { step: "See your exact age", detail: "Your age in years, months, and days is shown instantly." },
        { step: "Check your next birthday", detail: "Days until your next birthday are shown at the bottom." },
      ]}
    >
      <AgeCalculator />
    </ToolLayout>
  );
}
