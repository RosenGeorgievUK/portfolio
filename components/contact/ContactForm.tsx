"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none focus:border-foreground"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none focus:border-foreground"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-sm text-foreground outline-none focus:border-foreground"
        />
      </div>
      <button
        type="submit"
        className="text-sm text-foreground underline underline-offset-4 hover:text-muted"
      >
        Send
      </button>
      {sent ? (
        <p className="text-xs text-muted">Opening mail client.</p>
      ) : null}
    </form>
  );
}
