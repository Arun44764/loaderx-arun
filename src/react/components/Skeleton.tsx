import React from 'react';
import { Loader, type ReactLoaderProps } from '../Loader';

export type SkeletonProps = Omit<ReactLoaderProps, 'type'>;

export const Skeleton: React.FC<SkeletonProps> = (props) => (
  <Loader type="skeleton" {...props} />
);

Skeleton.displayName = 'Skeleton';
