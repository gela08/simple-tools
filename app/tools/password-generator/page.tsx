import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PasswordGenerator from "@/components/tools/PasswordGenerator";

export const metadata: Metadata = {
  title: "Password Generator",
  description:
    "Generate strong, secure, random passwords instantly. Customizable length and character sets. Runs entirely in your browser.",
};

export default function PasswordGeneratorPage() {
  return (
    <ToolLayout
      toolId="password-generator"
      title="Password Generator"
      description="Create strong, random passwords with customizable length and character types. All generated locally — never sent anywhere."
      howTo={[
        { step: "Set the password length", detail: "Use the slider or input to choose how long your password should be." },
        { step: "Choose character types", detail: "Toggle uppercase, lowercase, numbers, and symbols as needed." },
        { step: "Click Generate", detail: "A new password appears instantly." },
        { step: "Copy your password", detail: "Click the Copy button to copy it to your clipboard." },
      ]}
    >
      <PasswordGenerator />
    </ToolLayout>
  );
}
