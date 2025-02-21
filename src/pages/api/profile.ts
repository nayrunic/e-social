import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import { getTitles } from "@/lib/data";

export const POST: APIRoute = async ({ request, redirect, cookies }) => { 

    const body = await request.json()

    console.log("Body profile: ",body)
    
    const {name, age, country, genre, studies, social_hours, use_social, biological_sex, social_since, actual_email} = body;

    if(!name || !age || !country || !genre || !studies || !social_hours || !use_social || !biological_sex || !social_since) {
        return new Response(JSON.stringify({error: { message: "Por favor completa todos los campos", status: 400 }}));
    }

    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");

    const session = await supabase.auth.setSession({
        refresh_token: refreshToken!.value,
        access_token: accessToken!.value,
    });

    console.log("Usuario: ",session.data.user);

    try {

        const {data, error} = await supabase
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
                actual_email: actual_email ? actual_email : null
            })
        .eq('id', session.data.user?.id)
        .select()

        if(error){
            return new Response(JSON.stringify({error: { message: "Server Error", status: 500}}));
        }

        console.log("Supabase data: ", data)
        console.log("Supabase error: ", error)
    
        return new Response(JSON.stringify({data: { user: data[0], status: 200}}));
    } catch (error) {
        return new Response(JSON.stringify({error: { message: "Server Error", status: 500}}));
    }






}