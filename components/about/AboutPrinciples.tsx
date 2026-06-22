import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function AboutPrinciples() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>How I operate</SectionLabel>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
          Principles behind the work
        </h2>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
          {siteConfig.aboutPrinciples.map((principle, index) => (
            <div key={principle.title} className="bg-background p-8 md:p-10">
              <p className="font-mono text-xs text-accent-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-heading text-lg font-medium text-foreground">
                {principle.title}
              </h3>
              <p className="prose mt-4 text-prose">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
