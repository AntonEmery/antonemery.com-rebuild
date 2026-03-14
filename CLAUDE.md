# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build to ./dist/
npm run preview   # Preview production build
```

There are no test or lint scripts configured.

## Architecture

This is an **Astro 5** static site for a web developer / Celtic fingerstyle guitarist. It uses TypeScript, SCSS, and MDX for blog posts. No client-side framework — Astro outputs minimal/zero JS by default.

### Project Overview
This is a dev website rebuild for antonemery.com.  It contains the following pages.

Home
Work
About

It is intended to be a simple dev portfolio site for Anton Emery, and should his resume in this folder as a base.

### Routing

File-based routing via `src/pages/`:
- `index.astro` → `/`
- `blog.astro` → `/blog/`
- `[...slug].astro` → `/blog/:slug` (dynamic, reads from content collection)
- `work.astro`, `resume.astro` → static pages

### Layout Nesting Pattern

Pages wrap content using layouts in `src/layouts/`:
```
Layout.astro (root HTML, Nav, Footer, meta tags)
  └── HeaderSection.astro (hero/banner)
  └── MainContentSection.astro or MainBlogSection.astro
        └── page content / BlogPostLayout.astro
```

### Blog Content

Blog posts live in `src/content/blog/` as `.mdx` files. The content collection schema is defined in `src/content.config.ts` and requires: `title`, `description`, `keywords`, `postTitle`, `slug`, and `featuredImage` (`url` + `alt`).

### Data Files

`src/data/` contains TypeScript objects (not a CMS or DB):
- `albumData.tsx` — 3 albums with Bandcamp/Spotify/Apple Music links
- `tabs.tsx` — 13 guitar arrangements with tuning, audio, video, and PDF links

### Styling

SCSS with partials imported in `src/styles/styles.scss`. Key files:
- `_variables.scss` — CSS custom properties, spacing scale, colors
- `_breakpoints.scss` — media query mixins
- `_type.scss` — fluid typography using `clamp()`
- BEM-inspired class naming (e.g. `nav__main`, `nav__hamburger`)

Font stack: Lusitana (headings), Mallanna (subheadings), Hind Vadodara (body) — loaded from `@fontsource`.

### Utilities

`src/lib/helpers.js` exports `parseHref()` — used by `Nav.astro` to detect the active nav link based on the current URL.

### Images

Served from `src/assets/`. The `Image` component from `astro:assets` handles optimization. Dynamic glob imports are used in some pages to load all assets at once.

### TypeScript

Extends `astro/tsconfigs/strict`. JSX is configured for React syntax (`react-jsx`) even though no React components are currently used — this is an Astro convention for `.tsx` data files.
