"use client";

import Image from "next/image";
import { useState } from "react";

import { ChannelBadge } from "@/components/ui/ChannelBadge";
import type { ChannelExecution } from "@/lib/types";

type ChannelEvidenceProps = {
  blocks: ChannelExecution[];
};

export function ChannelEvidence({ blocks }: ChannelEvidenceProps) {
  return (
    <div className="space-y-20">
      {blocks.map((block) => (
        <ChannelBlock key={block.channel} block={block} />
      ))}
    </div>
  );
}

function ChannelBlock({ block }: { block: ChannelExecution }) {
  const [expanded, setExpanded] = useState(false);
  const primaryShot = block.screenshots[0];
  const extraShots = block.screenshots.slice(1);
  const hasExtra = extraShots.length > 0;

  return (
    <div id={`channel-${block.channel}`} className="scroll-mt-28">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <ChannelBadge channel={block.channel} size="sm" />
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              {block.tier}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="font-heading text-lg font-semibold text-foreground">
            {block.metric.value}
          </p>
          <p className="mt-1 font-mono text-xs text-muted">{block.metric.label}</p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {primaryShot ? (
          <figure className="overflow-hidden border border-border">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={primaryShot.src}
                alt={primaryShot.caption}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 768px"
                priority
              />
            </div>
            <figcaption className="border-t border-border px-6 py-4 font-mono text-xs text-muted">
              {primaryShot.caption}
            </figcaption>
          </figure>
        ) : null}

        {hasExtra && expanded ? (
          <>
            {extraShots.map((shot) => (
              <figure key={shot.src} className="overflow-hidden border border-border">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 768px"
                  />
                </div>
                <figcaption className="border-t border-border px-6 py-4 font-mono text-xs text-muted">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </>
        ) : null}

        {hasExtra ? (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
          >
            {expanded
              ? "Hide extra screenshots"
              : `Show ${extraShots.length} more screenshot${extraShots.length > 1 ? "s" : ""}`}
          </button>
        ) : null}
      </div>

      <ul className="prose-list mt-6 space-y-3">
        {block.highlights.map((item) => (
          <li key={item} className="text-base leading-relaxed text-prose">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
