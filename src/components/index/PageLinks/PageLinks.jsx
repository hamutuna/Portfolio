// @flow
import React from 'react';

import PageLink from './PageLink';

import * as s from '../../../styles/components/index/PageLinks/PageLinks';
import { anchors } from '../../_common/NaviItem';

import type { PageLink as TLink, ImageSharp } from '../../../entities/types';

type Props = {
  links: [TLink],
  images: {
    [string]: ImageSharp,
  },
};

export default (props: Props) => {
  const { links, images } = props;

  return (
    <s.Section>
      <s.Title id={anchors.works}>Works</s.Title>
      <s.WorksWrapper>
        {links.map((link, i) => (
          <PageLink pageLink={link} index={i} image={images[i]} key={link.id} />
        ))}
      </s.WorksWrapper>
    </s.Section>
  );
};
