/**
 * React Example — Universal Loaders
 *
 * Usage:
 *   npx create-vite my-app --template react-ts
 *   npm install universal-loaders
 *   Copy this file to src/App.tsx
 */

import React from 'react';
import {
  Loader,
  Spinner,
  Dots,
  Pulse,
  Bars,
  Ring,
  Skeleton,
  Progress,
  Orbit,
} from 'universal-loaders/react';

// Import the CSS (or link it in index.html)
import 'universal-loaders/style.css';

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
      <h1>Universal Loaders — React Demo</h1>

      <h2>Default loaders</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <Spinner />
        <Dots />
        <Pulse />
        <Bars />
        <Ring />
        <Orbit />
      </div>

      <h2>Skeleton variants</h2>
      <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" size="16px" />
        <Skeleton variant="circle" size="48px" />
        <Skeleton variant="rect" />
      </div>

      <h2>Progress bar</h2>
      <div style={{ maxWidth: '400px' }}>
        <Progress />
      </div>

      <h2>Custom colors &amp; sizes</h2>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Spinner color="#ef4444" size="sm" speed="0.5s" />
        <Ring color="#10b981" size="xl" />
        <Pulse color="#f59e0b" size="32px" />
        <Orbit color="#8b5cf6" size="lg" speed="1.5s" />
      </div>

      <h2>Generic &lt;Loader&gt; component</h2>
      <Loader type="spinner" color="#ec4899" size="md" label="Fetching data…" />
    </div>
  );
}
