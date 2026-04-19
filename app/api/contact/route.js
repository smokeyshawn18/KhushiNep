import { query } from "@/utils/neonClient";

export async function POST(req) {
  const allowedOrigins = [
    "http://localhost:3001",
    "https://khushinep.vercel.app",
  ];
  const origin = req.headers.get("origin");
  if (!allowedOrigins.includes(origin)) {
    return new Response(JSON.stringify({ message: "Invalid origin" }), {
      status: 403,
    });
  }
  try {
    const { name, email, phone, message } = await req.json();

    await query(
      "INSERT INTO messages (name, email, phone, message, created_at) VALUES ($1, $2, $3, $4, $5)",
      [name, email, phone, message, new Date()],
    );

    return new Response(JSON.stringify({ message: "Message sent!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Database insert error:", error);
    return new Response(
      JSON.stringify({ message: `Submission failed: ${error.message}` }),
      { status: 500 },
    );
  }
}
