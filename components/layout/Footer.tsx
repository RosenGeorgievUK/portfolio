import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-sm font-medium text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">{siteConfig.title}</p>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
            Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Resume
          </a>
        </div>
        <p className="text-xs text-accent-muted">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
