import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { articles } from "@/lib/articles"
import { siteInfo } from "@/lib/siteInfo"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

  const description =
    article.excerpt.length >= 120 && article.excerpt.length <= 160
      ? article.excerpt
      : article.excerpt.slice(0, 157) + "..."

  return {
    title: `${article.title} | The Pack CrossFit Twin Falls`,
    description,
    metadataBase: new URL(siteInfo.url),
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description,
      url: `${siteInfo.url}/blog/${article.slug}`,
      siteName: siteInfo.name,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
      type: "article",
      publishedTime: article.date,
    },
  }
}

function renderBody(body: string) {
  return body.split("\n\n").map((block, i) => {
    if (block.startsWith("**") && block.endsWith("**") && !block.includes("\n")) {
      const heading = block.slice(2, -2)
      return (
        <h2
          key={i}
          className="font-heading text-2xl font-black uppercase text-[#111111] mt-10 mb-4"
        >
          {heading}
        </h2>
      )
    }

    const parts = block.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={i} className="text-gray-700 leading-relaxed mb-6">
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>
          }
          return part
        })}
      </p>
    )
  })
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  return (
    <>
      <section className="bg-[#111111] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <Link
              href="/blog"
              className="hover:text-[#E85D04] transition-colors"
            >
              ← Blog
            </Link>
            <span>·</span>
            <span className="bg-[#E85D04] text-white text-xs font-bold uppercase px-2 py-0.5 rounded">
              {article.category}
            </span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black uppercase leading-tight">
            {article.title}
          </h1>
          <p className="text-gray-400 mt-4">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>{" "}
            · The Pack CrossFit, Twin Falls
          </p>
        </div>
      </section>

      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-gray-500 italic leading-relaxed mb-10 border-l-4 border-[#E85D04] pl-4">
            {article.excerpt}
          </p>
          <div>{renderBody(article.body)}</div>
        </div>
      </article>

      <section className="py-16 bg-[#111111] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-black uppercase mb-4">
            Ready to Try It?
          </h2>
          <p className="text-gray-400 mb-8">
            Start with Foundations at The Pack CrossFit in Twin Falls. Three
            sessions, one coach, $99.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/new-members"
              className="bg-[#E85D04] hover:bg-orange-600 text-white px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              Try Foundations — $99
            </Link>
            <Link
              href="/blog"
              className="border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
