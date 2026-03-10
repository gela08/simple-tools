import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CoinFlip from "@/components/tools/CoinFlip";

export const metadata: Metadata = {
  title: "Coin Flip",
<<<<<<< HEAD
  description: "Flip a virtual coin — heads or tails decided instantly. Tracks your flip history.",
};

export default function CoinFlipPage() {
  return (
    <ToolLayout
      toolId="coin-flip"
      title="Coin Flip"
      description="Flip a virtual coin — heads or tails decided instantly. Tracks your flip history."
    >
=======
  description: "Flip a virtual coin and get heads or tails instantly.",
};

export default function Page() {
  return (
    <ToolLayout toolId="coin-flip" title="Coin Flip" description="Flip a virtual coin and get heads or tails instantly.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      <CoinFlip />
    </ToolLayout>
  );
}
