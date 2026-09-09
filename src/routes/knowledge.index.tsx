import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  Check,
  AlertTriangle,
  ChevronRight,
  X,
  BookCheck,
  Download,
} from "lucide-react";
import { useState, useMemo } from "react";

const title = "Trung Tâm Kiến Thức Kỹ Thuật & Tiêu Chuẩn Năng Lượng | TD VIỆT NAM";
const description =
  "Kiến thức kỹ thuật, hướng dẫn thực tế và thông tin chuyên ngành về hệ thống điện và năng lượng mặt trời từ đội ngũ kỹ sư TD VIỆT NAM.";

export const Route = createFileRoute("/knowledge/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/knowledge" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/knowledge" }],
  }),
  component: KnowledgePage,
});

/* =========================================================================
   1. DỮ LIỆU: HAI NHÓM NỘI DUNG CHÍNH (EDITORIAL CATEGORIES)
========================================================================= */
const TECHNICAL_KNOWLEDGE_CATEGORIES = [
  {
    id: "core-technical",
    filterKey: "technical",
    number: "01",
    title: "Kiến thức kỹ thuật",
    desc: "Kiến thức nền tảng và chuyên sâu về hệ thống điện, cơ chế bám tải và bảo vệ.",
    topics: [
      "Kiến thức nền tảng về điện & điện mặt trời",
      "Inverter, MPPT, PV, pin lưu trữ (BESS)",
      "Thiết bị điện & hệ thống bảo vệ rơ-le",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "operations-guide",
    filterKey: "operations",
    number: "02",
    title: "Hướng dẫn vận hành",
    desc: "Quy chuẩn đóng cắt an toàn, xử lý mã lỗi và bảo dưỡng định kỳ nâng cao tuổi thọ hệ thống.",
    topics: [
      "Quy trình vận hành & đóng ngắt an toàn",
      "Kiểm tra định kỳ & quét nhiệt hồng ngoại",
      "Xử lý cảnh báo, mã lỗi Inverter & BESS",
    ],
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "installation-guide",
    filterKey: "installation",
    number: "03",
    title: "Hướng dẫn lắp đặt",
    desc: "Kỹ thuật thi công cơ điện áp mái, đấu nối tủ điện và chống thấm dột chuẩn công nghiệp.",
    topics: [
      "Lắp đặt hệ thống PV & khung giàn nhôm chịu bão",
      "Đấu nối Inverter, pin lưu trữ & cáp DC 1500V",
      "Tủ điện phân phối, SPD chống sét & tiếp địa R < 4Ω",
    ],
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "technology-analysis",
    filterKey: "technology",
    number: "04",
    title: "Phân tích công nghệ",
    desc: "Đánh giá các bước tiến công nghệ bán dẫn quang điện và cấu trúc điều khiển lưới mới nhất.",
    topics: [
      "Công nghệ TOPCon, HJT, BC & Perovskite",
      "Inverter Hybrid, On-grid & Battery Energy Storage (BESS)",
      "Cơ chế Grid-forming, Grid-following & Microgrid",
    ],
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80",
  },
];

const STANDARDS_NEWS_CATEGORIES = [
  {
    id: "news-events",
    filterKey: "news",
    number: "01",
    title: "Tin tức & sự kiện",
    desc: "Cập nhật diễn biến thị trường năng lượng tái tạo, chuỗi cung ứng vật tư và hoạt động kỹ thuật TD VIỆT NAM.",
    topics: [
      "Tin tức ngành năng lượng tái tạo & BESS",
      "Xu hướng công nghệ & chuỗi cung ứng thiết bị",
      "Hoạt động triển khai & nghiệm thu của TD VIỆT NAM",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "standards-regulations",
    filterKey: "standards",
    number: "02",
    title: "Tiêu chuẩn & quy chuẩn",
    desc: "Hệ thống các tiêu chuẩn kỹ thuật quốc tế và quy định pháp lý hiện hành của Bộ Công Thương / EVN.",
    topics: [
      "Tiêu chuẩn quốc tế: IEC, IEEE, ISO",
      "Quy chuẩn Việt Nam: TCVN, QCVN ngành điện",
      "Quy định tự sản tự tiêu, đấu nối & an toàn PCCC mái xưởng",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
];

/* =========================================================================
   2. DỮ LIỆU: BÀI VIẾT NỔI BẬT (FEATURED PUBLICATION)
========================================================================= */
const FEATURED_ARTICLE = {
  id: "featured-grid-forming-bess",
  category: "Phân tích công nghệ",
  categoryKey: "technology",
  title:
    "Kiểm Soát Tần Số & Điện Áp Quá Độ Trong Hệ Thống Điện Mặt Trời Tích Hợp BESS Chuẩn Grid-Forming",
  summary:
    "Phân tích chuyên sâu về cơ chế chuyển đổi từ biến tần bám lưới (Grid-Following) sang biến tần tạo lưới (Grid-Forming). Bài viết trình bày thuật toán điều khiển máy phát đồng bộ ảo (Virtual Synchronous Generator - VSG), giúp hệ thống lưu trữ BESS tham gia điều tần sơ cấp và ổn định lưới điện microgrid nhà máy.",
  author: "Ban Kỹ Thuật Hệ Thống Điện – TD VIỆT NAM",
  date: "18 Tháng 8, 2026",
  readTime: "12 phút đọc",
  views: "3.420 lượt đọc",
  image:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
  keyHighlights: [
    "Nguyên lý hoạt động của vòng điều khiển VSG quán tính ảo mô phỏng rotor máy phát điện cơ.",
    "Khắc phục hiện tượng sụt áp tức thời khi khởi động phụ tải động cơ công suất lớn trong nhà xưởng.",
    "Quy chuẩn tương thích IEC 62933 cho các trạm lưu trữ năng lượng pin Lithium công nghiệp.",
  ],
};

/* =========================================================================
   3. DỮ LIỆU: TẤT CẢ BÀI VIẾT KỸ THUẬT (LATEST KNOWLEDGE ARTICLES)
========================================================================= */
type KnowledgeFilter =
  "all" | "technical" | "operations" | "installation" | "technology" | "news" | "standards";
type SortOrder = "latest" | "popular";

interface KnowledgeArticle {
  id: string;
  category: string;
  categoryKey: "technical" | "operations" | "installation" | "technology" | "news" | "standards";
  code: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  dateTimestamp: number;
  readTime: string;
  views: number;
  image: string;
  details: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
}

const ARTICLES_DATABASE: KnowledgeArticle[] = [
  {
    id: "zero-export-smart-meter",
    category: "Kiến thức kỹ thuật",
    categoryKey: "technical",
    code: "TECH-01",
    title: "Điện Mặt Trời Bám Tải (Zero Export): Cơ Chế Đo Đếm Smart Meter & Điều Chế Công Suất",
    summary:
      "Phân tích cơ chế làm việc của thiết bị biến dòng CT cảm biến và nguyên lý Inverter tự động tiết giảm công suất phát khớp với biểu đồ tiêu thụ phụ tải tức thời.",
    author: "Kỹ sư Đo Lường & Tự Động Hóa",
    date: "14 Tháng 8, 2026",
    dateTimestamp: 1786665600,
    readTime: "7 phút đọc",
    views: 2890,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    details: [
      {
        sectionTitle: "1. Cơ chế giám sát dòng điện tức thời",
        paragraphs: [
          "Thiết bị đo đếm Smart Meter sử dụng cảm biến biến dòng (CT) lắp đặt tại điểm đấu nối tổng sau công tơ điện lực. Thiết bị liên tục đo chiều dòng điện và công suất tiêu thụ của phụ tải theo chu kỳ mili-giây.",
          "Khi công suất phát của dàn PV vượt quá công suất tiêu thụ, Smart Meter gửi lệnh điều chế qua cổng truyền thông RS485 đến Inverter để lập tức giảm công suất phát về điểm cân bằng.",
        ],
      },
      {
        sectionTitle: "2. Độ chính xác & Thời gian đáp ứng",
        paragraphs: [
          "Hệ thống điều khiển bám tải chuẩn kỹ thuật của TD VIỆT NAM có thời gian đáp ứng dưới 1 giây, đảm bảo 100% không phát ngược điện năng dư thừa ra lưới trung thế của Điện lực EVN.",
        ],
      },
    ],
  },
  {
    id: "pr-performance-ratio-calculation",
    category: "Kiến thức kỹ thuật",
    categoryKey: "technical",
    code: "TECH-02",
    title:
      "Chỉ Số PR (Performance Ratio): Phương Pháp Tính Toán & Kiểm Toán Hiệu Suất Chuẩn IEC 61724",
    summary:
      "Hướng dẫn chi tiết công thức tính toán chỉ số hiệu suất PR, phân tích các thành phần suy hao do nhiệt độ cell pin, tổn thất cáp DC/AC và bụi bẩn bề mặt.",
    author: "Kỹ sư Mô Phỏng PVsyst",
    date: "02 Tháng 8, 2026",
    dateTimestamp: 1785628800,
    readTime: "9 phút đọc",
    views: 1950,
    image:
      "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=80",
    details: [
      {
        sectionTitle: "1. Định nghĩa và công thức tính PR",
        paragraphs: [
          "Performance Ratio (PR) là tỷ số giữa sản lượng điện AC thực tế đo đạc tại đầu ra Inverter so với sản lượng điện danh định lý thuyết trong điều kiện bức xạ thực tế.",
          "Công thức: PR = (Yf / Yr) = (E_ac / P_nom) / (H_poa / G_stc). Chỉ số này phản ánh chất lượng toàn diện của khâu thiết kế, thi công và tình trạng vận hành của thiết bị.",
        ],
      },
      {
        sectionTitle: "2. Ngưỡng chuẩn công nghiệp",
        paragraphs: [
          "Một công trình điện mặt trời áp mái chất lượng cao tại Việt Nam sau khi trừ tổn thất nhiệt độ và bụi bẩn phải duy trì chỉ số PR bình quân năm từ 80% đến 84%.",
        ],
      },
    ],
  },
  {
    id: "inverter-troubleshooting-codes",
    category: "Hướng dẫn vận hành",
    categoryKey: "operations",
    code: "OP-01",
    title:
      "Bảng Tra Cứu & Xử Lý Sự Cố Mã Lỗi Inverter: Low PV Voltage, Isolation Fault, Grid Fault",
    summary:
      "Quy trình kiểm tra chẩn đoán nguyên nhân và các bước khắc phục an toàn khi biến tần báo lỗi sụt áp DC, chạm chập cách điện hoặc lệch tần số lưới điện.",
    author: "Đội Phản Ứng Kỹ Thuật O&M",
    date: "28 Tháng 7, 2026",
    dateTimestamp: 1785196800,
    readTime: "8 phút đọc",
    views: 3120,
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&auto=format&fit=crop&q=80",
    details: [
      {
        sectionTitle: "1. Lỗi điện trở cách điện (Isolation Fault / Riso Low)",
        paragraphs: [
          "Thường xảy ra vào buổi sáng sớm khi độ ẩm không khí cao hoặc sau cơn mưa lớn. Nguyên nhân do lớp vỏ cáp DC bị xước tiếp xúc với khung nhôm, hoặc đầu nối MC4 bị ngấm nước.",
          "Cách xử lý: Dùng đồng hồ Mega-Ohm (Megger) đo điện trở cách điện giữa cực (+) và (-) của từng chuỗi String so với vỏ tiếp địa. Điện trở đạt chuẩn phải lớn hơn 1 MΩ.",
        ],
      },
      {
        sectionTitle: "2. Lỗi điện áp lưới (Grid Voltage / Frequency Out of Range)",
        paragraphs: [
          "Xảy ra khi điện áp lưới EVN tại khu vực dao động vượt ngưỡng cài đặt bảo vệ của Inverter (thường là 180V - 264V đối với 1 pha và 310V - 450V đối với 3 pha).",
        ],
      },
    ],
  },
  {
    id: "thermal-scanning-hotspot-prevention",
    category: "Hướng dẫn vận hành",
    categoryKey: "operations",
    code: "OP-02",
    title:
      "Quy Trình Đo Quét Nhiệt Hồng Ngoại & Kiểm Soát Nguy Cơ Điểm Nóng (Hot-Spot) Trên Giàn Pin",
    summary:
      "Kỹ thuật sử dụng camera nhiệt hồng ngoại và drone chẩn đoán sớm hiện tượng diode bypass bị đánh thủng, nứt cell pin ẩn và hạn chế nguy cơ phát hỏa.",
    author: "Kỹ sư Thí Nghiệm & Đo Kiểm",
    date: "19 Tháng 7, 2026",
    dateTimestamp: 1784419200,
    readTime: "6 phút đọc",
    views: 1680,
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80",
    details: [
      {
        sectionTitle: "1. Nguyên nhân hình thành Hot-spot",
        paragraphs: [
          "Điểm nóng xuất hiện khi một phần cell pin bị che bóng, rạn nứt vi mô (Micro-crack) hoặc hỏng diode bypass trong hộp đấu nối. Cell pin bị che sẽ chuyển từ trạng thái phát điện sang trạng thái tiêu thụ năng lượng như một điện trở tỏa nhiệt.",
          "Nhiệt độ tại điểm nóng có thể vượt quá 120°C, gây chảy lớp màng EVA, rạn nứt kính cường lực và tiềm ẩn nguy cơ phát hỏa trực tiếp trên mái nhà xưởng.",
        ],
      },
    ],
  },
  {
    id: "earthing-spd-installation-guide",
    category: "Hướng dẫn lắp đặt",
    categoryKey: "installation",
    code: "INST-01",
    title:
      "Tiêu Chuẩn Thi Công Tiếp Địa Đẳng Thế & Thiết Bị Chống Sét Lan Truyền SPD Cho Mái Nhà Xưởng",
    summary:
      "Hướng dẫn liên kết kẹp răng cưa phá màng Anodized khung nhôm, bố trí bãi cọc tiếp địa đạt điện trở đất R < 4.0 Ω và chọn thiết bị chống sét Type II.",
    author: "Chỉ Huy Trưởng Thi Công EPC",
    date: "10 Tháng 7, 2026",
    dateTimestamp: 1783641600,
    readTime: "10 phút đọc",
    views: 2450,
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80",
    details: [
      {
        sectionTitle: "1. Kỹ thuật tiếp địa khung nhôm",
        paragraphs: [
          "Lớp mạ Anodized trên thanh ray và khung tấm pin là lớp cách điện. Bắt buộc phải sử dụng kẹp tiếp địa có răng cưa (Grounding Clip) bằng thép không gỉ SUS304 để xuyên thủng lớp mạ, tạo liên kết dẫn điện hoàn hảo.",
          "Cáp tiếp địa liên kết dọc giàn pin phải sử dụng dây đồng trần hoặc bọc cách điện ruột đồng tối thiểu M16 đến M25 dẫn về hộp kiểm tra tiếp địa.",
        ],
      },
    ],
  },
  {
    id: "topcon-vs-hjt-technology-review",
    category: "Phân tích công nghệ",
    categoryKey: "technology",
    code: "TECH-REV-01",
    title:
      "So Sánh Chi Tiết Công Nghệ Pin N-Type TOPCon, HJT & Back-Contact (BC) Trong Khí Hậu Nhiệt Đới",
    summary:
      "Đánh giá chuyên sâu về hệ số suy giảm nhiệt độ Pmax, hệ số phát điện 2 mặt (Bifaciality) và độ suy hao năm đầu (LID/LeTID) trong điều kiện vận hành tại Việt Nam.",
    author: "Kỹ sư Nghiên Cứu Công Nghệ",
    date: "25 Tháng 6, 2026",
    dateTimestamp: 1782345600,
    readTime: "11 phút đọc",
    views: 4120,
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80",
    details: [
      {
        sectionTitle: "1. So sánh hệ số suy giảm nhiệt độ",
        paragraphs: [
          "Khi nhiệt độ bề mặt tấm pin tăng lên 65°C vào giữa trưa hè, tấm pin công nghệ P-type PERC cũ (-0.35%/°C) suy giảm công suất rất lớn.",
          "Công nghệ N-type TOPCon (-0.30%/°C) và đặc biệt là HJT (-0.26%/°C) duy trì sản lượng phát điện vượt trội hơn từ 4% đến 6% trong suốt mùa nóng.",
        ],
      },
    ],
  },
  {
    id: "self-consumption-regulations-2026",
    category: "Tiêu chuẩn & quy chuẩn",
    categoryKey: "standards",
    code: "REG-01",
    title:
      "Tổng Hợp Quy Định Mới Nhất Về Phát Triển Điện Mặt Trời Mái Nhà Tự Sản Tự Tiêu & Đấu Nối Lưới",
    summary:
      "Cập nhật các quy định hiện hành của Bộ Công Thương và EVN về hồ sơ đăng ký công suất, điều kiện kỹ thuật Zero-Export và quy chuẩn an toàn PCCC.",
    author: "Ban Pháp Lý & Thỏa Thuận Kỹ Thuật",
    date: "15 Tháng 6, 2026",
    dateTimestamp: 1781481600,
    readTime: "8 phút đọc",
    views: 3890,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    details: [
      {
        sectionTitle: "1. Yêu cầu kỹ thuật đối với hệ thống bám tải",
        paragraphs: [
          "Hệ thống điện mặt trời tự sản tự tiêu đấu nối vào lưới điện hạ thế / trung thế phải trang bị thiết bị chống phát ngược sản lượng điện dư thừa lên hệ thống điện quốc gia.",
          "Hồ sơ đăng ký công suất cần kèm theo sơ đồ đơn tuyến SLD, thông số kỹ thuật thiết bị đóng cắt và kết quả đo đạc phụ tải thực tế.",
        ],
      },
    ],
  },
  {
    id: "bess-market-supply-chain-trends",
    category: "Tin tức & sự kiện",
    categoryKey: "news",
    code: "NEWS-01",
    title:
      "Bản Tin Năng Lượng: Xu Hướng Lưu Trữ Năng Lượng BESS & Biến Động Chuỗi Cung Ứng Pin Lithium LFP",
    summary:
      "Điểm tin thị trường chuỗi cung ứng vật tư bán dẫn Silicon, xu hướng giảm giá cell pin Lithium LiFePO4 và những bước tiến ứng dụng AI trong quản trị trạm sạc xe điện.",
    author: "Ban Phân Tích Thị Trường",
    date: "01 Tháng 6, 2026",
    dateTimestamp: 1780272000,
    readTime: "6 phút đọc",
    views: 1820,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    details: [
      {
        sectionTitle: "1. Xu hướng công nghệ pin LFP",
        paragraphs: [
          "Các nhà máy sản xuất cell pin Lithium Iron Phosphate (LiFePO4) chuẩn công nghiệp đã nâng mật độ năng lượng và kéo dài tuổi thọ lên trên 6.000 đến 8.000 chu kỳ sạc/xả, đưa giải pháp lưu trữ BESS trở nên hiệu quả vượt trội về mặt kinh tế.",
        ],
      },
    ],
  },
];

export function KnowledgePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<KnowledgeFilter>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("latest");
  const [selectedArticle, setSelectedArticle] = useState<KnowledgeArticle | null>(null);

  // Logic lọc và sắp xếp bài viết
  const filteredArticles = useMemo(() => {
    const result = ARTICLES_DATABASE.filter((item) => {
      const matchFilter = activeFilter === "all" || item.categoryKey === activeFilter;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchFilter && matchSearch;
    });

    if (sortOrder === "latest") {
      result.sort((a, b) => b.dateTimestamp - a.dateTimestamp);
    } else {
      result.sort((a, b) => b.views - a.views);
    }

    return result;
  }, [searchQuery, activeFilter, sortOrder]);

  return (
    <div className="w-full bg-white text-[#0B0F19] font-sans antialiased selection:bg-[#008A4B] selection:text-white">
      {/* ============================================================= */}
      {/* 1. HERO SECTION: CORPORATE TECHNICAL PORTAL                   */}
      {/* ============================================================= */}
      <section className="relative w-full bg-[#0B0F19] text-white pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#008A4B]/20 border-l-2 border-[#008A4B] text-[#008A4B] text-xs font-bold uppercase tracking-wider">
            <span>TRUNG TÂM KIẾN THỨC KỸ THUẬT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Cột trái: Typography & Thanh tìm kiếm lớn */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[1.05]">
                KIẾN THỨC
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl">
                Kiến thức kỹ thuật, hướng dẫn thực tế và thông tin chuyên ngành về hệ thống điện và
                năng lượng mặt trời từ đội ngũ kỹ sư TD VIỆT NAM.
              </p>

              {/* Thanh tìm kiếm lớn */}
              <div className="pt-2 max-w-xl">
                <div className="relative flex items-center border border-neutral-700 bg-neutral-900/90 shadow-xs focus-within:border-[#008A4B] transition-colors">
                  <Search className="w-5 h-5 text-neutral-400 ml-4 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm kiến thức, công nghệ, tiêu chuẩn..."
                    className="w-full px-4 py-3.5 text-xs sm:text-sm font-semibold text-white placeholder:text-neutral-500 placeholder:font-normal bg-transparent focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="p-2 text-neutral-400 hover:text-white mr-2 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-400 pt-2.5 px-1 font-medium">
                  <span className="text-neutral-500">CHỦ ĐỀ QUAN TÂM:</span>
                  <button
                    onClick={() => {
                      setSearchQuery("Zero Export");
                      setActiveFilter("all");
                    }}
                    className="underline hover:text-[#008A4B] cursor-pointer"
                  >
                    Zero Export
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => {
                      setSearchQuery("Isolation Fault");
                      setActiveFilter("all");
                    }}
                    className="underline hover:text-[#008A4B] cursor-pointer"
                  >
                    Mã lỗi Inverter
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => {
                      setSearchQuery("TOPCon");
                      setActiveFilter("all");
                    }}
                    className="underline hover:text-[#008A4B] cursor-pointer"
                  >
                    TOPCon vs HJT
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => {
                      setSearchQuery("IEC");
                      setActiveFilter("all");
                    }}
                    className="underline hover:text-[#008A4B] cursor-pointer"
                  >
                    Tiêu chuẩn IEC
                  </button>
                </div>
              </div>
            </div>

            {/* Cột phải: Hình ảnh kỹ thuật tiết chế */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-[4/3] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509391365360-2e959784a276?w=1200&auto=format&fit=crop&q=80"
                  alt="Hệ thống điện mặt trời và lưu trữ năng lượng TD VIỆT NAM"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0B0F19]/90 backdrop-blur-xs p-4 text-white border-t border-neutral-800">
                  <div className="text-[11px] font-bold text-[#F15A24] uppercase tracking-wide">
                    TÀI LIỆU KỸ SƯ HỆ THỐNG
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    Chuẩn hóa tiêu chuẩn tính toán • Vận hành an toàn • Tối ưu LCOE
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400 font-medium px-1">
                <span>CƠ SỞ DỮ LIỆU ĐO KIỂM THỰC TẾ</span>
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
          <span className="text-[#008A4B]">Kiến thức kỹ thuật</span>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 2. HAI NHÓM NỘI DUNG CHÍNH (EDITORIAL CATEGORY CARDS)         */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* NHÓM 01: KIẾN THỨC KỸ THUẬT */}
          <div className="space-y-10">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#008A4B] uppercase tracking-wider">
                <span>NHÓM 01</span>
                <span>•</span>
                <span>CHUYÊN MÔN KỸ THUẬT</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                01 — KIẾN THỨC KỸ THUẬT
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Kiến thức chuyên môn dành cho kỹ sư, kỹ thuật viên và những người quan tâm đến hệ
                thống điện và năng lượng mặt trời.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TECHNICAL_KNOWLEDGE_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    setActiveFilter(cat.filterKey as KnowledgeFilter);
                    const el = document.getElementById("latest-articles");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#F8FAFC] border border-neutral-200 hover:border-[#0B0F19] transition-all p-6 sm:p-7 space-y-5 flex flex-col justify-between group shadow-xs cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-neutral-300 group-hover:text-[#008A4B] transition-colors">
                        {cat.number}
                      </span>
                      <div className="w-7 h-7 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 group-hover:bg-[#008A4B] group-hover:text-white transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-black uppercase text-[#0B0F19] leading-snug group-hover:text-[#008A4B] transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {cat.desc}
                    </p>

                    <div className="pt-3 border-t border-neutral-200/80 space-y-1.5">
                      {cat.topics.map((tp, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <span className="text-[#008A4B] font-bold">•</span>
                          <span className="leading-snug">{tp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-xs font-bold text-[#008A4B] uppercase tracking-wider flex items-center gap-1">
                    <span>Xem các bài viết</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NHÓM 02: TIN TỨC & TIÊU CHUẨN */}
          <div className="space-y-10 pt-6 border-t border-neutral-200">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F15A24] uppercase tracking-wider">
                <span>NHÓM 02</span>
                <span>•</span>
                <span>THỊ TRƯỜNG &amp; QUY CHUẨN</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                02 — TIN TỨC &amp; TIÊU CHUẨN
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Cập nhật thông tin ngành năng lượng, sự kiện, tiêu chuẩn kỹ thuật và những thay đổi
                quan trọng đối với hệ thống điện.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {STANDARDS_NEWS_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    setActiveFilter(cat.filterKey as KnowledgeFilter);
                    const el = document.getElementById("latest-articles");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#F8FAFC] border border-neutral-200 hover:border-[#0B0F19] transition-all p-8 space-y-6 flex flex-col justify-between group shadow-xs cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl sm:text-4xl font-black text-neutral-300 group-hover:text-[#F15A24] transition-colors">
                        {cat.number}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 group-hover:bg-[#F15A24] group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-black uppercase text-[#0B0F19] leading-snug group-hover:text-[#F15A24] transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {cat.desc}
                    </p>

                    <div className="pt-3 border-t border-neutral-200/80 space-y-2">
                      {cat.topics.map((tp, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-medium"
                        >
                          <Check className="w-4 h-4 text-[#F15A24] mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{tp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 text-xs font-bold text-[#F15A24] uppercase tracking-wider flex items-center gap-1">
                    <span>Xem chuyên đề &amp; văn bản</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 3. FEATURED ARTICLE (TECHNICAL PUBLICATION 50/50 LAYOUT)       */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#008A4B] uppercase tracking-wider">
              <BookCheck className="w-4 h-4" />
              <span>BÀI VIẾT NỔI BẬT • TECHNICAL PUBLICATION</span>
            </div>
            <span className="text-xs font-semibold text-neutral-400">CHUYÊN ĐỀ ĐẶC BIỆT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-neutral-950 p-6 sm:p-10 border border-neutral-800">
            {/* 50% Image */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative aspect-[16/10] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
                <img
                  src={FEATURED_ARTICLE.image}
                  alt={FEATURED_ARTICLE.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0B0F19]/90 border border-neutral-700 px-3 py-1 text-xs font-bold text-[#008A4B] uppercase">
                  {FEATURED_ARTICLE.category}
                </div>
              </div>
            </div>

            {/* 50% Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium">
                  <span>{FEATURED_ARTICLE.date}</span>
                  <span>•</span>
                  <span>{FEATURED_ARTICLE.readTime}</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white leading-snug">
                  {FEATURED_ARTICLE.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {FEATURED_ARTICLE.summary}
                </p>
              </div>

              <div className="p-4 bg-neutral-900 border-l-2 border-[#008A4B] space-y-2 text-xs text-neutral-300">
                <div className="font-bold text-white uppercase">CÁC NỘI DUNG KỸ THUẬT CHÍNH:</div>
                <div className="space-y-1.5">
                  {FEATURED_ARTICLE.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#008A4B] font-bold">•</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    const found = ARTICLES_DATABASE.find((a) => a.categoryKey === "technology");
                    if (found) setSelectedArticle(found);
                  }}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#008A4B] hover:bg-[#00703C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <span>Đọc bài viết</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <span className="text-xs text-neutral-500 font-medium hidden sm:inline">
                  {FEATURED_ARTICLE.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. LATEST KNOWLEDGE (GRID & FILTER SYSTEM)                    */}
      {/* ============================================================= */}
      <section
        id="latest-articles"
        className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-neutral-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#008A4B] uppercase tracking-wider">
                CƠ SỞ DỮ LIỆU BÀI VIẾT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                BÀI VIẾT MỚI NHẤT
              </h2>
            </div>

            {/* Sắp xếp: Mới nhất / Phổ biến nhất */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-neutral-500 font-semibold uppercase">Sắp xếp:</span>
              <button
                type="button"
                onClick={() => setSortOrder("latest")}
                className={`px-3 py-1.5 font-bold uppercase tracking-wide transition-colors cursor-pointer ${
                  sortOrder === "latest"
                    ? "bg-[#0B0F19] text-white"
                    : "bg-white text-neutral-600 border border-neutral-200"
                }`}
              >
                Mới nhất
              </button>
              <button
                type="button"
                onClick={() => setSortOrder("popular")}
                className={`px-3 py-1.5 font-bold uppercase tracking-wide transition-colors cursor-pointer ${
                  sortOrder === "popular"
                    ? "bg-[#0B0F19] text-white"
                    : "bg-white text-neutral-600 border border-neutral-200"
                }`}
              >
                Phổ biến nhất
              </button>
            </div>
          </div>

          {/* Bộ lọc danh mục */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: "Tất cả", value: "all" },
              { label: "Kỹ thuật", value: "technical" },
              { label: "Vận hành", value: "operations" },
              { label: "Lắp đặt", value: "installation" },
              { label: "Công nghệ", value: "technology" },
              { label: "Tin tức", value: "news" },
              { label: "Tiêu chuẩn", value: "standards" },
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveFilter(tab.value as KnowledgeFilter)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? "bg-[#008A4B] text-white shadow-xs"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid bài viết 3 cột desktop / 2 cột tablet / 1 cột mobile */}
          {filteredArticles.length === 0 ? (
            <div className="p-12 bg-white border border-neutral-200 text-center space-y-3">
              <AlertTriangle className="w-8 h-8 text-[#F15A24] mx-auto" />
              <div className="text-base font-bold text-[#0B0F19]">
                Không tìm thấy bài viết phù hợp
              </div>
              <p className="text-xs text-neutral-500">
                Thử tìm kiếm với từ khóa khác hoặc chọn lại danh mục "Tất cả".
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-neutral-200 hover:border-[#0B0F19] transition-all flex flex-col justify-between overflow-hidden group shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-neutral-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B0F19] text-white px-2.5 py-1 text-xs font-bold">
                        {article.code}
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 space-y-4">
                      <div className="flex items-center justify-between text-xs font-semibold text-neutral-500">
                        <span className="text-[#008A4B] font-bold uppercase">
                          {article.category}
                        </span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black uppercase text-[#0B0F19] leading-snug group-hover:text-[#008A4B] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-medium">{article.date}</span>

                    <button
                      type="button"
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex items-center gap-1 font-bold text-[#008A4B] hover:text-[#00703C] uppercase tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>Đọc bài viết</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================= */}
      {/* 5. MODAL ĐỌC BÀI VIẾT KỸ THUẬT CHUYÊN SÂU                     */}
      {/* ============================================================= */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border-2 border-[#0B0F19] max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 space-y-8 text-[#0B0F19] shadow-2xl">
            {/* Header Modal */}
            <div className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#008A4B] uppercase">
                    {selectedArticle.category}
                  </span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-xs font-bold text-[#F15A24] uppercase">
                    {selectedArticle.code}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0B0F19] leading-snug">
                  {selectedArticle.title}
                </h3>
                <div className="text-xs font-semibold text-neutral-500 flex items-center gap-3 pt-1">
                  <span>Tác giả: {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-900 transition-colors cursor-pointer flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nội dung bài viết */}
            <div className="space-y-6 text-xs sm:text-sm">
              <div className="relative aspect-[16/9] bg-neutral-100 border border-neutral-200 overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 bg-[#F8FAFC] border-l-2 border-[#008A4B] text-neutral-700 leading-relaxed font-normal">
                <strong>Tóm tắt nội dung:</strong> {selectedArticle.summary}
              </div>

              {selectedArticle.details.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-2.5">
                  <h4 className="text-sm sm:text-base font-bold uppercase text-[#0B0F19]">
                    {sec.sectionTitle}
                  </h4>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-neutral-700 leading-relaxed font-normal">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer Modal */}
            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-neutral-500 font-medium">
                TRUNG TÂM KIẾN THỨC • TD VIỆT NAM
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold uppercase transition-colors cursor-pointer"
                >
                  Đóng bài viết
                </button>
                <a
                  href="/contact"
                  className="px-6 py-2.5 bg-[#008A4B] hover:bg-[#00703C] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Trao đổi cùng tác giả
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* 6. FINAL CTA: TỐI GIẢN & CHUẨN KỸ THUẬT                        */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 p-8 sm:p-12 lg:p-16 border border-neutral-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#008A4B] uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>KẾT NỐI CHUYÊN GIA KỸ THUẬT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                Bạn cần tư vấn chuyên sâu về công nghệ và quy chuẩn?
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                Đội ngũ kỹ sư Hệ thống điện của TD VIỆT NAM sẵn sàng hỗ trợ giải đáp các bài toán
                tính toán sụt áp, bảo vệ rơ-le, đấu nối EVN và phương án lưu trữ BESS cho công trình
                của bạn.
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
                <span>TÀI LIỆU TIÊU CHUẨN KỸ THUẬT</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KnowledgePage;
