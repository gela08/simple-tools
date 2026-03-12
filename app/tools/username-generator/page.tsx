import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import UsernameGenerator from "@/components/tools/UsernameGenerator";

export const metadata: Metadata = {
  title: "Username Generator — Creative & Unique Handle Ideas",
  description:
    "Generate creative, unique usernames for social media, gaming, and professional profiles. Choose from 8 distinct styles, including Aesthetic, Gamer, and Witty Filipino.",
  keywords: [
    "username generator",
    "cool handles",
    "gaming names",
    "social media usernames",
    "filipino username ideas",
    "aesthetic names",
  ],
};

export default function UsernameGeneratorPage() {
  return (
    <ToolLayout
      toolId="username-generator"
      title="Username Generator"
      description="Stand out online with a unique identity. Whether you're looking for something professional, aesthetic, or witty, our generator provides tailored ideas for every platform."
      howTo={[
        { 
          step: "Enter a keyword", 
          detail: "Optional: Type in your name or a favorite word to base your usernames around." 
        },
        { 
          step: "Select your vibe", 
          detail: "Pick from styles like Gaming, Cute, Professional, or our signature Witty Filipino mode." 
        },
        { 
          step: "Generate and browse", 
          detail: "Get a fresh batch of 12 names instantly. Not satisfied? Hit generate again for infinite ideas." 
        },
        { 
          step: "Click to copy", 
          detail: "Found the perfect handle? Just click it to copy it directly to your clipboard." 
        },
      ]}
    >
      <div className="mx-auto max-w-4xl">
        <UsernameGenerator />
      </div>
    </ToolLayout>
  );
}