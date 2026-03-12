import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import DiceRoller from "@/components/tools/DiceRoller";

export const metadata: Metadata = {
  title: "Online Dice Roller — Virtual d4, d6, d8, d10, d12, d20",
  description:
    "Roll virtual dice for tabletop games or quick decisions. Support for d4, d6, d8, d10, d12, d20, and d100 with multiple dice totals and average tracking.",
  keywords: [
    "dice roller",
    "online dice",
    "virtual dice",
    "d20 roller",
    "roll a die",
    "dungeons and dragons dice",
  ],
};

export default function DiceRollerPage() {
  return (
    <ToolLayout
      toolId="dice-roller"
      title="Dice Roller"
      description="Roll classic d6 dice or customize your roll with d4, d8, d10, d12, d20, and d100. Roll multiple dice at once and get instant totals for your tabletop games."
      howTo={[
        { 
          step: "Choose your die type", 
          detail: "Select from d4, d6, d8, d10, d12, d20, or d100 based on your game's needs." 
        },
        { 
          step: "Select quantity", 
          detail: "Choose how many dice you want to roll at once (from 1 to 20)." 
        },
        { 
          step: "Roll and view results", 
          detail: "Click 'Roll' to see individual results, the total sum, and the session history." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <DiceRoller />
      </div>
    </ToolLayout>
  );
}