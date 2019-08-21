// @flow
import React from 'react';

import * as s from '../../styles/components/work/GoodPoints';
import { anchors } from '../_common/NaviItem';

import type { GoodPoints, ImageSharp } from '../../entities/types';

type Props = {
  goodPoints: GoodPoints,
  images: [ImageSharp],
};

export default ({ goodPoints, images }: Props) => (
  <React.Fragment>
    <s.AnchorPoint id={anchors.goodPoints} />
    <s.GoodPointsTitle>工夫点</s.GoodPointsTitle>
    {goodPoints.map((g, i) => (
      <s.Section key={g.id} index={i}>
        <s.Images index={i}>
          <s.Image resolutions={images[i].resolutions} />
        </s.Images>
        <s.Scripts>
          <s.Title>
            ♦︎
            {g.title}
          </s.Title>
          <s.Description>{g.description}</s.Description>
        </s.Scripts>
      </s.Section>
    ))}
  </React.Fragment>
);
