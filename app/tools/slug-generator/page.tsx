import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import SlugGenerator from "@/components/tools/SlugGenerator";

export const metadata: Metadata = {
  title: "Slug Generator",
<<<<<<< HEAD
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
=======
  description: "Convert any title or text into a clean URL-friendly slug.",
};

export default function Page() {
  return (
    <ToolLayout toolId="slug-generator" title="Slug Generator" description="Convert any title or text into a clean URL-friendly slug.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      <SlugGenerator />
    </ToolLayout>
  );
}
