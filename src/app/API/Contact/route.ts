import { Resend } from "resend"
import { z } from "zod"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name:    z.string().min(2, "Name too short"),
  email:   z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = schema.parse(body)

    await resend.emails.send({
      from:    "Portfolio <onboarding@resend.dev>",  // use this until we add a domain
      to:      "ygrover178@gmail.com",
      subject: `Portfolio message from ${name}`,
      html:    `<p><b>From:</b> ${name} (${email})</p>
                <p><b>Message:</b></p><p>${message}</p>`,
    })

    return NextResponse.json({ success: true })

  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues[0].message }, { status: 400 })
    }
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}