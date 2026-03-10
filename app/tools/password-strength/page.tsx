import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PasswordStrengthChecker from "@/components/tools/PasswordStrengthChecker";

export const metadata: Metadata = {
  title: "Password Strength Checker",
  description:
    "Check how strong your password is. Analyzes length, character variety, and common patterns. Runs 100% in your browser.",
};

export default function PasswordStrengthPage() {
  return (
    <ToolLayout
      toolId="password-strength"
      title="Password Strength Checker"
      description="Analyze password strength — checks length, character variety, common patterns, and entropy. Runs 100% in your browser."
      howTo={[
        { step: "Type or paste your password", detail: "Enter the password you want to check in the field." },
        { step: "See the strength score", detail: "The meter updates instantly showing Weak, Fair, Good, or Strong." },
        { step: "Read the suggestions", detail: "Improvement tips are shown below the meter to help you strengthen it." },
      ]}
    >
      <PasswordStrengthChecker />
    </ToolLayout>
  );
}
