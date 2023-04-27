import { vitePreprocess } from "@astrojs/svelte";

/*
 * This file solely exists for Svelte IDE support, and nothing else!
 * see here: https://docs.astro.build/en/guides/upgrade-to/v2/#changed-svelte-ide-support
 */

export default {
  preprocess: vitePreprocess(),
};
