"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { channelLabels } from "@/lib/channels";
import { getAllCaseStudies } from "@/lib/case-studies";
import { PRIMARY_CHANNELS, type Channel } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function WorkIndex() {
  const [filter, setFilter] = useState<Channel | "all">("all");
  const studies = useMemo(() => getAllCaseStudies(), []);

  const filtered =
    filter === "all"
      ? studies
      : studies.filter((s) => s.channels.includes(filter));

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-32">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">Work</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Case studies
      </h1>
      <p className="mt-6 max-w-xl text-base text-muted">
        Revenue programmes across Amazon, TikTok Shop, eBay, Shopify, WooCommerce, and Temu.
      </p>

      <div className="mt-12 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn(
            "border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
            filter === "all"
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted hover:text-foreground",
          )}
        >
          All
        </button>
        {PRIMARY_CHANNELS.map((channel) => (
          <button
            key={channel}
            type="button"
            onClick={() => setFilter(channel)}
            className={cn(
              "border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
              filter === channel
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted hover:text-foreground",
            )}
          >
            {channelLabels[channel]}
          </button>
        ))}
      </div>

      <div className="mt-16 space-y-px border border-border bg-border">
        {filtered.map((study, index) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="group flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-surface md:flex-row md:items-center md:justify-between"
          >
            <div className="flex min-w-0 flex-1 gap-6">
              <span className="font-mono text-sm text-accent-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              {study.coverImage ? (
                <div className="relative hidden h-16 w-28 shrink-0 overflow-hidden border border-border sm:block">
                  <Image
                    src={study.coverImage}
                    alt={`${study.title} screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                </div>
              ) : null}
              <div className="min-w-0">
                <h2 className="font-heading text-lg font-medium text-foreground group-hover:text-muted md:text-xl">
                  {study.title}
                </h2>
                <p className="mt-2 max-w-lg text-sm text-muted">{study.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {study.channels.map((ch) => (
                    <ChannelBadge key={ch} channel={ch} size="sm" />
                  ))}
                </div>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted group-hover:text-foreground" />
          </Link>
        ))}
      </div>
    </section>
  );
}
