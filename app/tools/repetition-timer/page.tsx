import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RepetitionTimer from "@/components/tools/RepititionTimer"

export const metadata: Metadata = {
  title: "Repetition Timer & Duration Calculator",
  description: "Calculate how long repetitive tasks take, including custom break intervals and estimated finish time.",
};

export default function RepetitionTimerPage() {
  return (
    <ToolLayout
      toolId="repetition-timer"
      title="Repetition Timer"
      description="Calculate how long repetitive tasks take, including custom break intervals and estimated finish time."
    >
      <RepetitionTimer />
    </ToolLayout>
  );
}