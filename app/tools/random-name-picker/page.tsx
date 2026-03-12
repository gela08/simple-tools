import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RandomNamePicker from "@/components/tools/RandomNamePicker";

export const metadata: Metadata = {
  title: "Random Name Picker",
<<<<<<< HEAD
  description: "Pick a random name or winner from any list. Great for giveaways and classroom activities.",
=======
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
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function RandomNamePickerPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="random-name-picker"
      title="Random Name Picker"
      description="Pick a random name or winner from any list. Great for giveaways and classroom activities."
    >
=======
    <ToolLayout toolId="random-name-picker" title="Random Name Picker" description="Pick a random winner or name from any list.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <RandomNamePicker />
    </ToolLayout>
  );
}
