import { siteConfig } from "@/lib/site";

type JsonLdProps = {
  type: "person" | "caseStudy";
  caseStudy?: {
    title: string;
    description: string;
    url: string;
  };
};

export function JsonLd({ type, caseStudy }: JsonLdProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    email: siteConfig.email,
    url: "https://your-domain.com",
    sameAs: [siteConfig.linkedin],
    knowsAbout: [
      "E-commerce Management",
      "Amazon Marketplace",
      "TikTok Shop",
      "Shopify",
      "Conversion Rate Optimisation",
    ],
  };

  const caseStudySchema = caseStudy
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: caseStudy.title,
        description: caseStudy.description,
        url: caseStudy.url,
        author: {
          "@type": "Person",
          name: siteConfig.name,
        },
      }
    : null;

  const schema = type === "person" ? personSchema : caseStudySchema;

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
