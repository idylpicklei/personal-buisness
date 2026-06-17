import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (contentType.includes("application/json")) {
      payload = (await request.json()) as ContactPayload;
    } else {
      const formData = await request.formData();

      payload = {
        name: formData.get("name"),
        company: formData.get("company"),
        email: formData.get("email"),
        message: formData.get("message"),
        website: formData.get("website"),
      };
    }
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 },
    );
  }

  const honeypot = cleanText(payload.website, 100);

  if (honeypot) {
    return NextResponse.json({ message: "Message sent." });
  }

  const name = cleanText(payload.name, 120);
  const company = cleanText(payload.company, 160);
  const email = cleanText(payload.email, 200).toLowerCase();
  const message = cleanText(payload.message, 3000);

  if (!name || !company || !email || !message) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid business email." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { message: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@dcventures.io";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "DC Ventures <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New partnership inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Company / Network: ${company}`,
        `Business Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New Partnership Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Company / Network:</strong> ${escapeHtml(company)}</p>
          <p><strong>Business Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent." });
  } catch {
    return NextResponse.json(
      { message: "Unable to send message. Please try again later." },
      { status: 500 },
    );
  }
}
