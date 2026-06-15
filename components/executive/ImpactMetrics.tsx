import { siteConfig } from "@/lib/site";

export function ImpactMetrics() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Impact
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
          Measurable outcomes
        </h2>

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.impactStats.map((stat) => (
            <div key={stat.label} className="bg-background p-8">
              <p className="font-heading text-3xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {stat.label}
              </p>
              {stat.detail ? (
                <p className="mt-1 text-xs text-muted">{stat.detail}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
