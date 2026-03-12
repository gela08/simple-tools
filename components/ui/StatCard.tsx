import { formatNumber } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: number;
  highlight?: boolean;
}

export default function StatCard({ label, value, highlight }: StatCardProps) {
  return (
    <div
      className={`rounded-xl p-4 text-center ${
        highlight
<<<<<<< HEAD
          ? "bg-brand/8 ring-1 ring-brand/20"
=======
<<<<<<< HEAD
          ? "bg-brand/8 ring-1 ring-brand/20"
=======
          ? "bg-brand-orange/8 ring-1 ring-brand-orange/20"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
          : "bg-surface-muted"
      }`}
    >
      <div
        className={`stat-number text-2xl font-bold ${
<<<<<<< HEAD
          highlight ? "text-brand" : "text-ink"
=======
<<<<<<< HEAD
          highlight ? "text-brand" : "text-ink"
=======
          highlight ? "text-brand-orange" : "text-ink"
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
        }`}
      >
        {formatNumber(value)}
      </div>
      <div className="mt-0.5 text-xs font-medium uppercase tracking-wide text-ink-subtle">
        {label}
      </div>
    </div>
  );
}
