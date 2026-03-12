import { MessageSquare, Mail, ExternalLink, Github, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Simple Tools Hub team.",
};

export default function ContactPage() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeDicKgt8P8ei_q1ZJRbLuuah-7TKNIGCjMZEYHGvne2Ek9Cw/viewform?embedded=true";

  return (
    <div className="bg-surface-bg min-h-screen">
      {/* ── Hero / Header Section ── */}
      <section className="border-b border-border bg-gradient-to-b from-brand/5 to-surface-bg py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:text-left">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand mb-6">
            <MessageSquare size={24} />
          </div>
          <h1 className="font-display text-4xl font-black tracking-tight text-ink sm:text-6xl">
            Get in <span className="text-brand">touch</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted max-w-2xl">
            Have a suggestion for a new tool or found a bug? Use the form below to reach out. 
            I typically respond within 1-3 business days.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          
          {/* Left: Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-3xl border border-border bg-surface-card p-6 shadow-sm transition-colors hover:border-brand/20">
              <h3 className="font-display font-bold text-ink flex items-center gap-2">
                <Mail size={18} className="text-brand" />
                Direct Email
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                Prefer traditional mail? Drop me a line at:
              </p>
              <p className="mt-1 font-bold text-ink break-all">angelagardan08@gmail.com</p>
            </div>

            <div className="rounded-3xl border border-border bg-surface-muted/30 p-6">
              <h3 className="font-display font-bold text-ink flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-500" />
                Privacy First
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Feedback on existing tools is always prioritized. I read every message personally.
              </p>
            </div>

            {/* Social Links */}
            <div className="px-2 space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-subtle">Follow the Project</h3>
              <div className="flex flex-col gap-3">
                <Link href="https://github.com" className="group flex items-center gap-3 text-sm font-medium text-ink-muted hover:text-brand transition-colors">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-card border border-border group-hover:border-brand/20">
                    <Github size={16} />
                  </span>
                  GitHub
                </Link>
                <Link href="https://akaizer.vercel.app/" className="group flex items-center gap-3 text-sm font-medium text-ink-muted hover:text-brand transition-colors">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-card border border-border group-hover:border-brand/20">
                    <Globe size={16} />
                  </span>
                  Portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-white shadow-2xl shadow-brand/5">
              <iframe
                src={GOOGLE_FORM_URL}
                width="100%"
                height="700"
                className="w-full"
                style={{ border: 0 }}
              >
                Loading…
              </iframe>
              
              <div className="bg-surface-muted/50 px-8 py-4 flex items-center justify-between border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink-subtle">
                    Secure Form Active
                  </span>
                </div>
                <a 
                  href={GOOGLE_FORM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-black uppercase tracking-widest text-brand hover:underline flex items-center gap-1"
                >
                  External View <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}