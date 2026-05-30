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
  // ── Extra Pack (33 loaders) ───────────────────────
  'ring-split', 'ring-double', 'windmill', 'fan', 'dots-orbit',
  'dot-trail', 'dots-clock', 'bar-fill', 'bars-random', 'led-bar',
  'progress-radial', 'yin-yang', 'target', 'reactor', 'pulse-rings',
  'orbit-glow', 'matrix', 'power-btn', 'qr-scan', 'meteor-shower',
  'leaf-fall', 'petal-spin', 'heart-beat', 'clock-spin', 'dice',
  'flip-loader', 'typing-cursor', 'circular-progress', 'dual-ring-pulse',
  'stretching', 'bouncing-bar', 'spiral-in', 'ripple-send',
  // ── Robotic (96 loaders) ─────────────────────────
  'robo-arm-1', 'robo-arm-2', 'robo-arm-3', 'robo-arm-4', 'robo-arm-5', 'robo-arm-6', 'robo-arm-7', 'robo-arm-8', 'robo-arm-9', 'robo-arm-10',
  'servo-turn-1', 'servo-turn-2', 'servo-turn-3', 'servo-turn-4', 'servo-turn-5', 'servo-turn-6', 'servo-turn-7', 'servo-turn-8', 'servo-turn-9', 'servo-turn-10',
  'android-eye-1', 'android-eye-2', 'android-eye-3', 'android-eye-4', 'android-eye-5', 'android-eye-6', 'android-eye-7', 'android-eye-8', 'android-eye-9', 'android-eye-10',
  'bot-face-1', 'bot-face-2', 'bot-face-3', 'bot-face-4', 'bot-face-5', 'bot-face-6', 'bot-face-7', 'bot-face-8', 'bot-face-9', 'bot-face-10',
  'gear-train-1', 'gear-train-2', 'gear-train-3', 'gear-train-4', 'gear-train-5', 'gear-train-6', 'gear-train-7', 'gear-train-8', 'gear-train-9', 'gear-train-10',
  'actuator-x-1', 'actuator-x-2', 'actuator-x-3', 'actuator-x-4', 'actuator-x-5', 'actuator-x-6', 'actuator-x-7', 'actuator-x-8', 'actuator-x-9', 'actuator-x-10',
  'cyber-tread-1', 'cyber-tread-2', 'cyber-tread-3', 'cyber-tread-4', 'cyber-tread-5', 'cyber-tread-6', 'cyber-tread-7', 'cyber-tread-8', 'cyber-tread-9',
  'drone-flight-1', 'drone-flight-2', 'drone-flight-3', 'drone-flight-4', 'drone-flight-5', 'drone-flight-6', 'drone-flight-7', 'drone-flight-8', 'drone-flight-9',
  'cyborg-heart-1', 'cyborg-heart-2', 'cyborg-heart-3', 'cyborg-heart-4', 'cyborg-heart-5', 'cyborg-heart-6', 'cyborg-heart-7', 'cyborg-heart-8', 'cyborg-heart-9',
  'sensor-sonar-1', 'sensor-sonar-2', 'sensor-sonar-3', 'sensor-sonar-4', 'sensor-sonar-5', 'sensor-sonar-6', 'sensor-sonar-7', 'sensor-sonar-8', 'sensor-sonar-9',
  // ── Science (97 loaders) ─────────────────────────
  'quantum-spin-1', 'quantum-spin-2', 'quantum-spin-3', 'quantum-spin-4', 'quantum-spin-5', 'quantum-spin-6', 'quantum-spin-7', 'quantum-spin-8', 'quantum-spin-9', 'quantum-spin-10',
  'molecule-bond-1', 'molecule-bond-2', 'molecule-bond-3', 'molecule-bond-4', 'molecule-bond-5', 'molecule-bond-6', 'molecule-bond-7', 'molecule-bond-8', 'molecule-bond-9', 'molecule-bond-10',
  'cosmic-orbit-1', 'cosmic-orbit-2', 'cosmic-orbit-3', 'cosmic-orbit-4', 'cosmic-orbit-5', 'cosmic-orbit-6', 'cosmic-orbit-7', 'cosmic-orbit-8', 'cosmic-orbit-9', 'cosmic-orbit-10',
  'particle-beam-1', 'particle-beam-2', 'particle-beam-3', 'particle-beam-4', 'particle-beam-5', 'particle-beam-6', 'particle-beam-7', 'particle-beam-8', 'particle-beam-9', 'particle-beam-10',
  'gravity-wave-1', 'gravity-wave-2', 'gravity-wave-3', 'gravity-wave-4', 'gravity-wave-5', 'gravity-wave-6', 'gravity-wave-7', 'gravity-wave-8', 'gravity-wave-9', 'gravity-wave-10',
  'fusion-core-1', 'fusion-core-2', 'fusion-core-3', 'fusion-core-4', 'fusion-core-5', 'fusion-core-6', 'fusion-core-7', 'fusion-core-8', 'fusion-core-9', 'fusion-core-10',
  'magnetic-flux-1', 'magnetic-flux-2', 'magnetic-flux-3', 'magnetic-flux-4', 'magnetic-flux-5', 'magnetic-flux-6', 'magnetic-flux-7', 'magnetic-flux-8', 'magnetic-flux-9', 'magnetic-flux-10',
  'beaker-bubble-1', 'beaker-bubble-2', 'beaker-bubble-3', 'beaker-bubble-4', 'beaker-bubble-5', 'beaker-bubble-6', 'beaker-bubble-7', 'beaker-bubble-8', 'beaker-bubble-9',
  'prism-refract-1', 'prism-refract-2', 'prism-refract-3', 'prism-refract-4', 'prism-refract-5', 'prism-refract-6', 'prism-refract-7', 'prism-refract-8', 'prism-refract-9',
  'string-theory-1', 'string-theory-2', 'string-theory-3', 'string-theory-4', 'string-theory-5', 'string-theory-6', 'string-theory-7', 'string-theory-8', 'string-theory-9',
  // ── Technology (97 loaders) ──────────────────────
  'neural-synapse-1', 'neural-synapse-2', 'neural-synapse-3', 'neural-synapse-4', 'neural-synapse-5', 'neural-synapse-6', 'neural-synapse-7', 'neural-synapse-8', 'neural-synapse-9', 'neural-synapse-10',
  'processor-core-1', 'processor-core-2', 'processor-core-3', 'processor-core-4', 'processor-core-5', 'processor-core-6', 'processor-core-7', 'processor-core-8', 'processor-core-9', 'processor-core-10',
  'cyber-shield-1', 'cyber-shield-2', 'cyber-shield-3', 'cyber-shield-4', 'cyber-shield-5', 'cyber-shield-6', 'cyber-shield-7', 'cyber-shield-8', 'cyber-shield-9', 'cyber-shield-10',
  'binary-matrix-1', 'binary-matrix-2', 'binary-matrix-3', 'binary-matrix-4', 'binary-matrix-5', 'binary-matrix-6', 'binary-matrix-7', 'binary-matrix-8', 'binary-matrix-9', 'binary-matrix-10',
  'data-pipeline-1', 'data-pipeline-2', 'data-pipeline-3', 'data-pipeline-4', 'data-pipeline-5', 'data-pipeline-6', 'data-pipeline-7', 'data-pipeline-8', 'data-pipeline-9', 'data-pipeline-10',
  'hologram-grid-1', 'hologram-grid-2', 'hologram-grid-3', 'hologram-grid-4', 'hologram-grid-5', 'hologram-grid-6', 'hologram-grid-7', 'hologram-grid-8', 'hologram-grid-9', 'hologram-grid-10',
  'biometric-scan-1', 'biometric-scan-2', 'biometric-scan-3', 'biometric-scan-4', 'biometric-scan-5', 'biometric-scan-6', 'biometric-scan-7', 'biometric-scan-8', 'biometric-scan-9', 'biometric-scan-10',
  'cloud-sync-1', 'cloud-sync-2', 'cloud-sync-3', 'cloud-sync-4', 'cloud-sync-5', 'cloud-sync-6', 'cloud-sync-7', 'cloud-sync-8', 'cloud-sync-9',
  'laser-optics-1', 'laser-optics-2', 'laser-optics-3', 'laser-optics-4', 'laser-optics-5', 'laser-optics-6', 'laser-optics-7', 'laser-optics-8', 'laser-optics-9',
  'telecom-wave-1', 'telecom-wave-2', 'telecom-wave-3', 'telecom-wave-4', 'telecom-wave-5', 'telecom-wave-6', 'telecom-wave-7', 'telecom-wave-8', 'telecom-wave-9',
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
