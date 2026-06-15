import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name}`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-xl px-6 pb-24 pt-32">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">Contact</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-foreground">
        Get in touch
      </h1>
      <p className="mt-6 text-base text-muted">
        For senior e-commerce roles or leadership conversations.
      </p>
      <p className="mt-4">
        <a href={`mailto:${siteConfig.email}`} className="text-sm text-foreground hover:text-muted">
          {siteConfig.email}
        </a>
      </p>
      <ContactForm />
    </section>
  );
}
