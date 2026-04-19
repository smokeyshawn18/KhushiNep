import { getDb } from "@/lib/db";
import { messages } from "@/lib/schema";

export async function GET() {
  try {
    const db = getDb();
    const data = await db.select().from(messages);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database fetch error:", error);

    return new Response(
      JSON.stringify({ message: "Failed to load messages." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
