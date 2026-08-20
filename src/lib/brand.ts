/**
 * Brand token engine.
 *
 * The entire design system is derived from three scalars (hue, chroma,
 * lightness) plus a light/dark mode flag. Uploading a logo extracts its
 * dominant colour, converts it to OKLCH and re-themes every surface,
 * border, gradient and state colour on the site.
 */

export type BrandTokens = { h: number; c: number; l: number; dark: boolean };

export const defaultBrand: BrandTokens = { h: 152, c: 0.145, l: 0.48, dark: false };

export const brandPresets: { name: string; tokens: BrandTokens }[] = [
  { name: "Azure", tokens: { h: 208, c: 0.145, l: 0.52, dark: false } },
  { name: "Emerald", tokens: { h: 158, c: 0.135, l: 0.5, dark: false } },
  { name: "Amber", tokens: { h: 62, c: 0.15, l: 0.6, dark: false } },
  { name: "Crimson", tokens: { h: 24, c: 0.16, l: 0.55, dark: false } },
  { name: "Violet", tokens: { h: 288, c: 0.15, l: 0.52, dark: false } },
  { name: "Graphite", tokens: { h: 250, c: 0.04, l: 0.42, dark: true } },
];

export const BRAND_STORAGE_KEY = "tdvn.brand";

export const OFFICIAL_LOGO_PNG = "/TD VIET NAM KHONG NEN-01.png";
export const OFFICIAL_LOGO_JPG = "/TD VIET NAM KHONG NEN-01.png";
export const OFFICIAL_LOGO_SVG = "/TD VIET NAM KHONG NEN-01.png";
export const OFFICIAL_LOGO = "/TD VIET NAM KHONG NEN-01.png";

export function applyBrand(tokens: BrandTokens, root: HTMLElement) {
  root.style.setProperty("--brand-h", String(tokens.h));
  root.style.setProperty("--brand-c", String(tokens.c));
  root.style.setProperty("--brand-l", String(tokens.l));
  root.classList.toggle("dark", tokens.dark);
}

/* ---------- colour maths: sRGB -> OKLCH ---------- */

function srgbToLinear(v: number) {
  const s = v / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

export function rgbToOklch(r: number, g: number, b: number) {
  const lr = srgbToLinear(r);
  const lg = srgbToLinear(g);
  const lb = srgbToLinear(b);

  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);

  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;

  const C = Math.sqrt(A * A + B * B);
  let H = (Math.atan2(B, A) * 180) / Math.PI;
  if (H < 0) H += 360;
  return { l: L, c: C, h: H };
}

/** Extract brand tokens from an image file by sampling its most chromatic pixels. */
export async function brandFromImage(file: File): Promise<BrandTokens> {
  let imgSource: CanvasImageSource;
  try {
    imgSource = await createImageBitmap(file);
  } catch {
    try {
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
      imgSource = await new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = dataUrl;
      });
    } catch {
      return defaultBrand;
    }
  }

  const size = 96;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return defaultBrand;
  ctx.drawImage(imgSource, 0, 0, size, size);
  const { data } = ctx.getImageData(0, 0, size, size);

  let sumX = 0;
  let sumY = 0;
  let sumC = 0;
  let sumL = 0;
  let weight = 0;
  let darkPixels = 0;
  let opaque = 0;

  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3] ?? 0;
    if (a < 128) continue;
    opaque += 1;
    const { l, c, h } = rgbToOklch(data[i] ?? 0, data[i + 1] ?? 0, data[i + 2] ?? 0);
    if (l < 0.32) darkPixels += 1;
    if (c < 0.02) continue; // skip greys
    const w = c * c;
    const rad = (h * Math.PI) / 180;
    sumX += Math.cos(rad) * w;
    sumY += Math.sin(rad) * w;
    sumC += c * w;
    sumL += l * w;
    weight += w;
  }

  const dark = opaque > 0 && darkPixels / opaque > 0.62;

  if (weight === 0) {
    return { ...defaultBrand, c: 0.03, dark };
  }

  let h = (Math.atan2(sumY, sumX) * 180) / Math.PI;
  if (h < 0) h += 360;
  const c = Math.min(0.19, Math.max(0.04, sumC / weight));
  const l = Math.min(0.66, Math.max(0.4, sumL / weight));

  return { h: Math.round(h), c: Number(c.toFixed(3)), l: Number(l.toFixed(3)), dark };
}
