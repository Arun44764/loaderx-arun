import React from 'react';
import { Loader, type ReactLoaderProps } from '../Loader';

export type OrbitProps = Omit<ReactLoaderProps, 'type'>;

export const Orbit: React.FC<OrbitProps> = (props) => (
  <Loader type="orbit" {...props} />
);

Orbit.displayName = 'Orbit';
