import { defineConfig } from "astro/config";

// integrations
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

// these plugins come as default with Astro, but cause a race condition
// when combined with other plugins, as the defaults are run after my
// own custom plugins rather than before, and I kind of need them to
// run before! Therefore, taken the manual step of taking the plugins and
// installing them myself
import remarkGfm from "remark-gfm";
import smartypants from "remark-smartypants";

// custom remark or rehype plugins
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  site: "https://www.josephshambrook.dev",
  integrations: [preact(), svelte(), react()],
  markdown: {
    remarkPlugins: [remarkGfm, () => smartypants({ quotes: false })],
    rehypePlugins: [
      rehypeSlug,
      () =>
        rehypeAutolinkHeadings({
          // this is a "hast" element, but I don't want to install hast, so
          // here is what would be output
          content: {
            type: "element",
            tagName: "span",
            properties: {},
            children: [{ type: "text", value: "#" }],
          },
        }),
    ],
    extendDefaultPlugins: false,
  },
});
