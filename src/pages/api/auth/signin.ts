import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

const STATIC_PASSWORD = "password";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const body = await request.json()

  const {username} = body;

  console.log(username);

  if (!username) {
    return new Response(JSON.stringify({ message: "Debe enviar un usuario", status: 400}));
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: `${username}@e-social.me`,
    password: STATIC_PASSWORD,
  });

  if (error) {
    return new Response(JSON.stringify({ message: error.message, status: 500 }));
  }

  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  const {data: userData, error: userError} = await supabase
    .from("users")
    .select()
    .eq("id", `${data!.user!.id}`);


  if(userError){
    return new Response(JSON.stringify({ error: { message: userError.message, status: 500}}), {
      status: 500,
    })
  }

  return new Response(JSON.stringify({data: {user: userData[0], status:200}}));
};
