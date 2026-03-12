import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import WeddingHashtagGenerator from "@/components/tools/WeddingHashtagGenerator";

export const metadata: Metadata = {
  title: "Wedding Hashtag Generator — Witty, Sweet & Personalized",
  description:
    "Generate creative, witty, and memorable wedding hashtags for couples. Supports English and Filipino-style hashtag generation. Free, instant, and personalized.",
  keywords: [
    "wedding hashtag generator",
    "couple hashtag ideas",
    "filipino wedding hashtags",
    "witty wedding puns",
    "wedding name generator",
    "marriage hashtags",
  ],
};

export default function WeddingHashtagPage() {
  return (
    <ToolLayout
      toolId="wedding-hashtag"
      title="Wedding Hashtag Generator"
      description="Celebrate your union with the perfect hashtag. From punny and witty to sweet and classic, our generator uses your names to create unique tags for your special day."
      howTo={[
        { 
          step: "Choose a style", 
          detail: "Pick 'Witty English' for puns or 'Witty Filipino' for culturally clever combinations." 
        },
        { 
          step: "Enter your names", 
          detail: "Provide the bride and groom's names. Using full names often yields more unique puns." 
        },
        { 
          step: "Add a nickname", 
          detail: "Optional: Including a shared couple nickname can result in even more personalized hashtags." 
        },
        { 
          step: "Generate and copy", 
          detail: "Get 20 unique ideas instantly. Click any hashtag to copy it to your clipboard." 
        },
      ]}
    >
      <div className="mx-auto max-w-4xl">
        <WeddingHashtagGenerator />
      </div>
    </ToolLayout>
  );
}