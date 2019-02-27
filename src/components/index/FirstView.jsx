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
      <s.BgImage resolutions={image.resolutions} />
      <s.FloatText>想いや課題へ真摯に向き合い、しっかりとあなたに届けたい</s.FloatText>
    </s.FirstView>
  );
};
