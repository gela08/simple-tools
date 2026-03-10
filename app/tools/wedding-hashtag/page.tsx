import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import WeddingHashtagGenerator from "@/components/tools/WeddingHashtagGenerator";

export const metadata: Metadata = {
  title: "Wedding Hashtag Generator",
  description: "Generate cute and creative wedding hashtags for couples.",
};

export default function Page() {
  return (
    <ToolLayout toolId="wedding-hashtag" title="Wedding Hashtag Generator" description="Generate cute and creative wedding hashtags for couples.">
      <WeddingHashtagGenerator />
    </ToolLayout>
  );
}
