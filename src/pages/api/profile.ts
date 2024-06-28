import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => { 
    
    const formData = await request.formData();
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject)

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
                use_social: formDataObject.use_social
            })
        .eq('id', user.data.user?.id);


    console.log(response)
    if(response.error){
        return new Response(response.error.message, { status: 500 });
    }

    return redirect('/instructions');

}