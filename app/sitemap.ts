import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-23");

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
