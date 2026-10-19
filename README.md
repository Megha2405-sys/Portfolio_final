# Harshini Meghana Kotha — Portfolio

A React portfolio with a small, custom Three.js scene built using React Three Fiber. The 3D visual is decorative and lightweight; the rest of the page remains ordinary semantic HTML and works without interacting with the scene.

## Run locally

```bash
npm install
npm run dev
```

Vite prints a local URL after it starts.

## Build and preview

```bash
npm run build
npm run preview
```

## Customize

- Update profile, contact details, skills, pipeline stages, and verified project entries in `data.js`.
- `projects` is intentionally empty until real project details are available; the page labels those spaces as work in progress.
- The supplied resume is served from `public/meghana.pdf` and linked from the hero and resume section.
- The 3D scene respects reduced-motion preferences and includes a CSS fallback if WebGL cannot render.

## Deploy

Deploy the output from `dist/` to a static host. No server-side runtime is needed.
