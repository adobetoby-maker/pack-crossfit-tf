"use client"

import { useState } from "react"

type FormState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState("submitting")
    setError("")

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error((body as { error?: string }).error ?? "Something went wrong")
      }

      setState("success")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.")
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <p className="text-xl font-heading font-black uppercase text-green-800 mb-2">
          Message Sent!
        </p>
        <p className="text-green-700">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-bold text-[#111111] mb-1"
        >
          Name <span className="text-[#E85D04]">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full border border-gray-300 rounded px-4 py-3 text-[#111111] focus:outline-none focus:border-[#E85D04]"
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-bold text-[#111111] mb-1"
        >
          Email <span className="text-[#E85D04]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border border-gray-300 rounded px-4 py-3 text-[#111111] focus:outline-none focus:border-[#E85D04]"
          placeholder="jane@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-bold text-[#111111] mb-1"
        >
          Message <span className="text-[#E85D04]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full border border-gray-300 rounded px-4 py-3 text-[#111111] focus:outline-none focus:border-[#E85D04] resize-y"
          placeholder="Tell us what you're looking for..."
        />
      </div>
      {state === "error" && (
        <p className="text-red-600 text-sm" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-[#E85D04] hover:bg-orange-600 disabled:opacity-60 text-white px-8 py-4 font-bold uppercase tracking-wide rounded transition-colors"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  )
}
