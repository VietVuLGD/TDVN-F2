import type { LocalizedString, ProductCategoryKey } from "./products";

export type DocumentType =
  | "datasheet"
  | "catalogue"
  | "technical-document"
  | "installation-manual"
  | "operation-manual"
  | "certificate"
  | "company-profile"
  | "engineering-document";

export type DocumentStatus = "available" | "updating";
export type DocumentLanguage = "vi" | "en" | "bilingual";

export interface DownloadDocument {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  type: DocumentType;
  category: ProductCategoryKey | "company-profile" | "general";
  language: DocumentLanguage;
  version?: string;
  publishedAt?: string;
  updatedAt?: string;
  fileUrl?: string; // If undefined or status === "updating", UI displays "Đang cập nhật" / "Updating"
  fileName?: string;
  fileSize?: string;
  relatedProduct?: string; // Product slug
  relatedProject?: string; // Project slug
  relatedKnowledge?: string; // Knowledge article slug
  featured?: boolean;
  status: DocumentStatus;
  access?: "public" | "request";
  seo?: {
    title?: LocalizedString;
    description?: LocalizedString;
  };
}

export const documentTypesList: { key: DocumentType; label: LocalizedString }[] = [
  {
    key: "datasheet",
    label: { vi: "Datasheet kỹ thuật", en: "Technical Datasheet" },
  },
  {
    key: "catalogue",
    label: { vi: "Catalogue sản phẩm", en: "Product Catalogue" },
  },
  {
    key: "technical-document",
    label: { vi: "Tài liệu kỹ thuật", en: "Technical Document" },
  },
  {
    key: "installation-manual",
    label: { vi: "Hướng dẫn lắp đặt", en: "Installation Manual" },
  },
  {
    key: "operation-manual",
    label: { vi: "Hướng dẫn vận hành", en: "Operation Manual" },
  },
  {
    key: "certificate",
    label: { vi: "Chứng nhận chất lượng", en: "Quality Certificate" },
  },
  {
    key: "company-profile",
    label: { vi: "Hồ sơ năng lực", en: "Company Profile" },
  },
  {
    key: "engineering-document",
    label: { vi: "Hồ sơ kỹ thuật", en: "Engineering Document" },
  },
];

export const documentStatusMap: Record<DocumentStatus, LocalizedString> = {
  available: { vi: "Tài liệu sẵn có", en: "Available" },
  updating: { vi: "Đang cập nhật", en: "Updating" },
};

export const documentLanguageMap: Record<DocumentLanguage, string> = {
  vi: "Tiếng Việt (VI)",
  en: "English (EN)",
  bilingual: "Song ngữ (VI / EN)",
};

export const downloadDocuments: DownloadDocument[] = [
  {
    id: "doc-001",
    slug: "datasheet-solar-module-n-type-topcon",
    title: {
      vi: "Datasheet Tấm pin mặt trời N-type TOPCon 580W-600W",
      en: "N-type TOPCon 580W-600W Solar Module Datasheet",
    },
    description: {
      vi: "Bảng thông số kỹ thuật chi tiết, kích thước, đặc tính điện và đường cong I-V của tấm pin N-type TOPCon.",
      en: "Detailed electrical characteristics, dimensions, thermal ratings, and I-V curves for N-type TOPCon modules.",
    },
    type: "datasheet",
    category: "solar-modules",
    language: "bilingual",
    version: "v2.1",
    updatedAt: "2025-01",
    relatedProduct: "solar-module-n-type",
    status: "updating",
  },
  {
    id: "doc-002",
    slug: "datasheet-industrial-string-inverter",
    title: {
      vi: "Datasheet Inverter chuỗi công nghiệp 100kW - 125kW",
      en: "Industrial 100kW - 125kW String Inverter Datasheet",
    },
    description: {
      vi: "Thông số điện áp vào DC, dòng ngõ ra AC, sơ đồ đấu nối và giao diện truyền thông Modbus.",
      en: "DC input specs, AC output parameters, electrical wiring diagrams, and Modbus registers.",
    },
    type: "datasheet",
    category: "inverters",
    language: "bilingual",
    version: "v1.8",
    updatedAt: "2024-11",
    relatedProduct: "string-inverter-industrial",
    status: "updating",
  },
  {
    id: "doc-003",
    slug: "catalogue-hybrid-inverter-backup",
    title: {
      vi: "Catalogue Inverter Hybrid & Giải pháp Nguồn dự phòng",
      en: "Hybrid Inverter & Emergency Backup Solution Catalogue",
    },
    description: {
      vi: "Sơ đồ nguyên lý kết nối hòa lưới, máy phát điện dự phòng và nguyên lý chuyển mạch EPS.",
      en: "Grid-tie wiring topology, standby generator interfacing, and EPS switching principles.",
    },
    type: "catalogue",
    category: "inverters",
    language: "bilingual",
    version: "v2.0",
    updatedAt: "2025-02",
    relatedProduct: "hybrid-inverter-commercial",
    status: "updating",
  },
  {
    id: "doc-004",
    slug: "datasheet-bess-cabinet-lfp",
    title: {
      vi: "Datasheet & Quy chuẩn An toàn Tủ lưu trữ BESS LFP",
      en: "Commercial LFP BESS Cabinet Datasheet & Safety Protocol",
    },
    description: {
      vi: "Chi tiết hệ thống tản nhiệt chất lỏng, thông số BMS, quy chuẩn chữa cháy Aerosol và nguyên lý an toàn pin LFP.",
      en: "Liquid cooling system specifications, BMS architecture, aerosol fire suppression details, and LFP safety protocols.",
    },
    type: "datasheet",
    category: "bess",
    language: "bilingual",
    version: "v3.0",
    updatedAt: "2025-01",
    relatedProduct: "bess-cabinet-lfp",
    relatedKnowledge: "tinh-toan-dung-luong-bess-theo-bieu-gia-dien",
    status: "updating",
  },
  {
    id: "doc-005",
    slug: "datasheet-dry-type-transformer-22kv",
    title: {
      vi: "Datasheet Máy biến áp khô đúc nhựa Epoxy 22kV",
      en: "22kV Cast Resin Dry-Type Transformer Technical Specification",
    },
    description: {
      vi: "Thông số tổn hao không tải, tổn hao ngắn mạch, cấp cách điện F/H và bản vẽ kích thước vỏ tủ IP21/IP44.",
      en: "No-load loss figures, short-circuit losses, F/H insulation ratings, and IP21/IP44 enclosure drawings.",
    },
    type: "datasheet",
    category: "transformers",
    language: "vi",
    version: "v1.2",
    updatedAt: "2024-10",
    relatedProduct: "dry-type-transformer-22kv",
    status: "updating",
  },
  {
    id: "doc-006",
    slug: "technical-doc-switchgear-rmu-24kv",
    title: {
      vi: "Tài liệu Kỹ thuật Tủ điện trung thế RMU 24kV & Tủ MSB",
      en: "24kV MV Switchgear RMU & LV MSB Technical Specification",
    },
    description: {
      vi: "Bản vẽ sơ đồ đơn tuyến, dòng ngắn mạch định mức và quy chuẩn thử nghiệm Type-Test độc lập.",
      en: "Single-line diagrams, rated short-circuit withstand values, and independent Type-Test reports.",
    },
    type: "technical-document",
    category: "switchgear",
    language: "bilingual",
    version: "v1.5",
    updatedAt: "2024-12",
    relatedProduct: "switchgear-rmu-24kv-msb",
    relatedKnowledge: "cap-nhat-quy-dinh-dau-noi-luoi-dien-evn-trung-the",
    status: "updating",
  },
  {
    id: "doc-007",
    slug: "datasheet-dc-protection-spd-fuse-1500v",
    title: {
      vi: "Datasheet Thiết bị chống sét SPD 1500V DC & Cầu chì gPV",
      en: "1500V DC Surge Protection SPD & gPV Fuse Datasheet",
    },
    description: {
      vi: "Thông số dòng cắt sét In/Imax, điện áp thử nghiệm 1500V DC và tiêu chuẩn kỹ thuật thiết bị vệ sinh đường ống DC.",
      en: "Surge discharge ratings In/Imax, 1500V DC test voltages, and technical standards for DC protection.",
    },
    type: "datasheet",
    category: "protection",
    language: "bilingual",
    version: "v2.0",
    updatedAt: "2025-01",
    relatedProduct: "dc-protection-spd-fuse-1500v",
    status: "updating",
  },
  {
    id: "doc-008",
    slug: "installation-guide-mounting-rail-pro",
    title: {
      vi: "Hướng dẫn Thi công Lắp đặt Khung gá Ray nhôm AL6005-T5",
      en: "AL6005-T5 Mounting Structure Installation & Engineering Guide",
    },
    description: {
      vi: "Quy trình xiết lực bu-lông, khoảng cách gối đỡ theo lực gió và bản vẽ kẹp sóng tôn Seamlock/Kliplock.",
      en: "Bolt torque specifications, wind-load span spacing tables, and Seamlock/Kliplock clamp assembly drawings.",
    },
    type: "installation-manual",
    category: "accessories",
    language: "vi",
    version: "v2.2",
    updatedAt: "2025-01",
    relatedProduct: "mounting-rail-pro",
    status: "updating",
  },
  {
    id: "doc-009",
    slug: "company-profile-td-viet-nam",
    title: {
      vi: "Hồ sơ Năng lực Doanh nghiệp - TD VIỆT NAM",
      en: "TD VIETNAM Official Company Profile & Engineering Capacity",
    },
    description: {
      vi: "Tổng quan năng lực thiết kế EPC, chứng chỉ hoạt động xây dựng, danh mục dự án tiêu biểu và đội ngũ nhân sự.",
      en: "Overview of EPC capabilities, construction practice licenses, delivered project portfolio, and key personnel.",
    },
    type: "company-profile",
    category: "company-profile",
    language: "bilingual",
    version: "v2025.1",
    updatedAt: "2025-01",
    featured: true,
    status: "updating",
  },
  {
    id: "doc-010",
    slug: "certificate-iso-9001-2015",
    title: {
      vi: "Chứng nhận Quản lý Chất lượng & Chứng chỉ Xây dựng",
      en: "Quality Management & Construction Practice Certificates",
    },
    description: {
      vi: "Hồ sơ năng lực pháp lý, chứng chỉ năng lực hoạt động xây dựng công trình năng lượng của TD VIỆT NAM.",
      en: "Legal qualifications and construction practice licenses for energy projects from TD VIETNAM.",
    },
    type: "certificate",
    category: "general",
    language: "bilingual",
    version: "v2025",
    updatedAt: "2025-01",
    status: "updating",
  },
  {
    id: "doc-011",
    slug: "engineering-doc-grid-synchronization",
    title: {
      vi: "Hồ sơ Kỹ thuật Đồng bộ Lưới & Rơ-le Bảo vệ Trạm 110kV",
      en: "Grid Synchronization & Relay Protection Engineering Specs for 110kV Substation",
    },
    description: {
      vi: "Tài liệu kỹ thuật giải thích nguyên lý bảo vệ khoảng cách, bảo vệ so lệch và quy trình sa thải phụ tải khẩn cấp.",
      en: "Engineering explanation of distance protection, differential protection, and emergency load shedding logic.",
    },
    type: "engineering-document",
    category: "switchgear",
    language: "bilingual",
    version: "v1.0",
    updatedAt: "2025-02",
    relatedProject: "du-an-tram-bien-ap-va-luoi-dien-trung-the",
    relatedKnowledge: "cap-nhat-quy-dinh-dau-noi-luoi-dien-evn-trung-the",
    status: "updating",
  },
  {
    id: "doc-012",
    slug: "operation-manual-bess-scada",
    title: {
      vi: "Hướng dẫn Vận hành & Giám sát Hệ thống BESS SCADA",
      en: "BESS SCADA System Operation & Monitoring Guide",
    },
    description: {
      vi: "Hướng dẫn thao tác giao diện EMS/SCADA, chu kỳ sạc/xả pin LFP và xử lý cảnh báo nhiệt độ tủ BESS.",
      en: "Operating guide for EMS/SCADA interface, LFP charge/discharge cycling, and thermal alarm response.",
    },
    type: "operation-manual",
    category: "bess",
    language: "bilingual",
    version: "v1.1",
    updatedAt: "2025-01",
    relatedProduct: "bess-cabinet-lfp",
    status: "updating",
  },
];
