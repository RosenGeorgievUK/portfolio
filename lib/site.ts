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
    { label: "GMV managed", value: "£2.4M+" },
    { label: "Channels", value: "6" },
    { label: "Revenue growth", value: "35%" },
    { label: "SKUs", value: "1,200+" },
  ] satisfies HeadlineMetric[],
  impactStats: [
    { label: "Annual GMV", value: "£2.4M+", detail: "Marketplace & DTC combined" },
    { label: "Conversion lift", value: "+0.9pp", detail: "Average across channels" },
    { label: "Amazon revenue", value: "+47%", detail: "6-month turnaround" },
    { label: "TikTok Shop CVR", value: "2.1%", detail: "90-day launch" },
    { label: "Team scope", value: "8+", detail: "Cross-functional contributors" },
  ] satisfies ImpactStat[],
  experience: [
    {
      company: "UK Consumer Electronics Brand",
      role: "E-commerce Manager",
      period: "2022 — Present",
      scope: "£2.4M GMV · 6 channels · 1,200+ SKUs",
      highlights: [
        "Reversed 22% Amazon revenue decline; delivered +47% growth within 6 months",
        "Launched TikTok Shop to 2.1% CVR and £42K/mo in 90 days",
        "Unified P&L reporting across Amazon, eBay, Shopify, WooCommerce, Temu",
      ],
    },
    {
      company: "UK Home & Garden DTC",
      role: "E-commerce Manager",
      period: "2020 — 2022",
      scope: "Shopify + WooCommerce · CRO programme",
      highlights: [
        "Improved Shopify CVR from 1.8% to 2.7% through structured experimentation",
        "Rebuilt WooCommerce store to 92 Lighthouse score and +67% conversion lift",
        "Deployed GA4 + GTM measurement across full purchase funnel",
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
  ] satisfies ExpertiseDomain[],
  channelExpertise: [
    { channel: "amazon", proofPoint: "94% Buy Box · +47% revenue · Renew programme" },
    { channel: "tiktok", proofPoint: "2.1% CVR · £42K/mo · 90-day launch" },
    { channel: "ebay", proofPoint: "REBX · 190K+ sold · 99.6% feedback · 9K+ listings" },
    { channel: "shopify", proofPoint: "Gymstack · REBX · 300+ brands & certified refurb" },
    { channel: "woocommerce", proofPoint: "+67% CVR · 92 Lighthouse · full rebuild" },
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
