import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: "https://e-social.me",
  integrations: [tailwind()],
  adapter: node({
    mode: "standalone"
  })
});