import React, { useState, useRef, useEffect } from "react";
import { Brand } from "./brand";
import { Search, Globe, ArrowRight, Menu, Phone, ChevronDown, ChevronRight, X } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import { useLanguage } from "@/i18n";

interface SubItem {
  title: string;
  href: string;
}

interface MenuSection {
  title: string;
  items: SubItem[];
}

interface FeaturedCard {
  tag: string;
  title: string;
  desc: string;
  link: string;
}

interface NavItem {
  label: string;
  href: string;
  sections?: MenuSection[];
  featured?: FeaturedCard;
}

const MAIN_NAV_DATA: NavItem[] = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giải pháp",
    href: "/solutions",
    sections: [
      {
        title: "Phân Khúc Khách Hàng",
        items: [
          { title: "Điện mặt trời Gia đình & Biệt thự", href: "/solutions" },
          { title: "Điện mặt trời Nhà xưởng & Doanh nghiệp (C&I)", href: "/solutions" },
          { title: "Điện mặt trời Trang trại & Nông nghiệp", href: "/solutions" },
        ],
      },
      {
        title: "Giải pháp kĩ thuật",
        items: [
          { title: "Điện mặt trời bám tải On Grid", href: "/solutions#technical-solutions" },
          { title: "Hybrid & Lưu trữ năng lượng", href: "/solutions#technical-solutions" },
          { title: "Điện mặt trời độc lập", href: "/solutions#technical-solutions" },
        ],
      },
    ],
    featured: {
      tag: "TIÊU ĐIỂM",
      title: "Giải Pháp Hybrid & Lưu Trữ (ESS)",
      desc: "Duy trì nguồn điện liên tục cho các thiết bị quan trọng, giảm phụ thuộc điện lưới và tối ưu bài toán kinh tế khi không còn cơ chế giá FIT.",
      link: "/solutions",
    },
  },
  {
    label: "Dự án",
    href: "/projects",
    sections: [
      {
        title: "Công Trình Thực Tế",
        items: [
          { title: "Tất cả công trình", href: "/projects" },
          { title: "Dự án Gia đình & Biệt thự", href: "/projects" },
          { title: "Dự án Doanh nghiệp & Nhà xưởng (C&I)", href: "/projects" },
          { title: "Hệ thống Hybrid & Lưu trữ thực tế", href: "/projects" },
        ],
      },
    ],
    featured: {
      tag: "TIÊU ĐIỂM",
      title: "Sản Lượng Thực Tế",
      desc: "Minh bạch biểu đồ phát điện thực tế qua App/Cloud, đối chiếu độ chính xác với mô phỏng PVsyst trước khi thi công.",
      link: "/projects",
    },
  },
  {
    label: "Sản phẩm",
    href: "/products",
    sections: [
      {
        title: "Thiết bị & vật tư",
        items: [
          { title: "Biến tần", href: "/products#equipment-inverter" },
          { title: "Tấm quang năng", href: "/products#equipment-solar-panels" },
          { title: "Pin lưu trữ", href: "/products#equipment-battery-storage" },
          { title: "Tủ điện", href: "/products#equipment-cabinets" },
          { title: "Đèn mặt trời", href: "/products#equipment-solar-lighting" },
        ],
      },
      {
        title: "Lắp đặt trọn gói",
        items: [
          { title: "Hệ thống Hybrid", href: "/products#hybrid-package" },
          { title: "Hệ thống Ongrid", href: "/products#ongrid-package" },
        ],
      },
    ],
    featured: {
      tag: "TIÊU ĐIỂM",
      title: "Hardware tiêu chuẩn",
      desc: "Do TD VIỆT NAM trực tiếp thử nghiệm, lưu kho và đứng ra bảo hành.",
      link: "/products#hardware-standards",
    },
  },
  {
    label: "Kiến thức",
    href: "/knowledge",
    sections: [
      {
        title: "Chuyên Đề Kỹ Thuật",
        items: [
          { title: "Kiến thức kĩ thuật", href: "/knowledge" },
          { title: "Hướng dẫn Lắp đặt & Vận hành", href: "/knowledge" },
          { title: "Phân tích công nghệ", href: "/knowledge" },
        ],
      },
      {
        title: "Bài báo & Thông tin",
        items: [
          { title: "Tin tức & Sự kiện", href: "/knowledge" },
          { title: "Tiêu chuẩn & Quy chuẩn", href: "/knowledge" },
        ],
      },
    ],
    featured: {
      tag: "TIÊU ĐIỂM",
      title: "Góc nhìn Kỹ sư",
      desc: "Kiến thức chuyên sâu và giải pháp kỹ thuật thực tế cho hệ thống điện.",
      link: "/knowledge#featured-engineering-view",
    },
  },
];

const TOP_NAV_DATA: NavItem[] = [
  {
    label: "Dịch vụ",
    href: "/services",
    sections: [
      {
        title: "Tư Vấn & Kỹ Thuật Dự Án",
        items: [
          { title: "Khảo sát & Mô phỏng sản lượng", href: "/services" },
          { title: "Thiết kế kỹ thuật & Dự toán hệ thống", href: "/services" },
          { title: "Tư vấn pháp lý, Đấu nối", href: "/services" },
        ],
      },
      {
        title: "Triển Khai & Vận Hành",
        items: [
          { title: "Tổng thầu EPC trọn gói", href: "/services" },
          { title: "Bảo trì, Đo kiểm & Vận hành (O&M)", href: "/services" },
          { title: "Nâng cấp & Mở rộng hệ thống lưu trữ (BESS/Hybrid)", href: "/services" },
          { title: "Cung cấp vật tư & Thiết bị chính hãng", href: "/services" },
        ],
      },
    ],
    featured: {
      tag: "TIÊU ĐIỂM",
      title: "Tổng thầu EPC Trọn gói",
      desc: "Cam kết chất lượng kỹ thuật công nghiệp, tối ưu CAPEX và bảo hành dài hạn.",
      link: "/services",
    },
  },
  {
    label: "Tài nguyên",
    href: "/downloads",
    sections: [
      {
        title: "Tài Liệu Dự Án",
        items: [
          { title: "Hồ sơ năng lực", href: "/downloads" },
          { title: "Hồ sơ kỹ thuật", href: "/downloads" },
          { title: "Chứng nhận chất lượng", href: "/downloads" },
        ],
      },
      {
        title: "Tài liệu Kỹ thuật",
        items: [
          { title: "Datasheet kỹ thuật", href: "/downloads" },
          { title: "Catalog sản phẩm", href: "/downloads" },
        ],
      },
    ],
    featured: {
      tag: "TIÊU ĐIỂM",
      title: "Tài liệu kỹ thuật",
      desc: "Trọn bộ hồ sơ năng lực và catalog thiết bị mới nhất của TD VIỆT NAM.",
      link: "/downloads",
    },
  },
];

const ALL_NAV_ITEMS = [...MAIN_NAV_DATA, ...TOP_NAV_DATA];

const FEATURED_SEARCH_ITEMS = [
  // Cột 1: Giải pháp & Dự án
  { title: "Điện mặt trời mái nhà", href: "/solutions" },
  { title: "Điện mặt trời công nghiệp vừa & nhỏ", href: "/projects" },
  { title: "Tất cả công trình dự án", href: "/projects" },
  // Cột 2: Thiết bị & Hệ thống
  { title: "Biến tần & Pin lưu trữ BESS", href: "/products" },
  { title: "Tấm quang năng Tier-1", href: "/products" },
  { title: "Hệ thống Hybrid & Ongrid", href: "/products" },
  // Cột 3: Dịch vụ & Tài liệu kỹ thuật
  { title: "Tổng thầu EPC trọn gói", href: "/services" },
  { title: "Hồ sơ năng lực TD VIỆT NAM", href: "/downloads" },
  { title: "Hướng dẫn Lắp đặt & Vận hành", href: "/knowledge" },
];

const QUICK_CATEGORIES = [
  { title: "Giải pháp", href: "/solutions" },
  { title: "Dự án", href: "/projects" },
  { title: "Thiết bị & Vật tư", href: "/products" },
  { title: "Dịch vụ EPC", href: "/services" },
  { title: "Kiến thức kỹ thuật", href: "/knowledge" },
  { title: "Tài liệu & Catalog", href: "/downloads" },
  { title: "Tuyển dụng", href: "/careers" },
];

export function Header() {
  const location = useLocation();
  const pathname = location?.pathname || "/";
  const { language, toggleLanguage } = useLanguage();
  const currentLang = language.toUpperCase();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const checkIsActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleMouseEnter = (label: string) => {
    if (isSearchOpen) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const toggleSearch = () => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setIsSearchOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsSearchOpen(false);
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleMobileAccordion = (label: string) => {
    setExpandedMobileSection((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    setActiveMenu(null);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 80);
    } else {
      setSearchQuery("");
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleSearch();
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
        setActiveMenu(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeItemData = ALL_NAV_ITEMS.find((item) => item.label === activeMenu);

  const filteredItems = searchQuery.trim()
    ? FEATURED_SEARCH_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : FEATURED_SEARCH_ITEMS;

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200/80 shadow-xs"
        onMouseLeave={handleMouseLeave}
      >
        {/* TẦNG 1: TOP BAR (DESKTOP XL) */}
        <div className="w-full hidden xl:flex justify-end relative z-20">
          <div className="bg-[#f0f2f5] border-l border-b border-neutral-200/70 pl-7 pr-6 lg:pr-8 h-8 flex items-center gap-6 text-[12.5px] lg:text-[13px] font-medium text-neutral-800 rounded-bl-2xl">
            <a
              href="tel:0941994262"
              className="inline-flex items-center gap-1.5 text-neutral-800 hover:text-[#008A4B] transition-colors"
              title="Hotline Kỹ thuật TD VIỆT NAM"
            >
              <Phone className="w-3.5 h-3.5 text-[#008A4B]" />
              <span className="font-semibold text-neutral-900 hover:text-[#008A4B]">
                0941 994 262
              </span>
            </a>

            <div className="flex items-center gap-4 lg:gap-5">
              <a
                href="/about"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setActiveMenu(null);
                }}
                className={`inline-flex items-center transition-all duration-150 font-medium ${
                  checkIsActive("/about")
                    ? "text-[#008A4B] font-bold"
                    : "text-neutral-800 hover:text-[#008A4B]"
                }`}
              >
                Giới thiệu
              </a>

              {TOP_NAV_DATA.map((item) => {
                const isRouteActive = checkIsActive(item.href);
                const isOpen = activeMenu === item.label && !isSearchOpen;

                return (
                  <div
                    key={item.label}
                    className="relative cursor-pointer py-0.5"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                  >
                    <a
                      href={item.href}
                      className={`inline-flex items-center gap-1 transition-all duration-150 font-medium ${
                        isOpen || isRouteActive
                          ? "text-[#008A4B] font-bold"
                          : "text-neutral-800 hover:text-[#008A4B]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          isOpen ? "rotate-180 text-[#008A4B]" : "text-neutral-500"
                        }`}
                      />
                    </a>
                  </div>
                );
              })}

              <a
                href="/careers"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setActiveMenu(null);
                }}
                className={`inline-flex items-center transition-all duration-150 font-medium ${
                  checkIsActive("/careers")
                    ? "text-[#008A4B] font-bold"
                    : "text-neutral-800 hover:text-[#008A4B]"
                }`}
              >
                Tuyển dụng
              </a>
            </div>

            <span className="text-neutral-300 select-none">|</span>

            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={`Chuyển đổi ngôn ngữ (Đang chọn ${currentLang})`}
              title={`Ngôn ngữ: ${currentLang === "VI" ? "Tiếng Việt (Bấm để chuyển English)" : "English (Click to switch Tiếng Việt)"}`}
              className="inline-flex items-center gap-1.5 font-bold text-[#F15A24] hover:text-[#d94816] transition-colors select-none cursor-pointer focus:outline-none"
            >
              <Globe className="h-3.5 w-3.5 text-[#F15A24] flex-shrink-0" />
              <span className="w-5 text-center font-bold tracking-tight">{currentLang}</span>
            </button>
          </div>
        </div>

        {/* TẦNG 2: MAIN BAR */}
        <div className="w-full px-4 sm:px-6 lg:px-8 h-[64px] sm:h-[68px] xl:h-[72px] flex items-center justify-between relative">
          {/* CỤM TRÁI: LOGO */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a
              href="/"
              className="inline-flex items-center h-full focus:outline-hidden"
              aria-label="TD VIỆT NAM - Trang chủ"
            >
              <Brand />
            </a>
          </div>

          {/* CỤM GIỮA: 5 MENU CHÍNH CHỈ HIỆN TRÊN DESKTOP (XL) */}
          <nav className="absolute left-1/2 top-0 -translate-x-1/2 h-full hidden xl:flex items-center gap-7 lg:gap-9 xl:gap-11 text-[15px] lg:text-[16px] whitespace-nowrap">
            {MAIN_NAV_DATA.map((item) => {
              const isRouteActive = checkIsActive(item.href);
              const isOpen = activeMenu === item.label && !isSearchOpen;

              return (
                <div
                  key={item.label}
                  className="h-full flex items-center relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                >
                  <a
                    href={item.href}
                    className={`h-full inline-flex items-center px-2.5 lg:px-3 text-[15px] lg:text-[16px] tracking-tight transition-colors duration-150 select-none ${
                      isOpen || isRouteActive
                        ? "text-neutral-950 font-bold"
                        : "text-neutral-900 font-semibold hover:text-neutral-950"
                    }`}
                  >
                    <span className="relative inline-flex items-center gap-1.5 h-full">
                      <span>{item.label}</span>
                      {item.sections && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#F15A24]" : "text-neutral-500"
                          }`}
                        />
                      )}

                      <span
                        className={`absolute bottom-0 ${
                          item.sections ? "left-[-8px] right-[-2px]" : "left-[-4px] right-[-4px]"
                        } h-[2.5px] bg-[#F15A24] transition-all duration-200 ${
                          isOpen || isRouteActive
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0"
                        }`}
                      />
                    </span>
                  </a>
                </div>
              );
            })}
          </nav>

          {/* CỤM PHẢI: DESKTOP SEARCH + CTA (XL) */}
          <div className="hidden xl:flex items-center gap-4 lg:gap-5 flex-shrink-0">
            <span className="h-6 w-[1.5px] bg-neutral-300/90 select-none inline-block rounded-full" />

            <button
              type="button"
              aria-label="Tìm kiếm"
              onClick={toggleSearch}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isSearchOpen
                  ? "bg-emerald-50 text-[#008A4B]"
                  : "text-neutral-800 hover:text-[#008A4B] hover:bg-neutral-50"
              }`}
              title="Tìm kiếm (Ctrl + K)"
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </button>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 lg:gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#008A4B] hover:bg-[#00703C] transition-all shadow-xs whitespace-nowrap"
            >
              <span>TRAO ĐỔI VỚI KỸ SƯ</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* CỤM PHẢI MOBILE / TABLET (< XL) */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              aria-label="Tìm kiếm"
              onClick={toggleSearch}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isSearchOpen
                  ? "bg-emerald-50 text-[#008A4B]"
                  : "text-neutral-800 hover:bg-neutral-100"
              }`}
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Mở menu"
              onClick={toggleMobileMenu}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isMobileMenuOpen
                  ? "bg-emerald-50 text-[#008A4B]"
                  : "text-neutral-800 hover:bg-neutral-100"
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* SEARCH DROPDOWN */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 w-full pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150 px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl lg:max-w-4xl mx-auto bg-white border border-neutral-200/90 shadow-2xl rounded-none p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3 border-b-2 border-[#008A4B] pb-3 transition-colors">
                  <Search className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm giải pháp, thiết bị, dự án, tài liệu kỹ thuật..."
                    className="w-full text-sm sm:text-base font-semibold text-neutral-900 placeholder:text-neutral-400 placeholder:font-normal bg-transparent focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="p-1 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-400 mb-3">
                      {searchQuery.trim() ? "KẾT QUẢ GỢI Ý" : "NỘI DUNG NỔI BẬT"}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-8">
                      {filteredItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setIsSearchOpen(false)}
                          className="block text-sm font-semibold text-neutral-700 hover:text-[#008A4B] hover:translate-x-1 transition-all py-0.5 whitespace-nowrap truncate"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>

                  {!searchQuery.trim() && (
                    <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-extrabold uppercase tracking-wider text-neutral-400 text-[10px] mr-1">
                        XEM NHANH:
                      </span>
                      {QUICK_CATEGORIES.map((cat, idx) => (
                        <a
                          key={idx}
                          href={cat.href}
                          onClick={() => setIsSearchOpen(false)}
                          className="px-2.5 py-1 bg-neutral-100 hover:bg-[#008A4B] hover:text-white text-neutral-700 font-medium transition-colors rounded-none"
                        >
                          {cat.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* MEGA MENU DESKTOP */}
          {!isSearchOpen && activeItemData && activeItemData.sections && (
            <div
              className="absolute top-full left-0 w-full pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150 px-4 sm:px-6 lg:px-8 hidden xl:block"
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-3xl lg:max-w-4xl mx-auto bg-white border border-neutral-200/90 shadow-2xl rounded-none overflow-hidden grid grid-cols-12">
                {/* CỘT TRÁI (NỀN TRẮNG) */}
                <div
                  className={`col-span-6 p-6 sm:p-7 bg-white ${
                    !activeItemData.sections[0]?.title
                      ? "flex flex-col justify-center space-y-3.5"
                      : "space-y-4"
                  }`}
                >
                  {activeItemData.sections.slice(0, 1).map((sec, idx) => (
                    <div
                      key={sec.title || `sec-${idx}`}
                      className={sec.title ? "space-y-3" : "space-y-3.5"}
                    >
                      {sec.title && (
                        <h4 className="text-[15px] font-bold text-neutral-900 tracking-tight">
                          {sec.title}
                        </h4>
                      )}
                      <div className={sec.title ? "space-y-2" : "space-y-3.5"}>
                        {sec.items.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            className="block text-[14px] font-semibold text-neutral-800 hover:text-[#008A4B] hover:translate-x-1 transition-all py-0.5 whitespace-nowrap"
                          >
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CỘT PHẢI (NỀN XANH XÁM NHẠT) */}
                <div
                  className={`col-span-6 p-6 sm:p-7 bg-[#f2f6fa] border-l border-neutral-200/70 ${
                    activeItemData.sections.slice(1).length === 0
                      ? "flex flex-col justify-center space-y-3"
                      : "space-y-4"
                  }`}
                >
                  {activeItemData.sections.slice(1).map((sec, idx) => (
                    <div
                      key={sec.title || `sec-r-${idx}`}
                      className={sec.title ? "space-y-2.5" : "space-y-3"}
                    >
                      {sec.title && (
                        <h4 className="text-[15px] font-bold text-[#0c2340] tracking-tight">
                          {sec.title}
                        </h4>
                      )}
                      <div className="space-y-2">
                        {sec.items.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            className="block text-[14px] font-semibold text-neutral-800 hover:text-[#008A4B] hover:translate-x-1 transition-all py-0.5 whitespace-nowrap"
                          >
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}

                  {activeItemData.featured && (
                    <div
                      className={
                        activeItemData.sections.slice(1).length > 0
                          ? "pt-3 border-t border-neutral-200/70"
                          : ""
                      }
                    >
                      <a href={activeItemData.featured.link} className="group block">
                        <div className="text-[11px] font-bold text-[#008A4B] uppercase tracking-wider mb-0.5">
                          {activeItemData.featured.tag}
                        </div>
                        <div className="text-sm font-bold text-neutral-900 group-hover:text-[#008A4B] transition-colors">
                          {activeItemData.featured.title}
                        </div>
                        <p className="text-[12.5px] text-neutral-600 mt-0.5 leading-relaxed">
                          {activeItemData.featured.desc}
                        </p>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* MOBILE / TABLET NAVIGATION DRAWER - NÂNG LÊN Z-[100] KHÔNG BỊ ĐÈ NÚT SPEED DIAL */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          {/* Lớp phủ mờ */}
          <div
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Panel trượt từ bên phải */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-[101] animate-in slide-in-from-right duration-200">
            {/* Header Drawer */}
            <div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between">
              <span className="font-bold text-neutral-900 text-base">Menu Điều Hướng</span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nội dung danh sách cuộn */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
              {/* Menu Chính */}
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider px-2 mb-2">
                  Danh Mục Chính
                </div>
                {MAIN_NAV_DATA.map((item) => {
                  const hasSections = item.sections && item.sections.length > 0;
                  const isExpanded = expandedMobileSection === item.label;

                  return (
                    <div key={item.label} className="border-b border-neutral-100 last:border-none">
                      {hasSections ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleMobileAccordion(item.label)}
                            className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-left text-sm font-bold text-neutral-800 hover:bg-neutral-50 hover:text-[#008A4B]"
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180 text-[#F15A24]" : "text-neutral-400"}`}
                            />
                          </button>

                          {isExpanded && item.sections && (
                            <div className="pl-4 pr-2 pb-3 space-y-3 bg-[#f8fafc] rounded-lg mt-1 p-2">
                              {item.sections.map((sec) => (
                                <div key={sec.title} className="space-y-1.5">
                                  {sec.title && (
                                    <div className="text-[11px] font-bold text-[#008A4B] uppercase">
                                      {sec.title}
                                    </div>
                                  )}
                                  <div className="space-y-1 pl-2">
                                    {sec.items.map((sub) => (
                                      <a
                                        key={sub.title}
                                        href={sub.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-1.5 py-1 text-xs font-medium text-neutral-700 hover:text-[#F15A24]"
                                      >
                                        <ChevronRight className="w-3 h-3 text-[#F15A24]" />
                                        <span>{sub.title}</span>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-3 rounded-lg text-sm font-bold text-neutral-800 hover:bg-neutral-50 hover:text-[#008A4B]"
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Menu Phụ */}
              <div className="space-y-1 pt-3 border-t border-neutral-200">
                <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider px-2 mb-2">
                  Thông Tin Doanh Nghiệp
                </div>
                <a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#008A4B]"
                >
                  Giới thiệu
                </a>
                {TOP_NAV_DATA.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#008A4B]"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/careers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#008A4B]"
                >
                  Tuyển dụng
                </a>
              </div>

              {/* Tiện ích liên hệ */}
              <div className="pt-3 border-t border-neutral-200 space-y-3">
                <a
                  href="tel:0941994262"
                  className="flex items-center gap-2.5 px-3 py-2 bg-neutral-50 rounded-xl text-neutral-800 font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#008A4B]" />
                  <span>Hotline: 0941 994 262</span>
                </a>

                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-between px-3 py-2.5 bg-neutral-50 hover:bg-neutral-100 rounded-xl text-xs font-semibold text-neutral-700 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-[#F15A24]" />
                    <span>
                      {currentLang === "VI" ? "Ngôn ngữ: Tiếng Việt" : "Language: English"}
                    </span>
                  </span>
                  <span className="text-[#F15A24] font-bold px-2 py-0.5 bg-orange-50 border border-orange-200/80 rounded">
                    {currentLang}
                  </span>
                </button>
              </div>
            </div>

            {/* Footer Drawer với CTA */}
            <div className="p-5 border-t border-neutral-200 bg-neutral-50">
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-[#008A4B] hover:bg-[#00703C] shadow-md transition-all"
              >
                <span>TRAO ĐỔI VỚI KỸ SƯ</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* LỚP PHỦ BACKDROP KHI TÌM KIẾM */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 top-[96px] z-40 bg-neutral-950/20 backdrop-blur-xs transition-opacity animate-in fade-in duration-150 cursor-pointer"
          onClick={() => setIsSearchOpen(false)}
        />
      )}
    </>
  );
}
