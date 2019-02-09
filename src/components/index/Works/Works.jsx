// @flow
import React from 'react';

import Work from './Work';

import * as s from '../../../styles/components/index/Works/Works';
import { anchors } from '../../_common/NaviItem';

import type { Work as TWork, ImageSharp } from '../../../entities/types';

type Props = {
  works: TWork[],
  images: {
    [string]: ImageSharp,
  },
};

export default (props: Props) => {
  const { works, images } = props;

  return (
    <s.Section>
      <h1 id={anchors.works}>Works</h1>
      <s.WorksWrapper>
        {works.map((w, i) => (
          <Work
            id={w.id}
            index={i}
            image={images[w.id]}
            title={w.title}
            positionAndDate={w.positionAndDate}
            key={w.id}
          />
        ))}
      </s.WorksWrapper>
    </s.Section>
  );
};
