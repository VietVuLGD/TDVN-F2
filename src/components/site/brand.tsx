import React from "react";

export interface BrandProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Brand({ className = "" }: BrandProps) {
  return (
    <span
      className={`inline-flex items-center justify-start flex-shrink-0 select-none ${className}`}
    >
      <img
        src="/logo.png"
        alt="CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM"
        className="h-[38px] sm:h-[44px] md:h-[48px] xl:h-[60px] w-auto max-w-none block object-contain transition-transform duration-200 hover:scale-[1.02]"
        loading="eager"
      />
    </span>
  );
}

// CÁC EXPORT TƯƠNG THÍCH NGƯỢC
export const Logo = Brand;
export function BrandProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
export default Brand;
