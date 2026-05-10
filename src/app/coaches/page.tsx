import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/JsonLd"
import { siteInfo } from "@/lib/siteInfo"

export const metadata: Metadata = buildMetadata(
  "Meet the Coaches",
  "Meet the coaches at The Pack CrossFit in Twin Falls, ID. Owner Kristin Clepper and certified coaches in CrossFit, Olympic lifting, and endurance.",
  "/coaches"
)

const coaches = [
  {
    name: "Kristin Clepper",
    role: "Owner & Head Coach",
    cert: "CrossFit Level 2",
    specialty: "CrossFit programming, barbell lifting, community building",
    favoriteMovement: "The thruster — it's awful and perfect.",
    whyCoach:
      "Because watching someone hit a PR they didn't believe was possible is the best thing in the world.",
    image: "photo-1574680096145-d05b474e2155",
    bio: "Kristin became owner of The Pack CrossFit in 2025, bringing a lifelong athletic background and a crystal-clear vision: keep the community that made this gym great, and push every aspect of it further. A competitive athlete herself, Kristin's coaching philosophy centers on technique first, intensity second. She'll meet you exactly where you are and push you exactly as far as you're ready to go.",
  },
  {
    name: "Coach Sarah",
    role: "Olympic Lifting Specialist",
    cert: "USAW Level 1 · CrossFit Level 1",
    specialty: "Snatch, clean & jerk, technical barbell work",
    favoriteMovement: "The snatch. It demands everything at once.",
    whyCoach:
      "I want people to feel what it's like to move a barbell with real precision. There's nothing like it.",
    image: "photo-1517836357463-d25dfeac3438",
    bio: "Sarah competed in Olympic weightlifting at the state level before transitioning to coaching full-time. Her technical eye is exceptional — she can spot a fault in your setup before you've even touched the bar. She runs the Olympic Lifting specialty program Monday, Wednesday, and Friday evenings, and brings the same rigor to the CrossFit classes she coaches.",
  },
  {
    name: "Coach Mike",
    role: "Endurance & Running Coach",
    cert: "RRCA Certified Running Coach · CrossFit Level 1",
    specialty: "Endurance programming, running mechanics, aerobic capacity",
    favoriteMovement:
      "The 400m sprint — simple, brutal, and honest about your fitness.",
    whyCoach:
      "Running is the most accessible sport in the world. I coach because I want people to know they can do more than they think.",
    image: "photo-1534438327276-14e5300c3a48",
    bio: "Mike has coached athletes from first-time 5K runners to ultramarathon finishers. His Endurance program runs Tuesday and Thursday evenings and is built for anyone who wants a better engine — runners, cyclists, and CrossFitters who want to go longer without slowing down. His coaching emphasizes sustainable pace, form, and the mental side of long-distance work.",
  },
  {
    name: "Coach Maria",
    role: "65+ Program Specialist",
    cert: "CrossFit Level 1 · FMS Certified",
    specialty: "Functional movement for older adults, mobility, balance",
    favoriteMovement:
      "The farmer's carry. It's exactly the kind of strength that keeps people independent.",
    whyCoach:
      "My program exists to prove that 65 isn't a ceiling. It's just a different starting point.",
    image: "photo-1571902943202-507ec2618e8f",
    bio: "Maria built the 65+ Athletes program from the ground up when she joined The Pack, and it's now one of the most popular classes in the gym — with a waitlist. Her philosophy is that older athletes deserve real training, not a watered-down version of it. She programs for mobility, balance, and genuine strength using the same CrossFit framework, adapted thoughtfully for the body's changing needs.",
  },
]

const personSchemas = coaches.map((coach) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: coach.name,
  jobTitle: coach.role,
  worksFor: {
    "@type": "SportsActivityLocation",
    name: siteInfo.name,
    url: siteInfo.url,
  },
  description: coach.bio,
}))

export default function CoachesPage() {
  return (
    <>
      {personSchemas.map((schema) => (
        <JsonLd key={schema.name} schema={schema} />
      ))}

      {/* Header */}
      <section className="bg-[#111111] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-7xl font-black uppercase mb-6">
            The Coaches
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Every class at The Pack is coached. That means a certified,
            attentive human being is watching your form, correcting your
            movement, and cheering you through every rep.
          </p>
        </div>
      </section>

      {/* Coach profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {coaches.map((coach, index) => (
            <article
              key={coach.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`relative h-96 rounded-lg overflow-hidden ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <Image
                  src={`https://images.unsplash.com/${coach.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={`${coach.name}, ${coach.role} at The Pack CrossFit Twin Falls`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <p className="text-[#E85D04] text-sm font-bold uppercase tracking-widest mb-2">
                  {coach.role}
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-[#111111] mb-2">
                  {coach.name}
                </h2>
                <p className="text-gray-500 text-sm mb-6">{coach.cert}</p>
                <p className="text-gray-700 leading-relaxed mb-8">{coach.bio}</p>
                <div className="space-y-4 border-t border-gray-100 pt-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Specialty
                    </h3>
                    <p className="text-gray-700 text-sm">{coach.specialty}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Favorite Movement
                    </h3>
                    <p className="text-gray-700 text-sm italic">
                      &ldquo;{coach.favoriteMovement}&rdquo;
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      Why They Coach
                    </h3>
                    <p className="text-gray-700 text-sm italic">
                      &ldquo;{coach.whyCoach}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E85D04] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-black uppercase mb-4">
            Train with a Coach. Every Class.
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Not a trainer hovering nearby — a coach actively running your
            class. Start with Foundations and meet yours.
          </p>
          <Link
            href="/new-members"
            className="inline-block bg-white text-[#E85D04] hover:bg-orange-50 px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
          >
            Try Foundations — $99
          </Link>
        </div>
      </section>
    </>
  )
}
