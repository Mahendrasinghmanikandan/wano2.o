import { NextResponse } from "next/server";
import { site } from "@/content/site";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? body.mobile ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { message: "Please fill in all fields." },
        { status: 400 },
      );
    }

    const upstream = await fetch(site.enquiryApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: site.email,
        subject: `Enquiry from ${name}`,
        name,
        email,
        phone,
        service,
        message,
      }),
    });

    const data = (await upstream.json().catch(() => ({}))) as { message?: string };

    if (!upstream.ok) {
      return NextResponse.json(
        { message: data.message || "Could not send enquiry." },
        { status: upstream.status },
      );
    }

    return NextResponse.json({
      message: data.message || "Email sent successfully",
    });
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
