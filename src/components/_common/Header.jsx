// @flow
import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import * as s from '../../styles/components/_common/Header';

import type { ImageSharp, Work } from '../../../entities/types';

type Props = {
  logoImage: ImageSharp,
  works: [Work],
};

type State = {
  isShow: boolean,
  location: string,
};

export const NaviLink = styled(({ isCurrentPage, ...rest }) => <Link {...rest} />)`
  margin-top: 16px;
  &:first-child {
    margin-top: 102px;
  }
  opacity: ${(props: any) => (props.isCurrentPage ? 0.2 : 1)};
  pointer-events: ${(props: any) => (props.isCurrentPage ? 'none' : 'all')};
`;

class Header extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isShow: false,
      location: '',
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      location: window.location.pathname,
    });
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

  isCurrentPage(pageName) {
    const { location } = this.state;

    if (pageName === 'top') {
      return location === '/' || location === '/portfolio/'; // ローカル用と本番環境用
    }

    return location.includes(`/${pageName}`);
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
            <NaviLink to="/" isCurrentPage={this.isCurrentPage('top')}>
              <s.NaviButton onTouchStart={()=>{}}>Top</s.NaviButton>
            </NaviLink>
            <s.TitleWrapper>
              <s.NaviTitle>Works</s.NaviTitle>
              <s.HorizontalLine />
            </s.TitleWrapper>
            {works.map((work) => (
              <NaviLink
                to={`/works/${work.id}`}
                key={work.id}
                isCurrentPage={this.isCurrentPage(work.id)}
              >
                <s.NaviButton onTouchStart={()=>{}}>{work.title}</s.NaviButton>
              </NaviLink>
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
