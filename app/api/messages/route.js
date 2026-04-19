import { db } from "@/lib/db";
import { messages } from "@/lib/schema";

export async function GET() {
  const data = await db.select().from(messages);

  return new Response(JSON.stringify(data));
}
