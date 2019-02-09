// @flow
import * as React from 'react';

import * as s from '../../../styles/components/index/Works/Work';
import type { ImageSharp } from '../../../entities/types';

type Props = {
  index: number,
  id: string,
  image: ImageSharp,
};

export default (props: Props) => {
  const { index, id, image, title, positionAndDate } = props;

  return (
    <s.Work href={`works/${id}`} index={index}>
      <s.Image resolutions={image.resolutions} />
      <h2>{title}</h2>
      <p>{positionAndDate}</p>
    </s.Work>
  );
};
