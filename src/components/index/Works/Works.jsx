// @flow
import React from 'react';

import Work from './Work';

import * as s from '../../../styles/index/Works/Works';
import { anchors } from '../../_common/NaviItem';

import type { Work as TWork } from '../../../entities/types';

type Props = {
  works: TWork[],
};

export default (props: Props) => {
  const { works } = props;

  return (
    <s.Section>
      <h1 id={anchors.works}>Works</h1>
      <s.Description>Description here.</s.Description>
      <s.WorksWrapper>
        {works.map((w) => <Work id={w.id} key={w.id} />)}
      </s.WorksWrapper>
    </s.Section>
  );
};
