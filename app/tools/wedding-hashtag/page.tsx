import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import WeddingHashtagGenerator from "@/components/tools/WeddingHashtagGenerator";

export const metadata: Metadata = {
  title: "Wedding Hashtag Generator — Personalized, Witty & Romantic",
  description:
    "Generate personalized wedding hashtags in classic, witty, romantic, minimal, modern, and Filipino-inspired styles. Free, instant, and easy to copy.",
  keywords: [
    "wedding hashtag generator",
    "couple hashtag ideas",
    "personalized wedding hashtags",
    "filipino wedding hashtags",
    "romantic wedding hashtags",
    "witty wedding hashtags",
    "minimal wedding hashtags",
    "modern wedding hashtags",
    "wedding name generator",
    "marriage hashtags",
  ],
};

export default function WeddingHashtagPage() {
  return (
    <ToolLayout
      toolId="wedding-hashtag"
      title="Wedding Hashtag Generator"
      description="Create a memorable hashtag for your special day. From witty and playful to romantic, minimal, classic, and Filipino-inspired, this generator combines your names into stylish hashtag ideas you can instantly copy and use."
      howTo={[
        {
          step: "Choose a style",
          detail:
            "Pick a vibe that fits your celebration — All, Classic, Modern, Witty, Filipino, Romantic, or Minimal.",
        },
        {
          step: "Enter your names",
          detail:
            "Add the couple’s names to generate personalized hashtags. Full names usually create more unique surname-based results, but first names work too.",
        },
        {
          step: "Add a nickname",
          detail:
            "Optional: include a couple nickname for extra custom hashtag ideas.",
        },
        {
          step: "Generate and copy",
          detail:
            "Get a fresh set of hashtag suggestions instantly, then click any tag to copy it.",
        },
      ]}
    >
      <div className="mx-auto max-w-4xl">
        <WeddingHashtagGenerator />
      </div>
    </ToolLayout>
  );
}