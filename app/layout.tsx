import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { company } from "./config/company";
import { seo } from "./config/seo";
import "./globals.css";

const siteUrl = company.website;
const siteName = company.name;
const title = seo.title;
const description = seo.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  keywords: seo.keywords,
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
        url: seo.image,
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
    images: [seo.image]
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
