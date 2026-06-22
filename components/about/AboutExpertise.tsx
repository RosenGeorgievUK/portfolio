import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/site";

export function AboutExpertise() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>Expertise</SectionLabel>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
          Domains & channels
        </h2>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {siteConfig.expertiseDomains.map((item) => (
            <div
              key={item.domain}
              className="grid gap-4 py-8 md:grid-cols-[240px_1fr]"
            >
              <h3 className="font-heading text-base font-medium text-foreground">
                {item.domain}
              </h3>
              <p className="prose text-prose">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="label mb-6">Channel coverage</p>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.channelExpertise.map((item) => (
              <div key={item.channel} className="bg-background p-6">
                <ChannelBadge channel={item.channel} size="sm" />
                <p className="prose mt-4 text-sm text-prose">{item.proofPoint}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
