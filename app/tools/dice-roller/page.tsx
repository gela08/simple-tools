"use client";
import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import DiceRoller from "@/components/tools/DiceRoller";

// Note: If this is a Client Component, move Metadata to a separate 
// 'layout.tsx' or remove the 'use client' from this page and 
// only keep it in the DiceRoller component itself.

export default function DiceRollerPage() {
  return (
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
      <DiceRoller />
    </ToolLayout>
  );
}