// @flow
import React from 'react';
import { Link } from 'gatsby';

import * as s from '../../styles/components/_common/Header';

import injectNaviItems from '../_hoc/injectNaviItems';

import type { NaviItem } from '../_hoc/injectNaviItems';
import type { ImageSharp } from '../../../entities/types';

type Props = {
  items: NaviItem[],
  hamburgerImage: ImageSharp,
  closeImage: ImageSharp,
  logoImage: ImageSharp,
};

class Header extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
  }

  toggleIsShowState() {
    const { isShow } = this.state;
    const nextIsShowState = !isShow;

    if (nextIsShowState) {
      document.body.classList.add('hamburger-opened');
    } else {
      document.body.classList.remove('hamburger-opened');
    }
    this.setState({
      isShow: nextIsShowState,
    });
  }

  render() {
    const { items, hamburgerImage, closeImage, logoImage } = this.props;
    const { isShow } = this.state;

    return (
      <s.Header
        isShow={isShow}
        onClick={() => {
          if (isShow) {
            this.toggleIsShowState.bind(this)();
          }
        }}
      >
        <s.Navi
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <s.HamburgerWrapper isShow={isShow} href="#" onClick={this.toggleIsShowState.bind(this)}>
            <s.HamburgerImage resolutions={hamburgerImage.resolutions} isShow={isShow} />
          </s.HamburgerWrapper>
          <s.HamburgerWrapper isShow={isShow} href="#" onClick={this.toggleIsShowState.bind(this)}>
            <s.CloseImage resolutions={closeImage.resolutions} isShow={isShow} />
          </s.HamburgerWrapper>

          <s.NaviItemList isShow={isShow}>
            {items.map((item) => (
              <s.NaviItem targetId={item.id} key={item.id}>
                {item.text}
              </s.NaviItem>
            ))}
          </s.NaviItemList>
          <s.LogoWrapper isShow={isShow}>
            <Link
              to="/"
              onClick={() => {
                if (isShow) {
                  this.toggleIsShowState.bind(this)();
                }
              }}
            >
              <s.LogoImage resolutions={logoImage.resolutions} isShow={isShow} />
            </Link>
          </s.LogoWrapper>
        </s.Navi>
      </s.Header>
    );
  }
}

export default injectNaviItems(Header);
