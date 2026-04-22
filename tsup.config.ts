import { defineConfig } from 'tsup';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Read all CSS files and concatenate them for injection
function getAllCSS(): string {
  const stylesDir = resolve(__dirname, 'src/core/styles');
  const files = [
    'variables.css',
    'base.css',
    'spinner.css',
    'dots.css',
    'pulse.css',
    'bars.css',
    'ring.css',
    'skeleton.css',
    'progress.css',
    'orbit.css',
  ];
  return files
    .map((f) => readFileSync(resolve(stylesDir, f), 'utf-8'))
    .join('\n');
}

export default defineConfig([
  // ── Core build ─────────────────────────────────────────
  {
    entry: { 'core/index': 'src/core/index.ts' },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    splitting: false,
    target: 'es2020',
    outDir: 'dist',
    outExtension({ format }) {
      return { js: format === 'esm' ? '.js' : '.cjs' };
    },
  },

  // ── React build ────────────────────────────────────────
  {
    entry: { 'react/index': 'src/react/index.ts' },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    splitting: false,
    target: 'es2020',
    outDir: 'dist',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    outExtension({ format }) {
      return { js: format === 'esm' ? '.js' : '.cjs' };
    },
  },

  // ── Web Components build ───────────────────────────────
  {
    entry: { 'web-components/index': 'src/web-components/index.ts' },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    splitting: false,
    target: 'es2020',
    outDir: 'dist',
    // Inline the CSS as a string for Shadow DOM
    loader: { '.css': 'text' },
    outExtension({ format }) {
      return { js: format === 'esm' ? '.js' : '.cjs' };
    },
  },
]);
