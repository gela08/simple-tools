import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RandomNamePicker from "@/components/tools/RandomNamePicker";

export const metadata: Metadata = {
  title: "Random Name Picker",
  description: "Pick a random winner or name from any list.",
};

export default function Page() {
  return (
    <ToolLayout toolId="random-name-picker" title="Random Name Picker" description="Pick a random winner or name from any list.">
      <RandomNamePicker />
    </ToolLayout>
  );
}
