import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog yazıları (Bilgi Bankası): src/content/blog/*.md — dosya adı = adres (eski sitedeki ile aynı)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().default(''),
    categories: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
export const collections = { blog };
