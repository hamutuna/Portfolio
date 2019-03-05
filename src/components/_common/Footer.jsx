// @flow
import React from 'react';

import * as s from '../../styles/components/_common/Footer';

import injectNaviItems from '../_hoc/injectNaviItems';
import { anchors } from './NaviItem';

import type { NaviItem } from '../_hoc/injectNaviItems';

const Footer = () => (
  <s.Footer>
    <nav>
      <s.PageTop
        href="#"
        onClick={() => {
          const target = document.querySelector(`#${anchors.firstView}`);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
            });
          }
        }}
      >
        <s.PageTopIcon id="topArrow" />
        <s.PageTopText>PAGE TOP</s.PageTopText>
      </s.PageTop>
    </nav>
    <s.Copy>&copy;tuna All rights reserved.</s.Copy>
  </s.Footer>
);

export default injectNaviItems(Footer);
