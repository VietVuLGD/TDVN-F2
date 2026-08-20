import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  FileText,
  Phone,
  MapPin,
  Plus,
  ChevronRight,
} from "lucide-react";

const title = "Về TD VIỆT NAM — Tổng Thầu EPC Điện Mặt Trời & Lưu Trữ BESS";
const description =
  "CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM là đối tác kỹ thuật chuyên sâu cung cấp các giải pháp Điện mặt trời áp mái, Điện mặt trời công nghiệp và Hệ thống lưu trữ năng lượng BESS.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

/* =========================================================================
   DỮ LIỆU CÁC NHÓM KỸ SƯ & CHUYÊN NGÀNH (BECHTEL TABBED DISCIPLINES)
========================================================================= */
const DISCIPLINE_TABS = [
  {
    id: "engineering",
    tabName: "KHỐI KỸ THUẬT & THIẾT KẾ",
    title: "Khối Kỹ Thuật Thiết Kế & Mô Phỏng Hệ Thống",
    description:
      "Đội ngũ kỹ sư Hệ thống điện chịu trách nhiệm toàn bộ bài toán mô phỏng sản lượng PVsyst P50/P90, tính toán kết cấu cơ khí chịu tải gió và lập hồ sơ bản vẽ thi công IFC tiêu chuẩn.",
    ctaText: "Khám phá Năng lực Kỹ thuật",
    items: [
      {
        title: "Mô Phỏng PVsyst & Bóng Che 3D",
        category: "Simulation & Modeling",
        image:
          "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Hồ Sơ Bản Vẽ Thi Công IFC",
        category: "Electrical CAD & SLD",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Hệ Thống Lưu Trữ Pin BESS",
        category: "Battery Energy Storage",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Thẩm Tra Đấu Nối Lưới EVN",
        category: "Grid Code & Protection",
        image:
          "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Giải Pháp Zero-Export & Rơ-le",
        category: "Power Control & Automation",
        image:
          "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Tối Ưu Hóa Dòng Tiền LCOE",
        category: "Financial Engineering",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "field-epc",
    tabName: "KHỐI THI CÔNG EPC HIỆN TRƯỜNG",
    title: "Khối Quản Lý Dự Án & Thi Công Hiện Trường",
    description:
      "Chỉ huy trưởng và kỹ sư giám sát trực tiếp quản trị chất lượng lắp đặt cơ điện, khung giàn nhôm Anodized, kéo rải cáp ngầm và đảm bảo 100% an toàn lao động chuẩn HSE quốc tế.",
    ctaText: "Xem Quy Trình Thi Công",
    items: [
      {
        title: "Thi Công Cơ Điện Áp Mái",
        category: "Rooftop Mechanical & Civil",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Lắp Đặt Trạm Biến Áp & Tủ RMU",
        category: "Substation & Switchgear",
        image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Kiểm Soát An Toàn HSE Mái Xưởng",
        category: "Zero-Harm Safety Policy",
        image:
          "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Thử Nghiệm & Đóng Điện Hòa Lưới",
        category: "Commissioning & Energization",
        image:
          "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Bảo Trì O&M & Quét Drone Nhiệt",
        category: "Drone Thermography & SCADA",
        image:
          "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Nghiệm Thu Đo Kiểm Megger & I-V",
        category: "Quality Assurance Testing",
        image:
          "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "young-engineers",
    tabName: "CHƯƠNG TRÌNH PHÁT TRIỂN KỸ SƯ",
    title: "Chương Trình Đào Tạo Kỹ Sư Trẻ & R&D Chuyên Sâu",
    description:
      "Ươm mầm tài năng kỹ thuật điện, tạo điều kiện để các kỹ sư làm chủ công nghệ mô phỏng Inverter, điều khiển lưới Microgrid và công nghệ pin lưu trữ tương lai.",
    ctaText: "Gia Nhập Đội Ngũ Kỹ Sư",
    items: [
      {
        title: "Đào Tạo Chuyên Sâu PVsyst & BESS",
        category: "Technical Mentorship",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Thực Chiến Tại Các Công Trường FDI",
        category: "Field Experience Program",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
      },
      {
        title: "Nghiên Cứu Điều Khiển Ảo (VSG / Grid-Forming)",
        category: "Advanced Power Systems R&D",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      },
    ],
  },
];

/* =========================================================================
   DỮ LIỆU KHỐI "LIFE AT TD VIỆT NAM" (BECHTEL STYLE)
========================================================================= */
const LIFE_AT_TD = [
  {
    title: "Chính Sách Đãi Ngộ & Phúc Lợi",
    desc: "Bảo hiểm toàn diện, lương thưởng theo mốc tiến độ dự án EPC và lộ trình thăng tiến kỹ sư minh bạch.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Văn Hóa An Toàn Tuyệt Đối (HSE)",
    desc: "Cam kết Zero-Harm: 100% trang bị bảo hộ đạt chuẩn, lưới cứu sinh toàn thân khi làm việc trên cao.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Đối Tác Thiết Bị Tier-1 Quốc Tế",
    desc: "Làm việc trực tiếp cùng các chuyên gia hàng đầu từ các hãng Inverter chuỗi, Tấm pin và Pin Lithium toàn cầu.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Cam Kết Net-Zero & Phát Triển Bền Vững",
    desc: "Đồng hành cùng hàng trăm doanh nghiệp sản xuất giảm phát thải carbon và đạt chứng chỉ xanh I-REC / ESG.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=80",
  },
];

/* =========================================================================
   DỮ LIỆU TESTIMONIALS (HEAR FROM OUR PEOPLE)
========================================================================= */
const TESTIMONIALS = [
  {
    quote:
      "Tại TD VIỆT NAM, chúng tôi không chấp nhận những con số ước lượng mơ hồ. Một hệ thống điện mặt trời công nghiệp phải được bảo vệ bằng dữ liệu mô phỏng chính xác, sơ đồ mạch tối ưu và độ bền vật lý vững vàng suốt 25 năm.",
    name: "VŨ VĂN VIỆT",
    role: "KỸ SƯ TRƯỞNG HỆ THỐNG ĐIỆN & BESS",
    company: "CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    workImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Thi công trên mái nhà xưởng đòi hỏi kỷ luật thép về an toàn và kỹ thuật chống thấm dột. Mỗi bu-lông, kẹp nhôm hay đầu bấm MC4 đều được kiểm tra kép trước khi bàn giao đóng điện.",
    name: "NGUYỄN VĂN AN",
    role: "CHỈ HUY TRƯỞNG THI CÔNG HIỆN TRƯỜNG",
    company: "KHỐI DỰ ÁN EPC",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    workImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&auto=format&fit=crop&q=80",
  },
];

export function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const currentTab = DISCIPLINE_TABS[activeTab];
  const currentTestimonial = TESTIMONIALS[activeTestimonial];

  return (
    <div className="w-full bg-white text-neutral-900 font-sans">
      {/* ============================================================= */}
      {/* 1. HERO BANNER: PHONG CÁCH BECHTEL CAREERS / CORPORATE       */}
      {/* ============================================================= */}
      <section className="relative w-full bg-[#050e18] text-white py-20 lg:py-28 overflow-hidden">
        {/* Nền ảnh kỹ thuật công nghiệp */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1800&auto=format&fit=crop&q=80"
            alt="Hạ tầng công nghiệp TD VIỆT NAM"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e18] via-[#050e18]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e18] via-transparent to-[#050e18]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-mono font-bold text-[#F15A24] uppercase tracking-wider">
              ABOUT TD VIỆT NAM
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight tracking-tight">
              Building Tomorrow, Together.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Tại TD VIỆT NAM, chúng tôi không chỉ triển khai những công trình điện mặt trời đơn
              thuần — chúng tôi kiến tạo hạ tầng năng lượng an toàn, tối ưu hóa chi phí vận hành và
              đồng hành cùng các doanh nghiệp sản xuất trong hành trình chuyển dịch năng lượng xanh
              bền vững.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#disciplines"
                className="inline-flex items-center gap-3 text-sm font-bold text-white group"
              >
                <div className="w-9 h-9 rounded-full bg-[#F15A24] group-hover:bg-[#d94816] flex items-center justify-center transition-all shadow-md group-hover:scale-105">
                  <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
                <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white">
                  Khám phá Năng lực &amp; Cơ hội tại TD VIỆT NAM
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB & DOT MATRIX BAR */}
      <div
        className="w-full bg-white border-b border-neutral-200 py-3.5"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-mono font-bold text-neutral-400">
          <a href="/" className="hover:text-neutral-900 transition-colors">
            HOME
          </a>
          <span>&gt;</span>
          <span className="text-[#F15A24]">GIỚI THIỆU DOANH NGHIỆP</span>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 2. WHY TD VIỆT NAM? (GIỮ NGUYÊN BỐ CỤC ẢNH & NỘI DUNG ĐÃ GỬI)   */}
      {/* ============================================================= */}
      <section
        className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* CỘT TRÁI: BỘ MOSAIC ẢNH KỸ SƯ & HIỆN TRƯỜNG ĐÃ NẠP ĐỦ ẢNH */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                {/* Ảnh 1: Kỹ sư phòng Lab */}
                <div className="aspect-[4/5] bg-neutral-100 overflow-hidden border border-neutral-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                    alt="Kỹ sư thiết kế bản vẽ IFC tại TD VIỆT NAM"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Ảnh 2: Giám sát an toàn thi công mái xưởng */}
                <div className="aspect-square bg-neutral-100 overflow-hidden border border-neutral-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80"
                    alt="Giám sát an toàn thi công mái xưởng"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                {/* Ảnh 3: Tủ điện hòa lưới và hệ thống đóng cắt */}
                <div className="aspect-square bg-neutral-100 overflow-hidden border border-neutral-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&auto=format&fit=crop&q=80"
                    alt="Tủ điện hòa lưới và hệ thống đóng cắt"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Ảnh 4: Dàn tấm pin năng lượng mặt trời */}
                <div className="aspect-[4/5] bg-neutral-100 overflow-hidden border border-neutral-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80"
                    alt="Hệ thống tấm pin năng lượng mặt trời công nghiệp"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Tag xanh "100% Tinh Gọn" ở góc dưới */}
              <div className="absolute -bottom-4 left-4 bg-[#008A4B] text-white p-4 shadow-xl border border-white/20 max-w-xs z-10">
                <div className="text-xl font-black font-mono">100% Tinh Gọn</div>
                <div className="text-[11px] text-white/90 leading-tight mt-0.5">
                  Tập trung kỹ thuật chuyên sâu, loại bỏ chi phí trung gian không cần thiết.
                </div>
              </div>
            </div>

            {/* CỘT PHẢI: NỘI DUNG VÌ SAO CHỌN CHÚNG TÔI */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-wider">
                  VÌ SAO CHỌN CHÚNG TÔI?
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase text-neutral-900 tracking-tight leading-tight">
                  TẬP TRUNG VÀO HIỆU SUẤT THỰC TẾ &amp; AN TOÀN ĐIỆN VĨNH CỬU
                </h2>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                Đối với một doanh nghiệp công nghiệp, đầu tư điện mặt trời không chỉ là lắp thêm tấm
                pin trên mái nhà, mà là{" "}
                <strong>
                  tích hợp một nguồn phát điện công suất lớn trực tiếp vào hạ tầng lưới điện hiện
                  hữu của nhà máy
                </strong>
                .
              </p>

              {/* 3 KHỐI CAM KẾT ĐẶC TRƯNG */}
              <div className="space-y-4 pt-2">
                {/* Khối 1: Xanh */}
                <div className="p-4 bg-neutral-50/90 border-l-4 border-[#008A4B] space-y-1 shadow-xs">
                  <div className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008A4B] flex-shrink-0" />
                    <span>Thiết kế tối ưu theo biểu giá điện 3 giá</span>
                  </div>
                  <p className="text-xs text-neutral-600 pl-6 leading-relaxed font-normal">
                    Mô phỏng chính xác biểu đồ phụ tải 24/7 của nhà máy, kết hợp giải pháp lưu trữ
                    BESS để cắt giảm tiền điện giờ cao điểm tối đa.
                  </p>
                </div>

                {/* Khối 2: Cam */}
                <div className="p-4 bg-neutral-50/90 border-l-4 border-[#F15A24] space-y-1 shadow-xs">
                  <div className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F15A24] flex-shrink-0" />
                    <span>Thiết bị chính hãng đầy đủ CO/CQ</span>
                  </div>
                  <p className="text-xs text-neutral-600 pl-6 leading-relaxed font-normal">
                    Cam kết sử dụng Inverter chuỗi/Hybrid và Tấm pin quang năng từ các thương hiệu
                    Tier-1 hàng đầu thế giới được bảo hành hiệu suất 25–30 năm.
                  </p>
                </div>

                {/* Khối 3: Đen */}
                <div className="p-4 bg-neutral-50/90 border-l-4 border-neutral-900 space-y-1 shadow-xs">
                  <div className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                    <span>Kỹ sư trực tiếp phụ trách từ A–Z</span>
                  </div>
                  <p className="text-xs text-neutral-600 pl-6 leading-relaxed font-normal">
                    Không qua trung gian thương mại. Đội ngũ kỹ sư Hệ thống điện của TD VIỆT NAM
                    trực tiếp đo đạc, lập bản vẽ IFC, chỉ huy thi công và nghiệm thu đóng điện.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 3. DISCIPLINE TRACKS (BECHTEL SIDEBAR TABS & IMAGE CARDS)      */}
      {/* ============================================================= */}
      <section
        id="disciplines"
        className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="border-b border-neutral-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#F15A24] uppercase tracking-wider">
                CORE DISCIPLINES &amp; WORK TRACKS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-neutral-900 tracking-tight mt-1">
                LĨNH VỰC HOẠT ĐỘNG &amp; NĂNG LỰC TRIỂN KHAI
              </h2>
            </div>
            <div className="text-xs text-neutral-500 font-mono">TIÊU CHUẨN KỸ THUẬT QUỐC TẾ</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* SIDEBAR TABS BÊN TRÁI (PHONG CÁCH BECHTEL PILL TABS) */}
            <div className="lg:col-span-4 space-y-2 sticky top-28">
              {DISCIPLINE_TABS.map((tab, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all rounded-full flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-[#F15A24] text-white shadow-md"
                        : "text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100"
                    }`}
                  >
                    <span>{tab.tabName}</span>
                    {isActive && <ChevronRight className="w-4 h-4 text-white" />}
                  </button>
                );
              })}

              <div className="pt-6 border-t border-neutral-200 mt-6 space-y-3">
                <div className="text-xs text-neutral-500 leading-relaxed">
                  Cần tìm hiểu chi tiết về tài liệu kỹ thuật hoặc báo cáo mô phỏng mẫu?
                </div>
                <a
                  href="/downloads"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#008A4B] hover:text-[#00703C] uppercase tracking-wider"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Xem Trung tâm Tài nguyên</span>
                </a>
              </div>
            </div>

            {/* NỘI DUNG & GRID THẺ ẢNH BÊN PHẢI */}
            <div className="lg:col-span-8 space-y-8 animate-in fade-in duration-300">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase">
                  {currentTab.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {currentTab.description}
                </p>

                <div className="pt-2">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-neutral-900 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#F15A24] group-hover:bg-[#d94816] text-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
                      <ArrowRight className="w-3.5 h-3.5 text-white -rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                    <span>{currentTab.ctaText}</span>
                  </a>
                </div>
              </div>

              {/* LƯỚI THẺ ẢNH (JOBS BY DEPARTMENT / CAPABILITY CARDS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
                {currentTab.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="group bg-white border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md hover:border-neutral-900 transition-all flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Nút mũi tên tròn đỏ/cam ở góc dưới ảnh */}
                      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#F15A24] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-3.5 h-3.5 text-white -rotate-45 group-hover:rotate-0 transition-transform" />
                      </div>
                    </div>

                    <div className="p-4 space-y-1">
                      <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                        {item.category}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-[#008A4B] transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. LIFE AT TD VIỆT NAM (VĂN HÓA KỸ THUẬT & GIÁ TRỊ DOANH NGHIỆP) */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-neutral-50/70 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-neutral-200 pb-6">
            <div className="lg:col-span-5 space-y-1">
              <span className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-wider">
                CULTURE &amp; ENVIRONMENT
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-neutral-900 tracking-tight">
                VĂN HÓA KỸ THUẬT &amp; ĐÃI NGỘ
              </h2>
            </div>

            <div className="lg:col-span-7 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              Chúng tôi xây dựng môi trường làm việc đề cao tư duy phản biện khoa học, sự trung thực
              trong kỹ thuật và tinh thần trách nhiệm tuyệt đối trước mọi công trình năng lượng bàn
              giao cho khách hàng.
            </div>
          </div>

          {/* LƯỚI 4 THẺ ẢNH TỐI CÓ NÚT DẤU CỘNG ĐỎ/CAM TRÒN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIFE_AT_TD.map((card, cIdx) => (
              <div
                key={cIdx}
                className="relative aspect-[3/4] bg-neutral-950 overflow-hidden group border border-neutral-200"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#10B981] uppercase tracking-wider">
                      PILLAR 0{cIdx + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white uppercase leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-neutral-300 line-clamp-3 font-normal leading-relaxed">
                      {card.desc}
                    </p>

                    <div className="pt-2 flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-[#F15A24] text-white flex items-center justify-center shadow-md group-hover:rotate-90 transition-transform">
                        <Plus className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 5. HEAR FROM OUR PEOPLE (GÓC NHÌN KỸ SƯ TRƯỞNG & LÃNH ĐẠO)    */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#F15A24] uppercase tracking-wider">
              VOICES OF ENGINEERS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-neutral-900 tracking-tight">
              GÓC NHÌN KỸ SƯ THỰC CHIẾN
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-neutral-50/60 p-8 sm:p-12 border border-neutral-200">
            {/* CỘT TRÁI: QUOTE & PROFILE */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-5xl font-serif text-[#F15A24] leading-none">“</div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-neutral-900 tracking-tight leading-snug">
                {currentTestimonial.quote}
              </h3>

              <div className="pt-4 border-t border-neutral-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#008A4B]">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-xs font-mono font-semibold text-[#008A4B]">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-[11px] text-neutral-500">{currentTestimonial.company}</div>
                </div>
              </div>

              {/* SLIDER NAVIGATION BARS */}
              <div className="flex items-center gap-3 pt-2">
                {TESTIMONIALS.map((_, tIdx) => (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => setActiveTestimonial(tIdx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeTestimonial === tIdx
                        ? "w-10 bg-[#F15A24]"
                        : "w-4 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CỘT PHẢI: ẢNH HIỆN TRƯỜNG KỸ SƯ ĐANG THỰC HIỆN DỰ ÁN */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] bg-neutral-900 overflow-hidden border border-neutral-200 shadow-xl">
                <img
                  src={currentTestimonial.workImage}
                  alt="Kỹ sư TD VIỆT NAM làm việc tại hiện trường"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 6. CALL TO ACTION & DOWNLOADS (LIÊN HỆ & TẢI TÀI LIỆU)          */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#050e18] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 p-8 sm:p-12 lg:p-16 border border-neutral-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>TIẾP NHẬN YÊU CẦU DỰ ÁN &amp; HỢP TÁC</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                SẴN SÀNG KHẢO SÁT &amp; LẬP BÁO CÁO PVSYST CHO CÔNG TRÌNH CỦA BẠN
              </h2>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                Liên hệ ngay với bộ phận kỹ thuật của TD VIỆT NAM để nhận hồ sơ thiết kế sơ bộ, tính
                toán hoàn vốn và phương án đấu nối lưới điện tối ưu nhất.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-medium text-neutral-300 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#008A4B]" />
                  <span>
                    Hotline: <strong className="text-white">0941 994 262</strong>
                  </span>
                </div>
                <span className="hidden sm:inline text-neutral-600">|</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F15A24]" />
                  <span>Trụ sở: Long Biên, Hà Nội, Việt Nam</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#008A4B] hover:bg-[#00703C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#008A4B]/20 hover:scale-105"
              >
                <span>TRAO ĐỔI VỚI KỸ SƯ</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/downloads"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider border border-neutral-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>TẢI HỒ SƠ NĂNG LỰC (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
