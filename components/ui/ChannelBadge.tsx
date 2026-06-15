import { PlatformIcon } from "@/components/icons/PlatformIcon";
import { channelLabels } from "@/lib/channels";
import type { Channel } from "@/lib/types";
import { cn } from "@/lib/utils";

type ChannelBadgeProps = {
  channel: Channel;
  className?: string;
  size?: "sm" | "md";
};

export function ChannelBadge({ channel, className, size = "md" }: ChannelBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border border-border font-mono text-muted",
        size === "sm" ? "px-2 py-0.5 text-[10px] uppercase tracking-wider" : "px-2.5 py-1 text-xs uppercase tracking-wider",
        className,
      )}
    >
      <PlatformIcon channel={channel} className={size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"} />
      {channelLabels[channel]}
    </span>
  );
}
