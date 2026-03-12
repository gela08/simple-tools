import { formatNumber } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: number;
  highlight?: boolean;
}

export default function StatCard({ label, value, highlight }: StatCardProps) {
  return (
    <div
      className={`rounded-xl p-4 text-center transition-all ${
        highlight
          ? "bg-brand/10 ring-1 ring-brand/20 shadow-sm"
          : "bg-surface-muted border border-transparent"
      }`}
    >
      <div
        className={`stat-number text-2xl font-bold tracking-tight ${
          highlight ? "text-brand" : "text-ink"
        }`}
      >
        {formatNumber(value)}
      </div>
      <div className="mt-1 text-[10px] font-black uppercase tracking-widest text-ink-subtle">
        {label}
      </div>
    </div>
  );
}