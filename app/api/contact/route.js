import { supabase } from "@/utils/supabaseClient";

export async function POST(req) {
  console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log(
    "Supabase Key:",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Defined" : "Undefined"
  );

  try {
    const { name, email, phone, message } = await req.json();

    const { error } = await supabase
      .from("messages")
      .insert({ name, email, phone, message, created_at: new Date() });

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response(
        JSON.stringify({ message: `Submission failed: ${error.message}` }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ message: "Message sent!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
