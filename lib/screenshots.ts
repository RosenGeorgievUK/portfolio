import { getAllCaseStudies } from "./case-studies";
import type { CaseStudy, ScreenshotAsset } from "./types";

export function isScreenshotNeeded(asset: ScreenshotAsset): boolean {
  return asset.status === "needed" || !asset.src;
}

function filenameFromSrc(src: string): string {
  return src.split("/").pop() ?? src;
}

export function getCoverScreenshot(study: CaseStudy): ScreenshotAsset {
  if (study.coverScreenshot) {
    return { slot: "Cover", ...study.coverScreenshot };
  }

  if (study.coverImage) {
    return {
      slot: "Cover",
      src: study.coverImage,
      caption: `${study.title} — cover`,
      capture: "Primary hero or storefront screenshot for this case study.",
      filename: filenameFromSrc(study.coverImage),
      status: "ready",
    };
  }

  return {
    slot: "Cover",
    caption: `${study.title} — cover`,
    capture:
      "Primary hero or storefront screenshot that represents this programme at a glance.",
    filename: `${study.slug}-cover.png`,
    status: "needed",
  };
}

export function getGalleryScreenshots(study: CaseStudy): ScreenshotAsset[] {
  if (study.galleryScreenshots?.length) {
    return study.galleryScreenshots.map((shot) => ({
      slot: "Gallery",
      ...shot,
    }));
  }

  if (study.galleryImages?.length) {
    return study.galleryImages.map((src, index) => ({
      slot: index === 0 ? "Gallery · primary" : `Gallery · ${index + 1}`,
      src,
      caption: `${study.title} — gallery ${index + 1}`,
      capture: "Supporting screenshot for this case study gallery.",
      filename: filenameFromSrc(src),
      status: "ready" as const,
    }));
  }

  return [];
}

export function collectCaseStudyScreenshots(study: CaseStudy): ScreenshotAsset[] {
  const items: ScreenshotAsset[] = [getCoverScreenshot(study)];

  for (const shot of getGalleryScreenshots(study)) {
    if (shot.src && shot.src === getCoverScreenshot(study).src) continue;
    items.push(shot);
  }

  for (const block of study.channelExecution ?? []) {
    for (const [index, shot] of block.screenshots.entries()) {
      items.push({
        ...shot,
        slot: shot.slot ?? `Channel · ${block.channel}${index > 0 ? ` · ${index + 1}` : ""}`,
      });
    }
  }

  for (const program of study.operationsPrograms ?? []) {
    for (const [index, shot] of (program.screenshots ?? []).entries()) {
      items.push({
        ...shot,
        slot:
          shot.slot ??
          `Systems · ${program.title}${index > 0 ? ` · ${index + 1}` : ""}`,
      });
    }
  }

  return items;
}

export type ScreenshotBriefGroup = {
  slug: string;
  title: string;
  featured: boolean;
  items: ScreenshotAsset[];
  neededCount: number;
};

export function collectScreenshotBriefs(): ScreenshotBriefGroup[] {
  return getAllCaseStudies().map((study) => {
    const items = collectCaseStudyScreenshots(study);
    return {
      slug: study.slug,
      title: study.title,
      featured: study.featured,
      items,
      neededCount: items.filter(isScreenshotNeeded).length,
    };
  });
}

export function getTotalNeededScreenshotCount(): number {
  return collectScreenshotBriefs().reduce((total, group) => total + group.neededCount, 0);
}
