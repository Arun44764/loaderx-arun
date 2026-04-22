import React from 'react';
import { Loader, type ReactLoaderProps } from '../Loader';

export type ProgressProps = Omit<ReactLoaderProps, 'type'>;

export const Progress: React.FC<ProgressProps> = (props) => (
  <Loader type="progress" {...props} />
);

Progress.displayName = 'Progress';
