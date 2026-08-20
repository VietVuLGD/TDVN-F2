import React, { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

/* =========================================================================
   HÀM DỰ PHÒNG CHỐNG VỠ ẢNH TỰ ĐỘNG
========================================================================= */
const DEFAULT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80";

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  if (target.src !== DEFAULT_FALLBACK_IMAGE) {
    target.src = DEFAULT_FALLBACK_IMAGE;
  }
};

/* =========================================================================
   1. DỮ LIỆU MỤC GIỚI THIỆU (ABB TABS)
========================================================================= */
const ABOUT_TABS = [
  {
    id: "epc",
    label: "Tổng thầu EPC Trọn gói",
    title: "Tổng thầu EPC Điện mặt trời & Đấu nối EVN",
    description:
      "TD VIỆT NAM trực tiếp đảm nhiệm toàn bộ quy trình từ đo đạc khảo sát hiện trạng, mô phỏng sản lượng PVSyst, thiết kế bản vẽ thi công IFC đến cung ứng vật tư Tier-1, thi công lắp đặt và đóng điện hòa lưới.",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1800&auto=format&fit=crop&q=85",
    link: "/services",
  },
  {
    id: "bess",
    label: "Hệ thống Lưu trữ BESS",
    title: "Hệ thống Pin Lưu trữ Năng lượng BESS",
    description:
      "Giải pháp cắt đỉnh phụ tải (Peak-Shaving) và nguồn điện dự phòng tức thời UPS < 20ms cho nhà máy. Sử dụng khối pin LFP tuổi thọ cao cùng hệ thống làm mát bằng chất lỏng Liquid Cooling an toàn tuyệt đối.",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1800&auto=format&fit=crop&q=85",
    link: "/solutions",
  },
  {
    id: "grid",
    label: "Hạ tầng Trạm & Lưới điện",
    title: "Trạm Biến Áp & Tủ Đóng Cắt Switchgear",
    description:
      "Thi công xây lắp các trạm biến áp nâng hạ thế đến 110kV, hệ thống tủ đóng cắt trung thế, rơ-le kỹ thuật số và phần mềm điều khiển giám sát từ xa SCADA đạt 100% tiêu chuẩn ngành điện.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&auto=format&fit=crop&q=85",
    link: "/products",
  },
  {
    id: "design",
    label: "Tư vấn Thiết kế IFC & PVSyst",
    title: "Tư vấn Thiết kế Kỹ thuật & Báo cáo P50/P90",
    description:
      "Xây dựng mô hình 3D đo đạc bức xạ mặt trời, phân tích tổn hao bóng che và xuất hồ sơ bản vẽ thi công IFC chuẩn chỉnh, đáp ứng mọi yêu cầu nghiệm thu đấu nối khắt khe.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1800&auto=format&fit=crop&q=85",
    link: "/services",
  },
  {
    id: "om",
    label: "Vận hành & Bảo trì O&M 24/7",
    title: "Vận hành & Bảo trì O&M bằng Drone Nhiệt",
    description:
      "Giám sát trực tuyến 24/7 qua nền tảng SCADA, quét hồng ngoại phát hiện sớm điểm nóng tấm pin và bảo trì phòng ngừa định kỳ, cam kết chỉ số hiệu suất PR ≥ 80%.",
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1800&auto=format&fit=crop&q=85",
    link: "/services",
  },
];

/* =========================================================================
   2. DỮ LIỆU GIẢI PHÁP THEO NGÀNH CÔNG NGHIỆP (ABB INDUSTRY CARDS)
========================================================================= */
const INDUSTRY_SOLUTIONS = [
  {
    id: "manufacturing",
    title: "Điện mặt trời Nhà máy Sản xuất",
    desc: "Tối ưu hóa chi phí điện năng ban ngày và đạt chứng chỉ xanh I-REC / ESG cho doanh nghiệp FDI.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    link: "/solutions",
  },
  {
    id: "datacenter",
    title: "Lưu trữ BESS & Trung tâm Dữ liệu",
    desc: "Cắt đỉnh phụ tải giờ cao điểm và nguồn dự phòng chuyển mạch tức thời UPS < 20ms bảo vệ máy chủ.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    link: "/solutions",
  },
  {
    id: "logistics",
    title: "Kho bãi Logistics & Kho Lạnh",
    desc: "Khai thác tối đa diện tích mái diện tích lớn, giảm nhiệt độ mái và tích hợp hệ thống PCCC tiêu chuẩn.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    link: "/solutions",
  },
  {
    id: "maritime",
    title: "Microgrid & Cảng biển Xanh",
    desc: "Lưới điện vi mô độc lập kết hợp trạm biến áp và nguồn pin lưu trữ giúp giảm phát thải khu vực cảng.",
    image:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&auto=format&fit=crop&q=80",
    link: "/solutions",
  },
  {
    id: "commercial",
    title: "Tòa nhà Văn phòng & Thương mại",
    desc: "Tích hợp giải pháp quang điện kiến trúc BIPV, tiết kiệm 20-30% điện năng tiêu thụ điều hòa.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    link: "/solutions",
  },
];

/* =========================================================================
   3. DỮ LIỆU CÔNG TRÌNH TIÊU BIỂU (PANORAMIC COVERFLOW)
========================================================================= */
const FEATURED_PROJECTS = [
  {
    id: "bg-24mwp",
    tag: "DOANH NGHIỆP CƠ KHÍ",
    location: "BẮC GIANG, VIỆT NAM",
    title: "Nhà máy Sản xuất Cơ khí Chính xác 2.4 MWp",
    year: "2025",
    capacity: "2.4 MWp",
    output: "2.850 MWh/năm",
    description:
      "Tổng thầu EPC trọn gói hệ thống điện mặt trời tự dùng công suất 2.4 MWp, sản lượng phát điện thực tế đạt 2.850.000 kWh/năm và cắt giảm 2.450 tấn CO₂ định kỳ mỗi năm.",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1600&auto=format&fit=crop&q=85",
    link: "/projects",
  },
  {
    id: "hy-bess",
    tag: "LƯU TRỮ NĂNG LƯỢNG",
    location: "HƯNG YÊN, VIỆT NAM",
    title: "Hệ thống Lưu trữ BESS Nhà máy Dệt may 1.2 MW / 2.4 MWh",
    year: "2026",
    capacity: "1.2 MW / 2.4 MWh",
    output: "Cắt đỉnh 100% cao điểm",
    description:
      "Tích hợp khối cell pin LFP làm mát bằng chất lỏng Liquid Cooling, cắt đỉnh 100% phụ tải giờ cao điểm và bảo vệ nguồn cấp liên tục cho dây chuyền tự động.",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1600&auto=format&fit=crop&q=85",
    link: "/projects",
  },
  {
    id: "bn-zeroexport",
    tag: "CHẾ TẠO ĐIỆN TỬ",
    location: "BẮC NINH, VIỆT NAM",
    title: "Tổ hợp Nhà máy Chế tạo Thiết bị Điện tử 1.8 MWp Zero-Export",
    year: "2025",
    capacity: "1.8 MWp",
    output: "Tự dùng 98.5%",
    description:
      "Hệ thống điện mặt trời áp mái thông minh tích hợp bộ điều khiển chống phát ngược lưới Zero-Export, tỷ lệ tự tiêu thụ năng lượng sạch tại nhà máy đạt 98.5%.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&auto=format&fit=crop&q=85",
    link: "/projects",
  },
  {
    id: "vt-seaport",
    tag: "CẢNG BIỂN & LOGISTICS",
    location: "BÀ RỊA - VŨNG TÀU, VIỆT NAM",
    title: "Cảng biển Quốc tế & Logistics Xanh Cái Mép 3.5 MWp",
    year: "2026",
    capacity: "3.5 MWp",
    output: "4.200 MWh/năm",
    description:
      "Hạ tầng năng lượng mặt trời áp mái kho bãi logistics diện tích 28.000m², cấp nguồn trực tiếp cho cẩu giàn bờ và hệ thống container lạnh cảng biển.",
    image:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1600&auto=format&fit=crop&q=85",
    link: "/projects",
  },
  {
    id: "hcm-datacenter",
    tag: "DATA CENTER TIER-3",
    location: "TP. HỒ CHÍ MINH, VIỆT NAM",
    title: "Trung tâm Dữ liệu Data Center 0.8 MWp & BESS 1.5 MWh",
    year: "2026",
    capacity: "800 kWp / 1.5 MWh",
    output: "UPS cấp tức thời < 20ms",
    description:
      "Hệ thống năng lượng tích hợp đảm bảo an ninh nguồn điện cấp máy chủ liên tục 24/7, tối ưu hóa biểu giá điện và đạt chứng chỉ Xanh cho trung tâm dữ liệu.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=85",
    link: "/projects",
  },
];

/* =========================================================================
   4. DỮ LIỆU SẢN PHẨM NỔI BẬT (5 DANH MỤC + THÔNG SỐ HOVER CHI TIẾT)
========================================================================= */
const PRODUCT_CATEGORIES = [
  {
    id: "pv",
    label: "Tấm pin PV",
    bannerTitle: "Giải pháp tấm pin quang điện N-Type TOPCon & Bifacial",
    bannerSubtitle:
      "Hiệu suất quang năng cực đại 22.8%, hệ số suy giảm công suất cực thấp và bảo hành 30 năm.",
    bannerImage:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1800&auto=format&fit=crop&q=85",
    products: [
      {
        name: "Tấm pin N-Type TOPCon 580W – 600W",
        model: "Mẫu: Tiger Neo 72HL4-BDV Dual-Glass",
        image:
          "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Công suất", value: "580W – 600Wp" },
          { label: "Hiệu suất", value: "22.8%" },
          { label: "Cấu tạo kính", value: "Hai mặt kính 2.0mm" },
          { label: "Bảo hành", value: "30 Năm hiệu suất" },
        ],
      },
      {
        name: "Tấm pin quang điện công suất lớn 690W – 710W",
        model: "Mẫu: Vertex N NEG21C.20 N-Type",
        image:
          "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Công nghệ cell", value: "210mm N-Type TOPCon" },
          { label: "Hiệu suất", value: "22.5%" },
          { label: "Hộp nối", value: "IP68 (3 Diode)" },
          { label: "Suy giảm", value: "< 1%/năm đầu" },
        ],
      },
      {
        name: "Tấm pin công nghệ dị thể HJT 700W+",
        model: "Mẫu: HJT-G12-700W Bifacial High Yield",
        image:
          "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Hệ số nhiệt", value: "-0.26%/°C xứ nóng" },
          { label: "Phát điện 2 mặt", value: "≥ 85% Bifacial" },
          { label: "Bảo hành cơ lý", value: "15 Năm" },
          { label: "Bảo hành điện", value: "30 Năm > 88%" },
        ],
      },
      {
        name: "Tấm pin quang điện BIPV mặt dựng kính",
        model: "Mẫu: BIPV-Architectural Black 450W",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Ứng dụng", value: "Mặt dựng & Mái kính" },
          { label: "Thẩm mỹ", value: "Full Black kiến trúc" },
          { label: "Cấp an toàn", value: "Kính tôi cường lực" },
          { label: "Cách nhiệt", value: "Giảm 25% nhiệt độ" },
        ],
      },
    ],
  },
  {
    id: "inverter",
    label: "Biến tần Inverter",
    bannerTitle: "Biến tần chuỗi 3 pha & Inverter Hybrid công nghiệp",
    bannerSubtitle:
      "Tích hợp 12-16 ngõ MPPT độc lập, công nghệ ngắt hồ quang AFCI và chuẩn truyền thông SCADA.",
    bannerImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1800&auto=format&fit=crop&q=85",
    products: [
      {
        name: "Inverter chuỗi 3 pha công nghiệp 100kW – 125kW",
        model: "Mẫu: SG110CX-P2 / SUN2000-100KTL",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Hiệu suất tối đa", value: "98.8%" },
          { label: "Số ngõ MPPT", value: "9 – 12 MPPT độc lập" },
          { label: "Bảo vệ hồ quang", value: "AFCI AI ngắt < 0.5s" },
          { label: "Cấp bảo vệ", value: "IP66 / Chống ăn mòn C5" },
        ],
      },
      {
        name: "Inverter chuỗi đại công suất 250kW – 330kW",
        model: "Mẫu: SG330HX / SUN2000-330KTL-H1",
        image:
          "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Điện áp DC Max", value: "1500V DC" },
          { label: "Hiệu suất", value: "99.01%" },
          { label: "Làm mát", value: "Smart Fan Cooling" },
          { label: "Truyền thông", value: "RS485, PLC, Modbus" },
        ],
      },
      {
        name: "Inverter Hybrid dự phòng 15kW – 30kW",
        model: "Mẫu: ET-30K / GW29.9K-ET Commercial",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Chuyển mạch UPS", value: "< 10ms tức thời" },
          { label: "Khả năng quá tải", value: "110% liên tục" },
          { label: "Pin tương thích", value: "Pin Lithium LFP cao thế" },
          { label: "Chức năng xả", value: "Cắt đỉnh Peak-Shaving" },
        ],
      },
      {
        name: "Bộ tối ưu hóa công suất linh kiện thông minh",
        model: "Mẫu: SUN2000-450W / 600W-P2 Optimizer",
        image:
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Hiệu suất tối ưu", value: "99.5%" },
          { label: "Ngắt khẩn cấp", value: "0V Rapid Shutdown" },
          { label: "Chống bóng che", value: "Tăng sản lượng 5% – 25%" },
          { label: "Tiêu chuẩn vỏ", value: "IP68 ngoài trời" },
        ],
      },
    ],
  },
  {
    id: "bess",
    label: "Pin lưu trữ BESS",
    bannerTitle: "Hệ thống Pin lưu trữ năng lượng BESS công nghiệp",
    bannerSubtitle:
      "Cắt đỉnh phụ tải giờ cao điểm, cấp điện dự phòng UPS < 20ms với cell pin LFP Grade A.",
    bannerImage:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1800&auto=format&fit=crop&q=85",
    products: [
      {
        name: "Tủ lưu trữ năng lượng BESS LFP 100kWh – 215kWh",
        model: "Mẫu: BESS-C&I-215KWH Liquid Cooling",
        image:
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Dung lượng danh định", value: "215 kWh LFP Grade A" },
          { label: "Làm mát", value: "Liquid Cooling chuyên dụng" },
          { label: "Vòng đời nạp xả", value: "> 6.000 Chu kỳ (80% DOD)" },
          { label: "PCCC tự động", value: "Khí sạch Aerosol an toàn" },
        ],
      },
      {
        name: "Container pin lưu trữ đại quy mô 3.4 MWh",
        model: "Mẫu: PowerTitan / EnerC 3.4MWh Utility",
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Quy cách", value: "20ft ISO Standard Container" },
          { label: "Dung lượng", value: "3.44 MWh" },
          { label: "Hiệu suất chu trình", value: "≥ 88% RTE" },
          { label: "Tuổi thọ thiết kế", value: "15 – 20 Năm" },
        ],
      },
      {
        name: "Khối pin lưu trữ chuỗi thông minh 15kWh",
        model: "Mẫu: LUNA2000-15-S1 LFP Modular",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Mô-đun mở rộng", value: "Ghép nối từ 5kWh – 30kWh" },
          { label: "Độ sâu xả nạp", value: "100% DOD an toàn" },
          { label: "Vận hành", value: "Tự động hòa/độc lập lưới" },
          { label: "Bảo hành", value: "10 Năm chính hãng" },
        ],
      },
      {
        name: "Hệ thống điều khiển & Quản lý năng lượng EMS",
        model: "Mẫu: SmartLogger-3000A / EMS Master",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Giao thức SCADA", value: "IEC 60870-5-104, Modbus" },
          { label: "Thuật toán nạp xả", value: "Cắt đỉnh 3 giá điện EVN" },
          { label: "Giám sát đám mây", value: "Cloud SCADA 24/7" },
          { label: "Quản lý thiết bị", value: "Đến 80 Inverter / BESS" },
        ],
      },
    ],
  },
  {
    id: "solar-lights",
    label: "Đèn mặt trời",
    bannerTitle: "Đèn chiếu sáng năng lượng mặt trời công nghiệp & đô thị",
    bannerSubtitle:
      "Chip LED Lumileds siêu sáng, cảm biến chuyển động Radar thông minh và kháng nước IP67.",
    bannerImage:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1800&auto=format&fit=crop&q=85",
    products: [
      {
        name: "Đèn đường năng lượng mặt trời liền thể 150W",
        model: "Mẫu: SL-AIO-150W Lumileds 5050",
        image:
          "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Công suất phát quang", value: "150W (24.000 Lumens)" },
          { label: "Pin lưu trữ", value: "LiFePO4 3.2V 60Ah" },
          { label: "Thời gian sáng", value: "3 – 5 Đêm mưa liên tục" },
          { label: "Cấp bảo vệ", value: "IP67 / Chống sét 10kV" },
        ],
      },
      {
        name: "Đèn đường năng lượng rời thể All-In-Two 300W",
        model: "Mẫu: SL-AIT-300W High Lumen Modular",
        image:
          "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Tấm pin quang năng", value: "Mono 18V 100W rời xoay" },
          { label: "Chip LED", value: "Philips Lumileds 3030" },
          { label: "Chiều cao lắp đặt", value: "8m – 12m" },
          { label: "Tuổi thọ LED", value: "> 50.000 Giờ" },
        ],
      },
      {
        name: "Đèn pha LED Solar công nghiệp 400W – 600W",
        model: "Mẫu: SL-FL-500W Heavy Duty IP67",
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Góc chiếu sáng", value: "120° Phủ rộng sân bãi" },
          { label: "Dung lượng pin", value: "LiFePO4 3.2V 90.000mAh" },
          { label: "Vỏ đèn", value: "Nhôm đúc nguyên khối" },
          { label: "Điều khiển", value: "Remote & Tự động quang học" },
        ],
      },
      {
        name: "Trụ đèn chiếu sáng thông minh Solar Smart Pole",
        model: "Mẫu: SP-SOLAR-IOT Integrated Pole",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Tích hợp IoT", value: "Camera an ninh, WiFi, LED" },
          { label: "Khung trụ", value: "Thép mạ kẽm sơn tĩnh điện" },
          { label: "Cell Solar", value: "Tấm pin quấn thân 360°" },
          { label: "Quản trị", value: "Smart City Cloud" },
        ],
      },
    ],
  },
  {
    id: "solar-cabinet",
    label: "Tủ điện Solar",
    bannerTitle: "Tủ gom DC 1500V & Tủ phân phối hạ thế tổng MSB",
    bannerSubtitle:
      "Trang bị thiết bị đóng cắt ACB/MCCB tiêu chuẩn, chống sét SPD Type 1+2 và điều khiển Zero-Export.",
    bannerImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&auto=format&fit=crop&q=85",
    products: [
      {
        name: "Tủ gom chuỗi DC Combiner Box 1500V 16 ngõ vào",
        model: "Mẫu: TD-DC1500V-16In-1Out SPD T1+2",
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Điện áp định mức", value: "DC 1500V Max" },
          { label: "Chống sét", value: "SPD Type 1+2 chuyên DC" },
          { label: "Cầu chì gPV", value: "1500V 15A – 30A" },
          { label: "Vỏ tủ", value: "Composite / Inox 304 IP65" },
        ],
      },
      {
        name: "Tủ phân phối tổng AC Distribution MSB Solar",
        model: "Mẫu: MSB-SOLAR-400V 1000A – 4000A",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Đóng cắt chính", value: "Máy cắt không khí ACB / MCCB" },
          { label: "Đo lường", value: "Đồng hồ đa năng Schneider Class 0.5" },
          { label: "Dòng ngắn mạch", value: "Icu 65kA – 100kA" },
          { label: "Tiêu chuẩn", value: "IEC 61439-1/2, EVN Ready" },
        ],
      },
      {
        name: "Tủ điện trung thế RMU 24kV / 35kV",
        model: "Mẫu: RMU-VCB 24kV SF6 / Clean-Air",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Cấp điện áp", value: "24kV / 35kV - 50Hz" },
          { label: "Máy cắt VCB", value: "Chân không 630A – 1250A" },
          { label: "Rơ-le số", value: "Quá dòng, chạm đất, hồ quang" },
          { label: "Cách điện", value: "SF6 / Clean Air thân thiện" },
        ],
      },
      {
        name: "Hộp điều khiển hòa lưới chống phát ngược Zero-Export",
        model: "Mẫu: SmartGuard-63A / ZeroExport 3-Phase",
        image:
          "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&auto=format&fit=crop&q=80",
        link: "/products",
        specs: [
          { label: "Thời gian đáp ứng", value: "< 150ms bám sát phụ tải" },
          { label: "Biến dòng CT", value: "100A – 3000A ngõ vào" },
          { label: "Tương thích", value: "Sungrow, Huawei, GoodWe, Deye" },
          { label: "Chuẩn EVN", value: "100% thỏa thuận đấu nối" },
        ],
      },
    ],
  },
];

/* =========================================================================
   5. DỮ LIỆU TIN TỨC & CHUYÊN ĐỀ
========================================================================= */
const STORIES_DATA = {
  featured: {
    tag: "CHUYÊN ĐỀ KỸ THUẬT | 16 THÁNG 8, 2026",
    title: "Quy chuẩn kỹ thuật đấu nối điện mặt trời tự dùng vào lưới điện EVN",
    description:
      "Phân tích chi tiết các yêu cầu kỹ thuật hiện hành về thiết bị chống phát ngược Zero-Export, hệ thống bảo vệ rơ-le và trình tự hồ sơ thỏa thuận đấu nối lưới trung/hạ thế với Tập đoàn Điện lực Việt Nam.",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1600&auto=format&fit=crop&q=85",
    link: "/knowledge",
  },
  items: [
    {
      tag: "BÁO CÁO PHÂN TÍCH | 28 THÁNG 7, 2026",
      title: "Bài toán tài chính hệ thống lưu trữ pin BESS cắt đỉnh phụ tải",
      description:
        "Mô hình tính toán dòng tiền nạp xả theo biểu giá điện 3 giá, giúp doanh nghiệp rút ngắn thời gian hoàn vốn đầu tư và tối ưu hóa chi phí vận hành.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop&q=85",
      link: "/knowledge",
    },
    {
      tag: "MÔ PHỎNG PVSYST | 12 THÁNG 7, 2026",
      title: "Đánh giá độ chính xác của báo cáo P50/P90 trong thiết kế công nghiệp",
      description:
        "Phương pháp đo đạc dữ liệu bức xạ mặt trời vi khí hậu và tính toán tổn hao để bảo đảm cam kết sản lượng điện PR thực tế.",
      image:
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&auto=format&fit=crop&q=85",
      link: "/knowledge",
    },
    {
      tag: "VẬN HÀNH & BẢO TRÌ | 05 THÁNG 7, 2026",
      title: "Ứng dụng Drone nhiệt hồng ngoại & Quy trình bảo trì O&M định kỳ",
      description:
        "Giám sát trực tuyến qua hệ thống SCADA và phát hiện sớm các điểm nóng Hotspot giúp tối ưu hóa hiệu suất phát điện toàn vòng đời.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&auto=format&fit=crop&q=85",
      link: "/knowledge",
    },
  ],
};

export function HomePage() {
  const [activeAboutIndex, setActiveAboutIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeProductCat, setActiveProductCat] = useState(0);
  const solutionCarouselRef = useRef<HTMLDivElement>(null);

  const currentAbout = ABOUT_TABS[activeAboutIndex];
  const currentCategory = PRODUCT_CATEGORIES[activeProductCat];

  const scrollSolutionCarousel = (direction: "left" | "right") => {
    if (solutionCarouselRef.current) {
      const scrollAmount = 360;
      solutionCarouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const len = FEATURED_PROJECTS.length;
  const prevIdx = (activeProjectIndex - 1 + len) % len;
  const nextIdx = (activeProjectIndex + 1) % len;

  const prevProj = FEATURED_PROJECTS[prevIdx];
  const currProj = FEATURED_PROJECTS[activeProjectIndex];
  const nextProj = FEATURED_PROJECTS[nextIdx];

  const prevProject = () => {
    setActiveProjectIndex(prevIdx);
  };

  const nextProject = () => {
    setActiveProjectIndex(nextIdx);
  };

  return (
    <div className="w-full bg-white text-neutral-900 overflow-hidden font-sans">
      {/* ================================================================= */}
      {/* 1. HERO SECTION: AI 3D SOLAR FIELD & SUN FLARE                    */}
      {/* ================================================================= */}
      <section className="relative w-full min-h-[640px] lg:min-h-[740px] flex items-center bg-[#050e18] text-white overflow-hidden">
        {/* NỀN CÔNG NGHỆ 3D AI VỀ CÁNH ĐỒNG ĐIỆN MẶT TRỜI QUY MÔ LỚN */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute -top-32 right-1/4 w-[750px] h-[750px] bg-radial from-[#F15A24]/40 via-[#F97316]/20 to-transparent rounded-full blur-[90px] opacity-90 animate-pulse" />
          <div className="absolute top-1/4 -right-16 w-[600px] h-[600px] bg-[#008A4B]/25 rounded-full blur-[110px]" />
          <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-[#0284C7]/20 rounded-full blur-[100px]" />

          <svg
            className="absolute inset-0 w-full h-full object-cover opacity-85 mix-blend-screen"
            viewBox="0 0 1920 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="aiSolarGlass1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#0284C7" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#0369A1" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#082F49" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="aiSunBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
              </linearGradient>

              <pattern id="aiPvCellPattern" width="48" height="28" patternUnits="userSpaceOnUse">
                <rect
                  width="46"
                  height="26"
                  rx="3"
                  fill="url(#aiSolarGlass1)"
                  stroke="#38BDF8"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                />
                <line
                  x1="23"
                  y1="0"
                  x2="23"
                  y2="26"
                  stroke="#7DD3FC"
                  strokeWidth="0.6"
                  strokeOpacity="0.8"
                />
                <line
                  x1="0"
                  y1="13"
                  x2="46"
                  y2="13"
                  stroke="#7DD3FC"
                  strokeWidth="0.6"
                  strokeOpacity="0.8"
                />
                <line
                  x1="11"
                  y1="0"
                  x2="11"
                  y2="26"
                  stroke="#FFFFFF"
                  strokeWidth="0.4"
                  strokeOpacity="0.5"
                />
                <line
                  x1="35"
                  y1="0"
                  x2="35"
                  y2="26"
                  stroke="#FFFFFF"
                  strokeWidth="0.4"
                  strokeOpacity="0.5"
                />
              </pattern>
            </defs>

            <g transform="matrix(0.88 -0.22 0.55 0.65 680 180)">
              <rect
                width="900"
                height="420"
                rx="10"
                fill="url(#aiPvCellPattern)"
                stroke="#0284C7"
                strokeWidth="3"
              />
              <rect width="900" height="420" rx="10" fill="url(#aiSunBeam)" />
            </g>

            <g transform="matrix(0.94 -0.18 0.48 0.72 780 360)">
              <rect
                width="1050"
                height="480"
                rx="12"
                fill="url(#aiPvCellPattern)"
                stroke="#38BDF8"
                strokeWidth="4"
              />
              <rect width="1050" height="480" rx="12" fill="url(#aiSunBeam)" />
              <line
                x1="0"
                y1="240"
                x2="1050"
                y2="240"
                stroke="#10B981"
                strokeWidth="3.5"
                strokeDasharray="14 8"
                opacity="0.9"
              />
            </g>

            <g transform="matrix(1 -0.12 0.42 0.8 880 580)">
              <rect
                width="1200"
                height="540"
                rx="16"
                fill="url(#aiPvCellPattern)"
                stroke="#60A5FA"
                strokeWidth="5"
              />
              <rect width="1200" height="540" rx="16" fill="url(#aiSunBeam)" />
              <line
                x1="0"
                y1="270"
                x2="1200"
                y2="270"
                stroke="#10B981"
                strokeWidth="4"
                strokeDasharray="18 10"
                opacity="0.95"
              />
            </g>

            <path
              d="M500 1080 L920 620 L1500 620"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              opacity="0.6"
            />
            <path
              d="M720 1080 L1100 520 L1750 520"
              stroke="#F15A24"
              strokeWidth="2"
              strokeDasharray="10 10"
              opacity="0.6"
            />
            <circle cx="920" cy="620" r="7" fill="#10B981" />
            <circle cx="1100" cy="520" r="6" fill="#F15A24" />
          </svg>

          <div className="absolute inset-0 bg-gradient-to-r from-[#050e18] via-[#050e18]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e18] via-transparent to-[#050e18]/60" />
        </div>

        {/* NỘI DUNG CHÍNH HERO THEO PHONG CÁCH ABB */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            <div className="w-10 h-1 bg-[#F15A24]" />

            <div className="text-xs sm:text-sm font-bold tracking-widest uppercase text-neutral-300">
              ENGINEERED FOR ENERGY TRANSITION
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black uppercase text-white leading-[1.1] tracking-tight">
              THÚC ĐẨY CÔNG NGHIỆP PHÁT TRIỂN XANH, TINH GỌN VÀ BỀN VỮNG
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-2xl">
              với các giải pháp kỹ thuật tổng thầu Điện mặt trời, Lưu trữ BESS và Hạ tầng lưới điện
              công nghiệp.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#F15A24] hover:bg-[#d94816] transition-all shadow-xl shadow-[#F15A24]/30 hover:scale-105"
              >
                <span>Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all"
              >
                <span>Các giải pháp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 2. MỤC GIỚI THIỆU: KHỔ RỘNG TOÀN CẢNH MAX-W-[1800PX]             */}
      {/* ================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10 sm:space-y-12">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-neutral-900 tracking-tight leading-tight">
              MỘT NHÀ THẦU CÔNG NGHỆ VÀ KỸ THUẬT HÀNG ĐẦU TRONG LĨNH VỰC ĐIỆN MẶT TRỜI VÀ LƯU TRỮ
              BESS
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
              Bằng cách kết hợp chuyên môn kỹ thuật điện và giải pháp số hóa vận hành, TD VIỆT NAM
              giúp các nhà máy và công trình hoạt động với hiệu suất cao, đồng thời trở nên an toàn,
              tiết kiệm chi phí và bền vững hơn.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
            {/* CỘT TRÁI: MENU DANH MỤC ABB THUẦN TÚY */}
            <div className="lg:col-span-4 flex flex-col justify-between py-2 space-y-2">
              <div className="space-y-1">
                {ABOUT_TABS.map((tab, idx) => {
                  const isActive = activeAboutIndex === idx;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveAboutIndex(idx)}
                      className={`w-full text-left py-3.5 px-1 flex items-center gap-3 transition-all duration-200 cursor-pointer select-none ${
                        isActive
                          ? "font-bold text-neutral-950 text-base lg:text-lg"
                          : "text-neutral-500 hover:text-neutral-950 text-sm lg:text-base font-medium hover:translate-x-1.5"
                      }`}
                    >
                      {isActive ? (
                        <span className="text-base lg:text-lg font-bold text-neutral-950">→</span>
                      ) : (
                        <span className="w-4" />
                      )}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-8 border-t border-neutral-100">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-neutral-900 text-neutral-900 font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-all shadow-xs"
                >
                  <span>Xem chi tiết về TD VIỆT NAM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* CỘT PHẢI: KHUNG 4 GÓC CẠNH VUÔNG VẮN, KHỔ LỚN MỞ RỘNG TOÀN DIỆN */}
            <div className="lg:col-span-8 relative min-h-[500px] sm:min-h-[580px] lg:min-h-[620px] rounded-none overflow-hidden bg-neutral-950 text-white shadow-2xl">
              {ABOUT_TABS.map((tab, idx) => {
                const isActive = activeAboutIndex === idx;
                return (
                  <div
                    key={tab.id}
                    className={`absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-14 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "opacity-100 translate-x-0 scale-100 z-10 pointer-events-auto"
                        : "opacity-0 translate-x-8 scale-[1.02] z-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
                        isActive ? "scale-100" : "scale-105"
                      }`}
                      onError={handleImageError}
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

                    <div
                      className={`relative z-10 space-y-4 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      }`}
                    >
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                        {tab.title}
                      </h3>

                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl font-normal">
                        {tab.description}
                      </p>

                      <div className="pt-2">
                        <a
                          href={tab.link}
                          className="inline-flex items-center justify-center text-white hover:text-[#F15A24] transition-colors group cursor-pointer"
                          aria-label={`Khám phá ${tab.title}`}
                        >
                          <ArrowRight className="w-7 h-7 transition-transform duration-200 group-hover:translate-x-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3. MỤC GIẢI PHÁP: ABB INDUSTRY CARDS CAROUSEL                     */}
      {/* ================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-4xl space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-neutral-900 tracking-tight leading-tight">
                THÚC ĐẨY CÁC NGÀNH CÔNG NGHIỆP PHÁT TRIỂN BỀN VỮNG VÀ TỐI ƯU NĂNG LƯỢNG
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                Chúng tôi mang đến các giải pháp năng lượng mặt trời, lưu trữ BESS và hạ tầng trạm
                biến áp chuyên biệt giúp các doanh nghiệp nâng cao hiệu suất và khử carbon toàn
                diện.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => scrollSolutionCarousel("left")}
                aria-label="Xem giải pháp trước"
                className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSolutionCarousel("right")}
                aria-label="Xem giải pháp tiếp theo"
                className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={solutionCarouselRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 scrollbar-none snap-x snap-mandatory"
          >
            {INDUSTRY_SOLUTIONS.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="group relative flex-none w-[280px] sm:w-[320px] lg:w-[360px] aspect-[9/14] rounded-none overflow-hidden bg-neutral-900 shadow-md transition-all duration-300 snap-start flex flex-col justify-end"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                <div className="relative z-10 p-6 sm:p-7 space-y-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#F15A24] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="/solutions"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#F15A24] hover:bg-[#d94816] transition-all shadow-md hover:scale-105"
            >
              <span>Xem tất cả giải pháp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. MỤC DỰ ÁN TIÊU BIỂU: RESPONSIVE HOÀN HẢO MỌI THIẾT BỊ / TABLET */}
      {/* ================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-neutral-50/70 border-b border-neutral-200 overflow-hidden">
        {/* HEADER ĐỒNG BỘ KHUNG LƯỚI KHỔ RỘNG 1800PX */}
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight font-sans uppercase">
              DỰ ÁN TIÊU BIỂU
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-medium tracking-wide uppercase">
              CÁC CÔNG TRÌNH NĂNG LƯỢNG TIÊU BIỂU DO TD VIỆT NAM TRIỂN KHAI
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={prevProject}
              aria-label="Xem dự án trước"
              className="w-11 h-11 rounded-full border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-950 flex items-center justify-center transition-colors cursor-pointer bg-white shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextProject}
              aria-label="Xem dự án tiếp theo"
              className="w-11 h-11 rounded-full border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-950 flex items-center justify-center transition-colors cursor-pointer bg-white shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <a
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-900 text-neutral-900 font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-all ml-2 shadow-xs"
            >
              <span>TẤT CẢ DỰ ÁN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* KHUNG CAROUSEL: TỐI ƯU TABLET (TỰ CO GIÃN THẺ CHÍNH, CHỈ HIỆN THẺ PHỤ TRÊN DESKTOP LỚN) */}
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative flex items-center justify-center py-2">
          <div className="w-full flex items-center justify-center gap-4 lg:gap-6 xl:gap-8">
            {/* THẺ PHỤ BÊN TRÁI (CHỈ HIỆN TỪ MÀN HÌNH LG TRỞ LÊN ĐỂ TRÁNH ÉP DẸP TRÊN TABLET) */}
            <div
              onClick={prevProject}
              className="hidden lg:flex flex-col justify-end w-[220px] xl:w-[280px] 2xl:w-[320px] h-[440px] xl:h-[500px] relative rounded-none overflow-hidden shadow-md hover:shadow-xl cursor-pointer opacity-40 hover:opacity-80 transition-all duration-500 scale-95 flex-shrink-0 bg-neutral-900"
            >
              <img
                src={prevProj.image}
                alt={prevProj.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={handleImageError}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white z-10">
                <span className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-wider">
                  {prevProj.location}
                </span>
                <h4 className="text-sm font-bold text-white line-clamp-2 mt-1">{prevProj.title}</h4>
              </div>
            </div>

            {/* THẺ CHÍNH Ở CHÍNH GIỮA: LUÔN GIỮ CHIỀU RỘNG CHUẨN TRÊN TABLET & MOBILE */}
            <div
              key={currProj.id}
              className="w-full max-w-[1080px] min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] xl:h-[540px] relative rounded-none overflow-hidden shadow-2xl z-20 opacity-100 bg-neutral-950 flex flex-col justify-end flex-shrink min-w-0 border border-neutral-200/50 animate-in fade-in duration-300"
            >
              <img
                src={currProj.image}
                alt={currProj.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={handleImageError}
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15" />

              <div className="relative z-10 p-5 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-end text-white space-y-3">
                {/* VỊ TRÍ & HUY HIỆU */}
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="px-2.5 py-1 bg-[#F15A24] text-white text-[10px] sm:text-[11px] font-bold uppercase rounded-none tracking-wider">
                    {currProj.tag}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-[#F59E0B] tracking-wider uppercase">
                    {currProj.location}
                  </span>
                </div>

                {/* TIÊU ĐỀ DỰ ÁN */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white leading-tight uppercase">
                  {currProj.title}
                </h3>

                {/* 3 CHỈ SỐ KỸ THUẬT: GRID RESPONSIVE */}
                <div className="grid grid-cols-3 gap-2 sm:gap-6 py-2.5 sm:py-3 border-y border-white/15 my-1 max-w-2xl">
                  <div>
                    <div className="text-[10px] sm:text-xs text-neutral-300 font-medium">
                      Năm thi công
                    </div>
                    <div className="text-sm sm:text-lg lg:text-xl font-bold text-white mt-0.5">
                      {currProj.year}
                    </div>
                  </div>
                  <div className="border-l border-white/20 pl-2 sm:pl-6">
                    <div className="text-[10px] sm:text-xs text-neutral-300 font-medium">
                      Công suất
                    </div>
                    <div className="text-sm sm:text-lg lg:text-xl font-bold text-[#10B981] mt-0.5 truncate">
                      {currProj.capacity}
                    </div>
                  </div>
                  <div className="border-l border-white/20 pl-2 sm:pl-6">
                    <div className="text-[10px] sm:text-xs text-neutral-300 font-medium">
                      Sản lượng/năm
                    </div>
                    <div className="text-sm sm:text-lg lg:text-xl font-bold text-white mt-0.5 truncate">
                      {currProj.output}
                    </div>
                  </div>
                </div>

                {/* MÔ TẢ VÀ NÚT ARROW */}
                <div className="flex items-end justify-between gap-4 pt-1">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl line-clamp-2 font-normal">
                    {currProj.description}
                  </p>

                  <a
                    href={currProj.link}
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 ml-auto"
                    aria-label={`Chi tiết ${currProj.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* THẺ PHỤ BÊN PHẢI (CHỈ HIỆN TỪ MÀN HÌNH LG TRỞ LÊN) */}
            <div
              onClick={nextProject}
              className="hidden lg:flex flex-col justify-end w-[220px] xl:w-[280px] 2xl:w-[320px] h-[440px] xl:h-[500px] relative rounded-none overflow-hidden shadow-md hover:shadow-xl cursor-pointer opacity-40 hover:opacity-80 transition-all duration-500 scale-95 flex-shrink-0 bg-neutral-900"
            >
              <img
                src={nextProj.image}
                alt={nextProj.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={handleImageError}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white z-10">
                <span className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-wider">
                  {nextProj.location}
                </span>
                <h4 className="text-sm font-bold text-white line-clamp-2 mt-1">{nextProj.title}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* THANH DẤU CHẤM ĐIỀU HƯỚNG */}
        <div className="flex items-center justify-center gap-2 mt-6 relative z-10">
          {FEATURED_PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProjectIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeProjectIndex
                  ? "w-8 bg-[#F15A24]"
                  : "w-2 bg-neutral-300 hover:bg-neutral-500"
              }`}
              aria-label={`Chuyển tới dự án ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ================================================================= */}
      {/* 5. MỤC SẢN PHẨM NỔI BẬT: HOVER KÍNH MỜ TRONG SUỐT & KHÔNG TRÀN CHỮ*/}
      {/* ================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* TIÊU ĐỀ CHÍNH: SẢN PHẨM NỔI BẬT */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight uppercase">
              Sản phẩm nổi bật
            </h2>
          </div>

          {/* DẢI 5 TAB DANH MỤC THIẾT BỊ CĂN GIỮA */}
          <div className="flex items-center justify-center gap-5 sm:gap-10 flex-wrap">
            {PRODUCT_CATEGORIES.map((cat, idx) => {
              const isActive = activeProductCat === idx;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveProductCat(idx)}
                  className={`text-sm sm:text-base transition-all duration-200 cursor-pointer select-none py-1 border-b-2 ${
                    isActive
                      ? "font-bold text-[#E11D48] border-[#E11D48]"
                      : "font-medium text-neutral-600 hover:text-neutral-900 border-transparent hover:border-neutral-300"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* BANNER TOÀN CẢNH NẰM NGANG CỦA NHÓM SẢN PHẨM */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[24/8] min-h-[220px] sm:min-h-[280px] rounded-none overflow-hidden bg-neutral-900 flex items-center justify-center text-center p-6 sm:p-10 shadow-md">
            <img
              src={currentCategory.bannerImage}
              alt={currentCategory.bannerTitle}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-65"
              onError={handleImageError}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/25" />

            <div className="relative z-10 space-y-3 max-w-3xl text-white">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                {currentCategory.bannerTitle}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal max-w-2xl mx-auto">
                {currentCategory.bannerSubtitle}
              </p>
              <div className="pt-2">
                <a
                  href="/products"
                  className="inline-block px-6 py-2 border border-white/80 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-neutral-900 transition-colors"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
          </div>

          {/* LƯỚI 4 SẢN PHẨM: HOVER KÍNH MỜ TRONG SUỐT FROSTED GLASS & CHỐNG TRÀN CHỮ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 pt-2">
            {currentCategory.products.map((prod, idx) => (
              <a
                key={idx}
                href={prod.link}
                className="group relative min-h-[380px] flex flex-col justify-between p-4 sm:p-5 bg-white border border-neutral-200/90 hover:border-neutral-900 hover:shadow-2xl transition-all duration-300 rounded-none overflow-hidden cursor-pointer"
              >
                {/* 1. KHUNG ẢNH THIẾT BỊ Ở TRẠNG THÁI BÌNH THƯỜNG */}
                <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden mb-3 p-2 bg-neutral-50/80 border-b border-neutral-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>

                {/* 2. TÊN SẢN PHẨM & MÃ MODEL Ở DƯỚI */}
                <div className="text-center space-y-1 flex-1 flex flex-col justify-end">
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-[#008A4B] transition-colors leading-snug line-clamp-2">
                    {prod.name}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-mono">{prod.model}</p>
                </div>

                {/* 3. LỚP PHỦ MỜ KÍNH XUYÊN THẤU (FROSTED GLASS) & BỐ CỤC KHÔNG BỊ TRÀN MÉP */}
                <div className="absolute inset-0 bg-neutral-900/75 backdrop-blur-md border border-white/10 p-4 sm:p-4.5 pb-4 text-white flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 overflow-hidden">
                  <div className="space-y-2">
                    {/* HUY HIỆU & TIER */}
                    <div className="flex items-center justify-between border-b border-white/15 pb-1.5">
                      <span className="text-[10px] font-bold text-[#F15A24] uppercase tracking-wider">
                        {currentCategory.label}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-300">Tier-1 Tech</span>
                    </div>

                    {/* TIÊU ĐỀ THIẾT BỊ */}
                    <h5 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2">
                      {prod.name}
                    </h5>

                    {/* THÔNG SỐ KỸ THUẬT TINH GỌN KHÔNG BỊ DỒN SÁT ĐÁY */}
                    <div className="space-y-1 pt-1 text-[11px]">
                      {prod.specs.map((sp, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between gap-1.5 border-b border-white/10 pb-0.5"
                        >
                          <span className="text-neutral-300 font-normal truncate max-w-[45%]">
                            {sp.label}:
                          </span>
                          <span className="font-semibold text-white text-right truncate max-w-[55%]">
                            {sp.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* NÚT XEM CHI TIẾT CĂN CÁCH ĐÁY AN TOÀN */}
                  <div className="pt-2.5 border-t border-white/20 flex items-center justify-between mt-1">
                    <span className="text-[11px] font-bold text-[#10B981] group-hover:underline flex items-center gap-1">
                      <span>Xem thông số &amp; Báo giá</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#E11D48] text-white flex items-center justify-center shadow-xs">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* NÚT XEM TẤT CẢ SẢN PHẨM */}
          <div className="text-center pt-6">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-2.5 rounded-none border border-neutral-900 text-neutral-900 font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-all shadow-xs"
            >
              Xem tất cả sản phẩm
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 6. MỤC TIN TỨC & CHUYÊN ĐỀ: TRÀN GẦN HẾT MÀN HÌNH CHUẨN ABB       */}
      {/* ================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8 sm:space-y-10">
          {/* TIÊU ĐỀ: TIN TỨC & KỸ THUẬT */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-neutral-900 tracking-tight font-sans">
              TIN TỨC &amp; KỸ THUẬT
            </h2>

            <div>
              <a
                href="/knowledge"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-neutral-900 text-neutral-900 font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-all"
              >
                <span>Xem tất cả tin tức</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
            {/* CỘT 1: 1 BÀI VIẾT TIÊU ĐIỂM TO BẢN BÊN TRÁI */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <a href={STORIES_DATA.featured.link} className="group space-y-4 block cursor-pointer">
                <div className="aspect-[16/10] rounded-none overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/80">
                  <img
                    src={STORIES_DATA.featured.image}
                    alt={STORIES_DATA.featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2.5 pt-1">
                  <div className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
                    {STORIES_DATA.featured.tag}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 group-hover:text-[#008A4B] transition-colors leading-snug">
                    {STORIES_DATA.featured.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {STORIES_DATA.featured.description}
                  </p>
                </div>
              </a>
            </div>

            {/* CỘT 2: 3 BÀI VIẾT XẾP TẦNG DẠNG NGANG BÊN PHẢI (LINK SANG /KNOWLEDGE) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6 sm:gap-7">
              {STORIES_DATA.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="group grid grid-cols-12 gap-4 sm:gap-6 items-center block cursor-pointer p-2 hover:bg-neutral-50/80 transition-colors"
                >
                  <div className="col-span-5 aspect-[16/11] rounded-none overflow-hidden bg-neutral-100 shadow-xs border border-neutral-200/60 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={handleImageError}
                      loading="lazy"
                    />
                  </div>

                  <div className="col-span-7 space-y-2">
                    <div className="text-[11px] sm:text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">
                      {item.tag}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#008A4B] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2 font-normal">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 7. KHỐI KẾT NỐI: ABB "GET IN TOUCH WITH US"                       */}
      {/* ================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-neutral-900 tracking-tight">
            KẾT NỐI VỚI CHÚNG TÔI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"
                  alt="Khảo sát & Mô phỏng PVSyst"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
              <h3 className="text-base font-bold text-neutral-900 leading-snug">
                Bạn cần khảo sát hiện trạng &amp; lập mô phỏng PVSyst miễn phí?
              </h3>
              <div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-neutral-900 text-neutral-900 font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-all"
                >
                  <span>Gửi yêu cầu kỹ thuật</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="Tư vấn giải pháp BESS"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
              <h3 className="text-base font-bold text-neutral-900 leading-snug">
                Tìm kiếm phương án lưu trữ BESS cắt giảm chi phí điện đỉnh?
              </h3>
              <div>
                <a
                  href="/solutions"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-neutral-900 text-neutral-900 font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-all"
                >
                  <span>Liên hệ chuyên gia BESS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
                  alt="Mạng lưới đối tác cung ứng"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
              <h3 className="text-base font-bold text-neutral-900 leading-snug">
                Hồ sơ năng lực doanh nghiệp và chứng nhận tiêu chuẩn Tier-1?
              </h3>
              <div>
                <a
                  href="/downloads"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-neutral-900 text-neutral-900 font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-all"
                >
                  <span>Tải Hồ sơ năng lực (PDF)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
