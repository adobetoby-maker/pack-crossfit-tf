"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { siteInfo } from "@/lib/siteInfo"

const links = [
  { href: "/programs", label: "Programs" },
  { href: "/schedule", label: "Schedule" },
  { href: "/pricing", label: "Pricing" },
  { href: "/coaches", label: "Coaches" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-[#111111] text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-heading text-xl font-black tracking-tight uppercase text-white hover:text-[#E85D04] transition-colors"
        >
          The Pack CrossFit
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#E85D04] ${
                  pathname === href ? "text-[#E85D04]" : "text-gray-300"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${siteInfo.phoneTel}`}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {siteInfo.phone}
          </a>
          <Link
            href="/new-members"
            className="bg-[#E85D04] hover:bg-orange-600 text-white px-4 py-2 text-sm font-bold uppercase tracking-wide rounded transition-colors"
          >
            Try Foundations — $99
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-gray-800 px-4 py-4 flex flex-col gap-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium uppercase tracking-wide py-2 border-b border-gray-800 transition-colors hover:text-[#E85D04] ${
                pathname === href ? "text-[#E85D04]" : "text-gray-300"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/new-members"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#E85D04] text-white text-center px-4 py-3 font-bold uppercase tracking-wide rounded"
          >
            Try Foundations — $99
          </Link>
          <a
            href={`tel:${siteInfo.phoneTel}`}
            className="text-center text-sm text-gray-400 py-2"
          >
            {siteInfo.phone}
          </a>
        </div>
      )}
    </header>
  )
}
