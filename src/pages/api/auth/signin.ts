import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import { setAnsweredQuestions, setProgress, setStimuliLeft, setUser } from "@/lib/store";

const STATIC_PASSWORD =  "password";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();

  if (!email) {
    return new Response(JSON.stringify({message: "Debe enviar un usuario"}), { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: `${email}@e-social.me`,
    password: STATIC_PASSWORD,
  });

  if (error) {
    return new Response(JSON.stringify({message: error.message}), { status: 500 });
  }

  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  const loggedUser = (await supabase.from('users').select().eq('id', `${data!.user!.id}`)).data;
  let isUserProfileComplete = false;
  if(loggedUser){
    setUser(loggedUser[0]);
    setStimuliLeft(loggedUser[0].stimuli_left);
    setAnsweredQuestions(loggedUser[0].study_answers);
    setProgress(loggedUser[0].stimuli_left.length);
    isUserProfileComplete = loggedUser[0].profile_completed;
  }

  if(isUserProfileComplete) {
    return redirect("/feed");
  }

  return redirect('/profile');

};