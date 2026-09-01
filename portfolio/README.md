# Portfolio Template

A React + Vite + TypeScript + Tailwind portfolio template with a glass-panel
look. Built to be edited, not left as-is — the parts you'll actually touch
are called out below.

## Getting started

```bash
npm install
npm run dev
```

Open the printed localhost URL. Changes hot-reload as you edit.

## Where to put your content

You shouldn't need to touch component files just to add your own info —
that all lives in `src/data/`:

- `src/data/profile.ts` — your name, role, short bio, email, social links
- `src/data/projects.ts` — one object per project (title, description, tags, links)
- `src/data/skills.ts` — skill categories and the items in each

## Where everything else lives

```
src/
  components/
    layout/     Sidebar, background glow, page shell
    ui/         small reusable pieces (GlassCard, SubCard, Badge, SectionHeading, icons)
    sections/   About, Projects, Skills, Contact — one file per section
  data/         your content (see above)
  hooks/        useActiveSection — highlights the sidebar link as you scroll
  types/        shared TypeScript interfaces for the data files
  App.tsx       wires the sections + sidebar together
  index.css     global styles + the .glass-panel utility class
```

## Navigation

The site isn't a scrolling single page — only one section is visible at a
time, and clicking a sidebar link swaps to it with a short fade/slide
handled by `framer-motion` in `App.tsx`. The current section is also stored
in the URL hash (e.g. `#projects`), so links are shareable and the browser
back/forward buttons work.

## Adding a new section

1. Create a component in `src/components/sections/YourSection.tsx`.
2. In `App.tsx`, add it to the `sections` map (key = the id you want in the URL, e.g. `education`).
3. Add a matching entry to `navItems` in `src/components/layout/navItems.ts` — this feeds both the desktop sidebar and the mobile nav bar.

## Styling

Colors, fonts, and the glass-panel styling are defined as Tailwind tokens in
`tailwind.config.js` (`canvas`, `ink`, `line`) and the `.glass-panel` class
in `src/index.css`. The palette is black/white/grey by default — change the
tokens there and it updates everywhere.

## Build

```bash
npm run build
```
