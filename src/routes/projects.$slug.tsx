import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileText,
  HardHat,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { ProjectCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/motion";
import { CTASection, Breadcrumbs, Section } from "@/components/site/ui";
import { projectCategories, projects, type Project } from "@/data/projects";
import { useLanguage } from "@/i18n";
import { getImage } from "@/lib/images";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    return { project: project || null };
  },
  head: ({ params, loaderData }) => {
    const project = loaderData?.project || projects.find((p) => p.slug === params.slug);
    if (!project) {
      return {
        meta: [
          { title: "Dự án không tìm thấy | TD VIỆT NAM" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${typeof project.title === "object" ? project.title.vi : project.title} — TD VIỆT NAM`;
    const desc =
      typeof project.description === "object" ? project.description.vi : project.description;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  const { t } = useLanguage();
  return (
    <div className="container-page pt-36 pb-24 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
          {t("projects.notFoundTitle") || "Không tìm thấy dự án"}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Dự án bạn đang tìm kiếm không tồn tại hoặc đã được cập nhật.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {t("nav.projects") || "Danh sách dự án"}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary"
          >
            {t("nav.contact") || "Liên hệ"}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const loaderData = Route.useLoaderData() as { project?: Project | null } | undefined;
  const { slug } = Route.useParams();
  const project = loaderData?.project || projects.find((p) => p.slug === slug);
  const { language } = useLanguage();

  if (!project) {
    return <ProjectNotFound />;
  }

  const isEn = language === "en";

  const title = typeof project.title === "object" ? project.title[language] : project.title;
  const client = typeof project.client === "object" ? project.client[language] : project.client;
  const location =
    typeof project.location === "object" ? project.location[language] : project.location;
  const capacity =
    typeof project.capacity === "object" ? project.capacity[language] : project.capacity;
  const technology =
    typeof project.technology === "object" ? project.technology[language] : project.technology;
  const description =
    typeof project.description === "object" ? project.description[language] : project.description;
  const challenge =
    typeof project.challenge === "object" ? project.challenge[language] : project.challenge;
  const solution =
    typeof project.solution === "object" ? project.solution[language] : project.solution;

  const engineeringScope =
    typeof project.engineeringScope === "object" &&
    Array.isArray(project.engineeringScope[language])
      ? project.engineeringScope[language]
      : Array.isArray(project.engineeringScope)
        ? (project.engineeringScope as string[])
        : [];

  const outcomes =
    typeof project.outcomes === "object" && Array.isArray(project.outcomes[language])
      ? project.outcomes[language]
      : Array.isArray(project.outcomes)
        ? (project.outcomes as string[])
        : [];

  const categoryObj = projectCategories.find((c) => c.key === project.category);
  const categoryName = categoryObj ? categoryObj.name[language] : project.category;

  const statusLabel =
    project.status === "completed"
      ? isEn
        ? "Completed"
        : "Đã hoàn thành"
      : project.status === "ongoing"
        ? isEn
          ? "Ongoing"
          : "Đang triển khai"
        : isEn
          ? "Updating"
          : "Đang cập nhật";

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const keyFacts = [
    { label: isEn ? "Client" : "Khách hàng", value: client },
    { label: isEn ? "Location" : "Địa điểm", value: location },
    { label: isEn ? "Capacity" : "Công suất", value: capacity },
    { label: isEn ? "Technology" : "Công nghệ", value: technology },
    { label: isEn ? "Status" : "Trạng thái", value: statusLabel },
    { label: isEn ? "Year" : "Năm triển khai", value: String(project.year) },
  ];

  return (
    <>
      {/* Header & Hero Image */}
      <header className="relative overflow-hidden border-b border-border bg-background pt-[8.5rem] pb-0 md:pt-40">
        <div className="container-page">
          <Breadcrumbs
            items={[{ label: isEn ? "Projects" : "Dự án", to: "/projects" }, { label: title }]}
          />

          <Reveal className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                {categoryName}
              </span>
              <span className="rounded-full bg-muted px-3.5 py-1 text-xs font-semibold text-muted-foreground">
                {location}
              </span>
            </div>

            <h1 className="mt-4 text-3xl leading-[1.08] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{description}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="overflow-hidden rounded-t-[2rem] border border-b-0 border-border bg-muted shadow-lg">
              <img
                src={getImage(project.image)}
                alt={`${title} - ${client}`}
                width={1600}
                height={900}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* Engineering Fact Sheet / Overview Bar */}
      <section className="border-b border-border bg-surface py-12">
        <div className="container-page">
          <h2 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
            {isEn ? "ENGINEERING OVERVIEW" : "THÔNG SỐ TỔNG QUAN CÔNG TRÌNH"}
          </h2>
          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {keyFacts.map((fact) => (
              <div key={fact.label} className="bg-background p-6">
                <dt className="text-xs font-medium text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1.5 font-display text-base font-bold text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Case Study Content */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.8fr_1fr]">
          <div className="space-y-14">
            {/* 1. Engineering Challenge */}
            <Reveal>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <ShieldCheck className="size-5" />
                </div>
                <h2 className="text-2xl font-extrabold">
                  {isEn ? "1. Engineering Challenge" : "1. Bài toán Kỹ thuật"}
                </h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{challenge}</p>
            </Reveal>

            {/* 2. Engineering Solution */}
            <Reveal>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <Cpu className="size-5" />
                </div>
                <h2 className="text-2xl font-extrabold">
                  {isEn ? "2. Engineering Solution" : "2. Giải pháp Kỹ thuật"}
                </h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{solution}</p>
            </Reveal>

            {/* 3. Scope of Work */}
            {engineeringScope.length > 0 && (
              <Reveal>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Wrench className="size-5" />
                  </div>
                  <h2 className="text-2xl font-extrabold">
                    {isEn
                      ? "3. Scope of Work (EPC Deliverables)"
                      : "3. Phạm vi Thực hiện (Scope of Work)"}
                  </h2>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {engineeringScope.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-sm font-medium"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {/* 4. Operational Outcomes */}
            {outcomes.length > 0 && (
              <Reveal>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <HardHat className="size-5" />
                  </div>
                  <h2 className="text-2xl font-extrabold">
                    {isEn ? "4. Operational Outcomes" : "4. Kết quả & Hiệu quả Vận hành"}
                  </h2>
                </div>
                <ul className="mt-6 space-y-3">
                  {outcomes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base text-muted-foreground"
                    >
                      <span className="mt-2 size-2 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          {/* Sidebar: Technical Specifications Schedule */}
          <div>
            <Reveal delay={0.1} className="sticky top-28">
              <div className="card-premium p-6 sm:p-8">
                <div className="flex items-center gap-2.5 text-primary">
                  <FileText className="size-5" />
                  <h2 className="text-base font-bold">
                    {isEn ? "Technical Specifications" : "Thông số Kỹ thuật Công trình"}
                  </h2>
                </div>

                <dl className="mt-6 space-y-4 text-xs">
                  {project.keySpecifications.map((spec, idx) => {
                    const labelStr =
                      typeof spec.label === "object" ? spec.label[language] : spec.label;
                    const valStr =
                      typeof spec.value === "object" ? spec.value[language] : spec.value;
                    return (
                      <div
                        key={idx}
                        className="border-b border-border pb-3.5 last:border-0 last:pb-0"
                      >
                        <dt className="font-medium text-muted-foreground">{labelStr}</dt>
                        <dd className="mt-1 font-semibold text-foreground text-sm">{valStr}</dd>
                      </div>
                    );
                  })}
                </dl>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isEn
                      ? "Have a similar technical requirement for your plant or grid infrastructure?"
                      : "Bạn cần tư vấn giải pháp kỹ thuật tương tự cho nhà máy hoặc công trình của mình?"}
                  </p>
                  <Link to="/contact" className="mt-4 btn-primary w-full justify-center text-xs">
                    <span>
                      {isEn ? "Consult TD VIETNAM Engineers" : "Trao đổi với Đội ngũ Kỹ thuật"}
                    </span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Related Case Studies */}
      {related.length > 0 && (
        <Section className="bg-surface">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold">
              {isEn ? "Related Engineering Projects" : "Các công trình kỹ thuật liên quan"}
            </h2>
            <Link to="/projects" className="text-sm font-semibold text-primary hover:underline">
              {isEn ? "View all projects →" : "Xem tất cả dự án →"}
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
