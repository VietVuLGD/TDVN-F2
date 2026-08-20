import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  FileCheck2,
  FileCode,
  FileText,
  Filter,
  FolderDown,
  Globe2,
  Info,
  Layers,
  Mail,
  ShieldCheck,
  Tag,
  Wrench,
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import { Breadcrumbs, CTASection, PageHero, Section } from "@/components/site/ui";
import {
  documentStatusMap,
  documentTypesList,
  downloadDocuments,
  type DownloadDocument,
} from "@/data/downloads";
import { knowledgeArticles } from "@/data/knowledge";
import { productCategories, products } from "@/data/products";
import { projects } from "@/data/projects";
import { company } from "@/data/site";
import { useLanguage } from "@/i18n";

const categoryMap: Record<
  string,
  {
    titleVi: string;
    titleEn: string;
    descriptionVi: string;
    descriptionEn: string;
    icon: typeof FileText;
    docTypeFilter?: string;
  }
> = {
  datasheets: {
    titleVi: "Datasheet Kỹ thuật",
    titleEn: "Technical Datasheets",
    descriptionVi:
      "Thông số kỹ thuật chi tiết tấm pin, inverter, tủ điện và hệ thống lưu trữ BESS.",
    descriptionEn:
      "Electrical and mechanical specifications for PV modules, inverters, switchgear and BESS.",
    icon: FileCode,
    docTypeFilter: "datasheet",
  },
  catalogues: {
    titleVi: "Catalogue Sản phẩm & Giải pháp",
    titleEn: "Product & Solution Catalogues",
    descriptionVi: "Danh mục sản phẩm, giải pháp tổng thể và bản vẽ mô phỏng hệ thống.",
    descriptionEn: "Product line overview, integrated solution brochures and system mockups.",
    icon: FolderDown,
    docTypeFilter: "catalogue",
  },
  "technical-documents": {
    titleVi: "Tài liệu Kỹ thuật & Thiết kế",
    titleEn: "Technical & Engineering Documents",
    descriptionVi: "Sơ đồ nguyên lý, tiêu chuẩn đấu nối lưới điện và tài liệu thiết kế.",
    descriptionEn: "Single-line diagrams, grid code compliance standards and design documentation.",
    icon: FileText,
    docTypeFilter: "technical-document",
  },
  "installation-guides": {
    titleVi: "Hướng dẫn Lắp đặt & Thi công",
    titleEn: "Installation & Operation Guides",
    descriptionVi: "Quy trình thi công, an toàn lao động và nghiệm thu công trình.",
    descriptionEn: "Construction procedures, safety protocols, and commissioning guidelines.",
    icon: Wrench,
    docTypeFilter: "installation-manual",
  },
  certifications: {
    titleVi: "Chứng nhận & Chứng chỉ Chất lượng",
    titleEn: "Quality Certifications & Test Reports",
    descriptionVi: "Chứng chỉ kiểm định ISO, TCVN, Tier-1 và chất lượng thiết bị.",
    descriptionEn:
      "ISO certifications, TCVN standards, Tier-1 test reports and equipment quality certs.",
    icon: ShieldCheck,
    docTypeFilter: "certificate",
  },
  "company-profile": {
    titleVi: "Hồ sơ Năng lực Doanh nghiệp",
    titleEn: "Corporate Capacity & Profile",
    descriptionVi: "Hồ sơ năng lực doanh nghiệp, chứng chỉ hoạt động xây dựng và năng lực pháp lý.",
    descriptionEn:
      "Corporate profile, construction practice licenses, and legal engineering qualifications.",
    icon: FileCheck2,
    docTypeFilter: "company-profile",
  },
};

export const Route = createFileRoute("/downloads/$slug")({
  head: ({ params }) => {
    // Check if matching a specific document
    const doc = downloadDocuments.find((d) => d.slug === params.slug || d.id === params.slug);

    if (doc) {
      const title = `${doc.title.vi} | TD VIỆT NAM`;
      return {
        meta: [
          { title },
          { name: "description", content: doc.description.vi },
          { property: "og:title", content: title },
          { property: "og:description", content: doc.description.vi },
          { property: "og:url", content: `/downloads/${params.slug}` },
        ],
        links: [{ rel: "canonical", href: `/downloads/${params.slug}` }],
      };
    }

    // Category fallback
    const info = categoryMap[params.slug] || {
      titleVi: "Tài liệu kỹ thuật",
      titleEn: "Technical Documents",
      descriptionVi: "Trung tâm tài nguyên kỹ thuật TD VIỆT NAM",
      descriptionEn: "TD VIETNAM Technical Resource Center",
    };
    const title = `${info.titleVi} | TD VIỆT NAM`;
    return {
      meta: [
        { title },
        { name: "description", content: info.descriptionVi },
        { property: "og:title", content: title },
        { property: "og:description", content: info.descriptionVi },
        { property: "og:url", content: `/downloads/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/downloads/${params.slug}` }],
    };
  },
  component: DownloadSlugRoute,
});

function DownloadSlugRoute() {
  const { slug } = Route.useParams();
  const { language } = useLanguage();
  const isEn = language === "en";

  // Check if matching a document slug or ID
  const matchedDoc = downloadDocuments.find((d) => d.slug === slug || d.id === slug);

  if (matchedDoc) {
    return <DocumentDetailView doc={matchedDoc} isEn={isEn} language={language} />;
  }

  // Otherwise, render Category View
  return <DownloadCategoryDetail slug={slug} isEn={isEn} language={language} />;
}

// 1. Single Document Detail View Component
function DocumentDetailView({
  doc,
  isEn,
  language,
}: {
  doc: DownloadDocument;
  isEn: boolean;
  language: "vi" | "en";
}) {
  const titleText = doc.title[language] || doc.title.vi;
  const descText = doc.description[language] || doc.description.vi;

  const linkedProduct = doc.relatedProduct
    ? products.find((p) => p.slug === doc.relatedProduct)
    : undefined;
  const linkedProject = doc.relatedProject
    ? projects.find((p) => p.slug === doc.relatedProject)
    : undefined;
  const linkedKnowledge = doc.relatedKnowledge
    ? knowledgeArticles.find((k) => k.slug === doc.relatedKnowledge)
    : undefined;

  const typeObj = documentTypesList.find((t) => t.key === doc.type);
  const typeLabel = typeObj ? typeObj.label[language] : doc.type;

  return (
    <>
      <PageHero
        eyebrow={isEn ? "TECHNICAL DOCUMENT DETAIL" : "CHI TIẾT TÀI LIỆU KỸ THUẬT"}
        title={titleText}
        intro={descText}
        breadcrumbs={[
          { label: isEn ? "Technical Resources" : "Tài nguyên kỹ thuật", to: "/downloads" },
          { label: titleText },
        ]}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Info Box */}
          <div className="lg:col-span-2 space-y-8">
            <Reveal className="rounded-2xl border border-border bg-surface p-6 md:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
                  {typeLabel}
                </span>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-extrabold uppercase text-muted-foreground">
                    {doc.language === "bilingual" ? "Song ngữ VI / EN" : doc.language.toUpperCase()}
                  </span>
                  <span
                    className={`rounded-md px-2.5 py-1 text-xs font-extrabold ${
                      doc.status === "available"
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                        : "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                    }`}
                  >
                    {documentStatusMap[doc.status][language]}
                  </span>
                </div>
              </div>

              <h2 className="mt-6 text-2xl font-extrabold leading-snug">{titleText}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{descText}</p>

              {/* Technical Specifications / Document Attributes */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 rounded-xl bg-background p-5 border border-border/60">
                <div>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground block">
                    {isEn ? "Document ID" : "Mã tài liệu"}
                  </span>
                  <span className="text-xs font-semibold text-foreground">{doc.id}</span>
                </div>
                <div>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground block">
                    {isEn ? "Category" : "Phân loại"}
                  </span>
                  <span className="text-xs font-semibold text-foreground capitalize">
                    {doc.category}
                  </span>
                </div>
                {doc.version && (
                  <div>
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground block">
                      {isEn ? "Version" : "Phiên bản"}
                    </span>
                    <span className="text-xs font-semibold text-foreground">{doc.version}</span>
                  </div>
                )}
                {doc.updatedAt && (
                  <div>
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground block">
                      {isEn ? "Last Updated" : "Cập nhật gần nhất"}
                    </span>
                    <span className="text-xs font-semibold text-foreground">{doc.updatedAt}</span>
                  </div>
                )}
              </div>

              {/* Action Box */}
              <div className="mt-8 pt-6 border-t border-border">
                {doc.status === "available" && doc.fileUrl ? (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-primary-soft/40 p-5 border border-primary/20">
                    <div>
                      <h4 className="text-sm font-bold">
                        {isEn ? "Ready for Download" : "Tài liệu sẵn sàng"}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {isEn
                          ? "Official PDF publication file"
                          : "File tài liệu PDF chính thức từ TD VIỆT NAM"}
                      </p>
                    </div>
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-sm transition hover:opacity-90 shrink-0"
                    >
                      <Download className="size-4" />
                      {isEn ? "Download PDF" : "Tải về PDF"} ({doc.fileSize || "PDF"})
                    </a>
                  </div>
                ) : (
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6">
                    <div className="flex items-start gap-3">
                      <Clock className="size-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          {isEn ? "Document being updated" : "Tài liệu đang được cập nhật"}
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {isEn
                            ? "This technical document is currently being updated to align with the latest regulations and product revisions. Please contact our engineering team to receive custom CAD files or direct datasheets."
                            : "Tài liệu kỹ thuật này đang được bộ phận chuyên môn cập nhật theo phiên bản thiết bị và quy chuẩn mới nhất. Quý khách vui lòng liên hệ kỹ sư TD VIỆT NAM để nhận trực tiếp bản vẽ hoặc hồ sơ cập nhật."}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          <Link
                            to="/contact"
                            search={{ interest: doc.relatedProduct || doc.id }}
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition hover:opacity-90"
                          >
                            <Mail className="size-3.5" />
                            {isEn ? "Talk to an Engineer" : "Trao đổi với kỹ sư"}
                          </Link>
                          <a
                            href={`mailto:${company.email}?subject=Yeu cau tai lieu: ${encodeURIComponent(
                              doc.title.vi,
                            )}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                          >
                            {isEn ? "Send Email Request" : "Gửi email yêu cầu tài liệu"} →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Related Items Sections */}
            {(linkedProduct || linkedProject || linkedKnowledge) && (
              <Reveal className="rounded-2xl border border-border bg-surface p-6 md:p-8">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Layers className="size-5 text-primary" />
                  {isEn
                    ? "Associated Context & Products"
                    : "Liên kết kỹ thuật & Thiết bị liên quan"}
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {linkedProduct && (
                    <div className="rounded-xl border border-border bg-background p-5">
                      <span className="text-[0.65rem] font-bold uppercase text-primary tracking-wider block mb-1">
                        {isEn ? "Linked Product" : "Sản phẩm liên quan"}
                      </span>
                      <h4 className="text-sm font-bold">{linkedProduct.name[language]}</h4>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {linkedProduct.shortDescription[language]}
                      </p>
                      <Link
                        to="/products/$slug"
                        params={{ slug: linkedProduct.slug }}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                      >
                        {isEn ? "View product detail" : "Xem trang sản phẩm"} →
                      </Link>
                    </div>
                  )}

                  {linkedProject && (
                    <div className="rounded-xl border border-border bg-background p-5">
                      <span className="text-[0.65rem] font-bold uppercase text-primary tracking-wider block mb-1">
                        {isEn ? "Linked Case Study" : "Dự án áp dụng"}
                      </span>
                      <h4 className="text-sm font-bold">{linkedProject.title[language]}</h4>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {linkedProject.description[language]}
                      </p>
                      <Link
                        to="/projects/$slug"
                        params={{ slug: linkedProject.slug }}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                      >
                        {isEn ? "View project case study" : "Xem dự án thực tế"} →
                      </Link>
                    </div>
                  )}

                  {linkedKnowledge && (
                    <div className="rounded-xl border border-border bg-background p-5">
                      <span className="text-[0.65rem] font-bold uppercase text-primary tracking-wider block mb-1">
                        {isEn ? "Knowledge Article" : "Bài viết chuyên môn"}
                      </span>
                      <h4 className="text-sm font-bold">{linkedKnowledge.title[language]}</h4>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {linkedKnowledge.excerpt[language]}
                      </p>
                      <Link
                        to="/knowledge/$slug"
                        params={{ slug: linkedKnowledge.slug }}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                      >
                        {isEn ? "Read article" : "Đọc bài viết"} →
                      </Link>
                    </div>
                  )}
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-base font-bold flex items-center gap-2 text-foreground">
                <ShieldCheck className="size-5 text-primary" />
                {isEn ? "Data Integrity Commitment" : "Cam kết tính chính xác tài liệu"}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {isEn
                  ? "TD VIETNAM commits to providing fully verified technical documentation. All electrical parameters and single-line drawings are checked by licensed engineers."
                  : "TD VIỆT NAM cam kết cung cấp tài liệu kỹ thuật được xác thực đầy đủ. Mọi thông số điện năng và sơ đồ đơn tuyến đều được kiểm tra bởi kỹ sư chuyên môn."}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-[#FAFAFA] p-6 shadow-xs">
              <h3 className="text-base font-bold">
                {isEn ? "Direct Technical Inquiry" : "Tư vấn kỹ thuật trực tiếp"}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {isEn
                  ? "Need single-line diagrams or CAD models for bidding dossiers?"
                  : "Cần sơ đồ đơn tuyến, bản vẽ CAD hoặc hồ sơ năng lực dự thầu?"}
              </p>
              <Link
                to="/contact"
                search={{ interest: doc.id }}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-xs font-bold text-primary-foreground shadow-xs transition hover:bg-primary-hover"
              >
                <Mail className="size-4" />
                {isEn ? "Talk to an Engineer" : "Trao đổi với kỹ sư"}
              </Link>
            </div>

            <div className="text-center pt-2">
              <Link
                to="/downloads"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="size-3.5" />
                {isEn ? "Back to Technical Resource Center" : "Quay lại Trung tâm Tài liệu"}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}

// 2. Category Detail View Component
function DownloadCategoryDetail({
  slug,
  isEn,
  language,
}: {
  slug: string;
  isEn: boolean;
  language: "vi" | "en";
}) {
  const info = categoryMap[slug] || {
    titleVi: "Tài liệu kỹ thuật",
    titleEn: "Technical Documents",
    descriptionVi: "Danh mục tài nguyên kỹ thuật từ TD VIỆT NAM.",
    descriptionEn: "Technical document collection from TD VIETNAM.",
    icon: FileText,
  };

  const title = isEn ? info.titleEn : info.titleVi;
  const description = isEn ? info.descriptionEn : info.descriptionVi;
  const Icon = info.icon;

  // Filter documents matching this category slug or document type
  const docs = downloadDocuments.filter((doc) => {
    if (info.docTypeFilter) {
      return doc.type === info.docTypeFilter;
    }
    if (slug === "company-profile") {
      return doc.category === "company-profile";
    }
    return doc.category === slug;
  });

  return (
    <>
      <PageHero
        eyebrow={isEn ? "TECHNICAL RESOURCES" : "TÀI NGUYÊN KỸ THUẬT"}
        title={title}
        intro={description}
        breadcrumbs={[
          { label: isEn ? "Technical Resources" : "Tài nguyên kỹ thuật", to: "/downloads" },
          { label: title },
        ]}
      />

      <Section>
        {docs.length > 0 ? (
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {docs.map((doc: DownloadDocument) => {
              const linkedProduct = doc.relatedProduct
                ? products.find((p) => p.slug === doc.relatedProduct)
                : undefined;

              const titleText = doc.title[language] || doc.title.vi;
              const descText = doc.description[language] || doc.description.vi;

              return (
                <StaggerItem key={doc.id} className="h-full">
                  <article className="card-premium flex h-full flex-col justify-between p-7">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                          {doc.type}
                        </span>
                        <span className="rounded-md bg-muted px-2 py-0.5 text-[0.7rem] font-extrabold uppercase text-muted-foreground">
                          {doc.language === "bilingual" ? "VI / EN" : doc.language.toUpperCase()}
                        </span>
                      </div>

                      <h3 className="mt-4 text-lg font-bold leading-snug">
                        <Link
                          to="/downloads/$slug"
                          params={{ slug: doc.slug }}
                          className="hover:text-primary transition-colors"
                        >
                          {titleText}
                        </Link>
                      </h3>

                      {linkedProduct && (
                        <p className="mt-1.5 text-xs font-medium text-muted-foreground">
                          {isEn ? "Product:" : "Sản phẩm:"}{" "}
                          <Link
                            to="/products/$slug"
                            params={{ slug: linkedProduct.slug }}
                            className="text-primary hover:underline font-semibold"
                          >
                            {linkedProduct.name[language]}
                          </Link>
                        </p>
                      )}

                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                        {descText}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-border pt-4">
                      {doc.status === "available" && doc.fileUrl ? (
                        <a
                          href={doc.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
                        >
                          <Download className="size-4" />
                          {isEn ? "Download File" : "Tải tài liệu"} ({doc.fileSize || "PDF"})
                        </a>
                      ) : (
                        <div className="rounded-xl bg-surface p-3.5 text-xs border border-border/80">
                          <div className="flex items-center justify-between gap-2">
                            <span className="flex items-center gap-1.5 font-medium text-muted-foreground">
                              <Clock className="size-3.5 text-amber-600 dark:text-amber-400" />
                              {documentStatusMap.updating[language]}
                            </span>
                            <span className="rounded-full bg-muted px-2 py-0.5 text-[0.65rem] font-bold text-muted-foreground uppercase">
                              PDF
                            </span>
                          </div>
                          <div className="mt-2 text-right">
                            <Link
                              to="/contact"
                              search={{ interest: doc.relatedProduct || doc.id }}
                              className="inline-flex items-center gap-1 text-[0.75rem] font-bold text-primary hover:underline"
                            >
                              <Mail className="size-3" />
                              {isEn ? "Talk to Engineer" : "Trao đổi với kỹ sư"} →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        ) : (
          <Reveal className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-primary-soft text-primary">
              <Icon className="size-8" />
            </span>
            <h2 className="mt-6 text-2xl font-bold">{title}</h2>
            <p className="mt-3 text-base text-muted-foreground">{description}</p>

            <div className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-surface py-4 px-6 text-sm font-medium text-muted-foreground">
              <Clock className="size-4 text-amber-600 dark:text-amber-400" />
              {documentStatusMap.updating[language]}
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              {isEn
                ? "Need documents immediately? Contact us at "
                : "Cần tài liệu gấp? Vui lòng liên hệ email "}
              <a href={`mailto:${company.email}`} className="font-semibold text-primary underline">
                {company.email}
              </a>{" "}
              {isEn ? "for direct support." : "để được hỗ trợ ngay lập tức."}
            </p>
          </Reveal>
        )}
      </Section>

      <CTASection />
    </>
  );
}
