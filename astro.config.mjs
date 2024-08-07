import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: "https://e-social.me",
  integrations: [tailwind(), react()],
  adapter: netlify()
});