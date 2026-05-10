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

  const { name, email, message } = body as Record<string, unknown>

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

  if (
    typeof message !== "string" ||
    !message.trim() ||
    message.length > 2000
  ) {
    return NextResponse.json(
      { error: "Message is required (max 2000 characters)" },
      { status: 400 }
    )
  }

  try {
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Contact Form Submission — ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
