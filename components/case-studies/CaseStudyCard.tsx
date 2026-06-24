import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { CaseStudyCover } from "@/components/case-studies/CaseStudyCover";
import type { CaseStudy } from "@/lib/types";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex h-full flex-col border border-border bg-background transition-colors hover:bg-surface"
    >
      <CaseStudyCover
        title={study.title}
        channels={study.channels}
        className="min-h-36"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {study.channels.map((channel) => (
            <ChannelBadge key={channel} channel={channel} size="sm" />
          ))}
        </div>
        <p className="flex-1 text-sm leading-relaxed text-prose">
          {study.cardSummary ?? study.summary}
        </p>
        <div className="mt-6 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted">{study.role}</p>
          <p className="mt-1 font-mono text-xs text-accent-muted">{study.timeline}</p>
        </div>
        <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.1em] text-foreground">
          Case study
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
