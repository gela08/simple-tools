import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RandomNamePicker from "@/components/tools/RandomNamePicker";

export const metadata: Metadata = {
  title: "Random Name Picker",
<<<<<<< HEAD
  description: "Pick a random name or winner from any list. Great for giveaways and classroom activities.",
};

export default function RandomNamePickerPage() {
  return (
    <ToolLayout
      toolId="random-name-picker"
      title="Random Name Picker"
      description="Pick a random name or winner from any list. Great for giveaways and classroom activities."
    >
=======
  description: "Pick a random winner or name from any list.",
};

export default function Page() {
  return (
    <ToolLayout toolId="random-name-picker" title="Random Name Picker" description="Pick a random winner or name from any list.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      <RandomNamePicker />
    </ToolLayout>
  );
}
