import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function ExperienceTimeline() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
          Career
        </h2>

        <div className="mt-16 space-y-16">
          {siteConfig.experience.map((role) => (
            <div
              key={role.company}
              className="grid gap-8 border-t border-border pt-12 md:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="font-mono text-xs text-muted">{role.period}</p>
                <p className="mt-4 font-heading text-sm font-medium text-foreground">
                  {role.role}
                </p>
                <p className="mt-1 text-sm text-muted">{role.company}</p>
                <p className="mt-3 font-mono text-xs text-accent-muted">
                  {role.scope}
                </p>
              </div>
              <ul className="prose-list space-y-3">
                {role.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-base leading-relaxed text-prose"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
