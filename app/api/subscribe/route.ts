import { NextResponse } from "next/server";
import { signupSchema } from "@/lib/form-schema";

export async function POST(request: Request) {
  const scriptUrl =
    process.env.GOOGLE_SCRIPT_URL ?? process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!scriptUrl) {
    return NextResponse.json(
      { error: "Form submission is not configured." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid form data." },
      { status: 400 }
    );
  }

  const { fullName, email, phone } = parsed.data;

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        phone: phone ?? "",
      }),
      redirect: "follow",
    });

    const text = await response.text();
    let result: { success?: boolean; error?: string };

    try {
      result = JSON.parse(text) as { success?: boolean; error?: string };
    } catch {
      return NextResponse.json(
        { error: "Unexpected response from submission handler." },
        { status: 502 }
      );
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { error: result.error ?? "Submission failed." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach submission handler." },
      { status: 502 }
    );
  }
}
