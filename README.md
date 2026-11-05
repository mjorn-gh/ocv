# Portfolio and online CV of **Elias Mjøen**

Source of [elias.mjoen.ch](https://elias.mjoen.ch/): a single-page portfolio and a printable CV, both built from the same content files. The CV is rendered to a PDF at build time, so the downloadable `cv.pdf` always matches the site.

I designed the logo, styles and layout myself in [Figma](https://www.figma.com/).

## Stack

- [Astro](https://astro.build/) as a static site generator
- [Bun](https://bun.sh/) as package manager and script runner
- [Playwright](https://playwright.dev/) (headless Chromium) to render the CV to PDF
- Self-hosted fonts via Fontsource: Hanken Grotesk and IBM Plex Mono
- Hosted on [GitHub Pages](https://pages.github.com/)

## Getting started

```sh
bun install
bunx playwright install chromium   # once, for the CV PDF
bun run dev
```

The site runs at <http://localhost:4321>. In dev, `/cv` shows the CV page and `/cv.pdf` renders a fresh PDF on request.

| Command            | What it does                                        |
| ------------------ | --------------------------------------------------- |
| `bun run dev`      | Start the dev server                                |
| `bun run build`    | Build the site to `dist/`, including `dist/cv.pdf`  |
| `bun run preview`  | Serve the built site locally                        |
| `bun run deploy`   | Build and publish `dist/` to the `gh-pages` branch  |
| `bunx astro check` | Type-check the project                              |

## Editing content

All content lives in `src/data/`:

- `profile.ts`: name, role, location, about text and links
- `career.yaml`: career and education entries, newest first by start date
- `projects.yaml`: projects shown on the site, with images from `src/assets/projects/`

Each career entry can list `highlights`, `skills` and `languages`. The CV collects the skills and languages from all entries and removes duplicates, so add a skill to the entry where you used it. A language level in brackets, such as `English (C1)`, is kept wherever any entry gives one.

The CV is a single fixed A4 page. If its content gets too tall, the build logs a warning that the bottom of the page is cut off.

## Project structure

```
src/
  components/    page sections, logo and background
  data/          content (see above)
  layouts/       HTML shell, theme script
  lib/           content helpers (sorting, skills, languages)
  pages/         index.astro (site) and cv.astro (printable CV)
  styles/        theme tokens and shared styles
integrations/
  cv-pdf.ts      renders /cv to cv.pdf in dev and build
public/          favicons, manifest, CNAME
```

The site follows the visitor's light or dark preference, and a toggle in the header stores their choice. Background shapes are static. Only the hero logo moves, and it stays still when the system asks for reduced motion.
