import { defineConfig } from "astro/config";

// integrations
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// custom remark or rehype plugins
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  site: "https://www.josephshambrook.dev",
  integrations: [mdx(), svelte(), sitemap()],
  markdown: {
    rehypePlugins: [
      // create an ID attribute for each heading found
      // Astro does do this too, but after plugins are used
      // which makes using this plugin necessary
      rehypeSlug,

      // create little # links in headings
      () =>
        rehypeAutolinkHeadings({
          // this is a "hast" element, but I don't want to install hast, so
          // here is what would be output
          content: {
            type: "element",
            tagName: "span",
            properties: {},
            children: [
              {
                type: "text",
                value: "#",
              },
            ],
          },
        }),
    ],
  },
});
