import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import { getTitles } from "@/lib/data";
import { getUser, setStimuliLeft } from "@/lib/store";

export const POST: APIRoute = async ({ request, redirect }) => { 
    
    const formData = await request.formData();
    const {name, age, country, genre, studies, social_hours, use_social, biological_sex, social_since} = Object.fromEntries(formData.entries());

    if(!name || !age || !country || !genre || !studies || !social_hours || !use_social || !biological_sex || !social_since) {
        return new Response(JSON.stringify({message: "Por favor completa todos los campos", status: 400}));
    }

    
    const user = getUser();
    console.log("user id: ", user?.id);

    const response = await supabase
        .from('users')
        .update(
            { 
                profile_completed: true,
                name: name,
                age: age,
                country: country,
                genre: genre,
                studies: studies,
                social_hours: social_hours,
                use_social: use_social,
                stimuli_left: getTitles(),
                biological_sex: biological_sex,
                social_since: social_since,
            })
        .eq('id', user?.id)


    if(response.error){
        return new Response(JSON.stringify({message: "Server Error", status: 500}));
    }

    setStimuliLeft(getTitles());

    return new Response(JSON.stringify({message: "Profile Created", status: 200}));

}