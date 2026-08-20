import { useState } from "react";
import { CheckCircle2, Layers, ShieldCheck } from "lucide-react";

import { getProductGalleryImages, type Product, type ProductImage } from "@/data/products";
import { useLanguage } from "@/i18n";
import { resolveImageUrl } from "@/lib/images";

export function ProductGallery({ product }: { product: Product }) {
  const { language, t } = useLanguage();
  const isEn = language === "en";

  const name = product.name[language] || product.name.vi;

  // Gather structured images from product.images
  const structuredImages = getProductGalleryImages(product);

  // Map to resolved URLs
  const validImages: {
    src: string;
    alt: string;
    caption?: string;
    type?: string;
    width?: number;
    height?: number;
  }[] = [];

  structuredImages.forEach((img: ProductImage) => {
    const resolved = resolveImageUrl(img.src);
    if (resolved) {
      validImages.push({
        src: resolved,
        alt: img.alt[language] || name,
        ...(img.caption && img.caption[language] ? { caption: img.caption[language] } : {}),
        ...(img.type ? { type: img.type } : {}),
        ...(img.width ? { width: img.width } : {}),
        ...(img.height ? { height: img.height } : {}),
      });
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // IF images exist, render the interactive Product Gallery
  if (validImages.length > 0) {
    const activeImage = validImages[selectedIndex] || validImages[0];
    if (!activeImage) return null;

    const typeLabel =
      activeImage.type === "primary"
        ? isEn
          ? "Primary View"
          : "Ảnh chính"
        : activeImage.type === "technical"
          ? isEn
            ? "Technical Drawing"
            : "Bản vẽ kỹ thuật"
          : activeImage.type === "nameplate"
            ? isEn
              ? "Nameplate / Specs"
              : "Nhãn thông số"
            : isEn
              ? "Gallery View"
              : "Góc chụp sản phẩm";

    return (
      <div className="space-y-4">
        {/* Main Image Stage */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-background/80 p-4 shadow-sm">
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            width={activeImage.width || 800}
            height={activeImage.height || 600}
            className="size-full object-contain rounded-xl transition-all duration-300"
          />

          {/* Image Type Badge */}
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-background/90 px-3 py-1 text-[0.7rem] font-bold text-foreground shadow-xs backdrop-blur-md border border-border/60">
              {typeLabel}
            </span>
          </div>
        </div>

        {/* Caption if present */}
        {activeImage.caption && (
          <p className="text-center text-xs italic text-muted-foreground">{activeImage.caption}</p>
        )}

        {/* Thumbnails list if multiple images exist */}
        {validImages.length > 1 && (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {validImages.map((img, idx) => (
              <button
                key={`${img.src}-${idx}`}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`relative size-16 overflow-hidden rounded-xl border transition-all ${
                  selectedIndex === idx
                    ? "border-primary ring-2 ring-primary/20 shadow-xs"
                    : "border-border opacity-70 hover:opacity-100"
                }`}
                title={img.alt}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="size-full object-contain bg-background/50 p-1"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // IF NO images exist, render a clean Technical Summary card instead of broken/fake images
  const highlightedSpecs = product.specifications.slice(0, 4);

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <div className="flex items-center gap-2 border-b border-border pb-4">
        <Layers className="size-5 text-primary" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
          {isEn ? "Technical Profile Overview" : "Hồ sơ kỹ thuật sản phẩm"}
        </h3>
      </div>

      <div className="mt-4 space-y-3">
        {product.brand && (
          <div className="flex items-center justify-between text-xs py-1 border-b border-border/50">
            <span className="text-muted-foreground">{isEn ? "Brand" : "Thương hiệu"}</span>
            <span className="font-bold text-foreground">{product.brand}</span>
          </div>
        )}
        {product.model && (
          <div className="flex items-center justify-between text-xs py-1 border-b border-border/50">
            <span className="text-muted-foreground">Model</span>
            <span className="font-mono font-bold text-foreground">{product.model}</span>
          </div>
        )}
        {highlightedSpecs.map((spec, i) => (
          <div
            key={i}
            className="flex items-center justify-between text-xs py-1 border-b border-border/50"
          >
            <span className="text-muted-foreground">{spec.label[language]}</span>
            <span className="font-semibold text-foreground text-right">{spec.value[language]}</span>
          </div>
        ))}
      </div>

      {product.brandData?.authorizedDistributor && (
        <div className="mt-5 rounded-xl bg-primary-soft/50 p-3 text-xs flex items-center gap-2 text-primary font-bold">
          <ShieldCheck className="size-4 shrink-0" />
          <span>{t("products.authorizedDistributor")}</span>
        </div>
      )}
    </div>
  );
}
