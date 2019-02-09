// @flow
import React from 'react';

import * as s from '../../styles/components/_common/Header';

import injectNaviItems from '../_hoc/injectNaviItems';

import type { NaviItem } from '../_hoc/injectNaviItems';
import type { ImageSharp } from '../../../entities/types';

type Props = {
  items: NaviItem[],
  hamburgerImage: ImageSharp,
};

const Header = (props: Props) => {
  const { items, hamburgerImage } = props;

  return (
    <s.Header>
      <s.Navi>
        <button
          href="#"
          onClick={() => {
            console.log('hello hamburger');
          }}
        >
          <s.HamburgerImage resolutions={hamburgerImage.resolutions} />
        </button>
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
