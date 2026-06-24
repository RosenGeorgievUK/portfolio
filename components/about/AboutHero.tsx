import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function AboutHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-32">
      <SectionLabel>
        {siteConfig.title} · {siteConfig.location}
      </SectionLabel>

      <div className="mt-8 grid gap-16 lg:grid-cols-[1fr_22rem] lg:items-start">
        <div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="prose prose-lg mt-8 max-w-2xl text-prose">{siteConfig.tagline}</p>
          <p className="prose mt-5 max-w-2xl text-prose">{siteConfig.aboutLead}</p>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <Link
              href="/work"
              className="text-foreground underline underline-offset-4 hover:text-prose"
            >
              View verified work
            </Link>
            <Link href="/contact" className="text-muted hover:text-foreground">
              Contact
            </Link>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-foreground"
            >
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-foreground"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px border border-border bg-border">
          {siteConfig.headlineMetrics.map((metric) => (
            <div key={`${metric.programme}-${metric.label}`} className="bg-background p-5">
              <p className="font-mono text-[10px] uppercase tracking-wider text-accent-muted">
                {metric.programme}
              </p>
              <p className="mt-2 font-heading text-xl font-semibold text-foreground md:text-2xl">
                {metric.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
