import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import AgeCalculator from "@/components/tools/AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator",
<<<<<<< HEAD
  description:
    "Calculate your exact age in years, months, and days. Also shows days until your next birthday.",
=======
<<<<<<< HEAD
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
=======
  description: "Calculate your exact age in years, months, and days.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function AgeCalculatorPage() {
  return (
<<<<<<< HEAD
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
=======
    <ToolLayout toolId="age-calculator" title="Age Calculator" description="Calculate your exact age in years, months, and days.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <AgeCalculator />
    </ToolLayout>
  );
}
