import * as React from 'react';
import Media from 'react-media';
import { breakPoint } from '../styles/var';

const query = `(max-width: ${breakPoint.wide}px)`;

export const renderWithMQ = (mobile, desktop) => (
  <Media query={query}>{(matches) => (matches ? mobile : desktop)}</Media>
);
