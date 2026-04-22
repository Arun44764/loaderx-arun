import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Plugin to handle CSS imports as inline strings
function cssInline() {
  return {
    name: 'css-inline',
    transform(code, id) {
      if (id.endsWith('.css')) {
        const css = readFileSync(id, 'utf-8');
        return {
          code: `export default ${JSON.stringify(css)};`,
          map: null,
        };
      }
    },
  };
}

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/loaderx-arun.umd.js',
      format: 'umd',
      name: 'LoaderX',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'jsxRuntime',
      },
    },
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  plugins: [
    cssInline(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      declarationMap: false,
      outDir: 'dist',
    }),
    terser({
      format: { comments: false },
    }),
  ],
};
