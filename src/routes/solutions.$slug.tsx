import { createFileRoute } from "@tanstack/react-router";

import { ProjectCard } from "@/components/site/cards";
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import { CTASection, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { projects, solutions } from "@/data/site";

const solutionSlugMap: Record<string, string> = {
  solar: "commercial",
  bess: "storage-microgrid",
  "solar-bess": "storage-microgrid",
  industrial: "industrial",
  substation: "industrial",
  microgrid: "storage-microgrid",
};

export const Route = createFileRoute("/solutions/$slug")({
  head: ({ params }) => {
    const solution = (solutions.find((s) => s.slug === params.slug) || solutions[0])!;
    const title = `${solution.title} | TD VIỆT NAM`;
    return {
      meta: [
        { title },
        { name: "description", content: solution.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: solution.summary },
        { property: "og:url", content: `/solutions/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solutions/${params.slug}` }],
    };
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const { slug } = Route.useParams();
  const solution = (solutions.find((s) => s.slug === slug) || solutions[0])!;

  return (
    <>
      <PageHero
        eyebrow="Giải pháp"
        title={solution.title}
        intro={solution.summary}
        breadcrumbs={[{ label: "Giải pháp", to: "/solutions" }, { label: solution.title }]}
      />

      <Section>
        <Reveal className="card-premium grid gap-10 p-9 md:grid-cols-[1.2fr_1fr] md:p-12">
          <div>
            <p className="eyebrow">{solution.audience}</p>
            <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">{solution.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {solution.summary}
            </p>
            <ul className="mt-8 grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
              {solution.points.map((point) => (
                <li key={point} className="flex gap-2.5">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-ink grid place-items-center rounded-2xl p-10 text-center text-ink-foreground">
            <div>
              <p className="font-display text-5xl font-extrabold">{solution.metric.value}</p>
              <p className="mt-3 text-sm text-ink-foreground/70">{solution.metric.label}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Dự án tiêu biểu" title="Giải pháp đã triển khai thực tế" />
        <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
