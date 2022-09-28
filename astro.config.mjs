import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), svelte(), partytown(), react()],
  site: "https://www.josephshambrook.dev"
});