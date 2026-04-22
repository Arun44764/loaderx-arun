import React from 'react';
import { Loader, type ReactLoaderProps } from '../Loader';

export type BarsProps = Omit<ReactLoaderProps, 'type'>;

export const Bars: React.FC<BarsProps> = (props) => (
  <Loader type="bars" {...props} />
);

Bars.displayName = 'Bars';
