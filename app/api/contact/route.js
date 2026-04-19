import { getDb } from "@/lib/db";
import { messages } from "@/lib/schema";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Name, email, and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const db = getDb();

    await db.insert(messages).values({
      name,
      email,
      phone,
      message,
    });

    return new Response(JSON.stringify({ message: "Saved" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database insert error:", error);

    return new Response(
      JSON.stringify({
        message: "Failed to save message.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
