// @flow
import React from 'react';

import * as s from '../../styles/components/work/GoodPoints';
import { anchors } from '../_common/NaviItem';

import type { GoodPoints } from '../../entities/types';

type Props = {
  goodPoints: GoodPoints,
};

export default ({ goodPoints }: Props) => (
  <React.Fragment>
    <s.AnchorPoint id={anchors.goodPoints} />
    {goodPoints.map((g, i) => (
      <s.Section key={g.id} index={i}>
        <s.Title>
          ♦︎
          {g.title}
        </s.Title>
        <s.Description>{g.description}</s.Description>
      </s.Section>
    ))}
  </React.Fragment>
);
