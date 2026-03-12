import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PasswordGenerator from "@/components/tools/PasswordGenerator";

export const metadata: Metadata = {
  title: "Password Generator — Secure, Random & Private",
  description:
    "Generate strong, secure passwords instantly with customizable length and character sets. Created locally in your browser—your passwords are never sent to a server.",
  keywords: [
    "password generator",
    "secure password",
    "random password creator",
    "strong password tool",
    "offline password generator",
  ],
};

export default function PasswordGeneratorPage() {
  return (
    <ToolLayout
      toolId="password-generator"
      title="Password Generator"
      description="Create strong, random passwords with customizable length and character types. All generated locally on your device — safe, secure, and private."
      howTo={[
        { 
          step: "Set the password length", 
          detail: "Use the slider or input field to choose how long your password should be (we recommend at least 16 characters)." 
        },
        { 
          step: "Choose character types", 
          detail: "Toggle uppercase letters, lowercase letters, numbers, and symbols to meet your security requirements." 
        },
        { 
          step: "Generate and Copy", 
          detail: "Click 'Generate' to create a new password and use the 'Copy' button to move it to your clipboard securely." 
        },
      ]}
    >
      <div className="mx-auto max-w-2xl">
        <PasswordGenerator />
      </div>
    </ToolLayout>
  );
}