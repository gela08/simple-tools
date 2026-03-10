import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import TextReverser from "@/components/tools/TextReverser";

export const metadata: Metadata = {
  title: "Text Reverser",
  description: "Reverse any text character by character or word by word instantly.",
};

export default function Page() {
  return (
    <ToolLayout toolId="text-reverser" title="Text Reverser" description="Reverse any text character by character or word by word instantly.">
      <TextReverser />
    </ToolLayout>
  );
}
