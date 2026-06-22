import type { ChannelExpertise, HeadlineMetric, ImpactStat } from "./types";

export type Experience = {
  company: string;
  role: string;
  period: string;
  scope: string;
  highlights: string[];
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
    "Operator with a track record of building scalable commerce systems across marketplaces and DTC. I work at the intersection of growth, analytics, and cross-functional execution.",
  aboutNarrative: [
    "I've spent the last several years driving measurable revenue growth across six commerce channels, managing £2.4M+ in annual GMV and 1,200+ SKUs. My work spans marketplace operations, conversion optimisation, and the analytics infrastructure that makes both possible.",
    "I approach commerce as a systems problem: acquisition, conversion, retention, and operations must move together. I've led platform launches, rebuilt storefronts, and established reporting frameworks that align marketing, product, and leadership around the same numbers.",
    "I'm looking for a senior e-commerce role where I can own channel performance end-to-end and build durable growth engines — not just optimise individual listings.",
  ],
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
      scope: "Shopify · eBay · Temu · 9K+ listings",
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
