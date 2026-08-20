export type KnowledgeCategoryKey =
  | "news-events"
  | "technical-knowledge"
  | "operation-guides"
  | "standards-regulations"
  | "technology-analysis"
  | "case-studies";

export type ArticleStatus = "published" | "draft" | "updating";

export interface KnowledgeCategory {
  key: KnowledgeCategoryKey;
  label: { vi: string; en: string };
  description: { vi: string; en: string };
}

export interface ContentBlock {
  type:
    | "p"
    | "h2"
    | "h3"
    | "quote"
    | "list"
    | "numbered-list"
    | "table"
    | "note"
    | "warning"
    | "figure"
    | "steps";
  text?: string;
  items?: string[];
  head?: string[];
  rows?: string[][];
  noteTitle?: string;
  noteType?: "info" | "warning" | "design" | "standard";
  imageUrl?: string;
  caption?: string;
  formula?: string;
}

export interface KnowledgeArticle {
  id: string;
  slug: string;
  category: KnowledgeCategoryKey;
  title: { vi: string; en: string };
  excerpt: { vi: string; en: string };
  content: {
    vi: ContentBlock[];
    en: ContentBlock[];
  };
  coverImage?: string;
  author: { vi: string; en: string };
  publishedAt: string;
  updatedAt?: string;
  readingTime: { vi: string; en: string };
  tags: string[];
  featured?: boolean;
  status: ArticleStatus;
  relatedArticles?: string[];
  relatedProducts?: string[];
  relatedProjects?: string[];
  relatedSolutions?: string[];
  relatedDownloads?: string[];
  seo?: {
    keywords?: string[];
  };
}

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    key: "news-events",
    label: { vi: "Tin tức & Sự kiện", en: "News & Events" },
    description: {
      vi: "Cập nhật tin tức ngành năng lượng tái tạo, chính sách mới và sự kiện công nghệ từ TD VIỆT NAM.",
      en: "Industry updates, renewable energy policy changes, and engineering milestones from TD VIETNAM.",
    },
  },
  {
    key: "technical-knowledge",
    label: { vi: "Kiến thức kỹ thuật", en: "Technical Knowledge" },
    description: {
      vi: "Ghi chép chuyên sâu về thiết kế điện mặt trời, mô phỏng PVSyst, hệ thống điện trung/hạ thế và công nghệ BESS.",
      en: "In-depth engineering insights on solar PV, PVSyst modeling, MV/LV electrical networks, and BESS.",
    },
  },
  {
    key: "operation-guides",
    label: { vi: "Hướng dẫn vận hành", en: "Operation Guides" },
    description: {
      vi: "Sổ tay hướng dẫn quản lý vận hành O&M, quy trình bảo trì phòng ngừa và xử lý sự cố thiết bị.",
      en: "Field O&M manuals, preventive maintenance procedures, and equipment troubleshooting guidelines.",
    },
  },
  {
    key: "standards-regulations",
    label: { vi: "Tiêu chuẩn & Quy chuẩn", en: "Standards & Regulations" },
    description: {
      vi: "Tổng hợp quy chuẩn đấu nối lưới EVN, tiêu chuẩn PCCC, an toàn điện và các quy định ngành điện.",
      en: "Compilation of EVN grid connection codes, fire safety codes, electrical safety, and industry standards.",
    },
  },
  {
    key: "technology-analysis",
    label: { vi: "Phân tích công nghệ", en: "Technology Analysis" },
    description: {
      vi: "So sánh đánh giá công nghệ pin TOPCon, Inverter chuỗi, hệ thống làm mát BESS và phần mềm SCADA.",
      en: "Comparative analysis of N-type TOPCon PV modules, string inverters, BESS liquid cooling, and SCADA.",
    },
  },
  {
    key: "case-studies",
    label: { vi: "Case Study", en: "Case Studies" },
    description: {
      vi: "Phân tích bài toán kỹ thuật thực tế, giải pháp thiết kế và kết quả vận hành tại các công trình.",
      en: "Real-world engineering challenges, EPC solutions, and field operational results from project sites.",
    },
  },
];

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "art-001",
    slug: "tinh-toan-dung-luong-bess-theo-bieu-gia-dien",
    category: "technology-analysis",
    featured: true,
    status: "published",
    title: {
      vi: "Tính toán dung lượng hệ thống BESS dựa trên biểu đồ phụ tải thực tế",
      en: "Calculating BESS Capacity Based on Actual Load Curves & Tariff Profiles",
    },
    excerpt: {
      vi: "Phương pháp xác định công suất (kW) và dung lượng (kWh) tối ưu cho hệ thống pin lưu trữ BESS công nghiệp, tránh lãng phí chi phí đầu tư ban đầu.",
      en: "Engineering methodology to size power rating (kW) and capacity (kWh) for industrial BESS cabinets without capital over-investment.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    author: {
      vi: "Đội ngũ Kỹ thuật TD VIỆT NAM",
      en: "TD VIETNAM Engineering Team",
    },
    publishedAt: "2026-06-18",
    updatedAt: "2026-07-02",
    readingTime: { vi: "7 phút đọc", en: "7 min read" },
    tags: ["BESS", "Peak Shaving", "Tối ưu phụ tải", "Energy Storage", "BMS/EMS"],
    relatedProducts: ["prod-004", "prod-003"],
    relatedProjects: ["du-an-he-thong-luu-tru-bess-nha-may"],
    relatedSolutions: ["he-thong-luu-tru-bess"],
    relatedDownloads: ["doc-004"],
    seo: {
      keywords: [
        "tính toán dung lượng BESS",
        "BESS công nghiệp",
        "Peak Shaving BESS",
        "LFP battery sizing",
      ],
    },
    content: {
      vi: [
        {
          type: "p",
          text: "Trong các dự án lưu trữ năng lượng công nghiệp, xác định đúng mục tiêu sử dụng (Peak Shaving - sạc giờ thấp điểm/xả giờ cao điểm, dự phòng nguồn EPS, hoặc tối ưu hóa điện mặt trời) là bước kỹ thuật quan trọng nhất trước khi quyết định cấu hình thiết bị.",
        },
        {
          type: "h2",
          text: "1. Thu thập và xử lý dữ liệu biểu đồ phụ tải 24/7",
        },
        {
          type: "p",
          text: "Dữ liệu đo đạc công suất theo từng khoảng thời gian 15-30 phút (từ công tơ điện lực hoặc thiết bị đo Power Meter) giúp kỹ sư xác định chính xác công suất đỉnh cần cắt giảm và khoảng năng lượng cần xả ra.",
        },
        {
          type: "note",
          noteTitle: "Lưu ý thiết kế BESS",
          noteType: "design",
          text: "Cần thu thập dữ liệu chuỗi thời gian tối thiểu 12 tháng liên tục để phản ánh đúng biến động mùa vụ, các ngày nghỉ lễ và khung giờ sản xuất cao điểm của nhà máy.",
        },
        {
          type: "h2",
          text: "2. Công thức xác định dung lượng hữu ích",
        },
        {
          type: "p",
          text: "Dung lượng pin lưu trữ lắp đặt (Usable Capacity) cần tính tới độ sâu xả cạn DoD (Depth of Discharge) khuyến cáo của nhà sản xuất pin LFP (thường là 85% - 90%) và hiệu suất chu trình sạc/xả RtE (Round-Trip Efficiency).",
        },
        {
          type: "table",
          head: ["Thông số Kỹ thuật", "Công thức / Giá trị tham chiếu", "Đơn vị"],
          rows: [
            ["Dung lượng danh định (Nominal)", "E_nominal = E_required / (DoD × RtE)", "kWh"],
            ["Độ sâu xả cạn (DoD)", "85% - 90% (Khuyên dùng cho cell LFP)", "%"],
            ["Hiệu suất chu trình (RtE)", "88% - 92% (Tùy thuộc PCS & tản nhiệt)", "%"],
            ["Tốc độ xả C-rate", "0.5C - 1.0C (Tùy theo bài toán tải)", "C"],
          ],
        },
        {
          type: "h2",
          text: "3. Tốc độ suy giảm dung lượng (Degradation Analysis)",
        },
        {
          type: "p",
          text: "Pin LFP có tuổi thọ khoảng 6,000 - 8,000 chu kỳ sạc/xả tại điều kiện tiêu chuẩn 25°C. Tuy nhiên, nếu nhiệt độ vận hành tăng lên 35°C - 40°C do tản nhiệt không tốt, tốc độ suy giảm dung lượng sẽ tăng đáng kể. Do đó, việc trang bị tủ BESS tản nhiệt chất lỏng là yêu cầu quan trọng để duy trì hiệu suất lâu dài.",
        },
        {
          type: "warning",
          noteTitle: "Cảnh báo nhiệt độ vận hành",
          noteType: "warning",
          text: "Nhiệt độ môi trường vận hành BESS vượt quá 35°C mà không có làm mát tích cực có thể làm giảm 20% - 30% tuổi thọ chu kỳ cell pin.",
        },
      ],
      en: [
        {
          type: "p",
          text: "In industrial energy storage projects, defining the precise operating goal (Peak Shaving, Emergency Standby EPS, or Solar Self-Consumption Optimization) is the most critical technical step before selecting hardware configurations.",
        },
        {
          type: "h2",
          text: "1. Collecting and Processing 24/7 Load Profiles",
        },
        {
          type: "p",
          text: "High-resolution power interval data (15-to-30 minute intervals from utility meters or power analyzers) enables engineers to calculate peak demand shaving thresholds and required discharge energy.",
        },
        {
          type: "note",
          noteTitle: "BESS Design Note",
          noteType: "design",
          text: "A minimum of 12 months of continuous load curve data should be analyzed to account for seasonal shift, holiday shutdowns, and peak production runs.",
        },
        {
          type: "h2",
          text: "2. Usable Capacity Sizing Formula",
        },
        {
          type: "p",
          text: "Installed battery capacity must account for recommended LFP Depth of Discharge (DoD, typically 85%-90%) and Round-Trip Efficiency (RtE) of the PCS and cooling system.",
        },
        {
          type: "table",
          head: ["Engineering Parameter", "Formula / Reference Value", "Unit"],
          rows: [
            ["Nominal Capacity", "E_nominal = E_required / (DoD × RtE)", "kWh"],
            ["Depth of Discharge (DoD)", "85% - 90% (Recommended LFP limit)", "%"],
            ["Round-Trip Efficiency (RtE)", "88% - 92% (PCS & Cooling combined)", "%"],
            ["Discharge C-rate", "0.5C - 1.0C (Based on peak duration)", "C"],
          ],
        },
        {
          type: "h2",
          text: "3. Degradation Analysis & Thermal Control",
        },
        {
          type: "p",
          text: "LFP cells provide approximately 6,000 to 8,000 cycles under 25°C standard conditions. Ambient operating temperatures exceeding 35°C dramatically accelerate capacity fade, making liquid-cooling BESS enclosures essential for tropical installations.",
        },
        {
          type: "warning",
          noteTitle: "Thermal Warning",
          noteType: "warning",
          text: "Uncontrolled ambient temperatures above 35°C without active cooling can reduce LFP cell cycle life by 20% to 30%.",
        },
      ],
    },
  },
  {
    id: "art-002",
    slug: "khao-sat-ket-cau-mai-truoc-khi-lap-dien-mat-troi",
    category: "operation-guides",
    featured: false,
    status: "published",
    title: {
      vi: "Quy trình khảo sát kết cấu mái nhà xưởng trước khi lắp điện mặt trời",
      en: "Industrial Factory Roof Structural Inspection & Loading Verification Protocol",
    },
    excerpt: {
      vi: "Hướng dẫn các bước thẩm tra tải trọng dư của xà gồ, hệ kèo thép, kiểm tra độ ăn mòn tôn và lập phương án gia cường an toàn cho dự án điện mặt trời mái nhà.",
      en: "Step-by-step engineering guidelines to assess purlin reserve capacity, steel frame integrity, and roof sheet corrosion prior to PV mounting.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80",
    author: {
      vi: "Đội ngũ Kỹ thuật TD VIỆT NAM",
      en: "TD VIETNAM Engineering Team",
    },
    publishedAt: "2026-05-02",
    updatedAt: "2026-06-10",
    readingTime: { vi: "6 phút đọc", en: "6 min read" },
    tags: [
      "Khảo sát kết cấu",
      "Điện mặt trời mái nhà",
      "Tải trọng mái",
      "Xà gồ",
      "An toàn công trình",
    ],
    relatedProducts: ["prod-008", "prod-001"],
    relatedProjects: ["du-an-dien-mat-troi-nha-may-cong-nghiep"],
    relatedDownloads: ["doc-001"],
    seo: {
      keywords: [
        "khảo sát kết cấu mái",
        "tải trọng điện mặt trời",
        "kiểm tra xà gồ mái tôn",
        "gia cường mái nhà xưởng",
      ],
    },
    content: {
      vi: [
        {
          type: "p",
          text: "Khảo sát và thẩm tra khả năng chịu tải dư của mái nhà xưởng là điều kiện bắt buộc trước khi phê duyệt phương án thi công điện mặt trời. Tải trọng bổ sung từ dàn pin (khoảng 12 - 18 kg/m²) cùng với tải trọng gió bão đòi hỏi quy trình đánh giá nghiêm ngặt.",
        },
        {
          type: "h2",
          text: "Các bước khảo sát hiện trường tiêu chuẩn",
        },
        {
          type: "steps",
          items: [
            "Kiểm tra hồ sơ thiết kế kết cấu gốc của nhà xưởng (Bản vẽ xà gồ, vỉ kèo, móng).",
            "Đo đạc kích thước thực tế: Khoảng cách xà gồ, tiết diện C/Z, độ dày thép xà gồ và tình trạng rỉ sét.",
            "Kiểm tra loại tôn mái (Tôn sóng vuông, Kliplok, Seamlock) và độ dày tấm tôn.",
            "Chụp ảnh và đánh giá độ võng của hệ vỉ kèo dưới tải trọng hiện hữu.",
            "Tính toán mô hình phần mềm SAP2000 / EABS để xác định hệ số an toàn.",
          ],
        },
        {
          type: "note",
          noteTitle: "Tham khảo quy chuẩn an toàn",
          noteType: "standard",
          text: "Tính toán tải trọng gió phải tuân thủ TCVN 2737 về Tải trọng và tác động, đảm bảo công trình chịu được vận tốc gió thiết kế theo vùng địa lý.",
        },
        {
          type: "h2",
          text: "Bảng phân loại kết cấu và giải pháp xử lý",
        },
        {
          type: "table",
          head: ["Tình trạng Kết cấu", "Khả năng chịu tải dư", "Phương án Kỹ thuật"],
          rows: [
            [
              "Xà gồ mới, không rỉ sét",
              "> 20 kg/m²",
              "Cho phép lắp đặt trực tiếp bằng Clamp chuyên dụng",
            ],
            [
              "Xà gồ võng nhẹ, rỉ cục bộ",
              "10 - 15 kg/m²",
              "Cần gia cường bổ sung thanh chống hoặc xà gồ phụ",
            ],
            [
              "Tôn cũ, ăn mòn hóa chất",
              "< 10 kg/m²",
              "Yêu cầu thay tôn mới hoặc không đủ điều kiện lắp đặt",
            ],
          ],
        },
      ],
      en: [
        {
          type: "p",
          text: "Verifying roof structural reserve capacity is mandatory before approving rooftop solar installation drawings. Additional dead loads from PV modules (12-18 kg/m²) and wind uplift forces require rigorous structural re-calculation.",
        },
        {
          type: "h2",
          text: "Standard Field Inspection Steps",
        },
        {
          type: "steps",
          items: [
            "Review original factory structural design drawings (purlins, trusses, foundations).",
            "On-site laser measurements: Purlin spacing, C/Z profiles, steel thickness, and corrosion levels.",
            "Inspect roof sheet profile (Trapezoidal, Kliplok, Standing Seam) and gauge thickness.",
            "Document existing truss deflection under current dead loads.",
            "Run structural re-calculation in SAP2000 to verify safety margin against wind codes.",
          ],
        },
        {
          type: "note",
          noteTitle: "Safety Standard Reference",
          noteType: "standard",
          text: "Wind load calculations must align with national structural standards (TCVN 2737) to withstand regional peak wind speeds.",
        },
        {
          type: "h2",
          text: "Structural Classification & Remediation Matrix",
        },
        {
          type: "table",
          head: ["Structural Condition", "Reserve Capacity", "Engineering Action"],
          rows: [
            [
              "Intact purlins, no rust",
              "> 20 kg/m²",
              "Direct mounting with specialized clamps approved",
            ],
            ["Minor deflection/rust", "10 - 15 kg/m²", "Reinforcement with sub-purlins required"],
            ["Corroded roof sheets", "< 10 kg/m²", "Re-roofing mandatory before installation"],
          ],
        },
      ],
    },
  },
  {
    id: "art-003",
    slug: "tieu-chuan-an-toan-pccc-cho-he-thong-dien-mat-troi",
    category: "standards-regulations",
    featured: false,
    status: "published",
    title: {
      vi: "Quy chuẩn an toàn điện và PCCC cho hệ thống điện mặt trời mái nhà",
      en: "Electrical Safety & Fire Protection Regulations for Rooftop Solar Systems",
    },
    excerpt: {
      vi: "Cập nhật các quy định về trang bị thiết bị ngắt khẩn cấp Rapid Shutdown ngõ DC, bố trí lối đi cứu nạn trên mái tôn và giải pháp nối đất chống sét đạt chuẩn.",
      en: "Technical summary of DC Rapid Shutdown requirements, rooftop access corridors for emergency response, and grounding protection.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    author: {
      vi: "Đội ngũ Kỹ thuật TD VIỆT NAM",
      en: "TD VIETNAM Engineering Team",
    },
    publishedAt: "2026-03-27",
    updatedAt: "2026-04-15",
    readingTime: { vi: "5 phút đọc", en: "5 min read" },
    tags: [
      "An toàn PCCC",
      "Rapid Shutdown",
      "Quy chuẩn điện",
      "Tiếp địa chống sét",
      "EVN Connection",
    ],
    relatedProducts: ["prod-007", "prod-002"],
    relatedProjects: ["du-an-dien-mat-troi-trung-tam-logistics"],
    relatedDownloads: ["doc-002"],
    seo: {
      keywords: [
        "PCCC điện mặt trời",
        "Rapid Shutdown DC",
        "hành lang an toàn mái",
        "tiếp địa chống sét pin",
      ],
    },
    content: {
      vi: [
        {
          type: "p",
          text: "Thiết kế và thi công hệ thống điện mặt trời mái nhà xưởng đòi hỏi việc tuân thủ nghiêm ngặt các quy định an toàn phòng cháy chữa cháy (PCCC) và quy chuẩn kỹ thuật điện lực.",
        },
        {
          type: "h2",
          text: "1. Bố trí hành lang an toàn và cứu nạn trên mái",
        },
        {
          type: "p",
          text: "Dàn pin mặt trời không được phủ kín toàn bộ diện tích mái nhà xưởng. Cần duy trì khoảng trống giữa các khối pin để tạo lối đi cho lực lượng PCCC khi có sự cố.",
        },
        {
          type: "list",
          items: [
            "Hành lang di chuyển chính dọc mái: Bề rộng tối thiểu 1.2m - 1.5m.",
            "Khoảng cách giữa các dãy pin: Đảm bảo tối thiểu 0.8m phục vụ thao tác kỹ thuật và PCCC.",
            "Bố trí vị trí thang tiếp cận mái cố định có lồng bảo vệ an toàn.",
          ],
        },
        {
          type: "h2",
          text: "2. Yêu cầu ngắt khẩn cấp DC (Rapid Shutdown)",
        },
        {
          type: "p",
          text: "Khi có sự cố hỏa hoạn hoặc cắt điện lưới AC, điện áp DC trên chuỗi pin vẫn duy trì ở mức nguy hiểm (lên tới 1,000V - 1,500V DC). Thiết bị Rapid Shutdown giúp giảm điện áp ngõ DC về dưới 30V trong vòng 30 giây.",
        },
        {
          type: "warning",
          noteTitle: "Cảnh báo an toàn điện DC",
          noteType: "warning",
          text: "Điện áp một chiều DC điện mặt trời không có điểm đi qua 0 (zero-crossing) như điện AC, do đó sinh ra hồ quang điện rất nguy hiểm nếu xảy ra lỏng mối nối hoặc tróc cách điện.",
        },
        {
          type: "h2",
          text: "3. Hệ thống tiếp địa và chống sét lan truyền",
        },
        {
          type: "p",
          text: "Toàn bộ khung nhôm tấm pin, giá đỡ kim loại và vỏ tủ điện phải được liên kết đẳng thế và nối về hệ thống tiếp địa an toàn có điện trở nối đất R < 4 Ohm.",
        },
      ],
      en: [
        {
          type: "p",
          text: "Rooftop PV design and installation mandate strict adherence to national fire protection guidelines and utility electrical safety standards.",
        },
        {
          type: "h2",
          text: "1. Rooftop Emergency Walkways & Access Corridors",
        },
        {
          type: "p",
          text: "PV arrays must not cover 100% of the roof surface. Clear perimeter and interior walkways must be designated for emergency firefighting access.",
        },
        {
          type: "list",
          items: [
            "Main longitudinal access corridors: Minimum 1.2m - 1.5m width.",
            "Inter-array service gaps: Minimum 0.8m for technician clearance.",
            "Fixed exterior roof access ladders with safety cages.",
          ],
        },
        {
          type: "h2",
          text: "2. DC Rapid Shutdown Requirements",
        },
        {
          type: "p",
          text: "During an AC grid loss or fire emergency, string DC voltages remain energized at high levels (up to 1,500V DC). Rapid Shutdown devices reduce boundary DC voltages below 30V within 30 seconds.",
        },
        {
          type: "warning",
          noteTitle: "DC Arc Hazard Warning",
          noteType: "warning",
          text: "DC solar circuits lack zero-crossing AC properties, making DC arcing highly hazardous in loose connections or damaged insulation.",
        },
        {
          type: "h2",
          text: "3. Grounding & Surge Protection (SPD)",
        },
        {
          type: "p",
          text: "All aluminum module frames, mounting racks, and enclosure chassis must be equipotentially bonded to a master grounding grid with resistance R < 4 Ohms.",
        },
      ],
    },
  },
  {
    id: "art-004",
    slug: "phan-tich-cong-nghe-pin-n-type-topcon-vs-p-type-perc",
    category: "technology-analysis",
    featured: false,
    status: "published",
    title: {
      vi: "Phân tích so sánh công nghệ tấm pin N-type TOPCon và P-type PERC",
      en: "Comparative Technical Analysis: N-type TOPCon vs. P-type PERC Solar Modules",
    },
    excerpt: {
      vi: "Đánh giá chi tiết hiệu suất chuyển đổi, hệ số nhiệt độ Pmax, tỉ lệ mặt sau Bifaciality và tốc độ suy giảm công suất LID/PID trong vận hành thực tế.",
      en: "Engineering evaluation of conversion efficiency, Pmax temperature coefficient, bifaciality factor, and LID/PID degradation rates.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80",
    author: {
      vi: "Đội ngũ Kỹ thuật TD VIỆT NAM",
      en: "TD VIETNAM Engineering Team",
    },
    publishedAt: "2026-02-14",
    updatedAt: "2026-03-01",
    readingTime: { vi: "8 phút đọc", en: "8 min read" },
    tags: ["TOPCon", "PERC", "Tấm pin mặt trời", "Hiệu suất quang điện", "N-type"],
    relatedProducts: ["prod-001"],
    relatedProjects: ["du-an-dien-mat-troi-toa-nha-van-phong"],
    relatedDownloads: ["doc-001"],
    seo: {
      keywords: [
        "so sánh TOPCon và PERC",
        "pin N-type TOPCon",
        "hệ số nhiệt độ Pmax",
        "bifaciality TOPCon",
      ],
    },
    content: {
      vi: [
        {
          type: "p",
          text: "Trong thiết kế các dự án điện mặt trời thương mại và công nghiệp hiện nay, công nghệ cell pin N-type TOPCon (Tunnel Oxide Passivated Contact) đang thay đổi vị trí của công nghệ P-type PERC nhờ hiệu suất cao hơn và hệ số suy giảm thấp hơn.",
        },
        {
          type: "h2",
          text: "Bảng so sánh thông số kỹ thuật trọng tâm",
        },
        {
          type: "table",
          head: ["Thông số Kỹ thuật", "Công nghệ P-type PERC", "Công nghệ N-type TOPCon"],
          rows: [
            ["Hiệu suất Module tối đa", "21.0% - 21.5%", "22.5% - 23.2%"],
            ["Hệ số nhiệt độ (Pmax)", "-0.35% / °C", "-0.29% / °C"],
            ["Hệ số hai mặt (Bifaciality)", "70% ± 5%", "80% ± 5%"],
            ["Suy giảm năm đầu (LID)", "2.0%", "1.0%"],
            ["Suy giảm hàng năm", "0.55% / năm", "0.40% / năm"],
          ],
        },
        {
          type: "h2",
          text: "1. Tác động của hệ số nhiệt độ trong khí hậu nhiệt đới",
        },
        {
          type: "p",
          text: "Tại Việt Nam, nhiệt độ bề mặt tấm pin mặt trời vào giữa trưa mùa hè có thể lên tới 60°C - 65°C (cao hơn 35°C - 40°C so với điều kiện thử nghiệm tiêu chuẩn STC 25°C). Với hệ số nhiệt độ -0.29%/°C, tấm pin N-type TOPCon giảm tổn thất do nhiệt khoảng 2% - 3% sản lượng so với P-type PERC.",
        },
        {
          type: "h2",
          text: "2. Khả năng phát điện mặt sau (Bifacial Gain)",
        },
        {
          type: "p",
          text: "Nhờ hệ số hai mặt cao tới 80%, khi lắp đặt trên mái nhà xưởng sáng màu hoặc bề mặt phản xạ tốt, module TOPCon thu nhận thêm năng lượng từ bức xạ tán xạ mặt sau, giúp tăng tổng sản lượng sinh ra.",
        },
      ],
      en: [
        {
          type: "p",
          text: "In modern C&I solar project engineering, N-type TOPCon (Tunnel Oxide Passivated Contact) technology is rapidly replacing P-type PERC due to higher cell efficiency and lower degradation rates.",
        },
        {
          type: "h2",
          text: "Key Engineering Comparison Matrix",
        },
        {
          type: "table",
          head: ["Parameter", "P-type PERC", "N-type TOPCon"],
          rows: [
            ["Max Module Efficiency", "21.0% - 21.5%", "22.5% - 23.2%"],
            ["Temp. Coefficient (Pmax)", "-0.35% / °C", "-0.29% / °C"],
            ["Bifaciality Factor", "70% ± 5%", "80% ± 5%"],
            ["First Year Degradation (LID)", "2.0%", "1.0%"],
            ["Annual Degradation", "0.55% / year", "0.40% / year"],
          ],
        },
        {
          type: "h2",
          text: "1. Temperature Coefficient Impact in Tropical Climates",
        },
        {
          type: "p",
          text: "In tropical installations, midday cell operating temperatures regularly hit 60°C - 65°C (+35°C to +40°C above STC 25°C). With a superior Pmax temperature coefficient of -0.29%/°C, N-type TOPCon suffers 2% to 3% lower thermal power loss than PERC.",
        },
        {
          type: "h2",
          text: "2. Rear-Side Bifacial Yield Gain",
        },
        {
          type: "p",
          text: "With a bifaciality factor reaching 80%, TOPCon double-glass modules capture significantly higher rear albedo light when mounted on reflective roofs or ground surfaces.",
        },
      ],
    },
  },
  {
    id: "art-005",
    slug: "quy-trinh-bao-tri-dinh-ky-om-va-do-duong-cong-iv",
    category: "operation-guides",
    featured: false,
    status: "published",
    title: {
      vi: "Hướng dẫn bảo trì định kỳ O&M và phương pháp đo đường cong I-V",
      en: "Field O&M Maintenance Guide & Technical I-V Curve Diagnostic Protocol",
    },
    excerpt: {
      vi: "Quy trình kiểm tra nhiệt hồng ngoại bằng drone, chẩn đoán điểm nóng hotspot, kiểm tra lực siết bu-lông và đo đạc thông số điện định kỳ cho hệ thống.",
      en: "Field testing procedures for thermal infrared drone imaging, hotspot identification, bolt torque verification, and I-V curve tracer diagnostics.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    author: {
      vi: "Đội ngũ Kỹ thuật TD VIỆT NAM",
      en: "TD VIETNAM Engineering Team",
    },
    publishedAt: "2026-01-20",
    updatedAt: "2026-02-10",
    readingTime: { vi: "6 phút đọc", en: "6 min read" },
    tags: [
      "O&M",
      "Chẩn đoán I-V Curve",
      "Chụp ảnh nhiệt Drone",
      "Bảo trì Inverter",
      "Vận hành hệ thống",
    ],
    relatedProducts: ["prod-002", "prod-006"],
    relatedProjects: ["du-an-van-hanh-bao-tri-om-he-thong-dien-mat-troi"],
    relatedDownloads: ["doc-002"],
    seo: {
      keywords: [
        "bảo trì O&M điện mặt trời",
        "đo đường cong I-V",
        "chụp ảnh nhiệt drone solar",
        "kiểm tra inverter chuỗi",
      ],
    },
    content: {
      vi: [
        {
          type: "p",
          text: "Dịch vụ Vận hành & Bảo trì (O&M) chuyên nghiệp đóng vai trò quyết định đến việc duy trì chỉ số hiệu suất PR (Performance Ratio) và kéo dài tuổi thọ công trình điện mặt trời.",
        },
        {
          type: "h2",
          text: "Các hạng mục kiểm tra O&M định kỳ",
        },
        {
          type: "steps",
          items: [
            "Quét nhiệt hồng ngoại bằng thiết bị FLIR / Drone nhiệt để phát hiện đốm nóng (hotspot) trên dàn pin.",
            "Đo kiểm đường cong đặc tính I-V (I-V Curve Tracing) từng chuỗi pin để xác định suy giảm dòng điện hoặc đứt mạch.",
            "Kiểm tra lực siết bu-lông khung giá đỡ và cáp điện bằng cờ-lê lực tiêu chuẩn.",
            "Vệ sinh bộ lọc bụi Inverter, kiểm tra quạt tản nhiệt và đo điện trở cách điện DC Megger.",
            "Kiểm tra hệ thống tiếp địa an toàn và hoạt động của bộ chống sét lan truyền SPD.",
          ],
        },
        {
          type: "note",
          noteTitle: "Chỉ số chẩn đoán I-V Curve",
          noteType: "info",
          text: "Đường cong I-V lệch khỏi dạng tiêu chuẩn giúp kỹ sư nhanh chóng phân biệt giữa hiện tượng che bóng cục bộ, hỏng đi-ốt bypass, hay nứt cell pin ngầm.",
        },
      ],
      en: [
        {
          type: "p",
          text: "Systematic O&M procedures protect plant Performance Ratio (PR) and ensure asset reliability over its multi-decade design lifespan.",
        },
        {
          type: "h2",
          text: "Key Periodic O&M Checkpoints",
        },
        {
          type: "steps",
          items: [
            "Thermal infrared scanning (FLIR camera / Drone) to pinpoint cell-level thermal hotspots.",
            "I-V curve tracing per string to detect module degradation, open-circuits, or bypass diode failures.",
            "Calibrated torque verification on frame fasteners and electrical busbars.",
            "Inverter air filter servicing, cooling fan inspection, and DC megohmmeter insulation testing.",
            "Ground grid resistance measurement and SPD status verification.",
          ],
        },
        {
          type: "note",
          noteTitle: "I-V Diagnostic Insight",
          noteType: "info",
          text: "Deviations in the measured I-V curve profile allow engineers to distinguish string shading from diode failure or micro-cracking.",
        },
      ],
    },
  },
  {
    id: "art-006",
    slug: "case-study-tich-hop-bess-giam-chi-phi-dien-gio-cao-diem",
    category: "case-studies",
    featured: false,
    status: "published",
    title: {
      vi: "Case Study: Giải pháp tích hợp BESS giải bài toán phụ tải giờ cao điểm nhà máy",
      en: "Case Study: BESS Integration for Industrial Peak Demand Mitigation",
    },
    excerpt: {
      vi: "Phân tích bài toán kỹ thuật sạc pin giờ thấp điểm, xả giờ cao điểm kết hợp hệ thống EMS điều khiển thông minh tại dự án nhà máy sản xuất.",
      en: "Engineering analysis of scheduled off-peak charging, peak discharging, and EMS control logic for industrial peak-shaving.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    author: {
      vi: "Đội ngũ Kỹ thuật TD VIỆT NAM",
      en: "TD VIETNAM Engineering Team",
    },
    publishedAt: "2025-11-05",
    updatedAt: "2025-12-01",
    readingTime: { vi: "7 phút đọc", en: "7 min read" },
    tags: ["Case Study", "BESS", "Peak Shaving", "EMS", "Lưu trữ năng lượng"],
    relatedProducts: ["prod-004", "prod-003"],
    relatedProjects: ["du-an-he-thong-luu-tru-bess-nha-may"],
    relatedDownloads: ["doc-004"],
    seo: {
      keywords: [
        "case study BESS",
        "sạc xả BESS nhà máy",
        "tủ BESS 500kWh",
        "EMS điều khiển sạc xả",
      ],
    },
    content: {
      vi: [
        {
          type: "p",
          text: "Tại các nhà máy sản xuất công nghiệp, chênh lệch giá điện giữa giờ cao điểm và giờ thấp điểm tạo ra chi phí vận hành đáng kể. Việc triển khai hệ thống lưu trữ BESS giúp giảm áp lực công suất đỉnh.",
        },
        {
          type: "h2",
          text: "1. Hiện trạng phụ tải và bài toán kỹ thuật",
        },
        {
          type: "p",
          text: "Khảo sát biểu đồ phụ tải 24/7 của nhà máy cho thấy công suất đỉnh xuất hiện liên tục trong khung giờ cao điểm sáng (09:30 - 11:30) và chiều (17:00 - 20:00).",
        },
        {
          type: "h2",
          text: "2. Giải pháp kỹ thuật được triển khai",
        },
        {
          type: "list",
          items: [
            "Lắp đặt tủ BESS LFP tản nhiệt chất lỏng ngoài trời tích hợp bộ biến tần PCS.",
            "Cài đặt thuật toán tự động trên bộ điều khiển EMS theo khung thời gian cài sẵn.",
            "Trang bị hệ thống quản lý pin BMS đa tầng và báo cháy khí FM200/NOVEC.",
          ],
        },
        {
          type: "h2",
          text: "3. Phương thức vận hành sạc xả",
        },
        {
          type: "table",
          head: ["Khung thời gian", "Chế độ vận hành EMS", "Trạng thái BESS"],
          rows: [
            [
              "22:00 - 04:00 (Thấp điểm)",
              "Sạc pin từ lưới điện AC",
              "Sạc công suất tối đa đạt 100% SoC",
            ],
            [
              "09:30 - 11:30 (Cao điểm sáng)",
              "Xả pin bù phụ tải nhà máy",
              "Phát điện giảm công suất đỉnh từ lưới",
            ],
            [
              "17:00 - 20:00 (Cao điểm chiều)",
              "Xả pin lần 2 theo chu kỳ",
              "Giảm tối đa sản lượng điện giờ giá cao",
            ],
          ],
        },
      ],
      en: [
        {
          type: "p",
          text: "Industrial manufacturing facilities face substantial electricity expenses due to high peak-hour power tariffs. Integrating BESS peak-shaving reduces demand charges effectively.",
        },
        {
          type: "h2",
          text: "1. Site Load Profile & Engineering Objective",
        },
        {
          type: "p",
          text: "Analysis of 24/7 load data confirmed recurring power demand spikes during morning (09:30 - 11:30) and evening (17:00 - 20:00) peak tariff windows.",
        },
        {
          type: "h2",
          text: "2. Implemented EPC Engineering Solution",
        },
        {
          type: "list",
          items: [
            "Deployed outdoor liquid-cooled LFP BESS enclosures integrated with PCS.",
            "Configured automated EMS control routines based on dynamic tariff schedules.",
            "Integrated multi-tier BMS battery protection and fire suppression.",
          ],
        },
        {
          type: "h2",
          text: "3. Charge / Discharge Operating Protocol",
        },
        {
          type: "table",
          head: ["Time Window", "EMS Operational Mode", "BESS Status"],
          rows: [
            ["22:00 - 04:00 (Off-Peak)", "Grid AC charging cycle", "Full charge up to 100% SoC"],
            [
              "09:30 - 11:30 (Morning Peak)",
              "Discharging to factory bus",
              "Mitigating utility peak power draw",
            ],
            [
              "17:00 - 20:00 (Evening Peak)",
              "Secondary discharge cycle",
              "Minimizing peak tariff energy consumption",
            ],
          ],
        },
      ],
    },
  },
  {
    id: "art-007",
    slug: "cap-nhat-quy-dinh-dau-noi-luoi-dien-evn-trung-the",
    category: "news-events",
    featured: false,
    status: "published",
    title: {
      vi: "Cập nhật hướng dẫn kỹ thuật đấu nối công trình nguồn điện vào lưới trung thế EVN",
      en: "Technical Guidelines Update on Medium-Voltage Grid Connection to EVN",
    },
    excerpt: {
      vi: "Tổng hợp các yêu cầu kỹ thuật đối với trạm biến áp nâng áp 22kV, tủ đóng cắt RMU Switchgear, rơ-le bảo vệ và hệ thống thu thập dữ liệu SCADA.",
      en: "Summary of engineering requirements for 22kV step-up substations, RMU switchgear, protection relays, and SCADA telemetry.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    author: {
      vi: "Đội ngũ Kỹ thuật TD VIỆT NAM",
      en: "TD VIETNAM Engineering Team",
    },
    publishedAt: "2026-04-10",
    updatedAt: "2026-05-01",
    readingTime: { vi: "5 phút đọc", en: "5 min read" },
    tags: ["Đấu nối EVN", "Trạm biến áp 22kV", "Tủ RMU", "Rơ-le bảo vệ", "SCADA"],
    relatedProducts: ["prod-005", "prod-006"],
    relatedProjects: ["du-an-tram-bien-ap-va-luoi-dien-trung-the"],
    relatedDownloads: ["doc-002"],
    seo: {
      keywords: [
        "thỏa thuận đấu nối EVN",
        "trạm biến áp 22kV",
        "tủ RMU switchgear",
        "rơ le bảo vệ 50/51 59N",
      ],
    },
    content: {
      vi: [
        {
          type: "p",
          text: "Đấu nối công trình điện năng lượng tái tạo và trạm biến áp vào lưới điện trung thế 22kV/35kV đòi hỏi đáp ứng đầy đủ quy chuẩn kỹ thuật của Tập đoàn Điện lực Việt Nam (EVN).",
        },
        {
          type: "h2",
          text: "1. Yêu cầu trang bị tủ đóng cắt trung thế RMU",
        },
        {
          type: "p",
          text: "Trạm biến áp phải trang bị tủ trung thế RMU (Ring Main Unit) sử dụng máy cắt chân không cách điện khí SF6 hoặc Eco-friendly gas, trang bị rơ-le kỹ thuật số thực hiện các chức năng bảo vệ:",
        },
        {
          type: "list",
          items: [
            "Chức năng 50/51: Bảo vệ quá dòng pha tức thời và có thời gian.",
            "Chức năng 50N/51N: Bảo vệ chạm đất.",
            "Chức năng 59N: Bảo vệ quá điện áp thứ tự không.",
            "Chức năng 27/59: Bảo vệ thấp áp và quá áp lưới.",
          ],
        },
        {
          type: "h2",
          text: "2. Tích hợp dữ liệu đo đếm và SCADA từ xa",
        },
        {
          type: "p",
          text: "Công tơ đo đếm điện năng ranh giới phải có cấp chính xác 0.2S, hỗ trợ 2 cổng truyền thông độc lập gửi dữ liệu về Trung tâm Điều độ Hệ thống điện.",
        },
      ],
      en: [
        {
          type: "p",
          text: "Connecting renewable energy plants and substations to 22kV/35kV medium-voltage grids mandates compliance with EVN technical grid codes.",
        },
        {
          type: "h2",
          text: "1. MV Switchgear & Relay Protection Requirements",
        },
        {
          type: "p",
          text: "Substations must deploy SF6 or gas-insulated Ring Main Units (RMU) equipped with numerical protection relays covering key functions:",
        },
        {
          type: "list",
          items: [
            "ANSI 50/51: Instantaneous & time-overcurrent protection.",
            "ANSI 50N/51N: Earth fault protection.",
            "ANSI 59N: Neutral displacement overvoltage protection.",
            "ANSI 27/59: Under/over-voltage protection.",
          ],
        },
        {
          type: "h2",
          text: "2. Boundary Metering & SCADA Integration",
        },
        {
          type: "p",
          text: "Boundary energy meters must meet Class 0.2S accuracy with dual independent communication channels linking to regional dispatch centers.",
        },
      ],
    },
  },
  {
    id: "art-008",
    slug: "huong-dan-thiet-ke-mo-phong-san-luong-pvsyst",
    category: "technical-knowledge",
    featured: false,
    status: "published",
    title: {
      vi: "Sổ tay hướng dẫn mô phỏng sản lượng PVSyst và tính toán tổn thất hệ thống",
      en: "PVSyst Yield Simulation & Loss Diagram Engineering Handbook",
    },
    excerpt: {
      vi: "Phương pháp xây dựng mô hình 3D bối cảnh, chọn dữ liệu bức xạ Meteonorm, thiết lập thông số tổn thất đổ bóng, tổn thất dây dẫn và báo cáo xác suất P50/P90.",
      en: "Engineering methodology for 3D shade modeling, Meteonorm weather data selection, loss parameters, and P50/P90 probability reports.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    author: {
      vi: "Đội ngũ Kỹ thuật TD VIỆT NAM",
      en: "TD VIETNAM Engineering Team",
    },
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-20",
    readingTime: { vi: "8 phút đọc", en: "8 min read" },
    tags: ["PVSyst", "Mô phỏng sản lượng", "P50 P90", "Loss Diagram", "Thiết kế kỹ thuật"],
    relatedProducts: ["prod-001", "prod-002"],
    relatedProjects: ["du-an-dien-mat-troi-nha-may-cong-nghiep"],
    relatedDownloads: ["doc-001"],
    seo: {
      keywords: [
        "mô phỏng PVSyst",
        "báo cáo P50 P90 solar",
        "tổn thất sản lượng PVSyst",
        "thiết kế điện mặt trời PVSyst",
      ],
    },
    content: {
      vi: [
        {
          type: "p",
          text: "Phần mềm PVSyst là công cụ tiêu chuẩn ngành trong việc mô phỏng dự báo sản lượng điện và đánh giá hiệu quả đầu tư cho các công trình điện mặt trời.",
        },
        {
          type: "h2",
          text: "1. Các thành phần tổn thất chính trong biểu đồ Loss Diagram",
        },
        {
          type: "table",
          head: [
            "Loại Tổn thất (Loss Factor)",
            "Mức tổn thất tiêu chuẩn",
            "Giải pháp tối ưu kỹ thuật",
          ],
          rows: [
            [
              "Tổn thất do góc chiếu (IAM)",
              "1.5% - 2.5%",
              "Lựa chọn góc nghiêng tối ưu theo tọa độ vĩ độ địa phương",
            ],
            [
              "Tổn thất bụi bẩn (Soiling Loss)",
              "1.5% - 3.0%",
              "Lập lịch vệ sinh pin định kỳ phù hợp với điều kiện môi trường",
            ],
            [
              "Tổn thất điện trở dây dẫn DC/AC",
              "< 1.5%",
              "Tính toán tiết diện dây cáp đồng/nhôm theo giới hạn độ sụt áp < 1%",
            ],
            [
              "Tổn thất do nhiệt độ (Thermal Loss)",
              "5.0% - 8.0%",
              "Duy trì khoảng trống thông gió phía sau tấm pin",
            ],
          ],
        },
        {
          type: "h2",
          text: "2. Ý nghĩa chỉ số xác suất P50 / P90",
        },
        {
          type: "p",
          text: "Báo cáo P50 đại diện cho mức sản lượng dự báo có 50% khả năng đạt được trong thực tế. Trong khi đó, P90 là chỉ số thận trọng hơn (90% khả năng đạt được), thường được các tổ chức tài chính dùng làm cơ sở đánh giá an toàn phương án vay vốn.",
        },
      ],
      en: [
        {
          type: "p",
          text: "PVSyst is the industry-standard software suite for simulating solar PV yield and generating detailed energy loss diagrams for investment appraisal.",
        },
        {
          type: "h2",
          text: "1. Key Loss Factors in PVSyst Loss Diagrams",
        },
        {
          type: "table",
          head: ["Loss Factor", "Typical Range", "Engineering Optimization"],
          rows: [
            [
              "Incidence Angle Modifier (IAM)",
              "1.5% - 2.5%",
              "Optimize tilt angle according to local latitude",
            ],
            [
              "Soiling Loss",
              "1.5% - 3.0%",
              "Implement periodic cleaning schedule tailored to site conditions",
            ],
            [
              "DC/AC Resistance Loss",
              "< 1.5%",
              "Size cable cross-sections to cap voltage drop below 1%",
            ],
            [
              "Thermal Loss (Pmax temp)",
              "5.0% - 8.0%",
              "Ensure adequate rear ventilation clearance",
            ],
          ],
        },
        {
          type: "h2",
          text: "2. Understanding P50 vs. P90 Probability Indicators",
        },
        {
          type: "p",
          text: "P50 reflects median yield expectation (50% probability of exceedance). P90 represents a conservative baseline (90% probability of exceedance), favored by banks for project financing debt coverage ratios.",
        },
      ],
    },
  },
];
