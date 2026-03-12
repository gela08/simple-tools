import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import SpinTheWheel from "@/components/tools/SpinTheWheel";

export const metadata: Metadata = {
  title: "Spin the Wheel",
  description: "Build a custom spinning wheel with your own options. Perfect for games and classroom picks.",
};

export default function SpinTheWheelPage() {
  return (
    <ToolLayout
      toolId="spin-the-wheel"
      title="Spin the Wheel"
      description="Build a custom spinning wheel with your own options. Perfect for games and classroom picks."
    >
      <SpinTheWheel />
    </ToolLayout>
  );
}
