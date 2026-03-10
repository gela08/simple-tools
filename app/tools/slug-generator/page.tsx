import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import SlugGenerator from "@/components/tools/SlugGenerator";

export const metadata: Metadata = {
  title: "Slug Generator",
  description: "Convert any title or text into a clean URL-friendly slug.",
};

export default function Page() {
  return (
    <ToolLayout toolId="slug-generator" title="Slug Generator" description="Convert any title or text into a clean URL-friendly slug.">
      <SlugGenerator />
    </ToolLayout>
  );
}
