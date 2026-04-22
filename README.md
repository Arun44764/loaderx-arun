<div align="center">

<img src="https://img.shields.io/badge/LoaderX--Arun-v1.0.4-6366f1?style=for-the-badge&logo=npm&logoColor=white" alt="LoaderX-Arun" />

# ⚡ LoaderX-Arun

### 212+ Next-Generation Animated UI Loaders

**Zero dependencies · Pure CSS core · Works everywhere**

[![npm](https://img.shields.io/npm/v/loaderx-arun?style=flat-square&color=6366f1&logo=npm)](https://www.npmjs.com/package/loaderx-arun)
[![size](https://img.shields.io/bundlephobia/minzip/loaderx-arun?style=flat-square&color=10b981&label=minzipped)](https://bundlephobia.com/package/loaderx-arun)
[![license](https://img.shields.io/npm/l/loaderx-arun?style=flat-square&color=3b82f6)](./LICENSE)
[![frameworks](https://img.shields.io/badge/works_with-React_·_Vue_·_Angular_·_HTML-f59e0b?style=flat-square)](https://github.com/arun/loaderx-arun)

<br />

**React** · **Next.js** · **Vue** · **Angular** · **Vanilla HTML** · **CDN** · **SSR**

</div>

---

## 🌟 Why LoaderX-Arun?

| Feature | Detail |
|---|---|
| 🎨 **212+ Loaders** | Spinners, Dots, Bars, Shapes, Glow, Tech, Nature, Creative & more |
| 📦 **Zero Dependencies** | Pure CSS core — no bloat, no lock-in |
| ⚡ **Plug & Play** | One CSS file. No build step needed for vanilla HTML |
| 🌳 **Tree-Shakable** | Import only the React components you need |
| ♿ **Accessible** | ARIA roles, `aria-live`, and screen reader text built-in |
| 🎛️ **CSS Variables** | Color, size, speed — all customizable via `--ul-*` variables |
| 🌐 **Universal Builds** | ESM · CJS · UMD (CDN) |
| 🖥️ **SSR Safe** | No `window`/`document` errors in Next.js / Node.js |
| 🔷 **Web Components** | `<ul-loader>` custom element works in any framework |

---

## 📦 Installation

```bash
# npm
npm install loaderx-arun

# yarn
yarn add loaderx-arun

# pnpm
pnpm add loaderx-arun
```

### CDN (no install required)

```html
<!-- Stylesheet only — all 212+ loaders -->
<link rel="stylesheet" href="https://unpkg.com/loaderx-arun/dist/style.css" />

<!-- UMD bundle (Web Components + utilities) -->
<script src="https://unpkg.com/loaderx-arun/dist/loaderx-arun.umd.js"></script>
```

---

## 🚀 Quick Start

### Vanilla HTML (no JavaScript needed)

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/loaderx-arun/dist/style.css" />
</head>
<body>

  <!-- Spinner -->
  <div class="ul-loader ul-spinner" role="status" aria-live="polite">
    <span class="ul-sr-only">Loading…</span>
  </div>

  <!-- Dots -->
  <div class="ul-loader ul-dots" role="status" aria-live="polite">
    <span class="ul-dots__dot"></span>
    <span class="ul-sr-only">Loading…</span>
  </div>

  <!-- Neon Ring (glow effect) -->
  <div class="ul-loader ul-neon-ring" role="status" aria-live="polite">
    <span class="ul-sr-only">Loading…</span>
  </div>

  <!-- Custom color & size via CSS variables -->
  <div class="ul-loader ul-spinner"
       style="--ul-color:#ef4444; --ul-size:48px; --ul-speed:0.6s;"
       role="status" aria-live="polite">
    <span class="ul-sr-only">Loading…</span>
  </div>

</body>
</html>
```

---

### ⚛️ React / Next.js

```bash
npm install loaderx-arun
```

```tsx
import { Loader, Spinner, Dots, Ring, Bars, Pulse, Progress } from 'loaderx-arun/react';
import 'loaderx-arun/style.css';

export default function App() {
  return (
    <div>
      {/* Basic usage */}
      <Spinner />
      <Dots />
      <Ring />

      {/* With props */}
      <Spinner color="#ef4444" size="lg" speed="0.5s" />
      <Loader type="neon-ring" color="#8b5cf6" size="xl" />
      <Loader type="galaxy" color="#06b6d4" />

      {/* Progress bar */}
      <Progress color="#10b981" />

      {/* Custom aria label */}
      <Loader type="dots" label="Fetching your data…" />
    </div>
  );
}
```

---

### 🟢 Vue 3

```bash
npm install loaderx-arun
```

```vue
<template>
  <div>
    <ul-loader type="spinner" color="#3b82f6"></ul-loader>
    <ul-loader type="neon-ring" color="#8b5cf6" size="lg"></ul-loader>
    <ul-loader type="dots-typing" color="#10b981"></ul-loader>
    <ul-loader type="equalizer" color="#f59e0b" size="xl"></ul-loader>
  </div>
</template>

<script setup>
import 'loaderx-arun/web-components'; // registers <ul-loader>
</script>
```

**Vue 3 Vite config** — tell Vue to skip custom elements:

```ts
// vite.config.ts
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ul-')
        }
      }
    })
  ]
};
```

---

### 🅰️ Angular

```bash
npm install loaderx-arun
```

**Step 1** — Add CSS to `angular.json`:
```json
"styles": [
  "node_modules/loaderx-arun/dist/style.css"
]
```

**Step 2** — Use in any component:
```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'loaderx-arun/web-components';

@Component({
  selector: 'app-loading',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <ul-loader type="spinner" color="#6366f1"></ul-loader>
    <ul-loader type="bars" color="#ef4444" size="lg"></ul-loader>
    <ul-loader type="radar" color="#10b981"></ul-loader>
  `,
})
export class LoadingComponent {}
```

---

### 🌐 Web Components (Framework-agnostic)

```html
<!-- Register once in your entry -->
<script type="module">
  import 'loaderx-arun/web-components';
</script>

<!-- Use anywhere -->
<ul-loader type="spinner"></ul-loader>
<ul-loader type="dots" color="#10b981" size="lg"></ul-loader>
<ul-loader type="ring-neon" color="#8b5cf6" speed="0.8s"></ul-loader>
<ul-loader type="galaxy" color="#06b6d4" size="xl"></ul-loader>
```

---

## 🎨 Customization

### CSS Variables (all loaders)

| Variable | Default | Description |
|---|---|---|
| `--ul-color` | `#3b82f6` | Primary loader color |
| `--ul-secondary-color` | `rgba(59,130,246,0.2)` | Track / secondary color |
| `--ul-size` | `40px` | Width & height |
| `--ul-speed` | `1s` | Animation duration |
| `--ul-border-width` | `3px` | Border thickness |
| `--ul-dot-size` | `calc(size/4)` | Dot diameter |

### Global Theme Override

```css
/* styles.css or :root block */
:root {
  --ul-color: #8b5cf6;   /* purple theme */
  --ul-size: 48px;
  --ul-speed: 0.75s;
}
```

### Per-instance Override

```html
<div class="ul-loader ul-spinner"
     style="--ul-color:#ef4444; --ul-size:32px; --ul-speed:0.5s;">
</div>
```

### React Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `LoaderType` | `'spinner'` | Loader variant |
| `color` | `string` | `'#3b82f6'` | Primary color |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| string` | `'md'` | Loader size |
| `speed` | `string` | `'1s'` | Animation speed |
| `label` | `string` | `'Loading…'` | Screen reader text |
| `className` | `string` | — | Extra CSS class |

### Size Presets

| Key | Value |
|---|---|
| `sm` | `24px` |
| `md` | `40px` (default) |
| `lg` | `56px` |
| `xl` | `80px` |

---

## 🗂️ Loader Categories (212+ total)

| Category | Count | Examples |
|---|---|---|
| 🌀 **Spinners & Rings** | 33 | `spinner`, `ring-neon`, `gyro`, `cyclone`, `dual-ring-pulse` |
| ⚫ **Dots & Particles** | 24 | `dots-typing`, `fireflies`, `constellation`, `dots-clock` |
| 📊 **Bars & Lines** | 24 | `equalizer`, `waveform`, `spectrum`, `led-bar`, `stretching` |
| 🔷 **Shapes & Geometry** | 27 | `cube-3d`, `hexagon`, `morph-shape`, `yin-yang`, `target` |
| ✨ **Glow & Neon** | 25 | `neon-ring`, `plasma`, `holographic`, `aurora`, `reactor` |
| 💻 **Tech & UI** | 22 | `radar`, `dna`, `glitch`, `matrix`, `biometric`, `qr-scan` |
| 🌿 **Nature** | 19 | `fire-flame`, `snowflake`, `tornado`, `petal-spin`, `meteor-shower` |
| 🎨 **Creative & Fun** | 28 | `pacman`, `jelly`, `confetti`, `heart-beat`, `ripple-send` |

### Sample Loader Classes

```html
<!-- Spinners -->
<div class="ul-loader ul-spinner"></div>
<div class="ul-loader ul-ring-neon"></div>
<div class="ul-loader ul-gyro"></div>
<div class="ul-loader ul-cyclone"></div>

<!-- Dots -->
<div class="ul-loader ul-dots-typing">
  <span class="ul-d"></span><span class="ul-d"></span><span class="ul-d"></span>
</div>
<div class="ul-loader ul-equalizer">
  <span class="ul-d"></span><span class="ul-d"></span>
  <span class="ul-d"></span><span class="ul-d"></span>
  <span class="ul-d"></span><span class="ul-d"></span>
</div>

<!-- Glow -->
<div class="ul-loader ul-plasma"></div>
<div class="ul-loader ul-holographic"></div>
<div class="ul-loader ul-aurora"></div>

<!-- Tech -->
<div class="ul-loader ul-radar"></div>
<div class="ul-loader ul-glitch"></div>

<!-- Nature -->
<div class="ul-loader ul-fire-flame"></div>
<div class="ul-loader ul-tornado">
  <span class="ul-d"></span><span class="ul-d"></span>
  <span class="ul-d"></span><span class="ul-d"></span>
  <span class="ul-d"></span>
</div>

<!-- Creative -->
<div class="ul-loader ul-pacman"></div>
<div class="ul-loader ul-jelly"></div>
<div class="ul-loader ul-heart-beat"></div>
```

---

## ♿ Accessibility

Every loader ships with proper ARIA support out of the box:

```html
<div class="ul-loader ul-spinner"
     role="status"
     aria-live="polite"
     aria-label="Loading content">
  <span class="ul-sr-only">Loading…</span>
</div>
```

- **`role="status"`** — marks it as a live region
- **`aria-live="polite"`** — screen readers announce without interrupting
- **`.ul-sr-only`** — visually hidden text for screen readers

In React, the `label` prop customizes the hidden text:
```tsx
<Spinner label="Uploading your file, please wait…" />
```

---

## 🌐 Browser Support

| Browser | Minimum Version |
|---|---|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13.1+ |
| Edge | 80+ |
| iOS Safari | 13.4+ |
| Android Chrome | 80+ |

> All loaders use standard CSS animations and custom properties. No JavaScript is required for CSS-only usage.

---

## 📦 Package Exports

```
loaderx-arun                → Core types & utilities (ESM/CJS)
loaderx-arun/react          → React wrapper components
loaderx-arun/web-components → <ul-loader> custom element
loaderx-arun/style.css      → Full bundled CSS (212+ loaders)
```

### Build Output

```
dist/
├── core/
│   ├── index.js          (ESM)
│   ├── index.cjs         (CommonJS)
│   └── index.d.ts        (TypeScript types)
├── react/
│   ├── index.js          (ESM)
│   ├── index.cjs         (CommonJS)
│   └── index.d.ts        (TypeScript types)
├── web-components/
│   ├── index.js          (ESM)
│   ├── index.cjs         (CommonJS)
│   └── index.d.ts        (TypeScript types)
├── style.css             (All 212+ loaders — ~30KB)
└── loaderx-arun.umd.js   (UMD for CDN / <script> tag)
```

---

## 🛠️ Development

```bash
# Clone & install
git clone https://github.com/arun/loaderx-arun.git
cd loaderx-arun
npm install

# Build everything (JS + CSS + UMD)
npm run build

# CSS only (fast rebuild for CSS changes)
npm run build:css

# Type check
npm run typecheck

# Preview demo (http://localhost:4242)
npx http-server . -p 4242
# → open http://localhost:4242/examples/vanilla/index.html

# Clean dist folder
npm run clean
```

### Project Structure

```
loaderx-arun/
├── src/
│   ├── core/
│   │   ├── index.ts              ← Types, constants, utilities
│   │   └── styles/
│   │       ├── variables.css     ← CSS custom properties
│   │       ├── base.css          ← Base .ul-loader class
│   │       ├── spinner.css       ← Original 8 loaders
│   │       ├── spinners-advanced.css
│   │       ├── dots-advanced.css
│   │       ├── bars-advanced.css
│   │       ├── shapes.css
│   │       ├── gradients.css
│   │       ├── tech.css
│   │       ├── nature.css
│   │       ├── creative.css
│   │       └── extra.css         ← Extra pack
│   ├── react/                    ← React wrapper components
│   └── web-components/           ← <ul-loader> custom element
├── examples/
│   ├── vanilla/index.html        ← Interactive 212+ loader gallery
│   ├── react/App.tsx
│   └── angular/app.component.ts
├── scripts/
│   └── build-css.mjs             ← CSS bundler script
├── dist/                         ← Build output (git-ignored)
├── tsup.config.ts
├── rollup.config.mjs
└── package.json
```

### Adding a New Loader

1. Add CSS to the appropriate file in `src/core/styles/` (or `extra.css`):
   ```css
   .ul-my-loader {
     width: var(--ul-size);
     height: var(--ul-size);
     /* your animation */
   }
   ```
2. Add the name to `LOADER_TYPES` in `src/core/index.ts`
3. Run `npm run build:css` to regenerate `dist/style.css`
4. Add an entry to the `LOADERS` array in `examples/vanilla/index.html`

---

## 🚢 Publishing

```bash
# 1. Build everything
npm run build

# 2. Preview what will be published
npm pack --dry-run

# 3. Login (first time only)
npm login

# 4. Publish
npm publish
```

**Pre-publish checklist:**
- [ ] Version bumped in `package.json`
- [ ] `npm run build` succeeds
- [ ] Demo page shows all loaders correctly
- [ ] TypeScript types exist in `dist/`
- [ ] `npm pack --dry-run` shows only `dist/` and `README.md`

---

## 🤝 Contributing

Contributions are welcome! To add new loaders:

1. Fork the repository
2. Create a CSS class following the `ul-` prefix convention
3. Use CSS variables (`--ul-color`, `--ul-size`, `--ul-speed`) — no hardcoded values
4. Add to `LOADER_TYPES`, rebuild, and update the demo
5. Open a Pull Request with a screenshot 🎉

---

## 📄 License

[MIT](./LICENSE) © 2024 **Arun**

---

<div align="center">

Made with ❤️ by **Arun** · [npm](https://www.npmjs.com/package/loaderx-arun) · [GitHub](https://github.com/arun/loaderx-arun)

**Star ⭐ the repo if LoaderX-Arun helped you!**

</div>
