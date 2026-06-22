import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { JsonLd } from "@/components/seo/JsonLd";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
  getCaseStudySlugs,
} from "@/lib/case-studies";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Not found" };
  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const related = getAllCaseStudies()
    .filter((s) => s.slug !== study.slug && s.featured)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <JsonLd
        type="caseStudy"
        caseStudy={{
          title: study.title,
          description: study.summary,
          url: `https://your-domain.com/work/${study.slug}`,
        }}
      />

      <Link
        href="/work"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Work
      </Link>

      <div className="mt-10 flex flex-wrap gap-2">
        {study.channels.map((channel) => (
          <ChannelBadge key={channel} channel={channel} size="sm" />
        ))}
      </div>

      <h1 className="mt-8 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
        {study.title}
      </h1>

      <div className="mt-6 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-wider text-muted">
        <span>{study.role}</span>
        <span>{study.timeline}</span>
        <span>{study.industry}</span>
      </div>

      <p className="mt-10 text-lg leading-relaxed text-muted">{study.summary}</p>

      {study.projectLinks && study.projectLinks.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-6">
          {study.projectLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-foreground"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      ) : study.projectUrl ? (
        <a
          href={study.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-foreground"
        >
          View live project
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ) : null}

      {!study.channelExecution?.length && study.coverImage ? (
        <div className="mt-12 overflow-hidden border border-border">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={study.coverImage}
              alt={`${study.title} — project screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>
      ) : null}

      {!study.channelExecution?.length &&
      study.galleryImages &&
      study.galleryImages.length > 1 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {study.galleryImages.slice(1).map((image) => (
            <div key={image} className="overflow-hidden border border-border">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={image}
                  alt={`${study.title} — additional screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-16 grid grid-cols-3 gap-px border border-border bg-border">
        {study.headlineMetrics.map((metric) => (
          <div key={metric.label} className="bg-background p-6">
            <p className="font-heading text-2xl font-semibold text-foreground">
              {metric.value}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-20 border-t border-border pt-12">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Problem
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted">{study.challenge}</p>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Approach
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted">{study.strategy}</p>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Execution
        </h2>
        <ul className="mt-6 space-y-4">
          {study.implementation.map((item) => (
            <li key={item} className="text-sm leading-relaxed text-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {study.channelExecution && study.channelExecution.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Channel evidence
          </h2>
          <div className="mt-8 space-y-16">
            {study.channelExecution.map((block) => (
              <div key={block.channel}>
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <ChannelBadge channel={block.channel} size="sm" />
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">
                      {block.tier}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {block.metric.value}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {block.metric.label}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  {block.screenshots.map((shot, index) => (
                    <figure key={shot.src} className="overflow-hidden border border-border">
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={shot.src}
                          alt={shot.caption}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 768px"
                          priority={index === 0}
                        />
                      </div>
                      <figcaption className="border-t border-border px-6 py-4 font-mono text-xs text-muted">
                        {shot.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <ul className="mt-6 space-y-3">
                  {block.highlights.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {study.operationsPrograms && study.operationsPrograms.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Systems & operations
          </h2>
          <div className="mt-8 space-y-px border border-border bg-border">
            {study.operationsPrograms.map((program) => (
              <div key={program.title} className="bg-background p-8">
                <div className="flex flex-wrap items-center gap-3">
                  {program.channel ? (
                    <ChannelBadge channel={program.channel} size="sm" />
                  ) : null}
                  <h3 className="font-heading text-lg font-medium text-foreground">
                    {program.title}
                  </h3>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground">
                    Problem ·{" "}
                  </span>
                  {program.problem}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground">
                    Approach ·{" "}
                  </span>
                  {program.approach}
                </p>
                <ul className="mt-6 space-y-3">
                  {program.highlights.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Impact
        </h2>
        <div className="mt-8 space-y-px border border-border bg-border">
          {study.results.map((result) => (
            <div
              key={result.label}
              className="grid grid-cols-4 gap-4 bg-background px-6 py-5 text-sm md:grid-cols-[1fr_auto_auto_auto]"
            >
              <span className="text-foreground">{result.label}</span>
              <span className="font-mono text-xs text-muted">{result.before}</span>
              <span className="font-mono text-xs text-foreground">{result.after}</span>
              <span className="font-mono text-xs text-muted">{result.change}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Stack
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {study.tools.map((tool) => (
            <span
              key={tool}
              className="border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-20 border-t border-border pt-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            More work
          </h2>
          <div className="mt-6 space-y-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="block text-sm text-muted hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
