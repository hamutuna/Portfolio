// @flow
import React from 'react';

import * as s from '../../styles/components/index/FirstView';
import { anchors } from '../_common/NaviItem';

type Props = {};

export default (props: Props) => (
  <s.FirstView id={anchors.firstView}>
    <s.HeartIcon id="firstViewHeart" />
    <s.BGWrapper>
      <s.BGLeft />
      <s.BGCenter />
      <s.BGRight />
    </s.BGWrapper>
    <s.FloatText>想いや課題へ真摯に向き合い、しっかりとあなたに届けたい</s.FloatText>
  </s.FirstView>
);
