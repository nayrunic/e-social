import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import { getTitles } from "@/lib/data";
import { setStimuliLeft } from "@/lib/store";

export const POST: APIRoute = async ({ request, redirect }) => { 
    
    const formData = await request.formData();
    const formDataObject = Object.fromEntries(formData.entries());

    const user = await supabase.auth.getUser();

    const response = await supabase
        .from('users')
        .update(
            { 
                profile_completed: true,
                name: formDataObject.name,
                age: formDataObject.age,
                country: formDataObject.country,
                genre: formDataObject.genre,
                studies: formDataObject.studies,
                social_hours: formDataObject.social_hours,
                use_social: formDataObject.use_social,
                stimuli_left: getTitles()
            })
        .eq('id', user.data.user?.id);

    if(response.error){
        return new Response(response.error.message, { status: 500 });
    }

    setStimuliLeft(getTitles());

    return redirect('/instructions');

}