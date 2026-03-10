import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RandomNamePicker from "@/components/tools/RandomNamePicker";

export const metadata: Metadata = {
  title: "Random Name Picker",
  description: "Pick a random name or winner from any list. Great for giveaways and classroom activities.",
};

export default function RandomNamePickerPage() {
  return (
    <ToolLayout
      toolId="random-name-picker"
      title="Random Name Picker"
      description="Pick a random name or winner from any list. Great for giveaways and classroom activities."
    >
      <RandomNamePicker />
    </ToolLayout>
  );
}
