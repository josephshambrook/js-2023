import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), svelte(), partytown()],
  site: "https://www.josephshambrook.dev",
});
