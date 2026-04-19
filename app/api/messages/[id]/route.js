import { db } from "@/lib/db";
import { messages } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await db.delete(messages).where(eq(messages.id, Number(id)));

    return new Response(
      JSON.stringify({ message: "Message deleted successfully" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Database delete error:", error);

    return new Response(
      JSON.stringify({
        message: "Failed to delete message",
        error: error.message,
      }),
      { status: 500 },
    );
  }
}
