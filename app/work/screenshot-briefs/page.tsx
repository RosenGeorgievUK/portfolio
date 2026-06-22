import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ScreenshotFrame } from "@/components/case-studies/ScreenshotFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { collectScreenshotBriefs, isScreenshotNeeded } from "@/lib/screenshots";

export const metadata: Metadata = {
  title: "Screenshot checklist",
  description: "Capture briefs for portfolio case study screenshots.",
  robots: { index: false, follow: false },
};

export default function ScreenshotBriefsPage() {
  const groups = collectScreenshotBriefs();
  const totalNeeded = groups.reduce((sum, group) => sum + group.neededCount, 0);

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Work
      </Link>

      <SectionLabel className="mt-10">Production checklist</SectionLabel>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground">
        Screenshot capture briefs
      </h1>
      <p className="prose mt-6 max-w-2xl text-prose">
        Every slot below shows exactly what to capture and where to save the file. Placeholders
        appear on case study pages until you add the PNG and set{" "}
        <code className="font-mono text-sm text-foreground">status</code> to{" "}
        <code className="font-mono text-sm text-foreground">ready</code> in the JSON.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
        <div className="bg-background p-6">
          <p className="font-heading text-2xl font-semibold text-foreground">{totalNeeded}</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
            Still needed
          </p>
        </div>
        <div className="bg-background p-6">
          <p className="font-heading text-2xl font-semibold text-foreground">
            {groups.length}
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
            Programmes
          </p>
        </div>
        <div className="col-span-2 bg-background p-6 sm:col-span-1">
          <p className="font-heading text-2xl font-semibold text-foreground">
            public/images/case-studies/
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
            Save folder
          </p>
        </div>
      </div>

      <div className="mt-16 space-y-20">
        {groups.map((group) => (
          <div key={group.slug} id={group.slug} className="scroll-mt-28">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
              <div>
                <SectionLabel>{group.featured ? "Verified" : "Draft"}</SectionLabel>
                <h2 className="mt-2 font-heading text-2xl font-medium text-foreground">
                  <Link href={`/work/${group.slug}`} className="hover:text-prose">
                    {group.title}
                  </Link>
                </h2>
              </div>
              <p className="font-mono text-xs text-muted">
                {group.neededCount} needed · {group.items.length} total slots
              </p>
            </div>

            <div className="mt-8 space-y-12">
              {group.items.map((item, index) => (
                <div key={`${item.filename}-${index}`} className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={
                        isScreenshotNeeded(item)
                          ? "label text-foreground"
                          : "font-mono text-xs uppercase tracking-wider text-muted"
                      }
                    >
                      {isScreenshotNeeded(item) ? "Capture needed" : "Ready"}
                    </span>
                    {item.slot ? (
                      <span className="font-mono text-xs text-accent-muted">{item.slot}</span>
                    ) : null}
                  </div>
                  <ScreenshotFrame asset={item} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
