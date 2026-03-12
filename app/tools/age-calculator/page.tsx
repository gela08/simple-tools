import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import AgeCalculator from "@/components/tools/AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator — Exact Age in Years, Months, and Days",
  description:
    "Calculate your exact age down to the day with our free online tool. Find out how many days, weeks, and months you've been alive and track your next birthday.",
  keywords: [
    "age calculator",
    "how old am i",
    "birthday calculator",
    "date of birth tool",
    "days until birthday",
  ],
};

export default function AgeCalculatorPage() {
  return (
    <ToolLayout
      toolId="age-calculator"
      title="Age Calculator"
      description="Enter your birth date to see your precise age. We'll calculate the years, months, and days you've been around, plus a countdown to your next big day."
      howTo={[
        { 
          step: "Select your birth date", 
          detail: "Use the calendar input to choose the day you were born." 
        },
        { 
          step: "View instant results", 
          detail: "Our tool processes the dates in your browser to show your exact age immediately." 
        },
        { 
          step: "Countdown to next birthday", 
          detail: "Check the bottom section to see exactly how many days are left until you turn a year older." 
        },
      ]}
    >
      <div className="mx-auto max-w-2xl">
        <AgeCalculator />
      </div>
    </ToolLayout>
  );
}