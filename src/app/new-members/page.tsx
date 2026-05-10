import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { JsonLd } from "@/components/JsonLd"
import { siteInfo } from "@/lib/siteInfo"
import { FoundationsForm } from "@/components/FoundationsForm"

export const metadata: Metadata = buildMetadata(
  "New Members — Start Here",
  "New to CrossFit? The Pack CrossFit in Twin Falls makes it easy to start. Foundations is 3 classes, one coach, no judgment — just $99.",
  "/new-members"
)

const faq = [
  {
    question: "Am I fit enough to start CrossFit?",
    answer:
      "Yes. Every workout in every CrossFit class is designed to scale to your current fitness level. You do not need to be in shape to start CrossFit — you start CrossFit to get in shape. Every single person who now does the 5AM class started somewhere. Foundations is where you start.",
  },
  {
    question: "What if I can't do the movements?",
    answer:
      "Then your coach teaches you. That's the job. Foundations is three classes specifically designed to teach you every fundamental CrossFit movement before you join a group class. No one expects you to walk in knowing how to snatch. We expect you to be willing to learn.",
  },
  {
    question: "Is CrossFit dangerous?",
    answer:
      "Any physical activity done incorrectly carries risk. CrossFit done with good coaching and appropriate scaling is extremely safe — and far safer than many people assume. Our coaches watch your form in every class, correct issues before they become injuries, and scale weights and movements to protect you at every stage. The Foundations requirement exists precisely for this reason.",
  },
  {
    question: "How long is Foundations?",
    answer:
      "Foundations is three sessions, each about 60 minutes. You'll work one-on-one with a coach who teaches you the nine fundamental CrossFit movements, explains how classes work, and makes sure you're ready to join the group before you do. Most members complete Foundations within a week or two.",
  },
  {
    question: "What happens after Foundations?",
    answer:
      "You join the group classes. You pick a membership plan (Unlimited or 3x/week are the most popular), choose your class times, and show up. The coach on the floor knows you've been through Foundations, so they know your starting point. From there, you improve every time you come in.",
  },
  {
    question: "What should I wear to my first class?",
    answer:
      "Athletic clothing you can move freely in. Cross-training shoes or running shoes work fine. Dedicated CrossFit shoes (Nanos, Metcons) are popular but not required on day one. Bring a water bottle. That's it.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function NewMembersPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />

      {/* Header */}
      <section className="bg-[#111111] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-7xl font-black uppercase mb-6">
            You Don&apos;t Have to Be Fit to Start
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We&apos;ve heard every fear. &ldquo;I&apos;m not in good enough
            shape.&rdquo; &ldquo;I&apos;ll embarrass myself.&rdquo;
            &ldquo;CrossFit isn&apos;t for people like me.&rdquo; Every one of
            our 200+ members said at least one of those things before they
            walked in.
          </p>
        </div>
      </section>

      {/* Fear removal */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-4xl font-black uppercase text-[#111111] text-center mb-12">
            What to Expect Your First Week
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Day 1",
                subtitle: "Foundations Session 1",
                desc: "You meet your coach one-on-one. You learn the squat, the deadlift, and the press. You move at your pace. Nobody is watching or judging — your coach is the only person in the room.",
              },
              {
                title: "Day 2",
                subtitle: "Foundations Session 2",
                desc: "More movements. The clean, the snatch, the kipping pull-up. Your coach notes what you need to practice. You start to see how everything connects.",
              },
              {
                title: "Day 3",
                subtitle: "Foundations Session 3",
                desc: "Your first scaled WOD. You see how the class structure works. Your coach confirms you're ready to join the group. Then you join.",
              },
            ].map((step) => (
              <div key={step.title} className="border border-gray-200 rounded-lg p-6">
                <p className="text-[#E85D04] font-heading text-4xl font-black mb-1">
                  {step.title}
                </p>
                <p className="font-bold text-[#111111] text-sm uppercase tracking-wide mb-3">
                  {step.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* The guarantee */}
          <div className="bg-[#111111] text-white rounded-lg p-10 text-center">
            <h2 className="font-heading text-3xl font-black uppercase mb-4">
              The Pack Promise
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              If you complete Foundations and decide CrossFit at The Pack
              isn&apos;t right for you, we&apos;ll refund your $99. No
              questions asked. We are that confident you&apos;ll want to stay.
            </p>
          </div>
        </div>
      </section>

      {/* Foundations sign-up form */}
      <section className="py-20 bg-gray-50" id="sign-up">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl font-black uppercase text-[#111111] mb-4">
              Sign Up for Foundations — $99
            </h2>
            <p className="text-gray-600">
              Fill out the form and we&apos;ll reach out within 24 hours to
              schedule your first session. No payment required now.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <FoundationsForm />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Prefer to call?{" "}
            <a
              href={`tel:${siteInfo.phoneTel}`}
              className="text-[#E85D04] font-semibold hover:underline"
            >
              {siteInfo.phone}
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-4xl font-black uppercase text-[#111111] text-center mb-12">
            New Member FAQ
          </h2>
          <div className="space-y-6">
            {faq.map((item) => (
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

      {/* Still nervous CTA */}
      <section className="py-16 bg-[#E85D04] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-black uppercase mb-4">
            Still Nervous? Good.
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            That feeling means you care about doing something real. Foundations
            is exactly where that feeling turns into confidence.
          </p>
          <Link
            href="#sign-up"
            className="inline-block bg-white text-[#E85D04] hover:bg-orange-50 px-8 py-4 font-bold uppercase tracking-wide rounded transition-colors"
          >
            Sign Up for Foundations — $99
          </Link>
        </div>
      </section>
    </>
  )
}
