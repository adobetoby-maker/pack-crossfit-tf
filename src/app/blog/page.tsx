import type { Metadata } from "next"
import Link from "next/link"
import { articles } from "@/lib/articles"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata(
  "CrossFit Blog — Twin Falls",
  "CrossFit tips, Twin Falls fitness news, and real stories from The Pack CrossFit community. Beginner guides, training advice, and member stories.",
  "/blog"
)

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#111111] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-7xl font-black uppercase mb-4">
            The Pack Blog
          </h1>
          <p className="text-xl text-gray-400">
            CrossFit explained, Twin Falls fitness, and real stories from our
            community.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="border-b border-gray-200 pb-8"
              >
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="bg-[#E85D04] text-white text-xs font-bold uppercase px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-heading text-3xl font-black uppercase text-[#111111] mb-3 leading-tight">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-[#E85D04] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-[#E85D04] font-semibold hover:underline text-sm"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
