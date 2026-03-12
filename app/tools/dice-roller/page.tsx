"use client";
import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import DiceRoller from "@/components/tools/DiceRoller";

<<<<<<< HEAD
// Note: If this is a Client Component, move Metadata to a separate 
// 'layout.tsx' or remove the 'use client' from this page and 
// only keep it in the DiceRoller component itself.
=======
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
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9

export default function DiceRollerPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="dice-roller"
      title="Dice Roller"
      description="Roll classic d6 or customize with d4, d8, d10, d12, d20, and d100. Roll multiple dice at once."
      howTo={[
        { 
          step: "Choose your die type", 
          detail: "Select from d4, d6, d8, d10, d12, d20, or d100 based on your game's needs." 
        },
        { 
          step: "Select quantity", 
          detail: "Choose how many dice you want to roll at once (from 1 to 6)." 
        },
        { 
          step: "Roll and view results", 
          detail: "Click 'Roll' to see individual results, the total sum, and the average value." 
        },
      ]}
    >
=======
    <ToolLayout toolId="dice-roller" title="Dice Roller" description="Roll any number of dice with any number of sides.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <DiceRoller />
    </ToolLayout>
  );
}