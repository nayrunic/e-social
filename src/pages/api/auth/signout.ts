import { setProgress, setStimuliLeft, setUser } from "@/lib/store";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  setUser(null);
  setStimuliLeft([]);
  setProgress(0);
  return redirect("/");
};