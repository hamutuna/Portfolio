// @flow
import React from 'react';

import * as s from '../../styles/components/_common/Footer';

import injectNaviItems from '../_hoc/injectNaviItems';
import { anchors } from './NaviItem';

import type { NaviItem } from '../_hoc/injectNaviItems';
import type { ImageSharp } from '../../../entities/types';

type Props = {
  items: NaviItem[],
  pageTopImage: ImageSharp,
};

const Footer = (props: Props) => {
  const { items, pageTopImage } = props;
  return (
    <s.Footer>
      <nav>
        <button
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
          <s.PageTopImage resolutions={pageTopImage.resolutions} />
        </button>
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
