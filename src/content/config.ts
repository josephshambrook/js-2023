import { defineCollection, z } from "astro:content";

const bioCollection = defineCollection({});

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    // TODO: change the below to actual dates - `.date()`
    publishDate: z.string(),
    lastEditDate: z.string().optional(),
    categories: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  bio: bioCollection,
  posts: postsCollection,
};
