import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function ExecutiveContact() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Contact
        </p>
        <h2 className="mt-3 max-w-lg font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Open to senior e-commerce leadership roles.
        </h2>
        <div className="mt-10 flex flex-wrap gap-8 text-sm">
          <Link
            href="/contact"
            className="text-foreground underline underline-offset-4 hover:text-muted"
          >
            Send a message
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted hover:text-foreground"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
