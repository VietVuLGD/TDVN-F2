import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  Check,
  ChevronRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { useState, useMemo } from "react";

const title = "Hồ Sơ Dự Án & Dữ Liệu Vận Hành Thực Tế | TD VIỆT NAM";
const description =
  "Minh bạch từng thông số kỹ thuật. Mọi công trình do TD VIỆT NAM thiết kế và thi công đều được giám sát thời gian thực qua App/Cloud, đối chiếu độ chính xác với mô phỏng P50/P90.";

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
   DỮ LIỆU: DANH SÁCH DỰ ÁN KỸ THUẬT (VERIFIED CASE STUDIES)
========================================================================= */
type ProjectFilter = "all" | "residential" | "ci" | "hybrid";

interface CaseStudy {
  id: string;
  number: string;
  category: "residential" | "ci" | "hybrid";
  categoryLabel: string;
  badge: string;
  title: string;
  scale: string;
  scope: string;
  location: string;
  status: string;
  image: string;
  borderAccent: string;
  featured?: boolean;
  // 10 Mục Case Study Kỹ Thuật Chi Tiết
  overview: string;
  technicalSpecs: { label: string; value: string }[];
  clientChallenge: string;
  engineeringSolution: string;
  systemDesign: string[];
  executionDetails: string[];
  verifiedResults: { label: string; value: string }[];
  keyEquipment: string[];
  relatedProjectId: string;
  relatedProjectTitle: string;
}

const PROJECTS_DATA: CaseStudy[] = [
  {
    id: "que-vo-factory",
    number: "01",
    category: "ci",
    categoryLabel: "Doanh nghiệp & Nhà xưởng (C&I)",
    badge: "C&I ZERO-EXPORT | 250 KWP",
    title: "Nhà Máy Chế Tạo Cơ Khí Chính Xác – KCN Quế Võ",
    scale: "250 kWp Áp Mái Bám Tải (Zero-Export)",
    scope:
      "Khảo sát kết cấu dầm xà gồ, lập hồ sơ IFC, cung cấp thiết bị Tier-1, thi công cơ điện và tích hợp bộ điều khiển bám tải Smart Meter.",
    location: "KCN Quế Võ, Bắc Ninh",
    status: "Đã đóng điện & Bàn giao O&M",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#00875A]",
    featured: true,
    overview:
      "Hệ thống điện mặt trời tự dùng áp mái cho nhà máy cơ khí chính xác, vận hành đồng bộ với phụ tải máy dập và cắt gọt kim loại ban ngày.",
    technicalSpecs: [
      { label: "Tổng công suất DC", value: "250 kWp (430 Tấm pin N-type TOPCon 580W)" },
      { label: "Cấu hình Biến tần", value: "02 Bộ Inverter chuỗi 110 kW (Tổng 18 MPPT độc lập)" },
      {
        label: "Kiểm soát phát ngược",
        value: "Smart Meter & Zero-Export Controller phản hồi < 1s",
      },
      { label: "Hệ thống tiếp địa", value: "Tiếp địa đẳng thế đo kiểm đạt R = 2.4 Ω (< 4.0 Ω)" },
    ],
    clientChallenge:
      "Phụ tải nhà máy thay đổi liên tục theo chu kỳ dập cơ khí; ban quản lý KCN yêu cầu tuyệt đối không phát ngược bất kỳ lượng điện dư nào ra lưới trung thế.",
    engineeringSolution:
      "Lập trình thuật toán điều chế công suất tức thời theo từng mili-giây; bố trí chuỗi String dọc theo độ dốc mái tôn giúp tản nhiệt và hạ nhiệt độ mái xưởng 3–4°C.",
    systemDesign: [
      "Bố trí mảng pin thành 18 nhánh MPPT độc lập triệt tiêu hiện tượng lệch áp do bụi xưởng cơ khí.",
      "Sơ đồ đơn tuyến SLD tích hợp bảo vệ quá dòng, chống sét lan truyền Type II trên cả hai nhánh AC và DC.",
      "Hành lang kỹ thuật an toàn PCCC rộng 1.5m ngăn cách giữa các khối pin theo quy chuẩn.",
    ],
    executionDetails: [
      "Sử dụng chân kẹp Seamlock nhôm đúc nguyên khối không đục lỗ tôn mái, bảo hành chống thấm 100%.",
      "Luồn toàn bộ cáp DC 1500V chuyên dụng trong máng cáp mạ kẽm nhúng nóng có nắp đậy.",
      "Đo kiểm Megger điện trở cách điện từng chuỗi String trước khi đấu nối vào Inverter.",
    ],
    verifiedResults: [
      { label: "Sản lượng thực tế", value: "32.050 kWh/tháng" },
      { label: "Chỉ số hiệu suất PR", value: "83.4%" },
      { label: "Phát ngược lưới", value: "0.0 W (Tuyệt đối)" },
    ],
    keyEquipment: [
      "Tấm pin N-Type TOPCon 580W Kính Đôi",
      "Inverter Chuỗi Công Nghiệp 110 kW",
      "Cảm biến dòng Smart Power Sensor",
      "Máng cáp mạ kẽm nhúng nóng",
    ],
    relatedProjectId: "gia-lam-logistics",
    relatedProjectTitle: "Kho Logistics & Trung Tâm May Mặc – Gia Lâm",
  },
  {
    id: "starlake-villa",
    number: "02",
    category: "residential",
    categoryLabel: "Gia đình & Biệt thự",
    badge: "RESIDENTIAL HYBRID | 12 KWP + 15 KWH",
    title: "Biệt Thự Khu Đô Thị Starlake – Hà Nội",
    scale: "12 kWp + 15 kWh Pin Lưu Trữ Lithium",
    scope:
      "Thiết kế kỹ thuật giấu dây thẩm mỹ kiến trúc, lắp đặt giàn nhôm ngói dốc, tích hợp khối pin Lithium LiFePO4 và tủ ATS chuyển nguồn tự động.",
    location: "Bắc Từ Liêm, Hà Nội",
    status: "Đang vận hành ổn định",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#FF5722]",
    featured: false,
    overview:
      "Hệ thống điện mặt trời Hybrid cung cấp nguồn điện liên tục 24/7 cho biệt thự cao cấp có phụ tải điều hòa đa vùng và hệ thống an ninh thông minh.",
    technicalSpecs: [
      { label: "Công suất mảng pin", value: "12 kWp (20 Tấm pin N-type TOPCon 600W)" },
      { label: "Biến tần Hybrid", value: "Inverter Hybrid 3 Pha 12 kW (Cấp bảo vệ IP65)" },
      { label: "Khối pin lưu trữ ESS", value: "Lithium LiFePO4 15 kWh (Tuổi thọ ≥ 6.000 chu kỳ)" },
      { label: "Thời gian chuyển mạch", value: "ATS tự động < 10ms (Chuẩn nguồn dự phòng UPS)" },
    ],
    clientChallenge:
      "Mái ngói dốc đa hướng, có cây xanh khuôn viên lân cận gây đổ bóng buổi chiều; chủ nhà yêu cầu không được gián đoạn điều hòa và camera khi mất điện lưới.",
    engineeringSolution:
      "Tách 2 chuỗi MPPT riêng biệt theo hướng Đông - Nam; thiết lập chế độ ưu tiên sạc pin ban ngày và xả pin vào khung giờ cao điểm tối.",
    systemDesign: [
      "Khung giàn hợp kim nhôm Anodized AL6005-T5 chống ăn mòn muối khoáng ngoài trời.",
      "Tủ điện ATS chuyển nguồn tự động tích hợp thiết bị chống sét lan truyền Type II.",
      "Hệ thống ngắt nhanh khẩn cấp Rapid Shutdown đảm bảo an toàn tuyệt đối cho công trình.",
    ],
    executionDetails: [
      "Sử dụng ngàm kẹp ngói chuyên dụng có đệm cao su EPDM không làm nứt vỡ ngói.",
      "Đi dây âm tường và luồn ống bảo vệ chống cháy đạt tiêu chuẩn thẩm mỹ kiến trúc biệt thự.",
      "Cài đặt ứng dụng giám sát năng lượng trực quan thời gian thực trên điện thoại cho gia chủ.",
    ],
    verifiedResults: [
      { label: "Tỷ lệ tự chủ điện", value: "85% Nhu cầu tháng" },
      { label: "Chuyển mạch UPS", value: "< 10 ms" },
      { label: "Bảo hành hiệu suất", value: "30 Năm" },
    ],
    keyEquipment: [
      "Inverter Hybrid 12 kW 3 Pha",
      "Pin Lưu Trữ Lithium LiFePO4 15 kWh",
      "Tấm pin N-Type 600W Hiệu Suất 22.3%",
      "Tủ điện ATS chuyển mạch tự động",
    ],
    relatedProjectId: "long-bien-townhouse",
    relatedProjectTitle: "Nhà Phố Cao Cấp Long Biên – Hà Nội",
  },
  {
    id: "data-center-bess",
    number: "03",
    category: "hybrid",
    categoryLabel: "Hệ thống Hybrid & Lưu trữ thực tế",
    badge: "COMMERCIAL BESS | 30 KW / 60 KWH",
    title: "Trạm Dữ Liệu & Văn Phòng Điều Hành – Hà Nội",
    scale: "30 kW / 60 kWh Lưu Trữ Năng Lượng (BESS)",
    scope:
      "Tích hợp hệ thống lưu trữ pin Rack Lithium LiFePO4, lập trình hệ thống quản lý năng lượng EMS cắt đỉnh phụ tải và cấp nguồn UPS công nghiệp.",
    location: "Long Biên, Hà Nội",
    status: "Vận hành 24/7",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#00875A]",
    featured: false,
    overview:
      "Hệ thống lưu trữ năng lượng thương mại bảo vệ nguồn điện cho hệ thống máy chủ server và tối ưu hóa chi phí mua điện biểu giá 3 giá của EVN.",
    technicalSpecs: [
      { label: "Công suất Inverter", value: "Biến tần Hybrid công nghiệp 30 kW" },
      { label: "Dung lượng BESS", value: "04 Tủ pin Rack Lithium LiFePO4 (60 kWh)" },
      { label: "Hệ thống điều khiển", value: "EMS (Energy Management System) lập trình sạc/xả" },
      { label: "Thời gian chuyển mạch", value: "< 10 ms (Không sập nguồn thiết bị IT)" },
    ],
    clientChallenge:
      "Máy chủ server yêu cầu nguồn điện không bao giờ được phép gián đoạn; chi phí mua điện giờ cao điểm sản xuất trong ngày rất lớn.",
    engineeringSolution:
      "Lập trình EMS tự động sạc pin vào giờ thấp điểm ban đêm (giá rẻ) và xả pin vào giờ cao điểm ban ngày (Peak Shaving); duy trì nguồn UPS dự phòng.",
    systemDesign: [
      "Hệ thống tủ Rack tiêu chuẩn phòng server, tích hợp quạt tản nhiệt cưỡng bức.",
      "Mạch BMS quản lý giám sát điện áp, nhiệt độ từng cell pin theo thời gian thực.",
      "Cơ cấu ngắt khẩn cấp DC tự động cách ly khi phát hiện rò rỉ điện.",
    ],
    executionDetails: [
      "Đấu nối cáp đồng động lực nhiều sợi có bọc cách điện chống cháy.",
      "Đo kiểm nội trở pin và thử nghiệm xả tải định mức 100% trước khi đóng điện.",
      "Tích hợp cảnh báo từ xa qua giao thức Modbus/RS485 về phòng giám sát trung tâm.",
    ],
    verifiedResults: [
      { label: "Tiết kiệm giờ cao điểm", value: "Tối ưu 100%" },
      { label: "Chuyển mạch UPS", value: "< 10 ms" },
      { label: "Dung lượng thực tế", value: "60 kWh" },
    ],
    keyEquipment: [
      "Inverter Hybrid Công Nghiệp 30 kW",
      "Hệ thống Tủ Rack Lithium LiFePO4 60 kWh",
      "Bộ điều khiển năng lượng EMS",
      "Tủ phân phối AC chuyển đổi nguồn",
    ],
    relatedProjectId: "que-vo-factory",
    relatedProjectTitle: "Nhà Máy Chế Tạo Cơ Khí Chính Xác – KCN Quế Võ",
  },
  {
    id: "gia-lam-logistics",
    number: "04",
    category: "ci",
    categoryLabel: "Doanh nghiệp & Nhà xưởng (C&I)",
    badge: "LOGISTICS SOLAR | 100 KWP",
    title: "Kho Logistics & Trung Tâm May Mặc – Gia Lâm",
    scale: "100 kWp Hòa Lưới Bám Tải",
    scope:
      "Khảo sát kết cấu mái tôn Seamlock, thiết kế thi công hệ thống 100 kWp bám tải và đo kiểm tiếp địa an toàn R = 2.1 Ω.",
    location: "Gia Lâm, Hà Nội",
    status: "Đang vận hành ổn định",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#FF5722]",
    featured: false,
    overview:
      "Nguồn điện mặt trời tự dùng phục vụ hệ thống quạt thông gió, chiếu sáng và văn phòng điều hành của trung tâm phân phối kho vận logistics.",
    technicalSpecs: [
      { label: "Công suất hệ thống", value: "100 kWp (172 Tấm pin Mono Half-cell 580W)" },
      { label: "Inverter hòa lưới", value: "01 Bộ Inverter chuỗi công nghiệp 100 kW" },
      { label: "Điện trở tiếp địa", value: "R = 2.1 Ω (Đo kiểm thực tế bằng đồng hồ 3 cực)" },
      { label: "Giám sát vận hành", value: "SCADA Telemetry qua Cloud 24/7" },
    ],
    clientChallenge:
      "Mái nhà kho diện tích lớn chứa nhiều hàng may mặc dễ cháy; chủ đầu tư yêu cầu tuyệt đối không được khoan thủng mái tôn và đảm bảo an toàn PCCC.",
    engineeringSolution:
      "Sử dụng phụ kiện kẹp tôn Seamlock nhôm nguyên khối siết chặt gờ tôn không đục lỗ; bố trí khoảng cách hành lang an toàn 1.5m thông thoáng.",
    systemDesign: [
      "Thiết kế chuỗi String đối xứng giúp Inverter làm việc ở dải điện áp tối ưu.",
      "Tủ điện AC/DC bảo vệ quá áp tích hợp rơ-le ngắt mạch tự động chống hồ quang AFCI.",
      "Cáp DC cách điện kép 1500V đi hoàn toàn trong máng cáp mạ kẽm có nắp đậy.",
    ],
    executionDetails: [
      "Đo kiểm tiếp địa và liên kết đẳng thế toàn bộ giàn nhôm bằng dây đồng tiếp địa M25.",
      "Quét nhiệt hồng ngoại sau 4 giờ phát điện công suất đỉnh xác nhận không có Hot-spot.",
      "Bàn giao tài khoản quản trị trạm điện trên nền tảng đám mây.",
    ],
    verifiedResults: [
      { label: "Sản lượng thực tế", value: "12.280 kWh/tháng" },
      { label: "Chỉ số hiệu suất PR", value: "82.8%" },
      { label: "Chống thấm dột", value: "100% Tuyệt đối" },
    ],
    keyEquipment: [
      "Tấm pin Half-cell 580W",
      "Inverter Chuỗi 100 kW",
      "Chân kẹp Seamlock Nhôm Đúc",
      "Tủ điện bảo vệ AC/DC IP65",
    ],
    relatedProjectId: "starlake-villa",
    relatedProjectTitle: "Biệt Thự Khu Đô Thị Starlake – Hà Nội",
  },
  {
    id: "long-bien-townhouse",
    number: "05",
    category: "residential",
    categoryLabel: "Gia đình & Biệt thự",
    badge: "ROOFTOP SOLAR | 8.2 KWP",
    title: "Nhà Phố Cao Cấp Long Biên – Hà Nội",
    scale: "8.2 kWp Bám Tải (Zero-Export)",
    scope:
      "Thi công giàn khung thép nâng cao đón nắng, lắp đặt biến tần 8 kW hòa lưới bám tải và tủ điện bảo vệ AC/DC chống sét Type II.",
    location: "Long Biên, Hà Nội",
    status: "Đang phát điện",
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1000&auto=format&fit=crop&q=80",
    borderAccent: "border-l-4 border-[#00875A]",
    featured: false,
    overview:
      "Giải pháp cắt giảm triệt để tiền điện rơi vào bậc thang giá cao cho nhà phố nhiều tầng sử dụng nhiều thiết bị điện ban ngày.",
    technicalSpecs: [
      { label: "Công suất lắp đặt", value: "8.2 kWp (14 Tấm pin Half-cell 585W)" },
      { label: "Biến tần bám tải", value: "Inverter 1 Pha 8 kW tích hợp Zero-Export" },
      { label: "Cảm biến đo dòng", value: "CT Sensor đo dòng phụ tải tức thời" },
      { label: "Tủ điện an toàn", value: "Tủ AC/DC tích hợp chống sét lan truyền Type II" },
    ],
    clientChallenge:
      "Mặt bằng sân thượng có bồn nước và giếng trời hạn chế diện tích; gia đình tiêu thụ nhiều điện ban ngày khiến hóa đơn rơi vào bậc giá cao (Bậc 5 - Bậc 6).",
    engineeringSolution:
      "Thiết kế giàn khung cao độ thoáng vừa đón nắng tối đa vừa tạo không gian sinh hoạt sân thượng; lập trình bám tải chống phát ngược lưới.",
    systemDesign: [
      "Giàn khung thép hộp mạ kẽm sơn tĩnh điện chống rỉ sét, chịu gió bão.",
      "Mỗi nhánh pin được tính toán điện áp hở mạch Voc phù hợp dải khởi động của Inverter.",
      "Aptomat chống rò RCBO bảo vệ an toàn cho hệ thống điện sinh hoạt gia đình.",
    ],
    executionDetails: [
      "Cố định chân cột giàn khung bằng tắc kê nở Inox 304 quét 3 lớp màng chống thấm.",
      "Đo kiểm điện trở cách điện dây dẫn trước khi đóng điện.",
      "Cài đặt ứng dụng theo dõi sản lượng và tiền điện tiết kiệm hàng ngày cho gia chủ.",
    ],
    verifiedResults: [
      { label: "Cắt giảm điện bậc cao", value: "100% Bậc 5-6" },
      { label: "Tiết kiệm trung bình", value: "2.5 - 3 Tr/tháng" },
      { label: "Thời gian hoàn vốn", value: "3.6 Năm" },
    ],
    keyEquipment: [
      "Inverter 1 Pha 8 kW",
      "Tấm pin Mặt trời 585W",
      "Cảm biến dòng CT Sensor",
      "Khung giàn thép mạ kẽm chịu lực",
    ],
    relatedProjectId: "starlake-villa",
    relatedProjectTitle: "Biệt Thự Khu Đô Thị Starlake – Hà Nội",
  },
];

/* =========================================================================
   DỮ LIỆU: TỪ MỘT DỰ ÁN ĐẾN MỘT QUY TRÌNH KỸ THUẬT (4 BƯỚC)
========================================================================= */
const PROCESS_PILLARS = [
  {
    step: "01",
    badge: "STAGE 01 | SITE AUDIT",
    title: "Khảo sát",
    desc: "Đo trắc đạc kết cấu cơ khí, độ nghiêng mái, hướng nắng và ghi nhận chính xác biểu đồ phụ tải thực tế của công trình.",
  },
  {
    step: "02",
    badge: "STAGE 02 | IFC DESIGN",
    title: "Thiết kế",
    desc: "Mô phỏng 3D trên PVsyst kiểm soát bóng che và xuất bản vẽ thi công cơ điện IFC tối ưu chuỗi MPPT theo chuẩn EVN.",
  },
  {
    step: "03",
    badge: "STAGE 03 | HSE EXECUTION",
    title: "Triển khai",
    desc: "Cung ứng 100% vật tư Tier-1 có CO/CQ, thi công máng cáp mạ kẽm, tủ điện IP65 và tiếp địa an toàn R < 4.0 Ω.",
  },
  {
    step: "04",
    badge: "STAGE 04 | 25-YEAR O&M",
    title: "Vận hành",
    desc: "Đo kiểm Megger cách điện, quét nhiệt Hot-spot trước khi đóng điện và đồng hành bảo trì O&M suốt 25 năm.",
  },
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Lọc danh sách dự án
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  // Dự án trọng điểm (Featured)
  const featuredProject = useMemo(() => {
    return (
      PROJECTS_DATA.find(
        (p) => p.featured && (activeFilter === "all" || p.category === activeFilter),
      ) || filteredProjects[0]
    );
  }, [activeFilter, filteredProjects]);

  // Các dự án còn lại trong danh sách
  const standardProjects = useMemo(() => {
    return filteredProjects.filter((p) => p.id !== featuredProject?.id);
  }, [filteredProjects, featuredProject]);

  return (
    <div className="w-full bg-white text-[#0B0F19] font-sans antialiased selection:bg-[#FF5722] selection:text-white">
      {/* ============================================================= */}
      {/* 1. HERO SECTION: INDUSTRIAL HIGH-TECH MINIMALISM              */}
      {/* ============================================================= */}
      <section className="relative w-full bg-white border-b border-slate-200 pt-10 pb-14 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Tối Giản */}
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
            <a href="/" className="hover:text-[#0B0F19] transition-colors">
              Trang chủ
            </a>
            <span>/</span>
            <span className="text-[#00875A]">Dự án</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Cột trái: Tiêu đề & Nội dung */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8FAFC] border border-slate-200 text-[#00875A] text-xs font-bold uppercase tracking-wider rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00875A]" />
                <span>PROJECT PORTFOLIO | VERIFIED DATA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#0B0F19] tracking-tight leading-[1.08]">
                HỒ SƠ DỰ ÁN &amp; DỮ LIỆU VẬN HÀNH THỰC TẾ
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl">
                Minh bạch từng thông số kỹ thuật. Mọi công trình do TD VIỆT NAM thiết kế và thi công
                đều được giám sát thời gian thực qua App/Cloud, đối chiếu độ chính xác với mô phỏng
                P50/P90 trước khi đóng điện.
              </p>

              {/* Nút bấm bo tròn hoàn toàn (rounded-full) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#FF5722] hover:bg-[#e64a19] text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105"
                >
                  <span>TRAO ĐỔI VỚI KỸ SƯ</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#projects-grid"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0B0F19] text-xs font-bold uppercase tracking-wider border border-slate-300 transition-colors"
                >
                  <span>KHÁM PHÁ CÔNG TRÌNH</span>
                </a>
              </div>
            </div>

            {/* Cột phải: Hình ảnh công trình thực tế độ nét cao */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/3] bg-neutral-100 border border-slate-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80"
                  alt="Hồ sơ công trình thực tế TD VIỆT NAM"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0B0F19]/95 p-4 text-white border-t border-slate-800">
                  <div className="text-[11px] font-bold text-[#FF5722] uppercase tracking-wide">
                    DỮ LIỆU ĐO KIỂM THỰC TẾ
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    100% công trình đo quét nhiệt hồng ngoại &amp; kiểm tra I-V trước khi đóng điện
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-500 font-medium px-1">
                <span>HẠ TẦNG ĐIỆN &amp; LƯU TRỮ BESS</span>
                <span className="text-[#00875A] font-bold">TD VIỆT NAM</span>
              </div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* BỘ LỌC DỰ ÁN DẠNG NGANG (HORIZONTAL FILTER PILLS)             */}
          {/* ============================================================= */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Tất cả công trình
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("residential")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "residential"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Dự án Gia đình &amp; Biệt thự
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("ci")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "ci"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Dự án Doanh nghiệp &amp; Nhà xưởng (C&amp;I)
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("hybrid")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === "hybrid"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Hệ thống Hybrid &amp; Lưu trữ thực tế
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 2. DẢI CHỈ SỐ KỸ THUẬT BẢO CHỨNG (STATS STRIP)                */}
      {/* ============================================================= */}
      <section className="w-full bg-[#0B0F19] text-white border-y border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="pt-3 sm:pt-0 sm:px-4 first:pl-0 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white">≤ 3.5%</span>
                <span className="text-[9px] font-bold text-[#00875A] bg-[#00875A]/20 px-1.5 py-0.5 border border-[#00875A]/40 rounded">
                  PVSYST VS CLOUD
                </span>
              </div>
              <div className="text-xs font-bold uppercase text-slate-300">ĐỘ LỆCH MÔ PHỎNG</div>
              <p className="text-[11px] text-slate-400 font-normal">
                Kiểm chứng trực tiếp qua dữ liệu SCADA thời gian thực.
              </p>
            </div>

            <div className="pt-3 sm:pt-0 sm:px-4 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#FF5722]">&lt; 10 ms</span>
                <span className="text-[9px] font-bold text-[#FF5722] bg-[#FF5722]/20 px-1.5 py-0.5 border border-[#FF5722]/40 rounded">
                  ATS BACKUP
                </span>
              </div>
              <div className="text-xs font-bold uppercase text-slate-300">CHUYỂN MẠCH HYBRID</div>
              <p className="text-[11px] text-slate-400 font-normal">
                Cung cấp điện liên tục, không tắt máy tính hay thiết bị nhạy cảm.
              </p>
            </div>

            <div className="pt-3 sm:pt-0 sm:px-4 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white">100%</span>
                <span className="text-[9px] font-bold text-[#00875A] bg-[#00875A]/20 px-1.5 py-0.5 border border-[#00875A]/40 rounded">
                  I-V &amp; THERMAL
                </span>
              </div>
              <div className="text-xs font-bold uppercase text-slate-300">
                TIÊU CHUẨN NGHIỆM THU
              </div>
              <p className="text-[11px] text-slate-400 font-normal">
                100% đo quét nhiệt hồng ngoại &amp; kiểm tra I-V trước khi đóng điện.
              </p>
            </div>

            <div className="pt-3 sm:pt-0 sm:px-4 last:pr-0 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#00875A]">&lt; 24h</span>
                <span className="text-[9px] font-bold text-slate-300 bg-slate-800 px-1.5 py-0.5 border border-slate-700 rounded">
                  HIỆN TRƯỜNG
                </span>
              </div>
              <div className="text-xs font-bold uppercase text-slate-300">PHẢN ỨNG KỸ THUẬT</div>
              <p className="text-[11px] text-slate-400 font-normal">
                Kỹ sư có mặt tại hiện trường xử lý sự cố trong vòng 24 giờ làm việc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 3. LƯỚI DỰ ÁN BẤT ĐỐI XỨNG (EDITORIAL ASYMMETRIC GRID)        */}
      {/* ============================================================= */}
      <section
        id="projects-grid"
        className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
                DANH MỤC CÔNG TRÌNH
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                Các Dự Án Đã Thực Hiện
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-semibold uppercase">
              HIỂN THỊ {filteredProjects.length} CÔNG TRÌNH KỸ THUẬT XÁC THỰC
            </p>
          </div>

          <div className="space-y-10">
            {/* THẺ DỰ ÁN TRỌNG ĐIỂM (LỚN HƠN ĐỂ TẠO PHÂN CẤP THỊ GIÁC) */}
            {featuredProject && (
              <div
                className={`bg-white border border-slate-200 ${featuredProject.borderAccent} overflow-hidden hover:border-slate-400 transition-all relative group`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Ảnh công trình lớn */}
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-neutral-100 overflow-hidden">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#0B0F19] text-white px-3 py-1 text-xs font-bold">
                      DỰ ÁN {featuredProject.number}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/95 text-[#0B0F19] px-3 py-1 text-xs font-bold border border-slate-200">
                      {featuredProject.location}
                    </div>
                  </div>

                  {/* Thông tin kỹ thuật cốt lõi */}
                  <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <div className="text-[11px] font-bold text-[#FF5722] uppercase tracking-wide">
                          {featuredProject.badge}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0B0F19] leading-snug">
                          {featuredProject.title}
                        </h3>
                      </div>

                      <div className="p-3 bg-slate-50 border border-slate-200 text-xs">
                        <span className="font-bold text-[#00875A] block uppercase">
                          QUY MÔ CÔNG SUẤT:
                        </span>
                        <span className="text-slate-900 font-semibold">
                          {featuredProject.scale}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-xs font-bold text-slate-900 uppercase">
                          PHẠM VI CÔNG VIỆC:
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                          {featuredProject.scope}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#00875A]">
                        {featuredProject.status}
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy(featuredProject)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF5722] hover:bg-[#e64a19] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <span>Xem dự án</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CÁC THẺ DỰ ÁN CÒN LẠI (LƯỚI BẤT ĐỐI XỨNG 2 CỘT CÓ NÚT CAM ↗) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {standardProjects.map((project) => (
                <div
                  key={project.id}
                  className={`bg-white border border-slate-200 ${project.borderAccent} hover:border-slate-400 transition-all flex flex-col justify-between overflow-hidden group relative`}
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B0F19] text-white px-2.5 py-1 text-xs font-bold">
                        {project.number}
                      </div>
                      <div className="absolute bottom-3 left-3 bg-white/95 text-[#0B0F19] px-2.5 py-0.5 text-xs font-bold border border-slate-200">
                        {project.location}
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 space-y-4">
                      <div className="space-y-1">
                        <div className="text-[11px] font-bold text-[#00875A] uppercase tracking-wide">
                          {project.badge}
                        </div>
                        <h3 className="text-lg font-black uppercase text-[#0B0F19] leading-snug group-hover:text-[#FF5722] transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <div className="p-2.5 bg-slate-50 border border-slate-200 text-xs">
                        <span className="font-bold text-[#FF5722] block uppercase">
                          QUY MÔ CÔNG SUẤT:
                        </span>
                        <span className="text-slate-900 font-semibold">{project.scale}</span>
                      </div>

                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {project.scope}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">{project.status}</span>

                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudy(project)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5722] hover:text-[#e64a19] uppercase tracking-wider cursor-pointer group/btn"
                    >
                      <span>Xem hồ sơ</span>
                      <div className="w-7 h-7 rounded-full bg-[#FF5722] text-white flex items-center justify-center transition-transform group-hover/btn:scale-110">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. TỪ MỘT DỰ ÁN ĐẾN MỘT QUY TRÌNH KỸ THUẬT (4 BƯỚC)          */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
              CHUẨN HÓA THỰC THI
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0B0F19] tracking-tight leading-tight">
              Từ một dự án đến một quy trình kỹ thuật
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              Mỗi công trình dù ở quy mô dân dụng hay công nghiệp đều được TD VIỆT NAM triển khai
              đồng bộ qua 4 giai đoạn chuẩn hóa, kiểm soát chặt chẽ từng thông số kỹ thuật.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {PROCESS_PILLARS.map((step, idx) => (
              <div
                key={idx}
                className="pt-6 lg:pt-0 lg:px-6 first:pl-0 last:pr-0 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-black text-slate-300">
                      {step.step}
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 px-2 py-0.5 border border-slate-200 rounded-full">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase text-[#0B0F19]">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 text-xs font-bold text-[#00875A] uppercase">
                  GIAI ĐOẠN 0{idx + 1}
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
                  Mỗi kWp lắp đặt trên mái công trình là một cam kết về an toàn cơ điện và sản lượng
                  phát điện thực tế. Chúng tôi đo lường uy tín bằng số kWh tạo ra mỗi tháng, không
                  bằng những lời hứa suông.
                </blockquote>
                <div className="pt-2 text-xs text-slate-400 font-medium">
                  NGUYÊN TẮC QUẢN TRỊ DỰ ÁN &amp; KIỂM ĐỊNH HIỆN TRƯỜNG
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
      {/* 5. MODAL CHI TIẾT DỰ ÁN (ENGINEERING CASE STUDY MODAL)        */}
      {/* ============================================================= */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 space-y-8 text-[#0B0F19]">
            {/* Header Modal */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#FF5722] uppercase">
                    HỒ SƠ KỸ THUẬT {selectedCaseStudy.number}
                  </span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-xs font-bold text-[#00875A] uppercase">
                    {selectedCaseStudy.categoryLabel}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0B0F19] leading-snug">
                  {selectedCaseStudy.title}
                </h3>
                <div className="text-xs font-semibold text-neutral-500 flex items-center gap-3 pt-1">
                  <span>{selectedCaseStudy.location}</span>
                  <span>•</span>
                  <span className="text-[#00875A]">{selectedCaseStudy.status}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 text-slate-400 hover:text-slate-900 border border-slate-200 hover:border-slate-900 transition-colors cursor-pointer flex-shrink-0 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cấu Trúc 10 Mục Case Study */}
            <div className="space-y-8 text-xs sm:text-sm">
              {/* 1. Tổng quan dự án */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
                  1. TỔNG QUAN DỰ ÁN
                </div>
                <p className="text-slate-700 leading-relaxed font-normal bg-slate-50 p-4 border border-slate-200 border-l-4 border-l-[#00875A]">
                  {selectedCaseStudy.overview}
                </p>
              </div>

              {/* 2. Thông tin kỹ thuật */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
                  2. THÔNG TIN KỸ THUẬT TIÊU CHUẨN
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCaseStudy.technicalSpecs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 bg-[#F8FAFC] border border-slate-200 space-y-0.5"
                    >
                      <div className="text-xs font-bold text-slate-900 uppercase">{spec.label}</div>
                      <div className="text-slate-600 font-medium">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 & 4. Bài toán của khách hàng & Giải pháp kỹ thuật */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#FF5722] uppercase tracking-wider">
                    3. BÀI TOÁN CỦA KHÁCH HÀNG
                  </div>
                  <p className="text-slate-700 leading-relaxed font-normal p-4 bg-slate-50 border border-slate-200 h-full border-l-4 border-l-[#FF5722]">
                    {selectedCaseStudy.clientChallenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
                    4. GIẢI PHÁP KỸ THUẬT TD VIỆT NAM
                  </div>
                  <p className="text-slate-700 leading-relaxed font-normal p-4 bg-slate-50 border border-slate-200 h-full border-l-4 border-l-[#00875A]">
                    {selectedCaseStudy.engineeringSolution}
                  </p>
                </div>
              </div>

              {/* 5. Thiết kế hệ thống */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
                  5. THIẾT KẾ HỆ THỐNG &amp; SƠ ĐỒ ĐƠN TUYẾN
                </div>
                <div className="space-y-2 p-4 bg-white border border-slate-200">
                  {selectedCaseStudy.systemDesign.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-slate-700">
                      <Check className="w-4 h-4 text-[#00875A] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Triển khai thi công */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
                  6. QUÁ TRÌNH TRIỂN KHAI &amp; KIỂM ĐỊNH HIỆN TRƯỜNG
                </div>
                <div className="space-y-2 p-4 bg-white border border-slate-200">
                  {selectedCaseStudy.executionDetails.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00875A] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Kết quả xác thực */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
                  7. KẾT QUẢ VẬN HÀNH XÁC THỰC
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedCaseStudy.verifiedResults.map((res, rIdx) => (
                    <div key={rIdx} className="p-3.5 bg-[#0B0F19] text-white text-center space-y-1">
                      <div className="text-base sm:text-lg font-black text-[#00875A]">
                        {res.value}
                      </div>
                      <div className="text-[11px] text-slate-400 uppercase font-medium">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 8. Hình ảnh thực tế */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
                  8. HÌNH ẢNH CÔNG TRÌNH THỰC TẾ
                </div>
                <div className="relative aspect-[16/9] bg-neutral-100 border border-slate-200 overflow-hidden">
                  <img
                    src={selectedCaseStudy.image}
                    alt={selectedCaseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 9. Thiết bị chính */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#00875A] uppercase tracking-wider">
                  9. THIẾT BỊ CHÍNH ĐƯỢC TÍCH HỢP
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.keyEquipment.map((eq, eIdx) => (
                    <span
                      key={eIdx}
                      className="px-3 py-1.5 bg-[#F8FAFC] border border-slate-200 text-xs font-bold text-slate-800 rounded"
                    >
                      • {eq}
                    </span>
                  ))}
                </div>
              </div>

              {/* 10. Dự án liên quan */}
              <div className="p-4 bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">
                    10. DỰ ÁN THAM KHẢO LIÊN QUAN
                  </div>
                  <div className="text-xs font-bold text-[#0B0F19]">
                    {selectedCaseStudy.relatedProjectTitle}
                  </div>
                </div>
                <a
                  href="/projects"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="text-xs font-bold text-[#FF5722] hover:text-[#e64a19] uppercase underline flex items-center gap-1"
                >
                  <span>Xem danh mục</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase transition-colors cursor-pointer"
                >
                  Đóng hồ sơ
                </button>
                <a
                  href="/contact"
                  className="px-6 py-2.5 rounded-full bg-[#FF5722] hover:bg-[#e64a19] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Tư vấn công trình tương tự
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* 6. FINAL CTA: TỐI GIẢN & SOLID CAM BUTTON                    */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 p-8 sm:p-12 lg:p-16 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00875A] uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>KẾT NỐI KỸ THUẬT DỰ ÁN</span>
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
                <span>TẢI HỒ SƠ NĂNG LỰC (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
