import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/site/motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-3xl leading-[1.05] font-extrabold sm:text-4xl md:text-[2.9rem]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className="transition hover:text-foreground">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5 opacity-60" aria-hidden />
            {item.to ? (
              <Link to={item.to} className="transition hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumbs: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border bg-white pt-[8.5rem] pb-16 md:pt-40 md:pb-24">
      <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-20" />
      <div className="container-page relative">
        <Breadcrumbs items={breadcrumbs} />
        <Reveal className="mt-8 max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-extrabold text-foreground sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          )}
          {children}
        </Reveal>
      </div>
    </header>
  );
}

export function CTAButton({
  to,
  children,
  variant = "primary",
  params,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  params?: Record<string, string>;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition";
  const styles = {
    primary:
      "bg-primary text-primary-foreground shadow-xs hover:bg-primary-hover transition-colors",
    ghost:
      "border border-border bg-white text-foreground hover:border-primary hover:text-primary transition-colors",
    light:
      "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors",
  } as const;

  return (
    <Link to={to as never} params={(params ?? {}) as never} className={cn(base, styles[variant])}>
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function CTASection({
  title = "Đang triển khai một dự án năng lượng hoặc hệ thống điện?",
  text = "Đội ngũ kỹ sư TD VIỆT NAM sẵn sàng hỗ trợ khảo sát thực địa, tính toán mô hình sản lượng PVSyst và lập phương án kỹ thuật tối ưu cho công trình của bạn.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <Reveal className="bg-gradient-ink relative overflow-hidden rounded-[2rem] px-8 py-16 text-ink-foreground md:px-16 md:py-24">
          <div aria-hidden className="bg-veil pointer-events-none absolute inset-0" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl leading-[1.05] font-extrabold sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-foreground/70 md:text-lg">
              {text}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTAButton to="/contact">Trao đổi với kỹ sư</CTAButton>
              <CTAButton to="/projects" variant="light">
                Xem công trình thực tế
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function StatBlock({ value, label }: { value: ReactNode; label: string }) {
  return (
    <div className="border-l border-border pl-5">
      <p className="font-display text-3xl font-extrabold md:text-4xl">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
