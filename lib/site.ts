import type { ChannelExpertise, HeadlineMetric, ImpactStat } from "./types";

export type Experience = {
  company: string;
  role: string;
  period: string;
  scope: string;
  highlights: string[];
  caseStudySlug?: string;
  metrics?: { label: string; value: string }[];
};

export type AboutPrinciple = {
  title: string;
  description: string;
};

export type ExpertiseDomain = {
  domain: string;
  description: string;
};

export const siteConfig = {
  name: "Rosen [Your Surname]",
  title: "E-Commerce & Marketplace Manager",
  location: "United Kingdom",
  email: "hello@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  resumePath: "/resume.html",
  tagline: "I build the commerce systems teams depend on — storefronts, listing infrastructure, and internal ops tooling.",
  elevatorPitch:
    "At RebX I own in-house Shopify, bulk listing, returns ops, and marketplace integrations. At Gymstack I run a 300+ brand supplement marketplace. Recruiters should read each programme separately — the work is different; the through-line is systems ownership.",
  aboutSummary:
    "E-commerce operator who builds and runs in-house commerce infrastructure — custom Shopify, bulk listing, returns workflows, and marketplace tooling — plus marketplace management at scale.",
  aboutLead:
    "I'm an operator who builds what the business runs on: listing infrastructure, custom storefronts, returns boards, and channel integrations — not just campaigns and catalogue tweaks.",
  aboutNarrative: [
    "At RebX, current scale depends on systems I built in-house — bulk listing the listing team runs on, a custom dual-shop Shopify store (Refurbished + Bargains), trade-in platform, Daily Returns Board with SLA enforcement, and a growing set of WMS and channel tools. Temu refurbished runs at roughly £4K/month after I configured 4Seller integration and bulk-listed stock listing staff wouldn't take on.",
    "Gymstack is a separate programme: a curated Shopify marketplace with 300+ supplement brands, category merchandising, and a content hub — marketplace growth, not internal tooling.",
    "I treat each employer as its own operating environment. Metrics on this site are labelled by programme so nothing from RebX is blended with Gymstack.",
  ],
  aboutPrinciples: [
    {
      title: "Build what teams run on",
      description:
        "If listing, returns, or trade-in breaks at volume, I build internal tooling — bulk listing, SLA boards, API scanners — rather than hiring around the bottleneck.",
    },
    {
      title: "In-house over agency",
      description:
        "RebX Shopify, trade-in, and most ops tools were conceived and delivered without external dev — Liquid, integrations, and ongoing technical ownership included.",
    },
    {
      title: "Channel-native execution",
      description:
        "BaseLinker for Amazon Renew grade accuracy, 4Seller for Temu refurbished, eBay API for returns — each channel gets the integration it needs, not a pasted catalogue.",
    },
    {
      title: "Honest scope",
      description:
        "I credit what's mine, what's shared, and what's in progress — TikTok Shop hit £3.5K/month organically before the channel was lost; Temu day-to-day ops involve the wider team.",
    },
  ] satisfies AboutPrinciple[],
  aboutIntent: {
    headline: "Senior e-commerce or marketplace ops with systems ownership.",
    description:
      "Looking for a role where I can own storefronts, marketplace channels, and the internal tooling that makes high-volume ops viable.",
    seeking: [
      "Businesses where ops tooling is as important as revenue",
      "Shopify + marketplace hybrid environments",
      "Teams that need an operator who can ship in-house systems",
    ],
  },
  headlineMetrics: [
    { label: "Internal systems", value: "12+", programme: "REBX" },
    { label: "Shopify ownership", value: "Sole build", programme: "REBX" },
    { label: "Temu run rate", value: "~£4K/mo", programme: "REBX" },
    { label: "Brand catalogue", value: "300+", programme: "Gymstack" },
  ] satisfies HeadlineMetric[],
  impactStats: [
    {
      programme: "REBX",
      label: "Bulk listing system",
      value: "Core infra",
      detail: "Listing team dependency — scale impossible without it",
    },
    {
      programme: "REBX",
      label: "Custom Shopify",
      value: "Sole owner",
      detail: "Dual-shop Refurbished + Bargains · Liquid · StoreFeeder",
    },
    {
      programme: "REBX",
      label: "Daily Returns Board",
      value: "Org-wide",
      detail: "SLA enforcement · label scanner + eBay API in progress",
    },
    {
      programme: "REBX",
      label: "Temu refurbished",
      value: "~£4K/mo",
      detail: "4Seller integration · bulk listing I carried out",
    },
    {
      programme: "REBX",
      label: "TikTok Shop (launch)",
      value: "£3.5K/mo",
      detail: "Month one · organic · no ad spend (channel later lost)",
    },
    {
      programme: "Gymstack",
      label: "Marketplace catalogue",
      value: "300+ brands",
      detail: "Shopify · category merchandising · content hub",
    },
  ] satisfies ImpactStat[],
  experience: [
    {
      company: "REBX Ltd",
      role: "E-Commerce & Marketplace Manager",
      period: "2022 — Present",
      scope: "Shopify · eBay · Temu · Back Market · internal tooling",
      caseStudySlug: "rebx-shopify-refurbished",
      metrics: [
        { label: "Systems built", value: "12+" },
        { label: "Temu run rate", value: "~£4K/mo" },
      ],
      highlights: [
        "Built bulk listing system — listing team depends on it; expansion impossible without this infrastructure",
        "Sole owner of custom Shopify — dual Refurbished + Bargains shops, Liquid theme, StoreFeeder, no agency",
        "Built Daily Returns Board with SLA enforcement; Returns Label Scanner (eBay API + OCR) in progress",
        "Custom trade-in platform in-house — GDPR-compliant, encrypted customer data",
        "Configured 4Seller + bulk listing for Temu refurbished (~£4K/mo); TikTok Shop to £3.5K/mo month one organic",
        "eBay image converter, Back Market trade-in tracker, Jarvis WMS asset checker — daily listing-team use",
      ],
    },
    {
      company: "Gymstack",
      role: "E-commerce Manager",
      period: "2023 — Present",
      scope: "Shopify marketplace · merchandising · content",
      caseStudySlug: "gymstack-shopify-marketplace",
      metrics: [
        { label: "Brands", value: "300+" },
        { label: "Platform", value: "Shopify" },
      ],
      highlights: [
        "Curated supplement marketplace with 300+ brands across sports nutrition and wellness",
        "Category pill navigation, best-seller modules, and promotional architecture",
        "Evidence-based blog hub with topic filters for SEO and trust",
      ],
    },
  ] satisfies Experience[],
  expertiseDomains: [
    {
      domain: "Internal commerce systems",
      description:
        "Bulk listing, returns boards, trade-in platforms, WMS tooling, VAT automation — built in-house when ops outgrow spreadsheets",
    },
    {
      domain: "Shopify & DTC",
      description:
        "Custom Liquid builds, dual-shop architecture, StoreFeeder, payments, trade-in — sole technical ownership at RebX",
    },
    {
      domain: "Marketplace operations",
      description:
        "eBay, Temu, Back Market, Amazon Renew — integrations, grade-accurate listing, channel-specific catalogue rules",
    },
    {
      domain: "Social commerce",
      description: "TikTok Shop launch from scratch — organic run-rate growth before channel loss",
    },
    {
      domain: "Marketplace merchandising",
      description: "Gymstack — 300+ brand catalogue, category discovery, campaigns, content-led acquisition",
    },
  ] satisfies ExpertiseDomain[],
  channelExpertise: [
    { channel: "shopify", proofPoint: "RebX sole custom build · Gymstack 300+ brand marketplace" },
    { channel: "ebay", proofPoint: "Bulk listing · image converter · returns API tooling" },
    { channel: "temu", proofPoint: "4Seller refurb integration · ~£4K/mo after bulk listing" },
    { channel: "backmarket", proofPoint: "Trade-in tracker · seller catalogue management" },
    { channel: "tiktok", proofPoint: "Shop setup · £3.5K/mo month one organic" },
    { channel: "amazon-renew", proofPoint: "BaseLinker grade-accurate Renew listing" },
  ] satisfies ChannelExpertise[],
  tools: [
    "Shopify",
    "Liquid",
    "StoreFeeder",
    "BaseLinker",
    "4Seller",
    "eBay Post-Order API",
    "Google Analytics 4",
    "Google Tag Manager",
    "Klaviyo",
    "Looker Studio",
  ],
  testimonials: [
    {
      quote:
        "Rosen built the reporting and execution frameworks that changed how we make commerce decisions. Revenue grew 35% while operational complexity decreased.",
      author: "Operations Director",
      company: "UK Consumer Electronics",
    },
  ],
} as const;
