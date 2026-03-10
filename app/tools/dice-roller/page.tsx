import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import DiceRoller from "@/components/tools/DiceRoller";

export const metadata: Metadata = {
  title: "Dice Roller",
<<<<<<< HEAD
  description: "Roll classic d6 or customize with d4, d8, d10, d12, d20, and d100. Roll multiple dice at once.",
};

export default function DiceRollerPage() {
  return (
    <ToolLayout
      toolId="dice-roller"
      title="Dice Roller"
      description="Roll classic d6 or customize with d4, d8, d10, d12, d20, and d100. Roll multiple dice at once."
    >
=======
  description: "Roll any number of dice with any number of sides.",
};

export default function Page() {
  return (
    <ToolLayout toolId="dice-roller" title="Dice Roller" description="Roll any number of dice with any number of sides.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      <DiceRoller />
    </ToolLayout>
  );
}
