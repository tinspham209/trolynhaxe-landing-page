/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Vector from "assets/key-feature/vector.svg";
import Editing from "assets/key-feature/editing.svg";
import Speed from "assets/key-feature/speed.svg";
import Report from "assets/key-feature/report.svg";

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: "lo-trinh",
    title: "Quản lý lộ trình",
    text:
      "Tối ưu lộ trình, cảnh báo sai lộ trình, truy xuất quãng đường, vận tốc, vị trí xe theo thời gian thực.",
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: "tai-xe",
    title: "Quản lý tài xế",
    text:
      "Chỉnh sửa dữ liệu,xem trang thái của tài xế theo thời gian thực một cách nhanh chóng.",
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: "xe",
    title: "Quản lý xe",
    text:
      "Chỉnh sửa dữ liệu phương tiện, thông tin giao hàng, truy xuất thông tin chi phí.",
  },
  {
    id: 3,
    imgSrc: Report,
    altText: "tao-bao-cao",
    title: "Tạo báo cáo",
    text:
      "Lập báo cáo tổng hợp chỉ với những thao tác đơn giản, đưa ra cái nhìn tổng quan tình trạng kinh doanh.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader slogan="Tính năng" title="Những công cụ chính" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, "40px", null, "80px"],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "40px 0"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "& > div": {
      px: [0, "15px", null, "25px", null, "30px", "40px", "60px"],
    },
  },
};
