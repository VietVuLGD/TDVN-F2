import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { CTASection, PageHero, Section } from "@/components/site/ui";
import { faqs } from "@/data/site";

const title = "Hỏi đáp | TD VIỆT NAM";
const description =
  "Giải đáp các thắc mắc thường gặp về tiến độ, bảo hành, kỹ thuật và dịch vụ điện mặt trời tại TD VIỆT NAM.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/faq" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Hỏi đáp"
        title="Các câu hỏi thường gặp về kỹ thuật & dự án"
        intro="Tổng hợp thông tin về quy trình triển khai, tiêu chuẩn an toàn, vận hành O&M và bảo hành thiết bị."
        breadcrumbs={[{ label: "Hỏi đáp" }]}
      />

      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <h2>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold transition hover:text-primary"
                >
                  {faq.q}
                  {open === i ? (
                    <Minus className="size-4 shrink-0 text-primary" aria-hidden />
                  ) : (
                    <Plus className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                  )}
                </button>
              </h2>
              {open === i && (
                <p className="pb-7 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Bạn cần hỗ trợ câu hỏi kỹ thuật cụ thể?"
        text="Gửi thông tin vướng mắc của bạn, đội ngũ kỹ sư TD VIỆT NAM sẽ tư vấn và giải đáp chi tiết."
      />
    </>
  );
}
