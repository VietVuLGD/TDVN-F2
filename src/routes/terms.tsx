import { createFileRoute } from "@tanstack/react-router";

import { LegalBody } from "@/components/site/legal";
import { PageHero, Section } from "@/components/site/ui";
import { company } from "@/data/site";

const title = "Điều khoản dịch vụ | TD VIỆT NAM";
const description =
  "Các điều khoản sử dụng website, tài liệu báo giá và hồ sơ kỹ thuật của TD VIỆT NAM.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/terms" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Pháp lý"
        title="Điều khoản sử dụng dịch vụ"
        intro="Điều khoản sử dụng thông tin website, hồ sơ đề xuất và hợp đồng dịch vụ của CÔNG TY TNHH PHÁT TRIỂN NĂNG LƯỢNG TD VIỆT NAM."
        breadcrumbs={[{ label: "Điều khoản" }]}
      />
      <Section>
        <LegalBody>
          <section>
            <h2>1. Sử dụng thông tin website</h2>
            <p>
              Các thông tin, hình ảnh và dữ liệu công trình đăng tải trên website nhằm mục đích cung
              cấp thông tin tham khảo. Các thông số sản lượng và hiệu quả thực tế của từng dự án sẽ
              phụ thuộc vào điều kiện khảo sát địa hình, bức xạ và thiết kế kỹ thuật cụ thể.
            </p>
          </section>
          <section>
            <h2>2. Hồ sơ đề xuất & Báo giá</h2>
            <p>
              Mọi báo giá sơ bộ trên website chỉ mang tính chất tham khảo. Giá trị pháp lý và cam
              kết kỹ thuật chính thức chỉ phát sinh khi hai bên ký kết hợp đồng kinh tế đi kèm bản
              vẽ thiết kế chi tiết và bảng khối lượng công việc (BOQ).
            </p>
          </section>
          <section>
            <h2>3. Quyền sở hữu trí tuệ</h2>
            <p>
              Toàn bộ bản vẽ thiết kế, thuyết minh giải pháp và tài liệu do {company.legalName} lập
              thuộc quyền sở hữu trí tuệ của công ty cho đến khi hợp đồng dịch vụ tương ứng được
              thanh toán hoàn tất.
            </p>
          </section>
          <section>
            <h2>4. Luật áp dụng & Giải quyết tranh chấp</h2>
            <p>
              Các điều khoản này được điều chỉnh bởi pháp luật Nước Cộng hòa Xã hội Chủ nghĩa Việt
              Nam. Mọi tranh chấp nếu có sẽ được giải quyết tại Tòa án có thẩm quyền tại Thành phố
              Hà Nội, Việt Nam.
            </p>
          </section>
        </LegalBody>
      </Section>
    </>
  );
}
