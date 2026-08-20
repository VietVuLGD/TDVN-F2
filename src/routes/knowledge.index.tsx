import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  ShieldCheck,
  Zap,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Check,
  AlertTriangle,
  Activity,
  ChevronRight,
  User,
  X,
} from "lucide-react";
import { useState, useMemo } from "react";

const title = "Trung Tâm Kiến Thức Kỹ Thuật & Cẩm Nang Điện Mặt Trời | TD VIỆT NAM";
const description =
  "Nền tảng chia sẻ kiến thức chuyên sâu, cẩm nang lắp đặt, hướng dẫn vận hành và cập nhật quy chuẩn kỹ thuật điện mặt trời từ đội ngũ kỹ sư TD VIỆT NAM.";

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
   DỮ LIỆU: BÀI VIẾT CHUYÊN ĐỀ KỸ THUẬT & HƯỚNG DẪN
========================================================================= */
type KnowledgeCategory =
  "all" | "principles" | "operations" | "installation" | "technology" | "regulations";

interface ArticleItem {
  id: string;
  category: "principles" | "operations" | "installation" | "technology" | "regulations";
  categoryLabel: string;
  categoryBadgeColor: string;
  code: string;
  title: string;
  summary: string;
  points: string[];
  readTime: string;
  author: string;
  date: string;
  image: string;
}

const ARTICLES_DATABASE: ArticleItem[] = [
  // 1. KIẾN THỨC KỸ THUẬT & NGUYÊN LÝ
  {
    id: "zero-export-mechanism",
    category: "principles",
    categoryLabel: "Kiến thức kỹ thuật",
    categoryBadgeColor: "text-[#008A4B] bg-[#008A4B]/10",
    code: "TECH-01",
    title: "Điện mặt trời bám tải (Zero Export) hoạt động như thế nào?",
    summary:
      "Phân tích cơ chế làm việc của thiết bị đo đếm Smart Meter / CT cảm biến dòng và nguyên lý tự động tiết giảm công suất phát của Inverter.",
    points: [
      "Cảm biến biến dòng (CT) liên tục đo chiều dòng điện và công suất tiêu thụ tức thời tại tủ tổng.",
      "Bộ điều khiển Inverter nhận tín hiệu qua giao thức RS485 và điều chế công suất phát khớp với phụ tải.",
      "Đảm bảo tuyệt đối 0W điện năng phát ngược ra lưới điện phân phối của EVN.",
    ],
    readTime: "6 phút đọc",
    author: "Ban Kỹ Thuật Hệ Thống Điện",
    date: "16 Tháng 8, 2026",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "pr-performance-ratio",
    category: "principles",
    categoryLabel: "Kiến thức kỹ thuật",
    categoryBadgeColor: "text-[#008A4B] bg-[#008A4B]/10",
    code: "TECH-02",
    title: "Chỉ số PR (Performance Ratio) là gì và cách tính hiệu suất thực tế của hệ thống",
    summary:
      "Công thức tính toán suy hao do nhiệt độ, đổ bóng và bụi bẩn theo tiêu chuẩn quốc tế IEC 61724 để đánh giá chất lượng vận hành của công trình.",
    points: [
      "Công thức tính toán chuẩn: PR = (Sản lượng điện AC thực tế / Sản lượng lý thuyết định mức STC).",
      "Phân tích các thành phần suy hao chính: Hệ số nhiệt độ cell pin, tổn thất cáp DC/AC, bụi bẩn bề mặt.",
      "Hệ thống đạt chuẩn công nghiệp chất lượng cao luôn duy trì chỉ số PR từ 80% đến 84%.",
    ],
    readTime: "8 phút đọc",
    author: "Kỹ sư Mô Phỏng PVsyst",
    date: "12 Tháng 7, 2026",
    image:
      "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "dc-ac-oversizing",
    category: "principles",
    categoryLabel: "Kiến thức kỹ thuật",
    categoryBadgeColor: "text-[#008A4B] bg-[#008A4B]/10",
    code: "TECH-03",
    title: "Hiểu đúng về hệ số quá công suất DC/AC (DC/AC Oversizing Ratio)",
    summary:
      "Tại sao nên lắp đặt tổng công suất tấm pin DC lớn hơn công suất định mức của Inverter từ 120% đến 140% để tối ưu hóa chi phí đầu tư CAPEX.",
    points: [
      "Bù đắp hao hụt bức xạ mặt trời vào sáng sớm, chiều muộn và những ngày thời tiết nhiều mây.",
      "Tối đa hóa thời gian Inverter hoạt động ở vùng hiệu suất chuyển đổi cao nhất gần công suất danh định.",
      "Giảm thiểu chi phí đầu tư biến tần mà vẫn thu được tổng sản lượng điện năng (kWh) cao nhất trong năm.",
    ],
    readTime: "7 phút đọc",
    author: "Ban Kỹ Thuật Hệ Thống Điện",
    date: "28 Tháng 6, 2026",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80",
  },

  // 2. HƯỚNG DẪN VẬN HÀNH & XỬ LÝ SỰ CỐ
  {
    id: "safe-switching-procedure",
    category: "operations",
    categoryLabel: "Hướng dẫn vận hành",
    categoryBadgeColor: "text-[#F15A24] bg-[#F15A24]/10",
    code: "OP-01",
    title: "Quy trình đóng/cắt an toàn cho hệ thống điện mặt trời",
    summary:
      "Trình tự thao tác chuẩn đối với Aptomat AC, cầu dao cách ly DC và công tắc Inverter để triệt tiêu nguy cơ phát sinh hồ quang điện DC nguy hiểm.",
    points: [
      "Trình tự tắt hệ thống: Ngắt Aptomat AC tủ phân phối → Ngắt công tắc DC Inverter → Ngắt cầu dao DC tủ chuỗi.",
      "Trình tự bật hệ thống: Đóng cầu dao DC tủ chuỗi → Bật công tắc DC Inverter → Đóng Aptomat AC tủ phân phối.",
      "Tuyệt đối không rút jack kết nối MC4 khi hệ thống đang có dòng tải chạy qua.",
    ],
    readTime: "5 phút đọc",
    author: "Kỹ sư An Toàn & Vận Hành",
    date: "05 Tháng 7, 2026",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "app-monitoring-setup",
    category: "operations",
    categoryLabel: "Hướng dẫn vận hành",
    categoryBadgeColor: "text-[#F15A24] bg-[#F15A24]/10",
    code: "OP-02",
    title: "Hướng dẫn cài đặt & Giám sát hệ thống qua ứng dụng điện thoại",
    summary:
      "Các bước kết nối Wifi/Datalogger, cấu hình tài khoản chủ đầu tư và thiết lập nhận cảnh báo sự cố kỹ thuật tự động 24/7.",
    points: [
      "Quét mã QR datalogger và cấu hình mạng Wifi băng tần 2.4GHz cho biến tần.",
      "Tạo tài khoản quản trị trạm điện và phân quyền theo dõi cho các thành viên trong gia đình/nhà máy.",
      "Kích hoạt tính năng Push Notification để nhận thông báo tức thời khi điện áp bất thường hoặc mất mạng.",
    ],
    readTime: "6 phút đọc",
    author: "Kỹ sư Số Hóa SCADA",
    date: "20 Tháng 5, 2026",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "inverter-error-troubleshooting",
    category: "operations",
    categoryLabel: "Hướng dẫn vận hành",
    categoryBadgeColor: "text-[#F15A24] bg-[#F15A24]/10",
    code: "OP-03",
    title: "Bảng tra cứu & Xử lý nhanh các mã lỗi Inverter phổ biến",
    summary:
      "Hướng dẫn cách kiểm tra và khắc phục khi biến tần báo lỗi điện áp thấp (Low PV Voltage), lỗi cách điện (Isolation Fault) hoặc mất kết nối lưới (Grid Fault).",
    points: [
      "Lỗi Low PV Voltage: Kiểm tra điện áp hở mạch Voc của chuỗi tấm pin và công tắc DC cách ly.",
      "Lỗi Isolation Fault: Đo kiểm điện trở cách điện Megger giữa cực (+)/(-) với vỏ tiếp địa vào buổi sáng ẩm ướt.",
      "Lỗi Grid Fault / Grid Absent: Đo kiểm điện áp và tần số lưới tại ngõ vào AC Inverter xem có nằm trong dải cho phép.",
    ],
    readTime: "10 phút đọc",
    author: "Đội Phản Ứng Kỹ Thuật O&M",
    date: "14 Tháng 4, 2026",
    image:
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
  },

  // 3. HƯỚNG DẪN KỸ THUẬT LẮP ĐẶT
  {
    id: "mc4-crimping-cabling",
    category: "installation",
    categoryLabel: "Hướng dẫn lắp đặt",
    categoryBadgeColor: "text-[#0B0F19] bg-neutral-100",
    code: "INST-01",
    title: "Kỹ thuật bấm đầu nối MC4 và luồn cáp DC 1500V chuẩn an toàn",
    summary:
      "Cách lựa chọn kìm bấm cosse chuyên dụng, quy chuẩn siết đầu jack ren kín nước IP68 và sử dụng ống ruột gà bọc cáp chống tia cực tím UV ngoài trời.",
    points: [
      "Sử dụng kìm bấm cosse chuẩn cơ cấu cóc khóa (Ratcheting) đúng khuôn tiết diện 4mm² / 6mm².",
      "Dùng cờ-lê chuyên dụng siết ren đuôi MC4 đúng lực mô-men xoắn để ron cao su bám chặt khít tuyệt đối.",
      "Luồn toàn bộ cáp DC lộ thiên trong ống ruột gà bọc nhựa PVC lõi thép hoặc máng cáp mạ kẽm.",
    ],
    readTime: "7 phút đọc",
    author: "Chỉ Huy Trưởng Thi Công EPC",
    date: "18 Tháng 3, 2026",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "grounding-earthing-standards",
    category: "installation",
    categoryLabel: "Hướng dẫn lắp đặt",
    categoryBadgeColor: "text-[#0B0F19] bg-neutral-100",
    code: "INST-02",
    title: "Tiêu chuẩn thi công hệ thống tiếp địa chống sét cho giàn pin áp mái",
    summary:
      "Kỹ thuật liên kết đẳng thế khung nhôm (Grounding Lug) và phương pháp đo điện trở đất đảm bảo trị số R < 4.0 Ω hoặc R < 10.0 Ω.",
    points: [
      "Sử dụng kẹp tiếp địa có răng cưa (Grounding Clip) phá vỡ lớp màng Anodized cách điện của khung nhôm tấm pin.",
      "Liên kết toàn bộ chuỗi thanh ray nhôm bằng cáp đồng trần hoặc bọc tiếp địa M16/M25 về bãi cọc tiếp địa.",
      "Đo kiểm nghiệm thu bằng đồng hồ đo điện trở đất 3 cực chuyên dụng trước khi bàn giao.",
    ],
    readTime: "8 phút đọc",
    author: "Kỹ sư Thí Nghiệm Đo Kiểm",
    date: "02 Tháng 2, 2026",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "roof-waterproofing-solutions",
    category: "installation",
    categoryLabel: "Hướng dẫn lắp đặt",
    categoryBadgeColor: "text-[#0B0F19] bg-neutral-100",
    code: "INST-03",
    title: "Giải pháp chống thấm dột mái tôn và mái bê tông khi lắp đặt giàn khung",
    summary:
      "Quy cách sử dụng bulong Inox 304, ke Z, chân L có đệm cao su EPDM chống lão hóa nhiệt và keo trám chuyên dụng chịu thời tiết.",
    points: [
      "Mái tôn: Bắt chân L trực tiếp vào xà gồ bằng bulong tự khoan đệm gioăng cao su EPDM dày chống tia UV.",
      "Mái tôn Seamlock/Kliplok: Sử dụng kẹp chuyên dụng siết chặt vào mép gờ tôn, hoàn toàn không đục lỗ tôn mái.",
      "Mái bê tông: Sử dụng chân đế đúc bê tông trọng lực hoặc tắc kê nở Inox 304 quét 3 lớp màng chống thấm polyurethane.",
    ],
    readTime: "6 phút đọc",
    author: "Kỹ sư Kết Cấu & Xây Dựng",
    date: "15 Tháng 1, 2026",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
  },

  // 4. PHÂN TÍCH & ĐÁNH GIÁ CÔNG NGHỆ
  {
    id: "topcon-vs-perc-comparison",
    category: "technology",
    categoryLabel: "Phân tích công nghệ",
    categoryBadgeColor: "text-[#008A4B] bg-[#008A4B]/10",
    code: "TECH-REV-01",
    title: "So sánh chi tiết công nghệ Pin mặt trời TOPCon (N-type) và PERC (P-type)",
    summary:
      "Phân tích độ suy hao năm đầu (LID), hệ số suy hao nhiệt độ và hiệu suất chuyển đổi thực tế trong điều kiện khí hậu nóng ẩm nhiệt đới tại Việt Nam.",
    points: [
      "Suy hao năm đầu: N-type TOPCon chỉ suy giảm < 1.0% (so với PERC P-type thường suy giảm 2.0% – 2.5%).",
      "Hệ số nhiệt độ: TOPCon đạt -0.30%/°C giúp sản lượng điện phát ra vượt trội khi bề mặt tấm pin nóng lên 60°C – 70°C.",
      "Hệ số phát điện mặt sau (Bifaciality): TOPCon đạt đến 80% – 85% so với mức 70% của công nghệ PERC cũ.",
    ],
    readTime: "9 phút đọc",
    author: "Kỹ sư Nghiên Cứu Thiết Bị",
    date: "25 Tháng 5, 2026",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "string-vs-hybrid-inverter",
    category: "technology",
    categoryLabel: "Phân tích công nghệ",
    categoryBadgeColor: "text-[#008A4B] bg-[#008A4B]/10",
    code: "TECH-REV-02",
    title: "Biến tần Chuỗi (String Inverter) vs Biến tần Hybrid: Nên chọn loại nào?",
    summary:
      "Khi nào nên đầu tư hệ thống hòa lưới bám tải đơn thuần và khi nào cần trang bị hệ thống lưu trữ pin Lithium ESS để tối ưu hóa bài toán kinh tế.",
    points: [
      "Inverter Chuỗi On-grid: Tối ưu cho nhà xưởng hoạt động 100% ban ngày, chi phí đầu tư thấp nhất, hoàn vốn nhanh dưới 4 năm.",
      "Inverter Hybrid ESS: Cần thiết cho biệt thự, văn phòng, phòng khám y tế cần nguồn điện dự phòng UPS liên tục và dùng nhiều điện ban đêm.",
      "Khả năng mở rộng: Biến tần Hybrid cho phép nâng cấp lắp pin lưu trữ theo từng giai đoạn mà không cần thay đổi thiết bị trung tâm.",
    ],
    readTime: "7 phút đọc",
    author: "Kỹ sư Giải Pháp Hệ Thống",
    date: "10 Tháng 4, 2026",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "lifepo4-battery-safety-lifespan",
    category: "technology",
    categoryLabel: "Phân tích công nghệ",
    categoryBadgeColor: "text-[#008A4B] bg-[#008A4B]/10",
    code: "TECH-REV-03",
    title: "Đánh giá tuổi thọ và độ an toàn của Pin lưu trữ Lithium LiFePO4 (LFP)",
    summary:
      "Tại sao cấu trúc hóa học LFP lại trở thành tiêu chuẩn vàng an toàn cho hệ thống lưu trữ năng lượng điện mặt trời dân dụng và công nghiệp.",
    points: [
      "Độ bền chu kỳ cực cao: Đạt trên 6.000 chu kỳ sạc/xả ở độ sâu xả 80% DoD, tương đương thời gian sử dụng thực tế 15 năm.",
      "Khả năng ổn định nhiệt: LFP không bị hiện tượng thoát nhiệt phân rã (Thermal Runaway) như các hệ pin NMC/NCA trong điều kiện nhiệt độ cao.",
      "Thân thiện môi trường: Không chứa các kim loại nặng độc hại như Coban (Co) hoặc Niken (Ni), dễ dàng tái chế.",
    ],
    readTime: "8 phút đọc",
    author: "Kỹ sư Trưởng Hệ Thống BESS",
    date: "18 Tháng 3, 2026",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
  },

  // 5. TIN TỨC & QUY CHUẨN KỸ THUẬT
  {
    id: "self-consumption-policy-update",
    category: "regulations",
    categoryLabel: "Tin tức & Quy chuẩn",
    categoryBadgeColor: "text-[#F15A24] bg-[#F15A24]/10",
    code: "REG-01",
    title: "Tổng hợp quy định mới nhất về phát triển điện mặt trời mái nhà tự sản tự tiêu",
    summary:
      "Cập nhật các chính sách hiện hành của Bộ Công Thương và EVN về thỏa thuận đấu nối, cấp phép công suất và cơ chế tự dùng.",
    points: [
      "Làm rõ quy định thỏa thuận kỹ thuật đấu nối đối với hệ thống bám tải Zero-Export.",
      "Hồ sơ đăng ký công suất tự sản tự tiêu cho hộ gia đình và nhà máy sản xuất trong KCN.",
      "Các điểm cần lưu ý để hồ sơ nghiệm thu kỹ thuật và đấu nối lưới điện diễn ra thuận lợi.",
    ],
    readTime: "8 phút đọc",
    author: "Ban Pháp Lý & Đấu Nối Lưới",
    date: "08 Tháng 8, 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "fire-safety-pccc-standards",
    category: "regulations",
    categoryLabel: "Tin tức & Quy chuẩn",
    categoryBadgeColor: "text-[#F15A24] bg-[#F15A24]/10",
    code: "REG-02",
    title: "Tiêu chuẩn an toàn PCCC cho hệ thống điện mặt trời trên mái nhà xưởng",
    summary:
      "Quy định khoảng cách lối đi thoát nạn trên mái, bố trí lối tiếp cận cho lực lượng cứu hỏa và giải pháp ngắt khẩn cấp Rapid Shutdown.",
    points: [
      "Khoảng cách hành lang an toàn giữa các mảng pin tối thiểu 1.0m – 1.5m phục vụ kiểm tra và thoát hiểm.",
      "Bố trí công tắc ngắt điện khẩn cấp khống chế điện áp DC dưới 80V trong vòng 30 giây khi có sự cố cháy nổ.",
      "Quy chuẩn về ống luồn dây chống cháy, van xả áp và hệ thống tiếp địa tủ điện trung thế theo TCVN.",
    ],
    readTime: "9 phút đọc",
    author: "Kỹ sư An Toàn HSE & PCCC",
    date: "22 Tháng 7, 2026",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "monthly-energy-newsletter",
    category: "regulations",
    categoryLabel: "Tin tức & Quy chuẩn",
    categoryBadgeColor: "text-[#F15A24] bg-[#F15A24]/10",
    code: "NEWS-01",
    title: "Bản tin kỹ thuật năng lượng tái tạo hàng tháng: Xu hướng công nghệ & Chuỗi cung ứng",
    summary:
      "Điểm tin thị trường chuỗi cung ứng vật tư, xu hướng giá tấm quang năng và những bước tiến mới trong công nghệ biến tần lưu trữ.",
    points: [
      "Xu hướng chuyển dịch 100% sang tấm pin công nghệ N-Type TOPCon và HJT hiệu suất trên 23%.",
      "Đánh giá biểu đồ giá vật tư bán dẫn Silicon và cell pin Lithium LFP trên thị trường quốc tế.",
      "Ứng dụng thuật toán AI trong phần mềm giám sát dự báo sản lượng bức xạ mặt trời thời gian thực.",
    ],
    readTime: "6 phút đọc",
    author: "Ban Truyền Thông Kỹ Thuật",
    date: "01 Tháng 8, 2026",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "commissioning-field-log",
    category: "regulations",
    categoryLabel: "Tin tức & Quy chuẩn",
    categoryBadgeColor: "text-[#F15A24] bg-[#F15A24]/10",
    code: "NEWS-02",
    title: "Nhật ký bàn giao công trình & Đo kiểm thực tế tại các dự án TD VIỆT NAM",
    summary:
      "Hình ảnh và dữ liệu ghi lại quy trình đo kiểm chất lượng, quét nhiệt hồng ngoại trước khi đóng điện hòa lưới tại các dự án thực tế.",
    points: [
      "Quy trình đo kiểm Megger điện trở cách điện từng string DC và kiểm tra tiếp địa toàn hệ thống.",
      "Sử dụng Flycam gắn camera nhiệt hồng ngoại quét toàn bộ bề mặt mảng pin sau 4 giờ phát điện công suất đỉnh.",
      "Biên bản nghiệm thu kỹ thuật và bàn giao tài khoản giám sát Cloud cho chủ đầu tư nhà máy.",
    ],
    readTime: "7 phút đọc",
    author: "Khối Dự Án EPC Hiện Trường",
    date: "26 Tháng 6, 2026",
    image:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80",
  },
];

export function KnowledgePage() {
  const [activeCategory, setActiveCategory] = useState<KnowledgeCategory>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArticleModal, setSelectedArticleModal] = useState<ArticleItem | null>(null);

  // Logic lọc bài viết theo danh mục và từ khóa tìm kiếm
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATABASE.filter((item) => {
      // Lọc theo danh mục tab
      const matchCategory = activeCategory === "all" || item.category === activeCategory;

      // Lọc theo từ khóa tìm kiếm (tiêu đề, tóm tắt, tag, code)
      const matchSearch =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full bg-white text-[#0B0F19] font-sans antialiased selection:bg-[#008A4B] selection:text-white">
      {/* ============================================================= */}
      {/* 1. HERO SECTION & THANH TÌM KIẾM NHANH                        */}
      {/* ============================================================= */}
      <section className="relative w-full bg-white border-b border-neutral-200 pt-10 pb-14 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb Tối Giản */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-400">
            <a href="/" className="hover:text-[#0B0F19] transition-colors">
              Trang chủ
            </a>
            <span>/</span>
            <span className="text-[#008A4B]">Kiến thức</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border-l-2 border-[#008A4B] text-[#008A4B] text-xs font-mono font-bold uppercase tracking-widest">
                <span>ENGINEERING KNOWLEDGE HUB</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#0B0F19] tracking-tight leading-[1.08]">
                Trung Tâm Kiến Thức Kỹ Thuật &amp; Cẩm Nang Điện Mặt Trời
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl">
                Nền tảng chia sẻ kiến thức chuyên sâu, cẩm nang lắp đặt, hướng dẫn vận hành và cập
                nhật quy chuẩn kỹ thuật điện mặt trời từ đội ngũ kỹ sư TD VIỆT NAM.
              </p>

              {/* Thanh tìm kiếm nhanh thời gian thực */}
              <div className="pt-2 max-w-xl">
                <div className="relative flex items-center border-2 border-[#0B0F19] bg-white shadow-xs focus-within:border-[#008A4B] transition-colors">
                  <Search className="w-5 h-5 text-neutral-400 ml-4 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Nhập từ khóa tìm kiếm: Mã lỗi Inverter, Tiêu chuẩn PCCC, Cài đặt App..."
                    className="w-full px-3.5 py-3.5 text-xs sm:text-sm font-semibold text-[#0B0F19] placeholder:text-neutral-400 placeholder:font-normal focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="p-2 text-neutral-400 hover:text-neutral-700 mr-2 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 pt-2 px-1">
                  <span>GỢI Ý TÌM KIẾM:</span>
                  <button
                    type="button"
                    onClick={() => setSearchQuery("Zero Export")}
                    className="underline hover:text-[#008A4B] cursor-pointer"
                  >
                    Zero Export
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => setSearchQuery("Isolation Fault")}
                    className="underline hover:text-[#008A4B] cursor-pointer"
                  >
                    Mã lỗi Inverter
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => setSearchQuery("TOPCon")}
                    className="underline hover:text-[#008A4B] cursor-pointer"
                  >
                    TOPCon
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => setSearchQuery("PCCC")}
                    className="underline hover:text-[#008A4B] cursor-pointer"
                  >
                    Tiêu chuẩn PCCC
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Metrics & Technical Status */}
            <div className="lg:col-span-4 bg-[#F8FAFC] border border-neutral-200 p-6 space-y-4 font-mono text-xs">
              <div className="font-bold text-[#0B0F19] uppercase tracking-wider border-b border-neutral-200 pb-3 flex items-center justify-between">
                <span>CHUYÊN ĐỀ KỸ SƯ</span>
                <span className="text-[#008A4B]">VERIFIED</span>
              </div>

              <div className="space-y-3 text-neutral-600">
                <div className="flex items-center justify-between">
                  <span>Tổng số chuyên đề:</span>
                  <span className="font-bold text-[#0B0F19]">
                    {ARTICLES_DATABASE.length} Bài viết
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Quy chuẩn đối chiếu:</span>
                  <span className="font-bold text-[#0B0F19]">IEC 61724 / TCVN</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Phân tích công nghệ:</span>
                  <span className="font-bold text-[#008A4B]">TOPCon / ESS / AFCI</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Hỗ trợ kỹ thuật trực tiếp:</span>
                  <span className="font-bold text-[#F15A24]">24/7 Hotline</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-200 text-[11px] text-neutral-400">
                TÀI LIỆU BIÊN SOẠN BỞI KỸ SƯ TD VIỆT NAM
              </div>
            </div>
          </div>

          {/* Thanh lọc danh mục Tabs (Đồng bộ 100% Header Menu) */}
          <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              Tất cả bài viết
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("principles")}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "principles"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              Kiến thức kỹ thuật
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("operations")}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "operations"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              Hướng dẫn vận hành
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("installation")}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "installation"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              Hướng dẫn lắp đặt
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("technology")}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "technology"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              Phân tích công nghệ
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("regulations")}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === "regulations"
                  ? "bg-[#0B0F19] text-white shadow-xs"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              Tin tức &amp; Quy chuẩn
            </button>

            <a
              href="#featured-engineering-view"
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#008A4B] border border-[#008A4B] hover:bg-[#008A4B] hover:text-white transition-all ml-auto inline-flex items-center gap-1.5"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>TIÊU ĐIỂM: GÓC NHÌN KỸ SƯ</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* KHỐI 1: CHUYÊN ĐỀ KỸ THUẬT (ENGINEERING ARTICLES DATABASE)     */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-widest">
                TECHNICAL ARTICLES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                DANH MỤC CHUYÊN ĐỀ KỸ THUẬT CHUYÊN SÂU
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono uppercase">
              HIỂN THỊ {filteredArticles.length} BÀI PHÂN TÍCH
            </p>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="p-12 bg-white border border-neutral-200 text-center space-y-3">
              <AlertTriangle className="w-8 h-8 text-[#F15A24] mx-auto" />
              <div className="text-base font-bold text-[#0B0F19]">
                Không tìm thấy bài viết phù hợp
              </div>
              <p className="text-xs text-neutral-500">
                Thử tìm kiếm với từ khóa khác như "Zero Export", "Inverter", "TOPCon", "PCCC" hoặc
                chọn lại danh mục "Tất cả bài viết".
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-neutral-200 hover:border-[#0B0F19] transition-all flex flex-col justify-between overflow-hidden group shadow-xs hover:shadow-md"
                >
                  <div className="space-y-4">
                    {/* Hình ảnh bài viết */}
                    <div className="relative aspect-[16/10] bg-neutral-100 border-b border-neutral-100 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B0F19] text-white px-2.5 py-1 text-[10px] font-mono font-bold">
                        {article.code}
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 space-y-4">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 ${article.categoryBadgeColor}`}
                        >
                          {article.categoryLabel}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-400">
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black uppercase text-[#0B0F19] leading-snug group-hover:text-[#008A4B] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {article.summary}
                      </p>

                      {/* Các điểm kỹ thuật chính */}
                      <div className="pt-3 border-t border-neutral-100 space-y-2">
                        <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                          ĐIỂM KỸ THUẬT CỐT LÕI:
                        </div>
                        {article.points.map((pt, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-start gap-2 text-xs text-neutral-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#008A4B] mt-0.5 flex-shrink-0" />
                            <span className="leading-snug">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-neutral-400">{article.date}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedArticleModal(article)}
                      className="inline-flex items-center gap-1 font-bold text-[#008A4B] hover:text-[#00703C] uppercase tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>Xem chi tiết</span>
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
      {/* KHỐI 2: TIÊU ĐIỂM — GÓC NHÌN KỸ SƯ                            */}
      {/* ============================================================= */}
      <section
        id="featured-engineering-view"
        className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#008A4B]/20 border-l-2 border-[#008A4B] text-[#008A4B] text-xs font-mono font-bold uppercase tracking-widest">
              <span>FEATURED ENGINEERING PERSPECTIVE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              TIÊU ĐIỂM — GÓC NHÌN KỸ SƯ
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Kiến thức chuyên sâu và giải pháp kỹ thuật thực tế được đúc kết trực tiếp từ các dự án
              điện mặt trời công nghiệp áp mái nhà xưởng.
            </p>
          </div>

          {/* Khối chuyên sâu đóng khung viền sắc nét */}
          <div className="border-2 border-neutral-700 bg-neutral-950 p-6 sm:p-10 lg:p-12 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-2.5 py-1 bg-[#F15A24] text-white font-bold uppercase">
                    CHUYÊN ĐỀ ĐẶC BIỆT
                  </span>
                  <span className="text-neutral-400">CHẨN ĐOÁN &amp; AN TOÀN PCCC</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white leading-snug">
                  Giải pháp kiểm soát nhiệt độ &amp; Điểm nóng (Hot-spot) trên hệ thống áp mái nhà
                  xưởng
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Hiện tượng điểm nóng không chỉ làm sụt giảm sản lượng phát điện mà còn tiềm ẩn
                  nguy cơ phát hỏa trực tiếp trên mái tôn nhà xưởng. Bài viết trình bày kỹ thuật đo
                  kiểm bằng camera nhiệt hồng ngoại và phương án thiết kế chuỗi string để hạn chế
                  tối đa bóng che cục bộ.
                </p>

                <div className="p-4 bg-neutral-900 border-l-2 border-[#008A4B] text-xs text-neutral-300 space-y-2">
                  <div className="font-bold text-white uppercase">
                    CÁC GIẢI PHÁP KỸ THUẬT TRỌNG TÂM:
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <span className="text-[#008A4B] font-bold">•</span>
                      <span>
                        Quy chuẩn quét ảnh nhiệt định kỳ bằng Drone Thermography phát hiện sớm diode
                        bypass bị đánh thủng.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#008A4B] font-bold">•</span>
                      <span>
                        Bố trí chuỗi String song song với hướng đổ bóng của ống khói và nóc gió nhà
                        xưởng.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#008A4B] font-bold">•</span>
                      <span>
                        Lựa chọn tấm pin có tích hợp Diode Schottky chịu nhiệt độ cao và suy giảm
                        điện áp thuận thấp.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#008A4B]">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase">
                        KỸ SƯ TRƯỞNG HỆ THỐNG ĐIỆN
                      </div>
                      <div className="text-[11px] font-mono text-[#008A4B]">
                        CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM
                      </div>
                    </div>
                  </div>

                  <a
                    href="#contact-consultation"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#008A4B] hover:bg-[#00703C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>TRAO ĐỔI CÙNG KỸ SƯ TRƯỞNG</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hình ảnh minh họa nhiệt & drone */}
              <div className="lg:col-span-5 space-y-3">
                <div className="relative aspect-[4/3] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80"
                    alt="Đo kiểm camera nhiệt hồng ngoại phát hiện hot-spot TD VIỆT NAM"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#0B0F19]/90 border border-neutral-700 px-2.5 py-1 text-[10px] font-mono text-[#F15A24] font-bold">
                    THERMAL SCANNING
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3 text-[11px] font-mono text-neutral-300">
                    Phát hiện sai lệch nhiệt độ cell pin ΔT &gt; 15°C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* KHỐI 3: BÀI BÁO & THÔNG TIN (NEWS & REGULATIONS)              */}
      {/* ============================================================= */}
      <section className="w-full py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#F15A24] uppercase tracking-widest">
                REGULATIONS &amp; INDUSTRY UPDATES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0F19] tracking-tight">
                TIÊU CHUẨN, QUY CHUẨN &amp; TIN TỨC DOANH NGHIỆP
              </h2>
            </div>
            <p className="text-xs text-neutral-500 font-mono uppercase max-w-md">
              CẬP NHẬT CÁC QUY ĐỊNH BỘ CÔNG THƯƠNG, EVN VÀ TIÊU CHUẨN PCCC MỚI NHẤT
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cột 1: Tiêu Chuẩn & Quy Chuẩn Kỹ Thuật */}
            <div className="border border-neutral-200 p-6 sm:p-8 space-y-6 bg-[#F8FAFC]">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#008A4B]" />
                  <h3 className="text-base font-black uppercase text-[#0B0F19]">
                    1. Tiêu Chuẩn &amp; Quy Chuẩn Kỹ Thuật
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                  EVN / BCT / PCCC
                </span>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#008A4B]">
                    QUY ĐỊNH ĐẤU NỐI TỰ DÙNG
                  </div>
                  <h4 className="text-sm font-bold text-[#0B0F19] uppercase">
                    Quy định mới nhất về phát triển điện mặt trời mái nhà tự sản tự tiêu
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    Tổng hợp chính sách hiện hành của Bộ Công Thương và Tập đoàn Điện lực Việt Nam
                    (EVN) về điều kiện lắp đặt bám tải Zero Export và hồ sơ đăng ký công suất.
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-neutral-200">
                  <div className="text-xs font-mono font-bold text-[#F15A24]">
                    AN TOÀN PHÒNG CHÁY CHỮA CHÁY
                  </div>
                  <h4 className="text-sm font-bold text-[#0B0F19] uppercase">
                    Tiêu chuẩn an toàn PCCC cho hệ thống điện mặt trời trên mái nhà xưởng
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    Quy định khoảng cách lối đi thoát nạn trên mái, bố trí lối tiếp cận cho lực
                    lượng cứu hỏa và tích hợp hệ thống ngắt nhanh khẩn cấp Rapid Shutdown theo tiêu
                    chuẩn.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-200">
                <a
                  href="/downloads"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008A4B] hover:text-[#00703C] uppercase tracking-wider"
                >
                  <span>TẢI TÀI LIỆU TIÊU CHUẨN KỸ THUẬT (PDF)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Cột 2: Tin Tức & Hoạt Động Doanh Nghiệp */}
            <div className="border border-neutral-200 p-6 sm:p-8 space-y-6 bg-[#F8FAFC]">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#F15A24]" />
                  <h3 className="text-base font-black uppercase text-[#0B0F19]">
                    2. Tin Tức &amp; Hoạt Động Doanh Nghiệp
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                  EPC ACTIVITY
                </span>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#F15A24]">
                    BẢN TIN THỊ TRƯỜNG
                  </div>
                  <h4 className="text-sm font-bold text-[#0B0F19] uppercase">
                    Bản tin kỹ thuật năng lượng tái tạo hàng tháng: Công nghệ &amp; Chuỗi cung ứng
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    Điểm tin thị trường chuỗi cung ứng vật tư, xu hướng chuyển dịch công nghệ tế bào
                    quang điện N-Type TOPCon và pin lưu trữ Lithium BESS.
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-neutral-200">
                  <div className="text-xs font-mono font-bold text-[#008A4B]">
                    NHẬT KÝ HIỆN TRƯỜNG
                  </div>
                  <h4 className="text-sm font-bold text-[#0B0F19] uppercase">
                    Nhật ký bàn giao công trình &amp; Đo kiểm thực tế tại các dự án TD VIỆT NAM
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    Ghi lại quy trình kiểm tra chất lượng, đo kiểm Megger điện trở cách điện và kiểm
                    tra I-V Curve trước khi đóng điện nghiệm thu công trình.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-200">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008A4B] hover:text-[#00703C] uppercase tracking-wider"
                >
                  <span>XEM HỒ SƠ DỰ ÁN THỰC TẾ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* MODAL XEM CHI TIẾT BÀI VIẾT                                   */}
      {/* ============================================================= */}
      {selectedArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border-2 border-[#0B0F19] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-[#0B0F19] shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <span
                className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 ${selectedArticleModal.categoryBadgeColor}`}
              >
                {selectedArticleModal.categoryLabel} • {selectedArticleModal.code}
              </span>
              <button
                type="button"
                onClick={() => setSelectedArticleModal(null)}
                className="text-neutral-400 hover:text-neutral-900 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#0B0F19] leading-snug">
                {selectedArticleModal.title}
              </h3>

              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                <span>{selectedArticleModal.author}</span>
                <span>•</span>
                <span>{selectedArticleModal.date}</span>
                <span>•</span>
                <span>{selectedArticleModal.readTime}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal bg-neutral-50 p-4 border border-neutral-200">
              {selectedArticleModal.summary}
            </p>

            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-[#008A4B] uppercase tracking-wider">
                CÁC NỘI DUNG PHÂN TÍCH KỸ THUẬT:
              </div>
              <div className="space-y-2.5">
                {selectedArticleModal.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-800">
                    <Check className="w-4 h-4 text-[#008A4B] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] font-mono text-neutral-400">
                CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedArticleModal(null)}
                  className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold uppercase transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                <a
                  href="/contact"
                  className="px-4 py-2 bg-[#008A4B] hover:bg-[#00703C] text-white text-xs font-bold uppercase transition-colors"
                >
                  Liên hệ kỹ sư tư vấn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* FINAL CTA: TIẾP NHẬN TƯ VẤN KỸ THUẬT                         */}
      {/* ============================================================= */}
      <section id="contact-consultation" className="w-full py-16 sm:py-24 bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 p-8 sm:p-12 lg:p-16 border border-neutral-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#008A4B] uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                <span>ENGINEERING INQUIRY &amp; CONSULTATION</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                Bạn cần giải đáp chuyên sâu về tiêu chuẩn kỹ thuật?
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                Đội ngũ kỹ sư Hệ thống điện của TD VIỆT NAM sẵn sàng hỗ trợ giải đáp mọi thắc mắc về
                mã lỗi thiết bị, thủ tục đấu nối EVN và phương án kỹ thuật phù hợp cho công trình.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-neutral-300 pt-2">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#008A4B] hover:bg-[#00703C] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#008A4B]/20 hover:scale-[1.02]"
              >
                <span>TRAO ĐỔI VỚI KỸ SƯ</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/downloads"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider border border-neutral-700 transition-colors"
              >
                <span>TÀI LIỆU DỰ ÁN (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KnowledgePage;
