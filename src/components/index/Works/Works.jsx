// @flow
import React from 'react';

import Work from './Work';

import * as s from '../../../styles/index/Works/Works';

export default () => {
  const works = ['works/1', 'works/2', 'works/3', 'works/4'];

  return (
    <s.Section>
      <h1>Works</h1>
      <s.Description>Description here.</s.Description>
      <s.WorksWrapper>
        {works.map((w) => <Work id={w} key={w} />)}
      </s.WorksWrapper>
    </s.Section>
  );
};
