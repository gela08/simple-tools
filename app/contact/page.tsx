import { MessageSquare, Mail, ExternalLink, Github, Globe } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Simple Tools Hub team.",
};

export default function ContactPage() {
  /**
   * Note: I updated the URL ending to /viewform?embedded=true 
   * This removes the Google Drive UI and makes it look like a clean part of your site.
   */
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeDicKgt8P8ei_q1ZJRbLuuah-7TKNIGCjMZEYHGvne2Ek9Cw/viewform?embedded=true";

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      {/* Header Section */}
      <div className="mb-12 text-center sm:text-left">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand mb-6">
          <MessageSquare size={24} />
        </div>
        <h1 className="font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
          Get in touch
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted max-w-2xl">
          Have a suggestion for a new tool or found a bug? Use the form below to reach out. 
          I typically respond within 1-3 business days.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Left: Quick Info & Socials */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-3xl border border-border bg-surface-card p-6 shadow-sm">
            <h3 className="font-display font-bold text-ink flex items-center gap-2">
              <Mail size={18} className="text-brand" />
              Direct Email
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Prefer traditional mail? Drop me a line at:
            </p>
            <p className="mt-1 font-bold text-ink break-all">angelagardan08@gmail.com</p>
          </div>

          <div className="rounded-3xl border border-border bg-surface-muted/50 p-6">
            <h3 className="font-display font-bold text-ink">Response Time</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              I read every message personally. Feedback on existing tools is always prioritized!
            </p>
          </div>

          {/* Optional: Social Presence */}
          <div className="px-2 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-subtle">Follow the Project</h3>
            <div className="flex flex-col gap-2">
              <Link href="https://github.com" className="flex items-center gap-3 text-sm font-medium text-ink-muted hover:text-brand transition-colors">
                <Github size={18} /> GitHub
              </Link>
              <Link href="https://akaizer.vercel.app/" className="flex items-center gap-3 text-sm font-medium text-ink-muted hover:text-brand transition-colors">
                <Globe size={18} /> Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Google Form Embed */}
        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-xl shadow-brand/5">
            {/* Iframe Container */}
            <iframe
              src={GOOGLE_FORM_URL}
              width="100%"
              height="750"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Loading…
            </iframe>
            
            {/* Subtle Footer for the Embed */}
            <div className="bg-surface-muted px-6 py-4 flex items-center justify-between border-t border-border">
              <span className="text-[10px] font-black uppercase tracking-widest text-ink-subtle">
                Secure Google Form
              </span>
              <a 
                href={GOOGLE_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-widest text-brand hover:underline flex items-center gap-1"
              >
                Open in new tab <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}