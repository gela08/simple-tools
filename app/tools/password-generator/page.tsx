import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import PasswordGenerator from "@/components/tools/PasswordGenerator";

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Generate strong, secure, random passwords instantly.",
};

export default function Page() {
  return (
    <ToolLayout toolId="password-generator" title="Password Generator" description="Generate strong, secure, random passwords instantly.">
      <PasswordGenerator />
    </ToolLayout>
  );
}
