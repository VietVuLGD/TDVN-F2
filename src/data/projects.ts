export type ProjectCategoryKey =
  | "industrial-solar"
  | "commercial-solar"
  | "bess"
  | "solar-bess"
  | "substation-grid"
  | "microgrid"
  | "om";

export type ProjectStatus = "completed" | "ongoing" | "updating";

export type ProjectCategory = {
  key: ProjectCategoryKey;
  name: { vi: string; en: string };
};

export const projectCategories: ProjectCategory[] = [
  {
    key: "industrial-solar",
    name: { vi: "Điện mặt trời công nghiệp", en: "Industrial Solar" },
  },
  {
    key: "commercial-solar",
    name: { vi: "Điện mặt trời thương mại", en: "Commercial Solar" },
  },
  {
    key: "bess",
    name: { vi: "BESS", en: "BESS" },
  },
  {
    key: "solar-bess",
    name: { vi: "Điện mặt trời + BESS", en: "Solar + BESS" },
  },
  {
    key: "substation-grid",
    name: { vi: "Trạm biến áp & Lưới điện", en: "Substation & Grid" },
  },
  {
    key: "microgrid",
    name: { vi: "Microgrid", en: "Microgrid" },
  },
  {
    key: "om",
    name: { vi: "O&M", en: "O&M" },
  },
];

export type KeySpecItem = {
  label: { vi: string; en: string };
  value: { vi: string; en: string };
};

export type ProjectGalleryItem = {
  url: string;
  caption?: { vi: string; en: string };
};

export type Project = {
  id: string;
  slug: string;
  title: { vi: string; en: string };
  shortTitle?: { vi: string; en: string };
  category: ProjectCategoryKey;
  sector?: { vi: string; en: string };
  status: ProjectStatus;
  location: { vi: string; en: string };
  client: { vi: string; en: string };
  capacity: { vi: string; en: string };
  technology: { vi: string; en: string };
  year: number | string;
  description: { vi: string; en: string };
  challenge: { vi: string; en: string };
  solution: { vi: string; en: string };
  engineeringScope: { vi: string[]; en: string[] };
  keySpecifications: KeySpecItem[];
  outcomes: { vi: string[]; en: string[] };
  gallery?: ProjectGalleryItem[];
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "du-an-dien-mat-troi-nha-may-cong-nghiep",
    category: "industrial-solar",
    title: {
      vi: "Hệ thống điện mặt trời mái nhà xưởng sản xuất công nghiệp",
      en: "Industrial Rooftop Solar PV System",
    },
    client: { vi: "Khách hàng Doanh nghiệp", en: "Industrial Client" },
    location: { vi: "Bà Rịa – Vũng Tàu, Việt Nam", en: "Ba Ria - Vung Tau, Vietnam" },
    status: "completed",
    year: 2024,
    capacity: { vi: "Đang cập nhật", en: "Updating" },
    technology: {
      vi: "Tấm pin N-type TOPCon hai mặt kính, Inverter chuỗi 3 pha",
      en: "N-type TOPCon Bifacial Modules, 3-Phase String Inverters",
    },
    description: {
      vi: "Dự án điện mặt trời tự dùng cho diện tích mái nhà xưởng sản xuất công nghiệp, khảo sát kết cấu an toàn, thi công cuốn chiếu và không làm gián đoạn dây chuyền sản xuất.",
      en: "Industrial rooftop solar PV project engineered for manufacturing plant, including roof structural analysis, non-penetrative mounting, and MV integration.",
    },
    challenge: {
      vi: "Yêu cầu thi công nghiêm ngặt về an toàn lao động độ cao, kiểm soát chặt chẽ tải trọng mái tôn nhà xưởng và không ảnh hưởng đến hoạt động sản xuất liên tục của nhà máy.",
      en: "Strict roof load-bearing constraints, zero-leakage requirements, working-at-height safety protocols, and non-disruptive installation.",
    },
    solution: {
      vi: "TD VIỆT NAM tiến hành khảo sát kết cấu chi tiết, sử dụng hệ khung gá Kliplock chuyên dụng không đục thủng mái tôn, lập phương án thi công phân khu và trang bị hệ thống tiếp địa chống sét độc lập.",
      en: "Engineered non-penetrative clamp mounting systems, phased installation schedules, and dedicated grounding/lightning protection systems.",
    },
    engineeringScope: {
      vi: [
        "Khảo sát & Thẩm tra kết cấu mái nhà xưởng",
        "Mô phỏng sản lượng PVSyst & Báo cáo bóng che",
        "Thiết kế bản vẽ thi công IFC & Sơ đồ đơn tuyến SLD",
        "Cung ứng vật tư chính hãng & Thi công EPC",
        "Thử nghiệm nghiệm thu PAC & Đấu nối EVN",
      ],
      en: [
        "Roof structural audit & capacity verification",
        "PVSyst yield simulation & shading analysis",
        "IFC & SLD engineering drawings",
        "Procurement & EPC construction",
        "Commissioning & EVN grid connection",
      ],
    },
    keySpecifications: [
      {
        label: { vi: "Công suất lắp đặt", en: "System Capacity" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
      {
        label: { vi: "Loại tấm pin", en: "PV Module Tech" },
        value: {
          vi: "N-type TOPCon Bifacial 575W-590W",
          en: "N-type TOPCon Bifacial 575W-590W",
        },
      },
      {
        label: { vi: "Biến tần Inverter", en: "Inverter Type" },
        value: {
          vi: "Inverter chuỗi 3 pha công nghiệp IP66",
          en: "3-Phase Industrial String Inverter IP66",
        },
      },
      {
        label: { vi: "Khung giá đỡ", en: "Mounting System" },
        value: {
          vi: "Ray nhôm AL6005-T5 & Kẹp Kliplock",
          en: "AL6005-T5 Aluminum Rail & Kliplock Clamps",
        },
      },
      {
        label: { vi: "Điện áp đấu nối", en: "Grid Connection" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
    ],
    outcomes: {
      vi: [
        "Cung cấp điện năng trực tiếp cho phụ tải nhà máy",
        "Giảm nhiệt độ mái nhà xưởng từ 3-5°C vào mùa nóng",
        "Hệ thống vận hành an toàn, đạt tiêu chuẩn an toàn điện",
      ],
      en: [
        "Direct solar power supply for industrial load",
        "Roof thermal reduction by 3-5°C in summer",
        "Safe and stable continuous operation",
      ],
    },
    image: "project-industrial",
    featured: true,
  },
  {
    id: "proj-2",
    slug: "du-an-dien-mat-troi-trung-tam-logistics",
    category: "commercial-solar",
    title: {
      vi: "Hệ thống điện mặt trời Trung tâm Logistics & Bãi đỗ xe",
      en: "Commercial Solar PV & Carport System",
    },
    client: { vi: "Khách hàng Doanh nghiệp", en: "Commercial Client" },
    location: { vi: "Bình Dương, Việt Nam", en: "Binh Duong, Vietnam" },
    status: "completed",
    year: 2024,
    capacity: { vi: "Đang cập nhật", en: "Updating" },
    technology: {
      vi: "Tấm pin Tier-1, Khung Solar Carport mạ kẽm nhúng nóng",
      en: "Tier-1 PV Modules, Hot-dip Galvanized Carport Structures",
    },
    description: {
      vi: "Lắp đặt hệ thống điện mặt trời mái kho vận kết hợp khung giàn mái che bãi đỗ xe Solar Carport cung cấp điện cho hạ tầng trung tâm.",
      en: "Commercial solar installation combining logistics warehouse roofs and solar carports for vehicle shading and power generation.",
    },
    challenge: {
      vi: "Diện tích mái kho rộng và yêu cầu phương án thi công cáp điện đi ngầm an toàn qua bãi đỗ xe vận hành liên tục với mật độ container lớn.",
      en: "Long cable routing requirements and underground trenching across active logistics container lanes.",
    },
    solution: {
      vi: "Tính toán khoảng cách đấu nối, thiết kế hào cáp kỹ thuật gia cường, hệ khung bãi đỗ xe mạ kẽm nhúng nóng và tích hợp tủ phân phối điện tổng.",
      en: "Reinforced underground cable ducts, outdoor DC/AC combiner boxes, and integrated protective switchgear.",
    },
    engineeringScope: {
      vi: [
        "Thiết kế móng & kết cấu Solar Carport",
        "Tính toán tuyến cáp & tổn thất điện áp",
        "Thi công xây lắp & Đi cáp ngầm hào kỹ thuật",
        "Tích hợp tủ phân phối điện tổng MSB",
      ],
      en: [
        "Carport foundation & structural design",
        "Cable Sizing & voltage drop analysis",
        "Underground cabling & civil works",
        "Main distribution board MSB integration",
      ],
    },
    keySpecifications: [
      {
        label: { vi: "Công suất lắp đặt", en: "System Capacity" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
      {
        label: { vi: "Khung Carport", en: "Carport Structure" },
        value: {
          vi: "Thép mạ kẽm nhúng nóng chống ăn mòn",
          en: "Hot-dip Galvanized Anti-corrosion Steel",
        },
      },
      {
        label: { vi: "Inverter", en: "Inverter" },
        value: {
          vi: "Biến tần chuỗi 3 pha hòa lưới IP65",
          en: "Grid-tied 3-Phase String Inverter IP65",
        },
      },
    ],
    outcomes: {
      vi: [
        "Khai thác hiệu quả không gian mái kho và bãi đỗ xe",
        "Che chắn nắng mưa bảo vệ phương tiện vận tải",
        "Giảm chi phí điện tiêu thụ giờ cao điểm",
      ],
      en: [
        "Optimal utilization of warehouse roof & parking space",
        "Shading protection for transport fleet",
        "Peak demand cost mitigation",
      ],
    },
    image: "project-commercial",
    featured: true,
  },
  {
    id: "proj-3",
    slug: "du-an-he-thong-luu-tru-bess-nha-may",
    category: "bess",
    title: {
      vi: "Hệ thống lưu trữ năng lượng BESS cho nhà máy sản xuất",
      en: "Industrial Battery Energy Storage System (BESS)",
    },
    client: { vi: "Khách hàng Doanh nghiệp", en: "Industrial Client" },
    location: { vi: "Cần Thơ, Việt Nam", en: "Can Tho, Vietnam" },
    status: "completed",
    year: 2024,
    capacity: { vi: "Đang cập nhật", en: "Updating" },
    technology: {
      vi: "Tủ pin LFP Container ngoài trời, Tản nhiệt chất lỏng",
      en: "Outdoor LFP Containerized Battery, Liquid Cooling System",
    },
    description: {
      vi: "Lắp đặt tủ pin BESS lưu trữ điện năng dự phòng cho phụ tải quan trọng và tối ưu chi phí điện năng trong giờ cao điểm theo bài toán Peak-Shaving.",
      en: "Industrial BESS container deployment with PCS and EMS for backup power and peak shaving.",
    },
    challenge: {
      vi: "Lưới điện khu vực có thời điểm dao động điện áp chập chờn gây rủi ro ảnh hưởng tới các thiết bị nhạy cảm của dây chuyền chế biến.",
      en: "Grid voltage fluctuations and unexpected outages threatening sensitive production lines.",
    },
    solution: {
      vi: "Trang bị tủ pin LFP ngoài trời IP55 làm mát bằng chất lỏng, tích hợp hệ thống PCCC tự động Aerosol và cài đặt thuật toán chuyển mạch cô lập Islanding mượt mà.",
      en: "IP55 outdoor LFP BESS with liquid cooling, automated fire suppression, and seamless islanding transition logic.",
    },
    engineeringScope: {
      vi: [
        "Phân tích đồ thị phụ tải & nhu cầu dự phòng",
        "Lựa chọn dung lượng & thiết kế mặt bằng BESS",
        "Lắp đặt bộ biến tần PCS, BMS, EMS & PCCC",
        "Thử nghiệm kịch bản nạp/xả Peak-Shaving",
      ],
      en: [
        "Load curve analysis & backup profiling",
        "Capacity sizing & BESS layout design",
        "PCS, BMS, EMS & Fire system installation",
        "Automated charge/discharge testing",
      ],
    },
    keySpecifications: [
      {
        label: { vi: "Dung lượng lưu trữ", en: "Storage Capacity" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
      {
        label: { vi: "Công nghệ cell pin", en: "Cell Technology" },
        value: { vi: "LFP (Lithium Iron Phosphate)", en: "LFP (Lithium Iron Phosphate)" },
      },
      {
        label: { vi: "Hệ thống tản nhiệt", en: "Cooling System" },
        value: {
          vi: "Tản nhiệt chất lỏng (Liquid Cooling)",
          en: "Liquid Cooling System",
        },
      },
      {
        label: { vi: "Cấp bảo vệ", en: "Enclosure Rating" },
        value: {
          vi: "IP55 ngoài trời, chống ăn mòn C5",
          en: "IP55 Outdoor, C5 Anti-Corrosion",
        },
      },
    ],
    outcomes: {
      vi: [
        "Đảm bảo nguồn điện liên tục cho phụ tải ưu tiên",
        "Bảo vệ thiết bị dây chuyền khỏi sụt áp đột ngột",
        "Giảm chi phí mua điện từ lưới trong giờ cao điểm",
      ],
      en: [
        "Uninterrupted power for critical loads",
        "Voltage stabilization for sensitive electronics",
        "Peak-shaving cost reduction",
      ],
    },
    image: "project-microgrid",
    featured: true,
  },
  {
    id: "proj-4",
    slug: "du-an-dien-mat-troi-toa-nha-van-phong",
    category: "solar-bess",
    title: {
      vi: "Điện mặt trời mái tòa nhà văn phòng thương mại",
      en: "Commercial Office Building Solar PV & Storage",
    },
    client: { vi: "Khách hàng Doanh nghiệp", en: "Commercial Client" },
    location: { vi: "Hà Nội, Việt Nam", en: "Hanoi, Vietnam" },
    status: "completed",
    year: 2023,
    capacity: { vi: "Đang cập nhật", en: "Updating" },
    technology: {
      vi: "Tấm pin N-type TOPCon, Inverter 3 pha, Giám sát EMS",
      en: "N-type TOPCon Modules, 3-Phase Inverter, EMS Monitoring",
    },
    description: {
      vi: "Tận dụng diện tích sân thượng tòa nhà văn phòng để lắp đặt điện mặt trời kết hợp hệ thống đo đếm điện năng thông minh và bảo vệ rơ-le.",
      en: "Rooftop solar PV system engineered for a commercial tower, featuring real-time energy management and safety protection.",
    },
    challenge: {
      vi: "Không gian thao tác hạn chế trên tầng thượng tòa nhà cao tầng, yêu cầu an toàn phòng chống cháy nổ PCCC nghiêm ngặt và thẩm mỹ kiến trúc.",
      en: "Constrained rooftop space on high-rise building, strict fire safety rules, and architectural aesthetic demands.",
    },
    solution: {
      vi: "Sử dụng thiết bị ngắt khẩn cấp Rapid Shutdown ngõ DC, thi công hệ thống chống sét tiếp địa tiêu chuẩn và lắp đặt màn hình giám sát năng lượng tại sảnh.",
      en: "Rapid Shutdown DC devices, standard lightning protection grounding, and lobby display EMS integration.",
    },
    engineeringScope: {
      vi: [
        "Khảo sát hướng nắng & thiết kế không gian tầng thượng",
        "Lắp đặt dàn pin & hệ thống ngắt khẩn cấp Rapid Shutdown",
        "Tích hợp tủ phân phối điện hạ thế tòa nhà",
        "Cài đặt màn hình giám sát sảnh EMS",
      ],
      en: [
        "Rooftop solar irradiance & space optimization",
        "PV installation & Rapid Shutdown safety integration",
        "Building main low-voltage panel connection",
        "Lobby display EMS setup",
      ],
    },
    keySpecifications: [
      {
        label: { vi: "Công suất lắp đặt", en: "System Capacity" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
      {
        label: { vi: "Cấp điện áp", en: "Operating Voltage" },
        value: { vi: "380V / 220V (3 pha 4 dây)", en: "380V / 220V (3-Phase 4-Wire)" },
      },
      {
        label: { vi: "An toàn DC", en: "DC Safety" },
        value: {
          vi: "Trang bị thiết bị ngắt khẩn Rapid Shutdown",
          en: "Rapid Shutdown DC Device",
        },
      },
    ],
    outcomes: {
      vi: [
        "Cung cấp nguồn điện sạch cho hệ thống chiếu sáng và điều hòa",
        "Tăng chứng nhận công trình xanh cho tòa nhà",
        "Vận hành an toàn, tuân thủ PCCC",
      ],
      en: [
        "Clean energy supply for HVAC and lighting loads",
        "Enhanced green building sustainability rating",
        "Safe operation in compliance with fire codes",
      ],
    },
    image: "project-tower",
    featured: false,
  },
  {
    id: "proj-5",
    slug: "du-an-tram-bien-ap-va-luoi-dien-trung-the",
    category: "substation-grid",
    title: {
      vi: "Hạ tầng Trạm biến áp & Tủ đóng cắt Trung thế Nhà máy",
      en: "MV Substation & Switchgear Grid Infrastructure",
    },
    client: { vi: "Khách hàng Doanh nghiệp", en: "Industrial Client" },
    location: { vi: "Hải Phòng, Việt Nam", en: "Hai Phong, Vietnam" },
    status: "completed",
    year: 2023,
    capacity: { vi: "Đang cập nhật", en: "Updating" },
    technology: {
      vi: "Trạm biến áp, Tủ trung thế RMU, Tủ MSB, SCADA",
      en: "Transformer Substation, RMU Switchgear, MSB Panels, SCADA",
    },
    description: {
      vi: "Tư vấn thiết kế, cung ứng và lắp đặt hạ tầng trạm biến áp trung thế, tủ đóng cắt RMU, hệ thống bảo vệ rơ-le và thỏa thuận đấu nối lưới điện EVN.",
      en: "Engineering design, procurement, and installation of MV transformer substations, RMU switchgear, protection relays, and EVN grid integration.",
    },
    challenge: {
      vi: "Yêu cầu nghiêm ngặt về tiêu chuẩn kỹ thuật an toàn điện trung thế 22kV, khả năng cắt ngắn mạch và thí nghiệm kiểm định cùng Công ty Điện lực.",
      en: "Strict 22kV MV electrical safety requirements, short-circuit breaking capacity, and power utility testing protocols.",
    },
    solution: {
      vi: "Cung cấp tủ RMU cách điện khí SF6 nhập khẩu chính hãng, kiểm định thí nghiệm rơ-le bảo vệ kỹ thuật số, kéo cáp ngầm trung thế và nghiệm thu đóng điện.",
      en: "SF6 gas-insulated RMU switchgear, digital protection relay calibration, MV underground cabling, and official grid energization.",
    },
    engineeringScope: {
      vi: [
        "Thiết kế Sơ đồ đơn tuyến SLD trung/hạ thế",
        "Cung cấp máy biến áp & tủ RMU trung thế",
        "Thi công xây lắp trạm & Kéo cáp ngầm",
        "Thí nghiệm hiệu chỉnh & Đóng điện nghiệm thu",
      ],
      en: [
        "MV/LV Single Line Diagram (SLD) engineering",
        "Transformer & RMU switchgear procurement",
        "Substation civil works & MV cabling",
        "Testing, calibration & grid energization",
      ],
    },
    keySpecifications: [
      {
        label: { vi: "Cấp điện áp", en: "Voltage Rating" },
        value: { vi: "22kV / 0.4kV", en: "22kV / 0.4kV" },
      },
      {
        label: { vi: "Tủ đóng cắt", en: "Switchgear" },
        value: {
          vi: "Tủ RMU trung thế cách điện khí SF6",
          en: "SF6 Gas-Insulated RMU Switchgear",
        },
      },
      {
        label: { vi: "Bảo vệ rơ-le", en: "Relay Protection" },
        value: {
          vi: "Rơ-le bảo vệ kỹ thuật số đa năng",
          en: "Multifunctional Digital Protection Relay",
        },
      },
    ],
    outcomes: {
      vi: [
        "Đảm bảo công suất cấp điện an toàn cho toàn nhà máy",
        "Đáp ứng quy chuẩn kỹ thuật ngành điện EVN",
        "Vận hành tin cậy, an toàn cao",
      ],
      en: [
        "Safe power supply infrastructure for industrial plant",
        "Compliant with EVN grid utility regulations",
        "High operational reliability",
      ],
    },
    image: "project-industrial",
    featured: false,
  },
  {
    id: "proj-6",
    slug: "du-an-van-hanh-bao-tri-om-he-thong-dien-mat-troi",
    category: "om",
    title: {
      vi: "Dịch vụ Vận hành & Bảo trì O&M Hệ thống Điện mặt trời Công nghiệp",
      en: "Industrial Solar PV O&M Services",
    },
    client: { vi: "Khách hàng Doanh nghiệp", en: "Industrial Client" },
    location: { vi: "Đồng Nai, Việt Nam", en: "Dong Nai, Vietnam" },
    status: "ongoing",
    year: 2024,
    capacity: { vi: "Đang cập nhật", en: "Updating" },
    technology: {
      vi: "Hệ thống giám sát SCADA, Chụp ảnh nhiệt drone, Chẩn đoán I-V Curve",
      en: "SCADA System Monitoring, Thermal Drone Imaging, I-V Curve Diagnosis",
    },
    description: {
      vi: "Cung cấp dịch vụ O&M chuyên nghiệp bao gồm giám sát thông số vận hành từ xa, bảo trì phòng ngừa định kỳ và xử lý sự cố khẩn cấp tại hiện trường.",
      en: "Professional O&M services including remote performance monitoring, preventive maintenance, and rapid field troubleshooting.",
    },
    challenge: {
      vi: "Môi trường bụi bẩn công nghiệp làm suy giảm sản lượng pin, rủi ro phát sinh điểm nóng hotspot trên tấm pin qua thời gian vận hành.",
      en: "Industrial dust accumulation reducing PV yield and potential thermal hotspot risks over extended operation.",
    },
    solution: {
      vi: "Lập kế hoạch vệ sinh tấm pin chuyên nghiệp, định kỳ bay drone quét ảnh nhiệt hồng ngoại, đo đạc đường cong I-V và xiết lực điểm nối cáp điện.",
      en: "Scheduled PV cleaning routines, drone infrared thermal scanning, I-V curve string testing, and electrical connection torque checks.",
    },
    engineeringScope: {
      vi: [
        "Giám sát hệ thống từ xa & cảnh báo tự động",
        "Kiểm tra nhiệt hồng ngoại drone & Đo I-V Curve",
        "Vệ sinh tấm pin & Bảo trì Inverter/Tủ điện",
        "Báo cáo chỉ số hiệu suất PR & Khắc phục sự cố",
      ],
      en: [
        "Remote system monitoring & automated alerts",
        "Thermal drone scanning & I-V curve testing",
        "PV cleaning & Inverter/Switchgear servicing",
        "PR performance reporting & fault fixing",
      ],
    },
    keySpecifications: [
      {
        label: { vi: "Thời gian giám sát", en: "Monitoring Schedule" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
      {
        label: { vi: "Thời gian ứng cứu", en: "Field Response Time" },
        value: { vi: "Trong vòng 2 - 4 giờ", en: "Within 2 - 4 hours" },
      },
      {
        label: { vi: "Báo cáo định kỳ", en: "Reporting Frequency" },
        value: { vi: "Hàng tháng & Hàng năm", en: "Monthly & Annual" },
      },
    ],
    outcomes: {
      vi: [
        "Duy trì tỷ lệ hiệu suất PR đạt cam kết",
        "Phát hiện sớm và loại bỏ nguy cơ điểm nóng hotspot",
        "Kéo dài tuổi thọ thiết bị công trình",
      ],
      en: [
        "Performance Ratio (PR) target achievement",
        "Early hotspot detection & risk elimination",
        "Extended equipment service life",
      ],
    },
    image: "project-commercial",
    featured: false,
  },
];
