import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function ImpactMetrics() {
  const programmes = [...new Set(siteConfig.impactStats.map((stat) => stat.programme ?? "Other"))];

  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Impact</SectionLabel>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
          Outcomes by programme
        </h2>
        <p className="prose mt-4 max-w-2xl text-prose">
          Each block is one employer or project — not blended totals.
        </p>

        <div className="mt-16 space-y-12">
          {programmes.map((programme) => {
            const stats = siteConfig.impactStats.filter(
              (stat) => (stat.programme ?? "Other") === programme,
            );

            return (
              <div key={programme}>
                <p className="label mb-6">{programme}</p>
                <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-background p-8">
                      <p className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
                      {stat.detail ? (
                        <p className="mt-2 text-xs leading-relaxed text-muted">{stat.detail}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
