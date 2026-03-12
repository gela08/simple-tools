import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RemoveSpaces from "@/components/tools/RemoveSpaces";

export const metadata: Metadata = {
  title: "Remove Extra Spaces",
  description: "Clean up messy text by removing extra whitespace. Trim and deduplicate spaces in one click.",
};

export default function RemoveSpacesPage() {
  return (
    <ToolLayout
      toolId="remove-spaces"
      title="Remove Extra Spaces"
      description="Clean up messy text by removing extra whitespace. Trim and deduplicate spaces in one click."
    >
      <RemoveSpaces />
    </ToolLayout>
  );
}
