// @flow
import React from 'react';

import * as s from '../../styles/index/Footer';
import { anchors } from './NaviItem';

export default () => (
  <s.Footer>
    <nav>
      <ol>
        <s.NaviItem targetId={anchors.profile}>Profile</s.NaviItem>
        <s.NaviItem targetId={anchors.skills}>Skills</s.NaviItem>
        <s.NaviItem targetId={anchors.works}>Works</s.NaviItem>
      </ol>
    </nav>
    <s.Copy>&copy; ️TSUNODA NATSUMI</s.Copy>
  </s.Footer>
);
