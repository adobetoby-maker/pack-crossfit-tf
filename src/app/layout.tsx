import type { Metadata } from "next"
import { Barlow_Condensed, Inter } from "next/font/google"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { JsonLd } from "@/components/JsonLd"
import { siteInfo } from "@/lib/siteInfo"
import "./globals.css"

const barlow = Barlow_Condensed({
  weight: ["700", "900"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: "The Pack CrossFit — Twin Falls, ID",
    template: "%s | The Pack CrossFit Twin Falls",
  },
  description: siteInfo.description,
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "LocalBusiness"],
  name: siteInfo.name,
  description: siteInfo.description,
  url: siteInfo.url,
  telephone: siteInfo.phoneTel,
  email: siteInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteInfo.address.split(",")[0],
    addressLocality: siteInfo.city,
    addressRegion: siteInfo.state,
    postalCode: siteInfo.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteInfo.coordinates.lat,
    longitude: siteInfo.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "12:00",
    },
  ],
  image: `${siteInfo.url}/og-image.jpg`,
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "205",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased font-sans bg-white text-[#111111]">
        <JsonLd schema={localBusinessSchema} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white px-4 py-2 rounded shadow"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
