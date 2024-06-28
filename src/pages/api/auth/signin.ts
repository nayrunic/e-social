import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Correo electrónico y contraseña obligatorios", { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  const loggedUser = (await supabase.from('users').select().eq('id', `${data.user.id}`)).data;
  let isUserProfileComplete = false;
  if(loggedUser){
    isUserProfileComplete = loggedUser[0].profile_completed;
  }

  if(isUserProfileComplete) {
    return redirect("/instructions");
  }

  return redirect('/profile');

};