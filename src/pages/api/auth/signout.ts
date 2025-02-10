import { supabase } from "@/lib/supabase";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  const { error } = await supabase.auth.signOut()

  if(error){
    return new Response(JSON.stringify({error: { message: error.message, status: 500}}))
  }
  
  return new Response(JSON.stringify({data:{message: "OK", status: 200}, error: null}))
};