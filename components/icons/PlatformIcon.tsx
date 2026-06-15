import type { Channel } from "@/lib/types";
import { cn } from "@/lib/utils";

type PlatformIconProps = {
  channel: Channel;
  className?: string;
};

export function PlatformIcon({ channel, className }: PlatformIconProps) {
  const classes = cn("text-foreground", className);

  switch (channel) {
    case "amazon":
    case "amazon-renew":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="currentColor" aria-hidden="true">
          <path d="M14.09 16.5c-4.2 2.4-8.67 3.6-10.5 4.05-.2.05-.43-.1-.48-.3-.05-.2.1-.43.3-.48 1.7-.4 5.8-1.55 9.7-3.75.22-.12.5-.04.62.18.12.22.04.5-.18.62l-.46.28z" />
          <path d="M12.2 2C6.5 2 2 6.2 2 11.5c0 2.7 1.2 5.1 3.1 6.8-.1-.9-.05-2 .3-3 .35-1.15 2.1-7.7 2.1-7.7s-.55-.95-.55-2.3c0-2.15 1.25-3.75 2.8-3.75 1.3 0 1.95 1 1.95 2.1 0 1.3-.85 3.2-1.25 5-.35 1.5.75 2.75 2.2 2.75 2.65 0 4.45-3.45 4.45-7.55 0-3.15-2.1-5.95-6.05-5.95-4.45 0-7.2 3.3-7.2 7 0 1.35.45 2.35 1.15 3.1.15.15.15.3.1.5-.1.35-.35 1.15-.4 1.3-.05.2-.2.25-.45.15-1.7-.65-2.75-2.7-2.75-4.85C.9 7.15 4.85 2.5 11.05 2.5c5.05 0 8.45 3.65 8.45 7.55 0 5.35-3.35 9.35-8 9.35-1.55 0-3.05-.85-3.55-1.85l-.95 3.65c-.35 1.3-1.25 2.95-1.85 3.95 1.4.45 2.9.7 4.45.7 5.7 0 10.35-4.65 10.35-10.35C22.55 6.65 17.9 2 12.2 2z" />
        </svg>
      );
    case "ebay":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="currentColor" aria-hidden="true">
          <path d="M4.5 6h3.2l1.8 5.5L11.3 6h3.1l-3.8 12H7.3L4.5 6zm8.5 0h5.5c2.2 0 3.8 1.2 3.8 3.5 0 2.8-2 4.5-4.8 4.5h-1.8l-.9 4H12l2-12zm2.8 6.2h1.4c1.1 0 1.8-.6 1.8-1.6 0-.9-.6-1.4-1.6-1.4h-1.3l-.3 3z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="currentColor" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1.1-.07z" />
        </svg>
      );
    case "shopify":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="currentColor" aria-hidden="true">
          <path d="M15.34 3.5l-.2-.1s-1.5-.45-3.9-.35c-.15-.45-.35-.95-.65-1.45C9.84.7 8.74.2 7.44.2c-.1 0-.2 0-.3.05C6.94.1 6.74.05 6.54.05 4.74.05 3.24 1.35 2.54 3.25c-1 .25-1.7.45-1.75.5L.04 4.15v15.65l12.5 2.2 8.4-2.05V3.5h-5.6z" />
        </svg>
      );
    case "woocommerce":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="currentColor" aria-hidden="true">
          <path d="M2 4h20v16H2V4zm3.5 3.5c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h1.5l2-4.5 2 4.5h1.5c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1h-1.8l-1.7 4-1.7-4H5.5zm8 0c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4.5v-1.5h-3V12h2.5v-1.5h-2.5V9h3V7.5h-4.5z" />
        </svg>
      );
    case "temu":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H8v-6h3v6zm5 0h-3v-6h3v6zm0-8H8V7h8v2z" />
        </svg>
      );
    case "onbuy":
      return (
        <svg viewBox="0 0 24 24" className={classes} fill="currentColor" aria-hidden="true">
          <path d="M4 4h16v16H4V4zm3 3v10h2.5l2-5 2 5H16V7h-2.5l-2 5-2-5H7z" />
        </svg>
      );
    default:
      return null;
  }
}
