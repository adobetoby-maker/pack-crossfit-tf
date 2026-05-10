import { siteInfo } from "./siteInfo"

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  body: string
}

export const articles: Article[] = [
  {
    slug: "what-is-crossfit-twin-falls-beginners-guide",
    title: "What Is CrossFit? A Twin Falls Beginner's Guide",
    excerpt:
      "New to CrossFit in Twin Falls? Here's everything you need to know before your first class — what to expect, what to wear, and why it's nothing like you think.",
    category: "Beginner",
    date: "2025-03-15",
    readTime: "6 min read",
    body: `CrossFit has been in Twin Falls for over a decade, but for a lot of people it still feels like a mystery — or worse, something intimidating. Here's the truth: CrossFit is simply a fitness methodology built on functional movement, variety, and community. Nothing more.

**What actually happens in a CrossFit class?**

A typical class runs 60 minutes. It starts with a warm-up, moves into skill or strength work, and finishes with the WOD — the Workout of the Day. The WOD is usually 10–25 minutes of high-intensity work. Then everyone cools down together.

What makes it different from a regular gym is that every movement is coached. You're not left to figure out a squat or a deadlift on your own. A certified coach watches your form, corrects your mechanics, and scales the workout to match where you are today.

**"I'm not fit enough for CrossFit."**

This is the most common thing new members say. It's also the thing every single one of them laughs at six months later. Every CrossFit workout is designed to be scaled. The weight, the reps, the movements — all of it adjusts to your current fitness level. On day one, you're not competing with a five-year veteran. You're competing with yesterday's version of yourself.

At The Pack, we require all new members to go through Foundations — a 3-class intro where you learn every fundamental movement with a coach one-on-one before joining group classes. It's the reason our injury rate is low and our retention rate is high.

**What to wear and bring**

Wear athletic clothing you can move freely in. Bring a water bottle. For footwear, cross-training shoes work well — dedicated CrossFit shoes (like Nanos or Metcons) are popular but not required on day one.

**Is CrossFit in Twin Falls different from other cities?**

The methodology is consistent across all CrossFit affiliates worldwide — that's what the affiliate license means. What varies is the community, coaching quality, and facility. The Pack has been part of Twin Falls since 2012. Under new ownership in 2025, we've kept the community culture that made this gym and added fresh programming, improved facilities, and a renewed focus on coaching excellence.

If you've been curious about CrossFit but haven't taken the first step — Foundations is where you start. Three classes, one coach, zero judgment. See what 12 years of Twin Falls athletes already know.`,
  },
  {
    slug: "how-crossfit-changed-my-life-at-68",
    title: "How CrossFit Changed My Life at 68",
    excerpt:
      "Joyce thought CrossFit was for young people. Then she tried the 65+ program at The Pack CrossFit in Twin Falls and hasn't looked back.",
    category: "65+ Athletes",
    date: "2025-02-20",
    readTime: "5 min read",
    body: `Joyce Andersen turned 68 last spring. She'd spent years doing water aerobics and occasional walks along the Snake River Canyon, and she thought that was enough. Then her doctor told her she was losing bone density faster than expected and her balance scores had dropped. "He said if I didn't start doing something with actual resistance and real movement, I was looking at a serious fall within five years. That scared me."

A friend mentioned The Pack CrossFit had a class designed specifically for people over 65. Joyce spent two weeks convincing herself it wasn't for her before finally calling.

**"I expected to feel out of place"**

"I walked in and the first thing I noticed was how many people were my age," she says. "There were maybe eight of us in that 9AM class, and the youngest was probably 62. I didn't feel like someone's grandma who wandered into the wrong building."

Coach Maria runs the 65+ program Monday, Wednesday, and Friday mornings. She's a certified CrossFit coach with additional training in functional movement for older adults. The workouts use the same CrossFit framework — squats, presses, pulls, carries — adapted to prioritize joint health, balance, and functional strength over max load.

**What the first month looked like**

Joyce's first few weeks were humbling in the best way. She discovered muscles she hadn't used in years. The goblet squat — holding a kettlebell at her chest and sitting into a full squat — was the hardest thing she did in week one. By month two, she was doing it with a heavier weight than she started with.

"I sleep better. My knees don't ache the way they did. I carried groceries last week without thinking about it — that doesn't sound like much until you remember how it used to feel."

**The number she checks now**

Six months after starting the 65+ program, Joyce went back to her doctor. Her balance scores had improved significantly. Her bone density scan showed stabilization. Her doctor asked what she'd changed. "I told him I started CrossFit. He was quiet for a second, then he said 'keep doing it.'"

If you're over 65 and wondering if this is for you — it is. Strong after 65 isn't a wish. It's a workout.`,
  },
  {
    slug: "the-5am-class-why-twin-falls-athletes-train-before-sunrise",
    title: "The 5AM Class: Why Twin Falls Athletes Train Before Sunrise",
    excerpt:
      "The 5AM class at The Pack CrossFit is full. Here's what drives 20+ Twin Falls athletes to show up before the sun does — and why it actually works.",
    category: "Community",
    date: "2025-01-10",
    readTime: "4 min read",
    body: `It's 4:45AM in Twin Falls. The temperature is in the 30s. The gym at ${siteInfo.address.split(",")[0]} is already lit up.

By 5:00AM, there are 20 athletes warming up. By 5:05, the coach is explaining the WOD. By 6:00AM, it's done — and every single person who walked through that door is heading into their day having already done something hard.

**Why 5AM?**

The answer is almost always the same: life gets in the way of everything else.

Work runs long. Kids need pickup. Dinner happens. By 7PM, the motivation that felt certain at noon has evaporated. The 5AM class removes all the ways the day can steal your workout. Nothing is scheduled before 5AM. The gym is open, the coach is there, and the only competition is your alarm clock.

"I've tried every other time," says Marcus, a construction supervisor from Jerome who's been doing the 5AM class for two years. "The 5AM is the only one I never skip. I skip the other times constantly."

**What the 5AM crowd is actually like**

There's a specific type of person who does the 5AM class consistently. They're not necessarily the most competitive or the most experienced — they're the most committed. The class has become its own community within the gym. People who train at 5AM tend to know each other's names, their PRs, their jobs. The shared experience of doing hard things before sunrise creates a bond.

"We have a group chat," says Danielle, a nurse who works a 7AM shift at St. Luke's. "If someone hasn't shown up in a few days, someone texts them. We notice."

**Does early morning training actually work?**

Research on timing and performance is nuanced, but one thing is clear: the best workout is the one you actually do. For a large subset of people — parents, early-shift workers, people who run out of willpower by evening — training in the morning is the only training that happens consistently.

At The Pack, the 5AM class follows the same programming as every other time slot. Same WOD, same coaching, same standards. The only difference is the time on the clock and the silence outside.

The 5AM class still has spots. The question is whether your alarm clock does.`,
  },
  {
    slug: "crossfit-vs-planet-fitness-an-honest-comparison",
    title: "CrossFit vs. Planet Fitness: An Honest Comparison",
    excerpt:
      "Planet Fitness costs less per month. CrossFit costs more. Here's an honest breakdown of what you actually get for the difference — and who each one is right for.",
    category: "Fitness",
    date: "2024-12-05",
    readTime: "5 min read",
    body: `Twin Falls has a Planet Fitness and several CrossFit gyms. If you're deciding between them, you deserve an honest comparison — not a sales pitch.

**Cost**

Planet Fitness: $10–25/month. CrossFit at The Pack: $145–175/month. That difference is real and it matters. Let's talk about what you get for it.

**What Planet Fitness gives you**

Access to equipment. Lots of it — treadmills, machines, free weights. The space is clean, the hours are long, and there's no pressure to do anything in particular. For people who already know what they're doing in a gym and just need space to do it, that's a legitimate value.

**What CrossFit gives you**

A coach in every class. Programming you don't have to think about. A community that notices when you're absent. And a methodology with 20 years of documented results across every age group and fitness level.

The thing that most people don't fully account for when comparing costs: how often do you actually use your gym membership? The national average for gym memberships is roughly two visits per month. At Planet Fitness pricing, that's $5–12 per visit. At The Pack's Unlimited membership, if you show up three times a week, your cost per class is under $15. If you show up five days a week, it's under $9.

CrossFit members — particularly at box gyms with strong community — attend significantly more frequently than the national gym average. The community, the coaching, and the structured programming all drive attendance in a way that solo access to equipment rarely does.

**Who each gym is for**

Planet Fitness is right for you if: You have a clear, self-directed fitness routine, you know proper form on every exercise you do, and you're disciplined enough to train consistently without external accountability.

CrossFit is right for you if: You want coaching, you want variety, you want to know people's names at the gym, and you want results that compound over years rather than months.

**The honest bottom line**

Neither is universally better. The right gym is the one where you show up. For most people who've tried both, the answer becomes clear pretty quickly — what you get at a CrossFit affiliate is fundamentally different from access to equipment. Whether that difference is worth the price difference is a question only you can answer.

If you're not sure, Foundations at The Pack is $99. Three classes with a coach. You'll know by the end of the first one.`,
  },
]
