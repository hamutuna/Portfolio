// @flow
import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import * as s from '../../styles/components/_common/Header';

import type { ImageSharp, PageLink } from '../../../entities/types';

type Props = {
  logoImage: ImageSharp,
  links: [PageLink],
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

const LinkItem = (props: { isCurrentPage: boolean, link: PageLink }) => {
  const { link, isCurrentPage } = props;

  if (/^http(s):\/\//.test(link.url)) {
    return (
      <s.NaviLinkExternal href={link.url} isCurrentPage={isCurrentPage}>
        <s.NaviButton onTouchStart={() => {}}>
          {link.title}
          <s.ExternalIcon id="externalLink" />
        </s.NaviButton>
      </s.NaviLinkExternal>
    );
  }

  return (
    <NaviLink to={link.url} isCurrentPage={isCurrentPage}>
      <s.NaviButton onTouchStart={() => {}}>{link.title}</s.NaviButton>
    </NaviLink>
  );
};

class Header extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isShow: false,
      location: '',
    };
    document.body.classList.remove('hamburger-opened');
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

  isCurrentPage(pageUrl) {
    const { location } = this.state;

    if (pageUrl === '/') {
      return location === '/' || location === '/portfolio/'; // ローカル用と本番環境用
    }

    return location.includes(pageUrl);
  }

  render() {
    const { logoImage, links } = this.props;
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
            <NaviLink to="/" isCurrentPage={this.isCurrentPage('/')}>
              <s.NaviButton onTouchStart={() => {}}>Top</s.NaviButton>
            </NaviLink>
            <s.TitleWrapper>
              <s.NaviTitle>Works</s.NaviTitle>
              <s.HorizontalLine />
            </s.TitleWrapper>
            {links.map((link) => (
              <LinkItem link={link} isCurrentPage={this.isCurrentPage(link.url)} key={link.id} />
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
