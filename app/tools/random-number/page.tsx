import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RandomNumberGenerator from "@/components/tools/RandomNumberGenerator";

export const metadata: Metadata = {
  title: "Random Number Generator",
<<<<<<< HEAD
  description:
    "Generate random numbers in any custom range. Set min, max, and quantity for truly random results.",
=======
<<<<<<< HEAD
  description:
    "Generate random numbers in any custom range. Set min, max, and quantity for truly random results.",
};

export default function RandomNumberPage() {
  return (
    <ToolLayout
      toolId="random-number"
      title="Random Number Generator"
      description="Set a minimum and maximum value, choose how many numbers to generate, and get truly random results instantly."
      howTo={[
        { step: "Set the minimum value", detail: "Enter the lowest number in your desired range." },
        { step: "Set the maximum value", detail: "Enter the highest number in your desired range." },
        { step: "Choose how many to generate", detail: "Pick between 1 and 100 numbers." },
        { step: "Click Generate", detail: "Your random numbers appear immediately." },
      ]}
    >
=======
  description: "Generate random numbers in any custom range.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function RandomNumberPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="random-number"
      title="Random Number Generator"
      description="Set a minimum and maximum value, choose how many numbers to generate, and get truly random results instantly."
      howTo={[
        { step: "Set the minimum value", detail: "Enter the lowest number in your desired range." },
        { step: "Set the maximum value", detail: "Enter the highest number in your desired range." },
        { step: "Choose how many to generate", detail: "Pick between 1 and 100 numbers." },
        { step: "Click Generate", detail: "Your random numbers appear immediately." },
      ]}
    >
=======
    <ToolLayout toolId="random-number" title="Random Number Generator" description="Generate random numbers in any custom range.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <RandomNumberGenerator />
    </ToolLayout>
  );
}
