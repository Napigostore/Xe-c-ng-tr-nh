import type { MetadataRoute } from "next";
import { company } from "./config/company";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: company.website,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
