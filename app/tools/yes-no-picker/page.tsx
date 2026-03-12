import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import YesNoPicker from "@/components/tools/YesNoPicker";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Yes or No Generator",
  description: "Get a random Yes or No answer when you cannot decide. Clean, instant, and oddly satisfying.",
=======
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
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function YesNoPickerPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="yes-no-picker"
      title="Yes or No Generator"
      description="Get a random Yes or No answer when you cannot decide. Clean, instant, and oddly satisfying."
    >
=======
    <ToolLayout toolId="yes-no-picker" title="Yes / No Generator" description="Get a random Yes or No answer when you cannot decide.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <YesNoPicker />
    </ToolLayout>
  );
}
