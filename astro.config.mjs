import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://staging-cca-bfa-exhibition-2023.joellithgow.com',
  integrations: [svelte()]
});
