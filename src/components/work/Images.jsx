// @flow
import React from 'react';

import * as s from '../../styles/components/work/Images';
import { anchors } from '../_common/NaviItem';

import type { ImageSharp } from '../../entities/types';

type Props = {
  images: [ImageSharp],
};

export default ({ images }: Props) => (
  <React.Fragment>
    <s.AnchorPoint id={anchors.documents} />
    {images.map((d, i) => (
      <s.Image resolutions={d.resolutions} alt={`image${i}`} key={d.resolutions.src} index={i} />
    ))}
  </React.Fragment>
);
