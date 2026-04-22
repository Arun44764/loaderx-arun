import React from 'react';
import { Loader, type ReactLoaderProps } from '../Loader';

export type SpinnerProps = Omit<ReactLoaderProps, 'type'>;

export const Spinner: React.FC<SpinnerProps> = (props) => (
  <Loader type="spinner" {...props} />
);

Spinner.displayName = 'Spinner';
