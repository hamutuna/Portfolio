import * as React from 'react';
import Media from 'react-media';
import { breakPoint } from '../styles/var';

const query = `(max-width: ${breakPoint.wide}px)`;

export const renderWithMQ = (MQComponent, props, wideProps) => (
  <Media query={query}>
    {(matches) => (matches ? <MQComponent {...props} /> : <MQComponent {...wideProps} />)}
  </Media>
);

export const componentWithMQ = (BaseComponent, WideComponent) => (props) => (
  <Media query={query}>
    {(matches) => (matches ? <BaseComponent {...props} /> : <WideComponent {...props} />)}
  </Media>
);
