import type { MetadataRoute } from "next";
import { siteUrl } from "./salesConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
