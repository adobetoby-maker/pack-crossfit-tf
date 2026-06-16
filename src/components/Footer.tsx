import Link from "next/link"
import { siteInfo } from "@/lib/siteInfo"

export function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <p className="font-heading text-white text-lg font-black uppercase tracking-tight mb-3">
            The Pack CrossFit
          </p>
          <p className="text-sm leading-relaxed mb-4">
            CrossFit affiliate #35458. 12,000 sq ft. Women-owned. Serving Twin
            Falls since 2012.
          </p>
          <p className="text-xs text-gray-500">
            New ownership: Kristin Clepper, 2025
          </p>
        </div>

        {/* Get Started */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">
            Get Started
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/new-members"
                className="hover:text-[#E85D04] transition-colors"
              >
                New Members
              </Link>
            </li>
            <li>
              <Link
                href="/65-plus"
                className="hover:text-[#E85D04] transition-colors"
              >
                65+ Athletes
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-[#E85D04] transition-colors"
              >
                Membership Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/schedule"
                className="hover:text-[#E85D04] transition-colors"
              >
                Class Schedule
              </Link>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">
            Programs
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/programs#crossfit"
                className="hover:text-[#E85D04] transition-colors"
              >
                CrossFit Classes
              </Link>
            </li>
            <li>
              <Link
                href="/programs#personal-training"
                className="hover:text-[#E85D04] transition-colors"
              >
                Personal Training
              </Link>
            </li>
            <li>
              <Link
                href="/programs#olympic-lifting"
                className="hover:text-[#E85D04] transition-colors"
              >
                Olympic Lifting
              </Link>
            </li>
            <li>
              <Link
                href="/programs#endurance"
                className="hover:text-[#E85D04] transition-colors"
              >
                Endurance
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#E85D04] transition-colors"
              >
                About The Pack
              </Link>
            </li>
            <li>
              <Link
                href="/coaches"
                className="hover:text-[#E85D04] transition-colors"
              >
                Meet the Coaches
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-[#E85D04] transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#E85D04] transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">
            Contact
          </h3>
          <address className="not-italic text-sm space-y-2">
            <p>{siteInfo.address}</p>
            <p>
              <a
                href={`tel:${siteInfo.phoneTel}`}
                className="hover:text-[#E85D04] transition-colors"
              >
                {siteInfo.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteInfo.email}`}
                className="hover:text-[#E85D04] transition-colors"
              >
                {siteInfo.email}
              </a>
            </p>
          </address>
          <div className="mt-4 text-sm space-y-1">
            {siteInfo.hours.map(({ days, hours }) => (
              <p key={days}>
                <span className="text-white">{days}:</span> {hours}
              </p>
            ))}
          </div>
          <div className="mt-5 flex gap-4">
            <a
              href="https://www.instagram.com/thepackcrossfit/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Pack CrossFit on Instagram"
              className="hover:text-[#E85D04] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/thepackcrossfit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Pack CrossFit on Facebook"
              className="hover:text-[#E85D04] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 px-4 py-4 text-center text-xs text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} {siteInfo.name} · CrossFit Affiliate
          #35458 · {siteInfo.address}
        </p>
      </div>
    </footer>
  )
}
