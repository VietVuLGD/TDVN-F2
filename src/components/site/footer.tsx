import React from "react";
import { Brand } from "./brand";
import { MapPin, FileText, Mail, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#071426] text-neutral-300 pt-14 pb-8 border-t border-neutral-800 relative overflow-hidden">
      {/* HIỆU ỨNG ÁNH SÁNG NỀN TECH SOLAR */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008A4B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F15A24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TẦNG 1: PRE-FOOTER BANNER & MẠNG XÃ HỘI */}
        <div className="pb-10 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Bạn cần tư vấn giải pháp năng lượng tối ưu?
            </h3>
            <p className="text-sm text-neutral-400">
              Kết nối trực tiếp cùng đội ngũ kỹ sư TD VIỆT NAM để khảo sát, mô phỏng và nhận phương
              án kỹ thuật chuyên sâu.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#008A4B] hover:bg-[#00703C] transition-all duration-150 shadow-lg shadow-[#008A4B]/20 hover:scale-[1.02]"
            >
              <span>TRAO ĐỔI VỚI KỸ SƯ</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* CỤM NỀN TẢNG MẠNG XÃ HỘI: TIKTOK, ZALO, FACEBOOK, YOUTUBE */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
              {/* FACEBOOK */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook TD VIỆT NAM"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#008A4B] hover:bg-[#008A4B] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
                title="Facebook"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* ZALO */}
              <a
                href="https://zalo.me/0941994262"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo TD VIỆT NAM"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#008A4B] hover:bg-[#008A4B] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200 font-bold text-xs"
                title="Zalo Kỹ Thuật"
              >
                <span className="tracking-tighter">Zalo</span>
              </a>

              {/* TIKTOK */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok TD VIỆT NAM"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#008A4B] hover:bg-[#008A4B] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
                title="TikTok"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.95-4.52V8.06a8.28 8.28 0 0 0 4.82 1.54V6.15a4.85 4.85 0 0 1-1-.02z" />
                </svg>
              </a>

              {/* YOUTUBE */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube TD VIỆT NAM"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#008A4B] hover:bg-[#008A4B] text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
                title="YouTube"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* TẦNG 2: THÔNG TIN DOANH NGHIỆP & CÁC CỘT LIÊN KẾT CHÍNH */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 border-b border-white/10">
          {/* CỘT THÔNG TIN CÔNG TY (MỞ RỘNG THÀNH 5 CỘT ĐỂ KHÔNG BỊ TRÀN DÒNG CHỮ) */}
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-4">
            {/* LOGO TRONG SUỐT HIỂN THỊ TRỰC TIẾP */}
            <div className="flex items-center">
              <Brand />
            </div>

            {/* TÊN CÔNG TY ĐƯỢC TỐI ƯU KHÔNG BỊ BẺ DÒNG LỖI */}
            <h3 className="text-[13.5px] sm:text-sm font-bold text-white tracking-tight leading-snug xl:whitespace-nowrap text-balance">
              CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM
            </h3>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-lg">
              Nhà thầu kỹ thuật chuyên sâu về điện mặt trời, hệ thống lưu trữ năng lượng BESS, trạm
              biến áp và hạ tầng lưới điện công nghiệp.
            </p>

            <div className="space-y-3 pt-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Số nhà 168B, Ngõ 565 đường Bát Khối, Phường Long Biên, Thành phố Hà Nội, Việt Nam
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span>
                  Mã số thuế: <strong className="text-white font-semibold">0111188149</strong>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span>
                  Hotline Kỹ thuật:{" "}
                  <a
                    href="tel:0941994262"
                    className="text-white font-bold hover:text-[#10B981] transition-colors"
                  >
                    0941 994 262
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <a
                  href="mailto:nangluongtd@gmail.com"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  nangluongtd@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* CÁC CỘT ĐIỀU HƯỚNG LIÊN KẾT (7 CỘT CÒN LẠI ĐƯỢC CHIA ĐỀU GỌN GÀNG) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-6 lg:gap-6 xl:gap-8">
            {/* CỘT 1: GIẢI PHÁP */}
            <div className="space-y-3">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Giải Pháp</span>
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <a href="/solutions" className="hover:text-white transition-colors">
                    Điện mặt trời mái nhà
                  </a>
                </li>
                <li>
                  <a href="/solutions" className="hover:text-white transition-colors">
                    Lưu trữ năng lượng BESS
                  </a>
                </li>
                <li>
                  <a href="/solutions" className="hover:text-white transition-colors">
                    Điện mặt trời + BESS
                  </a>
                </li>
                <li>
                  <a href="/solutions" className="hover:text-white transition-colors">
                    Điện mặt trời công nghiệp
                  </a>
                </li>
                <li>
                  <a href="/solutions" className="hover:text-white transition-colors">
                    Hệ thống điện & Trạm
                  </a>
                </li>
                <li>
                  <a href="/solutions" className="hover:text-white transition-colors">
                    Microgrid độc lập
                  </a>
                </li>
              </ul>
            </div>

            {/* CỘT 2: SẢN PHẨM */}
            <div className="space-y-3">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Sản Phẩm</span>
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <a href="/products" className="hover:text-white transition-colors">
                    Tấm pin mặt trời
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white transition-colors">
                    Inverter chuỗi & Hybrid
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white transition-colors">
                    Hệ thống BESS
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white transition-colors">
                    Máy biến áp
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white transition-colors">
                    Tủ điện & Switchgear
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white transition-colors">
                    Phụ kiện hệ thống
                  </a>
                </li>
              </ul>
            </div>

            {/* CỘT 3: DỊCH VỤ & DỰ ÁN */}
            <div className="space-y-3">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Dịch Vụ & Dự Án</span>
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Tư vấn & Thiết kế
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    EPC thi công trọn gói
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    O&M vận hành & bảo trì
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-white transition-colors">
                    Tất cả công trình
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-white transition-colors">
                    Dự án công nghiệp
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-white transition-colors">
                    Dự án BESS & Lưu trữ
                  </a>
                </li>
              </ul>
            </div>

            {/* CỘT 4: TÀI NGUYÊN & DOANH NGHIỆP */}
            <div className="space-y-3">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Tài Nguyên</span>
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    Về TD VIỆT NAM
                  </a>
                </li>
                <li>
                  <a href="/about#capabilities" className="hover:text-white transition-colors">
                    Năng lực kỹ thuật
                  </a>
                </li>
                <li>
                  <a href="/downloads" className="hover:text-white transition-colors">
                    Hồ sơ năng lực (PDF)
                  </a>
                </li>
                <li>
                  <a href="/downloads" className="hover:text-white transition-colors">
                    Catalogue thiết bị
                  </a>
                </li>
                <li>
                  <a href="/knowledge" className="hover:text-white transition-colors">
                    Kiến thức kỹ thuật
                  </a>
                </li>
                <li>
                  <a href="/knowledge" className="hover:text-white transition-colors">
                    Tin tức & Quy chuẩn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* TẦNG 3: BẢN QUYỀN VÀ PHÁP LÝ DƯỚI CÙNG */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM. All rights
            reserved.
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href="/privacy" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <span>/</span>
            <a href="/terms" className="hover:text-white transition-colors">
              Điều khoản sử dụng
            </a>
            <span>/</span>
            <a href="/downloads" className="hover:text-white transition-colors">
              Tiêu chuẩn kỹ thuật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
