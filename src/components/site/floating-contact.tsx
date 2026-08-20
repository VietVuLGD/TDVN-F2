import React, { useState, useRef, useEffect } from "react";
import { Phone, Mail, X, Plus } from "lucide-react";

interface ContactChannel {
  name: string;
  href: string;
  icon: React.ReactNode;
  bgClass: string;
  textClass: string;
  borderClass: string;
}

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // DANH SÁCH 5 KÊNH KẾT NỐI (DỄ DÀNG CẬP NHẬT LINK TRỰC TIẾP TẠI ĐÂY)
  const CHANNELS: ContactChannel[] = [
    {
      name: "Gọi Hotline",
      href: "tel:0941994262",
      bgClass: "bg-[#008A4B] hover:bg-[#00703C]",
      textClass: "text-white",
      borderClass: "border-[#008A4B]",
      icon: <Phone className="w-4 h-4 text-white" />,
    },
    {
      name: "Chat Zalo",
      href: "https://zalo.me/0941994262",
      bgClass: "bg-[#0068FF] hover:bg-[#0055d4]",
      textClass: "text-white",
      borderClass: "border-[#0068FF]",
      icon: <span className="font-black text-[11px] tracking-tighter text-white">Zalo</span>,
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      bgClass: "bg-[#1877F2] hover:bg-[#0d65d9]",
      textClass: "text-white",
      borderClass: "border-[#1877F2]",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      bgClass: "bg-[#010101] hover:bg-neutral-800",
      textClass: "text-white",
      borderClass: "border-neutral-800",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.95-4.52V8.06a8.28 8.28 0 0 0 4.82 1.54V6.15a4.85 4.85 0 0 1-1-.02z" />
        </svg>
      ),
    },
    {
      name: "Gửi Email",
      href: "mailto:nangluongtd@gmail.com",
      bgClass: "bg-white hover:bg-neutral-50",
      textClass: "text-neutral-800",
      borderClass: "border-neutral-200",
      icon: <Mail className="w-4 h-4 text-[#008A4B]" />,
    },
  ];

  // TỰ ĐỘNG ĐÓNG KHI CHẠM HOẶC CLICK RA NGOÀI (DÀNH CHO PAD & MOBILE)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999,
      }}
      className="flex flex-col items-end gap-3 select-none pointer-events-auto"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* DANH SÁCH MENU MỞ RỘNG (SPEED DIAL ITEMS) */}
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-300 ease-out origin-bottom ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
      >
        {CHANNELS.map((ch, index) => (
          <a
            key={ch.name}
            href={ch.href}
            target={ch.href.startsWith("http") ? "_blank" : undefined}
            rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{
              transitionDelay: isOpen ? `${index * 30}ms` : "0ms",
            }}
            className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${ch.bgClass} ${ch.borderClass}`}
          >
            <span className={`text-xs font-bold tracking-tight whitespace-nowrap ${ch.textClass}`}>
              {ch.name}
            </span>
            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">{ch.icon}</div>
          </a>
        ))}
      </div>

      {/* NÚT KÍCH HOẠT CHÍNH (KHÓA KÍCH THƯỚC CỐ ĐỊNH, HIỂN THỊ 100% TRÊN MỌI THIẾT BỊ) */}
      <button
        type="button"
        aria-label="Mở tiện ích liên hệ nhanh"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: "52px",
          height: "52px",
          minWidth: "52px",
          minHeight: "52px",
        }}
        className={`rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform active:scale-90 cursor-pointer ${
          isOpen
            ? "bg-neutral-900 hover:bg-neutral-800 rotate-90 scale-95 shadow-neutral-900/40"
            : "bg-[#008A4B] hover:bg-[#00703C] hover:scale-105 shadow-[#008A4B]/40"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-200" />
        ) : (
          <Plus className="w-6 h-6 transition-transform duration-200" />
        )}
      </button>
    </div>
  );
}

// CÁC EXPORT TƯƠNG THÍCH ĐỂ KHÔNG BỊ LỖI IMPORT
export const QuickContact = FloatingContact;
export const SpeedDial = FloatingContact;
export default FloatingContact;
