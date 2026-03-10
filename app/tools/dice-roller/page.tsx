import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import DiceRoller from "@/components/tools/DiceRoller";

export const metadata: Metadata = {
  title: "Dice Roller",
  description: "Roll any number of dice with any number of sides.",
};

export default function Page() {
  return (
    <ToolLayout toolId="dice-roller" title="Dice Roller" description="Roll any number of dice with any number of sides.">
      <DiceRoller />
    </ToolLayout>
  );
}
