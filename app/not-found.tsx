import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
<<<<<<< HEAD
      <div className="text-6xl font-extrabold text-brand/30 font-display">
=======
      <div className="text-6xl font-extrabold text-brand-orange/30 font-display">
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        404
      </div>
      <h1 className="mt-4 font-display text-2xl font-extrabold text-ink">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-ink-muted">
        This page doesn&apos;t exist. Maybe the tool you&apos;re looking for
        moved?
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/"
<<<<<<< HEAD
          className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark"
=======
          className="rounded-xl bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-orange-dark"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        >
          Go Home
        </Link>
        <Link
          href="/tools"
          className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-surface-muted"
        >
          Browse Tools
        </Link>
      </div>
    </div>
  );
}
