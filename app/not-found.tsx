import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-bold text-foreground">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Go Home</Button>
        <Button href="/work" variant="secondary">
          View Work
        </Button>
      </div>
    </section>
  );
}
