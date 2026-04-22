import React from 'react';
import { Loader, type ReactLoaderProps } from '../Loader';

export type PulseProps = Omit<ReactLoaderProps, 'type'>;

export const Pulse: React.FC<PulseProps> = (props) => (
  <Loader type="pulse" {...props} />
);

Pulse.displayName = 'Pulse';
