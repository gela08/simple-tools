import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import YesNoPicker from "@/components/tools/YesNoPicker";

export const metadata: Metadata = {
  title: "Yes / No Generator",
  description: "Get a random Yes or No answer when you cannot decide.",
};

export default function Page() {
  return (
    <ToolLayout toolId="yes-no-picker" title="Yes / No Generator" description="Get a random Yes or No answer when you cannot decide.">
      <YesNoPicker />
    </ToolLayout>
  );
}
