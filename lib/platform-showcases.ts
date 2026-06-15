import type { PlatformShowcase } from "./types";

export const platformShowcases: PlatformShowcase[] = [
  {
    channel: "amazon",
    tagline: "Marketplace growth, Buy Box dominance & Renew programme launch",
    headlineMetric: { label: "Revenue Growth", value: "+47%" },
    capabilities: [
      "ASIN architecture & listing health recovery",
      "A+ content & storefront optimisation",
      "Buy Box & dynamic repricing strategy",
      "Amazon Renew certified refurbished programme",
      "FBA inventory & fulfilment alignment",
    ],
    deliverables: [
      "420+ ASIN audit & compliance fix",
      "94% Buy Box win rate achieved",
      "£180K Renew programme revenue",
      "Weekly BSR & conversion reporting",
    ],
    caseStudySlug: "amazon-marketplace-growth",
  },
  {
    channel: "tiktok",
    tagline: "Social commerce launch, creator partnerships & LIVE selling",
    headlineMetric: { label: "TikTok Shop CVR", value: "2.1%" },
    capabilities: [
      "TikTok Shop catalogue setup & onboarding",
      "Creator affiliate programme management",
      "LIVE commerce event strategy",
      "Social-to-DTC traffic attribution",
      "Platform-native merchandising & pricing",
    ],
    deliverables: [
      "180 SKUs launched in 90 days",
      "12 micro-creator partnerships",
      "6 LIVE commerce events",
      "£42K/month social commerce revenue",
    ],
    caseStudySlug: "tiktok-shop-launch",
  },
  {
    channel: "ebay",
    tagline: "Promoted listings, listing optimisation & store growth",
    headlineMetric: { label: "eBay Revenue", value: "+72%" },
    capabilities: [
      "eBay Promoted Listings campaign management",
      "Listing imagery & title optimisation",
      "Store category architecture",
      "Pricing & competitive positioning",
      "Seller performance & defect rate management",
    ],
    deliverables: [
      "Promoted Listings ROAS framework",
      "340+ listings refreshed",
      "Store conversion rate uplift",
      "£310K annual eBay revenue",
    ],
    caseStudySlug: "ebay-marketplace-growth",
  },
  {
    channel: "shopify",
    tagline: "DTC conversion optimisation, PDP redesign & checkout CRO",
    headlineMetric: { label: "Conversion Rate", value: "2.7%" },
    capabilities: [
      "PDP & homepage conversion optimisation",
      "Checkout friction reduction",
      "GA4 + GTM event tracking setup",
      "A/B testing programme management",
      "Bundle & upsell merchandising",
    ],
    deliverables: [
      "CVR improved 1.8% → 2.7%",
      "AOV increased £64 → £76",
      "8 structured A/B tests",
      "£710K annual DTC revenue",
    ],
    caseStudySlug: "shopify-dtc-cro",
  },
  {
    channel: "woocommerce",
    tagline: "WordPress store builds, plugin integration & performance CRO",
    headlineMetric: { label: "Page Speed", value: "92/100" },
    capabilities: [
      "WooCommerce store setup & theme customisation",
      "Payment gateway & shipping integration",
      "Plugin stack optimisation (SEO, CRO, analytics)",
      "Product catalogue & category architecture",
      "Mobile-responsive checkout optimisation",
    ],
    deliverables: [
      "Full WooCommerce rebuild on WordPress",
      "Lighthouse performance score 92+",
      "CVR improved 1.2% → 2.0%",
      "GA4 + GTM conversion tracking",
    ],
    caseStudySlug: "woocommerce-store-optimisation",
  },
  {
    channel: "temu",
    tagline: "Catalogue structuring, margin modelling & volume growth",
    headlineMetric: { label: "Temu SKUs", value: "95+" },
    capabilities: [
      "Temu seller onboarding & compliance",
      "Margin-positive SKU selection & pricing floors",
      "Catalogue mapping from existing inventory",
      "Cross-channel inventory sync rules",
      "Volume vs margin trade-off modelling",
    ],
    deliverables: [
      "95 margin-positive SKUs listed",
      "Automated repricing floor rules",
      "Cross-channel stock safety buffers",
      "Incremental volume revenue stream",
    ],
    caseStudySlug: "temu-marketplace-expansion",
  },
];

export function getPlatformShowcase(channel: string) {
  return platformShowcases.find((item) => item.channel === channel);
}

export function getPlatformShowcaseBySlug(slug: string) {
  return platformShowcases.find((item) => item.caseStudySlug === slug);
}
