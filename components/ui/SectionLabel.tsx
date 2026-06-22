import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span";
};

export function SectionLabel({
  children,
  className,
  as: Tag = "p",
}: SectionLabelProps) {
  return <Tag className={cn("label", className)}>{children}</Tag>;
}
