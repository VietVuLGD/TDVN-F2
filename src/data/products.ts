export type ProductCategoryKey =
  | "solar-modules"
  | "inverters"
  | "bess"
  | "transformers"
  | "switchgear"
  | "protection"
  | "accessories";

export type ProductStatus = "active" | "coming_soon" | "updating";

export type LocalizedString = {
  vi: string;
  en: string;
};

export type LocalizedStringArray = {
  vi: string[];
  en: string[];
};

export type SpecificationItem = {
  label: LocalizedString;
  value: LocalizedString;
  highlight?: boolean;
};

export type ProductBrandData = {
  brand: string;
  manufacturer?: string;
  authorizedDistributor?: boolean;
  technology?: string;
};

export type ProductCategory = {
  key: ProductCategoryKey;
  name: LocalizedString;
  description: LocalizedString;
  subcategories: { key: string; name: LocalizedString }[];
};

export type ProductImageType = "primary" | "gallery" | "technical" | "nameplate";

export type ProductImage = {
  src: string; // Image URL, asset import path, or relative file path (e.g. /images/products/...)
  alt: LocalizedString; // Localized alt text for accessibility and SEO
  caption?: LocalizedString; // Optional caption for image detail view
  type?: ProductImageType; // Purpose: primary hero image, gallery angle, technical drawing, or nameplate
  width?: number; // Intrinsic width to prevent Cumulative Layout Shift (CLS)
  height?: number; // Intrinsic height to prevent Cumulative Layout Shift (CLS)
};

export type Product = {
  id: string;
  slug: string;
  category: ProductCategoryKey;
  subcategory?: string;
  brand?: string;
  model?: string;
  name: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  image?: string; // Legacy string key for backward compatibility
  gallery?: string[]; // Legacy array of image keys for backward compatibility
  images?: ProductImage[]; // Strongly typed product image architecture
  specifications: SpecificationItem[];
  applications: LocalizedStringArray;
  features: LocalizedStringArray;
  certifications: LocalizedStringArray;
  datasheets: string[]; // Reference to Document IDs
  relatedProducts: string[]; // Product Slugs
  status: ProductStatus;
  featured: boolean;
  brandData?: ProductBrandData;
};

/**
 * Returns the primary ProductImage if available in the product.images architecture.
 */
export function getPrimaryProductImage(product: Product): ProductImage | undefined {
  if (product.images && product.images.length > 0) {
    return product.images.find((img) => img.type === "primary") || product.images[0];
  }
  return undefined;
}

/**
 * Returns all ProductImage items from the product.images architecture.
 */
export function getProductGalleryImages(product: Product): ProductImage[] {
  if (product.images && product.images.length > 0) {
    return product.images;
  }
  return [];
}

export const productCategories: ProductCategory[] = [
  {
    key: "solar-modules",
    name: { vi: "Tấm pin mặt trời", en: "Solar Modules" },
    description: {
      vi: "Tấm pin quang điện hiệu suất cao, công nghệ N-type TOPCon, hai mặt kính cho dự án công nghiệp.",
      en: "High-efficiency PV modules featuring N-type TOPCon bifacial technology for industrial projects.",
    },
    subcategories: [
      { key: "n-type-topcon", name: { vi: "N-type TOPCon", en: "N-type TOPCon" } },
      { key: "bifacial", name: { vi: "Hai mặt kính (Bifacial)", en: "Bifacial Glass-Glass" } },
      { key: "monocrystalline", name: { vi: "Đơn tinh thể (Mono)", en: "Monocrystalline" } },
    ],
  },
  {
    key: "inverters",
    name: { vi: "Inverter", en: "Inverters" },
    description: {
      vi: "Biến tần chuỗi ba pha, inverter Hybrid dự phòng và hệ thống quản lý hòa lưới chất lượng cao.",
      en: "Three-phase string inverters, hybrid backup inverters, and grid-tied power conversion systems.",
    },
    subcategories: [
      { key: "string-inverter", name: { vi: "Inverter chuỗi (String)", en: "String Inverter" } },
      { key: "hybrid-inverter", name: { vi: "Inverter Hybrid", en: "Hybrid Inverter" } },
      { key: "central-inverter", name: { vi: "Inverter tập trung", en: "Central Inverter" } },
    ],
  },
  {
    key: "bess",
    name: { vi: "Hệ thống BESS", en: "BESS Systems" },
    description: {
      vi: "Giải pháp lưu trữ năng lượng pin LFP, tích hợp tản nhiệt chất lỏng, BMS và hệ thống PCCC tự động.",
      en: "Containerized & cabinet LFP battery energy storage systems with liquid cooling & auto fire suppression.",
    },
    subcategories: [
      {
        key: "commercial-bess",
        name: { vi: "BESS Thương mại & Công nghiệp", en: "Commercial & Industrial BESS" },
      },
      { key: "battery-cabinet", name: { vi: "Tủ pin ngoài trời", en: "Outdoor Battery Cabinet" } },
      { key: "container-bess", name: { vi: "BESS Container", en: "Containerized BESS" } },
    ],
  },
  {
    key: "transformers",
    name: { vi: "Máy biến áp", en: "Transformers" },
    description: {
      vi: "Máy biến áp khô & máy biến áp dầu chuyên dụng nâng áp cho trạm biến áp điện mặt trời.",
      en: "Dry-type and oil-immersed step-up transformers engineered for solar PV substations.",
    },
    subcategories: [
      { key: "dry-type", name: { vi: "Máy biến áp khô", en: "Dry-type Transformer" } },
      { key: "oil-immersed", name: { vi: "Máy biến áp dầu", en: "Oil-immersed Transformer" } },
    ],
  },
  {
    key: "switchgear",
    name: { vi: "Tủ điện & Switchgear", en: "Switchgear & Cabinets" },
    description: {
      vi: "Tủ điện phân phối hạ thế MSB, tủ hòa đồng bộ, tủ trung thế RMU 24kV/35kV đạt chuẩn an toàn.",
      en: "Medium-voltage RMU switchgear, low-voltage distribution boards (MSB), and AC combiner panels.",
    },
    subcategories: [
      { key: "mv-switchgear", name: { vi: "Tủ trung thế RMU", en: "Medium Voltage RMU" } },
      { key: "lv-switchgear", name: { vi: "Tủ điện hạ thế MSB", en: "Low Voltage MSB Panel" } },
      { key: "combiner-box", name: { vi: "Tủ hòa đồng bộ & AC", en: "AC Combiner Cabinet" } },
    ],
  },
  {
    key: "protection",
    name: { vi: "Thiết bị bảo vệ", en: "Protection Equipment" },
    description: {
      vi: "Aptomat ACB/MCCB, thiết bị chống sét lan truyền SPD 1500V, cầu chì DC và công tắc cách ly.",
      en: "DC/AC circuit breakers, 1500V surge protection devices (SPD), DC fuses, and isolation switches.",
    },
    subcategories: [
      { key: "circuit-breaker", name: { vi: "Aptomat ACB / MCCB", en: "ACB / MCCB Breaker" } },
      {
        key: "surge-protection",
        name: { vi: "Chống sét lan truyền (SPD)", en: "Surge Protection (SPD)" },
      },
      { key: "dc-isolation", name: { vi: "Cầu chì & Công tắc DC", en: "DC Fuse & Switch" } },
    ],
  },
  {
    key: "accessories",
    name: { vi: "Phụ kiện hệ thống", en: "System Accessories" },
    description: {
      vi: "Ray nhôm AL6005-T5, phụ kiện kẹp seamlock, cáp điện DC Solar 1500V và đầu nối MC4 chính hãng.",
      en: "AL6005-T5 aluminium mounting rails, seamlock clamps, 1500V DC solar cables, and MC4 connectors.",
    },
    subcategories: [
      {
        key: "mounting-rail",
        name: { vi: "Ray nhôm & Khung gá", en: "Mounting Rail & Structure" },
      },
      { key: "dc-cable", name: { vi: "Cáp điện DC Solar", en: "DC Solar Cable" } },
      {
        key: "connectors",
        name: { vi: "Đầu nối MC4 & Cọc tiếp địa", en: "MC4 Connectors & Grounding" },
      },
    ],
  },
];

export const products: Product[] = [
  {
    id: "prod-001",
    slug: "solar-module-n-type",
    category: "solar-modules",
    subcategory: "n-type-topcon",
    brand: "Trina Solar / Jinko Solar",
    model: "TOPCon 580W - 600W",
    name: {
      vi: "Tấm pin mặt trời N-type TOPCon 580W - 600W",
      en: "N-type TOPCon 580W - 600W PV Module",
    },
    shortDescription: {
      vi: "Tấm pin quang điện N-type TOPCon hai mặt kính chuyên dụng cho công trình công nghiệp & thương mại.",
      en: "High-efficiency N-type TOPCon bifacial glass-glass module designed for C&I applications.",
    },
    description: {
      vi: "Tấm pin quang điện sử dụng công nghệ N-type TOPCon hai mặt kính đạt chuẩn quốc tế, tối ưu khả năng phát điện trong điều kiện khí hậu nhiệt đới ẩm tại Việt Nam. Hệ số nhiệt độ cực thấp giúp giảm thiểu tổn thất công suất khi vận hành ở nhiệt độ cao.",
      en: "Utility and C&I grade PV module utilizing N-type TOPCon bifacial technology. Engineered for high ambient humidity and temperature resilience in tropical environments with minimal thermal degradation.",
    },
    image: "hero-solar",
    specifications: [
      {
        label: { vi: "Công nghệ cell pin", en: "Cell Technology" },
        value: { vi: "N-type TOPCon Dual-Glass", en: "N-type TOPCon Dual-Glass" },
        highlight: true,
      },
      {
        label: { vi: "Cấu tạo kính", en: "Glass Structure" },
        value: { vi: "Hai mặt kính cường lực 2.0mm", en: "2.0mm Dual Tempered Glass" },
      },
      {
        label: { vi: "Hộp đấu nối", en: "Junction Box" },
        value: { vi: "Đạt chuẩn IP68 (3 diode)", en: "IP68 Rated (3 Diodes)" },
      },
      {
        label: { vi: "Tải trọng cơ học", en: "Mechanical Load" },
        value: { vi: "Mặt trước 5400 Pa / Mặt sau 2400 Pa", en: "Front 5400 Pa / Rear 2400 Pa" },
      },
      {
        label: { vi: "Kháng môi trường", en: "Environmental Resistance" },
        value: { vi: "Kháng sương muối, amoniac & PID", en: "Salt Mist, Ammonia & PID Resistant" },
      },
      {
        label: { vi: "Tiêu chuẩn kỹ thuật", en: "Technical Standards" },
        value: { vi: "IEC 61215 / IEC 61730", en: "IEC 61215 / IEC 61730" },
      },
      {
        label: { vi: "Hiệu suất quang năng", en: "Module Efficiency" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
    ],
    applications: {
      vi: [
        "Mái nhà xưởng công nghiệp",
        "Dự án điện mặt trời mặt đất",
        "Bãi đỗ xe thông minh Solar Carport",
      ],
      en: ["Industrial Rooftop Systems", "Ground-Mounted Solar Farms", "Solar Carport Structures"],
    },
    features: {
      vi: [
        "Hệ số phát điện mặt sau gia tăng từ 10% - 25% tùy bề mặt phản xạ.",
        "Hệ số nhiệt độ thấp (-0.30%/°C) tối ưu sản lượng trong mùa nắng nóng.",
        "Thiết kế hai mặt kính cường lực chống ăn mòn hóa chất và hơi muối biển.",
        "Hộp đấu nối IP68 tản nhiệt vượt trội và chống thấm nước tuyệt đối.",
      ],
      en: [
        "Bifacial power gain ranging from 10% to 25% depending on albedo.",
        "Ultra-low temperature coefficient (-0.30%/°C) maximizing summer yields.",
        "Dual-tempered glass construction providing high chemical and salt resistance.",
        "IP68 rated junction box ensuring complete dust and water ingress protection.",
      ],
    },
    certifications: {
      vi: ["IEC 61215", "IEC 61730", "ISO 9001:2015", "ISO 14001"],
      en: ["IEC 61215", "IEC 61730", "ISO 9001:2015", "ISO 14001"],
    },
    datasheets: ["doc-001"],
    relatedProducts: ["string-inverter-industrial", "mounting-rail-pro"],
    status: "active",
    featured: true,
    brandData: {
      brand: "Trina / Jinko",
      manufacturer: "Tier-1 PV Manufacturer",
      authorizedDistributor: true,
      technology: "N-type TOPCon Bifacial",
    },
  },
  {
    id: "prod-002",
    slug: "string-inverter-industrial",
    category: "inverters",
    subcategory: "string-inverter",
    brand: "Sungrow / Huawei",
    model: "100kW - 125kW 3-Phase",
    name: {
      vi: "Inverter chuỗi 3 pha công nghiệp 100kW - 125kW",
      en: "Three-Phase Industrial String Inverter 100kW - 125kW",
    },
    shortDescription: {
      vi: "Biến tần chuỗi công suất lớn tích hợp nhiều MPPT độc lập, bộ bảo vệ AFCI và chuẩn truyền thông Modbus.",
      en: "High-power 3-phase string inverter with multi-MPPT tracking, AFCI protection, and SCADA readiness.",
    },
    description: {
      vi: "Inverter chuỗi 3 pha công nghiệp chuyên dụng cho các nhà máy, khu chế xuất và tòa nhà thương mại. Tích hợp công nghệ chẩn đoán đường cong I-V thông minh, bảo vệ chống hồ quang điện AFCI và bộ chống sét lan truyền Type II cho cả ngõ DC và AC.",
      en: "Commercial-grade 3-phase string inverter engineered for industrial facilities and rooftop assets. Features smart I-V curve diagnosis, integrated AFCI arc-fault circuit interrupter, and Type II SPD on both DC and AC ports.",
    },
    image: "project-industrial",
    specifications: [
      {
        label: { vi: "Điện áp ngõ ra AC", en: "AC Nominal Output Voltage" },
        value: { vi: "3 pha 380V / 400V (50Hz/60Hz)", en: "3-Phase 380V / 400V (50Hz/60Hz)" },
        highlight: true,
      },
      {
        label: { vi: "Cấp bảo vệ vỏ tủ", en: "Ingress Protection" },
        value: { vi: "IP66 / Chống ăn mòn cấp C5", en: "IP66 / C5 Corrosion Resistance" },
      },
      {
        label: { vi: "Truyền thông & Giám sát", en: "Communication Protocols" },
        value: { vi: "RS485, Ethernet, Modbus TCP", en: "RS485, Ethernet, Modbus TCP" },
      },
      {
        label: { vi: "Bảo vệ tích hợp", en: "Integrated Safety Features" },
        value: { vi: "AFCI, Chống sét Type II (DC & AC)", en: "AFCI, Type II SPD (DC & AC)" },
      },
      {
        label: { vi: "Hệ thống làm mát", en: "Cooling Method" },
        value: { vi: "Tản nhiệt khí cưỡng bức thông minh", en: "Smart Forced Air Cooling" },
      },
      {
        label: { vi: "Hiệu suất tối đa", en: "Max Efficiency" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
    ],
    applications: {
      vi: [
        "Nhà xưởng trong khu công nghiệp",
        "Trung tâm thương mại & Logistics",
        "Hệ thống điện tự dùng doanh nghiệp",
      ],
      en: [
        "Industrial Factory Rooftops",
        "Commercial Logistics Hubs",
        "Self-Consumption PV Systems",
      ],
    },
    features: {
      vi: [
        "Nhiều bộ theo dõi MPPT độc lập giảm thiểu tổn thất do che bóng cục bộ.",
        "Bảo vệ AFCI tự động ngắt mạch trong vòng 0.5s khi phát hiện sự cố hồ quang.",
        "Sẵn sàng kết nối giao thức SCADA / EMS phục vụ quản lý năng lượng tập trung.",
        "Vỏ tủ tiêu chuẩn IP66 lắp đặt an toàn ngoài trời không cần mái che.",
      ],
      en: [
        "Multiple independent MPPT trackers mitigating localized shading mismatch.",
        "AFCI protection triggering rapid shutdown within 0.5s upon arc detection.",
        "SCADA / EMS protocol compatible for centralized asset management.",
        "IP66 weatherproof enclosure rated for unshielded outdoor operation.",
      ],
    },
    certifications: {
      vi: ["IEC 62109-1", "IEC 62109-2", "EN 50549", "Quy chuẩn đấu nối EVN"],
      en: ["IEC 62109-1", "IEC 62109-2", "EN 50549", "EVN Grid Code Compliant"],
    },
    datasheets: ["doc-002"],
    relatedProducts: ["solar-module-n-type", "bess-cabinet-lfp"],
    status: "active",
    featured: true,
    brandData: {
      brand: "Sungrow / Huawei",
      manufacturer: "Tier-1 Inverter Manufacturer",
      authorizedDistributor: true,
      technology: "Multi-MPPT String Inverter",
    },
  },
  {
    id: "prod-003",
    slug: "hybrid-inverter-commercial",
    category: "inverters",
    subcategory: "hybrid-inverter",
    brand: "GoodWe / Deye",
    model: "15kW - 30kW Hybrid",
    name: {
      vi: "Inverter Hybrid dự phòng 15kW - 30kW",
      en: "Commercial Hybrid Backup Inverter 15kW - 30kW",
    },
    shortDescription: {
      vi: "Biến tần Hybrid chuyển mạch nguồn dự phòng dưới 20ms cho phụ tải ưu tiên và kết nối máy phát.",
      en: "Commercial hybrid inverter featuring under 20ms backup switching time and generator integration.",
    },
    description: {
      vi: "Biến tần Hybrid ba pha phục vụ các cơ sở sản xuất, văn phòng và kho lạnh có nhu cầu nguồn điện dự phòng liên tục. Hệ thống hỗ trợ lập trình điều khiển sạc/xả pin thông minh theo giờ cao điểm/thấp điểm và kết nối trực tiếp máy phát điện dự phòng.",
      en: "Three-phase hybrid power inverter designed for facilities requiring seamless emergency backup power. Supports peak-shaving scheduled charging and automatic generator start control.",
    },
    image: "hero-solar",
    specifications: [
      {
        label: { vi: "Chế độ vận hành", en: "Operating Modes" },
        value: {
          vi: "Hòa lưới, Dự phòng (Off-grid), Hybrid",
          en: "Grid-tied, Backup (Off-grid), Hybrid",
        },
        highlight: true,
      },
      {
        label: { vi: "Thời gian chuyển mạch", en: "Backup Switch Time" },
        value: { vi: "Dưới 20ms (EPS / UPS-class)", en: "Under 20ms (EPS / UPS-class)" },
      },
      {
        label: { vi: "Kết nối mở rộng", en: "Auxiliary Ports" },
        value: {
          vi: "Cổng điều khiển máy phát điện & Tải ưu tiên",
          en: "Generator Start Control & Priority Load",
        },
      },
      {
        label: { vi: "Cấp bảo vệ vỏ tủ", en: "Ingress Protection" },
        value: { vi: "IP65", en: "IP65" },
      },
      {
        label: { vi: "Bảo hành thiết bị", en: "Warranty Period" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
    ],
    applications: {
      vi: [
        "Tòa nhà văn phòng & Dữ liệu",
        "Kho lạnh bảo quản nông sản",
        "Cơ sở y tế & Trung tâm điều hành",
      ],
      en: [
        "Office Buildings & Data Hubs",
        "Cold Storage Facilities",
        "Healthcare & Control Centers",
      ],
    },
    features: {
      vi: [
        "Chuyển mạch nguồn dự phòng siêu nhanh không làm gián đoạn thiết bị điện tử.",
        "Hỗ trợ cấu hình song song nhiều inverter để mở rộng công suất.",
        "Tích hợp tính năng Peak-Shaving tối ưu chi phí điện giờ cao điểm.",
      ],
      en: [
        "Ultra-fast backup power transition preventing IT load interruption.",
        "Supports multi-unit parallel connection for system capacity expansion.",
        "Integrated peak-shaving algorithm optimizing time-of-use energy tariffs.",
      ],
    },
    certifications: {
      vi: ["IEC 62109", "CE", "Quy chuẩn EVN"],
      en: ["IEC 62109", "CE", "EVN Grid Code"],
    },
    datasheets: ["doc-003"],
    relatedProducts: ["bess-cabinet-lfp", "string-inverter-industrial"],
    status: "active",
    featured: false,
    brandData: {
      brand: "GoodWe / Deye",
      manufacturer: "Hybrid Inverter Manufacturer",
      authorizedDistributor: true,
      technology: "Hybrid Power Storage",
    },
  },
  {
    id: "prod-004",
    slug: "bess-cabinet-lfp",
    category: "bess",
    subcategory: "commercial-bess",
    brand: "CATL / BYD",
    model: "100kWh - 215kWh Cabinet",
    name: {
      vi: "Tủ lưu trữ năng lượng BESS LFP 100kWh - 215kWh",
      en: "Commercial LFP BESS Outdoor Cabinet 100kWh - 215kWh",
    },
    shortDescription: {
      vi: "Tủ pin BESS ngoài trời tiêu chuẩn IP55, tản nhiệt bằng chất lỏng và PCCC tự động tích hợp.",
      en: "Outdoor rated LFP battery cabinet with liquid cooling, cell-level BMS, and automatic aerosol fire suppression.",
    },
    description: {
      vi: "Hệ thống tủ lưu trữ năng lượng pin LiFePO4 (LFP) ngoài trời chuyên dụng cho doanh nghiệp. Trang bị công nghệ làm mát bằng chất lỏng duy trì nhiệt độ cell pin đồng đều, gia tăng tuổi thọ chu kỳ sạc/xả và tích hợp hệ thống báo cháy, chữa cháy aerosol tự động an toàn.",
      en: "Outdoor integrated LFP battery energy storage cabinet engineered for peak shaving and emergency backup. Features liquid thermal management for extended battery life and automated fire suppression system.",
    },
    image: "project-microgrid",
    specifications: [
      {
        label: { vi: "Công nghệ cell pin", en: "Cell Chemistry" },
        value: { vi: "Lithium Iron Phosphate (LiFePO₄)", en: "Lithium Iron Phosphate (LiFePO₄)" },
        highlight: true,
      },
      {
        label: { vi: "Công nghệ tản nhiệt", en: "Thermal Management" },
        value: { vi: "Làm mát bằng chất lỏng (Liquid Cooling)", en: "Liquid Thermal Management" },
      },
      {
        label: { vi: "Hệ thống PCCC", en: "Fire Protection" },
        value: {
          vi: "Cảm biến khói/nhiệt & Chữa cháy Aerosol",
          en: "Smoke/Heat Detection & Aerosol Fire System",
        },
      },
      {
        label: { vi: "Tiêu chuẩn vỏ tủ", en: "Enclosure Ingress" },
        value: {
          vi: "IP55 ngoài trời, chống ăn mòn C5",
          en: "IP55 Outdoor Rated, C5 Anti-Corrosion",
        },
      },
      {
        label: { vi: "Quản lý pin BMS", en: "BMS Architecture" },
        value: {
          vi: "Quản lý 3 cấp (Cell - Module - System)",
          en: "3-Tier BMS (Cell - Module - System)",
        },
      },
      {
        label: { vi: "Số chu kỳ sạc/xả", en: "Cycle Life" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
    ],
    applications: {
      vi: [
        "Cắt giảm công suất đỉnh (Peak Shaving)",
        "Cung cấp điện dự phòng nhà máy",
        "Trạm sạc xe điện EV & Microgrid",
      ],
      en: [
        "Peak-Shaving Energy Cost Reduction",
        "Industrial Backup Power Supply",
        "EV Fast Charging & Microgrids",
      ],
    },
    features: {
      vi: [
        "Cell pin LFP an toàn cháy nổ cao với tuổi thọ thiết kế trên 10 năm.",
        "Hệ thống làm mát bằng chất lỏng giữ chênh lệch nhiệt độ giữa các cell dưới 2.5°C.",
        "Tích hợp đầy đủ BMS, PCS, tủ phân phối AC/DC trong một khối tủ gọn gàng.",
        "Hỗ trợ giám sát từ xa 24/7 và cảnh báo sự cố đa tầng.",
      ],
      en: [
        "Thermally stable LFP cells designed for a 10+ year operational lifespan.",
        "Liquid cooling keeping cell temperature delta below 2.5°C across the pack.",
        "All-in-one footprint integrating BMS, PCS, and AC/DC distribution switchgear.",
        "24/7 cloud monitoring with multi-stage fault warning capabilities.",
      ],
    },
    certifications: {
      vi: ["UL 9540A", "IEC 62619", "UN 38.3", "Tiêu chuẩn PCCC Việt Nam"],
      en: ["UL 9540A", "IEC 62619", "UN 38.3", "Vietnam Fire Safety Certified"],
    },
    datasheets: ["doc-004"],
    relatedProducts: ["hybrid-inverter-commercial", "energy-ems-platform"],
    status: "active",
    featured: true,
    brandData: {
      brand: "CATL / BYD",
      manufacturer: "Global Tier-1 Battery Manufacturer",
      authorizedDistributor: true,
      technology: "LFP Liquid Cooling BESS",
    },
  },
  {
    id: "prod-005",
    slug: "dry-type-transformer-22kv",
    category: "transformers",
    subcategory: "dry-type",
    brand: "ABB / Schneider / Thibidi",
    model: "22kV/0.4kV 1000kVA - 2500kVA",
    name: {
      vi: "Máy biến áp khô 3 pha 22kV/0.4kV 1000kVA - 2500kVA",
      en: "3-Phase Dry-Type Step-Up Transformer 22kV/0.4kV 1000kVA - 2500kVA",
    },
    shortDescription: {
      vi: "Máy biến áp khô đúc nhựa Epoxy chống cháy, độ ồn thấp cho trạm biến áp nhà xưởng & tòa nhà.",
      en: "Cast resin dry-type transformer engineered for high safety indoor substations and industrial facilities.",
    },
    description: {
      vi: "Máy biến áp khô đúc nhựa Epoxy công suất 1000kVA - 2500kVA chuyên dùng nâng áp cho các dự án điện mặt trời mái nhà xưởng hoặc trạm biến áp phân phối công nghiệp. Sản phẩm đáp ứng các tiêu chuẩn nghiêm ngặt về an toàn phòng chống cháy nổ và thân thiện môi trường.",
      en: "Cast resin dry-type transformer designed for step-up solar PV grid connection and industrial substations. Provides high flame retardancy, low noise emissions, and minimal maintenance overhead.",
    },
    image: "project-tower",
    specifications: [
      {
        label: { vi: "Điện áp danh định", en: "Rated Voltage" },
        value: { vi: "Trung thế 22kV / Hạ thế 0.4kV", en: "MV 22kV / LV 0.4kV" },
        highlight: true,
      },
      {
        label: { vi: "Công nghệ cuộn dây", en: "Winding Technology" },
        value: { vi: "Đúc nhựa Epoxy chân không (Cast Resin)", en: "Vacuum Cast Resin Epoxy" },
      },
      {
        label: { vi: "Cấp cách điện / Cấp chịu nhiệt", en: "Insulation Class" },
        value: { vi: "Cấp F / Cấp H", en: "Class F / Class H" },
      },
      {
        label: { vi: "Cấp bảo vệ vỏ tủ", en: "Enclosure Ingress" },
        value: { vi: "IP21 (Trong nhà) / IP44 (Ngoài trời)", en: "IP21 (Indoor) / IP44 (Outdoor)" },
      },
      {
        label: { vi: "Tiêu chuẩn kỹ thuật", en: "Applicable Standards" },
        value: { vi: "IEC 60076-11 / TCVN 6306-11", en: "IEC 60076-11 / TCVN 6306-11" },
      },
    ],
    applications: {
      vi: [
        "Trạm biến áp trung thế nhà xưởng",
        "Hệ thống đấu nối lưới điện mặt trời",
        "Tòa nhà cao tầng & Trung tâm thương mại",
      ],
      en: [
        "Industrial Plant Substation",
        "Solar PV Grid Connection Station",
        "Commercial High-rise Towers",
      ],
    },
    features: {
      vi: [
        "Không sử dụng dầu cách điện, loại bỏ hoàn toàn nguy cơ rò rỉ hóa chất và cháy nổ.",
        "Khả năng chịu quá tải nhiệt cao và kháng ẩm vượt trội.",
        "Tích hợp cảm biến nhiệt độ PT100 theo dõi trực tiếp cuộn dây.",
      ],
      en: [
        "Oil-free design eliminating chemical leak hazards and reducing fire risks.",
        "High thermal overload capacity and superior moisture resistance.",
        "Integrated PT100 temperature sensors providing direct winding monitoring.",
      ],
    },
    certifications: {
      vi: ["IEC 60076-11", "TCVN 6306-11", "Kiểm định Tổng công ty Điện lực"],
      en: ["IEC 60076-11", "TCVN 6306-11", "EVN Power Grid Tested"],
    },
    datasheets: ["doc-005"],
    relatedProducts: ["switchgear-rmu-24kv-msb", "dc-protection-spd-fuse-1500v"],
    status: "active",
    featured: false,
    brandData: {
      brand: "ABB / Schneider / Thibidi",
      manufacturer: "Verified Transformer Manufacturer",
      authorizedDistributor: true,
      technology: "Cast Resin Dry Transformer",
    },
  },
  {
    id: "prod-006",
    slug: "switchgear-rmu-24kv-msb",
    category: "switchgear",
    subcategory: "mv-switchgear",
    brand: "Schneider / ABB / Siemens",
    model: "RMU 24kV / 35kV & MSB Panel",
    name: {
      vi: "Tủ điện trung thế RMU 24kV/35kV & Tủ hạ thế MSB",
      en: "24kV/35kV MV Switchgear RMU & LV Distribution Panel (MSB)",
    },
    shortDescription: {
      vi: "Tủ trung thế cách điện khí SF6/Shielded Solid và tủ điện hạ thế MSB tích hợp máy cắt ACB/MCCB.",
      en: "Gas-insulated MV Ring Main Unit (RMU) and main LV distribution board (MSB) for power control.",
    },
    description: {
      vi: "Giải pháp tủ điện trung thế RMU cách điện khí SF6 / không khí khô và tủ điện hạ thế tổng MSB gia công lắp ráp theo bản vẽ kỹ thuật dự án. Đảm bảo khả năng cắt dòng ngắn mạch cao, cách ly an toàn và tích hợp đo lường điện năng.",
      en: "Project-tailored medium-voltage Ring Main Unit (RMU) and Low-Voltage Main Switchboard (MSB). Designed for high short-circuit breaking capacity, safe circuit isolation, and power quality metering.",
    },
    image: "project-commercial",
    specifications: [
      {
        label: { vi: "Điện áp định mức MV", en: "Rated MV Voltage" },
        value: { vi: "24kV / 35kV (50Hz)", en: "24kV / 35kV (50Hz)" },
        highlight: true,
      },
      {
        label: { vi: "Dòng định mức thanh cái", en: "Busbar Rated Current" },
        value: { vi: "630A - 2500A", en: "630A - 2500A" },
      },
      {
        label: { vi: "Dòng cắt ngắn mạch", en: "Short-Circuit Breaking" },
        value: { vi: "20kA/3s - 50kA/1s", en: "20kA/3s - 50kA/1s" },
      },
      {
        label: { vi: "Tiêu chuẩn sản xuất", en: "Manufacturing Standard" },
        value: { vi: "IEC 62271-200 / IEC 61439-1&2", en: "IEC 62271-200 / IEC 61439-1&2" },
      },
      {
        label: { vi: "Cấp bảo vệ vỏ tủ", en: "Enclosure Ingress" },
        value: { vi: "IP43 / IP54", en: "IP43 / IP54" },
      },
    ],
    applications: {
      vi: [
        "Trạm đóng cắt trung thế dự án",
        "Tủ phân phối tổng nhà máy",
        "Hệ thống điện mặt trời hòa lưới",
      ],
      en: [
        "Project MV Switching Stations",
        "Factory Main Distribution Room",
        "Grid-Tied Solar Power Stations",
      ],
    },
    features: {
      vi: [
        "Vỏ tủ mạ kẽm sơn tĩnh điện chống ăn mòn vượt trội.",
        "Trang bị khóa liên động cơ khí an toàn cho kỹ sư vận hành.",
        "Thiết kế nhỏ gọn tiết kiệm diện tích phòng trạm.",
      ],
      en: [
        "Galvanized steel powder-coated enclosure providing anti-corrosion protection.",
        "Integrated safety mechanical interlocks for operating personnel.",
        "Compact modular footprint optimizing substation floor space.",
      ],
    },
    certifications: {
      vi: ["IEC 62271-200", "IEC 61439", "Thử nghiệm Type-test độc lập"],
      en: ["IEC 62271-200", "IEC 61439", "Independent Type-tested"],
    },
    datasheets: ["doc-006"],
    relatedProducts: ["dry-type-transformer-22kv", "dc-protection-spd-fuse-1500v"],
    status: "active",
    featured: false,
    brandData: {
      brand: "Schneider / ABB / Siemens",
      manufacturer: "Certified Switchgear Manufacturer",
      authorizedDistributor: true,
      technology: "MV/LV Power Distribution",
    },
  },
  {
    id: "prod-007",
    slug: "dc-protection-spd-fuse-1500v",
    category: "protection",
    subcategory: "surge-protection",
    brand: "Dehn / Phoenix Contact / Eaton",
    model: "SPD Type II 1500V DC & Fuse",
    name: {
      vi: "Thiết bị bảo vệ chống sét SPD 1500V DC & Cầu chì",
      en: "1500V DC Surge Protection Device (SPD) & Fuse System",
    },
    shortDescription: {
      vi: "Bộ chống sét lan truyền SPD 1500V DC, cầu chì bảo vệ string và công tắc cách ly DC chuyên dụng.",
      en: "Heavy-duty 1500V DC surge arrester, gPV string fuses, and load break isolators for solar arrays.",
    },
    description: {
      vi: "Hệ thống thiết bị bảo vệ chuyên dụng cho các chuỗi pin mặt trời điện áp cao 1500V DC. Bao gồm thiết bị cắt lọc sét lan truyền SPD Type II / Type I+II, vỏ cầu chì gPV chịu áp 1500V và công tắc đóng cắt cách ly tải DC đảm bảo an toàn tuyệt đối khi vận hành và bảo trì.",
      en: "Dedicated protection suite engineered for 1500V DC high-voltage solar strings. Features Type I+II surge protective arresters, gPV rated DC fuses, and heavy-duty load break isolators.",
    },
    image: "project-agri",
    specifications: [
      {
        label: { vi: "Điện áp vận hành tối đa", en: "Max Operating Voltage" },
        value: { vi: "1500V DC", en: "1500V DC" },
        highlight: true,
      },
      {
        label: { vi: "Cấp bảo vệ cắt sét", en: "SPD Protection Class" },
        value: {
          vi: "Type II / Type I+II (In 20kA, Imax 40kA)",
          en: "Type II / Type I+II (In 20kA, Imax 40kA)",
        },
      },
      {
        label: { vi: "Chuẩn cầu chì DC", en: "Fuse Standard" },
        value: { vi: "gPV 10x85mm / 14x65mm (15A - 32A)", en: "gPV 10x85mm / 14x65mm (15A - 32A)" },
      },
      {
        label: { vi: "Tiêu chuẩn kỹ thuật", en: "Technical Standards" },
        value: { vi: "IEC 61643-31 / IEC 60269-6", en: "IEC 61643-31 / IEC 60269-6" },
      },
    ],
    applications: {
      vi: [
        "Hộp gom dây DC Combiner Box",
        "Tủ bảo vệ ngõ vào Inverter",
        "Trạm nguồn điện mặt trời 1500V",
      ],
      en: ["DC Combiner Boxes", "Inverter DC Input Panels", "1500V Utility Solar Arrays"],
    },
    features: {
      vi: [
        "Khả năng dập hồ quang DC an toàn và phản ứng cắt sét trong vài nanosecond.",
        "Module cắt sét dạng cắm rút dễ dàng thay thế khi có sự cố.",
        "Tích hợp tiếp điểm báo hiệu trạng thái hoạt động từ xa.",
      ],
      en: [
        "Rapid nanosecond surge response and safe DC arc interruption.",
        "Pluggable SPD cartridge modules for effortless maintenance.",
        "Integrated remote status indicator contact for monitoring.",
      ],
    },
    certifications: {
      vi: ["IEC 61643-31", "UL 1449", "CE"],
      en: ["IEC 61643-31", "UL 1449", "CE"],
    },
    datasheets: ["doc-007"],
    relatedProducts: ["string-inverter-industrial", "mounting-rail-pro"],
    status: "active",
    featured: false,
    brandData: {
      brand: "Dehn / Phoenix Contact",
      manufacturer: "Global Electrical Safety Specialist",
      authorizedDistributor: true,
      technology: "1500V DC Surge Protection",
    },
  },
  {
    id: "prod-008",
    slug: "mounting-rail-pro",
    category: "accessories",
    subcategory: "mounting-rail",
    brand: "TD Engineering / K2 Systems",
    model: "AL6005-T5 & SUS304",
    name: {
      vi: "Khung giá đỡ & Ray nhôm định hình AL6005-T5",
      en: "AL6005-T5 Aluminum Mounting Rail & Structure System",
    },
    shortDescription: {
      vi: "Hệ thống kẹp & ray nhôm hợp kim chống ăn mòn C5-M, chịu gió bão cho mái tôn seamlock và kliplock.",
      en: "High-grade AL6005-T5 aluminum rail and SUS304 clamp system engineered for storm resilience.",
    },
    description: {
      vi: "Hệ thống ray nhôm hợp kim AL6005-T5 mạ Anodized và phụ kiện inox SUS304 chuyên dụng cho các công trình mái nhà xưởng. Thiết kế kẹp sóng tôn seamlock / kliplock không đục thủng mái, bảo vệ chống dột và thử nghiệm chịu lực gió giật cấp 12+.",
      en: "Anodized AL6005-T5 aluminum rail system with SUS304 stainless steel hardware. Engineered for non-penetrative seamlock/kliplock standing seam roof installation with verified storm wind load capacity.",
    },
    image: "hero-solar",
    specifications: [
      {
        label: { vi: "Vật liệu thanh ray", en: "Rail Material" },
        value: { vi: "Nhôm hợp kim AL6005-T5 Anodized", en: "Anodized AL6005-T5 Aluminum Alloy" },
        highlight: true,
      },
      {
        label: { vi: "Vật liệu phụ kiện kẹp", en: "Hardware Material" },
        value: { vi: "Thép không gỉ Inox SUS304", en: "SUS304 Stainless Steel" },
      },
      {
        label: { vi: "Độ bền chống ăn mòn", en: "Corrosion Class" },
        value: { vi: "Cấp C5-M (Chịu môi trường biển)", en: "C5-M Coastal Class Resistant" },
      },
      {
        label: { vi: "Kiểm định tải trọng gió", en: "Wind Load Tested" },
        value: {
          vi: "Tải trọng gió đến 60 m/s (Gió bão cấp 12+)",
          en: "Wind speed up to 60 m/s (Category 12+ Typhoon)",
        },
      },
      {
        label: { vi: "Thời gian bảo hành", en: "Product Warranty" },
        value: { vi: "Đang cập nhật", en: "Updating" },
      },
    ],
    applications: {
      vi: [
        "Mái tôn Seamlock / Kliplock nhà xưởng",
        "Mái tôn sóng vuông công nghiệp",
        "Khung giàn mái bê tông & Carport",
      ],
      en: [
        "Seamlock & Kliplock Industrial Roofs",
        "Trapezoidal Sheet Roofs",
        "Flat Concrete Roofs & Carports",
      ],
    },
    features: {
      vi: [
        "Lắp đặt bằng cùm kẹp sóng tôn chuyên dụng không khoan thủng mái.",
        "Lớp mạ Anodized dày đảm bảo tuổi thọ trên 25 năm trong môi trường nhiệt đới.",
        "Thiết kế thanh nhôm định hình tối ưu khả năng chịu lực uốn và giảm tải trọng mái.",
      ],
      en: [
        "Non-penetrative clamp mounting preserving roof waterproofing integrity.",
        "Thick anodized surface coating ensuring 25+ year lifespan in tropical coastal zones.",
        "Extruded structural geometry maximizing bending resistance while reducing dead load.",
      ],
    },
    certifications: {
      vi: ["AS/NZS 1170", "ISO 9227 (Thử nghiệm sương muối)", "Kiểm định kết cấu ĐH Bách Khoa"],
      en: ["AS/NZS 1170", "ISO 9227 Salt Spray Tested", "Hanoi University Structural Lab Approved"],
    },
    datasheets: ["doc-008"],
    relatedProducts: ["solar-module-n-type", "dc-protection-spd-fuse-1500v"],
    status: "active",
    featured: false,
    brandData: {
      brand: "TD Engineering / K2",
      manufacturer: "Precision Aluminum Extrusion Manufacturer",
      authorizedDistributor: true,
      technology: "Anodized Structural Aluminum",
    },
  },
];
