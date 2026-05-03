# CLAUDE.md

## About this site
Personal portfolio for Gabriel Brueckner, a Strategic Product Designer with ~10
years of experience based in London. The site is aimed at potential clients and
employers — it needs to communicate credibility.

## Commands
- Dev server: `npm run dev` (localhost:4321)
- Build: `npm run build` (runs `astro check` first, then `astro build`)
- Preview: `npm run preview`
- Type check only: `npm run astro check`

## Stack
- Astro 5, MDX, TypeScript (strict)
- Tailwind CSS v4 via Vite plugin — no tailwind.config.js, config lives in global.css
- Motion library for scroll animations
- Font: Figtree (loaded via global.css)

## Path aliases (tsconfig.json)
- `@layouts/*` → src/layouts/
- `@components/*` → src/components/
- `@content-blocks/*` → src/components/content-blocks/
- `@utils/*` → src/utils/
- `@content/*` → src/content/
- `@ui-library` → src/components/ui-library/index.ts (named exports, no wildcard)

## Content collections (src/content.config.ts)
- `project` — MDX files in src/content/projects/, schema requires: title, slug, subtitle, tags, featured, featureImageSmall, featureImageLarge, publishDate, description
- `post` — MD files in src/content/posts/, schema requires: title, slug, publishDate, description, featured, author, image {url, alt}, tags
- `uiComponent` — internal, used only for /documentation pages

## Component structure
- UI primitives: import from `@ui-library` (Button, Typography, etc.)
- Content blocks: import individually from `@content-blocks/BlockName/BlockName.astro`
- Page-level components: import from `@components/ComponentName.astro`

## Conventions observed in code
- Max content width: `max-w-7xl` with `px-6 lg:px-8`
- 12-column grid: `grid-cols-12` with content typically in `col-start-2 col-span-10`
- Spacing scale: `mb-16 md:mb-48` for section gaps
- Images imported directly as Astro assets (not public/ URLs) for optimisation
- No custom CSS — Tailwind utility classes only
