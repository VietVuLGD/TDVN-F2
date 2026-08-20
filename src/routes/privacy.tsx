import { createFileRoute } from "@tanstack/react-router";

import { LegalBody } from "@/components/site/legal";
import { PageHero, Section } from "@/components/site/ui";
import { company } from "@/data/site";

const title = "Chính sách bảo mật | TD VIỆT NAM";
const description =
  "Cách TD VIỆT NAM thu thập, sử dụng, lưu trữ và bảo vệ dữ liệu cá nhân thu thập qua website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Pháp lý"
        title="Chính sách bảo mật thông tin"
        intro="Cam kết bảo mật dữ liệu khách hàng và đối tác từ CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM."
        breadcrumbs={[{ label: "Bảo mật" }]}
      />
      <Section>
        <LegalBody>
          <section>
            <h2>1. Dữ liệu thu thập</h2>
            <p>
              Khi bạn gửi yêu cầu tư vấn qua website, chúng tôi thu thập họ tên, đơn vị, email, số
              điện thoại và thông tin nhu cầu công trình. Trong quá trình triển khai dự án, chúng
              tôi xử lý thông tin mặt bằng, hóa đơn điện và các tài liệu kỹ thuật do bạn cung cấp.
            </p>
          </section>
          <section>
            <h2>2. Mục đích sử dụng</h2>
            <ul>
              <li>Khảo sát phương án kỹ thuật, tính toán mô hình sản lượng và lập báo giá.</li>
              <li>Thực hiện hợp đồng thi công EPC, lắp đặt, nghiệm thu và dịch vụ bảo trì O&M.</li>
              <li>Liên hệ phản hồi câu hỏi kỹ thuật và thông tin về tiến độ dự án.</li>
            </ul>
          </section>
          <section>
            <h2>3. Lưu trữ và bảo mật dữ liệu</h2>
            <p>
              Mọi dữ liệu thông tin cá nhân và dự án được lưu trữ an toàn, phục vụ đúng mục đích
              công việc và tuân thủ các quy định pháp luật hiện hành của Việt Nam.
            </p>
          </section>
          <section>
            <h2>4. Chia sẻ thông tin</h2>
            <p>
              Chúng tôi chỉ chia sẻ thông tin cần thiết với đối tác cung ứng thiết bị và đơn vị điện
              lực khi làm thủ tục đấu nối dự án. {company.legalName} cam kết không bán hoặc chia sẻ
              dữ liệu cho bên thứ ba vì mục đích thương mại ngoài dự án.
            </p>
          </section>
          <section>
            <h2>5. Quyền của khách hàng</h2>
            <p>
              Bạn có quyền yêu cầu tra cứu, cập nhật hoặc xóa thông tin cá nhân bằng cách gửi email
              trực tiếp tới{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {company.email}
              </a>
              .
            </p>
          </section>
        </LegalBody>
      </Section>
    </>
  );
}
