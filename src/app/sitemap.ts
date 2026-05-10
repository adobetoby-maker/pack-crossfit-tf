import type { MetadataRoute } from "next"
import { siteInfo } from "@/lib/siteInfo"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/programs",
    "/schedule",
    "/pricing",
    "/coaches",
    "/about",
    "/new-members",
    "/65-plus",
    "/blog",
    "/contact",
  ]

  return routes.map((route) => ({
    url: `${siteInfo.url}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "/" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: route === "/" ? 1 : 0.8,
  }))
}
