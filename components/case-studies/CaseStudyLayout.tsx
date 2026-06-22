import { CaseStudyNav, type CaseStudyNavItem } from "./CaseStudyNav";

type CaseStudyLayoutProps = {
  navItems: CaseStudyNavItem[];
  header: React.ReactNode;
  children: React.ReactNode;
};

export function CaseStudyLayout({
  navItems,
  header,
  children,
}: CaseStudyLayoutProps) {
  return (
    <article className="mx-auto max-w-6xl px-6 pb-24 pt-32">
      {header}

      <div className="mt-8 lg:hidden">
        <CaseStudyNav items={navItems} variant="pills" />
      </div>

      <div className="mt-16 grid gap-16 lg:grid-cols-[11rem_1fr] lg:gap-20">
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            <CaseStudyNav items={navItems} variant="sidebar" />
          </div>
        </aside>
        <div className="min-w-0 space-y-16">{children}</div>
      </div>
    </article>
  );
}
