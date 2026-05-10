import type { Metadata } from "next"
import Link from "next/link"
import { memberships, addOns, pricingFaq } from "@/lib/pricing"
import { buildMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/JsonLd"
import { siteInfo } from "@/lib/siteInfo"

export const metadata: Metadata = buildMetadata(
  "Membership Pricing",
  "The Pack CrossFit membership pricing in Twin Falls. Unlimited from $175/mo, 3x/week $145/mo. Foundations required — $99 one time.",
  "/pricing"
)

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function PricingPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />

      {/* Header */}
      <section className="bg-[#111111] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-7xl font-black uppercase mb-6">
            Membership Pricing
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            No contracts. No hidden fees. Every new member starts with
            Foundations — then pick the plan that fits your life.
          </p>
        </div>
      </section>

      {/* Foundations callout */}
      <section className="bg-[#E85D04] text-white py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-black uppercase mb-3">
            Start Here: Foundations — $99
          </h2>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            Required for all new members. Three classes with a dedicated coach
            who teaches you every fundamental CrossFit movement before you join
            group classes. Your $99 applies toward your first month.
          </p>
        </div>
      </section>

      {/* Membership tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-black uppercase text-[#111111] text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberships.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-lg p-8 flex flex-col ${
                  tier.highlight
                    ? "bg-[#111111] text-white ring-2 ring-[#E85D04]"
                    : "border border-gray-200"
                }`}
              >
                {tier.highlight && (
                  <p className="text-[#E85D04] text-xs font-bold uppercase tracking-widest mb-3">
                    Most Popular
                  </p>
                )}
                <h3
                  className={`font-heading text-2xl font-black uppercase mb-1 ${
                    tier.highlight ? "text-white" : "text-[#111111]"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mb-6">
                  <span
                    className={`font-heading text-5xl font-black ${
                      tier.highlight ? "text-[#E85D04]" : "text-[#111111]"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ml-2 ${
                      tier.highlight ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {tier.period}
                  </span>
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <span className="text-[#E85D04] font-bold shrink-0">
                        ✓
                      </span>
                      <span
                        className={
                          tier.highlight ? "text-gray-300" : "text-gray-600"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                {tier.note && (
                  <p
                    className={`text-xs italic mb-4 ${
                      tier.highlight ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {tier.note}
                  </p>
                )}
                <Link
                  href="/new-members"
                  className={`block text-center px-6 py-3 font-bold uppercase tracking-wide rounded transition-colors ${
                    tier.highlight
                      ? "bg-[#E85D04] hover:bg-orange-600 text-white"
                      : "border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-black uppercase text-[#111111] text-center mb-8">
            Add-Ons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-heading text-xl font-black uppercase text-[#111111] mb-2">
                  {addon.name}
                </h3>
                <p className="text-[#E85D04] font-semibold">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-black uppercase text-[#111111] text-center mb-12">
            Membership FAQ
          </h2>
          <div className="space-y-6">
            {pricingFaq.map((item) => (
              <div
                key={item.question}
                className="border-b border-gray-200 pb-6"
              >
                <h3 className="font-bold text-lg text-[#111111] mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111111] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-black uppercase mb-4">
            Ready to Join?
          </h2>
          <p className="text-gray-400 mb-8">
            Start with Foundations. Three classes, one coach, no confusion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/new-members"
              className="bg-[#E85D04] hover:bg-orange-600 text-white px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              Start Foundations — $99
            </Link>
            <a
              href={`tel:${siteInfo.phoneTel}`}
              className="border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              Call {siteInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
