import { NextResponse } from "next/server";
import { fetchXFeed } from "@/lib/x-feed";

export async function GET() {
  try {
    const posts = await fetchXFeed(12);
    return NextResponse.json(
      { success: true, posts },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to load the live trial feed." },
      { status: 502 }
    );
  }
}
