import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("=== AI ROUTE HIT ===");

  try {
    const { prompt } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    console.log("API KEY:", apiKey ? `LOADED (${apiKey.substring(0, 8)}...)` : "❌ MISSING");

    if (!apiKey) {
      return NextResponse.json({ error: "API key missing in .env.local" }, { status: 500 });
    }

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return NextResponse.json({ error: "Prompt is empty" }, { status: 400 });
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt.trim() }] }],
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Gemini API error:", data?.error?.message);
      return NextResponse.json(
        { error: data?.error?.message || "Gemini request failed" },
        { status: res.status }
      );
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error("No text in response:", data);
      return NextResponse.json({ error: "No text returned from AI" }, { status: 500 });
    }

    console.log("AI response OK, length:", text.length);
    return NextResponse.json({ text });

  } catch (err: any) {
    console.error("AI ROUTE CRASH:", err.message);
    return NextResponse.json({ error: err.message || "Internal error" }, { status: 500 });
  }
}
