import type { Metadata } from "next";
import Link from "next/link";

import { ExperienceTimeline } from "@/components/executive/ExperienceTimeline";
import { ExpertiseDomains } from "@/components/executive/ExpertiseDomains";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.aboutSummary,
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-32">
        <SectionLabel>About</SectionLabel>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground">
          {siteConfig.name}
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">
          {siteConfig.title} · {siteConfig.location}
        </p>

        <div className="prose mt-12 space-y-6 text-prose">
          {siteConfig.aboutNarrative.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>

        {siteConfig.testimonials[0] ? (
          <blockquote className="mt-16 border-l border-border pl-8">
            <p className="text-base leading-relaxed text-foreground">
              &ldquo;{siteConfig.testimonials[0].quote}&rdquo;
            </p>
            <footer className="mt-4 font-mono text-xs text-muted">
              — {siteConfig.testimonials[0].author}, {siteConfig.testimonials[0].company}
            </footer>
          </blockquote>
        ) : null}

        <div className="mt-12 flex gap-8 text-sm">
          <Link href="/contact" className="text-foreground underline underline-offset-4">
            Contact
          </Link>
          <a href={siteConfig.resumePath} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
            Resume
          </a>
        </div>
      </section>
      <ExperienceTimeline />
      <ExpertiseDomains />
    </>
  );
}
