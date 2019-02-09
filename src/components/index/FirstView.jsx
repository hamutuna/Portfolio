// @flow
import React from 'react';

import * as s from '../../styles/components/index/FirstView';

type Props = {
  image: {
    resolutions: {},
  },
};

export default (props: Props) => {
  const { image } = props;

  return (
    <s.FirstView>
      <s.FloatWrapper />
      <s.Image resolutions={image.resolutions} />
    </s.FirstView>
  );
};
