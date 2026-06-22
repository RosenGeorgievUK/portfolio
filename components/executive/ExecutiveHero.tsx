import Link from "next/link";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function ExecutiveHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-32">
      <SectionLabel>
        {siteConfig.title} · {siteConfig.location}
      </SectionLabel>
      <h1 className="mt-6 font-heading text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
        {siteConfig.name.split(" ")[0]}
      </h1>
      <p className="prose prose-lg mt-8 max-w-2xl text-prose md:text-xl">
        {siteConfig.tagline}
      </p>
      <p className="prose mt-4 max-w-2xl text-prose">
        {siteConfig.elevatorPitch}
      </p>

      <div className="mt-16 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4">
        {siteConfig.headlineMetrics.map((metric) => (
          <div key={metric.label} className="bg-background px-6 py-8">
            <p className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              {metric.value}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-6">
        <Link
          href="/work"
          className="text-sm text-foreground underline underline-offset-4 hover:text-muted"
        >
          View selected work
        </Link>
        <Link
          href="/contact"
          className="text-sm text-muted hover:text-foreground"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
