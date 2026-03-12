import Link from "next/link";
import { CheckCircle2, Home, ArrowLeft } from "lucide-react";

export default function ContactSuccess() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-500 animate-in zoom-in duration-500">
                <CheckCircle2 size={40} />
            </div>

            <h1 className="font-display text-3xl font-black text-ink">Message Received!</h1>
            <p className="mt-4 max-w-xs text-ink-muted leading-relaxed">
                I've got your feedback. I usually respond to inquiries within 1-3 business days.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                    href="/"
                    className="group flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-xl shadow-brand/20 transition-all hover:scale-[1.02]"
                >
                    <Home size={18} />
                    Back to Home
                </Link>
                <Link
                    href="/tools"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface-card px-6 py-3 text-sm font-bold text-ink transition-all hover:bg-surface-muted"
                >
                    <ArrowLeft size={18} />
                    Keep Browsing
                </Link>
            </div>
        </div>
    );
}