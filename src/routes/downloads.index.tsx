import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Download,
  FileCheck,
  FileCode,
  FileText,
  Filter,
  FolderDown,
  Globe2,
  Layers,
  Mail,
  RotateCcw,
  Search,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import { CTASection, PageHero, Section } from "@/components/site/ui";
import {
  documentLanguageMap,
  documentStatusMap,
  documentTypesList,
  downloadDocuments,
  type DocumentLanguage,
  type DocumentStatus,
  type DocumentType,
  type DownloadDocument,
} from "@/data/downloads";
import { knowledgeArticles } from "@/data/knowledge";
import { productCategories, products } from "@/data/products";
import { projects } from "@/data/projects";
import { company } from "@/data/site";
import { useLanguage } from "@/i18n";

export const Route = createFileRoute("/downloads/")({
  head: () => ({
    meta: [
      { title: "Trung tâm Tài liệu & Tài nguyên Kỹ thuật | TD VIỆT NAM" },
      {
        name: "description",
        content:
          "Truy cập datasheet, catalogue, hướng dẫn kỹ thuật, chứng nhận chất lượng và hồ sơ năng lực của TD VIỆT NAM.",
      },
      { property: "og:title", content: "Trung tâm Tài liệu Kỹ thuật | TD VIỆT NAM" },
      { property: "og:url", content: "/downloads" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: DownloadsIndex,
});

function DownloadsIndex() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filteredDocs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return downloadDocuments.filter((doc) => {
      // Type filter
      if (selectedType !== "all" && doc.type !== selectedType) {
        return false;
      }
      // Category filter
      if (selectedCategory !== "all" && doc.category !== selectedCategory) {
        return false;
      }
      // Language filter
      if (selectedLanguage !== "all") {
        if (doc.language !== "bilingual" && doc.language !== selectedLanguage) {
          return false;
        }
      }
      // Status filter
      if (selectedStatus !== "all" && doc.status !== selectedStatus) {
        return false;
      }

      // Search query
      if (query) {
        const titleText = (doc.title[language] || doc.title.vi).toLowerCase();
        const descText = (doc.description[language] || doc.description.vi).toLowerCase();
        const typeLabel =
          documentTypesList.find((t) => t.key === doc.type)?.label[language].toLowerCase() || "";

        const linkedProduct = products.find((p) => p.slug === doc.relatedProduct);
        const prodName = linkedProduct ? linkedProduct.name[language].toLowerCase() : "";

        const matches =
          titleText.includes(query) ||
          descText.includes(query) ||
          typeLabel.includes(query) ||
          prodName.includes(query) ||
          doc.id.toLowerCase().includes(query);

        if (!matches) return false;
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedCategory, selectedLanguage, selectedStatus, language]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedCategory("all");
    setSelectedLanguage("all");
    setSelectedStatus("all");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedType !== "all" ||
    selectedCategory !== "all" ||
    selectedLanguage !== "all" ||
    selectedStatus !== "all";

  return (
    <>
      <PageHero
        eyebrow={isEn ? "TECHNICAL RESOURCES" : "TÀI NGUYÊN KỸ THUẬT"}
        title={
          isEn
            ? "Technical documents & engineering resources"
            : "Tài liệu kỹ thuật & hồ sơ chuyên ngành"
        }
        intro={
          isEn
            ? "Access technical datasheets, catalogues, manuals and corporate documents from TD VIETNAM."
            : "Truy cập datasheet, catalogue, hướng dẫn kỹ thuật và tài liệu doanh nghiệp của TD VIỆT NAM."
        }
        breadcrumbs={[{ label: isEn ? "Technical Resources" : "Tài nguyên kỹ thuật" }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-md transition hover:opacity-90"
          >
            <Mail className="size-4" />
            {isEn ? "Talk to an Engineer" : "Trao đổi với kỹ sư"}
          </Link>
        </div>
      </PageHero>

      <Section>
        {/* Category Tabs Bar */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-border pb-4">
          <button
            type="button"
            onClick={() => setSelectedType("all")}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
              selectedType === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-surface text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {isEn ? "All Resources" : "Tất cả tài nguyên"}
          </button>
          {documentTypesList.map((type) => (
            <button
              key={type.key}
              type="button"
              onClick={() => setSelectedType(type.key)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                selectedType === type.key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-surface text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {type.label[language]}
            </button>
          ))}
        </div>

        {/* Multi-axis Filter & Search Bar */}
        <div className="rounded-2xl border border-border bg-[#FAFAFA] p-6 shadow-xs md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isEn
                    ? "Search title, product, specification, document ID..."
                    : "Tìm theo tiêu đề, thiết bị, quy chuẩn, mã tài liệu..."
                }
                className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-xs font-medium text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Reset Button */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 self-start rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-bold text-primary transition hover:bg-muted lg:self-auto"
              >
                <RotateCcw className="size-3.5" />
                {isEn ? "Clear filters" : "Xóa bộ lọc"}
              </button>
            )}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4 border-t border-border/60">
            {/* Filter by Document Type */}
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                {isEn ? "Document Type" : "Loại tài liệu"}
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full rounded-xl border border-border bg-background py-2 px-3 text-xs font-medium text-foreground outline-none transition focus:border-primary"
              >
                <option value="all">{isEn ? "All Document Types" : "Tất cả loại tài liệu"}</option>
                {documentTypesList.map((t) => (
                  <option key={t.key} value={t.key}>
                    {t.label[language]}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Product Category */}
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                {isEn ? "Product Category" : "Danh mục sản phẩm"}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl border border-border bg-background py-2 px-3 text-xs font-medium text-foreground outline-none transition focus:border-primary"
              >
                <option value="all">{isEn ? "All Categories" : "Tất cả danh mục"}</option>
                {productCategories.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.name[language]}
                  </option>
                ))}
                <option value="company-profile">
                  {isEn ? "Company Profile" : "Hồ sơ năng lực"}
                </option>
                <option value="general">{isEn ? "General & Regulatory" : "Pháp lý & Chung"}</option>
              </select>
            </div>

            {/* Filter by Language */}
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                {isEn ? "Document Language" : "Ngôn ngữ tài liệu"}
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full rounded-xl border border-border bg-background py-2 px-3 text-xs font-medium text-foreground outline-none transition focus:border-primary"
              >
                <option value="all">{isEn ? "All Languages" : "Tất cả ngôn ngữ"}</option>
                <option value="vi">Tiếng Việt (VI)</option>
                <option value="en">English (EN)</option>
                <option value="bilingual">{isEn ? "Bilingual (VI / EN)" : "Song ngữ"}</option>
              </select>
            </div>

            {/* Filter by Status */}
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                {isEn ? "Availability" : "Trạng thái sẵn có"}
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full rounded-xl border border-border bg-background py-2 px-3 text-xs font-medium text-foreground outline-none transition focus:border-primary"
              >
                <option value="all">{isEn ? "All Statuses" : "Tất cả trạng thái"}</option>
                <option value="available">{documentStatusMap.available[language]}</option>
                <option value="updating">{documentStatusMap.updating[language]}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="mt-12">
          {filteredDocs.length > 0 ? (
            <Stagger
              key={`${searchQuery}-${selectedType}-${selectedCategory}-${selectedLanguage}-${selectedStatus}`}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredDocs.map((doc: DownloadDocument) => {
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

                const titleText = doc.title[language] || doc.title.vi;
                const descText = doc.description[language] || doc.description.vi;

                return (
                  <StaggerItem key={doc.id} className="h-full">
                    <article className="card-premium flex h-full flex-col justify-between p-7">
                      <div>
                        {/* Badges bar */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="rounded-full bg-primary-soft px-3 py-1 text-[0.7rem] font-bold text-primary">
                            {typeLabel}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="rounded-md bg-muted px-2 py-0.5 text-[0.65rem] font-extrabold uppercase text-muted-foreground">
                              {doc.language === "bilingual"
                                ? "VI / EN"
                                : doc.language.toUpperCase()}
                            </span>
                            <span
                              className={`rounded-md px-2 py-0.5 text-[0.65rem] font-extrabold ${
                                doc.status === "available"
                                  ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                                  : "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                              }`}
                            >
                              {documentStatusMap[doc.status][language]}
                            </span>
                          </div>
                        </div>

                        {/* Title linking to detail page */}
                        <h3 className="mt-4 text-lg font-bold leading-snug">
                          <Link
                            to="/downloads/$slug"
                            params={{ slug: doc.slug }}
                            className="hover:text-primary transition-colors"
                          >
                            {titleText}
                          </Link>
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                          {descText}
                        </p>

                        {/* Context Relationships */}
                        <div className="mt-4 space-y-1.5 pt-3 border-t border-border/60 text-xs">
                          {linkedProduct && (
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                              <Layers className="size-3 text-primary shrink-0" />
                              <span className="font-semibold">
                                {isEn ? "Product:" : "Sản phẩm:"}
                              </span>
                              <Link
                                to="/products/$slug"
                                params={{ slug: linkedProduct.slug }}
                                className="text-primary hover:underline font-medium truncate"
                              >
                                {linkedProduct.name[language]}
                              </Link>
                            </div>
                          )}

                          {linkedProject && (
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                              <FolderDown className="size-3 text-primary shrink-0" />
                              <span className="font-semibold">{isEn ? "Project:" : "Dự án:"}</span>
                              <Link
                                to="/projects/$slug"
                                params={{ slug: linkedProject.slug }}
                                className="text-primary hover:underline font-medium truncate"
                              >
                                {linkedProject.title[language]}
                              </Link>
                            </div>
                          )}

                          {linkedKnowledge && (
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                              <BookOpen className="size-3 text-primary shrink-0" />
                              <span className="font-semibold">
                                {isEn ? "Knowledge:" : "Kiến thức:"}
                              </span>
                              <Link
                                to="/knowledge/$slug"
                                params={{ slug: linkedKnowledge.slug }}
                                className="text-primary hover:underline font-medium truncate"
                              >
                                {linkedKnowledge.title[language]}
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Footer */}
                      <div className="mt-6 border-t border-border pt-4">
                        {doc.status === "available" && doc.fileUrl ? (
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs font-bold text-primary-foreground transition hover:opacity-90"
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
                            <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-border/50">
                              <Link
                                to="/downloads/$slug"
                                params={{ slug: doc.slug }}
                                className="text-[0.75rem] font-bold text-foreground hover:text-primary transition-colors"
                              >
                                {isEn ? "View details" : "Xem chi tiết"} →
                              </Link>
                              <Link
                                to="/contact"
                                search={{ interest: doc.relatedProduct || doc.id }}
                                className="inline-flex items-center gap-1 text-[0.75rem] font-bold text-primary hover:underline"
                              >
                                <Mail className="size-3" />
                                {isEn ? "Talk to Engineer" : "Trao đổi với kỹ sư"}
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
            <Reveal className="rounded-2xl border border-dashed border-border bg-surface p-12 text-center">
              <FileText className="mx-auto size-10 text-muted-foreground/60" aria-hidden />
              <h3 className="mt-4 text-lg font-bold">
                {isEn ? "No matching documents found." : "Không tìm thấy tài liệu phù hợp."}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                {isEn
                  ? "Try searching with different keywords or reset your filters."
                  : "Thử thay đổi từ khóa tìm kiếm hoặc đặt lại bộ lọc để xem toàn bộ danh mục."}
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
              >
                <RotateCcw className="size-3.5" />
                {isEn ? "Clear filters" : "Xóa bộ lọc"}
              </button>
            </Reveal>
          )}

          {/* Email Request Engineering Box */}
          <Reveal className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold">
              {isEn
                ? "Need custom engineering drawings or project dossiers?"
                : "Cần tài liệu kỹ thuật hoặc hồ sơ thiết kế riêng?"}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              {isEn
                ? "Our engineering team provides CAD drawings, PVSyst single-line diagrams, and detailed corporate qualifications for bidding dossiers."
                : `Đội ngũ kỹ sư của ${company.name} sẵn sàng cung cấp file CAD, sơ đồ đơn tuyến PVSyst và hồ sơ năng lực chi tiết cho từng dự án.`}
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-md transition hover:opacity-90"
            >
              <Mail className="size-4" />
              {isEn ? "Request via Email" : "Gửi yêu cầu qua Email"}
            </a>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title={isEn ? "Consult with our engineering team" : "Liên hệ bộ phận kỹ thuật TD VIỆT NAM"}
        text={
          isEn
            ? "If you require single-line diagrams, tender documentation or compliance certificates, please consult our engineering specialists directly."
            : "Nếu bạn cần bản vẽ thi công hoặc hồ sơ chứng nhận thiết bị cho hồ sơ mời thầu, vui lòng trao đổi trực tiếp với chúng tôi."
        }
      />
    </>
  );
}
