import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  Wrench,
  Check,
  Download,
  RotateCcw,
} from "lucide-react";

const title = "Thiết Bị Năng Lượng & Gói Giải Pháp Lắp Đặt Tiêu Chuẩn | TD VIỆT NAM";
const description =
  "100% thiết bị chính hãng Tier-1 CO/CQ: Biến tần, Tấm quang năng, Pin lưu trữ Lithium ESS, Tủ điện AC/DC và Đèn mặt trời. Cung cấp gói lắp đặt Hybrid & Ongrid trọn gói.";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/products" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

/* =========================================================================
   DỮ LIỆU: BẢNG SO SÁNH GÓI LẮP ĐẶT TRỌN GÓI
========================================================================= */
const PACKAGE_COMPARISON = [
  {
    criterion: "Khả năng dùng khi mất điện",
    ongrid: "Không (Tự ngắt an toàn Anti-Islanding)",
    hybrid: "Có (Chuyển mạch tự động < 10 ms)",
    highlightHybrid: true,
  },
  {
    criterion: "Dùng điện mặt trời ban đêm",
    ongrid: "Không (Sử dụng 100% điện lưới)",
    hybrid: "Có (Sử dụng nguồn từ Pin Lithium)",
    highlightHybrid: true,
  },
  {
    criterion: "Chi phí đầu tư ban đầu (CAPEX)",
    ongrid: "Tối ưu nhất (Rẻ hơn)",
    hybrid: "Trung bình – Cao (Tùy dung lượng pin)",
    highlightHybrid: false,
  },
  {
    criterion: "Thời gian thu hồi vốn",
    ongrid: "3.5 – 4.5 năm",
    hybrid: "5.5 – 6.5 năm",
    highlightHybrid: false,
  },
  {
    criterion: "Tỷ lệ tự chủ điện năng",
    ongrid: "50% – 65%",
    hybrid: "80% – 95%",
    highlightHybrid: true,
  },
];

/* =========================================================================
   DỮ LIỆU: 5 DANH MỤC THIẾT BỊ CHUYÊN DỤNG (KHỐI 2)
========================================================================= */
const EQUIPMENT_CATEGORIES = [
  {
    id: "inverter",
    number: "01",
    title: "Biến Tần (Inverter)",
    subtitle: "String & Hybrid Inverters",
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
    types:
      "Biến tần Hòa lưới (String Inverter) 1 pha / 3 pha (3kW – 110kW) và Biến tần Hybrid đa năng (5kW – 15kW).",
    specs: [
      "Hiệu suất chuyển đổi cực đại ≥ 98.4%, dải điện áp làm việc MPPT rộng.",
      "Tích hợp công nghệ ngắt hồ quang AFCI phát hiện sự cố phóng điện DC chống cháy nổ.",
      "Vỏ nhôm đúc nguyên khối tản nhiệt tự nhiên, đạt cấp bảo vệ ngoài trời IP65/IP66.",
      "Giao tiếp giám sát thông minh qua Wi-Fi / Ethernet / RS485 và App đám mây.",
    ],
    tag: "POWER CONVERSION",
  },
  {
    id: "solar-panels",
    number: "02",
    title: "Tấm Quang Năng (Solar PV Panels)",
    subtitle: "N-Type TOPCon & Heterojunction (HJT)",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80",
    types:
      "Tấm pin mặt trời đơn tinh thể (Monocrystalline) công nghệ N-type TOPCon và HJT mới nhất (Công suất 580W – 620W+).",
    specs: [
      "Hiệu suất quang năng mô-đun > 22.5%, hệ số suy giảm nhiệt độ cực thấp Pmax = -0.30%/°C.",
      "Cấu trúc kính đôi 2 mặt (Bifacial) tăng thêm 10% – 25% sản lượng hấp thụ từ mặt sau.",
      "Khung nhôm Anodized chịu tải trọng gió bão 2400 Pa và tải trọng tuyết/nén 5400 Pa.",
      "Cam kết bảo hành sản phẩm 12–15 năm, bảo hành hiệu suất tuyến tính 25–30 năm.",
    ],
    tag: "PHOTOVOLTAIC MODULES",
  },
  {
    id: "battery-storage",
    number: "03",
    title: "Pin Lưu Trữ (Lithium Storage / ESS)",
    subtitle: "LiFePO4 Home & Industrial ESS",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    types:
      "Pin lưu trữ Lithium LiFePO4 (LFP) dạng treo tường gia đình (5.12 kWh) và dạng tủ Rack công nghiệp (10 kWh – 50 kWh+).",
    specs: [
      "Độ an toàn hóa học cao, chống cháy nổ tuyệt đối với lõi cell pin LFP chất lượng cao.",
      "Mạch quản lý pin BMS thông minh giao tiếp CAN/RS485 đồng bộ trực tiếp với Inverter.",
      "Vòng đời hoạt động bền bỉ ≥ 6.000 chu kỳ sạc/xả sâu ở độ sâu xả 80% (DoD).",
      "Khả năng ghép song song mở rộng dung lượng linh hoạt lên đến 15 module (75 kWh+).",
    ],
    tag: "ENERGY STORAGE SYSTEM",
  },
  {
    id: "cabinets",
    number: "04",
    title: "Tủ Điện (AC / DC Distribution & Protection)",
    subtitle: "Custom Industrial Switchgear",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&auto=format&fit=crop&q=80",
    types:
      "Tủ điện hòa lưới bám tải, tủ ATS chuyển nguồn tự động, tủ điện phân phối nhà xưởng C&I thiết kế theo yêu cầu.",
    specs: [
      "Trang bị thiết bị đóng cắt MCB/MCCB, cầu chì DC 1000V/1500V chính hãng.",
      "Tích hợp thiết bị chống sét lan truyền SPD DC/AC Type II chuyên dụng bảo vệ xung điện.",
      "Vỏ tủ thép sơn tĩnh điện chống ăn mòn hoặc composite kháng nước đạt chuẩn IP65.",
      "Được gia công đấu nối, đo kiểm cách điện và dán nhãn sơ đồ mạch chuẩn công nghiệp.",
    ],
    tag: "SWITCHGEAR & PROTECTION",
  },
  {
    id: "solar-lighting",
    number: "05",
    title: "Đèn Mặt Trời (Solar Lighting Systems)",
    subtitle: "Industrial Street & Flood Lighting",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
    types:
      "Đèn đường năng lượng mặt trời công nghiệp, đèn pha chiếu sáng trang trại, khuôn viên nhà xưởng và đường nội bộ.",
    specs: [
      "Chip LED Bridgelux / Philips hiệu suất quang thông cao (Lumens cao), chống chói mắt.",
      "Tấm thu quang năng Mono kích thước lớn giúp sạc đầy pin chỉ trong 4–6 giờ nắng.",
      "Vỏ nhôm nguyên khối đúc áp lực tản nhiệt nhanh, kính cường lực chịu va đập chuẩn IK08.",
      "Khối pin Lithium LiFePO4 dung lượng thực, duy trì chiếu sáng liên tục 12–16 tiếng.",
    ],
    tag: "SOLAR LIGHTING",
  },
];

export function ProductsPage() {
  return (
    <div className="w-full bg-white text-[#0B0F19] font-sans antialiased selection:bg-[#008A4B] selection:text-white">
      {/* ============================================================= */}
      {/* HERO SECTION: THIẾT BỊ & GÓI GIẢI PHÁP TIÊU CHUẨN            */}
      {/* ============================================================= */}
      <section className="relative w-full bg-white border-b border-neutral-200 pt-10 pb-14 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Tối Giản */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-400">
            <a href="/" className="hover:text-[#0B0F19] transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-[#008A4B]">Sản phẩm</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border-l-2 border-[#008A4B] text-[#008A4B] text-xs font-mono font-bold uppercase tracking-widest">
                <span>TIER-1 HARDWARE &amp; EPC PACKAGES</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#0B0F19] tracking-tight leading-[1.08]">
                Thiết Bị Năng Lượng &amp; Gói Giải Pháp Lắp Đặt Tiêu Chuẩn
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl">
                100% thiết bị chính hãng Tier-1, có đầy đủ chứng nhận CO/CQ. Được kiểm tra kỹ thuật,
                lưu kho và bảo hành trực tiếp bởi đội ngũ kỹ sư TD VIỆT NAM.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="/downloads"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#008A4B] hover:bg-[#00703C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:translate-y-[-1px]"
                >
                  <Download className="w-4 h-4" />
                  <span>TẢI BẢNG GIÁ THIẾT BỊ &amp; GÓI COMBO</span>
                </a>

                <a
                  href="tel:0941994262"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-100 text-[#0B0F19] text-xs font-bold uppercase tracking-wider border border-neutral-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F15A24]" />
                  <span>TƯ VẤN CÙNG KỸ SƯ: 0941 994 262</span>
                </a>
              </div>
            </div>

            {/* Quick Specs Highlight Box */}
            <div className="lg:col-span-4 bg-[#F8FAFC] border border-neutral-200 p-6 space-y-4 font-mono text-xs">
              <div className="font-bold text-[#0B0F19] uppercase tracking-wider border-b border-neutral-200 pb-3 flex items-center justify-between">
                <span>TIÊU CHUẨN PHẦN CỨNG</span>
                <span className="text-[#008A4B]">VERIFIED</span>
              </div>

              <div className="space-y-3 text-neutral-600">
                <div className="flex items-center justify-between">
                  <span>Chứng từ xuất xứ:</span>
                  <span className="font-bold text-[#0B0F19]">100% CO / CQ</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Bảo hành hiệu suất pin:</span>
                  <span className="font-bold text-[#0B0F19]">25 – 30 Năm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Chu kỳ sạc/xả pin ESS:</span>
                  <span className="font-bold text-[#008A4B]">≥ 6.000 Cycles</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tiếp địa an toàn bàn giao:</span>
                  <span className="font-bold text-[#F15A24]">R &lt; 4.0 Ω</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-200 text-[11px] text-neutral-400">
                TD VIỆT NAM • KỸ THUẬT &amp; THIẾT BỊ TIÊU CHUẨN
              </div>
            </div>
          </div>

          {/* Quick Anchor Navigation Strip */}
          <div className="pt-4 flex flex-wrap items-center gap-2 border-t border-neutral-200 text-xs font-mono">
            <span className="text-neutral-400 font-bold uppercase mr-1">CHUYỂN NHANH:</span>
            <a
              href="#turnkey-packages"
              className="px-3 py-1 bg-neutral-100 hover:bg-[#008A4B] hover:text-white transition-colors"
            >
              Gói Lắp Đặt Trọn Gói
            </a>
            <a
              href="#package-comparison"
              className="px-3 py-1 bg-neutral-100 hover:bg-[#008A4B] hover:text-white transition-colors"
            >
              So Sánh Gói
            </a>
            <a
              href="#equipment-inverter"
              className="px-3 py-1 bg-neutral-100 hover:bg-[#008A4B] hover:text-white transition-colors"
            >
              Biến Tần
            </a>
            <a
              href="#equipment-solar-panels"
              className="px-3 py-1 bg-neutral-100 hover:bg-[#008A4B] hover:text-white transition-colors"
            >
              Tấm Quang Năng
            </a>
            <a
              href="#equipment-battery-storage"
              className="px-3 py-1 bg-neutral-100 hover:bg-[#008A4B] hover:text-white transition-colors"
            >
              Pin Lưu Trữ
            </a>
            <a
              href="#equipment-cabinets"
              className="px-3 py-1 bg-neutral-100 hover:bg-[#008A4B] hover:text-white transition-colors"
            >
              Tủ Điện
            </a>
            <a
              href="#equipment-solar-lighting"
              className="px-3 py-1 bg-neutral-100 hover:bg-[#008A4B] hover:text-white transition-colors"
            >
              Đèn Mặt Trời
            </a>
            <a
              href="#hardware-standards"
              className="px-3 py-1 bg-[#F15A24]/10 text-[#F15A24] font-bold hover:bg-[#F15A24] hover:text-white transition-colors"
            >
              Tiêu Chuẩn Hardware
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* KHỐI 1: GÓI LẮP ĐẶT TRỌN GÓI (CHÌA KHÓA TRAO TAY)            */}
      {/* ============================================================= */}
      <section
        id="turnkey-packages"
        className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-widest">
                SECTION 01 / TURNKEY PACKAGES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                GÓI LẮP ĐẶT TRỌN GÓI (CHÌA KHÓA TRAO TAY)
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono uppercase max-w-md">
              Dành cho khách hàng cá nhân &amp; doanh nghiệp được kỹ sư khảo sát, thiết kế, cung cấp
              vật tư và thi công hoàn thiện.
            </p>
          </div>

          {/* 1. HỆ THỐNG HYBRID (HÒA LƯỚI CÓ LƯU TRỮ) */}
          <div
            id="hybrid-package"
            className="bg-white border border-neutral-200 p-6 sm:p-10 space-y-8 shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#008A4B]/10 text-[#008A4B] text-xs font-mono font-bold uppercase">
                  <span>GÓI CAO CẤP • TỰ CHỦ NĂNG LƯỢNG 24/7</span>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  CHUYỂN MẠCH UPS &lt; 10 MS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0B0F19]">
                1. Hệ Thống Hybrid (Hòa Lưới Có Lưu Trữ)
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-4xl">
                <strong>Định vị:</strong> Giải pháp nguồn điện liên tục 24/7 – Tự chủ năng lượng cho
                Biệt thự, Nhà phố cao cấp và Văn phòng điều hành.
                <br />
                <strong>Cơ chế hoạt động:</strong> Ban ngày cấp tải và sạc pin lưu trữ; ban đêm hoặc
                khi mất điện lưới, hệ thống tự động chuyển nguồn xả pin (&lt; 10 ms) để duy trì điều
                hòa, tủ lạnh, camera an ninh và chiếu sáng.
              </p>
            </div>

            {/* 3 Gói công suất Hybrid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#008A4B] uppercase">
                    GÓI DÂN DỤNG CƠ BẢN
                  </div>
                  <h4 className="text-lg font-black text-[#0B0F19]">Hybrid 5 kW / 5–10 kWh</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Phù hợp hộ gia đình có hóa đơn tiền điện từ{" "}
                    <strong>2 – 3 triệu VNĐ/tháng</strong>. Duy trì tải chiếu sáng, quạt, tủ lạnh và
                    1–2 điều hòa ban đêm.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                  Tự chủ điện: ~ 80%
                </div>
              </div>

              <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#008A4B] uppercase">
                    GÓI BIỆT THỰ TIÊU CHUẨN
                  </div>
                  <h4 className="text-lg font-black text-[#0B0F19]">Hybrid 10 kW / 10–15 kWh</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Phù hợp biệt thự, nhà vườn có hóa đơn điện từ{" "}
                    <strong>4 – 7 triệu VNĐ/tháng</strong>. Cung cấp điện liên tục cho hệ thống điều
                    hòa đa vùng và thiết bị gia dụng.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                  Tự chủ điện: ~ 85% - 90%
                </div>
              </div>

              <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#F15A24] uppercase">
                    GÓI 3 PHA CÔNG SUẤT LỚN
                  </div>
                  <h4 className="text-lg font-black text-[#0B0F19]">
                    Hybrid 15–20 kW / 20–30 kWh (3 Pha)
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Dành cho biệt thự lớn, văn phòng, phòng khám dùng thiết bị 3 pha nặng tải. Cắt
                    đỉnh phụ tải giờ cao điểm và chống sập nguồn dây chuyền.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                  Tự chủ điện: ~ 90% - 95%
                </div>
              </div>
            </div>

            {/* Quy chuẩn bàn giao Hybrid */}
            <div className="p-4 sm:p-5 bg-neutral-100 border border-neutral-200 text-xs space-y-1.5">
              <span className="font-bold text-[#0B0F19] uppercase tracking-wider block">
                QUY CHUẨN BÀN GIAO GÓI HYBRID:
              </span>
              <p className="text-neutral-700 leading-relaxed font-normal">
                Tấm pin N-type TOPCon, Inverter Hybrid chính hãng, Khối pin Lithium LiFePO4, Tủ điện
                ATS chuyển nguồn tự động, Hệ thống tiếp địa an toàn đo kiểm đạt{" "}
                <strong>R &lt; 4.0 Ω</strong>.
              </p>
            </div>
          </div>

          {/* 2. HỆ THỐNG ONGRID (HÒA LƯỚI BÁM TẢI - ZERO EXPORT) */}
          <div
            id="ongrid-package"
            className="bg-white border border-neutral-200 p-6 sm:p-10 space-y-8 shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F15A24]/10 text-[#F15A24] text-xs font-mono font-bold uppercase">
                  <span>GÓI TỐI ƯU CHI PHÍ • THU HỒI VỐN NHANH</span>
                </div>
                <span className="text-xs font-mono text-neutral-400">HOÀN VỐN 3.5 – 4.5 NĂM</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0B0F19]">
                2. Hệ Thống Ongrid (Hòa Lưới Bám Tải - Zero Export)
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-4xl">
                <strong>Định vị:</strong> Giải pháp cắt giảm hóa đơn tiền điện ban ngày tối đa với
                chi phí đầu tư (CAPEX) thấp nhất, thu hồi vốn nhanh.
                <br />
                <strong>Cơ chế hoạt động:</strong> Pin mặt trời tạo điện cấp trực tiếp cho tải tiêu
                thụ ban ngày. Tích hợp bộ Smart Meter / CT đo dòng giúp hệ thống tự bám tải, tuyệt
                đối không phát ngược điện ra lưới EVN.
              </p>
            </div>

            {/* 2 Gói công suất Ongrid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#008A4B] uppercase">
                    GÓI ONGRID DÂN DỤNG
                  </div>
                  <h4 className="text-lg font-black text-[#0B0F19]">Công suất: 3 kWp – 10 kWp</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Cắt trực tiếp điện sinh hoạt rơi vào bậc thang cao điểm (bậc 4, 5, 6). Giảm 50%
                    - 65% hóa đơn tiền điện sinh hoạt ban ngày.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                  Thời gian hoàn vốn: <strong>3.5 – 4.0 năm</strong>
                </div>
              </div>

              <div className="p-6 bg-neutral-50 border border-neutral-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#F15A24] uppercase">
                    GÓI THƯƠNG MẠI &amp; NHÀ XƯỞNG
                  </div>
                  <h4 className="text-lg font-black text-[#0B0F19]">
                    Công suất: 20 kWp – 100 kWp+
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Giảm chi phí vận hành máy móc ban ngày cho xưởng sản xuất cơ khí, showroom, kho
                    lạnh, trang trại. Lập trình Zero-Export tuyệt đối không vi phạm phát ngược lưới.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                  Thời gian hoàn vốn: <strong>3.8 – 4.5 năm</strong>
                </div>
              </div>
            </div>

            {/* Quy chuẩn bàn giao Ongrid */}
            <div className="p-4 sm:p-5 bg-neutral-100 border border-neutral-200 text-xs space-y-1.5">
              <span className="font-bold text-[#0B0F19] uppercase tracking-wider block">
                QUY CHUẨN BÀN GIAO GÓI ONGRID:
              </span>
              <p className="text-neutral-700 leading-relaxed font-normal">
                Tấm pin kính đôi hai mặt (Bifacial), Biến tần hòa lưới chuỗi chính hãng, Tủ điện bảo
                vệ AC/DC chống sét Type II, Cài đặt ứng dụng giám sát sản lượng thời gian thực trên
                điện thoại.
              </p>
            </div>
          </div>

          {/* BẢNG SO SÁNH HAI GÓI LẮP ĐẶT TRỌN GÓI */}
          <div id="package-comparison" className="space-y-6 pt-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                COMPREHENSIVE COMPARISON
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0B0F19]">
                Bảng So Sánh Hai Gói Lắp Đặt Trọn Gói
              </h3>
            </div>

            <div className="overflow-x-auto border border-neutral-200 bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0B0F19] text-white font-mono uppercase text-xs">
                    <th className="p-4 sm:p-5 font-bold">Tiêu chí kỹ thuật &amp; Kinh tế</th>
                    <th className="p-4 sm:p-5 font-bold text-[#F15A24]">
                      Gói Hệ Thống Ongrid (Bám tải)
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-[#008A4B]">
                      Gói Hệ Thống Hybrid (Lưu trữ)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {PACKAGE_COMPARISON.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-neutral-50/80 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-[#0B0F19] whitespace-nowrap">
                        {row.criterion}
                      </td>
                      <td className="p-4 sm:p-5 text-neutral-600 font-medium">{row.ongrid}</td>
                      <td
                        className={`p-4 sm:p-5 font-medium ${
                          row.highlightHybrid
                            ? "text-[#008A4B] font-bold bg-[#008A4B]/5"
                            : "text-neutral-800"
                        }`}
                      >
                        {row.hybrid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* KHỐI 2: THIẾT BỊ & VẬT TƯ CHUYÊN DỤNG (5 DANH MỤC)            */}
      {/* ============================================================= */}
      <section
        id="hardware-equipment"
        className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#F15A24] uppercase tracking-widest">
                SECTION 02 / HARDWARE &amp; COMPONENTS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                THIẾT BỊ &amp; VẬT TƯ CHUYÊN DỤNG
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono uppercase max-w-md">
              Dành cho khách hàng, thầu thợ và đơn vị cơ điện cần tìm nguồn thiết bị chính hãng,
              thông số chuẩn xác và bảo hành uy tín.
            </p>
          </div>

          {/* Danh sách 5 danh mục thiết bị chi tiết */}
          <div className="space-y-12">
            {EQUIPMENT_CATEGORIES.map((eq) => (
              <div
                key={eq.id}
                id={`equipment-${eq.id}`}
                className="border border-neutral-200 bg-white overflow-hidden shadow-xs hover:border-[#0B0F19] transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
                  {/* Cột trái: Ảnh & Nhãn danh mục */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-neutral-50/50">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-[#008A4B]">
                          DANH MỤC {eq.number}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-neutral-400 bg-white px-2 py-0.5 border border-neutral-200 uppercase">
                          {eq.tag}
                        </span>
                      </div>

                      <div className="relative aspect-[16/10] bg-neutral-100 border border-neutral-200 overflow-hidden">
                        <img
                          src={eq.image}
                          alt={eq.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="text-[11px] font-mono font-bold text-[#F15A24] uppercase">
                          {eq.subtitle}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0B0F19]">
                          {eq.title}
                        </h3>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#008A4B] hover:text-[#00703C] uppercase tracking-wider"
                      >
                        <span>YÊU CẦU BÁO GIÁ THIẾT BỊ NÀY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Cột phải: Dòng sản phẩm & Thông số kỹ thuật */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                          DÒNG SẢN PHẨM PHÂN PHỐI:
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-neutral-800 leading-relaxed">
                          {eq.types}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2 border-t border-neutral-100">
                        <div className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-wider">
                          ĐẶC TÍNH KỸ THUẬT TIÊU CHUẨN:
                        </div>
                        <div className="space-y-2.5">
                          {eq.specs.map((spec, sIdx) => (
                            <div
                              key={sIdx}
                              className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed"
                            >
                              <Check className="w-3.5 h-3.5 text-[#008A4B] mt-0.5 flex-shrink-0" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span>CHỨNG TỪ: CO / CQ / TEST REPORT</span>
                      <span className="text-[#008A4B] font-bold">100% CHÍNH HÃNG TIER-1</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* KHỐI 3: TIÊU ĐIỂM — HARDWARE TIÊU CHUẨN                       */}
      {/* ============================================================= */}
      <section id="hardware-standards" className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#008A4B]/10 border-l-2 border-[#008A4B] text-[#008A4B] text-xs font-mono font-bold uppercase tracking-widest">
              <span>SECTION 03 / HARDWARE QUALITY ASSURANCE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              TIÊU ĐIỂM — HARDWARE TIÊU CHUẨN
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Do TD VIỆT NAM trực tiếp thử nghiệm, lưu kho và đứng ra bảo hành. Chúng tôi xây dựng
              quy trình kiểm soát chất lượng phần cứng nghiêm ngặt trước khi lắp đặt tại công trình.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4 flex flex-col justify-between hover:border-[#008A4B] transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-[#008A4B]/20 text-[#008A4B] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-[#008A4B] font-bold uppercase">
                  CAM KẾT 01
                </div>
                <h3 className="text-lg font-bold text-white uppercase leading-snug">
                  100% Sản Phẩm Rõ Nguồn Gốc
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  Nhập khẩu chính ngạch từ các thương hiệu Tier-1, cung cấp đầy đủ chứng từ chứng
                  nhận xuất xứ (CO) và chứng nhận chất lượng (CQ) kèm theo từng lô hàng.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-900 text-[10px] font-mono text-neutral-500">
                CHỨNG TỪ MINH BẠCH
              </div>
            </div>

            <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4 flex flex-col justify-between hover:border-[#F15A24] transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-[#F15A24]/20 text-[#F15A24] flex items-center justify-center">
                  <Wrench className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-[#F15A24] font-bold uppercase">
                  CAM KẾT 02
                </div>
                <h3 className="text-lg font-bold text-white uppercase leading-snug">
                  Kiểm Thử Thực Tế Trước Khi Giao
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  Mọi biến tần, module pin lưu trữ và tủ điện đều được kỹ sư TD VIỆT NAM đo kiểm
                  điện áp, nạp xả thử nghiệm và cài đặt sẵn Firmware mới nhất trước khi chuyển đến
                  chân công trình.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-900 text-[10px] font-mono text-neutral-500">
                KIỂM ĐỊNH 100% TẠI XƯỞNG
              </div>
            </div>

            <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4 flex flex-col justify-between hover:border-[#008A4B] transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-[#008A4B]/20 text-[#008A4B] flex items-center justify-center">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-[#008A4B] font-bold uppercase">
                  CAM KẾT 03
                </div>
                <h3 className="text-lg font-bold text-white uppercase leading-snug">
                  Bảo Hành Trực Tiếp Tại Việt Nam
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  Trung tâm bảo hành kỹ thuật hỗ trợ đổi mới thiết bị theo đúng chính sách của hãng,
                  có thiết bị dự phòng thay thế tạm thời trong lúc bảo hành để không gián đoạn nguồn
                  điện của khách hàng.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-900 text-[10px] font-mono text-neutral-500">
                CÓ THIẾT BỊ DỰ PHÒNG THAY THẾ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* FINAL CTA: YÊU CẦU BÁO GIÁ THIẾT BỊ & GÓI LẮP ĐẶT             */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B0F19] text-white p-8 sm:p-12 lg:p-16 border border-neutral-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#008A4B] uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                <span>EQUIPMENT &amp; PACKAGES INQUIRY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                Bạn cần báo giá thiết bị hoặc tư vấn gói combo phù hợp?
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                Liên hệ trực tiếp bộ phận kỹ sư phân phối của TD VIỆT NAM để nhận catalogue thông số
                kỹ thuật, bảng giá đại lý và phương án cấu hình tối ưu nhất.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-neutral-300 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#008A4B]" />
                  <span>
                    Hotline Kỹ Sư: <strong className="text-white font-bold">0941 994 262</strong>
                  </span>
                </div>
                <span className="hidden sm:inline text-neutral-700">|</span>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#F15A24]" />
                  <span>
                    Email: <strong className="text-white font-bold">nangluongtd@gmail.com</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#008A4B] hover:bg-[#00703C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#008A4B]/20 hover:scale-[1.02]"
              >
                <span>TRAO ĐỔI VỚI KỸ SƯ</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/downloads"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider border border-neutral-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>TẢI BẢNG GIÁ &amp; CATALOG (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
