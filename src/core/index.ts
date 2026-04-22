/**
 * LoaderX by Arun — Core Module
 *
 * Provides types, constants, and utility functions shared
 * across React, Web Component, and vanilla CSS consumers.
 */

// ── Loader Types ───────────────────────────────────────────

/** All available loader type identifiers */
export const LOADER_TYPES = [
  // ── Original 8 ──────────────────────────────────
  'spinner', 'dots', 'pulse', 'bars', 'ring', 'skeleton', 'progress', 'orbit',
  // ── Advanced Spinners & Rings ────────────────────
  'spinner-dual', 'spinner-triple', 'spinner-chase', 'spinner-plane', 'spinner-fold',
  'ring-comet', 'ring-dashed', 'ring-gradient', 'ring-clock', 'ring-meteor',
  'ring-solar', 'ring-satellite', 'ring-neon', 'ring-pulse-glow', 'ring-stretch',
  'gyro', 'vortex', 'cyclone', 'helix', 'compass',
  'orbit-dual', 'orbit-triple', 'orbit-comet', 'spiral', 'whirlwind',
  // ── Advanced Dots & Particles ────────────────────
  'dots-flashing', 'dots-carousel', 'dots-elastic', 'dots-typing', 'dots-windmill',
  'dots-grid', 'dots-wave', 'dots-fade', 'dots-spread', 'dots-bricks',
  'bubble-float', 'bubbles-rise', 'fireflies', 'dot-bounce', 'dot-ping',
  'dot-ripple', 'dot-pendulum', 'constellation', 'rain-fall', 'snow-fall', 'dot-chase',
  // ── Advanced Bars & Lines ────────────────────────
  'bars-wave', 'equalizer', 'waveform', 'heartbeat-line', 'signal-bars',
  'spectrum', 'metronome', 'bars-flip', 'bars-zoom', 'line-scale',
  'line-wave', 'progress-glow', 'progress-stripe', 'progress-elastic', 'bar-gradient',
  'bars-fade', 'audio-wave', 'frequency', 'line-bounce', 'bar-slide',
  // ── Shapes & Geometry ────────────────────────────
  'square-spin', 'square-fold', 'cube-3d', 'diamond-spin', 'hexagon',
  'triangle-spin', 'cross-spin', 'star-spin', 'star-pulse', 'infinity',
  'gear', 'gear-dual', 'clock-face', 'plus-spin', 'circle-draw',
  'arc-rotate', 'donut', 'crescent', 'pentagon', 'octagon',
  'spiral-draw', 'morph-shape', 'square-morph', 'flip-3d', 'figure-eight',
  // ── Gradients, Glow & Neon ───────────────────────
  'gradient-spin', 'gradient-pulse', 'rainbow-spin', 'rainbow-pulse',
  'neon-ring', 'neon-dots', 'neon-line', 'neon-pulse', 'neon-glow',
  'plasma', 'plasma-ring', 'aurora', 'galaxy', 'laser',
  'electric-arc', 'fire-ring', 'holographic', 'iridescent', 'chrome',
  'aurora-wave', 'prismatic', 'gradient-wave',
  // ── Tech & UI ────────────────────────────────────
  'circuit', 'wifi', 'battery', 'cpu', 'atom',
  'dna', 'binary', 'terminal', 'network', 'radar',
  'sonar', 'scan-line', 'glitch', 'satellite', 'chip-activity',
  'data-stream', 'ai-pulse', 'biometric', 'server',
  // ── Nature ───────────────────────────────────────
  'wave-ocean', 'ripple-water', 'fire-flame', 'smoke', 'rain-drops',
  'snowflake', 'bubble-rise', 'sun-rays', 'comet', 'lightning',
  'tornado', 'breath', 'crystal', 'blossom', 'tide', 'wind',
  // ── Creative & Fun ───────────────────────────────
  'pacman', 'bouncing-ball', 'pendulum', 'jelly', 'rubber',
  'spring', 'yo-yo', 'coin', 'hourglass', 'magic',
  'refresh', 'upload', 'sync', 'typewriter', 'ellipsis',
  'download', 'swipe', 'confetti', 'tap-ripple', 'countdown', 'firework',
] as const;

/** Union type of all loader identifiers */
export type LoaderType = (typeof LOADER_TYPES)[number];

/** Skeleton shape variants */
export type SkeletonVariant = 'text' | 'circle' | 'rect';

/** Size presets */
export type LoaderSize = 'sm' | 'md' | 'lg' | 'xl' | string;

/** Common configuration properties for all loaders */
export interface LoaderProps {
  /** Which loader style to render */
  type: LoaderType;
  /** Primary color — maps to --ul-color */
  color?: string;
  /** Size — accepts preset (sm/md/lg/xl) or any CSS value */
  size?: LoaderSize;
  /** Animation speed — maps to --ul-speed */
  speed?: string;
  /** Accessible label for screen readers */
  label?: string;
  /** Additional CSS class names */
  className?: string;
  /** Skeleton shape variant (only for type="skeleton") */
  variant?: SkeletonVariant;
}

// ── Size Presets ───────────────────────────────────────────

const SIZE_MAP: Record<string, string> = {
  sm: '24px',
  md: '40px',
  lg: '56px',
  xl: '80px',
};

/** Resolve a LoaderSize to a CSS value */
export function resolveSize(size?: LoaderSize): string | undefined {
  if (!size) return undefined;
  return SIZE_MAP[size] ?? size;
}

// ── Class Name Helpers ────────────────────────────────────

/**
 * Returns the CSS class name(s) for a given loader type.
 *
 * @example
 * getLoaderClassName('spinner') // "ul-loader ul-spinner"
 * getLoaderClassName('skeleton', 'text') // "ul-loader ul-skeleton ul-skeleton--text"
 */
export function getLoaderClassName(
  type: LoaderType,
  variant?: SkeletonVariant,
): string {
  const classes = ['ul-loader', `ul-${type}`];
  if (type === 'skeleton' && variant) {
    classes.push(`ul-skeleton--${variant}`);
  }
  return classes.join(' ');
}

// ── Inline Style Helpers ──────────────────────────────────

/**
 * Builds a CSS-variable style object for inline overrides.
 *
 * @example
 * getLoaderStyles({ color: 'red', size: 'lg', speed: '0.5s' })
 * // { '--ul-color': 'red', '--ul-size': '56px', '--ul-speed': '0.5s' }
 */
export function getLoaderStyles(
  props: Pick<LoaderProps, 'color' | 'size' | 'speed'>,
): Record<string, string> {
  const styles: Record<string, string> = {};
  if (props.color) styles['--ul-color'] = props.color;
  const resolved = resolveSize(props.size);
  if (resolved) styles['--ul-size'] = resolved;
  if (props.speed) styles['--ul-speed'] = props.speed;
  return styles;
}

// ── Inner HTML Helpers ────────────────────────────────────

/**
 * Returns the inner HTML structure needed for a given loader type.
 * Most loaders use CSS pseudo-elements; bars and dots require child elements.
 */
export function getLoaderInnerHTML(type: LoaderType, label?: string): string {
  const srText = `<span class="ul-sr-only">${label || 'Loading…'}</span>`;

  switch (type) {
    case 'bars':
      return (
        '<span class="ul-bars__bar"></span>'.repeat(5) + srText
      );
    case 'dots':
      return '<span class="ul-dots__dot"></span>' + srText;
    default:
      return srText;
  }
}

/**
 * Checks if a given string is a valid loader type.
 */
export function isValidLoaderType(value: string): value is LoaderType {
  return LOADER_TYPES.includes(value as LoaderType);
}
