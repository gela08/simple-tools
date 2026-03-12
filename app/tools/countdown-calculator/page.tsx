import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CountdownCalculator from "@/components/tools/CountdownCalculator";

export const metadata: Metadata = {
  title: "Days Until Calculator — Future Date Countdown",
  description:
    "Calculate exactly how many days, weeks, and months are left until any future date. Perfect for tracking events, deadlines, or upcoming holidays.",
  keywords: [
    "days until calculator",
    "countdown to date",
    "how many days until",
    "date countdown tool",
    "event countdown",
  ],
};

export default function CountdownCalculatorPage() {
  return (
    <ToolLayout
      toolId="countdown-calculator"
      title="Days Until Calculator"
      description="Select any date in the future to see a precise countdown. We'll break it down into days, weeks, and months so you know exactly how much time is left."
      howTo={[
        { 
          step: "Pick a target date", 
          detail: "Use the date picker to choose the holiday, deadline, or event you're waiting for." 
        },
        { 
          step: "See the breakdown", 
          detail: "View the remaining time in multiple units, including total days, full weeks, and months." 
        },
        { 
          step: "Stay on track", 
          detail: "Use the live countdown to keep your schedule organized and your deadlines in sight." 
        },
      ]}
    >
      <div className="mx-auto max-w-2xl">
        <CountdownCalculator />
      </div>
    </ToolLayout>
  );
}