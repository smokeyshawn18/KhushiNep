import { supabase } from "@/utils/supabaseClient";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  const { error } = await supabase
    .from("messages")
    .insert({ name, email, phone, message, created_at: new Date() });

  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Submission failed." }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify({ message: "Message sent!" }), {
    status: 200,
  });
}
