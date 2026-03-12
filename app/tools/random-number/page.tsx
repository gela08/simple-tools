import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RandomNumberGenerator from "@/components/tools/RandomNumberGenerator";

export const metadata: Metadata = {
  title: "Random Number Generator — Custom Range & Quantity",
  description:
    "Generate truly random numbers in any custom range. Set your minimum, maximum, and quantity for instant, fair results. Fast and runs in your browser.",
  keywords: [
    "random number generator",
    "pick a number",
    "rng tool",
    "random integer generator",
    "number picker online",
  ],
};

export default function RandomNumberPage() {
  return (
    <ToolLayout
      toolId="random-number"
      title="Random Number Generator"
      description="Need a random pick? Set a minimum and maximum value, choose how many numbers you need, and get instant results using a fair randomization algorithm."
      howTo={[
        { 
          step: "Set the range", 
          detail: "Enter your minimum (lowest) and maximum (highest) values for the generation." 
        },
        { 
          step: "Choose quantity", 
          detail: "Select how many random numbers you want to generate at once (up to 100)." 
        },
        { 
          step: "Generate results", 
          detail: "Click 'Generate' to see your numbers. You can also toggle settings to allow or prevent duplicate numbers." 
        },
        { 
          step: "Copy results", 
          detail: "Easily copy the generated list to your clipboard with one click." 
        },
      ]}
    >
      <div className="mx-auto max-w-2xl">
        <RandomNumberGenerator />
      </div>
    </ToolLayout>
  );
}