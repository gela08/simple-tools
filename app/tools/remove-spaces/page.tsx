import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RemoveSpaces from "@/components/tools/RemoveSpaces";

export const metadata: Metadata = {
  title: "Remove Extra Spaces",
<<<<<<< HEAD
  description: "Clean up messy text by removing extra whitespace. Trim and deduplicate spaces in one click.",
=======
  description:
    "Remove duplicate spaces, trailing whitespace, and blank lines from any text. Clean up messy copy-pasted content instantly.",
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
};

export default function RemoveSpacesPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="remove-spaces"
      title="Remove Extra Spaces"
      description="Clean up messy text by removing extra whitespace. Trim and deduplicate spaces in one click."
    >
      <RemoveSpaces />
    </ToolLayout>
=======
    <div className="select-none">
      <ToolLayout
        toolId="remove-spaces"
        title="Remove Extra Spaces"
        description="Clean up duplicate spaces, trailing whitespace, and blank lines from any text."
      >
        <RemoveSpaces />
      </ToolLayout>
    </div>

>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
  );
}
