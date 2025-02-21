import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, redirect, cookies }) => { 

    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");

    const session = await supabase.auth.setSession({
        refresh_token: refreshToken!.value,
        access_token: accessToken!.value,
    });
    
    const { table, answers } = await request.json();

    const response = await supabase
        .from('users')
        .update(
            {   
                 [table]: {
                    answers,
                },
                [`${table}_done`]: true
            })
        .eq('id', session.data.user?.id);

    if(response.error){
        return new Response(JSON.stringify({error: response.error.message}), { status: 500 });
    }

    return new Response(JSON.stringify({message: "Data actualizada", table}), { status: 200 });
}