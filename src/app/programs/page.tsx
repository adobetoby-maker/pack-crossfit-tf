import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { programs } from "@/lib/programs"
import { buildMetadata } from "@/lib/seo"
import { siteInfo } from "@/lib/siteInfo"

export const metadata: Metadata = buildMetadata(
  "CrossFit Programs",
  "CrossFit classes, personal training, endurance, Olympic lifting, and 65+ programs at The Pack CrossFit in Twin Falls, ID.",
  "/programs"
)

const programImages: Record<string, string> = {
  crossfit:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  "personal-training":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
  endurance:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
  "olympic-lifting":
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
  "65-plus":
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
  running:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
}

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#111111] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-7xl font-black uppercase mb-6">
            Programs at The Pack
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Six programs. One gym. Every level of athlete. Whether you&apos;re
            stepping into a gym for the first time or chasing a barbell PR,
            there&apos;s a place for you here.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`relative h-72 rounded-lg overflow-hidden ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <Image
                  src={programImages[program.id]}
                  alt={`${program.name} at The Pack CrossFit Twin Falls`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <h2 className="font-heading text-4xl font-black uppercase text-[#111111] mb-2">
                  {program.name}
                </h2>
                <p className="text-[#E85D04] font-semibold mb-4">
                  {program.schedule}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-bold text-[#111111]">Who it&apos;s for:</span>{" "}
                    <span className="text-gray-600">{program.whoFor}</span>
                  </p>
                  <p>
                    <span className="font-bold text-[#111111]">Coach:</span>{" "}
                    <span className="text-gray-600">{program.coach}</span>
                  </p>
                  {program.price && (
                    <p>
                      <span className="font-bold text-[#111111]">Pricing:</span>{" "}
                      <span className="text-gray-600">{program.price}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E85D04] text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-black uppercase mb-4">
            Ready to Start?
          </h2>
          <p className="text-lg mb-8 text-orange-100">
            All new members begin with Foundations — 3 classes with a coach
            before joining group classes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/new-members"
              className="bg-white text-[#E85D04] hover:bg-orange-50 px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              Try Foundations — $99
            </Link>
            <Link
              href="/schedule"
              className="border-2 border-white text-white hover:bg-orange-700 px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              View Schedule
            </Link>
          </div>
          <p className="mt-6 text-orange-200 text-sm">
            Questions? Call us at{" "}
            <a href={`tel:${siteInfo.phoneTel}`} className="underline">
              {siteInfo.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
