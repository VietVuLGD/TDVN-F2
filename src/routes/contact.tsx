import { createFileRoute } from "@tanstack/react-router";
import { Clock, FileText, Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/site/motion";
import { PageHero, Section } from "@/components/site/ui";
import { company, services } from "@/data/site";

const title = "Liên hệ TD VIỆT NAM — CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM";
const description =
  "Yêu cầu khảo sát khả thi, tư vấn giải pháp điện mặt trời và lưu trữ năng lượng. Trụ sở tại Hà Nội, phản hồi trong 24 giờ.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: title,
          description,
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Trao đổi giải pháp cùng đội ngũ kỹ sư"
        intro="Gửi cho chúng tôi thông tin công trình, nhu cầu sử dụng điện hoặc bản vẽ mặt bằng để nhận phản hồi tư vấn kỹ thuật chi tiết."
        breadcrumbs={[{ label: "Liên hệ" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form
              className="card-premium space-y-6 p-8 md:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Họ và tên" required />
                <Field id="company" label="Tên công ty / Đơn vị" />
                <Field id="email" label="Địa chỉ Email" type="email" required />
                <Field id="phone" label="Số điện thoại" type="tel" />
              </div>

              <div>
                <label htmlFor="interest" className="text-sm font-medium">
                  Nhu cầu dịch vụ / giải pháp
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                >
                  {services.map((s) => (
                    <option key={s.slug}>{s.title}</option>
                  ))}
                  <option>Nhu cầu khác</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Thông tin công trình / Nhu cầu kỹ thuật
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Vị trí công trình, loại mái/diện tích, mức tiêu thụ điện hàng tháng, tiến độ dự kiến…"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </div>

              <button type="submit" className="btn-primary">
                <Send className="size-4" aria-hidden />
                {sent
                  ? "Đã gửi thông tin — Chúng tôi sẽ liên hệ lại sớm nhất"
                  : "Gửi thông tin trao đổi"}
              </button>
              <p aria-live="polite" className="sr-only">
                {sent ? "Yêu cầu của bạn đã được ghi nhận." : ""}
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <div className="card-premium p-8">
              <h2 className="text-lg font-bold">Trụ sở công ty</h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">{company.address}</span>
                </li>
                <li className="flex gap-3">
                  <FileText className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">Mã số thuế: {company.taxId}</span>
                </li>
                <li className="flex gap-3">
                  <User className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">
                    Đại diện pháp luật: {company.representative} ({company.representativePosition})
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <a href={`mailto:${company.email}`} className="hover:text-primary">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span className="text-muted-foreground">SĐT: {company.phone}</span>
                </li>
              </ul>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-lg font-bold">Kênh hỗ trợ nhanh</h2>
              <ul className="mt-5 space-y-2.5 text-sm">
                {[
                  { label: "Zalo", href: company.channels.zalo },
                  { label: "WhatsApp", href: company.channels.whatsapp },
                  { label: "Messenger", href: company.channels.messenger },
                ].map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-muted-foreground transition hover:text-primary"
                    >
                      <MessageCircle className="size-4" aria-hidden />
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <Reveal className="overflow-hidden rounded-[1.75rem] border border-border">
            <iframe
              title="TD VIỆT NAM head office location"
              src={`https://www.google.com/maps?q=${company.mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[26rem] w-full border-0"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}
