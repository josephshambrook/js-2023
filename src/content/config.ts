import { defineCollection } from "astro:content";

const bioCollection = defineCollection({});

export const collections = {
  bio: bioCollection,
};
