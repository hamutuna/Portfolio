// @flow
import React from 'react';

import * as s from '../../styles/index/Header';
import { anchors } from './NaviItem';

export default () => (
  <s.Header>
    <a href="/">
      <s.Logo />
    </a>
    <s.Navi>
      <s.NaviItemList>
        <s.NaviItem targetId={anchors.profile}>Profile</s.NaviItem>
        <s.NaviItem targetId={anchors.skills}>Skills</s.NaviItem>
        <s.NaviItem targetId={anchors.works}>Works</s.NaviItem>
      </s.NaviItemList>
    </s.Navi>
  </s.Header>
);
