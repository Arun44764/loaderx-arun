/**
 * Universal Loaders — React <Loader> Component
 *
 * A versatile wrapper that renders any loader type as an
 * accessible, customizable React component.
 */

import React from 'react';
import type { CSSProperties } from 'react';
import {
  type LoaderType,
  type LoaderSize,
  type SkeletonVariant,
  getLoaderClassName,
  getLoaderStyles,
} from '../core/index';

export interface ReactLoaderProps {
  /** Which loader type to render */
  type: LoaderType;
  /** Primary color — maps to --ul-color CSS variable */
  color?: string;
  /** Size — 'sm' | 'md' | 'lg' | 'xl' or any CSS value */
  size?: LoaderSize;
  /** Animation speed — maps to --ul-speed CSS variable */
  speed?: string;
  /** Accessible label for screen readers (default: "Loading…") */
  label?: string;
  /** Skeleton shape variant — only used with type="skeleton" */
  variant?: SkeletonVariant;
  /** Additional CSS class names */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Additional HTML attributes */
  [key: string]: unknown;
}

export const Loader: React.FC<ReactLoaderProps> = ({
  type,
  color,
  size,
  speed,
  label = 'Loading…',
  variant,
  className = '',
  style = {},
  ...rest
}) => {
  const cssVars = getLoaderStyles({ color, size, speed });
  const combinedStyle: CSSProperties = {
    ...cssVars,
    ...style,
  } as CSSProperties;

  const combinedClassName = [getLoaderClassName(type, variant), className]
    .filter(Boolean)
    .join(' ');

  // Bars & dots need child elements for animation
  const renderInner = () => {
    switch (type) {
      case 'bars':
        return (
          <>
            <span className="ul-bars__bar" />
            <span className="ul-bars__bar" />
            <span className="ul-bars__bar" />
            <span className="ul-bars__bar" />
            <span className="ul-bars__bar" />
          </>
        );
      case 'dots':
        return <span className="ul-dots__dot" />;
      default:
        return null;
    }
  };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={combinedClassName}
      style={combinedStyle}
      {...rest}
    >
      {renderInner()}
      <span className="ul-sr-only">{label}</span>
    </div>
  );
};

Loader.displayName = 'UniversalLoader';
