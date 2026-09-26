# Raghunandhan G — Portfolio

A responsive React portfolio with a dark technical visual palette with mint accents and a terminal-inspired introduction. Includes selected projects with category filters and expandable details, experience, skills, recognition, résumé downloads, and direct contact links.

## Local development

Requires Node.js 22.12+ (or a compatible newer version) and npm.

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run lint
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host. Vite uses relative asset paths so the build can also be served from a subdirectory such as GitHub Pages. Deployment is not configured or published by this change.

## Update content

- `src/App.jsx`: project data, experience, skills, awards, and contact links.
- `src/index.css`: design tokens, layout, project illustrations, and responsive styles.
- The main portfolio is photo-free; `public/profile.png` is retained only for earlier design previews.
- `Raghunandhan_G_AI_Engineer.pdf`: downloadable résumé, bundled by Vite.
- `index.html`: page title and social/search metadata.

Project illustrations are decorative CSS visuals, not product screenshots. Project statistics and experience dates are retained from the original portfolio; review them before publishing. Google Fonts is optional: local system fonts are used if it cannot load. Contact opens the visitor’s email or phone application; there is no backend contact form.

Accessibility includes a skip link, keyboard focus styles, labeled menu and detail buttons, native disclosure controls, and reduced-motion support.
