import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();

  if (!email) {
    return new Response("Correo electrónico y contraseña obligatorios", { status: 400 });
  }

  const { error, data } = await supabase.auth.signUp({
    email: `${email}@e-social.me`,
    password: 'password',
  });

  if (error) {
    return new Response(JSON.stringify({message: error.message, status: 500}), { status: 500 });
  }

  return new Response(JSON.stringify({message: "Usuario creado exitosamente", status: 201}), { status: 201 });
  
};