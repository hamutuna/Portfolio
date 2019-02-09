// @flow
import React from 'react';

import * as s from '../../styles/components/index/FirstView';
import { anchors } from '../_common/NaviItem';

type Props = {
  image: {
    resolutions: {},
  },
};

export default (props: Props) => {
  const { image } = props;

  return (
    <s.FirstView id={anchors.firstView}>
      <s.FloatWrapper />
      <s.Image resolutions={image.resolutions} />
    </s.FirstView>
  );
};
