import type { Metadata } from "next";

import { AboutExperience } from "@/components/about/AboutExperience";
import { AboutExpertise } from "@/components/about/AboutExpertise";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntent, AboutStack } from "@/components/about/AboutIntent";
import { AboutNarrative } from "@/components/about/AboutNarrative";
import { AboutPrinciples } from "@/components/about/AboutPrinciples";
import { AboutProgrammes } from "@/components/about/AboutProgrammes";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.aboutSummary,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutNarrative />
      <AboutPrinciples />
      <AboutProgrammes />
      <AboutExperience />
      <AboutExpertise />
      <AboutStack />
      <AboutIntent />
    </>
  );
}
