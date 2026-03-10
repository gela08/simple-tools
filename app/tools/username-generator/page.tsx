import type { Metadata } from "next";
import ToolLayout from "@/components/layout/ToolLayout";
import UsernameGenerator from "@/components/tools/UsernameGenerator";

export const metadata: Metadata = {
  title: "Username Generator",
  description:
<<<<<<< HEAD
    "Generate creative, unique usernames for any platform. Choose from cute, gaming, aesthetic, funny, professional, and witty Filipino styles.",
=======
    "Generate creative, unique usernames for social media, gaming, and developer profiles. Choose from fun, professional, or gamer styles.",
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
};

export default function UsernameGeneratorPage() {
  return (
<<<<<<< HEAD
    <ToolLayout
      toolId="username-generator"
      title="Username Generator"
      description="Create unique, creative usernames for social media, gaming, or any platform. Supports 8 styles including Witty Filipino."
      howTo={[
        { step: "Enter a name or keyword (optional)", detail: "Your name, nickname, or a theme word to personalize the output." },
        { step: "Choose a style", detail: "Pick from Cute, Aesthetic, Gaming, Clean, Professional, Funny, Witty English, or Witty Filipino." },
        { step: "Click Generate Usernames", detail: "Get 12 unique username ideas instantly." },
        { step: "Click to copy", detail: "Click any username to copy it to your clipboard." },
        { step: "Generate more", detail: "Hit Generate more for a fresh batch anytime." },
      ]}
    >
      <UsernameGenerator />
    </ToolLayout>
=======
    <div className="select-none">
      <ToolLayout
        toolId="username-generator"
        title="Username Generator"
        description="Generate unique, creative usernames for any platform. Choose your style and regenerate as many times as you like."
      >
        <UsernameGenerator />
      </ToolLayout>
    </div>

>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
  );
}
