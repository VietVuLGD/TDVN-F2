import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  ScanLine,
  TrendingUp,
  ThermometerSnowflake,
} from "lucide-react";
import { useState } from "react";

const title = "Hồ Sơ Dự Án & Dữ Liệu Vận Hành Thực Tế | TD VIỆT NAM";
const description =
  "Hồ sơ năng lực dự án điện mặt trời công nghiệp, BESS, trạm biến áp và hạ tầng lưới điện do TD VIỆT NAM thực hiện với số liệu đo kiểm thực tế minh bạch.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/projects" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

/* =========================================================================
   DỮ LIỆU: DANH SÁCH DỰ ÁN THỰC TẾ (CASE STUDIES)
========================================================================= */
type ProjectCategory = "all" | "residential" | "ci" | "hybrid" | "benchmark";

interface CaseStudy {
  id: string;
  category: "residential" | "ci" | "hybrid";
  categoryLabel: string;
  classification: string;
  title: string;
  location: string;
  status: string;
  image: string;
  specs: {
    pv: string;
    inverter: string;
    storage?: string;
    structure?: string;
    protection?: string;
  };
  challenge: string;
  solution: string;
  results: string;
  metrics: { label: string; value: string }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "starlake-villa",
    category: "residential",
    categoryLabel: "Gia đình & Biệt thự",
    classification: "RESIDENTIAL HYBRID | 12 kWp + 15 kWh LITHIUM BESS",
    title: "Biệt Thự Khu Đô Thị Starlake – Hà Nội",
    location: "Bắc Từ Liêm, Hà Nội",
    status: "Đã hòa lưới & Vận hành ổn định",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80",
    specs: {
      pv: "20 tấm pin N-type TOPCon 600W (Hiệu suất 22.3%)",
      inverter: "Biến tần Hybrid 3 pha 12 kW (Cấp bảo vệ IP65)",
      storage: "Khối pin Lithium LiFePO4 15 kWh (6.000 chu kỳ @ 80% DoD)",
      structure: "Hệ giàn nhôm Anodized AL6005-T5 chống rỉ sét, kẹp chuyên dụng chống dột",
    },
    challenge:
      "Mái nhà có kiến trúc mái ngói dốc phức tạp, chịu ảnh hưởng đổ bóng bởi hàng cây lân cận vào buổi chiều.",
    solution:
      "Tách hệ thống làm 2 chuỗi MPPT độc lập, bố trí góc nghiêng tối ưu 15° hướng Nam; tích hợp ngắt nhanh khẩn cấp (Rapid Shutdown) đảm bảo an toàn PCCC.",
    results:
      "Tự chủ 85% lượng điện tiêu thụ hàng tháng; duy trì toàn bộ điều hòa, tủ lạnh và hệ thống camera an ninh khi điện lưới gặp sự cố.",
    metrics: [
      { label: "Tự chủ điện năng", value: "85%" },
      { label: "Chuyển mạch UPS", value: "< 10 ms" },
      { label: "Bảo hành hiệu suất", value: "30 Năm" },
    ],
  },
  {
    id: "long-bien-townhouse",
    category: "residential",
    categoryLabel: "Gia đình & Biệt thự",
    classification: "RESIDENTIAL ON-GRID | 8.2 kWp BÁM TẢI (ZERO-EXPORT)",
    title: "Nhà Phố Cao Cấp Long Biên – Hà Nội",
    location: "Long Biên, Hà Nội",
    status: "Đang phát điện",
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1000&auto=format&fit=crop&q=80",
    specs: {
      pv: "14 tấm pin Half-cell công suất cao 585W",
      inverter: "Inverter hòa lưới 1 pha 8 kW tích hợp chống phát ngược",
      protection: "Tủ điện AC/DC chuyên dụng tích hợp chống sét lan truyền Type II (SPD)",
      structure: "Khung giàn thép hộp mạ kẽm nhúng nóng nâng cao đón nắng",
    },
    challenge:
      "Mặt bằng lắp đặt trên sân thượng hạn chế diện tích, cần tối ưu công suất cực đại để cắt giảm hóa đơn tiền điện bậc cao.",
    solution:
      "Tính toán thiết kế giàn khung cao độ thoáng, lắp đặt tấm pin công suất lớn 585W kèm cảm biến đo đếm thông minh Zero-Export.",
    results:
      "Cắt giảm trực tiếp 100% lượng điện tiêu thụ rơi vào bậc thang giá cao (Bậc 5 - Bậc 6), tiết kiệm trung bình 2.5 – 3 triệu VNĐ/tháng.",
    metrics: [
      { label: "Điện bậc cao", value: "-100%" },
      { label: "Tiết kiệm TB", value: "2.5 - 3 Tr/th" },
      { label: "Bám tải phản hồi", value: "< 1s" },
    ],
  },
  {
    id: "que-vo-factory",
    category: "ci",
    categoryLabel: "Doanh nghiệp & Nhà xưởng (C&I)",
    classification: "C&I ZERO-EXPORT | 250 kWp ÁP MÁI NHÀ XƯỞNG",
    title: "Nhà Máy Chế Tạo Cơ Khí Chính Xác – KCN Quế Võ, Bắc Ninh",
    location: "KCN Quế Võ, Bắc Ninh",
    status: "Đóng điện nghiệm thu & Bàn giao O&M",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1000&auto=format&fit=crop&q=80",
    specs: {
      pv: "430 tấm pin kính đôi hai mặt (Bifacial) 580W",
      inverter: "02 bộ Inverter chuỗi công nghiệp 110 kW (Tổng 18 MPPT độc lập)",
      protection: "Smart Power Sensor & Zero-Export Controller phản hồi < 1 giây",
      structure:
        "Máng cáp mạ kẽm nhúng nóng chống cháy, cáp DC chuyên dụng 1500V ruột đồng mạ thiếc",
    },
    challenge:
      "Phụ tải tiêu thụ thay đổi liên tục theo chu kỳ dập/cắt cơ khí; yêu cầu kỹ thuật tuyệt đối không phát ngược điện ra lưới trung thế của KCN.",
    solution:
      "Lập trình thuật toán điều khiển công suất động theo thời gian thực; bố trí dàn pin cách nhiệt giúp hạ nhiệt độ mái xưởng từ 3–4°C.",
    results:
      "Sản lượng trung bình đạt 30.000 kWh/tháng; thời gian hoàn vốn đầu tư tính toán thực tế đạt 3.9 năm.",
    metrics: [
      { label: "Sản lượng trung bình", value: "30.000 kWh/th" },
      { label: "Thời gian hoàn vốn", value: "3.9 Năm" },
      { label: "Hạ nhiệt mái", value: "3 - 4°C" },
    ],
  },
  {
    id: "gia-lam-logistics",
    category: "ci",
    categoryLabel: "Doanh nghiệp & Nhà xưởng (C&I)",
    classification: "COMMERCIAL ROOFTOP | 100 kWp TỰ DÙNG",
    title: "Kho Logistics & Trung Tâm May Mặc – Gia Lâm, Hà Nội",
    location: "Gia Lâm, Hà Nội",
    status: "Đang vận hành ổn định",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80",
    specs: {
      pv: "172 tấm pin Mono Half-cell hiệu suất cao 580W",
      inverter: "01 bộ Inverter công nghiệp 100 kW hòa lưới bám tải",
      protection: "Hệ thống giám sát SCADA Cloud từ xa & tiếp địa an toàn R = 2.1 Ω",
      structure: "Khung kẹp tôn Seamlock chuyên dụng không khoan lỗ mái",
    },
    challenge:
      "Mái nhà kho diện tích lớn cần đảm bảo chống thấm dột tuyệt đối 100% và an toàn phòng chống cháy nổ cho hàng hóa may mặc.",
    solution:
      "Sử dụng phụ kiện chân kẹp Seamlock nhôm đúc nguyên khối không đục lỗ tôn mái; tích hợp tủ đóng cắt tự động và đo kiểm tiếp địa nghiêm ngặt.",
    results:
      "Cung cấp nguồn điện xanh cho toàn bộ hệ thống chiếu sáng, quạt thông gió và văn phòng điều hành ban ngày; điện trở đất đo đạc thực tế 2.1 Ω (vượt chuẩn < 10 Ω).",
    metrics: [
      { label: "Tiếp địa đo đạc", value: "2.1 Ω" },
      { label: "Chống thấm dột", value: "100%" },
      { label: "Giám sát SCADA", value: "24/7" },
    ],
  },
  {
    id: "data-center-bess",
    category: "hybrid",
    categoryLabel: "Hệ thống Hybrid & Lưu trữ thực tế",
    classification: "COMMERCIAL BESS | 30 kW / 60 kWh LƯU TRỮ NĂNG LƯỢNG",
    title: "Trạm Dữ Liệu & Văn Phòng Điều Hành – Hà Nội",
    location: "Long Biên, Hà Nội",
    status: "Vận hành 24/7",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format&fit=crop&q=80",
    specs: {
      pv: "Hệ thống quang điện kết hợp nguồn điện lưới",
      inverter: "Biến tần Hybrid công nghiệp 30 kW",
      storage: "04 tủ pin Rack Lithium LiFePO4 chuẩn công nghiệp (15 kWh/tủ = 60 kWh)",
      protection: "Hệ thống EMS (Energy Management System) lập trình sạc/xả thông minh",
    },
    challenge:
      "Hệ thống máy chủ server yêu cầu nguồn điện không bao giờ gián đoạn, đồng thời tối ưu hóa chi phí mua điện giá cao trong giờ cao điểm.",
    solution:
      "Cài đặt hệ thống EMS tự động nạp điện vào giờ thấp điểm ban đêm và xả điện vào giờ cao điểm sản xuất ban ngày (Peak Shaving); chuyển mạch cấp nguồn < 10ms.",
    results:
      "Tối ưu hóa triệt để bài toán biểu giá điện 3 giá của EVN, đồng thời đóng vai trò nguồn điện UPS công suất lớn bảo vệ an toàn cho hệ thống máy chủ.",
    metrics: [
      { label: "Dung lượng BESS", value: "60 kWh" },
      { label: "Chuyển mạch UPS", value: "< 10 ms" },
      { label: "Cắt đỉnh phụ tải", value: "Tự động" },
    ],
  },
];

/* =========================================================================
   DỮ LIỆU: BẢNG SO SÁNH SẢN LƯỢNG MÔ PHỎNG VÀ THỰC TẾ
========================================================================= */
const BENCHMARK_DATA = [
  {
    project: "Dự án C&I 250 kWp (KCN Bắc Ninh)",
    simulated: "31.200 kWh/tháng",
    actual: "32.050 kWh/tháng",
    pr: "83.4%",
    delta: "+2.7%",
    status: "Vượt kỳ vọng",
    statusColor: "text-[#008A4B] bg-[#008A4B]/10 border-[#008A4B]/20",
  },
  {
    project: "Biệt thự Hybrid 12 kWp (Starlake)",
    simulated: "1.450 kWh/tháng",
    actual: "1.420 kWh/tháng",
    pr: "81.2%",
    delta: "-2.0%",
    status: "Chuẩn sai số",
    statusColor: "text-neutral-700 bg-neutral-100 border-neutral-200",
  },
  {
    project: "Hệ bám tải 100 kWp (Gia Lâm)",
    simulated: "12.400 kWh/tháng",
    actual: "12.280 kWh/tháng",
    pr: "82.8%",
    delta: "-0.9%",
    status: "Chuẩn sai số",
    statusColor: "text-neutral-700 bg-neutral-100 border-neutral-200",
  },
];

export function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const filteredProjects = CASE_STUDIES.filter((item) => {
    if (activeTab === "all" || activeTab === "benchmark") return true;
    return item.category === activeTab;
  });

  return (
    <div className="w-full bg-white text-[#0B0F19] font-sans antialiased selection:bg-[#008A4B] selection:text-white">
      {/* ============================================================= */}
      {/* 1. HERO SECTION & BỘ LỌC DANH MỤC (HEADER SYNC)               */}
      {/* ============================================================= */}
      <section className="relative w-full bg-white border-b border-neutral-200 pt-10 pb-12 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Tối Giản */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-400">
            <a href="/" className="hover:text-[#0B0F19] transition-colors">
              Trang chủ
            </a>
            <span>/</span>
            <span className="text-[#008A4B]">Dự án</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border-l-2 border-[#008A4B] text-[#008A4B] text-xs font-mono font-bold uppercase tracking-widest">
              <span>PROJECT PORTFOLIO &amp; DATA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#0B0F19] tracking-tight leading-[1.08]">
              HỒ SƠ DỰ ÁN &amp; DỮ LIỆU VẬN HÀNH THỰC TẾ
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-relaxed">
              Minh bạch từng thông số kỹ thuật. Mọi công trình do TD VIỆT NAM thiết kế và thi công
              đều được giám sát thời gian thực (Real-time Cloud), đối chiếu độ chính xác với mô
              phỏng P50/P90 trước khi đóng điện.
            </p>
          </div>

          {/* Thanh lọc danh mục (Filter Tabs đồng bộ 100% với Header) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-t border-neutral-200 pt-6">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              Tất cả công trình
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("residential")}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "residential"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              Dự án Gia đình &amp; Biệt thự
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("ci")}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "ci"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              Dự án Doanh nghiệp &amp; Nhà xưởng (C&amp;I)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("hybrid")}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "hybrid"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              Hệ thống Hybrid &amp; Lưu trữ thực tế
            </button>

            <a
              href="#benchmark-section"
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F15A24] border border-[#F15A24] hover:bg-[#F15A24] hover:text-white transition-all ml-auto inline-flex items-center gap-1.5"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>TIÊU ĐIỂM: SẢN LƯỢNG THỰC TẾ</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 2. KHỐI CHỈ SỐ CAM KẾT KỸ THUẬT (KEY METRICS BAR)              */}
      {/* ============================================================= */}
      <section className="w-full bg-[#0B0F19] text-white py-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-1.5 border-l-2 border-[#008A4B] pl-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black font-mono text-white">≤ 3.5%</span>
                <span className="text-[10px] font-mono font-bold text-[#008A4B] bg-[#008A4B]/20 px-1.5 py-0.5">
                  PVsyst vs Cloud
                </span>
              </div>
              <div className="text-xs font-bold text-neutral-300 uppercase">Độ lệch mô phỏng</div>
              <p className="text-[11px] text-neutral-400 font-normal leading-tight">
                Kiểm chứng trực tiếp qua dữ liệu giám sát SCADA thời gian thực.
              </p>
            </div>

            <div className="space-y-1.5 border-l-2 border-[#F15A24] pl-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                  &lt; 10 ms
                </span>
                <span className="text-[10px] font-mono font-bold text-[#F15A24] bg-[#F15A24]/20 px-1.5 py-0.5">
                  ATS Backup
                </span>
              </div>
              <div className="text-xs font-bold text-neutral-300 uppercase">Chuyển mạch Hybrid</div>
              <p className="text-[11px] text-neutral-400 font-normal leading-tight">
                Cung cấp điện liên tục, không làm tắt máy tính hay thiết bị nhạy cảm.
              </p>
            </div>

            <div className="space-y-1.5 border-l-2 border-neutral-500 pl-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black font-mono text-white">100%</span>
                <span className="text-[10px] font-mono font-bold text-neutral-300 bg-neutral-800 px-1.5 py-0.5">
                  I-V &amp; Thermal
                </span>
              </div>
              <div className="text-xs font-bold text-neutral-300 uppercase">
                Tiêu chuẩn nghiệm thu
              </div>
              <p className="text-[11px] text-neutral-400 font-normal leading-tight">
                100% đo quét nhiệt hồng ngoại &amp; kiểm tra I-V trước khi đóng điện.
              </p>
            </div>

            <div className="space-y-1.5 border-l-2 border-[#008A4B] pl-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                  &lt; 24h
                </span>
                <span className="text-[10px] font-mono font-bold text-[#008A4B] bg-[#008A4B]/20 px-1.5 py-0.5">
                  Hiện Trường
                </span>
              </div>
              <div className="text-xs font-bold text-neutral-300 uppercase">Phản ứng kỹ thuật</div>
              <p className="text-[11px] text-neutral-400 font-normal leading-tight">
                Kỹ sư có mặt tại hiện trường xử lý sự cố trong vòng 24 giờ làm việc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 3. DANH MỤC DỰ ÁN THỰC TẾ (CASE STUDIES CHI TIẾT)             */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-neutral-50/70 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-widest">
                VERIFIED CASE STUDIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                CÔNG TRÌNH TIÊU BIỂU THEO PHÂN MỤC
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono uppercase">
              HIỂN THỊ {filteredProjects.length} DỰ ÁN KỸ THUẬT
            </p>
          </div>

          <div className="space-y-14">
            {filteredProjects.map((cs, idx) => (
              <div
                key={cs.id}
                className="bg-white border border-neutral-200 overflow-hidden shadow-xs hover:border-[#0B0F19] transition-all"
              >
                {/* Header Dải Kỹ Thuật */}
                <div className="bg-[#0B0F19] text-white p-4 sm:px-8 sm:py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#008A4B]">
                      CASE 0{idx + 1}
                    </span>
                    <span className="text-neutral-600">|</span>
                    <span className="text-xs font-mono font-bold text-[#F15A24] tracking-wider uppercase">
                      {cs.classification}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-neutral-300 font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#008A4B]" />
                      <span>{cs.location}</span>
                    </span>
                    <span className="hidden sm:inline text-neutral-600">|</span>
                    <span className="text-[#008A4B] font-semibold">{cs.status}</span>
                  </div>
                </div>

                {/* Bố cục 2 Cột: Hình ảnh & Phân tích kỹ thuật */}
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
                  {/* Cột trái: Ảnh hiện trường + Thống kê nhanh */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="relative aspect-[16/10] bg-neutral-100 border border-neutral-200 overflow-hidden">
                        <img
                          src={cs.image}
                          alt={cs.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#0B0F19]/85 backdrop-blur-xs text-white px-2.5 py-1 text-[10px] font-mono font-bold">
                          {cs.categoryLabel}
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0B0F19] leading-snug">
                        {cs.title}
                      </h3>
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-100 bg-neutral-50 p-3">
                      {cs.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center space-y-0.5">
                          <div className="text-sm sm:text-base font-black font-mono text-[#008A4B]">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-semibold text-neutral-500 uppercase leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cột phải: Thông số chi tiết & Bài toán giải pháp */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                    <div className="space-y-5">
                      {/* Bảng thông số kỹ thuật chính */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                          THÔNG SỐ PHẦN CỨNG TIÊU CHUẨN:
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-neutral-50 border border-neutral-200/80 space-y-1">
                            <span className="font-bold text-neutral-800 block">
                              Tấm quang điện:
                            </span>
                            <span className="text-neutral-600">{cs.specs.pv}</span>
                          </div>

                          <div className="p-3 bg-neutral-50 border border-neutral-200/80 space-y-1">
                            <span className="font-bold text-neutral-800 block">
                              Biến tần (Inverter):
                            </span>
                            <span className="text-neutral-600">{cs.specs.inverter}</span>
                          </div>

                          {cs.specs.storage && (
                            <div className="p-3 bg-neutral-50 border border-neutral-200/80 space-y-1">
                              <span className="font-bold text-neutral-800 block">
                                Lưu trữ (BESS):
                              </span>
                              <span className="text-neutral-600">{cs.specs.storage}</span>
                            </div>
                          )}

                          {cs.specs.structure && (
                            <div className="p-3 bg-neutral-50 border border-neutral-200/80 space-y-1">
                              <span className="font-bold text-neutral-800 block">
                                Kết cấu khung giàn:
                              </span>
                              <span className="text-neutral-600">{cs.specs.structure}</span>
                            </div>
                          )}

                          {cs.specs.protection && (
                            <div className="p-3 bg-neutral-50 border border-neutral-200/80 space-y-1 sm:col-span-2">
                              <span className="font-bold text-neutral-800 block">
                                Hệ thống bảo vệ &amp; Điều khiển:
                              </span>
                              <span className="text-neutral-600">{cs.specs.protection}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Thách thức & Giải pháp */}
                      <div className="space-y-3 pt-2 border-t border-neutral-100">
                        <div className="space-y-1 text-xs">
                          <span className="font-bold text-neutral-900 uppercase">
                            Thách thức kỹ thuật:{" "}
                          </span>
                          <span className="text-neutral-600 leading-relaxed font-normal">
                            {cs.challenge}
                          </span>
                        </div>

                        <div className="space-y-1 text-xs">
                          <span className="font-bold text-[#008A4B] uppercase">
                            Giải pháp TD VIỆT NAM:{" "}
                          </span>
                          <span className="text-neutral-600 leading-relaxed font-normal">
                            {cs.solution}
                          </span>
                        </div>

                        <div className="p-3 bg-neutral-100/70 border-l-2 border-[#008A4B] text-xs text-neutral-800 font-medium">
                          <strong>Kết quả vận hành: </strong> {cs.results}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-neutral-400">
                        GIÁM SÁT SCADA CLOUD
                      </span>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008A4B] hover:text-[#00703C] uppercase tracking-wider"
                      >
                        <span>TƯ VẤN CẤU HÌNH TƯƠNG TỰ</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. KHỐI TIÊU ĐIỂM: MINH BẠCH SẢN LƯỢNG THỰC TẾ (BENCHMARK)     */}
      {/* ============================================================= */}
      <section id="benchmark-section" className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F15A24]/10 border-l-2 border-[#F15A24] text-[#F15A24] text-xs font-mono font-bold uppercase tracking-widest">
              <span>FEATURED BENCHMARK &amp; DATA ACCURACY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              ĐỐI CHIẾU SẢN LƯỢNG MÔ PHỎNG PVSYST VÀ DỮ LIỆU ĐO KIỂM CLOUD
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Một hệ thống điện mặt trời chất lượng không chỉ nằm ở vật tư tốt mà phải được chứng
              minh qua sản lượng điện phát ra thực tế (kWh). Chúng tôi đối chiếu minh bạch dữ liệu
              từ phần mềm mô phỏng chuyên dụng và ứng dụng giám sát thời gian thực:
            </p>
          </div>

          {/* Bảng so sánh sản lượng thực tế (Swiss-Style Clean Table) */}
          <div className="overflow-x-auto border border-neutral-800 bg-neutral-950">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white text-xs font-mono uppercase tracking-wider border-b border-neutral-800">
                  <th className="p-4 sm:p-5 font-bold">Quy mô dự án</th>
                  <th className="p-4 sm:p-5 font-bold">Mô phỏng thiết kế (PVsyst P50)</th>
                  <th className="p-4 sm:p-5 font-bold">Sản lượng phát thực tế (Cloud)</th>
                  <th className="p-4 sm:p-5 font-bold">Tỷ lệ đạt chuẩn (PR)</th>
                  <th className="p-4 sm:p-5 font-bold">Sai lệch (Δ)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-xs sm:text-sm">
                {BENCHMARK_DATA.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-neutral-900/50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap">
                      {row.project}
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-neutral-300 whitespace-nowrap">
                      {row.simulated}
                    </td>
                    <td className="p-4 sm:p-5 font-mono font-bold text-[#008A4B] whitespace-nowrap">
                      {row.actual}
                    </td>
                    <td className="p-4 sm:p-5 font-mono font-bold text-white whitespace-nowrap">
                      {row.pr}
                    </td>
                    <td className="p-4 sm:p-5 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 font-mono text-xs font-bold border ${row.statusColor}`}
                      >
                        <span>{row.delta}</span>
                        <span className="text-[10px] font-sans font-normal">({row.status})</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3 Tiêu Chuẩn Nghiệm Thu Được Áp Dụng */}
          <div className="space-y-6 pt-4">
            <div className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-wider">
              3 TIÊU CHUẨN NGHIỆM THU ĐƯỢC ÁP DỤNG TRÊN MỌI DỰ ÁN:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 bg-[#008A4B]/20 text-[#008A4B] flex items-center justify-center">
                  <ScanLine className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase">
                  Kiểm tra đường cong I-V (I-V Curve Tracing)
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  Đảm bảo từng chuỗi pin (String) không bị suy hao công suất ẩn, lệch điện áp hoặc
                  lỗi diode bypass trước khi đóng điện hòa lưới.
                </p>
              </div>

              <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 bg-[#F15A24]/20 text-[#F15A24] flex items-center justify-center">
                  <ThermometerSnowflake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase">
                  Quét nhiệt hồng ngoại (Thermal Scanning)
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  Kiểm tra toàn bộ bề mặt tấm pin và các đầu cosse tủ điện AC/DC bằng camera
                  nhiệt/drone để loại bỏ 100% rủi ro điểm nóng (Hot-spot).
                </p>
              </div>

              <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
                <div className="w-10 h-10 bg-[#008A4B]/20 text-[#008A4B] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase">
                  Đo kiểm điện trở cách điện &amp; Tiếp địa
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  Bảo vệ an toàn chống sét và chống rò rỉ điện theo đúng quy chuẩn kỹ thuật IEC
                  62446, đảm bảo điện trở đất R &lt; 10 Ω.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 5. FINAL CTA: TRAO ĐỔI DỰ ÁN CÙNG KỸ SƯ                       */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B0F19] text-white p-8 sm:p-12 lg:p-16 border border-neutral-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#008A4B] uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                <span>PROJECT CONSULTATION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                Bạn muốn đối chiếu bài toán sản lượng cho công trình của mình?
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                Đội ngũ kỹ sư TD VIỆT NAM sẵn sàng chạy mô phỏng 3D trên PVsyst và cung cấp bảng dự
                báo sản lượng chi tiết trước khi triển khai.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-neutral-300 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#008A4B]" />
                  <span>
                    Hotline: <strong className="text-white font-bold">0941 994 262</strong>
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
                <span>HỒ SƠ NĂNG LỰC (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
