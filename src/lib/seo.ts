import type { Metadata } from "next"
import { siteInfo } from "./siteInfo"

export function buildMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  if (process.env.NODE_ENV === "development") {
    if (description.length < 120 || description.length > 160) {
      throw new Error(
        `SEO description must be 120–160 chars, got ${description.length}: "${description}"`
      )
    }
  }

  const fullTitle = `${title} | The Pack CrossFit Twin Falls`
  const ogImage = "/og-image.jpg"

  return {
    // Pass only the base title so the layout template doesn't duplicate the suffix
    title,
    description,
    metadataBase: new URL(siteInfo.url),
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteInfo.url}${path}`,
      siteName: siteInfo.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteInfo.name }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}
