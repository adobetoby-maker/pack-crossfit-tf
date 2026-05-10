import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { siteInfo } from "@/lib/siteInfo"

export const metadata: Metadata = buildMetadata(
  "Class Schedule",
  "Full weekly class schedule for The Pack CrossFit in Twin Falls — CrossFit, Olympic lifting, endurance, and 65+ athlete classes.",
  "/schedule"
)

type ClassEntry = { time: string; program: string; note?: string }
type DaySchedule = { day: string; classes: ClassEntry[] }

const weekdayClasses: ClassEntry[] = [
  { time: "5:00 AM", program: "CrossFit" },
  { time: "6:00 AM", program: "CrossFit" },
  { time: "6:00 AM", program: "Running Program", note: "Tue/Thu only" },
  { time: "9:00 AM", program: "CrossFit" },
  { time: "9:00 AM", program: "65+ Athletes", note: "Mon/Wed/Fri only" },
  { time: "12:00 PM", program: "CrossFit" },
  { time: "4:30 PM", program: "CrossFit" },
  { time: "5:30 PM", program: "CrossFit" },
  { time: "6:00 PM", program: "Endurance", note: "Tue/Thu only" },
  { time: "6:30 PM", program: "CrossFit" },
  { time: "7:00 PM", program: "Olympic Lifting", note: "Mon/Wed/Fri only" },
]

const schedule: DaySchedule[] = [
  {
    day: "Monday",
    classes: [
      { time: "5:00 AM", program: "CrossFit" },
      { time: "6:00 AM", program: "CrossFit" },
      { time: "9:00 AM", program: "CrossFit" },
      { time: "9:00 AM", program: "65+ Athletes" },
      { time: "12:00 PM", program: "CrossFit" },
      { time: "4:30 PM", program: "CrossFit" },
      { time: "5:30 PM", program: "CrossFit" },
      { time: "6:30 PM", program: "CrossFit" },
      { time: "7:00 PM", program: "Olympic Lifting" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "5:00 AM", program: "CrossFit" },
      { time: "6:00 AM", program: "CrossFit" },
      { time: "6:00 AM", program: "Running Program" },
      { time: "9:00 AM", program: "CrossFit" },
      { time: "12:00 PM", program: "CrossFit" },
      { time: "4:30 PM", program: "CrossFit" },
      { time: "5:30 PM", program: "CrossFit" },
      { time: "6:00 PM", program: "Endurance" },
      { time: "6:30 PM", program: "CrossFit" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "5:00 AM", program: "CrossFit" },
      { time: "6:00 AM", program: "CrossFit" },
      { time: "9:00 AM", program: "CrossFit" },
      { time: "9:00 AM", program: "65+ Athletes" },
      { time: "12:00 PM", program: "CrossFit" },
      { time: "4:30 PM", program: "CrossFit" },
      { time: "5:30 PM", program: "CrossFit" },
      { time: "6:30 PM", program: "CrossFit" },
      { time: "7:00 PM", program: "Olympic Lifting" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "5:00 AM", program: "CrossFit" },
      { time: "6:00 AM", program: "CrossFit" },
      { time: "6:00 AM", program: "Running Program" },
      { time: "9:00 AM", program: "CrossFit" },
      { time: "12:00 PM", program: "CrossFit" },
      { time: "4:30 PM", program: "CrossFit" },
      { time: "5:30 PM", program: "CrossFit" },
      { time: "6:00 PM", program: "Endurance" },
      { time: "6:30 PM", program: "CrossFit" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "5:00 AM", program: "CrossFit" },
      { time: "6:00 AM", program: "CrossFit" },
      { time: "9:00 AM", program: "CrossFit" },
      { time: "9:00 AM", program: "65+ Athletes" },
      { time: "12:00 PM", program: "CrossFit" },
      { time: "4:30 PM", program: "CrossFit" },
      { time: "5:30 PM", program: "CrossFit" },
      { time: "6:30 PM", program: "CrossFit" },
      { time: "7:00 PM", program: "Olympic Lifting" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "7:00 AM", program: "CrossFit" },
      { time: "8:00 AM", program: "CrossFit" },
      { time: "9:00 AM", program: "CrossFit" },
    ],
  },
  {
    day: "Sunday",
    classes: [],
  },
]

const programColors: Record<string, string> = {
  CrossFit: "bg-[#111111] text-white",
  "65+ Athletes": "bg-blue-600 text-white",
  Endurance: "bg-green-600 text-white",
  "Olympic Lifting": "bg-purple-600 text-white",
  "Running Program": "bg-teal-600 text-white",
}

export default function SchedulePage() {
  return (
    <>
      <section className="bg-[#111111] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl sm:text-7xl font-black uppercase mb-4">
            Class Schedule
          </h1>
          <p className="text-xl text-gray-400">
            Twin Falls&apos; most class-dense CrossFit box. Find your time and
            show up.
          </p>
        </div>
      </section>

      {/* Open Gym Hours */}
      <section className="bg-[#E85D04] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm font-bold uppercase tracking-wider">
          Open Gym: Mon–Fri 5AM–8PM · Sat 7AM–12PM · Class schedule varies — see below
        </div>
      </section>

      {/* Legend */}
      <section className="bg-gray-50 py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {Object.entries(programColors).map(([name, cls]) => (
              <span
                key={name}
                className={`px-3 py-1 text-xs font-bold uppercase tracking-wide rounded ${cls}`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Daily schedule */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedule.map((day) => (
              <div key={day.day} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-[#111111] text-white px-4 py-3">
                  <h2 className="font-heading text-xl font-black uppercase">
                    {day.day}
                  </h2>
                </div>
                <div className="p-4">
                  {day.classes.length === 0 ? (
                    <p className="text-gray-400 text-sm italic py-4 text-center">
                      Closed
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {day.classes.map((cls, i) => (
                        <li key={`${cls.time}-${cls.program}-${i}`} className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 w-16 shrink-0">
                            {cls.time}
                          </span>
                          <span
                            className={`px-2 py-0.5 text-xs font-bold uppercase rounded ${
                              programColors[cls.program] ??
                              "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {cls.program}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111111] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-4xl font-black uppercase mb-4">
            Pick Your Time
          </h2>
          <p className="text-gray-400 mb-8">
            New members start with Foundations before joining group classes.
            Book your spot and we&apos;ll get you set up.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/new-members"
              className="bg-[#E85D04] hover:bg-orange-600 text-white px-8 py-3 font-bold uppercase tracking-wide rounded transition-colors"
            >
              Start with Foundations — $99
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
