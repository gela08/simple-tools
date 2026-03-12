import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import SlugGenerator from "@/components/tools/SlugGenerator";

export const metadata: Metadata = {
  title: "Slug Generator",
  description:
    "Convert any text into a clean, URL-friendly slug. Removes special characters and replaces spaces with dashes.",
};

export default function SlugGeneratorPage() {
  return (
    <ToolLayout
      toolId="slug-generator"
      title="Slug Generator"
      description="Turn any title or phrase into a clean URL slug. Removes special characters, replaces spaces with dashes."
      howTo={[
        { step: "Type or paste your title", detail: "Enter a blog title, page name, or any phrase." },
        { step: "See the slug output", detail: "The clean URL-safe slug appears instantly below." },
        { step: "Copy the slug", detail: "Click Copy to use it in your CMS, blog, or app." },
      ]}
    >
      <SlugGenerator />
    </ToolLayout>
  );
}
