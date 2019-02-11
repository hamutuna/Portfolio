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
    <s.Work to={`/works/${id}`} index={index}>
      <s.Image resolutions={image.resolutions} />
      <s.Captions>
        <s.Title>{title}</s.Title>
        <s.Description>{positionAndDate}</s.Description>
      </s.Captions>
    </s.Work>
  );
};
