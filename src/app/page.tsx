import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { programs } from "@/lib/programs"
import { memberships } from "@/lib/pricing"
import { buildMetadata } from "@/lib/seo"
import { siteInfo } from "@/lib/siteInfo"

export const metadata: Metadata = buildMetadata(
  "Twin Falls CrossFit Gym",
  "The Pack CrossFit in Twin Falls, ID — 8,000 sq ft gym, 200+ members, 5.0★ reviews. CrossFit classes, personal training & 65+ programs.",
  "/"
)

const coaches = [
  {
    name: "Kristin Clepper",
    role: "Owner & Head Coach",
    cert: "CrossFit Level 2",
    image: "photo-1574680096145-d05b474e2155",
    bio: "Kristin took ownership of The Pack in 2025 with a clear vision: honor what made this gym special, and push it further. She coaches because she loves watching people surprise themselves.",
  },
  {
    name: "Coach Sarah",
    role: "Olympic Lifting Specialist",
    cert: "USAW Level 1 · CrossFit L1",
    image: "photo-1574680096145-d05b474e2155",
    bio: "Sarah brings competitive weightlifting experience to every barbell session. She's coached athletes from first-time snatchers to competitors chasing state records.",
  },
  {
    name: "Coach Mike",
    role: "Endurance & Running Coach",
    cert: "RRCA Certified · CrossFit L1",
    image: "photo-1574680096145-d05b474e2155",
    bio: "Mike has coached runners from 5Ks to ultramarathons. His endurance classes are some of the most challenging and most popular in the gym.",
  },
  {
    name: "Coach Maria",
    role: "65+ Program Specialist",
    cert: "CrossFit L1 · FMS Certified",
    image: "photo-1574680096145-d05b474e2155",
    bio: "Maria runs the 65+ Athletes program with a conviction: getting older is not a reason to do less. Her 9AM class has a waitlist.",
  },
]

const testimonials = [
  {
    quote:
      "I was terrified to walk in. I thought everyone would be judging me. Now I'm terrified to miss a class.",
    author: "Rachel K.",
    detail: "Member since 2023",
  },
  {
    quote:
      "I told myself I'd try it once, just to say I did. That was 18 months ago and I've lost 40 pounds.",
    author: "Dan M.",
    detail: "Member since 2022",
  },
  {
    quote:
      "I'm 67. I thought CrossFit was for young people. The 65+ class proved me completely wrong.",
    author: "Joyce A.",
    detail: "Member since 2024",
  },
]

const daySteps = [
  {
    step: "01",
    title: "Warm-Up",
    duration: "10 min",
    description:
      "Coach-led warm-up activating the muscles you're about to use. No winging it.",
  },
  {
    step: "02",
    title: "Skill or Strength",
    duration: "15–20 min",
    description:
      "Practice a movement or build strength in a specific lift with real-time coaching feedback.",
  },
  {
    step: "03",
    title: "The WOD",
    duration: "10–25 min",
    description:
      "The Workout of the Day — intense, scaled to your level, different every day.",
  },
  {
    step: "04",
    title: "Cool Down",
    duration: "5–10 min",
    description:
      "Stretching, mobility work, and everyone checking in on each other.",
  },
]

const featuredTiers = memberships.filter((m) =>
  ["foundations", "unlimited", "3x-week"].includes(m.id)
)

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center bg-[#111111] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80"
            alt="CrossFit community workout at The Pack CrossFit Twin Falls"
            fill
            priority
            className="object-cover opacity-35"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6">
            Twin Falls&apos; CrossFit{" "}
            <span className="text-[#E85D04]">Community</span>
            <br />— 8,000 Sq Ft, Zero Judgment
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Never done CrossFit? Good. Neither had most of our members. Every
            workout scales to your level — coaches watch your form, not your
            ego.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Show up once and see why 200+ members call this their second home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/new-members"
              className="bg-[#E85D04] hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold uppercase tracking-wide rounded transition-colors text-center"
            >
              Try Foundations — $99
            </Link>
            <Link
              href="/schedule"
              className="border-2 border-white hover:border-[#E85D04] hover:text-[#E85D04] text-white px-8 py-4 text-lg font-bold uppercase tracking-wide rounded transition-colors text-center"
            >
              See Class Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section
        className="bg-[#E85D04] text-white py-4"
        aria-label="Trust signals"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm font-bold uppercase tracking-widest">
            <li>5.0★ · 205 Reviews</li>
            <li aria-hidden="true" className="hidden sm:block">
              ·
            </li>
            <li>12+ Years in Twin Falls</li>
            <li aria-hidden="true" className="hidden sm:block">
              ·
            </li>
            <li>8,000 Sq Ft Gym Floor</li>
            <li aria-hidden="true" className="hidden sm:block">
              ·
            </li>
            <li>New Ownership · 2025</li>
          </ul>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-[#111111] mb-4">
              Programs Built For Every Athlete
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              From first-timers to competitive lifters. From the 5AM crew to
              our 65+ athletes. There&apos;s a program here for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {programs.map((program) => (
              <div
                key={program.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-[#E85D04] transition-colors group"
              >
                <h3 className="font-heading text-2xl font-black uppercase text-[#111111] group-hover:text-[#E85D04] transition-colors mb-2">
                  {program.name}
                </h3>
                <p className="text-sm text-[#E85D04] font-semibold mb-3">
                  {program.schedule}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  Coach: {program.coach}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/programs"
              className="inline-block border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* A Day at The Pack */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase mb-4">
                What Actually Happens In a CrossFit Class
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                First class is always a mystery. Here&apos;s exactly what
                you&apos;ll experience at The Pack.
              </p>
              <div className="space-y-6">
                {daySteps.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="font-heading text-4xl font-black text-[#E85D04] leading-none w-12 shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3 mb-1">
                        <h3 className="font-heading text-xl font-black uppercase">
                          {s.title}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {s.duration}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                alt="CrossFit class in session at The Pack CrossFit Twin Falls"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-[#111111] mb-4">
              The Coaches
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Every class is coached. Every coach is certified. Every one of
              them genuinely cares whether you improve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {coaches.map((coach) => (
              <div
                key={coach.name}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/${coach.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={`${coach.name}, ${coach.role} at The Pack CrossFit`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-xl font-black uppercase text-[#111111] mb-0.5">
                    {coach.name}
                  </h3>
                  <p className="text-[#E85D04] text-sm font-semibold mb-1">
                    {coach.role}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{coach.cert}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {coach.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/coaches"
              className="inline-block border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              Meet All Coaches
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#E85D04] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-center mb-12">
            They Were Scared Too
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="bg-orange-700 rounded-lg p-8"
              >
                <p className="text-xl font-medium leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-bold">{t.author}</p>
                  <p className="text-orange-200 text-sm">{t.detail}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-[#111111] mb-4">
              Membership Pricing
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Every new member starts with Foundations — 3 classes, one coach,
              zero confusion. Then pick the plan that fits your life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredTiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-lg p-8 ${
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
                <p className="mb-4">
                  <span
                    className={`font-heading text-4xl font-black ${
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
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <span className="text-[#E85D04] font-bold">✓</span>
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
                  <p className="text-xs text-gray-500 mb-4 italic">
                    {tier.note}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/pricing"
              className="inline-block border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              See All Pricing & FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#111111] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase mb-6">
            Your First Step Is{" "}
            <span className="text-[#E85D04]">Foundations</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Three classes. One coach. No judgment. $99 — and it applies toward
            your first month of membership.
          </p>
          <p className="text-gray-500 mb-10">
            You don&apos;t have to be fit to start. You just have to start.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/new-members"
              className="bg-[#E85D04] hover:bg-orange-600 text-white px-10 py-4 text-lg font-bold uppercase tracking-wide rounded transition-colors"
            >
              Try Foundations — $99
            </Link>
            <a
              href={`tel:${siteInfo.phoneTel}`}
              className="border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-10 py-4 text-lg font-bold uppercase tracking-wide rounded transition-colors"
            >
              Call {siteInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
