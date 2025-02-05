import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => { 

    const user = await supabase.auth.getUser();
    
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
        .eq('id', user.data.user?.id);

    if(response.error){
        return new Response(JSON.stringify({error: response.error.message}), { status: 500 });
    }

    return new Response(JSON.stringify({message: "Data actualizada", table}), { status: 200 });
}