import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function AboutNarrative() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[11rem_1fr]">
        <SectionLabel className="lg:pt-1">Background</SectionLabel>
        <div className="space-y-6">
          {siteConfig.aboutNarrative.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="prose max-w-none text-prose">
              {paragraph}
            </p>
          ))}
          <blockquote className="border-l border-border pl-8">
            <p className="font-heading text-xl font-medium leading-snug text-foreground md:text-2xl">
              &ldquo;Commerce breaks when channels, data, and operations run on different
              clocks.&rdquo;
            </p>
            <footer className="mt-4 font-mono text-xs text-muted">Operating thesis</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
