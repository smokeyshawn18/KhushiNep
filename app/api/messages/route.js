import { query } from "@/utils/neonClient";

export async function GET(req) {
  try {
    const messages = await query(
      "SELECT * FROM messages ORDER BY created_at DESC",
    );

    return new Response(JSON.stringify(messages), {
      status: 200,
    });
  } catch (error) {
    console.error("Database fetch error:", error);
    return new Response(
      JSON.stringify({ message: `Failed to fetch messages: ${error.message}` }),
      { status: 500 },
    );
  }
}
