import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RemoveDuplicateLines from "@/components/tools/RemoveDuplicateLines";

export const metadata: Metadata = {
  title: "Remove Duplicate Lines",
<<<<<<< HEAD
  description: "Remove repeated lines from any list instantly. Perfect for email lists and keyword sets.",
};

export default function RemoveDuplicateLinesPage() {
  return (
    <ToolLayout
      toolId="remove-duplicate-lines"
      title="Remove Duplicate Lines"
      description="Remove repeated lines from any list instantly. Perfect for email lists and keyword sets."
    >
=======
  description: "Remove repeated lines from any list or block of text in one click.",
};

export default function Page() {
  return (
    <ToolLayout toolId="remove-duplicate-lines" title="Remove Duplicate Lines" description="Remove repeated lines from any list or block of text in one click.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      <RemoveDuplicateLines />
    </ToolLayout>
  );
}
