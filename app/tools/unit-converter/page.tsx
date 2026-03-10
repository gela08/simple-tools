import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import UnitConverter from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "Unit Converter",
  description: "Convert between length, weight, temperature, and speed units.",
};

export default function Page() {
  return (
    <ToolLayout toolId="unit-converter" title="Unit Converter" description="Convert between length, weight, temperature, and speed units.">
      <UnitConverter />
    </ToolLayout>
  );
}
