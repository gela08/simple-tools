import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import SpinTheWheel from "@/components/tools/SpinTheWheel";

export const metadata: Metadata = {
  title: "Spin the Wheel",
  description: "Add custom options and spin a wheel to pick one at random.",
};

export default function Page() {
  return (
    <ToolLayout toolId="spin-the-wheel" title="Spin the Wheel" description="Add custom options and spin a wheel to pick one at random.">
      <SpinTheWheel />
    </ToolLayout>
  );
}
