import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import SlugGenerator from "@/components/tools/SlugGenerator";

export const metadata: Metadata = {
  title: "URL Slug Generator — Create Clean, SEO-Friendly Links",
  description:
    "Convert any title or text into a clean, URL-friendly slug. Automatically removes special characters and replaces spaces with dashes for perfect SEO links.",
  keywords: [
    "slug generator",
    "url slug creator",
    "seo friendly url",
    "text to slug",
    "clean link generator",
    "permalink creator",
  ],
};

export default function SlugGeneratorPage() {
  return (
    <ToolLayout
      toolId="slug-generator"
      title="Slug Generator"
      description="Turn any title or phrase into a clean, URL-safe slug instantly. Perfect for blog posts, product pages, and clean permalink structures."
      howTo={[
        { 
          step: "Type or paste your title", 
          detail: "Enter a blog title, page name, or any phrase you want to convert into a URL." 
        },
        { 
          step: "Review the slug output", 
          detail: "Our tool automatically lowercases the text, removes special characters, and replaces spaces with dashes." 
        },
        { 
          step: "Copy and use", 
          detail: "Click the copy button to use your new slug in your CMS, blog, or application code." 
        },
      ]}
    >
      <div className="mx-auto max-w-3xl">
        <SlugGenerator />
      </div>
    </ToolLayout>
  );
}