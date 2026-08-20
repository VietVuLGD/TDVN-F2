/**
 * Central content source. Everything the marketing site renders comes from
 * here, so a CMS/admin layer can later swap this module for API data without
 * touching a single component.
 */

export const company = {
  name: "TD VIỆT NAM",
  nameEn: "TD VIETNAM",
  legalName: "CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM",
  taxId: "0111188149",
  representative: "Ông Phan Trung Đức",
  representativeEn: "Mr. Phan Trung Duc",
  representativePosition: "Giám đốc",
  representativePositionEn: "Director",
  tagline: "Giải pháp kỹ thuật & phát triển năng lượng",
  description:
    "CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM chuyên cung cấp các giải pháp kỹ thuật, hệ thống điện mặt trời, lưu trữ điện năng và hạ tầng năng lượng.",
  email: "nangluongtd@gmail.com",
  phone: "Đang cập nhật",
  hotline: "Đang cập nhật",
  address: "Số nhà 168B, Ngõ 565 đường Bát Khối, Phường Long Biên, Thành phố Hà Nội, Việt Nam",
  hours: "Đang cập nhật",
  mapQuery: "So+nha+168B,+Ngo+565+duong+Bat+Khoi,+Phuong+Long+Bien,+Thanh+pho+Ha+Noi,+Viet+Nam",
  founded: "Đang cập nhật",
  socials: [],
  channels: {
    zalo: "#",
    whatsapp: "#",
    messenger: "#",
  },
  assets: {
    logoPng: "/TD VIET NAM KHONG NEN-01.png",
    logoJpg: "/TD VIET NAM KHONG NEN-01.png",
    logoSvg: "/TD VIET NAM KHONG NEN-01.png",
    favicon: "/favicon.ico",
    ogImage: "/TD VIET NAM KHONG NEN-01.png",
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "design-consulting",
    title: "Tư vấn & Thiết kế Kỹ thuật",
    short: "Mô phỏng sản lượng PVSyst, tính toán kết cấu và lập bản vẽ thi công IFC.",
    description:
      "Tư vấn giải pháp và thiết kế chi tiết cho công trình điện mặt trời: mô phỏng bức xạ nhiệt, tính toán che bóng, chọn góc nghiêng, sơ đồ đơn tuyến SLD và hồ sơ bản vẽ thi công đạt tiêu chuẩn.",
    icon: "DraftingCompass",
    deliverables: [
      "Mô hình PVSyst & Báo cáo sản lượng P50/P90",
      "Thiết kế bố trí dàn pin, góc nghiêng & khoảng cách hàng",
      "Sơ đồ đơn tuyến SLD & Hệ thống bảo vệ rơ-le",
      "Tính toán tải trọng kết cấu mái & khung giá đỡ",
    ],
  },
  {
    slug: "epc",
    title: "Thi công EPC Trọn gói",
    short: "Tổng thầu thiết kế, cung ứng vật tư và thi công xây lắp trọn gói.",
    description:
      "Đảm nhận toàn bộ chuỗi công việc EPC với trách nhiệm duy nhất: cung ứng vật tư thiết bị tiêu chuẩn Tier-1, quản lý thi công xây lắp, thử nghiệm nghiệm thu và đấu nối lưới điện EVN.",
    icon: "HardHat",
    deliverables: [
      "Cung ứng vật tư & quản lý chuỗi cung ứng chính hãng",
      "Thi công xây dựng, cơ khí & lắp đặt hệ thống điện",
      "Hồ sơ xin đấu nối & thỏa thuận với điện lực EVN",
      "Thử nghiệm nghiệm thu PAC & bàn giao tài liệu vận hành",
    ],
  },
  {
    slug: "hybrid-systems",
    title: "Hệ thống Điện mặt trời Hybrid & BESS",
    short: "Kết hợp điện mặt trời, lưu trữ pin và máy phát vận hành chủ động.",
    description:
      "Giải pháp năng lượng hybrid đảm bảo nguồn điện liên tục: tích hợp điện mặt trời, khối pin BESS và máy phát điện dự phòng dưới một bộ điều khiển trung tâm với khả năng chuyển mạch islanding mượt mà.",
    icon: "Workflow",
    deliverables: [
      "Khảo sát biểu đồ phụ tải & phân tích rủi ro mất điện",
      "Kịch bản chuyển mạch cô lập islanding & khởi động đen (black-start)",
      "Giải pháp tối ưu chạy máy phát & tiết kiệm nhiên liệu",
      "Cấu hình bộ điều khiển Microgrid EMS",
    ],
  },
  {
    slug: "bess",
    title: "Hệ thống Lưu trữ Năng lượng BESS",
    short: "Khối pin lưu trữ LFP công nghiệp an toàn và tối ưu chi phí.",
    description:
      "Hệ thống lưu trữ điện năng được thiết kế theo biểu giá điện và mục tiêu dự phòng nguồn, tích hợp hệ thống làm mát bằng chất lỏng, phòng cháy chữa cháy tự động và quản lý pin BMS.",
    icon: "BatteryCharging",
    deliverables: [
      "Mô hình tối ưu giá điện giờ cao điểm (Peak-Shaving)",
      "Tính toán dung lượng pin LFP & kế hoạch mở rộng",
      "Tiêu chuẩn an toàn PCCC & tản nhiệt cabinet",
      "Tích hợp hệ thống quản lý pin BMS & EMS",
    ],
  },
  {
    slug: "grid-integration",
    title: "Tích hợp Lưới điện & SCADA",
    short: "Đấu nối hạ tầng trạm biến áp, tủ điện đóng cắt và giám sát SCADA.",
    description:
      "Tích hợp công trình năng lượng vào lưới điện trung/hạ thế: trang bị tủ đóng cắt Switchgear, rơ-le bảo vệ, đo đếm ranh giới và hệ thống truyền thông SCADA theo quy chuẩn ngành điện.",
    icon: "Cpu",
    deliverables: [
      "Lựa chọn thiết bị PCS & đáp ứng Quy chuẩn kỹ thuật lưới điện",
      "Thu thập dữ liệu SCADA & bảo mật truyền thông",
      "Thuật toán điều khiển phát công suất theo lệnh điều độ",
      "Chứng kiến thử nghiệm nghiệm thu cùng cơ quan điện lực",
    ],
  },
  {
    slug: "energy-audit",
    title: "Khảo sát & Kiểm toán Năng lượng",
    short: "Đánh giá hiện trạng tiêu thụ, khả năng chịu lực mái và lập phương án.",
    description:
      "Khảo sát thực địa độc lập: đánh giá khả năng mang tải của kết cấu mái, đo đạc biểu đồ phụ tải 24/7 và kiểm tra hiện trạng hạ tầng điện trước khi triển khai dự án.",
    icon: "LineChart",
    deliverables: [
      "Báo cáo thẩm tra kết cấu & khảo sát hiện trạng mái",
      "Đo đạc phụ tải thực tế & phân tích biểu giá điện",
      "Phương án kỹ thuật & so sánh các mô hình đầu tư",
      "Lộ trình tối ưu chi phí năng lượng cho doanh nghiệp",
    ],
  },
  {
    slug: "om",
    title: "Vận hành & Bảo trì O&M",
    short: "Giám sát từ xa 24/7, bảo trì phòng ngừa và duy trì hiệu suất hệ thống.",
    description:
      "Dịch vụ O&M chuyên nghiệp duy trì sản lượng phát điện: giám sát dữ liệu thời gian thực, chụp ảnh nhiệt hồng ngoại phát hiện điểm nóng (hotspot), vệ sinh tấm pin và xử lý sự cố nhanh chóng.",
    icon: "Wrench",
    deliverables: [
      "Giám sát thông số vận hành 24/7 & cảnh báo tự động",
      "Kiểm tra nhiệt hồng ngoại drone & đo đường cong I-V",
      "Bảo trì định kỳ & sửa chữa khắc phục sự cố",
      "Báo cáo chỉ số hiệu suất Performance Ratio (PR) hàng tháng",
    ],
  },
];

export type Solution = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  points: string[];
  metric: { value: string; label: string };
};

export const solutions: Solution[] = [
  {
    slug: "solar",
    title: "Điện mặt trời mái nhà",
    audience: "Công trình & Tòa nhà",
    summary:
      "Giải pháp điện mặt trời được thiết kế theo đặc điểm phụ tải, hiện trạng mái, phương án đấu nối và yêu cầu vận hành của từng công trình.",
    points: [
      "Thiết kế tối ưu diện tích mái",
      "Đảm bảo an toàn chịu lực & chống thấm",
      "Phương án đấu nối điện tiêu chuẩn",
      "Hệ thống giám sát điện năng từ xa",
    ],
    metric: { value: "Đang cập nhật", label: "Hiệu quả vận hành" },
  },
  {
    slug: "industrial",
    title: "Điện mặt trời công nghiệp",
    audience: "Nhà máy & Khu công nghiệp",
    summary:
      "Giải pháp cho nhà máy và cơ sở sản xuất, tập trung vào khả năng khai thác diện tích mái, phương án đấu nối, an toàn điện và hiệu quả vận hành.",
    points: [
      "Khai thác tối đa mái nhà xưởng",
      "Giải pháp chống nóng & tiết kiệm điện",
      "Đấu nối lưới điện an toàn",
      "Thi công không làm gián đoạn sản xuất",
    ],
    metric: { value: "Đang cập nhật", label: "Tối ưu chi phí" },
  },
  {
    slug: "bess",
    title: "Lưu trữ năng lượng BESS",
    audience: "Cơ sở hạ tầng & Nhà máy",
    summary:
      "Hệ thống lưu trữ năng lượng phục vụ các bài toán tối ưu phụ tải, dự phòng nguồn điện và tích hợp với hệ thống điện mặt trời.",
    points: [
      "Khối pin LFP độ an toàn cao",
      "Hệ thống làm mát bằng chất lỏng",
      "Tối ưu biểu giá điện giờ cao điểm",
      "Chuyển mạch dự phòng nhanh chóng",
    ],
    metric: { value: "Đang cập nhật", label: "Dự phòng nguồn điện" },
  },
  {
    slug: "solar-bess",
    title: "Điện mặt trời + BESS",
    audience: "Tổ hợp công nghiệp & Thương mại",
    summary:
      "Hệ thống kết hợp phát điện mặt trời và lưu trữ BESS giúp chủ động nguồn năng lượng, giảm bớt sự phụ thuộc vào lưới điện.",
    points: [
      "Tối đa hóa sản lượng tự dùng",
      "Dự phòng khi mất điện lưới",
      "Điều khiển thông minh theo thời gian",
      "Đảm bảo công suất phát ổn định",
    ],
    metric: { value: "Đang cập nhật", label: "Nguồn điện ổn định" },
  },
  {
    slug: "substation",
    title: "Hệ thống điện & Trạm biến áp",
    audience: "Hạ tầng kỹ thuật",
    summary:
      "Tư vấn thiết kế, thi công trạm biến áp, tủ điện Switchgear và hệ thống bảo vệ cho các công trình công nghiệp và năng lượng.",
    points: [
      "Trạm biến áp trung & hạ thế",
      "Tủ đóng cắt Switchgear tiêu chuẩn",
      "Bảo vệ rơ-le & tích hợp SCADA",
      "Đấu nối và kiểm định theo EVN",
    ],
    metric: { value: "Đang cập nhật", label: "Độ tin cậy hạ tầng" },
  },
  {
    slug: "microgrid",
    title: "Microgrid độc lập",
    audience: "Khu vực xa lưới & Hạ tầng trọng điểm",
    summary:
      "Hệ thống lưới điện nhỏ kết hợp điện mặt trời, BESS và máy phát dự phòng, vận hành linh hoạt ở chế độ nối lưới hoặc cô lập.",
    points: [
      "Khả năng vận hành islanding",
      "Điều khiển tải thông minh EMS",
      "Tích hợp đa nguồn phát",
      "Cung cấp nguồn điện liên tục",
    ],
    metric: { value: "Đang cập nhật", label: "Vận hành độc lập" },
  },
];

export type { Product, ProductCategoryKey, ProductStatus, SpecificationItem } from "./products";
export { products, productCategories } from "./products";
export { technicalDocuments, downloadDocuments } from "./datasheets";
export type { Project, ProjectCategoryKey, ProjectStatus, ProjectCategory } from "./projects";
export { projects, projectCategories } from "./projects";

export type Post = {
  slug: string;
  title: string;
  category: "Engineering" | "Storage" | "Policy" | "Case Study";
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  body: PostBlock[];
};

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "table"; head: string[]; rows: string[][] };

export const posts: Post[] = [
  {
    slug: "tinh-toan-dung-luong-bess-theo-bieu-gia-dien",
    title: "Tính toán dung lượng hệ thống BESS dựa trên biểu đồ phụ tải thực tế",
    category: "Storage",
    excerpt:
      "Việc lựa chọn dung lượng pin lưu trữ BESS cần căn cứ vào biểu thị phụ tải 24/7 và khung giá điện thay vì chỉ dựa vào công suất dàn pin.",
    date: "2026-06-18",
    readingTime: "7 phút",
    author: "Đội ngũ Kỹ thuật TD VIỆT NAM",
    body: [
      {
        type: "p",
        text: "Trong các dự án lưu trữ năng lượng công nghiệp, xác định đúng mục tiêu sử dụng (Peak Shaving, dự phòng nguồn hay tối ưu điện mặt trời) là bước quan trọng nhất trước khi quyết định cấu hình thiết bị.",
      },
      { type: "h2", text: "Phân tích biểu đồ phụ tải 24/7" },
      {
        type: "p",
        text: "Dữ liệu đo đạc chỉ số công suất theo từng khoảng thời gian 15-30 phút giúp kỹ sư xác định chính xác công suất đỉnh cần giảm và lượng năng lượng cần xả ra trong giờ cao điểm.",
      },
      {
        type: "list",
        items: [
          "Thu thập dữ liệu phụ tải tối thiểu 12 tháng liên tục.",
          "Phân tách rõ chi phí công suất đỉnh và chi phí điện năng.",
          "Mô phỏng suy giảm dung lượng pin (degradation) theo thời gian bảo hành.",
          "Đánh giá điều kiện tản nhiệt và vị trí đặt tủ BESS ngoài trời.",
        ],
      },
      {
        type: "quote",
        text: "Một hệ thống lưu trữ được tính toán đúng bài toán phụ tải sẽ mang lại hiệu quả vận hành tối ưu nhất.",
      },
    ],
  },
  {
    slug: "khao-sat-ket-cau-mai-truoc-khi-lap-dien-mat-troi",
    title: "Quy trình khảo sát kết cấu mái nhà xưởng trước khi lắp điện mặt trời",
    category: "Engineering",
    excerpt:
      "Khả năng chịu tải dư của xà gồ và mái tôn quyết định phương án gá lắp cũng như sự an toàn lâu dài của công trình.",
    date: "2026-05-02",
    readingTime: "6 phút",
    author: "Đội ngũ Kỹ thuật TD VIỆT NAM",
    body: [
      {
        type: "p",
        text: "Khảo sát kết cấu mái là bước bắt buộc trong mọi dự án điện mặt trời mái nhà xưởng. Đội ngũ kỹ sư cần kiểm tra thực tế hệ xà gồ, kèo thép và độ dốc mái.",
      },
      { type: "h2", text: "Các bước khảo sát trọng tâm" },
      {
        type: "list",
        items: [
          "Thẩm tra bản vẽ thiết kế kết cấu gốc của nhà xưởng.",
          "Đo đạc thực tế khoảng cách xà gồ, độ dày thép và tình trạng ăn mòn.",
          "Tính toán bổ sung tải trọng bản thân dàn pin, khung giá đỡ và tải trọng gió bão.",
          "Đưa ra phương án gia cường kết cấu nếu khả năng chịu tải dư không đạt.",
        ],
      },
    ],
  },
  {
    slug: "tieu-chuan-an-toan-pccc-cho-he-thong-dien-mat-troi",
    title: "Tiêu chuẩn an toàn điện và phòng cháy chữa cháy cho hệ thống điện mặt trời",
    category: "Policy",
    excerpt:
      "Tuân thủ các quy định hiện hành về PCCC, trang bị thiết bị ngắt khẩn cấp ngõ DC và lối đi cứu nạn trên mái.",
    date: "2026-03-27",
    readingTime: "5 phút",
    author: "Đội ngũ Kỹ thuật TD VIỆT NAM",
    body: [
      {
        type: "p",
        text: "Thiết kế hệ thống điện mặt trời mái nhà phải đáp ứng đầy đủ các yêu cầu về an toàn PCCC, khoảng cách an toàn và phương án tiếp cận khi có sự cố.",
      },
      {
        type: "list",
        items: [
          "Bố trí khoảng trống hành lang cứu nạn trên mái tôn.",
          "Trang bị thiết bị ngắt nhanh DC (Rapid Shutdown) tại từng chuỗi pin.",
          "Sử dụng cáp điện chống cháy và ống luồng chuyên dụng.",
          "Nghiệm thu an toàn điện và PCCC trước khi đưa vào vận hành.",
        ],
      },
    ],
  },
];

export const postCategories = ["Engineering", "Storage", "Policy", "Case Study"] as const;

export const stats = [
  { value: "Đang cập nhật", suffix: "", label: "Công suất lắp đặt" },
  { value: "Đang cập nhật", suffix: "", label: "Dự án đã thực hiện" },
  { value: "Đang cập nhật", suffix: "", label: "Tỉ lệ sẵn sàng" },
  { value: "Đang cập nhật", suffix: "", label: "Chuyên môn kỹ thuật" },
];

export const testimonials: { quote: string; name: string; role: string }[] = [];

export const partners: string[] = [];

export const faqs = [
  {
    q: "Quy trình triển khai một dự án điện mặt trời công nghiệp gồm những bước nào?",
    a: "Dự án bao gồm các bước: Khảo sát hiện trạng & đo phụ tải -> Thiết kế kỹ thuật & mô phỏng PVSyst -> Thỏa thuận đấu nối với EVN -> Thi công xây lắp EPC -> Thử nghiệm nghiệm thu & đóng điện đưa vào vận hành.",
  },
  {
    q: "TD VIỆT NAM có nhận cải tạo hoặc bảo trì hệ thống do đơn vị khác thi công không?",
    a: "Có. Chúng tôi cung cấp dịch vụ kiểm toán kỹ thuật, chụp ảnh nhiệt phát hiện lỗi, đo đường cong I-V và lập phương án khắc phục, bảo trì O&M cho các hệ thống đang vận hành.",
  },
  {
    q: "Hệ thống pin lưu trữ BESS có an toàn trong điều kiện thời tiết nắng nóng không?",
    a: "Các tủ BESS do TD VIỆT NAM tích hợp đều trang bị hệ thống tản nhiệt chất lỏng, quản lý nhiệt độ cell pin BMS và hệ thống PCCC tự động đạt chuẩn an toàn ngoài trời.",
  },
  {
    q: "Làm thế nào để đánh giá mái nhà xưởng có đủ điều kiện lắp điện mặt trời?",
    a: "Kỹ sư TD VIỆT NAM sẽ trực tiếp khảo sát hiện trạng xà gồ, độ dốc mái, hướng nắng, kiểm tra bản vẽ kết cấu và tính toán tải trọng an toàn trước khi lập phương án.",
  },
  {
    q: "Dịch vụ Vận hành & Bảo trì (O&M) bao gồm những công việc gì?",
    a: "Dịch vụ O&M bao gồm giám sát dữ liệu 24/7, phát hiện sự cố tự động, kiểm tra định kỳ thiết bị, vệ sinh tấm pin mặt trời và lập báo cáo định kỳ cho chủ đầu tư.",
  },
];

export const values = [
  {
    title: "Kỹ thuật làm nền tảng",
    text: "Mọi đề xuất giải pháp đều dựa trên kết quả tính toán mô phỏng thực tế, khảo sát kết cấu và dữ liệu đo đạc phụ tải.",
  },
  {
    title: "Trách nhiệm trọn gói",
    text: "Thiết kế, vật tư, thi công và dịch vụ bảo trì được thực hiện thống nhất bởi một đầu mối chuyên nghiệp.",
  },
  {
    title: "Phù hợp điều kiện khí hậu",
    text: "Lựa chọn vật tư đạt chuẩn chống ăn mòn C5-M, chịu tải trọng gió bão và hoạt động bền bỉ trong môi trường nhiệt đới.",
  },
  {
    title: "Cam kết chất lượng thực tế",
    text: "Hiệu suất vận hành, độ sẵn sàng thiết bị được đo đạc và báo cáo minh bạch trong suốt quá trình hoạt động.",
  },
];

export const timeline = [
  { year: "Thông tin", text: "Lịch sử phát triển và các mốc sự kiện đang được cập nhật." },
];

export const careers = [
  {
    title: "Kỹ sư Thiết kế Điện mặt trời & PVSyst",
    team: "Phòng Kỹ thuật & R&D",
    location: "Hà Nội / Dự án",
    type: "Toàn thời gian",
    experience: "Từ 2 năm kinh nghiệm",
    salary: "Thỏa thuận theo năng lực (18 - 28 triệu)",
    deadline: "Tuyển liên tục",
    description:
      "Chịu trách nhiệm khảo sát mặt bằng, mô phỏng sản lượng PVSyst/AutoCAD, bóc tách khối lượng BOM và thiết kế bản vẽ thi công IFC hệ thống điện mặt trời & BESS.",
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Hệ thống điện, Kỹ thuật điện, Năng lượng tái tạo.",
      "Sử dụng thành thạo PVSyst, AutoCAD, SketchUp/HelioScope, phần mềm tính toán ngắn mạch.",
      "Nắm vững các tiêu chuẩn kỹ thuật điện hiện hành của EVN và quy chuẩn an toàn.",
      "Có khả năng làm việc độc lập và phối hợp tốt với đội ngũ thi công hiện trường.",
    ],
    benefits: [
      "Lương cứng cạnh tranh + thưởng dự án theo sản lượng thiết kế nghiệm thu.",
      "Được tài trợ tham gia các khóa đào tạo chuyên sâu và thi chứng chỉ quốc tế.",
      "Môi trường kỹ thuật chuyên sâu, tiếp cận công nghệ BESS và Microgrid tiên tiến.",
      "Đầy đủ chế độ BHXH, BHYT, bảo hiểm sức khỏe cao cấp và du lịch hàng năm.",
    ],
  },
  {
    title: "Kỹ sư Giám sát Thi công EPC / Trạm biến áp",
    team: "Phòng Dự án & Thi công",
    location: "Miền Bắc / Miền Trung",
    type: "Toàn thời gian",
    experience: "Từ 3 năm kinh nghiệm",
    salary: "Thỏa thuận (20 - 32 triệu + Phụ cấp công trình)",
    deadline: "Tuyển liên tục",
    description:
      "Tổ chức triển khai thi công, giám sát chất lượng, an toàn lao động (HSE), nghiệm thu đóng điện trạm biến áp và hòa lưới hệ thống điện mặt trời công nghiệp.",
    requirements: [
      "Tốt nghiệp Đại học ngành Điện công nghiệp, Xây dựng công trình điện.",
      "Có chứng chỉ hành nghề giám sát thi công công trình đường dây & trạm biến áp.",
      "Kinh nghiệm thi công thực tế các dự án điện mặt trời mái nhà xưởng hoặc trạm 22kV - 110kV.",
      "Sẵn sàng đi công tác theo tiến độ triển khai dự án.",
    ],
    benefits: [
      "Phụ cấp công trình, lưu trú và công tác phí đầy đủ theo quy chế công ty.",
      "Thưởng hoàn thành tiến độ và chất lượng dự án đóng điện thành công.",
      "Cơ hội thăng tiến lên Chỉ huy trưởng công trình / Giám đốc dự án.",
      "Bảo hiểm tai nạn 24/7 và gói chăm sóc y tế toàn diện.",
    ],
  },
  {
    title: "Kỹ sư Vận hành & Bảo trì (O&M)",
    team: "Trung tâm Vận hành O&M",
    location: "Hà Nội / Hiện trường",
    type: "Toàn thời gian",
    experience: "Từ 1 năm kinh nghiệm",
    salary: "Thỏa thuận (15 - 22 triệu)",
    deadline: "Tuyển liên tục",
    description:
      "Giám sát thông số vận hành SCADA 24/7, phát hiện sự cố, thực hiện bảo trì định kỳ, đo kiểm đường cong I-V, chụp ảnh nhiệt tấm pin và phân tích hiệu suất PR công trình.",
    requirements: [
      "Tốt nghiệp Cao đẳng/Đại học chuyên ngành Điện, Tự động hóa hoặc liên quan.",
      "Hiểu biết về nguyên lý hoạt động của Inverter chuỗi/tập trung, pin lưu trữ và thiết bị đóng cắt.",
      "Cẩn thận, tỉ mỉ, có tinh thần trách nhiệm và tuân thủ quy trình an toàn điện.",
      "Ưu tiên ứng viên có kinh nghiệm sử dụng thiết bị đo kiểm chuyên dụng (Fluke, Seaward).",
    ],
    benefits: [
      "Được đào tạo bài bản về quy trình O&M tiêu chuẩn công nghiệp quốc tế.",
      "Thưởng hiệu quả duy trì độ sẵn sàng (Availability) và sản lượng phát điện.",
      "Trang bị đầy đủ dụng cụ đo kiểm, phương tiện và bảo hộ lao động cao cấp.",
      "Môi trường làm việc ổn định, gắn bó lâu dài.",
    ],
  },
  {
    title: "Chuyên viên Phát triển Dự án & Marketing Kỹ thuật",
    team: "Phòng Kinh doanh & Giải pháp",
    location: "Hà Nội",
    type: "Toàn thời gian",
    experience: "Từ 2 năm kinh nghiệm",
    salary: "Thỏa thuận (16 - 25 triệu + % Doanh số)",
    deadline: "Tuyển liên tục",
    description:
      "Tiếp cận khách hàng doanh nghiệp, nhà máy công nghiệp, tư vấn giải pháp năng lượng tối ưu và phối hợp lập hồ sơ năng lực/đấu thầu EPC trọn gói.",
    requirements: [
      "Tốt nghiệp Đại học khối Kỹ thuật, Kinh tế, Quản trị hoặc Marketing.",
      "Kỹ năng giao tiếp, đàm phán và thuyết trình phương án kỹ thuật tốt.",
      "Ưu tiên ứng viên từng làm việc trong ngành thiết bị điện công nghiệp, năng lượng tái tạo, cơ điện M&E.",
      "Năng động, định hướng mục tiêu và có tư duy chăm sóc khách hàng B2B.",
    ],
    benefits: [
      "Thu nhập hấp dẫn theo kết quả hợp đồng EPC (không giới hạn trần hoa hồng).",
      "Tiếp cận mạng lưới đối tác, chủ đầu tư và các tập đoàn công nghiệp lớn.",
      "Hỗ trợ tối đa từ đội ngũ kỹ sư tính toán PVSyst và thiết kế giải pháp.",
      "Lộ trình thăng tiến rõ ràng lên vị trí Trưởng nhóm / Giám đốc phát triển kinh doanh.",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Khảo sát & Đánh giá",
    text: "Thu thập dữ liệu phụ tải, khảo sát kết cấu mái và hiện trạng hạ tầng điện trước khi lập phương án.",
  },
  {
    step: "02",
    title: "Thiết kế Kỹ thuật",
    text: "Mô phỏng sản lượng PVSyst, tối ưu hóa bố trí dàn pin và hoàn thiện bản vẽ thi công IFC tiêu chuẩn.",
  },
  {
    step: "03",
    title: "Thi công EPC",
    text: "Cung ứng vật tư chính hãng, thi công xây lắp an toàn và thực hiện thủ tục đấu nối với điện lực.",
  },
  {
    step: "04",
    title: "Vận hành O&M",
    text: "Giám sát từ xa, bảo trì định kỳ và duy trì hiệu suất vận hành dài hạn cho công trình.",
  },
];
