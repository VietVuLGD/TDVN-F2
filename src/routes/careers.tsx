import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Award,
  TrendingUp,
  ShieldCheck,
  Send,
  CheckCircle2,
  FileText,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import React, { useState } from "react";

import { Reveal, Stagger, StaggerItem } from "@/components/site/motion";
import { PageHero, Section, SectionHeading } from "@/components/site/ui";
import { careers, company } from "@/data/site";

const title = "Tuyển dụng Kỹ sư & Chuyên gia Năng lượng | TD VIỆT NAM";
const description =
  "Cơ hội nghề nghiệp và phát triển năng lực chuyên môn trong lĩnh vực Tổng thầu EPC Điện mặt trời, Pin lưu trữ BESS và Hệ thống điện công nghiệp tại TD VIỆT NAM.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/careers" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const perks = [
  {
    icon: DollarSign,
    title: "Thu nhập & Thưởng Dự Án",
    text: "Lương cứng cạnh tranh theo đúng năng lực, thưởng phần trăm tiến độ nghiệm thu dự án EPC và thưởng định kỳ năm.",
  },
  {
    icon: GraduationCap,
    title: "Đào Tạo & Chứng Chỉ",
    text: "Được hỗ trợ chi phí tham gia các khóa đào tạo nâng cao chuyên sâu, thi chứng chỉ hành nghề và tiêu chuẩn quốc tế.",
  },
  {
    icon: Award,
    title: "Công Trình Thực Chiến",
    text: "Trực tiếp tham gia thiết kế, giám sát và đóng điện các công trình điện mặt trời mái nhà xưởng, trạm biến áp và BESS quy mô lớn.",
  },
  {
    icon: TrendingUp,
    title: "Lộ Trình Thăng Tiến",
    text: "Đánh giá minh bạch định kỳ, lộ trình phát triển rõ ràng từ Kỹ sư dự án lên Chỉ huy trưởng / Trưởng phòng kỹ thuật.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Tiếp Nhận & Sàng Lọc",
    text: "Đội ngũ nhân sự và ban kỹ thuật tiếp nhận CV, đánh giá độ phù hợp với tiêu chuẩn dự án.",
  },
  {
    step: "02",
    title: "Phỏng Vấn Chuyên Môn",
    text: "Trao đổi kỹ thuật trực tiếp với Trưởng phòng / Giám đốc Kỹ thuật về kinh nghiệm và tư duy giải pháp.",
  },
  {
    step: "03",
    title: "Đề Xuất & Thỏa Thuận",
    text: "Gửi thư mời nhận việc (Offer Letter) với mức đãi ngộ rõ ràng, lộ trình thưởng dự án cụ thể.",
  },
  {
    step: "04",
    title: "Hội Nhập & Thực Chiến",
    text: "Được kèm cặp trực tiếp bởi kỹ sư kỳ cựu, làm quen công cụ PVSyst/AutoCAD và tiếp cận công trường.",
  },
];

function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(careers[0]?.title || null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: careers[0]?.title || "",
    experience: "",
    portfolioLink: "",
    note: "",
  });

  const handleJobSelect = (jobTitle: string) => {
    setSelectedJob((prev) => (prev === jobTitle ? null : jobTitle));
    setFormState((prev) => ({ ...prev, position: jobTitle }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName || !formState.phone || !formState.email) return;
    setFormSubmitted(true);
  };

  return (
    <>
      {/* PAGE HERO */}
      <PageHero
        eyebrow="Gia Nhập Đội Ngũ TD VIỆT NAM"
        title="Cùng Xây Dựng Những Công Trình Năng Lượng Bền Vững"
        intro="Chúng tôi tìm kiếm những kỹ sư và chuyên viên có đam mê kỹ thuật, tư duy chính xác và tinh thần trách nhiệm để cùng phát triển hạ tầng năng lượng sạch."
        breadcrumbs={[{ label: "Tuyển dụng" }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-600">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-none border border-neutral-200">
            <ShieldCheck className="w-4 h-4 text-[#008A4B]" />
            <span>Môi trường Kỹ thuật chuẩn EPC</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-none border border-neutral-200">
            <Award className="w-4 h-4 text-[#F15A24]" />
            <span>100% Chế độ & Thưởng Dự Án</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 rounded-none border border-neutral-200">
            <GraduationCap className="w-4 h-4 text-[#008A4B]" />
            <span>Đào tạo Chuyên sâu PVSyst & BESS</span>
          </div>
        </div>
      </PageHero>

      {/* SECTION: VỊ TRÍ ĐANG TUYỂN DỤNG */}
      <Section id="positions" className="bg-white">
        <SectionHeading
          eyebrow="Cơ hội nghề nghiệp"
          title="Các vị trí tuyển dụng đang mở"
          intro="Lựa chọn vị trí phù hợp với năng lực và mục tiêu nghề nghiệp của bạn trong ngành năng lượng tái tạo."
        />

        <div className="mt-12 space-y-4">
          {careers.map((job) => {
            const isExpanded = selectedJob === job.title;

            return (
              <div
                key={job.title}
                className={`border transition-all duration-200 rounded-none ${
                  isExpanded
                    ? "border-[#008A4B] bg-neutral-50/40 shadow-md"
                    : "border-neutral-200 hover:border-neutral-300 bg-white"
                }`}
              >
                <div
                  className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5 cursor-pointer select-none"
                  onClick={() => handleJobSelect(job.title)}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 bg-[#008A4B]/10 text-[#008A4B]">
                        {job.team}
                      </span>
                      <span className="text-[11px] font-semibold text-neutral-500">{job.type}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#008A4B] transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-neutral-400" />
                        {job.experience}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#008A4B]">
                        <DollarSign className="w-3.5 h-3.5" />
                        {job.salary}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-start md:self-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleJobSelect(job.title);
                        const formElem = document.getElementById("apply-form");
                        formElem?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-5 py-2.5 rounded-none font-bold text-xs uppercase tracking-wider text-white bg-[#008A4B] hover:bg-[#00703C] transition-colors whitespace-nowrap"
                    >
                      Ứng tuyển ngay
                    </button>
                    <div
                      className={`p-2 transition-transform duration-200 ${isExpanded ? "rotate-180 text-[#008A4B]" : "text-neutral-400"}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* ACCORDION CHI TIẾT CÔNG VIỆC */}
                {isExpanded && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-neutral-200/80 grid md:grid-cols-2 gap-6 text-sm">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 mb-2">
                          Mô tả công việc
                        </h4>
                        <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      {job.requirements && (
                        <div>
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-900 mb-2">
                            Yêu cầu ứng viên
                          </h4>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600 list-disc list-inside">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 bg-white p-5 border border-neutral-200/60">
                      {job.benefits && (
                        <div>
                          <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#008A4B] mb-2">
                            Quyền lợi & Đãi ngộ
                          </h4>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700">
                            {job.benefits.map((ben, idx) => (
                              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-[#008A4B] flex-shrink-0 mt-0.5" />
                                <span>{ben}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                        <span className="text-xs text-neutral-500 font-medium">
                          Hạn nộp: <strong className="text-neutral-800">{job.deadline}</strong>
                        </span>
                        <a
                          href={`mailto:${company.email}?subject=Ứng tuyển: ${encodeURIComponent(job.title)}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F15A24] hover:underline"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Gửi email trực tiếp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* SECTION: ĐÃI NGỘ & GIÁ TRỊ PHÁT TRIỂN */}
      <Section className="bg-[#f8fafc] border-y border-neutral-200/80">
        <SectionHeading
          eyebrow="Môi trường làm việc"
          title="Quyền lợi & Giá trị phát triển tại TD VIỆT NAM"
          intro="Chúng tôi coi trọng con người và sự tiến bộ chuyên môn kỹ thuật là động lực then chốt cho mọi thành công."
        />

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <StaggerItem key={perk.title}>
                <article className="p-7 bg-white border border-neutral-200/90 rounded-none h-full flex flex-col justify-between space-y-4 hover:border-[#008A4B] transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#008A4B]/10 text-[#008A4B]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">{perk.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {perk.text}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* SECTION: QUY TRÌNH TUYỂN DỤNG */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Quy trình tuyển dụng"
          title="4 bước gia nhập đội ngũ TD VIỆT NAM"
          intro="Quy trình nhanh gọn, minh bạch và tôn trọng thời gian của ứng viên."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <Reveal key={step.step}>
              <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-none relative h-full flex flex-col justify-between">
                <span className="text-3xl font-black text-[#008A4B]/30 tracking-tight">
                  {step.step}
                </span>
                <div className="mt-4">
                  <h4 className="text-base font-bold text-neutral-900">{step.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SECTION: FORM ỨNG TUYỂN TRỰC TUYẾN */}
      <Section id="apply-form" className="bg-[#0c2340] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F15A24]">
              NỘP HỒ SƠ ỨNG TUYỂN
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Gửi Hồ Sơ & Bắt Đầu Hành Trình Cùng Chúng Tôi
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
              Điền thông tin ứng tuyển bên dưới hoặc liên hệ trực tiếp với bộ phận tuyển dụng của TD
              VIỆT NAM.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 sm:p-12 bg-white/10 border border-white/20 text-center space-y-4 rounded-none animate-in fade-in duration-300">
              <CheckCircle2 className="w-12 h-12 text-[#008A4B] mx-auto" />
              <h3 className="text-xl font-bold text-white">Hồ sơ đã được gửi thành công!</h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Cảm ơn bạn <strong>{formState.fullName}</strong> đã quan tâm ứng tuyển vị trí{" "}
                <strong>{formState.position}</strong>. Ban tuyển dụng TD VIỆT NAM sẽ xem xét hồ sơ
                và liên hệ trong vòng 48 giờ làm việc.
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-none font-bold text-xs uppercase tracking-wider text-neutral-900 bg-white hover:bg-neutral-100 transition-colors"
              >
                Gửi hồ sơ khác
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="bg-white text-neutral-900 p-6 sm:p-10 border border-neutral-200 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn An"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-none focus:outline-none focus:border-[#008A4B] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0912 345 678"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-none focus:outline-none focus:border-[#008A4B] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Địa chỉ Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-none focus:outline-none focus:border-[#008A4B] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Vị trí ứng tuyển <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formState.position}
                    onChange={(e) => setFormState({ ...formState, position: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-none focus:outline-none focus:border-[#008A4B] transition-colors"
                  >
                    {careers.map((job) => (
                      <option key={job.title} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="Khác (Ứng tuyển tự do)">Vị trí khác (Ứng tuyển tự do)</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Kinh nghiệm làm việc
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: 3 năm thiết kế PVSyst / Giám sát EPC"
                    value={formState.experience}
                    onChange={(e) => setFormState({ ...formState, experience: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-none focus:outline-none focus:border-[#008A4B] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Link CV / Hồ sơ (Google Drive / LinkedIn)
                  </label>
                  <input
                    type="url"
                    placeholder="https://drive.google.com/..."
                    value={formState.portfolioLink}
                    onChange={(e) => setFormState({ ...formState, portfolioLink: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-none focus:outline-none focus:border-[#008A4B] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Ghi chú hoặc tóm tắt năng lực nổi bật
                </label>
                <textarea
                  rows={3}
                  placeholder="Giới thiệu ngắn về kinh nghiệm chuyên môn, các công trình từng tham gia hoặc mong muốn của bạn..."
                  value={formState.note}
                  onChange={(e) => setFormState({ ...formState, note: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-none focus:outline-none focus:border-[#008A4B] transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-xs text-neutral-500">
                  Hoặc gửi CV qua email:{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="text-[#008A4B] font-bold hover:underline"
                  >
                    {company.email}
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-none font-bold text-xs uppercase tracking-wider text-white bg-[#008A4B] hover:bg-[#00703C] transition-all shadow-md"
                >
                  <span>GỬI HỒ SƠ ỨNG TUYỂN</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* LIÊN HỆ PHÒNG NHÂN SỰ */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-xs text-neutral-300">
            <div className="p-4 bg-white/5 border border-white/10 flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#008A4B]" />
              <span>
                Hotline Nhân sự & Kỹ thuật: <strong>0941 994 262</strong>
              </span>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F15A24]" />
              <span>
                Email tuyển dụng: <strong>{company.email}</strong>
              </span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Careers;
