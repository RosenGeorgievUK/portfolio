import { siteConfig } from "@/lib/site";

export function ExpertiseDomains() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Expertise
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
          Domains of work
        </h2>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {siteConfig.expertiseDomains.map((item) => (
            <div
              key={item.domain}
              className="grid gap-4 py-8 md:grid-cols-[240px_1fr]"
            >
              <h3 className="font-heading text-base font-medium text-foreground">
                {item.domain}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
