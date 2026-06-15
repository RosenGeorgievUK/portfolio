import type { CaseStudyResult } from "@/lib/types";

type BeforeAfterBarProps = {
  results: CaseStudyResult[];
};

function parseNumeric(value: string): number | null {
  const cleaned = value.replace(/[^0-9.]/g, "");
  const parsed = Number.parseFloat(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

export function BeforeAfterBar({ results }: BeforeAfterBarProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {results.map((result) => {
        const beforeValue = parseNumeric(result.before);
        const afterValue = parseNumeric(result.after);
        const maxValue =
          beforeValue !== null && afterValue !== null
            ? Math.max(beforeValue, afterValue)
            : null;

        const beforeWidth =
          beforeValue !== null && maxValue
            ? Math.max((beforeValue / maxValue) * 100, 8)
            : 50;
        const afterWidth =
          afterValue !== null && maxValue
            ? Math.max((afterValue / maxValue) * 100, 8)
            : 75;

        return (
          <div
            key={result.label}
            className="border border-border bg-background p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-medium text-foreground">{result.label}</p>
              <span className="shrink-0 border border-border px-2.5 py-1 text-xs font-medium text-foreground">
                {result.change}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-xs text-muted">
                  <span>Before</span>
                  <span>{result.before}</span>
                </div>
                <div className="h-px overflow-hidden bg-border">
                  <div
                    className="h-px bg-muted"
                    style={{ width: `${beforeWidth}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-xs text-muted">
                  <span>After</span>
                  <span className="font-medium text-foreground">
                    {result.after}
                  </span>
                </div>
                <div className="h-px overflow-hidden bg-border">
                  <div
                    className="h-px bg-foreground"
                    style={{ width: `${afterWidth}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
