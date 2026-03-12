import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PasswordGenerator from "@/components/tools/PasswordGenerator";

export const metadata: Metadata = {
  title: "Password Generator",
<<<<<<< HEAD
  description:
    "Generate strong, secure, random passwords instantly. Customizable length and character sets. Runs entirely in your browser.",
=======
<<<<<<< HEAD
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
=======
  description: "Generate strong, secure, random passwords instantly.",
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
};

export default function PasswordGeneratorPage() {
  return (
<<<<<<< HEAD
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
=======
    <ToolLayout toolId="password-generator" title="Password Generator" description="Generate strong, secure, random passwords instantly.">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      <PasswordGenerator />
    </ToolLayout>
  );
}
