/**
 * Universal Loaders — React Entry
 *
 * Re-exports all React components and core types.
 */

// Main component
export { Loader } from './Loader';
export type { ReactLoaderProps } from './Loader';

// Shorthand components
export { Spinner } from './components/Spinner';
export { Dots } from './components/Dots';
export { Pulse } from './components/Pulse';
export { Bars } from './components/Bars';
export { Ring } from './components/Ring';
export { Skeleton } from './components/Skeleton';
export { Progress } from './components/Progress';
export { Orbit } from './components/Orbit';

// Re-export core types & utilities
export {
  LOADER_TYPES,
  type LoaderType,
  type LoaderSize,
  type SkeletonVariant,
  type LoaderProps,
  getLoaderClassName,
  getLoaderStyles,
  resolveSize,
} from '../core/index';
