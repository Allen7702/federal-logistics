import { NextResponse } from "next/server";
import { company } from "@/lib/site";

export const runtime = "nodejs";

type Payload = Record<string, unknown>;

const required = ["name", "email", "phone", "service", "cargo"] as const;

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Enquiry endpoint. Sends through Resend when RESEND_API_KEY is configured;
 * otherwise the enquiry is logged so nothing is lost before mail is wired up.
 */
export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Spam protection: hidden honeypot plus a minimum fill time.
  if (clean(body.companyWebsite)) {
    return NextResponse.json({ ok: true });
  }
  if (typeof body.elapsedMs === "number" && body.elapsedMs < 2500) {
    return NextResponse.json({ ok: true });
  }

  const missing = required.filter((key) => !clean(body[key]));
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 422 },
    );
  }

  const email = clean(body.email, 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  const enquiry = {
    name: clean(body.name, 200),
    email,
    phone: clean(body.phone, 60),
    service: clean(body.service, 120),
    origin: clean(body.origin, 200),
    destination: clean(body.destination, 200),
    cargo: clean(body.cargo),
    timeline: clean(body.timeline, 200),
    extra: clean(body.extra),
    receivedAt: new Date().toISOString(),
  };

  const lines = [
    `Name / Company: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone}`,
    `Service: ${enquiry.service}`,
    enquiry.origin && `Origin: ${enquiry.origin}`,
    enquiry.destination && `Destination: ${enquiry.destination}`,
    `Cargo / procurement: ${enquiry.cargo}`,
    enquiry.timeline && `Timeline: ${enquiry.timeline}`,
    enquiry.extra && `Additional message: ${enquiry.extra}`,
    `Received: ${enquiry.receivedAt}`,
  ].filter(Boolean) as string[];

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[quote] enquiry received (mail not configured)\n" + lines.join("\n"));
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.QUOTE_FROM_EMAIL ?? "website@federallogisticsgroup.co.tz",
        to: [process.env.QUOTE_TO_EMAIL ?? company.email],
        reply_to: enquiry.email,
        subject: `Quote request — ${enquiry.service} — ${enquiry.name}`,
        text: lines.join("\n"),
      }),
    });
    if (!res.ok) throw new Error(await res.text());
  } catch (error) {
    console.error("[quote] delivery failed", error, lines.join("\n"));
    return NextResponse.json(
      {
        ok: false,
        error: `We could not send your enquiry. Please email ${company.email} or call ${company.phone}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
