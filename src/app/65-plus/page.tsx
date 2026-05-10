import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/JsonLd"
import { siteInfo } from "@/lib/siteInfo"

export const metadata: Metadata = buildMetadata(
  "65+ Athletes Program",
  "Strong after 65 isn't a wish — it's a workout. The Pack CrossFit's 65+ program in Twin Falls builds real strength, balance, and mobility.",
  "/65-plus"
)

const testimonials = [
  {
    quote:
      "My doctor said my balance and bone density improved significantly after six months. He told me to keep doing it.",
    author: "Joyce A.",
    age: "68",
  },
  {
    quote:
      "I'm stronger at 71 than I was at 60. That's not a coincidence. That's Coach Maria's Wednesday 9AM class.",
    author: "Robert M.",
    age: "71",
  },
  {
    quote:
      "I carry my own groceries. I garden without back pain. I play with my grandkids. The 65+ program made those things possible.",
    author: "Sandra K.",
    age: "66",
  },
]

const programFaq = [
  {
    question: "Do I need CrossFit experience to join 65+?",
    answer:
      "No. The 65+ program is designed to be your starting point. Coach Maria teaches every movement from the beginning, and the pacing accommodates all fitness levels.",
  },
  {
    question: "Is this program actually challenging?",
    answer:
      "Yes. The 65+ class is not a gentle stretching session. It's real CrossFit programming adapted for the needs of older athletes — modified movements, appropriate weights, and a focus on functional strength. Members routinely tell us it's one of the hardest things they've done.",
  },
  {
    question: "What does a 65+ class look like?",
    answer:
      "A typical class is 60 minutes: a warm-up focused on mobility and joint prep, skill work with functional movements (squats, carries, pulls), and a modified WOD. Coach Maria scales every movement to every individual in the class.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: programFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
}

const benefits = [
  {
    title: "Real Strength",
    desc: "Resistance training that builds muscle mass and bone density — the two things that decline fastest after 60.",
  },
  {
    title: "Balance & Coordination",
    desc: "Every class includes movement patterns that train proprioception and reduce fall risk.",
  },
  {
    title: "Functional Independence",
    desc: "You train to carry groceries, climb stairs, garden, and play with grandkids without pain.",
  },
  {
    title: "Community",
    desc: "The 65+ class has its own tight-knit community. Members show up for each other — in class and outside it.",
  },
]

export default function SixtyFivePlusPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />

      {/* Header */}
      <section className="bg-[#111111] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-7xl font-black uppercase mb-6">
            Strong After 65 Isn&apos;t a Wish.
            <br />
            <span className="text-[#E85D04]">It&apos;s a Workout.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            The Pack CrossFit&apos;s 65+ Athletes program in Twin Falls is
            built for real fitness in the second half of life. Adapted CrossFit
            methodology. Expert coaching. And a community that proves every
            week that age is not a ceiling.
          </p>
        </div>
      </section>

      {/* Schedule strip */}
      <section className="bg-[#E85D04] text-white py-4">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm font-bold uppercase tracking-widest">
          65+ Athletes Class: Monday · Wednesday · Friday · 9AM · Coach Maria
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-black uppercase text-[#111111] mb-6">
                What the Program Is Built For
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                The 65+ Athletes program uses the same CrossFit methodology as
                every other class at The Pack — constantly varied functional
                movements at appropriate intensity. What changes is the
                emphasis: mobility, balance, and the specific strength patterns
                that matter most as the body ages.
              </p>
              <div className="space-y-6">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-xl shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-bold text-[#111111] mb-1">
                        {b.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
                alt="65+ athletes training at The Pack CrossFit Twin Falls"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coach Maria feature */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl font-black uppercase mb-4">
              Your Coach: Maria
            </h2>
          </div>
          <div className="bg-gray-900 rounded-lg p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="relative w-32 h-32 shrink-0 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=300&q=80"
                  alt="Coach Maria, 65+ Program Specialist at The Pack CrossFit Twin Falls"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-black uppercase mb-1">
                  Coach Maria
                </h3>
                <p className="text-[#E85D04] text-sm font-semibold mb-4">
                  65+ Program Specialist · CrossFit L1 · FMS Certified
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Maria built the 65+ Athletes program at The Pack from the
                  ground up. Her conviction is simple: older athletes deserve
                  real training — not a watered-down version of fitness.
                  She programs for mobility, balance, and genuine strength using
                  CrossFit methodology adapted thoughtfully for the body&apos;s
                  changing needs.
                </p>
                <p className="text-gray-400 text-sm italic">
                  &ldquo;My program exists to prove that 65 isn&apos;t a
                  ceiling. It&apos;s just a different starting point.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-black uppercase text-[#111111] text-center mb-12">
            From 65+ Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="bg-white rounded-lg p-8 border border-gray-200"
              >
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-bold text-[#111111]">{t.author}</p>
                  <p className="text-[#E85D04] text-sm">Age {t.age}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-4xl font-black uppercase text-[#111111] text-center mb-12">
            Program FAQ
          </h2>
          <div className="space-y-6">
            {programFaq.map((item) => (
              <div key={item.question} className="border-b border-gray-200 pb-6">
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
      <section className="py-16 bg-[#E85D04] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-black uppercase mb-4">
            Start with Foundations
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            All new members — including 65+ athletes — begin with
            Foundations. Three sessions with a coach before joining the group.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/new-members"
              className="bg-white text-[#E85D04] hover:bg-orange-50 px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              Sign Up — $99
            </Link>
            <a
              href={`tel:${siteInfo.phoneTel}`}
              className="border-2 border-white text-white hover:bg-orange-700 px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              Call {siteInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
