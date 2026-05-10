export interface Program {
  id: string
  name: string
  description: string
  schedule: string
  whoFor: string
  coach: string
  price?: string
}

export const programs: Program[] = [
  {
    id: "crossfit",
    name: "CrossFit Classes",
    description:
      "The signature CrossFit experience — constantly varied functional movements performed at high intensity. Every class is coached, every workout is scalable. You'll never do the same thing twice.",
    schedule:
      "Mon–Fri: 5AM · 6AM · 9AM · 12PM · 4:30PM · 5:30PM · 6:30PM | Sat: 7AM · 8AM · 9AM",
    whoFor:
      "Everyone — from first-timers to competitive athletes. Every movement scales to where you are today.",
    coach: "All coaches",
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description:
      "One-on-one coaching with fully custom programming and nutrition guidance. If you have a specific goal — strength, weight loss, sport performance, injury recovery — this is the fastest path.",
    schedule: "Flexible — book directly with your coach",
    whoFor:
      "Members who want accelerated results, athletes returning from injury, or anyone with highly specific goals.",
    coach: "Kristin Clepper & all coaches",
    price: "From $75/session · 10-pack $650",
  },
  {
    id: "endurance",
    name: "Endurance",
    description:
      "HIIT, cardio, and functional strength designed specifically for runners and cyclists. Build the engine that makes you faster, stronger, and harder to break over long efforts.",
    schedule: "Tuesday & Thursday · 6PM",
    whoFor:
      "Runners, cyclists, and triathletes who want to get faster and more durable without sacrificing strength.",
    coach: "Coach Mike",
  },
  {
    id: "olympic-lifting",
    name: "Olympic Lifting",
    description:
      "A dedicated barbell program focused on the snatch and clean & jerk. Technique first, then strength. Guided progressions whether you're brand new to the barbell or chasing a PR.",
    schedule: "Monday · Wednesday · Friday · 7PM",
    whoFor:
      "Athletes who want to move heavy weight with precision. All skill levels welcome — we teach from the ground up.",
    coach: "Coach Sarah",
  },
  {
    id: "65-plus",
    name: "65+ Athletes",
    description:
      "Modified CrossFit programming built for the second half of life. Mobility, balance, and real strength — never watered-down, always appropriate. Our 65+ members are some of the strongest people in the gym.",
    schedule: "Monday · Wednesday · Friday · 9AM",
    whoFor:
      "Athletes 65 and older who want to stay strong, mobile, and functionally independent. No prior CrossFit experience needed.",
    coach: "Coach Maria",
  },
  {
    id: "running",
    name: "Running Program",
    description:
      "A structured 12-week plan that builds your aerobic base, improves pace, and bakes in injury prevention. Backed by CrossFit endurance principles and adapted for Magic Valley terrain.",
    schedule: "Tuesday & Thursday · 6AM",
    whoFor:
      "Runners of any level — 5K first-timers, half-marathon preppers, or anyone who wants to run without getting hurt.",
    coach: "Coach Mike",
  },
]
