import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    draft: z.boolean(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
