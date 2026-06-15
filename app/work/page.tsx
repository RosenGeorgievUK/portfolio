import type { Metadata } from "next";

import { WorkIndex } from "@/components/work/WorkIndex";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Case studies — ${siteConfig.name}`,
};

export default function WorkPage() {
  return <WorkIndex />;
}
