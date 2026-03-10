import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RandomNumberGenerator from "@/components/tools/RandomNumberGenerator";

export const metadata: Metadata = {
  title: "Random Number Generator",
  description: "Generate random numbers in any custom range.",
};

export default function Page() {
  return (
    <ToolLayout toolId="random-number" title="Random Number Generator" description="Generate random numbers in any custom range.">
      <RandomNumberGenerator />
    </ToolLayout>
  );
}
