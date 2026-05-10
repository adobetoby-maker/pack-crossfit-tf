import { NextResponse } from "next/server"
import { Resend } from "resend"

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@thepackcf.com"
const FROM_EMAIL = process.env.RESEND_FROM ?? "noreply@thepackcf.com"

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { name, email, phone } = body as Record<string, unknown>

  if (
    typeof name !== "string" ||
    !name.trim() ||
    name.length > 100
  ) {
    return NextResponse.json({ error: "Valid name is required" }, { status: 400 })
  }

  if (typeof email !== "string" || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Valid email is required" },
      { status: 400 }
    )
  }

  if (typeof phone !== "undefined" && typeof phone !== "string") {
    return NextResponse.json(
      { error: "Invalid phone number" },
      { status: 400 }
    )
  }

  try {
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Foundations Sign-Up — ${name.trim()}`,
      text: [
        "New Foundations registration:",
        "",
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        phone ? `Phone: ${String(phone).trim()}` : "Phone: not provided",
        "",
        "Follow up to schedule their first Foundations session.",
      ].join("\n"),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Failed to submit registration. Please try again." },
      { status: 500 }
    )
  }
}
