import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CoinFlip from "@/components/tools/CoinFlip";

export const metadata: Metadata = {
  title: "Coin Flip",
  description: "Flip a virtual coin — heads or tails decided instantly. Tracks your flip history.",
};

export default function CoinFlipPage() {
  return (
    <ToolLayout
      toolId="coin-flip"
      title="Coin Flip"
      description="Flip a virtual coin — heads or tails decided instantly. Tracks your flip history."
    >
      <CoinFlip />
    </ToolLayout>
  );
}
