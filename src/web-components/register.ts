/**
 * Universal Loaders — Web Components Auto-Registration
 *
 * Import this module for its side-effect: it registers <ul-loader>
 * as a custom element immediately.
 *
 * Usage:
 *   import 'universal-loaders/web-components';
 *   // Now <ul-loader> is available in the DOM
 */

import { registerUlLoader } from './UlLoader';

registerUlLoader();
