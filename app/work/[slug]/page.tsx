import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { CaseStudyLayout } from "@/components/case-studies/CaseStudyLayout";
import { ChannelEvidence } from "@/components/case-studies/ChannelEvidence";
import type { CaseStudyNavItem } from "@/components/case-studies/CaseStudyNav";
import { ScreenshotFrame } from "@/components/case-studies/ScreenshotFrame";
import { JsonLd } from "@/components/seo/JsonLd";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { Prose } from "@/components/ui/Prose";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getCaseStudyChallengeParagraphs } from "@/lib/case-study-display";
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
  getCaseStudySlugs,
} from "@/lib/case-studies";
import {
  collectCaseStudyScreenshots,
  getCoverScreenshot,
  getGalleryScreenshots,
  isScreenshotNeeded,
} from "@/lib/screenshots";
import type { CaseStudy } from "@/lib/types";

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

function buildNavItems(study: CaseStudy): CaseStudyNavItem[] {
  const items: CaseStudyNavItem[] = [
    { id: "problem", label: "Problem" },
    { id: "approach", label: "Approach" },
    { id: "execution", label: "Execution" },
  ];

  if (study.channelExecution?.length) {
    items.push({ id: "channels", label: "Channels" });
  }

  if (study.operationsPrograms?.length) {
    items.push({ id: "systems", label: "Systems" });
  }

  items.push({ id: "impact", label: "Impact" }, { id: "stack", label: "Stack" });

  return items;
}

function CaseStudyHeader({ study }: { study: CaseStudy }) {
  return (
    <>
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

      <Prose size="lg" className="mt-10">
        {study.summary}
      </Prose>

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
    </>
  );
}

function SimpleCoverGallery({ study }: { study: CaseStudy }) {
  if (study.channelExecution?.length) return null;

  const cover = getCoverScreenshot(study);
  const gallery = getGalleryScreenshots(study).filter(
    (shot) => !shot.src || shot.src !== cover.src,
  );

  return (
    <div className="mt-12 space-y-8">
      <ScreenshotFrame asset={cover} priority sizes="(max-width: 768px) 100vw, 768px" />
      {gallery.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.map((shot) => (
            <ScreenshotFrame
              key={shot.filename}
              asset={shot}
              sizes="(max-width: 768px) 100vw, 384px"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function CaseStudySections({
  study,
  related,
}: {
  study: CaseStudy;
  related: CaseStudy[];
}) {
  const challengeParagraphs = getCaseStudyChallengeParagraphs(study);

  return (
    <>
      <section id="problem" className="scroll-mt-28 border-t border-border pt-12">
        <SectionLabel>Problem</SectionLabel>
        <div className="prose mt-6 space-y-5 text-prose">
          {challengeParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id="approach" className="scroll-mt-28">
        <SectionLabel>Approach</SectionLabel>
        <Prose className="mt-6">{study.strategy}</Prose>
      </section>

      <section id="execution" className="scroll-mt-28">
        <SectionLabel>Execution</SectionLabel>
        <ul className="prose-list mt-6 space-y-4">
          {study.implementation.map((item) => (
            <li key={item} className="text-base leading-relaxed text-prose">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {study.channelExecution && study.channelExecution.length > 0 ? (
        <section id="channels" className="scroll-mt-28">
          <SectionLabel>Channel evidence</SectionLabel>
          <p className="prose mt-4 max-w-none text-prose">
            Live storefront proof across each tier of the sales architecture.
          </p>
          <div className="mt-8">
            <ChannelEvidence blocks={study.channelExecution} />
          </div>
        </section>
      ) : null}

      {study.operationsPrograms && study.operationsPrograms.length > 0 ? (
        <section id="systems" className="scroll-mt-28">
          <SectionLabel>Systems & operations</SectionLabel>
          <div className="mt-8 space-y-px border border-border bg-border">
            {study.operationsPrograms.map((program) => (
              <div key={program.title} className="bg-background p-8">
                <div className="flex flex-wrap items-center gap-3">
                  {program.channel ? (
                    <ChannelBadge channel={program.channel} size="sm" />
                  ) : null}
                  <h3 className="font-heading text-xl font-medium text-foreground">
                    {program.title}
                  </h3>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <SectionLabel as="span">Problem</SectionLabel>
                    <Prose className="mt-3 max-w-none">{program.problem}</Prose>
                  </div>
                  <div>
                    <SectionLabel as="span">Approach</SectionLabel>
                    <Prose className="mt-3 max-w-none">{program.approach}</Prose>
                  </div>
                </div>

                <ul className="prose-list mt-8 space-y-3">
                  {program.highlights.map((item) => (
                    <li key={item} className="text-base leading-relaxed text-prose">
                      {item}
                    </li>
                  ))}
                </ul>

                {program.screenshots && program.screenshots.length > 0 ? (
                  <div className="mt-8 space-y-6">
                    {program.screenshots.map((shot, index) => (
                      <ScreenshotFrame
                        key={`${shot.filename}-${index}`}
                        asset={{
                          ...shot,
                          slot:
                            shot.slot ??
                            `Systems · ${program.title}${index > 0 ? ` · ${index + 1}` : ""}`,
                        }}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section id="impact" className="scroll-mt-28">
        <SectionLabel>Impact</SectionLabel>
        <div className="mt-8 space-y-px border border-border bg-border">
          <div className="hidden bg-background px-6 py-4 font-mono text-xs uppercase tracking-wider text-muted md:grid md:grid-cols-[1fr_auto_auto_auto] md:gap-4">
            <span>Metric</span>
            <span className="w-24 text-right">Before</span>
            <span className="w-24 text-right">After</span>
            <span className="w-24 text-right">Change</span>
          </div>
          {study.results.map((result) => (
            <div
              key={result.label}
              className="bg-background px-6 py-5 text-sm md:grid md:grid-cols-[1fr_auto_auto_auto] md:items-center md:gap-4"
            >
              <span className="font-medium text-foreground">{result.label}</span>
              <span className="mt-2 block font-mono text-xs text-muted md:mt-0 md:w-24 md:text-right">
                <span className="mr-2 md:hidden">Before</span>
                {result.before}
              </span>
              <span className="block font-mono text-xs text-foreground md:w-24 md:text-right">
                <span className="mr-2 md:hidden">After</span>
                {result.after}
              </span>
              <span className="block font-mono text-xs text-muted md:w-24 md:text-right">
                <span className="mr-2 md:hidden">Change</span>
                {result.change}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="scroll-mt-28">
        <SectionLabel>Stack</SectionLabel>
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
        <section className="border-t border-border pt-12">
          <SectionLabel>More work</SectionLabel>
          <div className="mt-6 space-y-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="block text-base text-prose hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const related = getAllCaseStudies()
    .filter((s) => s.slug !== study.slug && s.featured)
    .slice(0, 3);

  const isDeepStudy =
    Boolean(study.channelExecution?.length) ||
    Boolean(study.operationsPrograms?.length);

  const neededScreenshots = collectCaseStudyScreenshots(study).filter(
    isScreenshotNeeded,
  ).length;

  return (
    <>
      <JsonLd
        type="caseStudy"
        caseStudy={{
          title: study.title,
          description: study.summary,
          url: `https://your-domain.com/work/${study.slug}`,
        }}
      />

      {isDeepStudy ? (
        <CaseStudyLayout
          navItems={buildNavItems(study)}
          header={
            <>
              <CaseStudyHeader study={study} />
              {neededScreenshots > 0 ? (
                <p className="mt-8 font-mono text-xs text-muted">
                  {neededScreenshots} screenshot{neededScreenshots > 1 ? "s" : ""} still
                  needed —{" "}
                  <Link
                    href="/work/screenshot-briefs"
                    className="text-foreground underline underline-offset-4 hover:text-prose"
                  >
                    view capture checklist
                  </Link>
                </p>
              ) : null}
            </>
          }
        >
          <CaseStudySections study={study} related={related} />
        </CaseStudyLayout>
      ) : (
        <article className="mx-auto max-w-3xl px-6 pb-24 pt-32">
          <CaseStudyHeader study={study} />
          {neededScreenshots > 0 ? (
            <p className="mt-8 font-mono text-xs text-muted">
              {neededScreenshots} screenshot{neededScreenshots > 1 ? "s" : ""} still needed —{" "}
              <Link
                href="/work/screenshot-briefs"
                className="text-foreground underline underline-offset-4 hover:text-prose"
              >
                view capture checklist
              </Link>
            </p>
          ) : null}
          <SimpleCoverGallery study={study} />
          <div className="mt-16 space-y-16">
            <CaseStudySections study={study} related={related} />
          </div>
        </article>
      )}
    </>
  );
}
