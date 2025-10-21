import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const res = await fetch("https://fstar.dev/api/people", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Gerekirse Authorization ekle
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return NextResponse.json(data, { status: res.status });
}

export async function GET() {
  const res = await fetch("https://fstar.dev/api/people");
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}