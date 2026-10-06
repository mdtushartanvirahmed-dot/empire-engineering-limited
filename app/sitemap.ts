import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://empire-engineering-limited.vercel.app"

  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/knowledge",
    "/knowledge/building-construction",
    "/knowledge/slump-test",
    "/knowledge/mix-design",
    "/knowledge/field-test",
    "/knowledge/leveling",
    "/knowledge/2d",
    "/knowledge/costing",
    "/knowledge/highway",
    "/knowledge/water-drainage",
    "/resources",
    "/contact",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/services" || route === "/contact"
          ? 0.9
          : 0.7,
  }))
}