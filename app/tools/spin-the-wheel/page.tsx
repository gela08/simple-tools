import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import SpinTheWheel from "@/components/tools/SpinTheWheel";

export const metadata: Metadata = {
  title: "Spin the Wheel — Custom Random Decision Maker",
  description:
    "Create a custom spinning wheel with your own choices. A fun, interactive way to pick winners, make random decisions, or engage students in the classroom.",
  keywords: [
    "spin the wheel",
    "random wheel picker",
    "decision wheel online",
    "custom prize wheel",
    "classroom spinner",
    "wheel of names",
  ],
};

export default function SpinTheWheelPage() {
  return (
    <ToolLayout
      toolId="spin-the-wheel"
      title="Spin the Wheel"
      description="Need a fair way to decide? Add your custom options to the wheel and give it a spin! Perfect for giveaways, choosing who goes first, or making daily choices fun."
      howTo={[
        { 
          step: "Add your choices", 
          detail: "Enter your options or names into the list. Each entry will become a colorful segment on the wheel." 
        },
        { 
          step: "Spin to win", 
          detail: "Click the 'Spin' button to set the wheel in motion. Our physics-based animation ensures a fair and random result." 
        },
        { 
          step: "Celebrate the result", 
          detail: "The wheel will slow down and land on a winner. You can remove the winning option or spin again immediately." 
        },
      ]}
    >
      <div className="mx-auto max-w-4xl">
        <SpinTheWheel />
      </div>
    </ToolLayout>
  );
}