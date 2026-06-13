// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://geisriel.github.io",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/cv":                        "/about",
    "/work":                      "/projects",
    "/aspekt-modular":            "/projects",
    "/work/susuru":               "/projects",
    "/work/spring":               "/projects",
    "/spring":                    "/projects",
    "/work/proof-point-card-design": "/projects",
  },
});
