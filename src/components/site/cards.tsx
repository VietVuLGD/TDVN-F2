import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Calendar, Tag } from "lucide-react";

import { knowledgeCategories, type KnowledgeArticle } from "@/data/knowledge";
import { getPrimaryProductImage, productCategories } from "@/data/products";
import { projectCategories } from "@/data/projects";
import type { Post, Product, Project } from "@/data/site";
import { useLanguage } from "@/i18n";
import { getImage, resolveImageUrl } from "@/lib/images";

export function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const isEn = language === "en";

  const title =
    typeof project.title === "object"
      ? project.title[language]
      : (project as unknown as { title: string }).title;
  const client =
    typeof project.client === "object"
      ? project.client[language]
      : (project as unknown as { client: string }).client;
  const location =
    typeof project.location === "object"
      ? project.location[language]
      : (project as unknown as { location: string }).location;
  const capacity =
    typeof project.capacity === "object"
      ? project.capacity[language]
      : (project as unknown as { capacity: string }).capacity;
  const technology =
    typeof project.technology === "object"
      ? project.technology[language]
      : (project as unknown as { technology: string }).technology;
  const description =
    typeof project.description === "object"
      ? project.description[language]
      : (project as unknown as { summary?: string }).summary || "";

  const categoryObj = projectCategories.find((c) => c.key === project.category);
  const categoryName = categoryObj ? categoryObj.name[language] : project.category || "General";

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

  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="card-premium group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-primary/50"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={getImage(project.image)}
            alt={`${title} - ${client}`}
            loading="lazy"
            width={1200}
            height={750}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-md shadow-xs">
              {categoryName}
            </span>
            <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-md shadow-xs">
              {statusLabel}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 text-xs font-medium text-muted-foreground">
            <span className="truncate">{client}</span>
            <span>·</span>
            <span className="shrink-0">{location}</span>
          </div>
          <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="border-t border-border px-6 py-4 bg-muted/20">
        <dl className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <dt className="text-muted-foreground">{isEn ? "Capacity" : "Công suất"}</dt>
            <dd className="mt-0.5 font-semibold text-foreground truncate">{capacity}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{isEn ? "Technology" : "Công nghệ"}</dt>
            <dd className="mt-0.5 font-semibold text-foreground truncate">{technology}</dd>
          </div>
        </dl>
        <div className="mt-4 flex items-center justify-between text-xs font-semibold text-primary">
          <span>{isEn ? "View Engineering Case Study" : "Xem chi tiết dự án"}</span>
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { language } = useLanguage();

  const name =
    typeof product.name === "object"
      ? product.name[language]
      : (product as unknown as { name: string }).name;
  const productFallback = product as unknown as {
    tagline?: string;
    description?: string;
    shortDescription?: string;
  };
  const shortDesc =
    typeof product.shortDescription === "object"
      ? product.shortDescription[language]
      : productFallback.shortDescription ||
        productFallback.tagline ||
        productFallback.description ||
        "";

  const categoryObj = productCategories.find((c) => c.key === product.category);
  const categoryName = categoryObj ? categoryObj.name[language] : product.category;

  const specs =
    product.specifications ||
    (product as unknown as { specs?: { label: string; value: string }[] }).specs ||
    [];

  const primaryImageObj = getPrimaryProductImage(product);
  const primaryImageSrc = primaryImageObj ? resolveImageUrl(primaryImageObj.src) : undefined;
  const primaryImageAlt = primaryImageObj ? primaryImageObj.alt[language] || name : name;

  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="card-premium group flex flex-col justify-between p-7"
    >
      <div>
        {primaryImageSrc && (
          <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/80 bg-background/50 p-3 shadow-2xs">
            <img
              src={primaryImageSrc}
              alt={primaryImageAlt}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              width={primaryImageObj?.width || 600}
              height={primaryImageObj?.height || 450}
              className="size-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
            {categoryName}
          </span>
          <div className="flex items-center gap-2">
            {product.brand && (
              <span className="text-xs font-medium text-muted-foreground">{product.brand}</span>
            )}
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
        </div>

        <h3 className="mt-5 text-xl font-bold group-hover:text-primary transition-colors">
          {name}
        </h3>
        {product.model && (
          <p className="mt-1 text-xs font-mono text-muted-foreground">{product.model}</p>
        )}
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{shortDesc}</p>
      </div>

      <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
        {specs.slice(0, 3).map((spec, idx) => {
          const specLabel =
            typeof spec.label === "object"
              ? spec.label[language]
              : (spec as unknown as { label: string }).label;
          const specValue =
            typeof spec.value === "object"
              ? spec.value[language]
              : (spec as unknown as { value: string }).value;
          return (
            <li key={specLabel || idx} className="flex justify-between gap-4">
              <span className="text-muted-foreground">{specLabel}</span>
              <span className="font-semibold text-foreground text-right">{specValue}</span>
            </li>
          );
        })}
      </ul>
    </Link>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/knowledge/$slug"
      params={{ slug: post.slug }}
      className="card-premium group flex flex-col p-7"
    >
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="font-semibold text-primary">{post.category}</span>
        <span aria-hidden>·</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl leading-snug font-bold group-hover:text-primary">{post.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
        Read article
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function KnowledgeCard({ article }: { article: KnowledgeArticle }) {
  const { language } = useLanguage();
  const isEn = language === "en";

  const title = typeof article.title === "object" ? article.title[language] : article.title;
  const excerpt = typeof article.excerpt === "object" ? article.excerpt[language] : article.excerpt;
  const readingTime =
    typeof article.readingTime === "object" ? article.readingTime[language] : article.readingTime;

  const categoryObj = knowledgeCategories.find((c) => c.key === article.category);
  const categoryLabel = categoryObj ? categoryObj.label[language] : article.category;

  return (
    <Link
      to="/knowledge/$slug"
      params={{ slug: article.slug }}
      className="card-premium group flex h-full flex-col overflow-hidden p-0 transition-all hover:border-primary/50"
    >
      {article.coverImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          <img
            src={getImage(article.coverImage)}
            alt={title}
            loading="lazy"
            width={600}
            height={338}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md shadow-xs">
            {categoryLabel}
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {!article.coverImage && (
          <div className="mb-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {categoryLabel}
            </span>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5" />
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString(isEn ? "en-US" : "vi-VN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
          </span>
          <span aria-hidden>·</span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            <span>{readingTime}</span>
          </span>
        </div>

        <h3 className="mt-3 text-lg leading-snug font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="mt-2.5 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
          {excerpt}
        </p>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-md bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                <Tag className="size-2.5" />
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-5">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline">
            {isEn ? "Read technical article" : "Đọc bài viết kỹ thuật"}
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
