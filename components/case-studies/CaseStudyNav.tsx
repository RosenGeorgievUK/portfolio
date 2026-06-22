"use client";

import { cn } from "@/lib/utils";

export type CaseStudyNavItem = {
  id: string;
  label: string;
};

type CaseStudyNavProps = {
  items: CaseStudyNavItem[];
  variant?: "sidebar" | "pills";
};

export function CaseStudyNav({ items, variant = "sidebar" }: CaseStudyNavProps) {
  if (variant === "pills") {
    return (
      <nav
        aria-label="Case study sections"
        className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav aria-label="Case study sections" className="space-y-1">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "block py-1.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground",
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
