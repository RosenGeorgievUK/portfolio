"use client";

import Image from "next/image";
import { useState } from "react";

import type { ScreenshotAsset } from "@/lib/types";
import { isScreenshotNeeded } from "@/lib/screenshots";
import { cn } from "@/lib/utils";

type ScreenshotFrameProps = {
  asset: ScreenshotAsset;
  variant?: "full" | "thumb";
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function ScreenshotFrame({
  asset,
  variant = "full",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 768px",
  className,
}: ScreenshotFrameProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = isScreenshotNeeded(asset) || failed;

  if (variant === "thumb") {
    if (showPlaceholder) {
      return (
        <div
          className={cn(
            "relative flex h-16 w-28 shrink-0 flex-col items-center justify-center gap-1 border border-dashed border-border bg-surface px-2 text-center",
            className,
          )}
        >
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
            Capture
          </span>
          <span className="line-clamp-2 font-mono text-[8px] leading-tight text-accent-muted">
            {asset.filename}
          </span>
        </div>
      );
    }

    return (
      <div
        className={cn(
          "relative h-16 w-28 shrink-0 overflow-hidden border border-border",
          className,
        )}
      >
        <Image
          src={asset.src!}
          alt={asset.caption}
          fill
          className="object-cover object-top"
          sizes="112px"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  if (showPlaceholder) {
    return (
      <figure
        className={cn(
          "overflow-hidden border border-dashed border-border bg-surface/40",
          className,
        )}
      >
        <div className="relative flex aspect-[16/9] w-full flex-col justify-center gap-5 p-8 md:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
          <div className="relative space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="label">Screenshot needed</span>
              {asset.slot ? (
                <span className="font-mono text-xs text-accent-muted">{asset.slot}</span>
              ) : null}
            </div>
            <p className="font-heading text-xl font-medium text-foreground md:text-2xl">
              {asset.caption}
            </p>
            <p className="prose max-w-none text-prose">{asset.capture}</p>
            <div className="border border-border bg-background px-4 py-3">
              <p className="label mb-2">Save as</p>
              <code className="block font-mono text-xs text-foreground">
                public/images/case-studies/{asset.filename}
              </code>
            </div>
          </div>
        </div>
        <figcaption className="border-t border-border px-6 py-4">
          <p className="font-mono text-xs text-muted">{asset.caption}</p>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={cn("overflow-hidden border border-border", className)}>
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={asset.src!}
          alt={asset.caption}
          fill
          className="object-cover object-top"
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
        />
      </div>
      <figcaption className="border-t border-border px-6 py-4 font-mono text-xs text-muted">
        {asset.caption}
      </figcaption>
    </figure>
  );
}
