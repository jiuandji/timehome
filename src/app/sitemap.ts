import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://timehomerealty.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  const staticPages = ["", "/properties", "/contact"];

  for (const page of staticPages) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${SITE_URL}/${loc}${page}`])
          ),
        },
      });
    }
  }

  // Property detail pages
  const activeProperties = properties.filter((p) => p.status === "active");

  for (const property of activeProperties) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}/property/${property.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [
              loc,
              `${SITE_URL}/${loc}/property/${property.slug}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
