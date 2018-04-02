// @flow
import React from 'react';

import * as s from '../../styles/index/Header';

export default () => (
  <s.Header>
    <s.Logo />
    <s.Navi>
      <s.NaviItemList>
        <s.NaviItem>Profile</s.NaviItem>
        <s.NaviItem>Skills</s.NaviItem>
        <s.NaviItem>Works</s.NaviItem>
      </s.NaviItemList>
    </s.Navi>
  </s.Header>
);
