import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projectCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      subtitle: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean(),
      featureImageSmall: image(),
      featureImageLarge: image(),
      detailImageHero: image().optional(),
      detailImageOverlay: image().optional(),
      headerLayout: z.enum(["centered", "imageLeft"]).optional().default("centered"),
      publishDate: z.date(),
      description: z.string(),
    }),
});

const postCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishDate: z.date(),
    description: z.string(),
    featured: z.boolean(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

/*
  Used to build the documentation for the UI Library
*/
const uiComponentCollection = defineCollection({
  loader: glob({
    pattern: "**/documentation.mdx",
    base: "./src/components/ui-library",
  }),
  schema: z.object({
    // id: z.string(),
    title: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  project: projectCollection,
  post: postCollection,
  uiComponent: uiComponentCollection,
};
