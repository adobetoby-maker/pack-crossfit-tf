export interface MembershipTier {
  id: string
  name: string
  price: string
  period: string
  features: string[]
  highlight?: boolean
  cta: string
  note?: string
}

export interface AddOn {
  name: string
  price: string
}

export const memberships: MembershipTier[] = [
  {
    id: "foundations",
    name: "Foundations",
    price: "$99",
    period: "one time",
    features: [
      "3-class intro course",
      "Learn CrossFit fundamentals",
      "1-on-1 movement coaching",
      "Required for all new members",
      "Applies toward first month",
    ],
    cta: "Start Here",
    note: "Required for new members — your first step.",
  },
  {
    id: "unlimited",
    name: "Unlimited Classes",
    price: "$175",
    period: "per month",
    features: [
      "Unlimited CrossFit classes",
      "All class times included",
      "Community events & challenges",
      "WOD app access",
    ],
    highlight: true,
    cta: "Join Now",
  },
  {
    id: "3x-week",
    name: "3x Per Week",
    price: "$145",
    period: "per month",
    features: [
      "Up to 12 classes per month",
      "All class times available",
      "Community events access",
      "WOD app access",
    ],
    cta: "Get Started",
  },
  {
    id: "family",
    name: "Family",
    price: "$280",
    period: "per month",
    features: [
      "2 family members, unlimited",
      "Save $70 vs. two individual memberships",
      "All class times",
      "Community events access",
    ],
    cta: "Join as Family",
  },
  {
    id: "drop-in",
    name: "Drop-In",
    price: "$25",
    period: "per class",
    features: [
      "Single class, any time",
      "No commitment required",
      "Visiting CrossFitters welcome",
    ],
    cta: "Drop In",
  },
]

export const addOns: AddOn[] = [
  {
    name: "Personal Training",
    price: "$75/session · 10-pack for $650",
  },
  {
    name: "Nutrition Coaching",
    price: "$45/month — add to any membership",
  },
]

export const pricingFaq = [
  {
    question: "Is there a contract?",
    answer:
      "No contracts. Month-to-month memberships cancel anytime with 30 days notice. We earn your membership every month.",
  },
  {
    question: "Can I put my membership on hold?",
    answer:
      "Yes — members can freeze for up to 2 months per year for travel, injury, or life. Just give us 7 days notice.",
  },
  {
    question: "Do I really have to do Foundations first?",
    answer:
      "Yes, and it's worth it. Foundations is a 3-class course where a coach teaches you every movement pattern in CrossFit before you're in a class with 20 other athletes. It makes you safer and more confident from day one. Your $99 applies toward your first month.",
  },
  {
    question: "Can two family members on the same plan attend different class times?",
    answer:
      "Absolutely. The family plan gives both members full unlimited access — you can each go whenever works for your schedule.",
  },
]
