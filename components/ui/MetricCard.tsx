import { cn } from "@/lib/utils";

type MetricCardProps = {
  value: string;
  label: string;
  change?: string;
  className?: string;
};

export function MetricCard({ value, label, change, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "border border-border bg-background p-6",
        className,
      )}
    >
      <p className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
      {change ? (
        <span className="mt-3 inline-flex border border-border px-2.5 py-1 text-xs font-medium text-foreground">
          {change}
        </span>
      ) : null}
    </div>
  );
}
