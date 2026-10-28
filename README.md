# AMF Academy

A static React website built with Vite for GitHub Pages.

## Local preview

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The built site is generated in `dist/`.

## Before publishing

1. Open `vite.config.js`.
2. Replace `/YOUR-REPOSITORY-NAME/` with your exact GitHub repository name, for example `/amf-academy/`.
3. If the repository is named `YOUR-USERNAME.github.io`, use `base: "/"` instead.
4. Replace the Discord and email placeholders in `src/App.jsx` with the real details.
5. Run `npm run build` and publish the contents of `dist/` to the `main` branch root, or configure GitHub Actions to deploy `dist/`.
