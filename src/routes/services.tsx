import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  Check,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { useState } from "react";

const title = "Dịch Vụ Kỹ Thuật & Tổng Thầu EPC | TD VIỆT NAM";
const description =
  "TD VIỆT NAM cung cấp các dịch vụ kỹ thuật chuyên sâu và tổng thầu EPC Điện mặt trời, hệ thống lưu trữ năng lượng BESS, khảo sát mô phỏng PVsyst và vận hành bảo trì O&M trọn gói.";

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
   1. DỮ LIỆU: HAI NHÓM NĂNG LỰC CỐT LÕI (EDITORIAL GROUPS)
========================================================================= */
const CAPABILITY_GROUPS = [
  {
    number: "01",
    badge: "ENGINEERING & CONSULTING | 01",
    title: "Tư vấn & Kỹ thuật dự án",
    desc: "Thiết lập nền tảng kỹ thuật và bài toán hiệu quả kinh tế dựa trên dữ liệu đo đạc thực tế của từng công trình.",
    services: [
      "Khảo sát & Mô phỏng sản lượng PVsyst 3D",
      "Thiết kế kỹ thuật & Dự toán hệ thống (IFC / SLD)",
      "Tư vấn pháp lý, thỏa thuận đấu nối & PCCC EVN",
    ],
    borderAccent: "border-l-4 border-[#00875A]",
  },
  {
    number: "02",
    badge: "EPC & ASSET MANAGEMENT | 02",
    title: "Triển khai & Vận hành",
    desc: "Biến thiết kế thành công trình vận hành ổn định với chuẩn thi công công nghiệp và quản trị tài sản trọn đời 25 năm.",
    services: [
      "Tổng thầu EPC trọn gói (Chìa khóa trao tay)",
      "Bảo trì, Đo kiểm Megger / I-V & Vận hành (O&M)",
      "Nâng cấp & Mở rộng hệ thống lưu trữ BESS / Hybrid",
      "Cung cấp vật tư & Thiết bị chính hãng Tier-1",
    ],
    borderAccent: "border-l-4 border-[#FF5722]",
  },
];

/* =========================================================================
   2. DỮ LIỆU: CHI TIẾT 7 DỊCH VỤ (ACCORDION INTERACTIVE LIST)
========================================================================= */
interface DetailedService {
  id: string;
  number: string;
  badge: string;
  group: string;
  title: string;
  summary: string;
  scope: string[];
  deliverables: string[];
  image: string;
  borderAccent: string;
}

const ALL_SERVICES_LIST: DetailedService[] = [
  {
    id: "srv-01",
    number: "01",
    badge: "SIMULATION & YIELD AUDIT | PVSYST",
    group: "TƯ VẤN & KỸ THUẬT",
    title: "Khảo sát & Mô phỏng sản lượng",
    summary:
      "Đo trắc đạc góc nghiêng, phân tích tải trọng tĩnh/động kết cấu mái và lập mô hình 3D đổ bóng theo từng giờ trên phần mềm PVsyst tiêu chuẩn quốc tế.",
    scope: [
      "Khảo sát kết cấu dầm xà gồ, độ võng mái tôn và hệ thống thoát nước hiện trạng.",
      "Thu thập dữ liệu bức xạ vệ tinh Meteonorm trong 20 năm gần nhất tại tọa độ công trình.",
      "Mô phỏng 3D vật cản đổ bóng (cây cối, ống khói, nóc gió lân cận) theo từng giờ trong năm.",
      "Tính toán chỉ số hiệu suất PR (Performance Ratio) và phân tích dòng tiền hoàn vốn LCOE.",
    ],
    deliverables: [
      "Báo cáo mô phỏng sản lượng PVsyst (P50/P90)",
      "Bản đánh giá khả năng chịu tải kết cấu mái",
      "Phương án tài chính & Thời gian thu hồi vốn",
    ],
    image:
      "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#00875A]",
  },
  {
    id: "srv-02",
    number: "02",
    badge: "ELECTRICAL CAD & SLD | IFC DESIGN",
    group: "TƯ VẤN & KỸ THUẬT",
    title: "Thiết kế kỹ thuật & Dự toán hệ thống",
    summary:
      "Chuyển hóa bài toán của khách hàng thành bộ hồ sơ bản vẽ thi công IFC hoàn chỉnh, tối ưu hóa điểm đấu nối và dải điện áp làm việc MPPT của Inverter.",
    scope: [
      "Thiết kế sơ đồ nguyên lý một sợi (SLD) từ chuỗi tấm pin DC đến tủ phân phối hạ thế AC.",
      "Phân bổ String Layout tối ưu hiệu suất MPPT, hạn chế tối đa lệch áp giữa các chuỗi.",
      "Tính toán cơ học hệ khung giàn nhôm định hình Anodized AL6005-T5 chịu tải bão cấp 12.",
      "Bóc tách dự toán khối lượng (BOQ) minh bạch từng mã vật tư, phụ kiện và cáp điện.",
    ],
    deliverables: [
      "Bộ bản vẽ thi công cơ điện hoàn chỉnh (IFC)",
      "Bản vẽ kết cấu khung giàn & giải pháp chống thấm",
      "Bảng dự toán khối lượng vật tư (BOQ) chi tiết",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#00875A]",
  },
  {
    id: "srv-03",
    number: "03",
    badge: "GRID CONNECTION & HSE | REGULATION",
    group: "TƯ VẤN & KỸ THUẬT",
    title: "Tư vấn pháp lý & Đấu nối EVN",
    summary:
      "Hỗ trợ khách hàng hoàn thiện toàn bộ thủ tục đăng ký phát triển điện tự sản tự tiêu, thỏa thuận kỹ thuật với các công ty Điện lực và tiêu chuẩn an toàn PCCC.",
    scope: [
      "Lập hồ sơ đăng ký phát triển nguồn điện mặt trời mái nhà theo đúng quy định hiện hành.",
      "Tư vấn giải pháp kỹ thuật đáp ứng thỏa thuận đấu nối trung thế / hạ thế với Điện lực EVN.",
      "Tích hợp bộ điều khiển chống phát ngược lưới Zero-Export và rơ-le bảo vệ đóng cắt tự động.",
      "Tư vấn phương án hành lang an toàn và giải pháp ngắt khẩn cấp Rapid Shutdown cho PCCC.",
    ],
    deliverables: [
      "Hồ sơ đăng ký phát triển điện mặt trời tự dùng",
      "Thỏa thuận kỹ thuật đấu nối lưới điện EVN",
      "Phương án an toàn PCCC mái nhà xưởng",
    ],
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#00875A]",
  },
  {
    id: "srv-04",
    number: "04",
    badge: "EPC CONTRACTOR | TURNKEY EXECUTION",
    group: "TRIỂN KHAI & VẬN HÀNH",
    title: "Tổng thầu EPC trọn gói (Chìa khóa trao tay)",
    summary:
      "Chịu trách nhiệm toàn diện từ mua sắm vật tư Tier-1, logistics, thi công cơ điện tại công trường đến đóng điện hòa lưới và nghiệm thu bàn giao.",
    scope: [
      "Cung ứng thiết bị Inverter, Tấm pin N-Type TOPCon và pin lưu trữ chính hãng có CO/CQ.",
      "Thi công chuẩn cơ điện công nghiệp: máng cáp mạ kẽm, tủ điện bảo vệ đạt chuẩn IP65/IP66.",
      "Hệ thống tiếp địa an toàn và kim thu sét đo kiểm điện trở đất đạt chuẩn R < 4.0 Ω.",
      "Đo kiểm Megger điện trở cách điện, đo đường cong đặc tính I-V trước khi đóng điện.",
    ],
    deliverables: [
      "Công trình đóng điện hòa lưới an toàn",
      "Hồ sơ hoàn công & Biên bản nghiệm thu kỹ thuật",
      "Chứng nhận bảo hành thiết bị chính hãng",
    ],
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#FF5722]",
  },
  {
    id: "srv-05",
    number: "05",
    badge: "O&M SERVICE | ASSET MANAGEMENT",
    group: "TRIỂN KHAI & VẬN HÀNH",
    title: "Bảo trì, Đo kiểm & Vận hành (O&M)",
    summary:
      "Duy trì tỷ suất hiệu suất PR liên tục ở mức đỉnh cao, phát hiện sớm các nguy cơ chạm chập và suy hao cell pin trong suốt vòng đời 25 năm.",
    scope: [
      "Vệ sinh bề mặt tấm quang điện định kỳ bằng thiết bị chuyên dụng và nguồn nước lọc RO.",
      "Đo quét nhiệt hồng ngoại (Thermal Scanning) phát hiện sớm các điểm nóng Hot-spot trên giàn pin.",
      "Giám sát trực tuyến 24/7 qua nền tảng Cloud/App, tự động gửi cảnh báo sự cố kỹ thuật.",
      "Đội phản ứng kỹ thuật có mặt tại hiện trường xử lý sự cố trong vòng 24–48 giờ.",
    ],
    deliverables: [
      "Báo cáo kiểm toán hiệu suất định kỳ (PR Audit)",
      "Bản đồ nhiệt hồng ngoại phát hiện điểm nóng",
      "Dịch vụ hỗ trợ kỹ thuật hiện trường 24/7",
    ],
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#FF5722]",
  },
  {
    id: "srv-06",
    number: "06",
    badge: "BESS INTEGRATION | PEAK SHAVING",
    group: "TRIỂN KHAI & VẬN HÀNH",
    title: "Nâng cấp & Mở rộng hệ thống lưu trữ (BESS/Hybrid)",
    summary:
      "Tối ưu hóa bài toán kinh tế sau FIT, lưu trữ nguồn điện dư ban ngày bằng pin Lithium LiFePO4 để sử dụng vào khung giờ cao điểm và cấp điện khi mất lưới.",
    scope: [
      "Khảo sát và tích hợp Inverter Hybrid cùng khối pin Lithium LiFePO4 cho hệ thống hiện hữu.",
      "Cài đặt tính năng cắt đỉnh phụ tải (Peak Shaving) tiết kiệm chi phí giờ cao điểm của EVN.",
      "Hệ thống chuyển mạch tự động ATS với thời gian đáp ứng < 10ms bảo vệ nguồn liên tục.",
      "Cài đặt lập trình sạc/xả thông minh theo biểu đồ phụ tải thực tế của nhà máy.",
    ],
    deliverables: [
      "Hệ thống lưu trữ BESS vận hành tự động",
      "Hệ thống chuyển nguồn UPS dự phòng máy chủ",
      "Bảng phân tích dòng tiền tiết kiệm điện 3 giá",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#FF5722]",
  },
  {
    id: "srv-07",
    number: "07",
    badge: "TIER-1 SUPPLY | HARDWARE STANDARDS",
    group: "TRIỂN KHAI & VẬN HÀNH",
    title: "Cung cấp vật tư & Thiết bị chính hãng",
    summary:
      "Phân phối trực tiếp các dòng sản phẩm chất lượng cao từ các thương hiệu Tier-1 toàn cầu, có lưu kho, thử nghiệm và bảo hành trực tiếp tại Việt Nam.",
    scope: [
      "Phân phối Inverter chuỗi/Hybrid, tấm pin công nghệ N-Type TOPCon hiệu suất cao trên 22.5%.",
      "Cáp điện DC 1500V chuyên dụng cách điện kép XLPO chống tia cực tím UV ngoài trời.",
      "Đầu nối MC4 chính hãng, thanh ray nhôm Anodized AL6005-T5 và kẹp Inox 304 không gỉ.",
      "Tủ điện đóng cắt bảo vệ AC/DC tích hợp thiết bị chống sét lan truyền Type II.",
    ],
    deliverables: [
      "Hồ sơ chứng nhận xuất xứ & chất lượng (CO/CQ)",
      "Bảo hành điện tử trực tiếp từ nhà sản xuất",
      "Có thiết bị dự phòng thay thế tạm thời khi bảo hành",
    ],
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#FF5722]",
  },
];

/* =========================================================================
   3. DỮ LIỆU: QUY TRÌNH TRIỂN KHAI 6 BƯỚC (WORKFLOW)
========================================================================= */
const WORKFLOW_STEPS = [
  {
    step: "01",
    badge: "STEP 01 | SITE AUDIT",
    title: "Khảo sát",
    desc: "Đo đạc kết cấu mái, góc nghiêng, hướng nắng và ghi nhận chính xác biểu đồ phụ tải thực tế của công trình.",
  },
  {
    step: "02",
    badge: "STEP 02 | IFC DESIGN",
    title: "Thiết kế",
    desc: "Mô phỏng 3D trên PVsyst kiểm soát bóng che và xuất bản vẽ thi công cơ điện IFC tối ưu chuỗi MPPT theo chuẩn EVN.",
  },
  {
    step: "03",
    badge: "STEP 03 | FINANCIAL BOQ",
    title: "Dự toán",
    desc: "Lập bảng khối lượng BOQ minh bạch từng mã vật tư và phương án tài chính hoàn vốn LCOE chi tiết.",
  },
  {
    step: "04",
    badge: "STEP 04 | HSE EXECUTION",
    title: "Triển khai",
    desc: "Cung ứng 100% vật tư Tier-1 có CO/CQ, thi công máng cáp mạ kẽm, tủ điện IP65 và tiếp địa an toàn R < 4.0 Ω.",
  },
  {
    step: "05",
    badge: "STEP 05 | COMMISSIONING",
    title: "Nghiệm thu",
    desc: "Đo kiểm Megger cách điện, quét nhiệt Hot-spot trước khi đóng điện và hoàn thiện hồ sơ nghiệm thu kỹ thuật.",
  },
  {
    step: "06",
    badge: "STEP 06 | 25-YEAR O&M",
    title: "Vận hành",
    desc: "Kích hoạt giám sát Cloud 24/7 và đồng hành bảo trì O&M trọn vòng đời 25 năm của công trình.",
  },
];

/* =========================================================================
   4. DỮ LIỆU: GIÁ TRỊ KỸ THUẬT CHỨNG MINH THỰC TẾ (4 TRỤ CỘT)
========================================================================= */
const ENGINEERING_VALUES = [
  {
    number: "01",
    badge: "METEONORM DATA | P50/P90",
    title: "Phương Án Có Cơ Sở Dữ Liệu",
    desc: "Mọi cấu hình hệ thống đều dựa trên kết quả đo đạc phụ tải thực tế và mô phỏng bức xạ vệ tinh Meteonorm 20 năm, kiểm soát sai số sản lượng dưới 5%.",
  },
  {
    number: "02",
    badge: "WIND LOAD 2400PA | IP65",
    title: "Thiết Kế Khả Thi & An Toàn",
    desc: "Hồ sơ bản vẽ IFC tính toán kết cấu giàn khung chịu tải bão cấp 12, giải pháp chống thấm dột chuyên dụng và an toàn PCCC cho mái nhà xưởng.",
  },
  {
    number: "03",
    badge: "TIER-1 CO/CQ | GENUINE",
    title: "Thiết Bị Chuẩn Tier-1",
    desc: "100% Inverter, tấm quang năng và khối pin lưu trữ có đầy đủ chứng chỉ xuất xứ (CO) và chứng chỉ chất lượng (CQ), bảo hành trực tiếp tại Việt Nam.",
  },
  {
    number: "04",
    badge: "SLA RESPONSE | 24H ACTION",
    title: "Hỗ Trợ Vận Hành Dài Hạn",
    desc: "Kỹ sư chuyên ngành trực tiếp quản trị dự án, phản hồi kỹ thuật trong 2 giờ và có mặt xử lý sự cố hiện trường trong vòng 24–48 giờ.",
  },
];

/* =========================================================================
   5. DỮ LIỆU: DỰ ÁN TIÊU BIỂU LIÊN KẾT
========================================================================= */
const FEATURED_PROJECTS = [
  {
    title: "Nhà Máy Chế Tạo Cơ Khí Chính Xác – KCN Quế Võ",
    badge: "C&I ZERO-EXPORT | 250 KWP",
    location: "Bắc Ninh",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1000&auto=format&fit=crop&q=80",
    stat: "32.050 kWh/tháng",
    link: "/projects",
  },
  {
    title: "Biệt Thự Khu Đô Thị Starlake – Hà Nội",
    badge: "RESIDENTIAL HYBRID | 12 KWP + 15 KWH BESS",
    location: "Hà Nội",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80",
    stat: "Tự chủ điện 85%",
    link: "/projects",
  },
];

export function ServicesPage() {
  const [expandedServiceId, setExpandedServiceId] = useState<string>("srv-01");

  const toggleService = (id: string) => {
    setExpandedServiceId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="w-full bg-white text-[#0B0F19] font-sans antialiased selection:bg-[#FF5722] selection:text-white">
      {/* ============================================================= */}
      {/* 1. HERO SECTION: INDUSTRIAL HIGH-TECH MINIMALISM              */}
      {/* ============================================================= */}
      <section className="relative w-full bg-[#0B0F19] text-white pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-slate-700 text-[#00875A] text-xs font-bold uppercase tracking-wider rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00875A]" />
            <span>DỊCH VỤ KỸ THUẬT &amp; TỔNG THẦU EPC</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Cột trái: Tiêu đề lớn & Định vị */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[1.05]">
                DỊCH VỤ
              </h1>

              <div className="space-y-3 text-neutral-300 font-normal leading-relaxed text-sm sm:text-base max-w-2xl">
                <p className="text-white font-bold text-base sm:text-lg">
                  Đồng hành cùng chủ đầu tư xuyên suốt vòng đời dự án năng lượng.
                </p>
                <p>
                  Từ tư vấn, khảo sát mô phỏng và thiết kế tối ưu CAPEX đến triển khai tổng thầu EPC
                  chuẩn an toàn và quản lý vận hành bền bỉ suốt 25 năm.
                </p>
              </div>

              {/* Nút hành động bo tròn hoàn toàn (rounded-full) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#FF5722] hover:bg-[#e64a19] text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105"
                >
                  <span>TRAO ĐỔI VỚI KỸ SƯ</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-slate-700 transition-colors"
                >
                  <span>XEM DỰ ÁN</span>
                </a>
              </div>
            </div>

            {/* Cột phải: Hình ảnh công trình kỹ thuật lớn */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/3] bg-neutral-900 border border-slate-800 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80"
                  alt="Công trình kỹ thuật điện mặt trời áp mái TD VIỆT NAM"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0B0F19]/95 p-4 text-white border-t border-slate-800">
                  <div className="text-[11px] font-bold text-[#FF5722] uppercase tracking-wide">
                    TIÊU CHUẨN THI CÔNG EPC
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Khảo sát mô phỏng • Thi công cơ điện • Nghiệm thu hòa lưới
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400 font-medium px-1">
                <span>HẠ TẦNG ĐIỆN &amp; LƯU TRỮ BESS</span>
                <span className="text-[#00875A] font-bold">TD VIỆT NAM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Tối Giản */}
      <div className="w-full bg-[#F8FAFC] border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-semibold text-neutral-500 flex items-center gap-2">
          <a href="/" className="hover:text-[#0B0F19] transition-colors">
            Trang chủ
          </a>
          <span>/</span>
          <span className="text-[#00875A]">Dịch vụ kỹ thuật</span>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 2. HAI NHÓM NĂNG LỰC CỐT LÕI (EDITORIAL ASYMMETRIC GRID)       */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
              HAI KHỐI NĂNG LỰC CỐT LÕI
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#0B0F19] tracking-tight leading-tight">
              Giải Pháp Kỹ Thuật Đồng Bộ Từ Ý Niệm Đến Vận Hành
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              Thay vì cung cấp dịch vụ phân mảnh, TD VIỆT NAM tổ chức chuỗi công việc thành hai khối
              năng lực rõ ràng nhằm đảm bảo tính đồng bộ tuyệt đối cho công trình.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {CAPABILITY_GROUPS.map((group, gIdx) => (
              <div
                key={gIdx}
                className={`bg-[#F8FAFC] border border-slate-200 ${group.borderAccent} p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:border-slate-400 transition-all relative group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl sm:text-5xl font-black text-slate-300 group-hover:text-[#0B0F19] transition-colors">
                      {group.number}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-white px-2.5 py-1 border border-slate-200 rounded-full">
                      {group.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0B0F19] leading-snug">
                    {group.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {group.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-200 space-y-2.5">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      DANH MỤC DỊCH VỤ THỰC THI:
                    </div>
                    {group.services.map((srv, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium"
                      >
                        <Check className="w-4 h-4 text-[#00875A] mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href="#all-services-accordion"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#00875A] hover:text-[#00703C] uppercase tracking-wider"
                  >
                    <span>Xem chi tiết các hạng mục</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>

                  {/* Icon tròn nhỏ màu cam ở góc dưới chứa mũi tên ↗ */}
                  <div className="w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 3. CHI TIẾT 7 DỊCH VỤ (ACCORDION WITH BORDER-L-4 & BADGES)     */}
      {/* ============================================================= */}
      <section
        id="all-services-accordion"
        className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#FF5722] uppercase tracking-wider">
                CHI TIẾT DỊCH VỤ KỸ THUẬT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                7 Dịch Vụ Kỹ Thuật Chuyên Sâu
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-semibold uppercase max-w-md">
              BẤM VÀO TỪNG DỊCH VỤ ĐỂ XEM CHI TIẾT PHẠM VI &amp; HỒ SƠ BÀN GIAO
            </p>
          </div>

          {/* Danh sách Accordion */}
          <div className="space-y-4">
            {ALL_SERVICES_LIST.map((srv) => {
              const isExpanded = expandedServiceId === srv.id;
              return (
                <div
                  key={srv.id}
                  className={`bg-white border border-slate-200 ${srv.borderAccent} transition-all duration-200 overflow-hidden ${
                    isExpanded ? "ring-1 ring-[#0B0F19]" : "hover:border-slate-400"
                  }`}
                >
                  {/* Dòng tiêu đề Accordion */}
                  <div
                    onClick={() => toggleService(srv.id)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    <div className="flex items-start md:items-center gap-4 sm:gap-6 flex-1">
                      <span
                        className={`text-xl sm:text-2xl font-black ${
                          isExpanded ? "text-[#FF5722]" : "text-slate-400"
                        }`}
                      >
                        {srv.number}
                      </span>

                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          <span>{srv.badge}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black uppercase text-[#0B0F19] leading-snug">
                          {srv.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                          {srv.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0 pt-2 md:pt-0">
                      <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider hidden sm:inline">
                        {isExpanded ? "Thu gọn" : "Xem chi tiết"}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isExpanded
                            ? "bg-[#FF5722] text-white rotate-180"
                            : "bg-slate-100 text-slate-600 border border-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Nội dung chi tiết mở rộng */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
                        {/* Cột trái: Phạm vi công việc */}
                        <div className="lg:col-span-7 space-y-4">
                          <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                            PHẠM VI CÔNG VIỆC THỰC HIỆN:
                          </div>
                          <div className="space-y-2.5">
                            {srv.scope.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#00875A] mt-0.5 flex-shrink-0" />
                                <span className="leading-snug font-normal">{item}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-4 border-t border-slate-100 space-y-2">
                            <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                              HỒ SƠ BÀN GIAO CHO KHÁCH HÀNG:
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              {srv.deliverables.map((del, dIdx) => (
                                <div
                                  key={dIdx}
                                  className="p-2.5 bg-[#F8FAFC] border border-slate-200 font-medium text-slate-800 flex items-center gap-2"
                                >
                                  <FileText className="w-3.5 h-3.5 text-[#FF5722] flex-shrink-0" />
                                  <span>{del}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Cột phải: Hình ảnh & Nút liên hệ */}
                        <div className="lg:col-span-5 space-y-4">
                          <div className="relative aspect-[16/10] bg-neutral-100 border border-slate-200 overflow-hidden">
                            <img
                              src={srv.image}
                              alt={srv.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <a
                              href="/contact"
                              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF5722] hover:bg-[#e64a19] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                            >
                              <span>Yêu cầu tư vấn</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>

                            <a
                              href="/projects"
                              className="text-xs font-bold text-slate-600 hover:text-[#0B0F19] uppercase tracking-wide underline"
                            >
                              Xem công trình mẫu
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. QUY TRÌNH TRIỂN KHAI XUYÊN SUỐT (6 BƯỚC)                   */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
                QUY TRÌNH DỰ ÁN
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                Quy Trình Triển Khai Xuyên Suốt
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-semibold uppercase">
              TỐI GIẢN HÓA THAO TÁC • CHUẨN HÓA CHẤT LƯỢNG KỸ THUẬT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-slate-200 border-l-4 border-l-[#00875A] p-5 space-y-3 flex flex-col justify-between hover:border-slate-400 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#00875A]">{step.step}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider bg-white px-2 py-0.5 border border-slate-200 rounded-full">
                      BƯỚC {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold uppercase text-[#0B0F19] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 5. GIÁ TRỊ KỸ THUẬT & KHỐI TRÍCH DẪN KỸ SƯ TRƯỞNG (QUOTE BOX) */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
              GIÁ TRỊ KỸ THUẬT THỰC CHẤT
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#0B0F19] tracking-tight leading-tight">
              Những Cam Kết Có Thể Chứng Minh Bằng Số Liệu
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Chúng tôi không sử dụng các tuyên bố chung chung mà đo lường chất lượng dịch vụ bằng
              độ chính xác của mô phỏng và sự an toàn của công trình.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGINEERING_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 sm:p-7 space-y-4 hover:border-slate-400 transition-all flex flex-col justify-between relative group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-black text-slate-300 group-hover:text-[#0B0F19] transition-colors">
                      {val.number}
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 px-2 py-0.5 border border-slate-200 rounded-full">
                      {val.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-black uppercase text-[#0B0F19]">{val.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">{val.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00875A] uppercase">
                  <span>TIÊU CHUẨN THỰC THI</span>
                  <div className="w-6 h-6 rounded-full bg-[#FF5722] text-white flex items-center justify-center text-[10px]">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KHỐI TRÍCH DẪN (QUOTE BOX) KỸ SƯ TRƯỞNG */}
          <div className="bg-[#0B0F19] text-white p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-5xl font-serif text-[#FF5722] leading-none block">“</span>
                <blockquote className="text-lg sm:text-2xl font-bold uppercase text-white tracking-tight leading-snug">
                  Tại TD VIỆT NAM, chúng tôi không đánh đổi an toàn và độ chính xác kỹ thuật lấy
                  tiến độ nhất thời. Mỗi điểm đấu nối, mỗi chuỗi string đều phải chịu trách nhiệm
                  trước 25 năm vận hành của công trình.
                </blockquote>
                <div className="pt-2 text-xs text-slate-400 font-medium">
                  NGUYÊN TẮC THIẾT KẾ &amp; THI CÔNG HỆ THỐNG ĐIỆN CÔNG NGHIỆP
                </div>
              </div>

              <div className="lg:col-span-4 flex items-center gap-4 lg:border-l lg:border-slate-800 lg:pl-8">
                <div className="w-14 h-14 rounded-full bg-[#FF5722]/20 border border-[#FF5722] flex items-center justify-center text-[#FF5722] font-black text-lg flex-shrink-0">
                  TD
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase">
                    KỸ SƯ TRƯỞNG HỆ THỐNG ĐIỆN
                  </div>
                  <div className="text-xs text-[#00875A] font-medium">
                    CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Chuyên ngành Hệ Thống Điện &amp; Năng Lượng Tái Tạo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 6. DỰ ÁN TIÊU BIỂU (LIÊN KẾT THỰC TẾ)                         */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#FF5722] uppercase tracking-wider">
                CHỨNG THỰC HIỆN TRƯỜNG
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                Công Trình Thực Tế Đã Đóng Điện
              </h2>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00875A] hover:text-[#00703C] uppercase tracking-wider"
            >
              <span>Xem toàn bộ dự án</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_PROJECTS.map((pj, idx) => (
              <a
                key={idx}
                href={pj.link}
                className="group bg-[#F8FAFC] border border-slate-200 overflow-hidden hover:border-slate-400 transition-all flex flex-col justify-between relative"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-slate-200">
                    <img
                      src={pj.image}
                      alt={pj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B0F19] text-white px-2.5 py-1 text-xs font-bold">
                      {pj.location}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="text-[11px] font-bold text-[#00875A] uppercase tracking-wide">
                      {pj.badge}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black uppercase text-[#0B0F19] leading-snug group-hover:text-[#FF5722] transition-colors">
                      {pj.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Sản lượng kiểm chứng: <strong className="text-[#0B0F19]">{pj.stat}</strong>
                  </span>

                  {/* Icon tròn nhỏ màu cam ↗ */}
                  <div className="w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 7. FINAL CTA: TỐI GIẢN & SOLID CAM BUTTON                    */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 p-8 sm:p-12 lg:p-16 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00875A] uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>KẾT NỐI KỸ THUẬT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                Bạn đang có một bài toán về hệ thống điện?
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                Hãy bắt đầu từ nhu cầu sử dụng điện thực tế. Đội ngũ kỹ sư TD VIỆT NAM sẵn sàng lắng
                nghe, phân tích phụ tải và lập phương án sơ bộ cho công trình của bạn.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-medium text-neutral-300 pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00875A]" />
                  <span>
                    Hotline Kỹ Sư: <strong className="text-white font-bold">0941 994 262</strong>
                  </span>
                </div>
                <span className="hidden sm:inline text-neutral-700">|</span>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FF5722]" />
                  <span>
                    Email: <strong className="text-white font-bold">nangluongtd@gmail.com</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF5722] hover:bg-[#e64a19] text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105"
              >
                <span>TRAO ĐỔI VỚI KỸ SƯ</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/downloads"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors"
              >
                <span>TẢI TÀI LIỆU DỰ ÁN</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
