import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { getFeaturedCaseStudies } from "@/lib/case-studies";

export function SelectedWork() {
  const studies = getFeaturedCaseStudies().slice(0, 3);

  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              Selected work
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
              Verified programmes
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden text-sm text-muted hover:text-foreground md:inline-flex md:items-center md:gap-1"
          >
            All projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-px border border-border bg-border">
          {studies.map((study, index) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-surface md:flex-row md:items-center md:justify-between md:p-10"
            >
              <div className="flex flex-1 items-start gap-6">
                <span className="font-mono text-sm text-accent-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-xl font-medium text-foreground group-hover:text-muted md:text-2xl">
                    {study.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                    {study.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.channels.map((channel) => (
                      <ChannelBadge key={channel} channel={channel} size="sm" />
                    ))}
                  </div>
                </div>
                {study.coverImage ? (
                  <div className="relative hidden h-24 w-40 shrink-0 overflow-hidden border border-border md:block">
                    <Image
                      src={study.coverImage}
                      alt={`${study.title} screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="160px"
                    />
                  </div>
                ) : null}
              </div>
              <div className="flex shrink-0 gap-8 pl-12 md:pl-0">
                {study.headlineMetrics.map((metric) => (
                  <div key={metric.label} className="text-right">
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {metric.label}
                    </p>
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
