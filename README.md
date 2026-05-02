# Astral Portfolio Theme

**Astral** is a sleek, minimal portfolio theme built with **Tailwind CSS**. Designed for creative professionals, it showcases your work with a clean, modern aesthetic that emphasizes content and simplicity. The framework-agnostic design means you can integrate Astral into any stack—whether you're using React, Vue, Svelte, or just plain HTML.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── content-blocks/
│   │   │   ├── CenteredTextBlock/
│   │   │   ├── FeaturedGrid/
│   │   │   ├── GridLayout/
│   │   │   ├── StickyContentGrid/
│   │   │   ├── Testimonial/
│   │   │   └── TextImageBlock/
│   │   ├── documentation/
│   │   │   ├── CodeSample.astro
│   │   │   ├── ComponentDocumentationBlock.astro
│   │   │   ├── SecondaryNavigation.astro
│   │   │   ├── SecondaryNavigationCategory.astro
│   │   │   ├── SecondaryNavigationLink.astro
│   │   │   ├── TopLevelNavigation.astro
│   │   │   └── TopLevelNavigationItem.astro
│   │   ├── projects/
│   │   │   └── ProjectOverview.astro
│   │   ├── ui-library/
│   │   │   ├── Button/
│   │   │   │   ├── Button.astro
│   │   │   │   └── documentation.mdx
│   │   │   ├── forms/
│   │   │   │   ├── Input/
│   │   │   │   ├── PhoneNumberInput/
│   │   │   │   └── TextArea/
│   │   │   ├── List/
│   │   │   │   └── List.astro
│   │   │   ├── Tabs/
│   │   │   │   ├── Tab.astro
│   │   │   │   ├── TabPanel.astro
│   │   │   │   └── Tabs.astro
│   │   │   └── Typography/
│   │   │   │   ├── Typography.astro
│   │   │   │   └── documentation.mdx
│   │   ├──Footer.astro
│   │   ├──Hero.astro
│   │   ├──HeroTagline.astro
│   │   ├──Logo.astro
│   │   ├──Navbar.astro
│   │   ├──ScrollingText.astro
│   │   ├──ScrollScalingImage.astro
│   │   └──SocialLinks.astro
│   ├── content/
│   │   ├── posts/
│   │   └── projects/
│   │       └── images/
│   ├── images/
│   │   └── ui/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── Documentation.astro
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   └── [id].astro
│   │   ├── documentation/
│   │   │   ├── index.astro
│   │   │   ├── pages.astro
│   │   │   ├── support.astro
│   │   │   └── ui-library.astro
│   │   ├── projects/
│   │   │   └── [id].astro
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   ├── coming-soon.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   └── projects.astro
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   ├── interpolateColor.ts
│   │   ├── slugify.ts
│   │   └── throttle.ts
│   ├── content.config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where we like to put any Astro/React/Vue/Svelte/Preact components.
- `content-blocks` contains reusable layouts that can be used for different types of content on pages, project or blog articles.
- `documentation` contains components used within the themes documentation templates. This is still WIP and likely will be moved.
- `projects` contains components specific to project listing
- `ui-library` contains generic reusable ui components.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astros documentation](https://docs.astro.build).