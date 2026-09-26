import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://federallogisticsgroup.co.tz";

const routes = [
  { path: "/", priority: 1 },
  { path: "/clearing-and-forwarding", priority: 0.9 },
  { path: "/services", priority: 0.9 },
  { path: "/industries", priority: 0.7 },
  { path: "/network", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/projects", priority: 0.6 },
  { path: "/testimonials", priority: 0.5 },
  { path: "/quote", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
