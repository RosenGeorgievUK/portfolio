export const CHANNELS = [
  "amazon",
  "amazon-renew",
  "ebay",
  "tiktok",
  "onbuy",
  "temu",
  "shopify",
  "woocommerce",
  "backmarket",
] as const;

export type Channel = (typeof CHANNELS)[number];

export const PRIMARY_CHANNELS = [
  "amazon",
  "tiktok",
  "ebay",
  "shopify",
  "woocommerce",
  "temu",
  "backmarket",
] as const satisfies readonly Channel[];

export type PrimaryChannel = (typeof PRIMARY_CHANNELS)[number];

export type CaseStudyResult = {
  label: string;
  before: string;
  after: string;
  change: string;
};

export type ScreenshotAsset = {
  src?: string;
  caption: string;
  capture: string;
  filename: string;
  status: "ready" | "needed";
  slot?: string;
};

export type ChannelScreenshot = ScreenshotAsset;

export type ChannelExecution = {
  channel: Channel;
  tier: string;
  highlights: string[];
  metric: { label: string; value: string };
  screenshots: ChannelScreenshot[];
};

export type OperationsProgram = {
  title: string;
  channel?: Channel;
  problem: string;
  approach: string;
  highlights: string[];
  screenshots?: ScreenshotAsset[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  channels: Channel[];
  industry: string;
  role: string;
  timeline: string;
  summary: string;
  cardSummary?: string;
  challenge: string;
  challengeParagraphs?: string[];
  strategy: string;
  implementation: string[];
  channelExecution?: ChannelExecution[];
  operationsPrograms?: OperationsProgram[];
  results: CaseStudyResult[];
  tools: string[];
  featured: boolean;
  coverImage?: string;
  coverScreenshot?: ScreenshotAsset;
  galleryImages?: string[];
  galleryScreenshots?: ScreenshotAsset[];
  projectUrl?: string;
  projectLinks?: { label: string; url: string }[];
  headlineMetrics: {
    label: string;
    value: string;
  }[];
};

export type ChannelExpertise = {
  channel: Channel;
  proofPoint: string;
};

export type HeadlineMetric = {
  label: string;
  value: string;
};

export type ImpactStat = {
  label: string;
  value: string;
  detail?: string;
};

export type PlatformShowcase = {
  channel: Channel;
  tagline: string;
  headlineMetric: { label: string; value: string };
  capabilities: string[];
  deliverables: string[];
  caseStudySlug: string;
};
