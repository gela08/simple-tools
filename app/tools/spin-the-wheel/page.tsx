import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import SpinTheWheel from "@/components/tools/SpinTheWheel";

export const metadata: Metadata = {
  title: "Spin the Wheel",
<<<<<<< HEAD
  description: "Build a custom spinning wheel with your own options. Perfect for games and classroom picks.",
};

export default function SpinTheWheelPage() {
  return (
    <ToolLayout
      toolId="spin-the-wheel"
      title="Spin the Wheel"
      description="Build a custom spinning wheel with your own options. Perfect for games and classroom picks."
    >
=======
  description: "Add custom options and spin a wheel to pick one at random.",
};

export default function Page() {
  return (
    <ToolLayout toolId="spin-the-wheel" title="Spin the Wheel" description="Add custom options and spin a wheel to pick one at random.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      <SpinTheWheel />
    </ToolLayout>
  );
}
