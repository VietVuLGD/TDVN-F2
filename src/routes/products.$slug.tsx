import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Mail,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { ProductCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/motion";
import { ProductGallery } from "@/components/site/product-gallery";
import { Breadcrumbs, CTASection, Section } from "@/components/site/ui";
import { technicalDocuments, type TechnicalDocument } from "@/data/datasheets";
import { productCategories, products, type Product } from "@/data/products";
import { useLanguage } from "@/i18n";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    return { product: product || null };
  },
  head: ({ params, loaderData }) => {
    const product = loaderData?.product || products.find((p) => p.slug === params.slug);
    if (!product) {
      return {
        meta: [
          { title: "Sản phẩm không tìm thấy | TD VIỆT NAM" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const productName = product.name.vi;
    const productDesc = product.description.vi;
    const title = `${productName} — ${product.model || product.brand || "Chi tiết kỹ thuật"} | TD VIỆT NAM`;
    return {
      meta: [
        { title },
        { name: "description", content: productDesc },
        { property: "og:title", content: title },
        { property: "og:description", content: productDesc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: productDesc },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: productName,
            category: product.category,
            description: productDesc,
            brand: { "@type": "Brand", name: product.brand || "TD VIỆT NAM" },
            model: product.model,
          }),
        },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: ProductNotFound,
});

function ProductNotFound() {
  const { t } = useLanguage();
  return (
    <div className="container-page pt-36 pb-24 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
          {t("products.notFoundTitle") || "Không tìm thấy sản phẩm"}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã được cập nhật sang danh mục mới.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {t("nav.products") || "Danh mục sản phẩm"}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary"
          >
            {t("nav.contact") || "Liên hệ kỹ thuật"}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProductDetail() {
  const loaderData = Route.useLoaderData() as { product?: Product | null } | undefined;
  const { slug } = Route.useParams();
  const product = loaderData?.product || products.find((p) => p.slug === slug);
  const { language, t } = useLanguage();

  if (!product) {
    return <ProductNotFound />;
  }

  const name = product.name[language];
  const shortDesc = product.shortDescription[language];
  const fullDesc = product.description[language];

  // Category name
  const catObj = productCategories.find((c) => c.key === product.category);
  const categoryName = catObj ? catObj.name[language] : product.category;

  // Subcategory name
  const subcatObj = catObj?.subcategories.find((s) => s.key === product.subcategory);
  const subcategoryName = subcatObj ? subcatObj.name[language] : undefined;

  // Related products
  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(products.filter((p) => p.slug !== product.slug && p.category !== product.category))
    .slice(0, 3);

  // Associated technical documents
  const associatedDocs = technicalDocuments.filter(
    (doc) => doc.productId === product.slug || product.datasheets?.includes(doc.id),
  );

  return (
    <>
      {/* Header & Product Hero */}
      <header className="relative overflow-hidden border-b border-border bg-surface pt-[8.5rem] pb-16 md:pt-40 md:pb-20">
        <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-page relative">
          <Breadcrumbs
            items={[
              { label: t("nav.products"), to: "/products" },
              { label: categoryName, to: "/products" },
              { label: name },
            ]}
          />

          <Reveal className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                  {categoryName}
                </span>
                {subcategoryName && (
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {subcategoryName}
                  </span>
                )}
                {product.status && (
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {t("products.statusActive")}
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl">
                {name}
              </h1>

              {product.model && (
                <p className="mt-2 text-sm font-mono text-muted-foreground">
                  Model: <span className="font-semibold text-foreground">{product.model}</span>
                </p>
              )}

              <p className="mt-4 text-lg font-medium text-foreground/90">{shortDesc}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {fullDesc}
              </p>

              {/* Brand Data block if verified */}
              {product.brandData && (
                <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-border/80 bg-background/60 p-4 text-xs">
                  <div>
                    <span className="text-muted-foreground">{t("products.brandInfo")}: </span>
                    <span className="font-bold">{product.brandData.brand}</span>
                  </div>
                  {product.brandData.technology && (
                    <div className="border-l border-border pl-4">
                      <span className="text-muted-foreground">Công nghệ: </span>
                      <span className="font-semibold">{product.brandData.technology}</span>
                    </div>
                  )}
                  {product.brandData.authorizedDistributor && (
                    <div className="border-l border-border pl-4 font-semibold text-primary flex items-center gap-1">
                      <ShieldCheck className="size-3.5" />
                      {t("products.authorizedDistributor")}
                    </div>
                  )}
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  search={{ interest: product.slug }}
                  className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90"
                >
                  <Wrench className="size-4" />
                  {t("products.talkToEngineer")}
                </Link>
                <a
                  href="#technical-docs"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  <Download className="size-4" />
                  {t("products.technicalDocuments")}
                </a>
              </div>
            </div>

            {/* Product Image Gallery & Technical Stage */}
            <ProductGallery product={product} />
          </Reveal>
        </div>
      </header>

      {/* Main Content Sections */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr]">
          {/* Left Column: Specs Table & Key Features */}
          <div className="space-y-12">
            {/* Detailed Specification Table */}
            <Reveal>
              <h2 className="text-2xl font-extrabold">{t("products.specification")}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Thông số kỹ thuật được xác thực bởi bộ phận kỹ thuật TD VIỆT NAM.
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    {name} {t("products.specCaptionSuffix")}
                  </caption>
                  <tbody className="divide-y divide-border">
                    {product.specifications.map((spec, idx) => {
                      const specLabel = spec.label[language];
                      const specVal = spec.value[language];
                      return (
                        <tr
                          key={specLabel || idx}
                          className={spec.highlight ? "bg-primary-soft/40" : "bg-background"}
                        >
                          <th
                            scope="row"
                            className="py-4 px-6 font-medium text-muted-foreground w-1/2"
                          >
                            {specLabel}
                          </th>
                          <td className="py-4 px-6 font-semibold text-foreground">{specVal}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Main Technical Features */}
            {product.features && product.features[language].length > 0 && (
              <Reveal delay={0.1}>
                <h2 className="text-2xl font-extrabold">{t("products.mainFeatures")}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {product.features[language].map((feature, i) => (
                    <div key={i} className="card-premium flex items-start gap-3.5 p-5">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                      <p className="text-sm leading-relaxed text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Applications */}
            {product.applications && product.applications[language].length > 0 && (
              <Reveal delay={0.15}>
                <h2 className="text-2xl font-extrabold">{t("products.applications")}</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {product.applications[language].map((app, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium"
                    >
                      <span className="size-2 rounded-full bg-primary" aria-hidden />
                      {app}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Certifications Section */}
            <Reveal delay={0.2}>
              <h2 className="text-2xl font-extrabold">{t("products.certifications")}</h2>
              {product.certifications && product.certifications[language].length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {product.certifications[language].map((cert, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-bold text-foreground"
                    >
                      <ShieldCheck className="size-4 text-emerald-600" aria-hidden />
                      {cert}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground">{t("products.updatingValue")}</p>
              )}
            </Reveal>
          </div>

          {/* Right Column: Technical Documents & Engineer Contact Box */}
          <div className="space-y-8" id="technical-docs">
            {/* Technical Documents Download Card */}
            <Reveal delay={0.1}>
              <div className="card-premium p-7">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <FileText className="size-5 text-primary" />
                  <h3 className="text-lg font-bold">{t("products.technicalDocuments")}</h3>
                </div>

                <div className="mt-6 space-y-4">
                  {associatedDocs.length > 0 ? (
                    associatedDocs.map((doc: TechnicalDocument) => (
                      <div
                        key={doc.id}
                        className="rounded-xl border border-border bg-surface p-4 text-xs"
                      >
                        <p className="font-bold text-sm text-foreground">{doc.title[language]}</p>
                        <div className="mt-2 flex items-center justify-between text-muted-foreground">
                          <span>
                            {doc.type} · {doc.fileSize || t("downloads.updatingNotice")}
                          </span>
                          <span className="uppercase font-semibold text-primary">
                            {doc.language}
                          </span>
                        </div>

                        {doc.fileUrl ? (
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
                          >
                            <Download className="size-3.5" />
                            {t("downloads.downloadFile")}
                          </a>
                        ) : (
                          <div className="mt-3 flex items-center justify-between gap-2 border-t border-border/80 pt-3">
                            <span className="text-[0.75rem] italic text-muted-foreground">
                              {t("downloads.updatingNotice")}
                            </span>
                            <Link
                              to="/contact"
                              search={{ interest: product.slug }}
                              className="inline-flex items-center gap-1 text-[0.75rem] font-bold text-primary hover:underline"
                            >
                              <Mail className="size-3" />
                              {t("downloads.contactEngineerForDoc")}
                            </Link>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="rounded-xl border border-dashed border-border bg-surface p-6 text-center text-xs">
                      <p className="font-semibold text-muted-foreground">
                        {t("downloads.updatingNotice")}
                      </p>
                      <p className="mt-1 text-muted-foreground/80">
                        Vui lòng liên hệ bộ phận kỹ thuật để nhận file PDF Datasheet và bản vẽ CAD.
                      </p>
                      <Link
                        to="/contact"
                        search={{ interest: product.slug }}
                        className="mt-4 inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
                      >
                        <Mail className="size-3.5" />
                        {t("downloads.contactEngineerForDoc")}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

            {/* Direct Consultation Box */}
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-border bg-[#FAFAFA] p-7 shadow-xs">
                <h3 className="text-lg font-bold">{t("actions.talkToEngineer")}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Đội ngũ kỹ sư TD VIỆT NAM sẵn sàng hỗ trợ tính toán phương án phối ghép, kiểm tra
                  tương thích và lập bảng so sánh thông số kỹ thuật.
                </p>
                <Link
                  to="/contact"
                  search={{ interest: product.slug }}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-xs font-bold text-primary-foreground shadow-xs transition hover:bg-primary-hover"
                >
                  Gửi yêu cầu hỗ trợ kỹ thuật
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Related Products */}
      {related.length > 0 && (
        <Section className="bg-surface">
          <div className="container-page">
            <h2 className="text-2xl font-extrabold">{t("products.related")}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
