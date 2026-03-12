import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import UnitConverter from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "Unit Converter",
  description:
    "Convert between common length, weight, and temperature units instantly. Free online unit converter — no signup needed.",
};

export default function UnitConverterPage() {
  return (
    <ToolLayout
      toolId="unit-converter"
      title="Unit Converter"
      description="Quick conversions between the most-used units: km/miles, kg/lbs, cm/inches, Celsius/Fahrenheit, and more."
      howTo={[
        { step: "Choose a category", detail: "Select Length, Weight, or Temperature." },
        { step: "Enter a value", detail: "Type the number you want to convert." },
        { step: "Select the source unit", detail: "Pick the unit you are converting from." },
        { step: "See the result", detail: "The converted value appears instantly." },
      ]}
    >
      <UnitConverter />
    </ToolLayout>
  );
}
