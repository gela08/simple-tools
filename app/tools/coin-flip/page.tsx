import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CoinFlip from "@/components/tools/CoinFlip";

export const metadata: Metadata = {
  title: "Coin Flip — Heads or Tails Virtual Flip",
  description:
    "Flip a virtual coin to get heads or tails instantly. Our tool uses a fair random generator and tracks your session history so you can see your results over time.",
  keywords: [
    "coin flip online",
    "heads or tails",
    "virtual coin toss",
    "random decision maker",
    "flip a coin",
  ],
};

export default function CoinFlipPage() {
  return (
    <ToolLayout
      toolId="coin-flip"
      title="Coin Flip"
      description="Can't decide? Flip a virtual coin. It's fast, fair, and perfectly random. We'll even keep track of your heads and tails count for this session."
      howTo={[
        { 
          step: "Flip the coin", 
          detail: "Click the 'Flip Coin' button to trigger the animation and generate a random result." 
        },
        { 
          step: "View the result", 
          detail: "Heads or Tails will be displayed instantly on the screen." 
        },
        { 
          step: "Check your stats", 
          detail: "Scroll down to see your session history and the percentage breakdown of your results." 
        },
      ]}
    >
      <div className="mx-auto max-w-2xl">
        <CoinFlip />
      </div>
    </ToolLayout>
  );
}