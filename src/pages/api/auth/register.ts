import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const body = await request.json()

  const {username} = body;

  if (!username) {
    return new Response(JSON.stringify({message:"Usuario obligatorio", status: 400}));
  }

  const { error, data } = await supabase.auth.signUp({
    email: `${username}@e-social.me`,
    password: 'password',
  });

  if (error) {
    return new Response(JSON.stringify({error: {message: error.message, status: 500}}));
  }

  return new Response(JSON.stringify({message: "Usuario creado exitosamente", status: 201}));
  
};