import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import UnitConverter from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "Unit Converter — Instant Length, Weight & Temperature Conversion",
  description:
    "Convert between common length, weight, temperature, and speed units instantly. A fast, free, and comprehensive online unit converter for daily use.",
  keywords: [
    "unit converter",
    "length converter",
    "weight conversion",
    "celsius to fahrenheit",
    "metric to imperial",
    "online converter",
  ],
};

export default function UnitConverterPage() {
  return (
    <ToolLayout
      toolId="unit-converter"
      title="Unit Converter"
      description="Quickly convert between the most-used units including kilometers/miles, kilograms/pounds, centimeters/inches, Celsius/Fahrenheit, and more."
      howTo={[
        { 
          step: "Choose a category", 
          detail: "Select the type of unit you want to convert (Length, Weight, Temperature, or Speed)." 
        },
        { 
          step: "Enter your value", 
          detail: "Type the number you wish to convert into the input field." 
        },
        { 
          step: "Select your units", 
          detail: "Pick your 'from' and 'to' units. The calculation updates instantly as you change them." 
        },
        { 
          step: "Copy the result", 
          detail: "Click the result to copy it to your clipboard for use in your projects or documents." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <UnitConverter />
      </div>
    </ToolLayout>
  );
}