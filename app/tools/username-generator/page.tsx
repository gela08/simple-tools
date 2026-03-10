import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import UsernameGenerator from "@/components/tools/UsernameGenerator";

export const metadata: Metadata = {
  title: "Username Generator",
  description:
    "Generate creative, unique usernames for social media, gaming, and developer profiles. Choose from fun, professional, or gamer styles.",
};

export default function UsernameGeneratorPage() {
  return (
    <div className="select-none">
      <ToolLayout
        toolId="username-generator"
        title="Username Generator"
        description="Generate unique, creative usernames for any platform. Choose your style and regenerate as many times as you like."
      >
        <UsernameGenerator />
      </ToolLayout>
    </div>

  );
}
