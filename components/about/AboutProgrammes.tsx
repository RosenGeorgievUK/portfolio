import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ScreenshotFrame } from "@/components/case-studies/ScreenshotFrame";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getCaseStudyCardSummary } from "@/lib/case-study-display";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { getCoverScreenshot } from "@/lib/screenshots";

export function AboutProgrammes() {
  const studies = getFeaturedCaseStudies();

  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>Verified programmes</SectionLabel>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
              Where the work lives
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
          >
            All case studies
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 space-y-px border border-border bg-border">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group grid gap-6 bg-background p-8 transition-colors hover:bg-surface md:grid-cols-[10rem_1fr_auto] md:items-center md:p-10"
            >
              <ScreenshotFrame
                asset={getCoverScreenshot(study)}
                variant="thumb"
                className="h-24 w-full sm:w-40"
              />
              <div className="min-w-0">
                <h3 className="font-heading text-xl font-medium text-foreground group-hover:text-prose md:text-2xl">
                  {study.title}
                </h3>
                <p className="prose mt-3 line-clamp-2 text-prose">
                  {getCaseStudyCardSummary(study)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.channels.map((channel) => (
                    <ChannelBadge key={channel} channel={channel} size="sm" />
                  ))}
                </div>
              </div>
              <div className="flex gap-8 md:justify-end">
                {study.headlineMetrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="text-right">
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
