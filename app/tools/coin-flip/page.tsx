import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CoinFlip from "@/components/tools/CoinFlip";

export const metadata: Metadata = {
  title: "Coin Flip",
<<<<<<< HEAD
  description: "Flip a virtual coin — heads or tails decided instantly. Tracks your flip history.",
=======
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
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function CoinFlipPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="coin-flip"
      title="Coin Flip"
      description="Flip a virtual coin — heads or tails decided instantly. Tracks your flip history."
    >
=======
    <ToolLayout toolId="coin-flip" title="Coin Flip" description="Flip a virtual coin and get heads or tails instantly.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <CoinFlip />
    </ToolLayout>
  );
}
