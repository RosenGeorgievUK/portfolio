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
  title: "E-commerce Manager",
  location: "United Kingdom",
  email: "hello@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  resumePath: "/resume.html",
  tagline: "Scaling multi-channel commerce through data, systems, and execution.",
  elevatorPitch:
    "I lead e-commerce growth across Amazon, TikTok Shop, eBay, Shopify, WooCommerce, and Temu — owning revenue outcomes from strategy through operational delivery.",
  aboutSummary:
    "E-commerce operator building multi-channel revenue systems across marketplaces and DTC — from listing architecture to internal ops tooling.",
  aboutLead:
    "I own commerce end-to-end: channel strategy, storefront execution, analytics, and the operational systems that keep high-volume programmes running.",
  aboutNarrative: [
    "The last several years have been spent scaling verified programmes — REBX across Shopify, eBay, Back Market, and Temu; Gymstack as a 300+ brand Shopify marketplace — while building the reporting and workflow infrastructure leadership teams actually use.",
    "I treat commerce as a systems problem. Acquisition, conversion, retention, and operations have to move together. That means channel-native merchandising, margin-aware pricing tiers, and internal tooling when manual workflows break at volume — like eBay returns bridging warehouse processing and customer service.",
  ],
  aboutPrinciples: [
    {
      title: "Systems over silos",
      description:
        "One operating model across channels — shared trust standards, pricing rules, and dashboards so teams work from the same evidence.",
    },
    {
      title: "Evidence before opinion",
      description:
        "GA4, Seller Central, and custom ops data drive decisions. Dashboards exist so stakeholders see the same numbers, not slide decks.",
    },
    {
      title: "Channel-native execution",
      description:
        "Each platform gets its own merchandising, compliance, and conversion logic — not a Shopify catalogue pasted onto eBay.",
    },
    {
      title: "Ops that scale with volume",
      description:
        "When returns, listings, or CS cases outgrow spreadsheets, I champion internal tooling — API sync, OCR intake, unified case views.",
    },
  ] satisfies AboutPrinciple[],
  aboutIntent: {
    headline: "Senior e-commerce leadership with end-to-end ownership.",
    description:
      "Looking for a role where I can own channel P&L, build durable growth systems, and lead cross-functional execution — not just optimise individual listings.",
    seeking: [
      "Multi-channel or marketplace-heavy businesses",
      "Operator roles with systems and analytics scope",
      "Teams scaling DTC + marketplace together",
    ],
  },
  headlineMetrics: [
    { label: "eBay sold", value: "190K+" },
    { label: "Brands", value: "300+" },
    { label: "Channels", value: "6+" },
    { label: "Feedback", value: "99.6%" },
  ] satisfies HeadlineMetric[],
  impactStats: [
    { label: "eBay items sold", value: "190K+", detail: "REBX · rebxshop" },
    { label: "Seller feedback", value: "99.6%", detail: "REBX eBay store" },
    { label: "Brand catalogue", value: "300+", detail: "Gymstack marketplace" },
    { label: "Channels operated", value: "4", detail: "REBX · Shopify, eBay, Back Market, Temu" },
    { label: "Temu store rating", value: "4.5★", detail: "82 SKUs · local warehouse" },
  ] satisfies ImpactStat[],
  experience: [
    {
      company: "REBX Ltd",
      role: "E-commerce Manager",
      period: "2022 — Present",
      scope: "Shopify · eBay · Back Market · Temu",
      caseStudySlug: "rebx-shopify-refurbished",
      metrics: [
        { label: "eBay sold", value: "190K+" },
        { label: "Channels", value: "4" },
      ],
      highlights: [
        "Built multi-channel refurbished programme across DTC and marketplaces",
        "Scaled eBay store to 190K+ items sold at 99.6% positive feedback",
        "Maintained 4.4★ Back Market seller rating across 88-product catalogue",
        "Built eBay returns bridge — API dashboard + OCR scanning linking processing and CS",
      ],
    },
    {
      company: "Gymstack",
      role: "E-commerce Manager",
      period: "2023 — Present",
      scope: "Shopify marketplace · 300+ brands",
      caseStudySlug: "gymstack-shopify-marketplace",
      metrics: [
        { label: "Brands", value: "300+" },
        { label: "Platform", value: "Shopify" },
      ],
      highlights: [
        "Launched supplement marketplace with 300+ curated brands",
        "Built category-led merchandising and evidence-based content hub",
        "Deployed promotional architecture across flash sales and bundle offers",
      ],
    },
  ] satisfies Experience[],
  expertiseDomains: [
    {
      domain: "Marketplace operations",
      description: "Amazon, eBay, Temu — listing architecture, Buy Box, Renew, compliance",
    },
    {
      domain: "Social commerce",
      description: "TikTok Shop launch, creator programmes, LIVE commerce, attribution",
    },
    {
      domain: "DTC & conversion",
      description: "Shopify, WooCommerce — CRO, checkout, PDP optimisation, A/B testing",
    },
    {
      domain: "Analytics & reporting",
      description: "GA4, GTM, Looker Studio — funnel measurement, stakeholder dashboards",
    },
    {
      domain: "Operations & systems",
      description: "eBay API integrations, OCR returns intake, cross-team workflow dashboards",
    },
  ] satisfies ExpertiseDomain[],
  channelExpertise: [
    { channel: "amazon", proofPoint: "Marketplace ops · listing architecture · Renew" },
    { channel: "tiktok", proofPoint: "Social commerce · shop launch · creator programmes" },
    { channel: "ebay", proofPoint: "190K+ sold · eBay API returns · OCR ops dashboard" },
    { channel: "shopify", proofPoint: "Gymstack · REBX · 300+ brands & certified refurb" },
    { channel: "woocommerce", proofPoint: "DTC rebuild · CRO · checkout optimisation" },
    { channel: "temu", proofPoint: "REBX mall · 82 SKUs · 4.5★ · local warehouse" },
  ] satisfies ChannelExpertise[],
  tools: [
    "Google Analytics 4",
    "Google Tag Manager",
    "Amazon Seller Central",
    "Helium 10",
    "Shopify",
    "WooCommerce",
    "Looker Studio",
    "Hotjar",
    "Klaviyo",
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
