import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PasswordStrengthChecker from "@/components/tools/PasswordStrengthChecker";

export const metadata: Metadata = {
  title: "Password Strength Checker — Instant Entropy Analysis",
  description:
    "Check how strong your password is. Our tool analyzes length, character variety, common patterns, and entropy. 100% private and runs entirely in your browser.",
  keywords: [
    "password strength checker",
    "password entropy calculator",
    "secure password tester",
    "check password safety",
    "password security analyzer",
  ],
};

export default function PasswordStrengthPage() {
  return (
    <ToolLayout
      toolId="password-strength"
      title="Password Strength Checker"
      description="Analyze your password security instantly. We check for length, complexity, and common patterns to ensure your accounts stay protected. No data is ever sent to a server."
      howTo={[
        { 
          step: "Enter your password", 
          detail: "Type or paste the password you want to analyze into the secure input field." 
        },
        { 
          step: "Check the strength meter", 
          detail: "Watch the real-time indicator move from Weak to Strong as you add complexity." 
        },
        { 
          step: "Review security tips", 
          detail: "Follow our automated suggestions to improve your password's entropy and resistance to brute-force attacks." 
        },
      ]}
    >
      <div className="mx-auto max-w-2xl">
        <PasswordStrengthChecker />
      </div>
    </ToolLayout>
  );
}