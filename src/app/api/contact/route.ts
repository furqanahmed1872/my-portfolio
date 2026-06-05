import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();
    if (!name || !email || !message)
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "furqan@dev.pk",
      reply_to: email,
      subject: `New message from ${name} — ${service ?? "General Inquiry"}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:2rem;background:#f5f3ee;border-radius:12px">
          <h2 style="margin:0 0 1.5rem;font-size:1.4rem;color:#0e0c0a">New Portfolio Message</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:0.6rem 0;color:#7a7570;font-size:0.85rem;width:100px">From</td><td style="padding:0.6rem 0;font-weight:600;color:#0e0c0a">${name}</td></tr>
            <tr><td style="padding:0.6rem 0;color:#7a7570;font-size:0.85rem">Email</td><td style="padding:0.6rem 0"><a href="mailto:${email}" style="color:#1a4fd6">${email}</a></td></tr>
            <tr><td style="padding:0.6rem 0;color:#7a7570;font-size:0.85rem">Service</td><td style="padding:0.6rem 0;color:#0e0c0a">${service ?? "Not specified"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #edeae2;margin:1.5rem 0"/>
          <h3 style="margin:0 0 0.75rem;color:#0e0c0a">Message</h3>
          <p style="color:#3d3a34;line-height:1.8;white-space:pre-wrap">${message}</p>
        </div>`,
    });

    if (error) return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
