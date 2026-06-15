import type { CaseStudy, Channel } from "./types";

import amazonMarketplace from "@/content/case-studies/amazon-marketplace-growth.json";
import ebayMarketplace from "@/content/case-studies/ebay-marketplace-growth.json";
import gymstackMarketplace from "@/content/case-studies/gymstack-shopify-marketplace.json";
import rebxRefurbished from "@/content/case-studies/rebx-shopify-refurbished.json";
import multiChannelLaunch from "@/content/case-studies/multi-channel-launch.json";
import temuExpansion from "@/content/case-studies/temu-marketplace-expansion.json";
import tiktokShop from "@/content/case-studies/tiktok-shop-launch.json";
import woocommerceOptimisation from "@/content/case-studies/woocommerce-store-optimisation.json";

const caseStudies: CaseStudy[] = [
  gymstackMarketplace as CaseStudy,
  rebxRefurbished as CaseStudy,
  amazonMarketplace as CaseStudy,
  tiktokShop as CaseStudy,
  ebayMarketplace as CaseStudy,
  woocommerceOptimisation as CaseStudy,
  temuExpansion as CaseStudy,
  multiChannelLaunch as CaseStudy,
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

const FEATURED_ORDER = [
  "rebx-shopify-refurbished",
  "gymstack-shopify-marketplace",
] as const;

export function getFeaturedCaseStudies(): CaseStudy[] {
  const featured = caseStudies.filter((study) => study.featured);
  return FEATURED_ORDER.map((slug) => featured.find((study) => study.slug === slug))
    .filter((study): study is CaseStudy => study !== undefined);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

export function filterCaseStudiesByChannel(channel: Channel | "all"): CaseStudy[] {
  if (channel === "all") {
    return caseStudies;
  }

  return caseStudies.filter((study) => study.channels.includes(channel));
}

export function getPrimaryCaseStudies(): CaseStudy[] {
  const primarySlugs = [
    "amazon-marketplace-growth",
    "tiktok-shop-launch",
    "ebay-marketplace-growth",
    "gymstack-shopify-marketplace",
    "rebx-shopify-refurbished",
    "woocommerce-store-optimisation",
    "temu-marketplace-expansion",
  ];
  return primarySlugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((study): study is CaseStudy => study !== undefined);
}
