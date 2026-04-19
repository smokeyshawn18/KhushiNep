import { query } from "@/utils/neonClient";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    await query("DELETE FROM messages WHERE id = $1", [id]);

    return new Response(
      JSON.stringify({ message: "Message deleted successfully" }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Database delete error:", error);
    return new Response(
      JSON.stringify({ message: `Failed to delete message: ${error.message}` }),
      { status: 500 },
    );
  }
}
