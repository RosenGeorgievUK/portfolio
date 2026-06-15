import type { Channel } from "@/lib/types";
import { cn } from "@/lib/utils";

type CaseStudyCoverProps = {
  title: string;
  channels: Channel[];
  className?: string;
};

export function CaseStudyCover({
  title,
  channels,
  className,
}: CaseStudyCoverProps) {
  return (
    <div
      className={cn(
        "flex items-end border-b border-border bg-surface p-6",
        className,
      )}
    >
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.15em] text-muted">
          {channels.length} channel{channels.length > 1 ? "s" : ""}
        </p>
        <p className="font-heading text-lg font-bold leading-snug text-foreground md:text-xl">
          {title}
        </p>
      </div>
    </div>
  );
}
