import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PasswordStrengthChecker from "@/components/tools/PasswordStrengthChecker";

export const metadata: Metadata = {
  title: "Password Strength Checker",
  description: "Check how strong your password is with instant analysis.",
};

export default function Page() {
  return (
    <ToolLayout toolId="password-strength" title="Password Strength Checker" description="Check how strong your password is with instant analysis.">
      <PasswordStrengthChecker />
    </ToolLayout>
  );
}
