import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { siteUrl } from "./salesConfig";
import "./globals.css";

const siteName = "Xe Công Trình Đồ Chơi";
const title = "Xe đồ chơi công trình cao cấp cho bé | Chat Shopee nhận ưu đãi";
const description =
  "Landing page bán xe đồ chơi công trình cho bé: xe xúc, xe ben, xe cẩu, xe lu, combo công trường. Giao nhanh, đổi trả 7 ngày, thanh toán qua Shopee chính thức.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  keywords: [
    "xe đồ chơi công trình",
    "đồ chơi xe xúc",
    "xe ben đồ chơi",
    "xe cẩu đồ chơi",
    "combo xe công trình cho bé",
    "đồ chơi bé trai"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title,
    description,
    locale: "vi_VN",
    images: [
      {
        url: "/assets/products/xuc-yigong.webp",
        width: 1200,
        height: 800,
        alt: "Máy xúc điều khiển từ xa YIGONG cho bé"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/products/xuc-yigong.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f8bd1a"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
