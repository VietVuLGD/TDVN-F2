import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, Check, ChevronRight, Zap, FileText } from "lucide-react";

const title = "Giải Pháp Năng Lượng Phù Hợp Thực Tế | TD VIỆT NAM";
const description =
  "TD VIỆT NAM cung cấp các giải pháp điện mặt trời áp mái, C&I, BESS, Hybrid, bám tải Zero-Export và hệ thống phân phối điện tối ưu theo từng đặc thù công trình.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/solutions" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

/* =========================================================================
   1. DỮ LIỆU: PHÂN KHÚC KHÁCH HÀNG (CUSTOMER SEGMENTS)
========================================================================= */
const CUSTOMER_SEGMENTS = [
  {
    number: "01",
    title: "Gia đình & Biệt thự",
    subtitle: "Residential & Villa Energy Systems",
    desc: "Thiết kế tinh gọn, ưu tiên tính thẩm mỹ kiến trúc mái và an toàn điện dân dụng. Tích hợp pin lưu trữ đảm bảo nguồn điện cho các thiết bị sinh hoạt thiết yếu.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
    tags: ["Áp Mái Dân Dụng", "Hybrid Backup", "Thẩm Mỹ Cao"],
  },
  {
    number: "02",
    title: "Nhà xưởng & Doanh nghiệp (C&I)",
    subtitle: "Commercial & Industrial Solar Solutions",
    desc: "Giải pháp giảm chi phí tiền điện giờ cao điểm cho các nhà máy sản xuất, trung tâm logistics và tòa nhà thương mại. Tối ưu hóa chỉ số LCOE và chứng chỉ xanh.",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80",
    tags: ["C&I Rooftop", "Zero-Export", "Hạ Tầng Điện Lưới"],
  },
  {
    number: "03",
    title: "Trang trại & Nông nghiệp",
    subtitle: "Agri-Solar & High-Tech Farming",
    desc: "Cung cấp nguồn điện ổn định cho hệ thống tưới tiêu, bơm nước, sấy nông sản và hệ thống bảo quản lạnh tại các khu vực canh tác nông nghiệp công nghệ cao.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80",
    tags: ["Nông Nghiệp Công Nghệ", "Bơm Nước Năng Lượng", "Off-grid / Hybrid"],
  },
];

/* =========================================================================
   2. DỮ LIỆU: 5 GIẢI PHÁP KỸ THUẬT CHUYÊN SÂU (TECHNICAL SOLUTIONS)
========================================================================= */
const TECHNICAL_SOLUTIONS = [
  {
    id: "self-consumption",
    number: "01",
    name: "Điện mặt trời Tự dùng",
    headline: "Tận dụng điện mặt trời ngay tại nơi tiêu thụ",
    shortDesc:
      "Được thiết kế cho các công trình có nhu cầu sử dụng điện trong thời gian hệ thống mặt trời phát điện. Giải pháp ưu tiên khả năng tự sử dụng nguồn điện tại chỗ và sự phù hợp giữa công suất hệ thống với đặc điểm phụ tải.",
    features: [
      "Khớp nối trực tiếp biểu đồ phát điện mặt trời với biểu đồ tiêu thụ phụ tải ban ngày.",
      "Giảm áp lực tiền điện bậc thang và chi phí mua điện giá cao trong giờ hành chính.",
      "Hệ thống đo đếm thông minh giám sát tỷ lệ điện tự dùng đạt tối đa.",
    ],
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1000&auto=format&fit=crop&q=80",
    schematic: "PV Array → Inverter → AC Sub-panel → Factory Local Loads",
  },
  {
    id: "zero-export",
    number: "02",
    name: "Điện mặt trời Bám tải (Zero Export)",
    headline: "Kiểm soát công suất phát lên lưới",
    shortDesc:
      "Hệ thống đo lường và điều khiển giúp kiểm soát công suất phát của inverter theo nhu cầu tiêu thụ thực tế của công trình, đảm bảo không phát ngược sản lượng dư thừa lên lưới điện EVN.",
    features: [
      "Cảm biến dòng điện thông minh (Smart Meter / CT Sensor) đo công suất phụ tải tức thời.",
      "Bộ điều khiển Inverter tự động điều chế giảm công suất phát khi phụ tải giảm xuống.",
      "Hoàn toàn tuân thủ quy định thỏa thuận kỹ thuật đấu nối nguồn tự sản tự tiêu.",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&auto=format&fit=crop&q=80",
    schematic: "PV Array → Zero-Export Inverter ⟷ Smart Meter (CT) ⟷ Main Grid Breaker",
  },
  {
    id: "hybrid-ess",
    number: "03",
    name: "Hybrid & Lưu trữ năng lượng (ESS)",
    headline: "Chủ động hơn với nguồn điện",
    shortDesc:
      "Kết hợp điện mặt trời, pin lưu trữ và nguồn điện lưới để tăng khả năng chủ động năng lượng và đáp ứng nhu cầu dự phòng cho các phụ tải quan trọng khi mất lưới.",
    features: [
      "Pin lưu trữ Lithium LiFePO4 tuổi thọ trên 6.000 chu kỳ, sạc/xả thông minh.",
      "Cắt đỉnh phụ tải (Peak Shaving) nạp giờ thấp điểm và xả phục vụ giờ cao điểm.",
      "Chuyển mạch tự động ATS với tốc độ < 20ms bảo vệ máy chủ, dây chuyền sản xuất.",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format&fit=crop&q=80",
    schematic: "PV + Lithium ESS ⟷ Hybrid Inverter ⟷ Critical Loads & Grid Backup",
  },
  {
    id: "off-grid",
    number: "04",
    name: "Điện mặt trời Độc lập (Off-grid)",
    headline: "Cung cấp điện cho các khu vực độc lập",
    shortDesc:
      "Giải pháp dành cho các công trình không có điện lưới hoặc cần một hệ thống điện hoạt động hoàn toàn độc lập với nguồn năng lượng tái tạo và khối pin lưu trữ chuyên dụng.",
    features: [
      "Thiết kế nguồn điện độc lập 100%, không phụ thuộc vào hạ tầng dây dẫn EVN.",
      "Hệ thống điều khiển nạp xả MPPT hiệu suất cao kết hợp máy phát điện phụ trợ.",
      "Thích hợp cho trạm viễn thông, trang trại vùng xa, khu bảo tồn và công trình biển đảo.",
    ],
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1000&auto=format&fit=crop&q=80",
    schematic: "PV Array → MPPT Controller ⟷ Deep-Cycle Battery ⟷ Off-Grid Inverter → Island Loads",
  },
  {
    id: "electrical-distribution",
    number: "05",
    name: "Hệ thống điện & Phân phối",
    headline: "Thiết kế đồng bộ toàn bộ hệ thống điện",
    shortDesc:
      "Bao gồm tủ điện, thiết bị bảo vệ, cáp điện, tiếp địa, chống sét, đo lường và các thành phần liên quan nhằm tạo thành một hệ thống điện đồng bộ, chuẩn kỹ thuật và tuyệt đối an toàn.",
    features: [
      "Tủ điện đóng cắt bảo vệ phân phối AC/DC tích hợp chống sét lan truyền Type II.",
      "Hệ thống tiếp địa an toàn và cọc tiếp địa đo kiểm đạt điện trở đất R < 10 Ω.",
      "Tính toán chọn tiết diện cáp DC 1500V cách điện kép XLPO giảm thiểu sụt áp < 1.5%.",
    ],
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=1000&auto=format&fit=crop&q=80",
    schematic: "DC Combiner ⟷ Protective Switchgear ⟷ Substation & Earthing Grid (R < 10Ω)",
  },
];

/* =========================================================================
   3. DỮ LIỆU: TRIẾT LÝ THIẾT KẾ (DESIGN PHILOSOPHY)
========================================================================= */
const DESIGN_PRINCIPLES = [
  {
    number: "01",
    title: "Phụ tải thực tế",
    desc: "Khảo sát và ghi nhận chính xác biểu đồ tiêu thụ điện theo từng khung giờ trong ngày, tránh việc thiết kế công suất vượt quá khả năng hấp thụ của công trình.",
  },
  {
    number: "02",
    title: "Khả năng tự sử dụng",
    desc: "Ưu tiên tối đa lượng điện tự tiêu thụ tại chỗ để rút ngắn thời gian hoàn vốn LCOE thay vì đầu tư dàn trải không mang lại hiệu quả dòng tiền.",
  },
  {
    number: "03",
    title: "An toàn hệ thống điện",
    desc: "Tuân thủ nghiêm ngặt tiêu chuẩn bảo vệ rơ-le, chống sét lan truyền, tiếp địa an toàn và tiêu chuẩn phòng cháy chữa cháy (PCCC) cho mái nhà xưởng.",
  },
  {
    number: "04",
    title: "Hiệu quả dài hạn",
    desc: "Lựa chọn thiết bị Tier-1 có độ tương thích cao, bền bỉ trước điều kiện thời tiết nóng ẩm nhiệt đới và đảm bảo vòng đời vận hành ổn định trên 25 năm.",
  },
];

/* =========================================================================
   4. DỮ LIỆU: QUY TRÌNH THỰC HIỆN 6 BƯỚC (PROCESS)
========================================================================= */
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Tiếp nhận nhu cầu",
    desc: "Thu thập thông tin hóa đơn tiền điện, vị trí lắp đặt và mục tiêu vận hành của chủ đầu tư.",
  },
  {
    number: "02",
    title: "Khảo sát & phân tích",
    desc: "Đo đạc kết cấu mái, góc nghiêng, hướng nắng và phân tích biểu đồ phụ tải thực tế.",
  },
  {
    number: "03",
    title: "Thiết kế giải pháp",
    desc: "Mô phỏng 3D bóng che trên PVsyst, xuất sơ đồ đơn tuyến SLD và cấu hình chuỗi MPPT.",
  },
  {
    number: "04",
    title: "Dự toán & tư vấn",
    desc: "Lập bảng khối lượng BOQ minh bạch từng mã thiết bị và phương án tài chính hoàn vốn.",
  },
  {
    number: "05",
    title: "Thi công & nghiệm thu",
    desc: "Triển khai cơ điện chuẩn HSE, đo kiểm cách điện Megger và đường cong đặc tính I-V.",
  },
  {
    number: "06",
    title: "Bàn giao & hỗ trợ",
    desc: "Kích hoạt giám sát SCADA Cloud 24/7 và đồng hành bảo trì O&M trọn vòng đời.",
  },
];

/* =========================================================================
   5. DỮ LIỆU: THIẾT BỊ & CÔNG NGHỆ (HARDWARE ECOSYSTEM)
========================================================================= */
const HARDWARE_CATEGORIES = [
  {
    title: "Module quang điện",
    subtitle: "N-Type TOPCon & Bifacial",
    desc: "Tấm pin quang điện công nghệ tế bào N-Type hiệu suất cao, hệ số suy giảm công suất thấp và bảo hành hiệu suất 30 năm.",
  },
  {
    title: "Inverter Chuỗi (String)",
    subtitle: "On-grid Inverters (3kW – 125kW+)",
    desc: "Biến tần chuỗi đa MPPT, dải điện áp khởi động thấp, tích hợp chức năng giám sát thông minh từng chuỗi tấm pin.",
  },
  {
    title: "Inverter Hybrid",
    subtitle: "Storage Inverters (5kW – 50kW)",
    desc: "Biến tần lai tích hợp cổng sạc/xả pin lưu trữ, chuyển mạch tự động ATS khi mất lưới điện trong thời gian dưới 20ms.",
  },
  {
    title: "Pin lưu trữ (Battery Storage)",
    subtitle: "Lithium LiFePO4 Modules",
    desc: "Khối pin lưu trữ Lithium Iron Phosphate an toàn chống cháy nổ, tuổi thọ trên 6.000 chu kỳ sạc/xả sâu 90% DoD.",
  },
  {
    title: "Tủ điện AC/DC",
    subtitle: "Custom Industrial Enclosures",
    desc: "Tủ điện phân phối thiết kế theo yêu cầu công trình, cấp bảo vệ IP65/IP66 chịu thời tiết ngoài trời và môi trường công nghiệp.",
  },
  {
    title: "Thiết bị bảo vệ & Rơ-le",
    subtitle: "SPD, Breakers & Zero-Export",
    desc: "Aptomat chuyên dụng DC/AC, chống sét lan truyền Type II, cầu chì 1500V và thiết bị điều khiển bám tải Smart Meter.",
  },
  {
    title: "Giám sát hệ thống",
    subtitle: "SCADA & Cloud Telemetry",
    desc: "Hệ thống thu thập dữ liệu thời gian thực qua Modbus/RS485, giám sát qua App điện thoại và cảnh báo lỗi tức thời.",
  },
];

export function SolutionsPage() {
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);
  const activeSolution = TECHNICAL_SOLUTIONS[selectedSolutionIndex];

  return (
    <div className="w-full bg-white text-[#0B0F19] font-sans antialiased selection:bg-[#008A4B] selection:text-white">
      {/* ============================================================= */}
      {/* 1. HERO SECTION: EDITORIAL ENGINEERING ARCHITECTURE           */}
      {/* ============================================================= */}
      <section className="relative w-full bg-white border-b border-neutral-200 pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Tối Giản */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-400">
            <a href="/" className="hover:text-[#0B0F19] transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-[#008A4B]">Giải pháp</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Cột trái: Typography & Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border-l-2 border-[#008A4B] text-[#008A4B] text-xs font-mono font-bold uppercase tracking-widest">
                <span>ENERGY SOLUTIONS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#0B0F19] tracking-tight leading-[1.08]">
                Giải pháp năng lượng phù hợp với nhu cầu thực tế
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl">
                TD VIỆT NAM cung cấp các giải pháp điện mặt trời và hệ thống điện được thiết kế dựa
                trên nhu cầu sử dụng điện, đặc điểm công trình và mục tiêu vận hành của từng khách
                hàng.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#008A4B] hover:bg-[#00703C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:translate-y-[-1px]"
                >
                  <span>TRAO ĐỔI VỚI KỸ SƯ</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#technical-solutions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-100 text-[#0B0F19] text-xs font-bold uppercase tracking-wider border border-neutral-300 transition-colors"
                >
                  <span>KHÁM PHÁ GIẢI PHÁP</span>
                </a>
              </div>
            </div>

            {/* Cột phải: Hero Visual Kỹ thuật Chất lượng cao */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/3] bg-neutral-100 border border-neutral-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80"
                  alt="Hệ thống điện mặt trời áp mái công nghiệp TD VIỆT NAM"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0B0F19]/80 backdrop-blur-xs p-4 text-white border-t border-neutral-800">
                  <div className="text-[10px] font-mono font-bold text-[#F15A24] uppercase tracking-wider">
                    ENGINEERING ASSESSMENT
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Mô phỏng bức xạ &amp; Đấu nối chuẩn kỹ thuật EVN
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 px-1">
                <span>SOLAR ROOFTOP &amp; BESS</span>
                <span className="text-[#008A4B] font-bold">TD VIỆT NAM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 2. SECTION: PHÂN KHÚC KHÁCH HÀNG (CUSTOMER SEGMENTS)           */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-widest">
                SEGMENT PROFILES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                Giải pháp theo từng nhu cầu sử dụng điện
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono uppercase">
              TỐI ƯU HÓA CHO TỪNG ĐẶC THÙ PHỤ TẢI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CUSTOMER_SEGMENTS.map((seg, sIdx) => (
              <div
                key={sIdx}
                className="bg-white border border-neutral-200 hover:border-[#0B0F19] transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-neutral-100">
                    <img
                      src={seg.image}
                      alt={seg.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B0F19] text-white px-2.5 py-1 text-xs font-mono font-bold">
                      {seg.number}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                        {seg.subtitle}
                      </div>
                      <h3 className="text-lg sm:text-xl font-black uppercase text-[#0B0F19] leading-snug">
                        {seg.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {seg.desc}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {seg.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-neutral-100 text-[10px] font-mono font-semibold text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                    KHẢO SÁT CHUYÊN BIỆT
                  </span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008A4B] hover:text-[#00703C] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    <span>Chi tiết</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 3. SECTION: GIẢI PHÁP KỸ THUẬT CHUYÊN SÂU (LARGE ROWS)         */}
      {/* ============================================================= */}
      <section
        id="technical-solutions"
        className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#F15A24] uppercase tracking-widest">
                CORE TECHNICAL ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                Giải pháp kỹ thuật chuyên sâu
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono uppercase max-w-md">
              Từ điện mặt trời tự dùng đến hệ thống lưu trữ và nguồn điện độc lập, mỗi cấu hình được
              lựa chọn dựa trên nhu cầu vận hành thực tế của công trình.
            </p>
          </div>

          {/* Large Interactive Rows Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Vertical Rows List (Left - 7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {TECHNICAL_SOLUTIONS.map((sol, index) => {
                const isSelected = selectedSolutionIndex === index;
                return (
                  <div
                    key={sol.id}
                    onClick={() => setSelectedSolutionIndex(index)}
                    className={`p-5 sm:p-6 border transition-all cursor-pointer select-none ${
                      isSelected
                        ? "border-[#0B0F19] bg-neutral-50 shadow-xs"
                        : "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-xs font-bold ${
                              isSelected ? "text-[#008A4B]" : "text-neutral-400"
                            }`}
                          >
                            {sol.number}
                          </span>
                          <h3 className="text-base sm:text-lg font-black uppercase text-[#0B0F19] leading-snug">
                            {sol.name}
                          </h3>
                        </div>

                        <div className="text-xs font-bold text-neutral-700">{sol.headline}</div>

                        <p className="text-xs text-neutral-600 leading-relaxed font-normal pt-1">
                          {sol.shortDesc}
                        </p>
                      </div>

                      <div className="pt-1 flex-shrink-0">
                        <div
                          className={`w-8 h-8 flex items-center justify-center border transition-all ${
                            isSelected
                              ? "bg-[#008A4B] text-white border-[#008A4B]"
                              : "border-neutral-200 text-neutral-400"
                          }`}
                        >
                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-transform ${
                              isSelected ? "translate-x-0.5" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Hiển thị tính năng khi mở trên mobile */}
                    {isSelected && (
                      <div className="mt-4 pt-4 border-t border-neutral-200/80 space-y-2 lg:hidden">
                        {sol.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-neutral-700"
                          >
                            <Check className="w-3.5 h-3.5 text-[#008A4B] mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Preview Detail Card (Right - 5 cols, Sticky on Desktop) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-28 space-y-4">
              <div className="bg-white border border-[#0B0F19] p-6 sm:p-7 space-y-6 shadow-xs">
                <div className="relative aspect-[16/10] bg-neutral-100 border border-neutral-200 overflow-hidden">
                  <img
                    src={activeSolution.image}
                    alt={activeSolution.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B0F19] text-white px-2 py-0.5 text-xs font-mono font-bold">
                    CẤU HÌNH {activeSolution.number}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-[10px] font-mono font-bold text-[#F15A24] uppercase">
                    TECHNICAL HIGHLIGHTS
                  </div>
                  <h4 className="text-lg font-black uppercase text-[#0B0F19] leading-snug">
                    {activeSolution.headline}
                  </h4>

                  <div className="space-y-2 pt-2 border-t border-neutral-100">
                    {activeSolution.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-[#008A4B] mt-0.5 flex-shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-neutral-100 border border-neutral-200 text-[11px] font-mono text-neutral-700 space-y-1">
                  <div className="font-bold text-neutral-900 uppercase">
                    Sơ đồ nguyên lý tiêu chuẩn:
                  </div>
                  <div className="text-neutral-600">{activeSolution.schematic}</div>
                </div>

                <div className="pt-2">
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#0B0F19] hover:bg-[#008A4B] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>YÊU CẦU TƯ VẤN CẤU HÌNH NÀY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. FEATURED SOLUTION: HYBRID & LƯU TRỮ NĂNG LƯỢNG (ESS)        */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 50% Text Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F15A24]/10 border-l-2 border-[#F15A24] text-[#F15A24] text-xs font-mono font-bold uppercase tracking-widest">
                <span>FEATURED SOLUTION / ESS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                Chủ động hơn với nguồn điện
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                Kết hợp điện mặt trời, pin lưu trữ và nguồn điện lưới để tối ưu việc sử dụng năng
                lượng theo nhu cầu thực tế của công trình.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-neutral-900 border border-neutral-800 space-y-1">
                  <div className="text-sm font-bold text-white uppercase">
                    Cắt đỉnh phụ tải (Peak Shaving)
                  </div>
                  <p className="text-xs text-neutral-400 font-normal">
                    Tự động xả pin trong khung giờ cao điểm để giảm tiền điện tính theo biểu giá 3
                    giá của EVN.
                  </p>
                </div>

                <div className="p-4 bg-neutral-900 border border-neutral-800 space-y-1">
                  <div className="text-sm font-bold text-white uppercase">
                    Chuyển mạch tự động &lt; 20ms
                  </div>
                  <p className="text-xs text-neutral-400 font-normal">
                    Duy trì nguồn điện liên tục cho hệ thống máy chủ, camera, tủ lạnh y tế khi có sự
                    cố mất lưới.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#F15A24] hover:bg-[#d94816] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#F15A24]/20 hover:translate-y-[-1px]"
                >
                  <span>KHÁM PHÁ HYBRID &amp; ESS</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 50% High-Precision Technical Imagery */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80"
                  alt="Tủ pin lưu trữ năng lượng Lithium ESS công nghiệp"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#0B0F19]/90 border border-neutral-700 px-3 py-1.5 text-xs font-mono text-[#008A4B] font-bold">
                  LiFePO4 &gt; 6000 CYCLES
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 5. SECTION: TRIẾT LÝ THIẾT KẾ (DESIGN PHILOSOPHY)             */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-widest">
              DESIGN PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0B0F19] tracking-tight leading-tight">
              Không phải hệ thống lớn nhất.
              <br className="hidden sm:inline" /> Mà là hệ thống phù hợp nhất.
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-normal">
              Định vị cốt lõi của TD VIỆT NAM: Lấy hiệu quả kỹ thuật thực tế và tính an toàn làm
              thước đo chuẩn mực.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESIGN_PRINCIPLES.map((prin, pIdx) => (
              <div
                key={pIdx}
                className="bg-white border border-neutral-200 p-6 sm:p-7 space-y-4 hover:border-[#0B0F19] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-3xl sm:text-4xl font-black font-mono text-neutral-300">
                    {prin.number}
                  </div>
                  <h3 className="text-base font-black uppercase text-[#0B0F19]">{prin.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {prin.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 text-[10px] font-mono text-[#008A4B] uppercase font-bold">
                  TIÊU CHUẨN KỸ THUẬT
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 6. SECTION: QUY TRÌNH THỰC HIỆN (PROCESS SEQUENCE)            */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-widest">
                IMPLEMENTATION PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                Quy trình thực hiện chuẩn mực
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono uppercase">
              MINH BẠCH TỪNG BƯỚC KHẢO SÁT &amp; THIẾT KẾ
            </p>
          </div>

          {/* Horizontal Sequence on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {PROCESS_STEPS.map((step, sIdx) => (
              <div
                key={sIdx}
                className="bg-white border border-neutral-200 p-5 space-y-3 flex flex-col justify-between hover:border-[#008A4B] transition-colors relative"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black font-mono text-[#008A4B]">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">
                      BƯỚC {sIdx + 1}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold uppercase text-[#0B0F19] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-[11px] text-neutral-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 7. SECTION: THIẾT BỊ & CÔNG NGHỆ (HARDWARE ECOSYSTEM)          */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#F15A24] uppercase tracking-widest">
                EQUIPMENT &amp; TECHNOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                Thiết bị &amp; công nghệ
              </h2>
            </div>
            <p className="text-xs text-neutral-500 max-w-md font-normal">
              TD VIỆT NAM lựa chọn thiết bị dựa trên yêu cầu kỹ thuật, độ tương thích hệ thống và
              nhu cầu vận hành thực tế của từng công trình.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {HARDWARE_CATEGORIES.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="bg-neutral-50 p-6 border border-neutral-200 hover:border-[#0B0F19] hover:bg-white transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-[10px] font-mono font-bold text-[#008A4B] uppercase">
                    {cat.subtitle}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold uppercase text-[#0B0F19] leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">{cat.desc}</p>
                </div>

                <div className="pt-3 border-t border-neutral-200/80 text-[10px] font-mono text-neutral-400">
                  TIÊU CHUẨN CO / CQ
                </div>
              </div>
            ))}

            {/* Card điều hướng sang trang Sản phẩm */}
            <div className="bg-[#0B0F19] text-white p-6 border border-neutral-800 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-[10px] font-mono font-bold text-[#F15A24] uppercase">
                  CATALOG &amp; HARDWARE
                </div>
                <h3 className="text-base font-bold uppercase text-white leading-snug">
                  Danh Mục Thiết Bị Đầy Đủ
                </h3>
                <p className="text-xs text-neutral-400 font-normal leading-relaxed">
                  Xem thông số kỹ thuật chi tiết các dòng Biến tần, Tấm quang năng, Pin lưu trữ và
                  Tủ điện phân phối.
                </p>
              </div>

              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 py-2.5 bg-[#008A4B] hover:bg-[#00703C] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>XEM SẢN PHẨM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 8. FINAL CTA: DEEP NAVY MINIMALIST CONTACT BANNER             */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 p-8 sm:p-12 lg:p-16 border border-neutral-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#008A4B] uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                <span>TIẾP NHẬN YÊU CẦU GIẢI PHÁP</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                Bạn đang tìm một giải pháp điện mặt trời phù hợp?
              </h2>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                Hãy bắt đầu từ nhu cầu sử dụng điện thực tế của công trình. Đội ngũ kỹ sư của TD
                VIỆT NAM sẵn sàng lắng nghe và lập phương án sơ bộ.
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
                <span>TÀI LIỆU &amp; CATALOG</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsPage;
