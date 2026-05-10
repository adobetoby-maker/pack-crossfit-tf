import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { siteInfo } from "@/lib/siteInfo"

export const metadata: Metadata = buildMetadata(
  "About The Pack CrossFit",
  "The Pack CrossFit has served Twin Falls since 2012. 12,000 sq ft facility, 200+ members, CrossFit affiliate #35458. New ownership 2025.",
  "/about"
)

const milestones = [
  { year: "2012", event: "The Pack CrossFit opens its doors in Twin Falls, ID — CrossFit affiliate #35458." },
  { year: "2015", event: "First facility expansion. CrossFit Games athletes begin training here." },
  { year: "2018", event: "Expanded to 12,000 sq ft total — the largest CrossFit facility in Magic Valley." },
  { year: "2020", event: "Launched the 65+ Athletes program. Within a year, it had a waitlist." },
  { year: "2023", event: "5.0★ rating across 200+ reviews. Named among the top CrossFit boxes in Idaho." },
  { year: "2025", event: "New ownership: Kristin Clepper. Fresh energy, new programs, same Pack community." },
]

const facilityFeatures = [
  "8,000+ sq ft dedicated gym floor",
  "12,000 sq ft total facility",
  "Olympic lifting platforms (6)",
  "Rigs, pull-up bars, and climbing ropes",
  "Full barbell and dumbbell sets",
  "Rowers, bikes, and ski ergs",
  "Dedicated stretching and mobility area",
  "Locker rooms with showers",
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#111111] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-7xl font-black uppercase mb-6">
            About The Pack
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            12+ years in Twin Falls. CrossFit affiliate #35458. The largest gym
            floor in Magic Valley. And a community that shows up for each
            other — every single day.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-4xl font-black uppercase text-[#111111] mb-6">
                Where &ldquo;The Pack&rdquo; Comes From
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  When The Pack CrossFit was founded in Twin Falls in 2012, the
                  name wasn&apos;t chosen for branding. It was chosen because it
                  reflected what actually happened when people trained together
                  here: they moved better as a group than they ever did alone.
                </p>
                <p>
                  CrossFit is fundamentally a community sport. The workouts are
                  hard. The movements are technical. And the only thing that
                  makes both sustainable over the long term is the people around
                  you — who push you, check your form, and notice when you
                  haven&apos;t shown up in a few days.
                </p>
                <p>
                  Over 12+ years, that culture has defined this gym more than
                  any equipment or programming. Athletes have trained here
                  through pregnancies, injuries, competitive seasons, and major
                  life transitions. Some members who came as beginners are now
                  coaches. Some who came alone are now married. The Pack is
                  whatever its members need it to be.
                </p>
                <p>
                  In 2025, Kristin Clepper became the new owner of The Pack
                  with a clear mandate from herself: don&apos;t break what
                  works. Build on it. The community stays. The standards go up.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
                alt="The Pack CrossFit community in Twin Falls"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-4xl font-black uppercase text-center mb-12">
            12 Years in Twin Falls
          </h2>
          <div className="relative border-l border-gray-700 pl-8 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-11 w-6 h-6 rounded-full bg-[#E85D04] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span className="text-[#E85D04] font-heading text-2xl font-black block mb-1">
                  {m.year}
                </span>
                <p className="text-gray-300">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kristin's vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-4xl font-black uppercase text-[#111111] text-center mb-10">
            New Ownership · New Energy · Same Pack
          </h2>
          <div className="bg-white rounded-lg p-10 border border-gray-200">
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
              &ldquo;When I took over The Pack in 2025, the first thing I did
              was talk to members — not about what I wanted to change, but about
              what they didn&apos;t want me to touch. The community, the
              coaching standards, the culture of welcome. Those stay.
              Everything else is fair game to improve.&rdquo;
            </blockquote>
            <footer>
              <p className="font-bold text-[#111111]">Kristin Clepper</p>
              <p className="text-[#E85D04] text-sm">
                Owner, The Pack CrossFit · CrossFit Level 2
              </p>
            </footer>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: "12+", label: "Years in Twin Falls" },
              { stat: "200+", label: "Active Members" },
              { stat: "5.0★", label: "205 Reviews" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="font-heading text-5xl font-black text-[#E85D04] mb-1">
                  {stat}
                </p>
                <p className="text-gray-600 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-black uppercase text-[#111111] mb-6">
                The Facility
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                12,000 square feet total — the largest CrossFit facility in Magic
                Valley. More than 8,000 of those square feet are open gym floor.
                It&apos;s big enough that you never feel crowded, and
                well-equipped enough that no one ever waits for a barbell.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Located at {siteInfo.address}, behind the Pepsi factory.
                Parking is available behind the building.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facilityFeatures.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-[#E85D04] font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
                alt="The Pack CrossFit facility in Twin Falls — 12,000 sq ft gym"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-12 bg-[#E85D04] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-black uppercase mb-4">
            CrossFit Affiliate #35458
          </h2>
          <p className="text-orange-100 max-w-xl mx-auto">
            As an official CrossFit affiliate, The Pack maintains CrossFit&apos;s
            global standards for coaching certification, programming methodology,
            and affiliate community membership.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111111] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-black uppercase mb-4">
            Come See It for Yourself
          </h2>
          <p className="text-gray-400 mb-8">
            Start with Foundations. Three classes with a coach. Then decide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/new-members"
              className="bg-[#E85D04] hover:bg-orange-600 text-white px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              Try Foundations — $99
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
