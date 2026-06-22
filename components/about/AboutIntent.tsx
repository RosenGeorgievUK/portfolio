import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function AboutStack() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Stack</SectionLabel>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
          Tools & platforms
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {siteConfig.tools.map((tool) => (
            <span
              key={tool}
              className="border border-border px-3 py-1.5 font-mono text-xs text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutIntent() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 border border-border p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
          <div>
            <SectionLabel>Next role</SectionLabel>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {siteConfig.aboutIntent.headline}
            </h2>
            <p className="prose mt-6 max-w-2xl text-prose">
              {siteConfig.aboutIntent.description}
            </p>
            <ul className="prose-list mt-8 space-y-2">
              {siteConfig.aboutIntent.seeking.map((item) => (
                <li key={item} className="text-base text-prose">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-foreground px-6 py-3 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Start a conversation
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-1 px-6 py-3 text-sm text-muted transition-colors hover:text-foreground"
            >
              {siteConfig.email}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
