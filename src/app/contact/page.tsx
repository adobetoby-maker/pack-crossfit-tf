import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { siteInfo } from "@/lib/siteInfo"
import { ContactForm } from "@/components/ContactForm"

export const metadata: Metadata = buildMetadata(
  "Contact Us",
  "Contact The Pack CrossFit in Twin Falls, ID. 2346 Eldridge Ave — behind the Pepsi factory. Call (208) 749-9955 or send us a message.",
  "/contact"
)

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#111111] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-7xl font-black uppercase mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400">
            Questions about programs, membership, or how to get started? We
            respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="font-heading text-3xl font-black uppercase text-[#111111] mb-8">
                Find Us
              </h2>
              <address className="not-italic space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Address
                  </h3>
                  <p className="text-lg">{siteInfo.address}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Behind the Pepsi factory on Eldridge Ave. Parking available
                    behind the building.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Phone
                  </h3>
                  <a
                    href={`tel:${siteInfo.phoneTel}`}
                    className="text-lg font-semibold text-[#E85D04] hover:underline"
                  >
                    {siteInfo.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteInfo.email}`}
                    className="text-lg font-semibold text-[#E85D04] hover:underline"
                  >
                    {siteInfo.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Open Gym Hours
                  </h3>
                  <ul className="space-y-1">
                    {siteInfo.hours.map(({ days, hours }) => (
                      <li key={days}>
                        <span className="font-semibold text-[#111111]">
                          {days}:
                        </span>{" "}
                        {hours}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">
                    Class schedule varies — see{" "}
                    <Link
                      href="/schedule"
                      className="text-[#E85D04] hover:underline"
                    >
                      full schedule
                    </Link>
                    .
                  </p>
                </div>
              </address>

              {/* Foundations CTA */}
              <div className="mt-10 bg-[#111111] text-white rounded-lg p-6">
                <h3 className="font-heading text-2xl font-black uppercase mb-3">
                  Ready to Start?
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  New to CrossFit? Begin with Foundations — 3 classes with a
                  dedicated coach. $99, and it applies to your first month.
                </p>
                <Link
                  href="/new-members"
                  className="inline-block bg-[#E85D04] hover:bg-orange-600 text-white px-6 py-3 font-bold uppercase tracking-wide rounded transition-colors"
                >
                  Try Foundations — $99
                </Link>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="font-heading text-3xl font-black uppercase text-[#111111] mb-8">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
