import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import RemoveSpaces from "@/components/tools/RemoveSpaces";

export const metadata: Metadata = {
  title: "Remove Extra Spaces",
<<<<<<< HEAD
  description: "Clean up messy text by removing extra whitespace. Trim and deduplicate spaces in one click.",
=======
<<<<<<< HEAD
  description: "Clean up messy text by removing extra whitespace. Trim and deduplicate spaces in one click.",
=======
  description:
    "Remove duplicate spaces, trailing whitespace, and blank lines from any text. Clean up messy copy-pasted content instantly.",
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function RemoveSpacesPage() {
  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
    <ToolLayout
      toolId="remove-spaces"
      title="Remove Extra Spaces"
      description="Clean up messy text by removing extra whitespace. Trim and deduplicate spaces in one click."
    >
      <RemoveSpaces />
    </ToolLayout>
<<<<<<< HEAD
=======
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
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
  );
}
