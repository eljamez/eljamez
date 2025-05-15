import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "noreply@bleepsandbloops.com";

export async function POST(req: NextRequest) {
  try {
    if (!TO_EMAIL) {
      return NextResponse.json(
        { error: "Recipient email not configured" },
        { status: 500 }
      );
    }

    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const html = `
      <h2>Contact Form Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New Contact Form Submission from ${name} (eljamez.com)`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
