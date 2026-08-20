import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Award,
  Phone,
  BarChart3,
  Check,
  Send,
  Activity,
  ChevronRight,
} from "lucide-react";

const title = "Dịch Vụ Kỹ Thuật & Tổng Thầu EPC | TD VIỆT NAM";
const description =
  "Dịch vụ kỹ thuật chuyên sâu và tổng thầu EPC Điện mặt trời, hệ thống lưu trữ năng lượng BESS, khảo sát mô phỏng PVsyst và vận hành bảo trì O&M trọn gói.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

/* =========================================================================
   DỮ LIỆU KHỐI 1: TƯ VẤN & KỸ THUẬT DỰ ÁN
========================================================================= */
const CONSULTING_SERVICES = [
  {
    id: "pvsyst-simulation",
    stepNumber: "01",
    title: "Khảo sát & Mô phỏng sản lượng chuyên sâu",
    tag: "SIMULATION & FEASIBILITY",
    image:
      "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=80",
    description:
      "Đo đạc hiện trạng kết cấu mái, góc nghiêng, hướng nắng và lập mô hình không gian 3D nhằm tính toán chính xác bức xạ mặt trời.",
    features: [
      "Khảo sát tải trọng kết cấu mái xưởng, độ võng xà gồ và hệ thống thoát nước hiện hữu.",
      "Mô phỏng đổ bóng 3D từng giờ trong năm bằng phần mềm PVsyst tiêu chuẩn quốc tế.",
      "Xuất báo cáo sản lượng P50/P90, dự báo tỷ suất hiệu suất PR (Performance Ratio).",
      "Lập bảng tính toán dòng tiền hoàn vốn (Payback Time) và chi phí quy dẫn LCOE.",
    ],
  },
  {
    id: "engineering-design",
    stepNumber: "02",
    title: "Thiết kế kỹ thuật & Dự toán hệ thống",
    tag: "IFC & DETAILED DESIGN",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    description:
      "Lập bộ hồ sơ bản vẽ thi công IFC hoàn chỉnh, tối ưu hóa điểm đấu nối và cấu trúc chuỗi tấm pin đạt hiệu suất cao nhất.",
    features: [
      "Thiết kế sơ đồ nguyên lý một sợi (SLD) chi tiết từ chuỗi String DC đến tủ phân phối AC.",
      "Phân bổ String Layout tối ưu dải điện áp làm việc MPPT của từng biến tần Inverter.",
      "Thiết kế khung giàn nhôm định hình Anodized chịu bão cấp 12 và chống dột mái tôn chuyên dụng.",
      "Bóc tách bảng dự toán khối lượng (BOQ) minh bạch từng mã vật tư, phụ kiện và cáp điện.",
    ],
  },
  {
    id: "grid-compliance",
    stepNumber: "03",
    title: "Tư vấn pháp lý & Thủ tục đấu nối EVN",
    tag: "LEGAL & GRID INTERCONNECTION",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
    description:
      "Hỗ trợ chủ đầu tư hoàn thiện toàn bộ thủ tục đăng ký phát triển điện tự dùng và thỏa thuận kỹ thuật với các công ty Điện lực.",
    features: [
      "Hỗ trợ lập hồ sơ đăng ký phát triển nguồn điện mặt trời mái nhà tự sản tự tiêu.",
      "Tư vấn giải pháp kỹ thuật đáp ứng quy chuẩn kỹ thuật đấu nối trung thế / hạ thế EVN.",
      "Tích hợp thiết bị chống phát ngược lưới Zero-Export và rơ-le bảo vệ rò điện, chạm đất.",
      "Tư vấn giải pháp an toàn phòng cháy chữa cháy (PCCC) cho hệ thống điện áp mái nhà xưởng.",
    ],
  },
];

/* =========================================================================
   DỮ LIỆU KHỐI 2: TRIỂN KHAI & VẬN HÀNH
========================================================================= */
const EXECUTION_SERVICES = [
  {
    id: "epc-turnkey",
    title: "Tổng thầu EPC trọn gói (Chìa khóa trao tay)",
    tag: "FULL TURNKEY EPC",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80",
    summary:
      "Quản lý toàn diện từ khâu mua sắm vật tư Tier-1, logistics, thi công lắp đặt cơ điện đến đóng điện hòa lưới an toàn.",
    highlights: [
      "Cung ứng thiết bị Inverter, tấm pin PV và pin lưu trữ Tier-1 có đầy đủ CO/CQ.",
      "Thi công chuẩn điện công nghiệp: máng cáp mạ kẽm nhúng nóng, tủ điện IP65/IP66.",
      "Hệ thống tiếp địa an toàn và kim thu sét đo kiểm điện trở đất đạt R < 10 Ω.",
      "Đo kiểm nghiệm thu đường cong đặc tính I-V, điện trở cách điện Megger trước khi đóng điện.",
    ],
  },
  {
    id: "om-maintenance",
    title: "Bảo trì, Đo kiểm & Vận hành (O&M)",
    tag: "O&M & ASSET MANAGEMENT",
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80",
    summary:
      "Duy trì hiệu suất phát điện liên tục ở mức đỉnh, phát hiện sớm các nguy cơ chạm chập và suy hao cell pin.",
    highlights: [
      "Dịch vụ rửa tấm quang điện định kỳ bằng thiết bị chuyên dụng và nguồn nước khử ion.",
      "Đo kiểm quét nhiệt hồng ngoại (Thermal Imaging / Drone) phát hiện điểm nóng Hot-spot.",
      "Giám sát từ xa 24/7 qua nền tảng Cloud/App, tự động gửi cảnh báo sự cố kỹ thuật.",
      "Đội phản ứng nhanh có mặt tại công trường xử lý sự cố trong vòng 24–48 giờ.",
    ],
  },
  {
    id: "bess-upgrade",
    title: "Nâng cấp & Mở rộng hệ thống lưu trữ (BESS/Hybrid)",
    tag: "HYBRID & ENERGY STORAGE",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    summary:
      "Tối ưu hóa bài toán kinh tế sau giá FIT, lưu trữ nguồn điện dư ban ngày để sử dụng vào khung giờ cao điểm giá điện cao.",
    highlights: [
      "Khảo sát và tích hợp Inverter Hybrid cùng khối pin Lithium LiFePO4 cho hệ thống hiện hữu.",
      "Cài đặt chế độ cắt đỉnh phụ tải (Peak Shaving) tiết kiệm tiền điện giờ cao điểm.",
      "Hệ thống chuyển mạch tự động ATS với thời gian đáp ứng < 20ms cấp điện khi mất lưới.",
      "Cài đặt lập trình sạc/xả thông minh theo biểu giá điện 3 giá của EVN.",
    ],
  },
  {
    id: "hardware-supply",
    title: "Cung cấp vật tư & Thiết bị chính hãng",
    tag: "GENUINE EQUIPMENT SUPPLY",
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
    summary:
      "Phân phối trực tiếp các dòng sản phẩm chất lượng cao từ các thương hiệu hàng đầu thế giới được bảo hành chính hãng.",
    highlights: [
      "Phân phối Inverter chuỗi/Hybrid, tấm pin công nghệ N-Type TOPCon và pin lưu trữ Lithium.",
      "Cáp điện DC năng lượng mặt trời chuyên dụng 1500V cách điện kép XLPO chống tia cực tím UV.",
      "Đầu nối MC4 chính hãng chịu dòng cao, thanh ray nhôm Anodized AL6005-T5 và kẹp Inox 304.",
      "Tủ điện đóng cắt bảo vệ DC/AC tích hợp thiết bị chống sét lan truyền Type II.",
    ],
  },
];

/* =========================================================================
   BẢNG TIÊU CHÍ CAM KẾT CHẤT LƯỢNG
========================================================================= */
const COMMITMENTS = [
  {
    criterion: "Tính chính xác",
    commitment: "Sai số mô phỏng sản lượng PVsyst so với thực tế phát điện kiểm soát dưới 5%.",
    icon: BarChart3,
    badge: "PVsyst P50/P90",
  },
  {
    criterion: "Vật tư thiết bị",
    commitment:
      "100% thiết bị chính hãng Tier-1, đầy đủ chứng chỉ CO/CQ và kích hoạt bảo hành điện tử.",
    icon: Award,
    badge: "100% Tier-1",
  },
  {
    criterion: "An toàn công trình",
    commitment:
      "Bảo hành chống thấm dột vị trí lắp đặt, kết cấu giàn khung vững chắc trước mùa mưa bão.",
    icon: ShieldCheck,
    badge: "Chuẩn QCVN",
  },
  {
    criterion: "Hỗ trợ kỹ thuật",
    commitment:
      "Kỹ sư chuyên ngành trực tiếp phụ trách dự án, không qua trung gian sales, phản hồi kỹ thuật trong vòng 2 giờ.",
    icon: Activity,
    badge: "SLA 2 Giờ",
  },
];

export function ServicesPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-white text-neutral-900 font-sans">
      {/* ============================================================= */}
      {/* 1. HERO BANNER: DỊCH VỤ KỸ THUẬT & TỔNG THẦU EPC             */}
      {/* ============================================================= */}
      <section className="relative w-full bg-[#050e18] text-white py-20 lg:py-28 overflow-hidden">
        {/* Nền ảnh công nghiệp & Lưới tọa độ */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1800&auto=format&fit=crop&q=80"
            alt="Dịch vụ EPC Năng lượng mặt trời TD VIỆT NAM"
            className="w-full h-full object-cover opacity-25"
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(#008a4b 1px, transparent 1px), linear-gradient(90deg, #008a4b 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e18] via-[#050e18]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e18] via-transparent to-[#050e18]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F15A24]/10 border-l-2 border-[#F15A24] text-[#F15A24] text-xs font-mono font-bold uppercase tracking-wider">
              <span>ENGINEERING &amp; EPC SERVICES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight tracking-tight">
              DỊCH VỤ KỸ THUẬT &amp; TỔNG THẦU EPC NĂNG LƯỢNG TÁI TẠO
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Đồng hành cùng chủ đầu tư từ bước khảo sát mô phỏng, thiết kế tối ưu CAPEX đến thi
              công chuẩn an toàn và vận hành bền bỉ suốt 25 năm.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#survey-form"
                className="inline-flex items-center gap-3 px-8 py-3.5 font-bold text-xs uppercase tracking-wider text-white bg-[#008A4B] hover:bg-[#00703C] transition-all shadow-lg shadow-[#008A4B]/20 hover:scale-105"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <span>YÊU CẦU KHẢO SÁT HIỆN TRƯỜNG</span>
              </a>

              <a
                href="tel:0941994262"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#008A4B]" />
                <span>TƯ VẤN CÙNG KỸ SƯ: 0941 994 262</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER CHỈ SỐ KỸ THUẬT NHANH */}
      <div className="w-full bg-[#f8fafc] border-b border-neutral-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-black font-mono text-[#008A4B]">&lt; 5%</div>
            <div className="text-[11px] font-semibold text-neutral-600 uppercase">
              Sai số mô phỏng PVsyst
            </div>
          </div>
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-black font-mono text-[#F15A24]">
              100% Tier-1
            </div>
            <div className="text-[11px] font-semibold text-neutral-600 uppercase">
              Thiết bị có CO/CQ
            </div>
          </div>
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-black font-mono text-neutral-900">
              &lt; 10 Ω
            </div>
            <div className="text-[11px] font-semibold text-neutral-600 uppercase">
              Điện trở tiếp địa an toàn
            </div>
          </div>
          <div className="space-y-0.5">
            <div className="text-xl sm:text-2xl font-black font-mono text-[#10B981]">02 Giờ</div>
            <div className="text-[11px] font-semibold text-neutral-600 uppercase">
              Phản hồi kỹ thuật SLA
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 2. KHỐI 1: TƯ VẤN & KỸ THUẬT DỰ ÁN                            */}
      {/* ============================================================= */}
      <section
        id="consulting"
        className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-wider">
                ENGINEERING &amp; CONSULTING
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-neutral-900 tracking-tight">
                TƯ VẤN &amp; KỸ THUẬT DỰ ÁN
              </h2>
            </div>
            <p className="text-xs text-neutral-500 max-w-md font-medium">
              Thiết kế dựa trên dữ liệu đo đạc thực tế, chuẩn hóa bài toán tài chính và hồ sơ kỹ
              thuật cho công trình.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CONSULTING_SERVICES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/90 hover:border-neutral-900 transition-all flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#050e18]/80 backdrop-blur-xs text-white px-2.5 py-1 text-[11px] font-mono font-bold">
                      {item.stepNumber}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="text-[10px] font-mono font-bold text-[#008A4B] uppercase">
                      {item.tag}
                    </div>

                    <h3 className="text-lg font-black text-neutral-900 uppercase leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-neutral-100 space-y-2.5">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-[#008A4B] mt-0.5 flex-shrink-0" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#survey-form"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-neutral-100 hover:bg-[#008A4B] hover:text-white text-neutral-900 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Yêu cầu tư vấn</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 3. KHỐI 2: TRIỂN KHAI & VẬN HÀNH                              */}
      {/* ============================================================= */}
      <section
        id="execution"
        className="w-full py-16 sm:py-24 bg-neutral-50/70 border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#F15A24] uppercase tracking-wider">
                PROCUREMENT, CONSTRUCTION &amp; O&amp;M
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-neutral-900 tracking-tight">
                TRIỂN KHAI &amp; VẬN HÀNH
              </h2>
            </div>
            <p className="text-xs text-neutral-500 max-w-md font-medium">
              Thi công chuẩn kỹ thuật công nghiệp, kiểm soát thiết bị Tier-1 và đồng hành suốt vòng
              đời 25 năm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXECUTION_SERVICES.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-neutral-200/90 hover:border-neutral-900 transition-all flex flex-col lg:flex-row overflow-hidden shadow-xs hover:shadow-md group"
              >
                <div className="lg:w-2/5 relative aspect-square lg:aspect-auto bg-neutral-100 overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                </div>

                <div className="lg:w-3/5 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="text-[10px] font-mono font-bold text-[#F15A24] uppercase">
                      {item.tag}
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-neutral-900 uppercase leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {item.summary}
                    </p>

                    <div className="pt-2 border-t border-neutral-100 space-y-2">
                      {item.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F15A24] mt-0.5 flex-shrink-0" />
                          <span className="leading-tight">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <a
                      href="#survey-form"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008A4B] hover:text-[#00703C] uppercase tracking-wider group-hover:translate-x-1 transition-all"
                    >
                      <span>Khảo sát giải pháp này</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. CAM KẾT CHẤT LƯỢNG DỊCH VỤ CỦA TD VIỆT NAM                  */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#050e18] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
              SERVICE LEVEL AGREEMENT &amp; COMMITMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">
              CAM KẾT CHẤT LƯỢNG DỊCH VỤ CỦA TD VIỆT NAM
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Minh bạch từng chỉ số kỹ thuật và trách nhiệm bảo hành nhằm bảo vệ tối đa quyền lợi
              của chủ đầu tư.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITMENTS.map((com, cIdx) => {
              const IconComp = com.icon;
              return (
                <div
                  key={cIdx}
                  className="bg-neutral-950 p-6 sm:p-7 border border-neutral-800 hover:border-[#008A4B] transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-[#008A4B]/20 text-[#10B981] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-neutral-400 bg-neutral-900 px-2 py-0.5">
                        {com.badge}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white uppercase">
                      {com.criterion}
                    </h3>

                    <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                      {com.commitment}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 text-[10px] font-mono text-[#008A4B]">
                    TIÊU CHUẨN TD VIỆT NAM
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 5. FORM ĐĂNG KÝ KHẢO SÁT & TIẾP NHẬN DỰ ÁN                    */}
      {/* ============================================================= */}
      <section id="survey-form" className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-wider">
              ON-SITE SURVEY REQUEST
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-neutral-900 tracking-tight">
              ĐĂNG KÝ KHẢO SÁT HIỆN TRƯỜNG MIỄN PHÍ
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto">
              Để lại thông tin công trình, đội ngũ kỹ sư của TD VIỆT NAM sẽ liên hệ, phân tích sơ bộ
              biểu đồ phụ tải và xếp lịch đo đạc hiện trường trong vòng 24 giờ.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-neutral-50 border-2 border-[#008A4B] p-8 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 bg-[#008A4B]/10 text-[#008A4B] mx-auto flex items-center justify-center rounded-full">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                Yêu cầu khảo sát đã được tiếp nhận!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                Kỹ sư phụ trách khu vực của TD VIỆT NAM sẽ liên hệ qua số điện thoại để trao đổi chi
                tiết về mặt bằng và thời gian khảo sát.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="bg-neutral-50 p-6 sm:p-10 border border-neutral-200 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Họ và tên người liên hệ <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn Nam"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-[#008A4B] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Số điện thoại liên hệ <span className="text-[#F15A24]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0941 994 262"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-[#008A4B] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Loại hình công trình <span className="text-[#F15A24]">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-[#008A4B] transition-colors"
                  >
                    <option value="">-- Chọn loại hình --</option>
                    <option value="factory">Nhà xưởng sản xuất / Doanh nghiệp FDI (C&amp;I)</option>
                    <option value="residential">Biệt thự / Nhà ở gia đình</option>
                    <option value="farm">Trang trại / Nông nghiệp công nghệ cao</option>
                    <option value="bess">Hệ thống lưu trữ pin BESS / Hybrid</option>
                    <option value="om">Dịch vụ bảo trì O&amp;M định kỳ</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Hóa đơn tiền điện bình quân / tháng
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: 50 triệu / tháng hoặc 200 triệu / tháng"
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-[#008A4B] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                  Địa chỉ công trình &amp; Tỉnh thành <span className="text-[#F15A24]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: KCN Quế Võ, Bắc Ninh hoặc KCN Phố Nối A, Hưng Yên"
                  className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-[#008A4B] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800">
                  Nhu cầu cụ thể &amp; Ghi chú kỹ thuật
                </label>
                <textarea
                  rows={3}
                  placeholder="Ví dụ: Mái tôn diện tích 2000m2, trạm biến áp riêng 560kVA, cần lắp hệ thống bám tải Zero-Export..."
                  className="w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:border-[#008A4B] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-[#008A4B] hover:bg-[#00703C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#008A4B]/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>GỬI YÊU CẦU KHẢO SÁT KỸ THUẬT</span>
                </button>
              </div>
            </form>
          )}

          <div className="pt-4 text-center text-xs text-neutral-500">
            Hỗ trợ tư vấn kỹ thuật trực tiếp:{" "}
            <a href="tel:0941994262" className="text-[#008A4B] font-bold">
              0941 994 262
            </a>{" "}
            | Email tiếp nhận hồ sơ:{" "}
            <a
              href="mailto:contact@tdvietnam.com.vn"
              className="text-neutral-900 font-bold underline"
            >
              contact@tdvietnam.com.vn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
