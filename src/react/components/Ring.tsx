import React from 'react';
import { Loader, type ReactLoaderProps } from '../Loader';

export type RingProps = Omit<ReactLoaderProps, 'type'>;

export const Ring: React.FC<RingProps> = (props) => (
  <Loader type="ring" {...props} />
);

Ring.displayName = 'Ring';
