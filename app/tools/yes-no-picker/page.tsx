import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import YesNoPicker from "@/components/tools/YesNoPicker";

export const metadata: Metadata = {
  title: "Yes or No Generator",
  description: "Get a random Yes or No answer when you cannot decide. Clean, instant, and oddly satisfying.",
};

export default function YesNoPickerPage() {
  return (
    <ToolLayout
      toolId="yes-no-picker"
      title="Yes or No Generator"
      description="Get a random Yes or No answer when you cannot decide. Clean, instant, and oddly satisfying."
    >
      <YesNoPicker />
    </ToolLayout>
  );
}
