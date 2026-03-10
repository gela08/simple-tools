import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import YesNoPicker from "@/components/tools/YesNoPicker";

export const metadata: Metadata = {
<<<<<<< HEAD
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
=======
  title: "Yes / No Generator",
  description: "Get a random Yes or No answer when you cannot decide.",
};

export default function Page() {
  return (
    <ToolLayout toolId="yes-no-picker" title="Yes / No Generator" description="Get a random Yes or No answer when you cannot decide.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      <YesNoPicker />
    </ToolLayout>
  );
}
