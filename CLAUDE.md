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
- `project` — MDX files in src/content/projects/, schema requires: title, slug, subtitle, tags, featured, featureImageSmall, featureImageLarge, publishDate, description. Optional: `detailImageHero` (detail page full-width image, falls back to featureImageLarge), `detailImageOverlay` (floating overlay on detail page, omit if not needed)
- `post` — MD files in src/content/posts/, schema requires: title, slug, publishDate, description, featured, author, image {url, alt}, tags
- `uiComponent` — internal, used only for /documentation pages

## Component structure
- UI primitives: import from `@ui-library` (Button, Typography, etc.)
- Content blocks: import individually from `@content-blocks/BlockName/BlockName.astro`
- Page-level components: import from `@components/ComponentName.astro`

## Typography
Type scale lives in `src/styles/global.css` — edit there, not in `Typography.astro`. The component is a thin wrapper that applies class names only. Raw markdown sections in MDX need their own `<div class="prose">` wrapper; component blocks do not.

**`body-small` has no CSS class** — removed to avoid Tailwind v4 scanning conflicts. Use `text-sm text-gray-500` directly (or `text-gray-400` for lighter labels).

**MDX usage rule:** Use bare HTML with direct class names inside MDX — not `<Typography>`. The component adds no value in `not-prose` MDX contexts and causes wrapping bugs when content is on a new line. Use `<p class="body">`, `<h2 class="heading2">` etc. directly.

## Conventions observed in code
- Max content width: `max-w-7xl` with `px-6 lg:px-8`
- 12-column grid: `grid-cols-12` with content typically in `col-start-2 col-span-10`
- Spacing scale: `mb-16 md:mb-48` for section gaps
- Images imported directly as Astro assets (not public/ URLs) for optimisation
- Custom type scale in `src/styles/global.css` via `@layer components` — use `.heading1`–`.heading6`, `.body`, and `.caption` for typography. All other styling uses Tailwind utility classes directly.
- Image border radius: `rounded-xl` (12px) across all images and videos — matches project listing cards

## Content blocks reference
All available content blocks are demonstrated at `/projects/content-blocks` (`featured: false`, not shown on homepage). Use it to preview components before implementing in a project. Available blocks:
- `FeatureGrid` / `FeatureGridItem` — context/outcome cards, optional `prefix` prop for numbered steps or metrics
- `CenteredTextBlock` — centred heading + body slot, used for intros and section transitions
- `TextImageBlock` — heading + body slot + image, `imagePosition="left"|"right"`, `imageSize="default"|"large"` (large = ~75% image / 25% text)
- `ScrollScalingImage` — full-width image with scroll-driven scale animation, `startSize` and `endSize` props
- `StickyContentGrid` / `StickyContentGridItem` — sticky left heading column + flowing numbered items on the right
- `ThreeColumnGrid` / `TwoColumnGrid` — image grid wrappers, children passed as slot
- `Testimonial` — single quote block
- `ProjectMeta` — project summary footer bar, props: `role`, `scope`, `collaborators`, `status`. Use at the bottom of every project page.
