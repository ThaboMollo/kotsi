import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/portfolio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
