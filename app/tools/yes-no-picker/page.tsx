import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import YesNoPicker from "@/components/tools/YesNoPicker";

export const metadata: Metadata = {
  title: "Yes or No Generator — Instant Decision Maker",
  description:
    "Can't decide? Get a random Yes or No answer instantly. A clean, fair, and oddly satisfying tool for quick decision making.",
  keywords: [
    "yes or no generator",
    "random decision maker",
    "pick yes or no",
    "coin flip alternative",
    "random answer tool",
  ],
};

export default function YesNoPickerPage() {
  return (
    <ToolLayout
      toolId="yes-no-picker"
      title="Yes or No Generator"
      description="Stop overthinking and let fate decide. Whether it's a small choice or just for fun, get a clear Yes or No answer in one click."
      howTo={[
        { 
          step: "Think of your question", 
          detail: "Focus on a binary choice or a question that can be answered with a simple Yes or No." 
        },
        { 
          step: "Click the generator", 
          detail: "Press the button to trigger our fair randomization algorithm." 
        },
        { 
          step: "Get your answer", 
          detail: "Your result is revealed instantly. If you're still not sure, you can always try one more time." 
        },
      ]}
    >
      <div className="mx-auto max-w-xl">
        <YesNoPicker />
      </div>
    </ToolLayout>
  );
}