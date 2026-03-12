import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import WeddingHashtagGenerator from "@/components/tools/WeddingHashtagGenerator";

export const metadata: Metadata = {
  title: "Wedding Hashtag Generator",
<<<<<<< HEAD
  description:
    "Generate creative, witty, and memorable wedding hashtags for couples. Supports English and Filipino-style hashtag generation. Free and instant.",
=======
<<<<<<< HEAD
  description:
    "Generate creative, witty, and memorable wedding hashtags for couples. Supports English and Filipino-style hashtag generation. Free and instant.",
};

export default function WeddingHashtagPage() {
  return (
    <ToolLayout
      toolId="wedding-hashtag"
      title="Wedding Hashtag Generator"
      description="Generate sweet, witty, and creative wedding hashtags using the couple's names. Supports English and Filipino styles."
      howTo={[
        { step: "Choose a style", detail: "Pick Witty English or Witty Filipino depending on your preferred hashtag tone." },
        { step: "Enter the bride's full name", detail: "First and last name work best for more creative combinations." },
        { step: "Enter the groom's full name", detail: "First and last name, same as above." },
        { step: "Add a couple nickname (optional)", detail: "A shared nickname like EmJay or TaylorMade adds extra personality." },
        { step: "Click Generate Hashtags", detail: "Get 20 creative hashtags instantly. Click Regenerate to get a new set." },
        { step: "Copy your favorites", detail: "Click any hashtag to copy it, or use Copy All to grab the full list." },
      ]}
    >
=======
  description: "Generate cute and creative wedding hashtags for couples.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function WeddingHashtagPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="wedding-hashtag"
      title="Wedding Hashtag Generator"
      description="Generate sweet, witty, and creative wedding hashtags using the couple's names. Supports English and Filipino styles."
      howTo={[
        { step: "Choose a style", detail: "Pick Witty English or Witty Filipino depending on your preferred hashtag tone." },
        { step: "Enter the bride's full name", detail: "First and last name work best for more creative combinations." },
        { step: "Enter the groom's full name", detail: "First and last name, same as above." },
        { step: "Add a couple nickname (optional)", detail: "A shared nickname like EmJay or TaylorMade adds extra personality." },
        { step: "Click Generate Hashtags", detail: "Get 20 creative hashtags instantly. Click Regenerate to get a new set." },
        { step: "Copy your favorites", detail: "Click any hashtag to copy it, or use Copy All to grab the full list." },
      ]}
    >
=======
    <ToolLayout toolId="wedding-hashtag" title="Wedding Hashtag Generator" description="Generate cute and creative wedding hashtags for couples.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <WeddingHashtagGenerator />
    </ToolLayout>
  );
}
