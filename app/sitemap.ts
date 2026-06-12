import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2025-06-12"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
