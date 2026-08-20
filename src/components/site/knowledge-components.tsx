import { useState } from "react";
import {
  AlertTriangle,
  Award,
  ChevronDown,
  ChevronRight,
  Cpu,
  FileText,
  Info,
  List,
  ShieldAlert,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import type { ContentBlock } from "@/data/knowledge";
import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";

export interface TechnicalNoteProps {
  noteTitle?: string | undefined;
  noteType?: "info" | "warning" | "design" | "standard" | undefined;
  children: React.ReactNode;
  className?: string | undefined;
}

export function TechnicalNote({
  noteTitle,
  noteType = "info",
  children,
  className,
}: TechnicalNoteProps) {
  const { language } = useLanguage();
  const isEn = language === "en";

  const config = {
    info: {
      defaultTitle: isEn ? "Technical Note" : "Thông tin kỹ thuật",
      icon: FileText,
      border: "border-primary/40 bg-primary/5 text-primary-foreground",
      iconColor: "text-primary",
      badgeClass: "bg-primary/10 text-primary",
    },
    design: {
      defaultTitle: isEn ? "Engineering Design Note" : "Lưu ý thiết kế",
      icon: Cpu,
      border: "border-blue-500/40 bg-blue-500/5 dark:bg-blue-950/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      badgeClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    warning: {
      defaultTitle: isEn ? "Safety & Operational Warning" : "Cảnh báo an toàn",
      icon: AlertTriangle,
      border: "border-amber-500/40 bg-amber-500/5 dark:bg-amber-950/20",
      iconColor: "text-amber-600 dark:text-amber-400",
      badgeClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
    standard: {
      defaultTitle: isEn ? "Standards Reference" : "Tham khảo tiêu chuẩn",
      icon: ShieldCheck,
      border: "border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-950/20",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
  }[noteType];

  const Icon = config.icon;
  const title = noteTitle || config.defaultTitle;

  return (
    <div
      className={cn(
        "my-6 rounded-2xl border p-5 sm:p-6 shadow-2xs transition-all",
        config.border,
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className={cn("rounded-lg p-1.5", config.badgeClass)}>
          <Icon className="size-4" />
        </div>
        <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">{title}</h4>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground font-normal">
        {children}
      </div>
    </div>
  );
}

export function TableOfContents({ blocks }: { blocks: ContentBlock[] }) {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const headings = blocks
    .filter((b) => (b.type === "h2" || b.type === "h3") && b.text)
    .map((b) => ({
      type: b.type,
      text: b.text!,
      id: b.text!.toLowerCase().replace(/[^\w\u00C0-\u024F\u1E00-\u1EFF]+/g, "-"),
    }));

  if (headings.length === 0) return null;

  return (
    <nav className="card-premium p-5" aria-label={isEn ? "Table of Contents" : "Mục lục bài viết"}>
      <div className="flex items-center justify-between lg:block">
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-muted-foreground uppercase">
          <List className="size-4 text-primary" />
          <span>{isEn ? "Table of Contents" : "MỤC LỤC BÀI VIẾT"}</span>
        </div>
        <button
          type="button"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="flex items-center gap-1 text-xs font-semibold text-primary lg:hidden"
        >
          <span>{isOpenMobile ? (isEn ? "Hide" : "Thu gọn") : isEn ? "Show" : "Xem mục lục"}</span>
          <ChevronDown
            className={cn("size-4 transition-transform", isOpenMobile && "rotate-180")}
          />
        </button>
      </div>

      <ol
        className={cn(
          "mt-4 space-y-2 text-xs leading-relaxed lg:block",
          isOpenMobile ? "block" : "hidden",
        )}
      >
        {headings.map((h, i) => (
          <li
            key={i}
            className={cn(
              "transition-colors hover:text-primary",
              h.type === "h3" ? "pl-4 text-muted-foreground" : "font-medium text-foreground",
            )}
          >
            <a href={`#${h.id}`} className="flex items-start gap-1.5 py-0.5">
              <span className="text-primary/70">#</span>
              <span>{h.text}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function RenderArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6 text-foreground text-base leading-relaxed">
      {blocks.map((block, idx) => {
        if (block.type === "p") {
          return (
            <p key={idx} className="text-muted-foreground leading-relaxed">
              {block.text}
            </p>
          );
        }

        if (block.type === "h2") {
          const id = block.text!.toLowerCase().replace(/[^\w\u00C0-\u024F\u1E00-\u1EFF]+/g, "-");
          return (
            <h2
              id={id}
              key={idx}
              className="scroll-m-28 pt-4 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl border-b border-border/60 pb-3"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          const id = block.text!.toLowerCase().replace(/[^\w\u00C0-\u024F\u1E00-\u1EFF]+/g, "-");
          return (
            <h3
              id={id}
              key={idx}
              className="scroll-m-28 pt-2 text-xl font-bold tracking-tight text-foreground"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={idx}
              className="my-6 border-l-4 border-primary bg-surface/80 p-5 rounded-r-xl italic text-foreground font-medium"
            >
              "{block.text}"
            </blockquote>
          );
        }

        if (block.type === "list" && block.items) {
          return (
            <ul key={idx} className="my-4 space-y-2.5 pl-2">
              {block.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "steps" && block.items) {
          return (
            <ol key={idx} className="my-6 space-y-3">
              {block.items.map((step, stepIdx) => (
                <li
                  key={stepIdx}
                  className="flex items-start gap-3.5 rounded-xl border border-border bg-background p-4 text-sm font-medium shadow-2xs"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground">
                    {stepIdx + 1}
                  </span>
                  <span className="mt-0.5 text-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "table" && block.head && block.rows) {
          return (
            <div
              key={idx}
              className="my-6 overflow-hidden rounded-2xl border border-border bg-background shadow-xs"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-border bg-surface text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <tr>
                      {block.head.map((th, thIdx) => (
                        <th key={thIdx} className="px-5 py-3.5">
                          {th}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {block.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className="hover:bg-muted/30 transition-colors">
                        {row.map((cell, cellIdx) => (
                          <td
                            key={cellIdx}
                            className={cn(
                              "px-5 py-3.5 text-xs sm:text-sm",
                              cellIdx === 0
                                ? "font-semibold text-foreground"
                                : "text-muted-foreground",
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }

        if (block.type === "note" || block.type === "warning") {
          return (
            <TechnicalNote
              key={idx}
              noteTitle={block.noteTitle}
              noteType={block.noteType || (block.type === "warning" ? "warning" : "info")}
            >
              {block.text}
            </TechnicalNote>
          );
        }

        if (block.type === "figure" && block.imageUrl) {
          return (
            <figure
              key={idx}
              className="my-8 overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <img
                src={block.imageUrl}
                alt={block.caption || "Technical Figure"}
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
              />
              {block.caption && (
                <figcaption className="p-3.5 text-center text-xs font-medium text-muted-foreground italic border-t border-border">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        return null;
      })}
    </div>
  );
}
