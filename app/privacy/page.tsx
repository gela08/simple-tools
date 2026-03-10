import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Simple Tools Hub privacy policy — we don't collect your data. All processing happens in your browser.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-ink-subtle">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-ink-muted">
        {/* TL;DR */}
        <div className="rounded-2xl bg-green-50 p-5 ring-1 ring-green-200">
          <h2 className="font-display font-bold text-green-800">
            TL;DR — The short version
          </h2>
          <p className="mt-1 text-green-700">
            We do not collect your text, usage data, or personal information.
            All tools run in your browser. Nothing is sent to our servers.
          </p>
        </div>

        {/* Sections */}
        {[
          {
            title: "1. Data We Collect",
            body: "We do not collect any personal data. We do not store, log, or transmit any text you enter into our tools. All processing happens locally in your browser using JavaScript.",
          },
          {
            title: "2. Cookies",
            body: "We do not use cookies for tracking or advertising. We may use a single anonymous session cookie for basic functionality, but it contains no personal information.",
          },
          {
            title: "3. Analytics",
            body: "We do not use Google Analytics, Facebook Pixel, or any other behavioral tracking tools. We may use minimal, privacy-respecting server-side analytics (e.g., page view counts only) that do not track individual users.",
          },
          {
            title: "4. Third-Party Services",
            body: "We do not integrate with any third-party advertising networks or data brokers. Fonts are loaded from Google Fonts via the Next.js font optimization system, which may log an IP address on the initial load — but these are not tied to your tool usage.",
          },
          {
            title: "5. Your Data",
            body: "Since we don't collect your data, there is nothing to delete or export. You have full control over everything you enter into our tools.",
          },
          {
            title: "6. Changes to This Policy",
            body: "If we ever change this policy in a meaningful way, we will update this page. The date at the top of this page reflects when the policy was last updated.",
          },
          {
            title: "7. Contact",
            body: "If you have questions about this privacy policy, you can reach us through the About page.",
          },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-base font-bold text-ink">
              {section.title}
            </h2>
            <p className="mt-2">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
