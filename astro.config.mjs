import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: "https://e-social.me",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify()
});