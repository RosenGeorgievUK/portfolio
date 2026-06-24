import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function AboutExperience() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
          Career
        </h2>

        <div className="mt-12 space-y-px border border-border bg-border">
          {siteConfig.experience.map((role) => (
            <div
              key={role.company}
              className="grid gap-8 bg-background p-8 md:grid-cols-[12rem_1fr] md:p-10"
            >
              <div>
                <p className="font-mono text-xs text-muted">{role.period}</p>
                <p className="mt-4 font-heading text-base font-medium text-foreground">
                  {role.role}
                </p>
                <p className="mt-1 text-sm text-prose">{role.company}</p>
                <p className="mt-3 font-mono text-xs text-accent-muted">{role.scope}</p>
              </div>

              <div>
                <ul className="prose-list space-y-3">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="text-base leading-relaxed text-prose">
                      {highlight}
                    </li>
                  ))}
                </ul>
                {role.caseStudySlug ? (
                  <Link
                    href={`/work/${role.caseStudySlug}`}
                    className="mt-8 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
                  >
                    Read case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
