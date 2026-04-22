import React from 'react';
import { Loader, type ReactLoaderProps } from '../Loader';

export type DotsProps = Omit<ReactLoaderProps, 'type'>;

export const Dots: React.FC<DotsProps> = (props) => (
  <Loader type="dots" {...props} />
);

Dots.displayName = 'Dots';
