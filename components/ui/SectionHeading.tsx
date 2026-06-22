import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="label mb-3">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
            <p className="prose text-prose">{description}</p>
      ) : null}
    </div>
  );
}
