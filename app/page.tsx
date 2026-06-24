import { ExecutiveContact } from "@/components/executive/ExecutiveContact";
import { ExecutiveHero } from "@/components/executive/ExecutiveHero";
import { ExperienceTimeline } from "@/components/executive/ExperienceTimeline";
import { ExpertiseDomains } from "@/components/executive/ExpertiseDomains";
import { SelectedWork } from "@/components/executive/SelectedWork";

export default function Home() {
  return (
    <>
      <ExecutiveHero />
      <SelectedWork />
      <ExpertiseDomains />
      <ExperienceTimeline />
      <ExecutiveContact />
    </>
  );
}
