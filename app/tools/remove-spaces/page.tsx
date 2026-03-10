import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RemoveSpaces from "@/components/tools/RemoveSpaces";

export const metadata: Metadata = {
  title: "Remove Extra Spaces",
  description:
    "Remove duplicate spaces, trailing whitespace, and blank lines from any text. Clean up messy copy-pasted content instantly.",
};

export default function RemoveSpacesPage() {
  return (
    <div className="select-none">
      <ToolLayout
        toolId="remove-spaces"
        title="Remove Extra Spaces"
        description="Clean up duplicate spaces, trailing whitespace, and blank lines from any text."
      >
        <RemoveSpaces />
      </ToolLayout>
    </div>

  );
}
