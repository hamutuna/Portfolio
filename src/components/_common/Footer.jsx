// @flow
import React from 'react';

import * as s from '../../styles/components/_common/Footer';

import injectNaviItems from '../_hoc/injectNaviItems';

import type { NaviItem } from '../_hoc/injectNaviItems';

type Props = {
  items: NaviItem[],
};

const Footer = (props: Props) => {
  const { items } = props;
  return (
    <s.Footer>
      <nav>
        <ol>
          {items.map((item) => (
            <s.NaviItem targetId={item.id} key={item.id}>
              {item.text}
            </s.NaviItem>
          ))}
        </ol>
      </nav>
      <s.Copy>&copy; ️TSUNODA NATSUMI</s.Copy>
    </s.Footer>
  );
};

export default injectNaviItems(Footer);
