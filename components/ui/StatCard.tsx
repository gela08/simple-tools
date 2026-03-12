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
          ? "bg-brand/8 ring-1 ring-brand/20"
          : "bg-surface-muted"
      }`}
    >
      <div
        className={`stat-number text-2xl font-bold ${
          highlight ? "text-brand" : "text-ink"
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
