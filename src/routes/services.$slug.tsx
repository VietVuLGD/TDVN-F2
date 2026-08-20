import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Reveal } from "@/components/site/motion";
import { ServiceIcon } from "@/components/site/service-icon";
import { CTASection, PageHero, Section } from "@/components/site/ui";
import { services } from "@/data/site";

const serviceSlugMap: Record<string, string> = {
  "design-consulting": "solar-design",
  epc: "solar-epc",
  om: "operations-maintenance",
  "grid-integration": "ess-integration",
  "energy-audit": "energy-consulting",
};

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = (services.find((s) => s.slug === params.slug) || services[0])!;
    const title = `${service.title} | TD VIỆT NAM`;
    return {
      meta: [
        { title },
        { name: "description", content: service.description },
        { property: "og:title", content: title },
        { property: "og:description", content: service.description },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = (services.find((s) => s.slug === slug) || services[0])!;

  return (
    <>
      <PageHero
        eyebrow="Dịch vụ"
        title={service.title}
        intro={service.description}
        breadcrumbs={[{ label: "Dịch vụ", to: "/services" }, { label: service.title }]}
      />

      <Section>
        <Reveal className="card-premium grid gap-10 p-9 md:grid-cols-[1fr_1fr] md:p-12">
          <div>
            <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
              <ServiceIcon name={service.icon} className="size-5" />
            </span>
            <h2 className="mt-7 text-2xl font-extrabold md:text-3xl">{service.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
          <div className="md:border-l md:border-border md:pl-10">
            <p className="eyebrow">Hạng mục bàn giao (Deliverables)</p>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
