import type { MetadataRoute } from "next";
import { domains, SITE_URL } from "@/data/domains";

export default function sitemap(): MetadataRoute.Sitemap {
  const domainPages = domains.map((domain) => ({
    url: `${SITE_URL}/${domain.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...domainPages,
  ];
}
