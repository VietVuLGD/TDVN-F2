import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Mail,
  Check,
  ChevronRight,
  CheckCircle2,
  Download,
  Zap,
  X,
} from "lucide-react";
import { useState } from "react";

const title = "Sản Phẩm & Hệ Thống Năng Lượng Chuẩn Công Nghiệp | TD VIỆT NAM";
const description =
  "Cung cấp hệ thống điện mặt trời trọn gói (On-grid, Hybrid) và danh mục 5 thiết bị năng lượng chuyên dụng: Inverter, Tấm pin N-Type TOPCon, Pin lưu trữ Lithium LiFePO4, Tủ điện Switchgear và Đèn mặt trời.";

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
   1. DỮ LIỆU: NHÓM 1 - HỆ THỐNG TRỌN GÓI (TURNKEY SYSTEMS)
========================================================================= */
interface TurnkeySystem {
  id: string;
  code: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
  targetScale: string;
}

const TURNKEY_SYSTEMS: TurnkeySystem[] = [
  {
    id: "solar-ongrid",
    code: "SYSTEM-01",
    tag: "HÒA LƯỚI BÁM TẢI (ZERO-EXPORT)",
    title: "Hệ Thống Solar On-grid",
    subtitle: "Giải pháp cắt giảm chi phí điện năng ban ngày",
    desc: "Hệ thống điện mặt trời hòa lưới dành cho các công trình có nhu cầu sử dụng điện trực tiếp từ hệ thống quang năng ban ngày. Nguồn điện mặt trời được ưu tiên cấp cho phụ tải tiêu thụ tại chỗ, tự động điều chế công suất thông qua cảm biến Smart Meter, tuyệt đối không phát ngược điện ra lưới.",
    features: [
      "Cắt giảm trực tiếp tiền điện sinh hoạt bậc cao (Bậc 4, 5, 6) hoặc giá điện sản xuất giờ cao điểm.",
      "Chi phí đầu tư ban đầu (CAPEX) tối ưu nhất, thời gian thu hồi vốn nhanh từ 3.5 – 4.5 năm.",
      "Hệ thống tự động đồng bộ theo biểu đồ phụ tải thực tế, vận hành bền bỉ trên 25 năm.",
    ],
    specs: [
      { label: "Quy mô áp dụng", value: "3 kWp – 100 kWp+" },
      { label: "Cơ chế phát lưới", value: "Zero-Export bám tải 100%" },
      { label: "Hiệu suất hoàn vốn", value: "3.5 – 4.5 Năm" },
      { label: "Giám sát vận hành", value: "Cloud / App 24/7" },
    ],
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80",
    targetScale: "Nhà phố, Biệt thự, Nhà xưởng sản xuất, Kho logistics, Trang trại",
  },
  {
    id: "solar-hybrid",
    code: "SYSTEM-02",
    tag: "LƯU TRỮ NĂNG LƯỢNG 24/7 (ESS)",
    title: "Hệ Thống Solar Hybrid",
    subtitle: "Tự chủ năng lượng & Nguồn điện dự phòng liên tục",
    desc: "Hệ thống kết hợp đồng bộ giữa mảng pin mặt trời, khối pin lưu trữ Lithium LiFePO4 và nguồn điện lưới. Ban ngày nạp đầy pin và cấp tải; ban đêm xả pin phục vụ sinh hoạt. Khi mất điện lưới, hệ thống tự động chuyển nguồn UPS trong thời gian dưới 10ms để duy trì tải thiết yếu.",
    features: [
      "Tự chủ từ 80% đến 95% lượng điện năng tiêu thụ, không lo gián đoạn khi sự cố mất điện lưới.",
      "Chuyển mạch tự động ATS tốc độ cao (< 10ms), bảo vệ an toàn máy chủ, camera và điều hòa.",
      "Tính năng cắt đỉnh phụ tải (Peak Shaving) tiết kiệm tối đa tiền điện biểu giá 3 giá của EVN.",
    ],
    specs: [
      { label: "Quy mô Inverter", value: "5 kW – 30 kW (1 Pha / 3 Pha)" },
      { label: "Dung lượng Pin ESS", value: "5.12 kWh – 60 kWh LiFePO4" },
      { label: "Chuyển mạch UPS", value: "< 10 ms (Cấp nguồn liên tục)" },
      { label: "Vòng đời pin lưu trữ", value: "≥ 6.000 Chu kỳ sạc/xả" },
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    targetScale: "Biệt thự cao cấp, Tòa nhà văn phòng, Phòng khám y tế, Trạm máy chủ dữ liệu",
  },
];

/* =========================================================================
   2. DỮ LIỆU: NHÓM 2 - 5 DANH MỤC THIẾT BỊ NĂNG LƯỢNG (EQUIPMENT)
========================================================================= */
interface TechnicalProduct {
  id: string;
  category: string;
  categoryLabel: string;
  number: string;
  title: string;
  model: string;
  type: string;
  desc: string;
  specs: { label: string; value: string }[];
  features: string[];
  applications: string;
  compatibility: string;
  datasheetUrl: string;
  image: string;
}

const EQUIPMENT_CATEGORIES_DATA = [
  {
    id: "inverters",
    number: "01",
    name: "Biến Tần (Inverter)",
    subtitle: "Hòa lưới chuỗi, Hybrid & BESS công nghiệp",
    desc: "Thiết bị chuyển đổi quang năng DC thành dòng điện xoay chiều AC với hiệu suất cực đại ≥ 98.4%, dải điện áp làm việc rộng và tích hợp ngắt hồ quang AFCI chống cháy nổ.",
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
    highlightSpec: "Hiệu suất ≥ 98.4% • Chuẩn IP65/IP66",
    models: [
      {
        id: "inv-ongrid-string",
        category: "inverters",
        categoryLabel: "Biến Tần (Inverter)",
        number: "01",
        title: "Biến Tần Chuỗi Hòa Lưới On-grid (3kW – 110kW)",
        model: "String Inverter Dân Dụng & Công Nghiệp",
        type: "Biến tần chuỗi hòa lưới đa MPPT",
        desc: "Thiết bị chuyển đổi quang năng DC/AC hiệu suất cao, tích hợp từ 2 đến 10 cổng MPPT độc lập giúp tối đa hóa sản lượng phát điện khi mái có nhiều hướng dốc.",
        specs: [
          { label: "Dải công suất định mức", value: "3 kW – 110 kW (1 Pha 220V / 3 Pha 380V)" },
          { label: "Hiệu suất chuyển đổi cực đại", value: "≥ 98.4% (Chuẩn Châu Âu 98.1%)" },
          {
            label: "Bảo vệ an toàn chủ động",
            value: "Tích hợp AFCI ngắt hồ quang DC chống cháy nổ",
          },
          { label: "Cấp bảo vệ môi trường", value: "IP65 / IP66 (Hoạt động bền bỉ ngoài trời)" },
          { label: "Giao tiếp & Giám sát", value: "Wi-Fi / RS485 / Ethernet / Cloud SCADA" },
        ],
        features: [
          "Dải điện áp khởi động MPPT thấp giúp hệ thống phát điện sớm từ sáng sớm đến chiều muộn.",
          "Quét đường cong đặc tính I-V thông minh phát hiện chính xác vị trí tấm pin suy giảm công suất.",
          "Tích hợp sẵn cổng kết nối điều khiển bám tải Zero-Export với Smart Meter qua cổng RS485.",
        ],
        applications: "Áp mái nhà phố, biệt thự, nhà xưởng sản xuất, nhà kho trung tâm logistics.",
        compatibility:
          "Tương thích hoàn toàn với các dòng tấm pin mặt trời N-type TOPCon, Bifacial và Mono Half-cell.",
        datasheetUrl: "/downloads",
        image:
          "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1000&auto=format&fit=crop&q=80",
      },
      {
        id: "inv-hybrid-ess",
        category: "inverters",
        categoryLabel: "Biến Tần (Inverter)",
        number: "01",
        title: "Biến Tần Lưu Trữ Hybrid Đa Năng (5kW – 30kW)",
        model: "Hybrid Energy Storage Inverter",
        type: "Biến tần lai tích hợp cổng sạc/xả pin lưu trữ Lithium",
        desc: "Thiết bị trung tâm quản lý năng lượng thông minh, điều phối nguồn điện giữa dàn pin mặt trời, khối pin lưu trữ và lưới điện với khả năng chuyển mạch UPS < 10ms.",
        specs: [
          { label: "Công suất ngõ ra AC", value: "5 kW – 30 kW (Hỗ trợ lệch pha 100%)" },
          {
            label: "Điện áp pin lưu trữ",
            value: "Dải hạ áp 48V (Gia đình) hoặc Cao áp HV 150V–600V",
          },
          {
            label: "Thời gian chuyển mạch UPS",
            value: "< 10 ms (Không gián đoạn thiết bị nhạy cảm)",
          },
          { label: "Hiệu suất sạc/xả pin", value: "≥ 95.5%" },
          { label: "Khả năng ghép song song", value: "Hỗ trợ mở rộng lên đến 10 bộ song song" },
        ],
        features: [
          "Chế độ vận hành đa dạng: Tự dùng tối đa, Cắt đỉnh phụ tải (Peak Shaving), Nguồn dự phòng UPS.",
          "Giao tiếp CAN/RS485 đồng bộ trực tiếp với mạch BMS của các khối pin Lithium LiFePO4.",
          "Cấp bảo vệ IP65, thiết kế vỏ hợp kim nhôm đúc tản nhiệt tự nhiên êm ái, không gây ồn.",
        ],
        applications:
          "Biệt thự cao cấp, văn phòng điều hành, trạm dữ liệu máy chủ, phòng khám y tế.",
        compatibility:
          "Đồng bộ với các thương hiệu pin lưu trữ Lithium LiFePO4 Tier-1 chuẩn quốc tế.",
        datasheetUrl: "/downloads",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "solar-panels",
    number: "02",
    name: "Tấm Quang Năng (Solar PV Panels)",
    subtitle: "Công nghệ N-Type TOPCon & Kính đôi hai mặt",
    desc: "Tấm pin quang điện đơn tinh thể thế hệ mới nhất công suất 580W – 620W+, hiệu suất chuyển đổi > 22.5%, hệ số suy hao nhiệt cực thấp và bảo hành hiệu suất 30 năm.",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80",
    highlightSpec: "Hiệu suất > 22.5% • Bảo hành 30 năm",
    models: [
      {
        id: "panel-topcon-bifacial",
        category: "solar-panels",
        categoryLabel: "Tấm Quang Năng",
        number: "02",
        title: "Tấm Pin N-Type TOPCon Kính Đôi Hai Mặt (580W – 620W+)",
        model: "N-Type TOPCon Dual-Glass Bifacial Module",
        type: "Mô-đun quang điện đơn tinh thể N-Type 144 Cell",
        desc: "Tấm pin công nghệ tế bào N-Type TOPCon tiên tiến nhất, hấp thụ bức xạ cả 2 mặt trước và sau giúp gia tăng thêm 10% – 25% tổng sản lượng điện phát ra.",
        specs: [
          {
            label: "Công suất định mức (Pmax)",
            value: "580W – 620W+ (Dung sai công suất dương 0~+5W)",
          },
          { label: "Hiệu suất mô-đun cực đại", value: "> 22.5%" },
          { label: "Hệ số suy hao nhiệt độ", value: "-0.30%/°C (Hoạt động mát hơn trong mùa hè)" },
          { label: "Hệ số phát điện mặt sau", value: "80% ± 5% (Bifaciality)" },
          {
            label: "Bảo hành hiệu suất tuyến tính",
            value: "30 Năm (Năm đầu suy hao < 1%, các năm sau < 0.4%)",
          },
        ],
        features: [
          "Kháng hiện tượng suy giảm công suất do ánh sáng (LID) và suy giảm do điện áp (PID) tuyệt đối.",
          "Cấu trúc kính cường lực đôi 2 mặt dày 2.0mm tăng cường độ chịu lực, chống ăn mòn hóa chất và sương muối.",
          "Khung nhôm Anodized chịu tải trọng gió bão 2400 Pa và tải trọng nén 5400 Pa.",
        ],
        applications:
          "Lắp đặt áp mái nhà xưởng công nghiệp, mái tôn biệt thự, giàn khung sân thượng và trang trại nông nghiệp.",
        compatibility:
          "Tương thích hoàn hảo với tất cả các dòng Inverter On-grid và Hybrid điện áp chuỗi DC 1500V.",
        datasheetUrl: "/downloads",
        image:
          "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1000&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "battery-storage",
    number: "03",
    name: "Pin Lưu Trữ (Lithium Storage / ESS)",
    subtitle: "Khối pin Lithium LiFePO4 treo tường & Tủ Rack",
    desc: "Lõi cell pin Lithium Iron Phosphate (LiFePO4) chuẩn an toàn chống cháy nổ, tuổi thọ trên 6.000 chu kỳ sạc/xả ở độ sâu xả 80% DoD, tích hợp mạch BMS thông minh.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    highlightSpec: "≥ 6.000 Chu kỳ • Cell LiFePO4 an toàn",
    models: [
      {
        id: "battery-lifepo4-rack",
        category: "battery-storage",
        categoryLabel: "Pin Lưu Trữ",
        number: "03",
        title: "Khối Pin Lưu Trữ Lithium LiFePO4 (5.12 kWh – 60 kWh+)",
        model: "LiFePO4 Energy Storage Module (Wall & Rack Mount)",
        type: "Khối lưu trữ năng lượng pin Lithium Iron Phosphate",
        desc: "Hệ thống pin lưu trữ điện năng chuyên dụng cho giải pháp Hybrid và Microgrid, tích hợp mạch quản lý BMS giám sát điện áp, nhiệt độ từng cell theo thời gian thực.",
        specs: [
          {
            label: "Dung lượng danh định",
            value: "5.12 kWh / Module (Ghép song song đến 15 bộ = 76.8 kWh)",
          },
          {
            label: "Điện áp định mức",
            value: "51.2V DC (Hạ áp) hoặc 204.8V – 614.4V DC (Cao áp HV)",
          },
          { label: "Vòng đời hoạt động (Cycle Life)", value: "≥ 6.000 Chu kỳ @ 80% DoD, 25°C" },
          { label: "Hiệu suất sạc/xả chu trình", value: "≥ 95%" },
          { label: "Giao thức truyền thông", value: "CAN / RS485 / RS232" },
        ],
        features: [
          "Độ ổn định nhiệt và hóa học vượt trội, không xảy ra hiện tượng quá nhiệt phân rã (Thermal Runaway).",
          "Mạch BMS thông minh bảo vệ đa tầng: quá dòng, quá áp, dưới áp, quá nhiệt và cân bằng cell pin tự động.",
          "Hỗ trợ dòng nạp/xả lớn 0.5C – 1.0C đáp ứng tức thời công suất khởi động của động cơ, máy nén điều hòa.",
        ],
        applications:
          "Lưu trữ điện biệt thự, hộ gia đình cao cấp, nhà xưởng sản xuất, trạm viễn thông và nguồn dự phòng UPS.",
        compatibility: "Đồng bộ hóa 100% với các thương hiệu Inverter Hybrid phổ biến hàng đầu.",
        datasheetUrl: "/downloads",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "switchgear-cabinets",
    number: "04",
    name: "Tủ Điện & Thiết Bị Bảo Vệ (Switchgear)",
    subtitle: "Tủ phân phối AC/DC, Tủ ATS & Chống sét lan truyền",
    desc: "Tủ điện kỹ thuật thiết kế và gia công đấu nối chuẩn công nghiệp, trang bị thiết bị đóng cắt MCB/MCCB, cầu chì DC 1500V, chống sét SPD Type II và cấp bảo vệ IP65.",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&auto=format&fit=crop&q=80",
    highlightSpec: "Chống sét Type II • Cấp bảo vệ IP65",
    models: [
      {
        id: "cabinet-ac-dc-custom",
        category: "switchgear-cabinets",
        categoryLabel: "Tủ Điện & Bảo Vệ",
        number: "04",
        title: "Tủ Điện Đóng Cắt Phân Phối AC/DC & Chống Sét Type II",
        model: "Custom Industrial Distribution Switchgear",
        type: "Tủ điện kỹ thuật chuyên dụng cho hệ thống năng lượng mặt trời",
        desc: "Tủ điện tích hợp trọn bộ thiết bị đóng cắt bảo vệ chuỗi pin DC, thiết bị đóng cắt ngõ ra AC, chống sét lan truyền chuyên dụng và bộ đo đếm thông minh Smart Meter.",
        specs: [
          {
            label: "Điện áp định mức DC",
            value: "1000V / 1500V DC (Cầu chì gPV & Cầu dao cách ly DC)",
          },
          {
            label: "Điện áp định mức AC",
            value: "220V / 380V – 400V AC (MCB / MCCB chống rò RCBO)",
          },
          {
            label: "Thiết bị chống sét lan truyền",
            value: "SPD Type II DC 1000V/1500V & SPD Type II AC 40kA",
          },
          {
            label: "Vỏ tủ kỹ thuật",
            value: "Thép sơn tĩnh điện chống ăn mòn hoặc Composite IP65 ngoài trời",
          },
          {
            label: "Thanh cái đồng & Phụ kiện",
            value: "Đồng đỏ mạ thiếc 99.9%, nhãn mác sơ đồ mạch chuẩn công nghiệp",
          },
        ],
        features: [
          "Thiết kế đồng bộ theo từng công suất công trình, đảm bảo an toàn tuyệt đối theo tiêu chuẩn TCVN / IEC.",
          "Tích hợp sẵn rơ-le bảo vệ quá áp, thấp áp, mất pha và đảo pha trên lưới điện nguồn.",
          "Được kiểm định đo điện trở cách điện Megger và test vận hành đóng cắt 100% tại xưởng trước khi xuất xưởng.",
        ],
        applications:
          "Bảo vệ đóng cắt cho hệ thống On-grid, Hybrid từ quy mô dân dụng 5 kW đến công nghiệp 500 kW+.",
        compatibility:
          "Kết nối tương thích với mọi chủng loại biến tần hòa lưới và tủ phân phối tổng MSB hiện hữu.",
        datasheetUrl: "/downloads",
        image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=1000&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "solar-lighting",
    number: "05",
    name: "Đèn Năng Lượng Mặt Trời (Solar Lighting)",
    subtitle: "Đèn đường công nghiệp & Đèn pha trang trại",
    desc: "Hệ thống đèn chiếu sáng độc lập trang bị chip LED lumens cao, tấm pin Mono nạp nhanh và pin Lithium LiFePO4 dung lượng thực, duy trì chiếu sáng liên tục 12–16 giờ.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
    highlightSpec: "Chiếu sáng 12–16h • Chip LED Lumens cao",
    models: [
      {
        id: "light-street-industrial",
        category: "solar-lighting",
        categoryLabel: "Đèn Năng Lượng Mặt Trời",
        number: "05",
        title: "Đèn Đường & Đèn Pha Năng Lượng Mặt Trời Công Nghiệp",
        model: "Industrial Solar Street & Flood Light System",
        type: "Đèn chiếu sáng năng lượng mặt trời nguyên khối cao cấp",
        desc: "Giải pháp chiếu sáng độc lập 100% không cần kéo dây điện lưới cho đường nội bộ nhà máy, kho bãi, khuôn viên biệt thự, trang trại và đường giao thông.",
        specs: [
          {
            label: "Công suất quang thông",
            value: "150W – 400W (Hiệu suất phát quang ≥ 170 lm/W)",
          },
          {
            label: "Tấm thu quang năng",
            value: "Tấm pin Mono đơn tinh thể sạc nhanh 4–6 giờ nắng",
          },
          {
            label: "Khối pin lưu trữ",
            value: "Lithium LiFePO4 dung lượng thực tuổi thọ trên 5 năm",
          },
          { label: "Cấp bảo vệ chống nước & bụi", value: "IP66 / Chống va đập chuẩn IK08" },
          {
            label: "Thời gian chiếu sáng liên tục",
            value: "12 – 16 Giờ (Tự động cảm biến ánh sáng ngày/đêm)",
          },
        ],
        features: [
          "Vỏ hợp kim nhôm đúc áp lực nguyên khối giúp tản nhiệt siêu tốc, chống han gỉ và chịu thời tiết khắc nghiệt.",
          "Chip LED Bridgelux / Philips chất lượng cao, góc chiếu sáng rộng 140° không gây chói lóa mắt.",
          "Tích hợp remote điều khiển từ xa hẹn giờ và điều chỉnh mức độ sáng linh hoạt.",
        ],
        applications:
          "Chiếu sáng đường nội bộ nhà máy KCN, bãi đỗ xe logistics, khuôn viên resort, đường nông thôn mới.",
        compatibility:
          "Hoạt động hoàn toàn độc lập, dễ dàng lắp đặt trên cột thép tròn hoặc tường nhà xưởng.",
        datasheetUrl: "/downloads",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80",
      },
    ],
  },
];

/* =========================================================================
   3. DỮ LIỆU: LỰA CHỌN THEO NHU CẦU THỰC TẾ
========================================================================= */
const APPLICATION_NEEDS = [
  {
    number: "01",
    need: "Muốn cắt giảm hóa đơn tiền điện mua từ lưới ban ngày",
    target: "Hệ Thống Solar On-grid (Bám Tải)",
    desc: "Lựa chọn phương án đầu tư tối ưu nhất cho nhà máy sản xuất, trung tâm kho bãi hoặc hộ gia đình dùng nhiều điện ban ngày. Không phát ngược điện dư lên lưới EVN.",
    actionText: "Xem cấu hình On-grid",
    actionLink: "#turnkey-systems",
  },
  {
    number: "02",
    need: "Muốn kết hợp điện mặt trời và lưu trữ điện dùng ban đêm / khi mất lưới",
    target: "Hệ Thống Solar Hybrid (Có Lưu Trữ)",
    desc: "Duy trì nguồn điện liên tục 24/7 cho biệt thự, văn phòng, phòng khám y tế. Tự động chuyển nguồn UPS trong thời gian dưới 10ms khi có sự cố lưới điện.",
    actionText: "Xem cấu hình Hybrid",
    actionLink: "#turnkey-systems",
  },
  {
    number: "03",
    need: "Muốn bổ sung dung lượng pin lưu trữ hoặc xây dựng nguồn điện độc lập",
    target: "Khối Pin Lưu Trữ Lithium LiFePO4 & ESS",
    desc: "Nâng cấp hệ thống sẵn có để cắt đỉnh phụ tải giờ cao điểm, hoặc thiết lập nguồn điện độc lập (Off-grid) cho trang trại, khu bảo tồn vùng xa lưới điện.",
    actionText: "Xem Pin lưu trữ",
    actionLink: "#equipment-catalog",
  },
  {
    number: "04",
    need: "Muốn thay thế biến tần, lắp tủ điện bảo vệ hoặc chiếu sáng khuôn viên",
    target: "Thiết Bị & Phụ Kiện Cơ Điện Chuyên Dụng",
    desc: "Cung cấp Inverter Tier-1, tấm pin TOPCon hiệu suất cao, tủ điện đóng cắt AC/DC chống sét Type II và hệ thống đèn mặt trời công nghiệp chất lượng cao.",
    actionText: "Xem danh mục thiết bị",
    actionLink: "#equipment-catalog",
  },
];

/* =========================================================================
   4. DỮ LIỆU: TIÊU CHUẨN PHẦN CỨNG & KIỂM ĐỊNH (HARDWARE QA)
========================================================================= */
const HARDWARE_COMMITMENTS = [
  {
    number: "01",
    title: "100% Nguồn Gốc Xuất Xứ Minh Bạch",
    desc: "Mọi thiết bị Inverter, Tấm pin quang năng và Khối pin lưu trữ đều được nhập khẩu chính ngạch từ các thương hiệu Tier-1 toàn cầu, có đầy đủ chứng chỉ xuất xứ (CO) và chứng chỉ chất lượng (CQ).",
  },
  {
    number: "02",
    title: "Kiểm Thử Kỹ Thuật Trước Khi Giao Hàng",
    desc: "Đội ngũ kỹ sư TD VIỆT NAM trực tiếp đo kiểm thông số điện áp hở mạch, nạp xả thử nghiệm pin lưu trữ và nạp sẵn phiên bản Firmware ổn định nhất trước khi bàn giao đến chân công trình.",
  },
  {
    number: "03",
    title: "Bảo Hành Trực Tiếp Tại Việt Nam",
    desc: "Kích hoạt bảo hành điện tử chính hãng từ nhà sản xuất. TD VIỆT NAM duy trì thiết bị dự phòng thay thế tạm thời trong thời gian bảo hành để đảm bảo nguồn điện của khách hàng không bị gián đoạn.",
  },
];

export function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<TechnicalProduct | null>(null);

  return (
    <div className="w-full bg-white text-[#0B0F19] font-sans antialiased selection:bg-[#008A4B] selection:text-white">
      {/* ============================================================= */}
      {/* 1. HERO SECTION: MINIMAL TECHNICAL CATALOG OPENING            */}
      {/* ============================================================= */}
      <section className="relative w-full bg-[#0B0F19] text-white pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#008A4B]/20 border-l-2 border-[#008A4B] text-[#008A4B] text-xs font-bold uppercase tracking-wider">
            <span>SẢN PHẨM &amp; HỆ THỐNG</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Cột trái: Tiêu đề lớn & Định hướng kỹ thuật */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.08]">
                SẢN PHẨM CHO HỆ THỐNG NĂNG LƯỢNG HIỆN ĐẠI
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl">
                Cung cấp các cấu hình hệ thống điện mặt trời trọn gói và danh mục thiết bị năng
                lượng chuyên dụng chuẩn công nghiệp. Khách hàng có thể bắt đầu từ một giải pháp đồng
                bộ hoàn chỉnh hoặc lựa chọn từng thiết bị kỹ thuật theo yêu cầu công trình.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#turnkey-systems"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#008A4B] hover:bg-[#00703C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#008A4B]/20 hover:scale-[1.02]"
                >
                  <span>XEM HỆ THỐNG TRỌN GÓI</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#equipment-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 backdrop-blur-xs transition-colors"
                >
                  <span>XEM THIẾT BỊ NĂNG LƯỢNG</span>
                </a>
              </div>
            </div>

            {/* Cột phải: Composition thiết bị kỹ thuật lớn */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/3] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80"
                  alt="Hệ sinh thái thiết bị điện mặt trời và lưu trữ BESS TD VIỆT NAM"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0B0F19]/90 backdrop-blur-xs p-4 text-white border-t border-neutral-800">
                  <div className="text-[11px] font-bold text-[#F15A24] uppercase tracking-wide">
                    HỆ SINH THÁI THIẾT BỊ CHÍNH HÃNG TIER-1
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Tấm quang năng • Biến tần • Pin lưu trữ • Tủ điện đóng cắt
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400 font-medium px-1">
                <span>TIÊU CHUẨN KỸ THUẬT &amp; CO/CQ ĐẦY ĐỦ</span>
                <span className="text-[#008A4B] font-bold">TD VIỆT NAM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Tối Giản */}
      <div className="w-full bg-[#F8FAFC] border-b border-neutral-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-semibold text-neutral-500 flex items-center gap-2">
          <a href="/" className="hover:text-[#0B0F19] transition-colors">
            Trang chủ
          </a>
          <span>/</span>
          <span className="text-[#008A4B]">Sản phẩm &amp; Thiết bị</span>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 2. NHÓM 1: HỆ THỐNG TRỌN GÓI (SOLAR ON-GRID & SOLAR HYBRID)   */}
      {/* ============================================================= */}
      <section
        id="turnkey-systems"
        className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#008A4B] uppercase tracking-wider">
              NHÓM 01 • GIẢI PHÁP ĐỒNG BỘ
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#0B0F19] tracking-tight leading-tight">
              Hệ Thống Năng Lượng Trọn Gói
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              TD VIỆT NAM không chỉ cung ứng thiết bị đơn lẻ mà trực tiếp khảo sát, mô phỏng và xây
              dựng cấu hình hệ thống hoàn chỉnh, tối ưu theo đúng đặc thù phụ tải và mặt bằng công
              trình.
            </p>
          </div>

          <div className="space-y-12">
            {TURNKEY_SYSTEMS.map((system) => (
              <div
                key={system.id}
                className="border border-neutral-200 bg-[#F8FAFC] overflow-hidden shadow-xs hover:border-[#0B0F19] transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
                  {/* Cột trái: Khối hình ảnh công trình lớn */}
                  <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto bg-neutral-100 overflow-hidden flex flex-col justify-between">
                    <img
                      src={system.image}
                      alt={system.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#0B0F19] text-white px-3 py-1 text-xs font-bold">
                      {system.code}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 border border-neutral-200 text-xs">
                      <div className="font-bold text-[#0B0F19] uppercase">ĐỐI TƯỢNG PHÙ HỢP:</div>
                      <div className="text-neutral-600 font-medium">{system.targetScale}</div>
                    </div>
                  </div>

                  {/* Cột phải: Nội dung kỹ thuật & Thông số */}
                  <div className="lg:col-span-6 p-6 sm:p-10 space-y-6 flex flex-col justify-between bg-white">
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-[#F15A24] uppercase tracking-wide">
                          {system.tag}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0B0F19] leading-snug">
                          {system.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-neutral-700">
                          {system.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {system.desc}
                      </p>

                      <div className="pt-2 border-t border-neutral-100 space-y-2">
                        <div className="text-xs font-bold text-[#008A4B] uppercase tracking-wide">
                          ĐẶC TÍNH NỔI BẬT:
                        </div>
                        {system.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs text-neutral-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#008A4B] mt-0.5 flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bảng thông số định mức nhanh */}
                      <div className="grid grid-cols-2 gap-2.5 pt-2">
                        {system.specs.map((sp, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 bg-[#F8FAFC] border border-neutral-200 space-y-0.5 text-xs"
                          >
                            <span className="text-[11px] font-bold text-neutral-500 uppercase block">
                              {sp.label}
                            </span>
                            <span className="font-bold text-neutral-900 block">{sp.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B0F19] hover:bg-[#008A4B] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        <span>TƯ VẤN CẤU HÌNH HỆ THỐNG NÀY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href="/solutions"
                        className="text-xs font-bold text-neutral-600 hover:text-[#008A4B] uppercase tracking-wide underline"
                      >
                        Xem giải pháp kỹ thuật
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
      {/* 3. NHÓM 2: THIẾT BỊ NĂNG LƯỢNG (5 DANH MỤC CATALOG)           */}
      {/* ============================================================= */}
      <section
        id="equipment-catalog"
        className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#F15A24] uppercase tracking-wider">
                NHÓM 02 • THIẾT BỊ NĂNG LƯỢNG
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                5 Danh Mục Thiết Bị Chuyên Dụng
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-semibold uppercase max-w-md">
              BỐ CỤC CATALOG KỸ THUẬT • THÔNG SỐ CHÍNH XÁC &amp; ĐẦY ĐỦ DATASHEET
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EQUIPMENT_CATEGORIES_DATA.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-neutral-200 hover:border-[#0B0F19] transition-all flex flex-col justify-between overflow-hidden group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-neutral-100">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B0F19] text-white px-2.5 py-1 text-xs font-bold">
                      {cat.number}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-[#008A4B] uppercase tracking-wide">
                        {cat.highlightSpec}
                      </div>
                      <h3 className="text-lg sm:text-xl font-black uppercase text-[#0B0F19] leading-snug group-hover:text-[#008A4B] transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs font-bold text-neutral-700">{cat.subtitle}</p>
                    </div>

                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-neutral-100 space-y-3">
                  {cat.models.map((mod) => (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => setSelectedProduct(mod)}
                      className="w-full inline-flex items-center justify-between p-3 bg-[#F8FAFC] hover:bg-[#008A4B] hover:text-white border border-neutral-200 text-neutral-900 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer group/btn"
                    >
                      <span className="truncate pr-2">Xem thông số kỹ thuật</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. SECTION: LỰA CHỌN THEO NHU CẦU THỰC TẾ                     */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#008A4B] uppercase tracking-wider">
              HƯỚNG DẪN LỰA CHỌN
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#0B0F19] tracking-tight leading-tight">
              Lựa Chọn Giải Pháp Theo Nhu Cầu Thực Tế
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              Bạn không cần phải nhớ chính xác tên mã thiết bị. Hãy bắt đầu từ mục tiêu năng lượng
              của công trình để xác định cấu hình phù hợp nhất:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPLICATION_NEEDS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-neutral-200 p-6 sm:p-7 space-y-5 flex flex-col justify-between hover:border-[#0B0F19] transition-all shadow-xs"
              >
                <div className="space-y-3">
                  <div className="text-3xl font-black text-neutral-300">{item.number}</div>

                  <div className="text-xs font-bold text-[#F15A24] uppercase tracking-wide">
                    {item.need}
                  </div>

                  <h3 className="text-base font-black uppercase text-[#0B0F19] leading-snug">
                    {item.target}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200">
                  <a
                    href={item.actionLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008A4B] hover:text-[#00703C] uppercase tracking-wider"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 5. TIÊU CHUẨN PHẦN CỨNG & KIỂM ĐỊNH (HARDWARE QA)             */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#008A4B] uppercase tracking-wider">
              CAM KẾT CHẤT LƯỢNG PHẦN CỨNG
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#0B0F19] tracking-tight leading-tight">
              Quy Chuẩn Thiết Bị Được Xác Thực
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              TD VIỆT NAM chỉ cung cấp và tích hợp các dòng sản phẩm có nguồn gốc minh bạch, kiểm
              định kỹ thuật thực tế và có bảo hành vững chắc tại Việt Nam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HARDWARE_COMMITMENTS.map((com, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 p-8 space-y-4 flex flex-col justify-between hover:border-[#0B0F19] transition-all shadow-xs"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-[#008A4B]/10 text-[#008A4B] flex items-center justify-center font-black text-sm">
                    {com.number}
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-[#0B0F19]">
                    {com.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">{com.desc}</p>
                </div>

                <div className="pt-3 border-t border-neutral-100 text-xs font-bold text-[#008A4B] uppercase">
                  TIÊU CHUẨN CO / CQ
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* MODAL XEM CHI TIẾT THÔNG SỐ KỸ THUẬT (TECHNICAL PRODUCT SHEET) */}
      {/* ============================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border-2 border-[#0B0F19] max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 space-y-8 text-[#0B0F19] shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#008A4B] uppercase">
                    {selectedProduct.categoryLabel}
                  </span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-xs font-bold text-[#F15A24] uppercase">
                    THÔNG SỐ KỸ THUẬT TIÊU CHUẨN
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0B0F19] leading-snug">
                  {selectedProduct.title}
                </h3>
                <div className="text-xs font-semibold text-neutral-500 pt-1">
                  Mã chủng loại:{" "}
                  <strong className="text-neutral-900">{selectedProduct.model}</strong>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-900 transition-colors cursor-pointer flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Thông số kỹ thuật theo tư duy technical */}
            <div className="space-y-6 text-xs sm:text-sm">
              {/* Mô tả loại thiết bị */}
              <div className="p-4 bg-[#F8FAFC] border border-neutral-200 space-y-1.5">
                <span className="text-xs font-bold text-[#0B0F19] uppercase block">
                  TỔNG QUAN THIẾT BỊ:
                </span>
                <p className="text-neutral-700 leading-relaxed font-normal">
                  {selectedProduct.desc}
                </p>
              </div>

              {/* Bảng thông số định mức chính */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#008A4B] uppercase tracking-wider">
                  THÔNG SỐ ĐỊNH MỨC KỸ THUẬT:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="p-3 bg-white border border-neutral-200 space-y-0.5">
                      <div className="text-[11px] font-bold text-neutral-500 uppercase">
                        {spec.label}
                      </div>
                      <div className="text-neutral-900 font-bold">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Đặc tính nổi bật */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#008A4B] uppercase tracking-wider">
                  TÍNH NĂNG NỔI BẬT &amp; CƠ CHẾ BẢO VỆ:
                </div>
                <div className="space-y-2 p-4 bg-white border border-neutral-200">
                  {selectedProduct.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-neutral-700">
                      <Check className="w-4 h-4 text-[#008A4B] mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ứng dụng & Khả năng tương thích */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-[#F8FAFC] border border-neutral-200 space-y-1">
                  <div className="text-xs font-bold text-[#F15A24] uppercase">
                    ỨNG DỤNG THỰC TẾ:
                  </div>
                  <p className="text-neutral-700 leading-relaxed font-normal">
                    {selectedProduct.applications}
                  </p>
                </div>

                <div className="p-3.5 bg-[#F8FAFC] border border-neutral-200 space-y-1">
                  <div className="text-xs font-bold text-[#008A4B] uppercase">
                    KHẢ NĂNG TƯƠNG THÍCH:
                  </div>
                  <p className="text-neutral-700 leading-relaxed font-normal">
                    {selectedProduct.compatibility}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
              <a
                href={selectedProduct.datasheetUrl}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#008A4B] hover:underline uppercase"
              >
                <Download className="w-4 h-4" />
                <span>Tải Datasheet Kỹ Thuật (PDF)</span>
              </a>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold uppercase transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                <a
                  href="/contact"
                  className="px-6 py-2.5 bg-[#008A4B] hover:bg-[#00703C] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Yêu cầu báo giá thiết bị
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* 6. FINAL CTA: TỐI GIẢN & TẬP TRUNG TƯ VẤN CẤU HÌNH             */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 p-8 sm:p-12 lg:p-16 border border-neutral-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#008A4B] uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>TƯ VẤN CẤU HÌNH KỸ THUẬT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                Cần tư vấn cấu hình?
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                Hãy trao đổi trực tiếp với kỹ sư TD VIỆT NAM để phân tích biểu đồ phụ tải và lựa
                chọn cấu hình hệ thống hoặc thiết bị tương thích, hiệu quả nhất cho công trình của
                bạn.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-medium text-neutral-300 pt-2">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#008A4B] hover:bg-[#00703C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#008A4B]/20 hover:scale-105"
              >
                <span>TRAO ĐỔI VỚI KỸ SƯ</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/downloads"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider border border-neutral-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>TẢI CATALOG KỸ THUẬT (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
