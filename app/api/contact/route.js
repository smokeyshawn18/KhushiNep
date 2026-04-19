import { db } from "@/lib/db";
import { messages } from "@/lib/schema";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  await db.insert(messages).values({
    name,
    email,
    phone,
    message,
  });

  return new Response(JSON.stringify({ message: "Saved" }));
}
