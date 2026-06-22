import { cn } from "@/lib/utils";

type ProseProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
  as?: "div" | "p";
};

export function Prose({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: ProseProps) {
  return (
    <Tag
      className={cn(
        "prose text-prose",
        size === "lg" && "prose-lg",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
