import Link from "next/link";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function AboutHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-32">
      <SectionLabel>
        {siteConfig.title} · {siteConfig.location}
      </SectionLabel>

      <div className="max-w-3xl">
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="prose prose-lg mt-8 text-prose">{siteConfig.tagline}</p>
        <p className="prose mt-5 text-prose">{siteConfig.aboutLead}</p>

        <div className="mt-10 flex flex-wrap gap-6 text-sm">
          <Link
            href="/work"
            className="text-foreground underline underline-offset-4 hover:text-prose"
          >
            View case studies
          </Link>
          <Link href="/contact" className="text-muted hover:text-foreground">
            Contact
          </Link>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
