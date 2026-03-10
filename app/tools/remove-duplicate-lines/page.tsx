import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RemoveDuplicateLines from "@/components/tools/RemoveDuplicateLines";

export const metadata: Metadata = {
  title: "Remove Duplicate Lines",
  description: "Remove repeated lines from any list instantly. Perfect for email lists and keyword sets.",
};

export default function RemoveDuplicateLinesPage() {
  return (
    <ToolLayout
      toolId="remove-duplicate-lines"
      title="Remove Duplicate Lines"
      description="Remove repeated lines from any list instantly. Perfect for email lists and keyword sets."
    >
      <RemoveDuplicateLines />
    </ToolLayout>
  );
}
