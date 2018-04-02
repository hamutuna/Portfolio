// @flow
import React from 'react';

import Work from './Work';

import * as s from '../../../styles/index/Works/Works';

export default () => {
  const works = ['work1', 'work2', 'work3', 'work4'];

  return (
    <s.Section>
      <h1>Works</h1>
      <s.Description>Description here.</s.Description>
      <s.WorksWrapper>{works.map(w => <Work id={w} key={w} />)}</s.WorksWrapper>
    </s.Section>
  );
};
