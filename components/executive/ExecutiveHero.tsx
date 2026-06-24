import Link from "next/link";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function ExecutiveHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-32">
      <SectionLabel>
        {siteConfig.title} · {siteConfig.location}
      </SectionLabel>
      <h1 className="mt-6 font-heading text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
        {siteConfig.name.split(" ")[0]}
      </h1>
      <p className="prose prose-lg mt-8 max-w-2xl text-prose md:text-xl">
        {siteConfig.tagline}
      </p>
      <p className="prose mt-4 max-w-2xl text-prose">{siteConfig.elevatorPitch}</p>

      <div className="mt-12 flex gap-6">
        <Link
          href="/work"
          className="text-sm text-foreground underline underline-offset-4 hover:text-muted"
        >
          View case studies
        </Link>
        <Link href="/contact" className="text-sm text-muted hover:text-foreground">
          Get in touch
        </Link>
      </div>
    </section>
  );
}
