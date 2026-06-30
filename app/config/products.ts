import { salesConfig } from "./salesConfig";

export const products = [
  {
    name: "Máy xúc điều khiển từ xa YIGONG",
    model: "11 kênh, gầu hợp kim, tỉ lệ 1:20",
    price: "359.000đ - 409.000đ",
    schemaPrice: "359000",
    rating: "4.9",
    sold: "664 đã bán",
    reviews: "384 đánh giá",
    image: "/assets/products/xuc-yigong.webp",
    badge: "Bán chạy",
    highlights: ["2.4GHz", "Gầu hợp kim", "Mô phỏng chân thực"],
    href: `${salesConfig.shopUrl}?keyword=m%C3%A1y%20x%C3%BAc%20yigong`,
  },
  {
    name: "Xe tải điều khiển từ xa XUEZHISHAN",
    model: "Thùng hợp kim nâng 65 độ, tỉ lệ 1:20",
    price: "569.000đ",
    schemaPrice: "569000",
    rating: "4.9",
    sold: "156 đã bán",
    reviews: "52 đánh giá",
    image: "/assets/products/ben-xuezhishan.webp",
    badge: "Thùng nâng 65 độ",
    highlights: ["Điều khiển từ xa", "Chi tiết sắc nét", "Quà tặng hấp dẫn"],
    href: `${salesConfig.shopUrl}?keyword=xuezhishan%20xe%20t%E1%BA%A3i`,
  },
];
