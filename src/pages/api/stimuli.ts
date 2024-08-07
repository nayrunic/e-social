import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import { user } from "@/lib/store";

export const POST: APIRoute = async ({ request, redirect }) => { 

    const { data, error } = await supabase.auth.getSession();
    
    const { stimuli_left, answered_questions } = await request.json();

    const response = await supabase
        .from('users')
        .update(
            {   
                stimuli_left,
                study_answers: answered_questions
            })
        .eq('id', data!.session!.user.id);

    if(response.error){
        return new Response(JSON.stringify({message: response.error.message}), { status: 500 });
    }

    return new Response(JSON.stringify({message: "Data actualizada"}), { status: 200 });
}