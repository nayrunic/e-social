import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, redirect, cookies }) => { 

    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");

    const {data, error} = await supabase.auth.setSession({
        refresh_token: refreshToken!.value,
        access_token: accessToken!.value,
    });
    
    const { stimuli_left, answered_questions, feed_done } = await request.json();

    const response = await supabase
        .from('users')
        .update(
            {   
                stimuli_left,
                study_answers: answered_questions,
                feed_done
            })
        .eq('id', data.user!.id);

    if(response.error){
        return new Response(JSON.stringify({message: response.error.message}), { status: 500 });
    }

    return new Response(JSON.stringify({message: "Data actualizada"}), { status: 200 });
}