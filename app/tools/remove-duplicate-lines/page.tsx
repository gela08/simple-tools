import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RemoveDuplicateLines from "@/components/tools/RemoveDuplicateLines";

export const metadata: Metadata = {
  title: "Remove Duplicate Lines",
  description: "Remove repeated lines from any list or block of text in one click.",
};

export default function Page() {
  return (
    <ToolLayout toolId="remove-duplicate-lines" title="Remove Duplicate Lines" description="Remove repeated lines from any list or block of text in one click.">
      <RemoveDuplicateLines />
    </ToolLayout>
  );
}
