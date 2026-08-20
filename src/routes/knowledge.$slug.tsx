import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Download,
  FileText,
  FolderKanban,
  PackageCheck,
  User,
} from "lucide-react";

import { KnowledgeCard } from "@/components/site/cards";
import { RenderArticleContent, TableOfContents } from "@/components/site/knowledge-components";
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import { Breadcrumbs, CTASection, PageHero, Section } from "@/components/site/ui";
import { technicalDocuments } from "@/data/datasheets";
import { knowledgeArticles, knowledgeCategories, type KnowledgeArticle } from "@/data/knowledge";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n";
import { getImage } from "@/lib/images";
import { cn } from "@/lib/utils";

// Category alias map for backwards compatibility
const categoryAliasMap: Record<string, string> = {
  news: "news-events",
  "news-events": "news-events",
  engineering: "technical-knowledge",
  "technical-knowledge": "technical-knowledge",
  guides: "operation-guides",
  "operation-guides": "operation-guides",
  standards: "standards-regulations",
  "standards-regulations": "standards-regulations",
  technology: "technology-analysis",
  "technology-analysis": "technology-analysis",
  "case-studies": "case-studies",
  "case-study": "case-studies",
};

export const Route = createFileRoute("/knowledge/$slug")({
  head: ({ params }) => {
    const slug = params.slug;
    const mappedCategoryKey = categoryAliasMap[slug];

    if (mappedCategoryKey) {
      const cat = knowledgeCategories.find((c) => c.key === mappedCategoryKey);
      const catTitle = cat ? cat.label.vi : "Chuyên mục Kiến thức";
      const catDesc = cat ? cat.description.vi : "Trung tâm kiến thức kỹ thuật TD VIỆT NAM";
      return {
        meta: [
          { title: `${catTitle} | TD VIỆT NAM` },
          { name: "description", content: catDesc },
          { property: "og:title", content: `${catTitle} | TD VIỆT NAM` },
          { property: "og:description", content: catDesc },
          { property: "og:url", content: `/knowledge/${slug}` },
        ],
        links: [{ rel: "canonical", href: `/knowledge/${slug}` }],
      };
    }

    const article = knowledgeArticles.find((a) => a.slug === slug);
    if (article) {
      const titleText = typeof article.title === "object" ? article.title.vi : article.title;
      const excerptText =
        typeof article.excerpt === "object" ? article.excerpt.vi : article.excerpt;
      const pageTitle = `${titleText} | TD VIỆT NAM Knowledge Center`;
      const cover = article.coverImage
        ? getImage(article.coverImage)
        : "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80";

      return {
        meta: [
          { title: pageTitle },
          { name: "description", content: excerptText },
          { property: "og:title", content: pageTitle },
          { property: "og:description", content: excerptText },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/knowledge/${article.slug}` },
          { property: "og:image", content: cover },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: pageTitle },
          { name: "twitter:description", content: excerptText },
          { name: "twitter:image", content: cover },
        ],
        links: [{ rel: "canonical", href: `/knowledge/${article.slug}` }],
      };
    }

    return {
      meta: [{ title: "Trung tâm Kiến thức | TD VIỆT NAM" }],
    };
  },
  component: KnowledgeSlugPage,
});

function KnowledgeSlugPage() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isEn = language === "en";

  // Check if slug is a category alias
  const mappedCategoryKey = categoryAliasMap[slug];
  const categoryObj = mappedCategoryKey
    ? knowledgeCategories.find((c) => c.key === mappedCategoryKey)
    : null;

  // Check if slug is an article
  const article = knowledgeArticles.find((a) => a.slug === slug);

  // 1. If it's a category slug, show category list or redirect to filtered index
  if (categoryObj) {
    const categoryArticles = knowledgeArticles.filter(
      (a) => a.status === "published" && a.category === categoryObj.key,
    );

    return (
      <>
        <PageHero
          eyebrow="TRUNG TÂM KIẾN THỨC"
          title={categoryObj.label[language]}
          intro={categoryObj.description[language]}
          breadcrumbs={[
            { label: isEn ? "Knowledge Center" : "Kiến thức", to: "/knowledge" },
            { label: categoryObj.label[language] },
          ]}
        />

        <Section>
          <div className="mb-8 flex items-center justify-between border-b border-border pb-4">
            <h2 className="text-xl font-bold">
              {isEn ? "Category Articles" : "Bài viết trong chuyên mục"}
            </h2>
            <Link to="/knowledge" className="text-xs font-semibold text-primary hover:underline">
              ← {isEn ? "View all categories" : "Xem tất cả chuyên mục"}
            </Link>
          </div>

          {categoryArticles.length > 0 ? (
            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map((art) => (
                <StaggerItem key={art.id} className="h-full">
                  <KnowledgeCard article={art} />
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
              {isEn
                ? "Content is currently being prepared for this section."
                : "Bài viết đang được cập nhật cho chuyên mục này."}
            </div>
          )}
        </Section>

        <CTASection />
      </>
    );
  }

  // 2. If article found
  if (article) {
    // Check status: if draft, don't show
    if (article.status === "draft") {
      return (
        <>
          <PageHero
            eyebrow="TRUNG TÂM KIẾN THỨC"
            title={isEn ? "Article Draft" : "Nội dung dự thảo"}
            intro={
              isEn ? "This article is currently a draft." : "Bài viết này đang ở chế độ dự thảo."
            }
            breadcrumbs={[{ label: "Kiến thức", to: "/knowledge" }]}
          />
          <CTASection />
        </>
      );
    }

    // If updating status
    if (article.status === "updating") {
      return (
        <>
          <PageHero
            eyebrow="TRUNG TÂM KIẾN THỨC"
            title={isEn ? "Content Updating" : "Nội dung đang cập nhật"}
            intro={
              isEn
                ? "This technical document is being updated by TD VIETNAM engineering team."
                : "Nội dung đang được đội ngũ kỹ sư TD VIỆT NAM cập nhật."
            }
            breadcrumbs={[{ label: "Kiến thức", to: "/knowledge" }]}
          />
          <Section>
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
              {isEn ? "Content is being updated." : "Nội dung đang được cập nhật."}
            </div>
          </Section>
          <CTASection />
        </>
      );
    }

    // Published article
    const titleText = typeof article.title === "object" ? article.title[language] : article.title;
    const excerptText =
      typeof article.excerpt === "object" ? article.excerpt[language] : article.excerpt;
    const authorText =
      typeof article.author === "object" ? article.author[language] : article.author;
    const readingTimeText =
      typeof article.readingTime === "object" ? article.readingTime[language] : article.readingTime;

    const catObj = knowledgeCategories.find((c) => c.key === article.category);
    const catLabel = catObj ? catObj.label[language] : article.category;

    const contentBlocks = article.content[language] || article.content.vi;

    // Resolve Related Articles
    const relatedArticlesList = knowledgeArticles
      .filter(
        (a) =>
          a.id !== article.id &&
          a.status === "published" &&
          (article.relatedArticles?.includes(a.slug) || a.category === article.category),
      )
      .slice(0, 3);

    // Resolve Related Products
    const relatedProductsList = products.filter(
      (p) => article.relatedProducts?.includes(p.id) || article.relatedProducts?.includes(p.slug),
    );

    // Resolve Related Projects
    const relatedProjectsList = projects.filter(
      (p) => article.relatedProjects?.includes(p.id) || article.relatedProjects?.includes(p.slug),
    );

    // Resolve Related Downloads
    const relatedDownloadsList = technicalDocuments.filter(
      (d) =>
        article.relatedDownloads?.includes(d.id) ||
        (d.productId && article.relatedProducts?.includes(d.productId)),
    );

    // TechArticle Structured Data (JSON-LD)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: titleText,
      description: excerptText,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt || article.publishedAt,
      author: {
        "@type": "Organization",
        name: authorText || "TD VIỆT NAM",
      },
      publisher: {
        "@type": "Organization",
        name: "TD VIỆT NAM",
        url: "https://tdvietnam.vn",
      },
      image: article.coverImage
        ? getImage(article.coverImage)
        : "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    };

    return (
      <>
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Article Header / Hero */}
        <header className="relative border-b border-border bg-background pt-[8.5rem] pb-12 md:pt-40 md:pb-16">
          <div className="container-page relative z-10">
            <Breadcrumbs
              items={[
                { label: isEn ? "Knowledge Center" : "Kiến thức", to: "/knowledge" },
                {
                  label: catLabel,
                  to: `/knowledge?category=${article.category}`,
                },
                { label: titleText },
              ]}
            />

            <div className="mt-8 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold text-primary uppercase tracking-wider">
                  {catLabel}
                </span>
                {article.updatedAt && (
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md">
                    {isEn ? "Updated: " : "Cập nhật: "}
                    {new Date(article.updatedAt).toLocaleDateString(isEn ? "en-US" : "vi-VN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
                {titleText}
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground font-medium">
                {excerptText}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-6 text-xs text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <User className="size-4 text-primary" />
                  <span>{authorText}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-primary" />
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString(isEn ? "en-US" : "vi-VN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" />
                  <span>{readingTimeText}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image Banner if present */}
        {article.coverImage && (
          <div className="border-b border-border bg-surface">
            <div className="container-page py-8">
              <div className="overflow-hidden rounded-3xl border border-border shadow-md aspect-[21/9]">
                <img
                  src={getImage(article.coverImage)}
                  alt={titleText}
                  width={1400}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Article Body with Layout & Table of Contents */}
        <Section className="py-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Table of Contents - Desktop Sticky Sidebar */}
            <aside className="lg:col-span-4 lg:order-2">
              <div className="lg:sticky lg:top-28 space-y-6">
                <TableOfContents blocks={contentBlocks} />

                {/* Quick Engineering Consultation Box */}
                <div className="card-premium p-6 bg-surface border border-primary/20">
                  <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">
                    {isEn ? "Need Technical Assistance?" : "Bạn cần tư vấn kỹ thuật?"}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {isEn
                      ? "Discuss your system requirements directly with TD VIETNAM engineers."
                      : "Trao đổi bài toán thiết kế, đấu nối và thiết bị trực tiếp với kỹ sư chuyên môn."}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 btn-primary w-full justify-center py-2 text-xs"
                  >
                    <span>{isEn ? "Speak to an Engineer" : "Trao đổi với kỹ sư"}</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article Content Area */}
            <main className="lg:col-span-8 lg:order-1">
              <article className="prose prose-slate max-w-none dark:prose-invert">
                <RenderArticleContent blocks={contentBlocks} />
              </article>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-10 border-t border-border pt-6 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mr-2">
                    TAGS:
                  </span>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-muted/80 px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Engineering Callout CTA at Article End */}
              <div className="mt-12 rounded-3xl border border-border bg-[#FAFAFA] p-8 shadow-xs">
                <div className="max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {isEn ? "ENGINEERING CONSULTATION" : "TƯ VẤN KỸ THUẬT DỰ ÁN"}
                  </span>
                  <h3 className="mt-2 text-2xl font-extrabold text-foreground">
                    {isEn
                      ? "Do you need tailored advice for a specific project?"
                      : "Bạn cần tư vấn cho một hệ thống cụ thể?"}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {isEn
                      ? "Send us your site load profiles or roof drawings for preliminary PVSyst modeling and engineering feasibility studies."
                      : "Gửi thông số phụ tải hoặc bản vẽ hiện trạng để đội ngũ kỹ sư TD VIỆT NAM tính toán mô phỏng PVSyst và đề xuất phương án kỹ thuật tối ưu."}
                  </p>
                  <div className="mt-6">
                    <Link to="/contact" className="btn-primary">
                      <span>{isEn ? "Speak to an Engineer" : "Trao đổi với kỹ sư"}</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </Section>

        {/* Real Related Content Section */}
        {(relatedProductsList.length > 0 ||
          relatedProjectsList.length > 0 ||
          relatedDownloadsList.length > 0) && (
          <Section className="border-t border-border bg-surface">
            <div className="space-y-12">
              <div className="border-b border-border pb-4">
                <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
                  {isEn ? "Related Engineering Resources" : "Tài nguyên Kỹ thuật Liên quan"}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {isEn
                    ? "Equipment specifications, executed project case studies, and technical downloads referenced in this article."
                    : "Thiết bị, dự án thực tế và tài liệu kỹ thuật liên quan trực tiếp đến bài viết này."}
                </p>
              </div>

              {/* Related Products */}
              {relatedProductsList.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-wider">
                    <PackageCheck className="size-4" />
                    <span>{isEn ? "RELATED PRODUCTS" : "THIẾT BỊ & SẢN PHẨM LIÊN QUAN"}</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedProductsList.map((prod) => {
                      const name = typeof prod.name === "object" ? prod.name[language] : prod.name;
                      const summary =
                        typeof prod.shortDescription === "object"
                          ? prod.shortDescription[language]
                          : prod.shortDescription;
                      return (
                        <Link
                          key={prod.id}
                          to="/products/$slug"
                          params={{ slug: prod.slug }}
                          className="card-premium group p-5 flex flex-col justify-between hover:border-primary/50"
                        >
                          <div>
                            <span className="text-[11px] font-semibold text-primary">
                              {prod.model || prod.brand}
                            </span>
                            <h4 className="mt-1 text-base font-bold group-hover:text-primary transition-colors line-clamp-1">
                              {name}
                            </h4>
                            <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                              {summary}
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                            <span>{isEn ? "View Datasheet & Specs" : "Xem thông số kỹ thuật"}</span>
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Related Projects */}
              {relatedProjectsList.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-wider">
                    <FolderKanban className="size-4" />
                    <span>{isEn ? "EXECUTED PROJECTS" : "DỰ ÁN THỰC TẾ LIÊN QUAN"}</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedProjectsList.map((proj) => {
                      const projTitle =
                        typeof proj.title === "object" ? proj.title[language] : proj.title;
                      const projCap =
                        typeof proj.capacity === "object" ? proj.capacity[language] : proj.capacity;
                      return (
                        <Link
                          key={proj.id}
                          to="/projects/$slug"
                          params={{ slug: proj.slug }}
                          className="card-premium group p-5 flex flex-col justify-between hover:border-primary/50"
                        >
                          <div>
                            <span className="text-[11px] font-semibold text-primary">
                              {projCap}
                            </span>
                            <h4 className="mt-1 text-base font-bold group-hover:text-primary transition-colors line-clamp-2">
                              {projTitle}
                            </h4>
                          </div>
                          <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                            <span>{isEn ? "View Project Case Study" : "Xem hồ sơ dự án"}</span>
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Related Technical Downloads */}
              {relatedDownloadsList.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-wider">
                    <Download className="size-4" />
                    <span>
                      {isEn ? "TECHNICAL DATASHEETS & MANUALS" : "TÀI LIỆU & DATASHEET LIÊN QUAN"}
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {relatedDownloadsList.map((doc) => {
                      const docTitle =
                        typeof doc.title === "object" ? doc.title[language] : doc.title;
                      return (
                        <Link
                          key={doc.id}
                          to="/downloads/$slug"
                          params={{ slug: doc.id }}
                          className="card-premium p-4 flex items-center justify-between hover:border-primary/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-primary/10 p-2 text-primary">
                              <FileText className="size-5" />
                            </div>
                            <div>
                              <h5 className="text-xs sm:text-sm font-bold text-foreground">
                                {docTitle}
                              </h5>
                              <p className="text-[11px] text-muted-foreground">
                                {doc.type} · {doc.fileSize || "PDF"}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-semibold text-primary flex items-center gap-1 shrink-0">
                            {isEn ? "Download" : "Tải về"}
                            <Download className="size-3.5" />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </Section>
        )}

        {/* Related Articles Section */}
        {relatedArticlesList.length > 0 && (
          <Section>
            <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
                {isEn ? "Related Articles" : "Bài viết cùng chuyên mục"}
              </h2>
              <Link to="/knowledge" className="text-xs font-semibold text-primary hover:underline">
                {isEn ? "View Knowledge Center →" : "Xem tất cả bài viết →"}
              </Link>
            </div>

            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticlesList.map((art) => (
                <StaggerItem key={art.id} className="h-full">
                  <KnowledgeCard article={art} />
                </StaggerItem>
              ))}
            </Stagger>
          </Section>
        )}

        <CTASection />
      </>
    );
  }

  // 3. Fallback if slug neither category nor article
  return (
    <>
      <PageHero
        eyebrow="TRUNG TÂM KIẾN THỨC"
        title={isEn ? "Article Not Found" : "Không tìm thấy bài viết"}
        intro={
          isEn
            ? "The requested technical article does not exist or has been relocated."
            : "Bài viết kỹ thuật bạn tìm kiếm không tồn tại hoặc đã được di chuyển."
        }
        breadcrumbs={[{ label: "Kiến thức", to: "/knowledge" }]}
      />
      <Section className="text-center py-12">
        <Link to="/knowledge" className="btn-primary inline-flex">
          <ArrowLeft className="size-4" />
          <span>{isEn ? "Return to Knowledge Center" : "Quay lại Trung tâm Kiến thức"}</span>
        </Link>
      </Section>
      <CTASection />
    </>
  );
}
