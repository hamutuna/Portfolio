// @flow
import React from 'react';

import * as s from '../../styles/index/Header';

import injectNaviItems from '../_hoc/injectNaviItems';

import type { NaviItem } from '../_hoc/injectNaviItems';

type Props = {
  items: NaviItem[],
};

const Header = (props: Props) => {
  const { items } = props;

  return (
    <s.Header>
      <a href="/">
        <s.Logo />
      </a>
      <s.Navi>
        <s.NaviItemList>
          {items.map((item) => (
            <s.NaviItem targetId={item.id} key={item.id}>
              {item.text}
            </s.NaviItem>
          ))}
        </s.NaviItemList>
      </s.Navi>
    </s.Header>
  );
};

export default injectNaviItems(Header);
