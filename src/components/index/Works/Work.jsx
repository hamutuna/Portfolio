// @flow
import * as React from 'react';

import * as s from '../../../styles/index/Works/Work';
import type { ImageSharp } from '../../../entities/types';

type Props = {
  id: string,
  image: ImageSharp,
};

export default (props: Props) => {
  const { id, image } = props;
  const isHalf = false; // id === 'project2' || id === 'project3';

  return (
    <s.Work href={`works/${id}`} isHalf={isHalf}>
      <s.Image resolutions={image.resolutions} />
    </s.Work>
  );
};
