// @flow
import React from 'react';
import { Link } from 'gatsby';

import * as s from '../../styles/components/_common/Header';

import type { ImageSharp, Work } from '../../../entities/types';

type Props = {
  logoImage: ImageSharp,
  works: [Work],
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
    const { logoImage, works } = this.props;
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
            <s.HamburgerIcon id="hamburger" isShow={isShow} />
          </s.HamburgerWrapper>
          <s.HamburgerWrapper isShow={isShow} href="#" onClick={this.toggleIsShowState.bind(this)}>
            <s.CloseIcon id="cross" isShow={isShow} />
          </s.HamburgerWrapper>

          <s.NaviItemList isShow={isShow}>
            <s.TopLink to="/">
              <s.TopButton>Top</s.TopButton>
            </s.TopLink>
            <s.NaviTitle>Works</s.NaviTitle>
            {works.map((work) => (
              <s.NaviLink to={`/works/${work.id}`} key={work.id}>
                <s.NaviButton>{work.title}</s.NaviButton>
              </s.NaviLink>
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

export default Header;
