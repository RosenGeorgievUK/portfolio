import type { CaseStudy } from "./types";

export function getCaseStudyCardSummary(study: CaseStudy): string {
  return study.cardSummary ?? study.summary;
}

export function getCaseStudyChallengeParagraphs(study: CaseStudy): string[] {
  if (study.challengeParagraphs?.length) {
    return study.challengeParagraphs;
  }
  return [study.challenge];
}
