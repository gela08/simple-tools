import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import SpinTheWheel from "@/components/tools/SpinTheWheel";

export const metadata: Metadata = {
  title: "Spin the Wheel",
<<<<<<< HEAD
  description: "Build a custom spinning wheel with your own options. Perfect for games and classroom picks.",
=======
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
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function SpinTheWheelPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="spin-the-wheel"
      title="Spin the Wheel"
      description="Build a custom spinning wheel with your own options. Perfect for games and classroom picks."
    >
=======
    <ToolLayout toolId="spin-the-wheel" title="Spin the Wheel" description="Add custom options and spin a wheel to pick one at random.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <SpinTheWheel />
    </ToolLayout>
  );
}
