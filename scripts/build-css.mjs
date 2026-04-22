/**
 * Post-build script: concatenates all CSS files into dist/style.css
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const stylesDir = resolve(__dirname, '../src/core/styles');
const distDir = resolve(__dirname, '../dist');

const files = [
  'variables.css', 'base.css',
  'spinner.css', 'dots.css', 'pulse.css', 'bars.css',
  'ring.css', 'skeleton.css', 'progress.css', 'orbit.css',
  'spinners-advanced.css', 'dots-advanced.css', 'bars-advanced.css',
  'shapes.css', 'gradients.css', 'tech.css', 'nature.css', 'creative.css', 'extra.css',
];

// Ensure dist exists
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

const banner = `/* LoaderX-Arun v1.0.0 | MIT License | https://github.com/arun/loaderx-arun */\n`;

const combined = files
  .map((f) => readFileSync(resolve(stylesDir, f), 'utf-8'))
  .join('\n');

writeFileSync(resolve(distDir, 'style.css'), banner + combined, 'utf-8');
console.log('✅ dist/style.css generated');
