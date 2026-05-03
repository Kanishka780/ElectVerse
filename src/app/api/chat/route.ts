// THIS ROUTE IS DEPRECATED — DO NOT USE
// All AI calls go through /api/ai/route.ts

export async function POST() {
  return Response.json({ error: "Deprecated. Use /api/ai instead." }, { status: 410 });
}
