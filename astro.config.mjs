import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind()],
  site: 'https://trinhgiaphuc.github.io',

  // Resolve path
  base: '/my-portfolio',
});
