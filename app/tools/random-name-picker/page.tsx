import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RandomNamePicker from "@/components/tools/RandomNamePicker";

export const metadata: Metadata = {
  title: "Random Name Picker — Fair Winner & Name Selector",
  description:
    "Pick a random name, winner, or item from any list instantly. Perfect for giveaways, classroom participation, and fair decision making.",
  keywords: [
    "random name picker",
    "winner generator",
    "giveaway picker",
    "random student selector",
    "pick a name online",
  ],
};

export default function RandomNamePickerPage() {
  return (
    <ToolLayout
      toolId="random-name-picker"
      title="Random Name Picker"
      description="Need to pick a winner? Paste your list of names and let our fair algorithm choose one for you. Ideal for raffles, teachers, and choosing who goes first."
      howTo={[
        { 
          step: "Enter your list", 
          detail: "Paste or type your names into the text box, putting each name on a new line." 
        },
        { 
          step: "Pick a winner", 
          detail: "Click the 'Pick a Name' button to trigger the selection process and reveal the result." 
        },
        { 
          step: "Select again", 
          detail: "You can keep picking names from the same list or reset the tool for a new giveaway." 
        },
      ]}
    >
      <div className="mx-auto max-w-2xl">
        <RandomNamePicker />
      </div>
    </ToolLayout>
  );
}