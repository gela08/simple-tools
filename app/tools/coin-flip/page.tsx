import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import CoinFlip from "@/components/tools/CoinFlip";

export const metadata: Metadata = {
  title: "Coin Flip",
  description: "Flip a virtual coin and get heads or tails instantly.",
};

export default function Page() {
  return (
    <ToolLayout toolId="coin-flip" title="Coin Flip" description="Flip a virtual coin and get heads or tails instantly.">
      <CoinFlip />
    </ToolLayout>
  );
}
