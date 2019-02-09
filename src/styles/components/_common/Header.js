// @flow
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import { row } from '../../common';
import { pc, colors, headerHeight } from '../../var';

import _NaviItem from '../../../components/_common/NaviItem';

export const Header = styled.header`
  ${row};
  top: 0;
  justify-content: space-between;
  width: 100%;
  height: ${(props: any) => {
    if (props.isShow) {
      return '100vh';
    }

    return '100vh';
  }};
  position: fixed;
  z-index: 1;
  pointer-events: ${(props: any) => {
    if (props.isShow) {
      return 'all';
    }

    return 'none';
  }};
`;

export const Navi = styled.nav`
  ${row}
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 100vw;
  justify-content: flex-end;
  overflow: hidden;
  pointer-events: none;
  }};
`;

export const NaviItemList = styled.ol`
  transform: ${(props: any) => {
    if (props.isShow) {
      return 'translateX(0)';
    }

    return 'translateX(256px)';
  }};

  background-color: #fff;
  width: 256px;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.25s ease-in-out;
  pointer-events: all;
`;

export const NaviItem = styled(_NaviItem)`
  ${pc} {
    &:not(:first-child) {
      margin-left: 75px;
    }
  }
`;

const size = '32px';

export const HamburgerWrapper = styled.button`
  width: ${size};
  height: ${size};
  padding: 0;
  align-self: flex-start;
  top: 28px;
  right: 28px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
`;

export const HamburgerImage = styled(Img).attrs({
  style: {
    width: `${size}`,
    height: `${size}`,
  },
})`
  opacity: ${(props) => (props.isShow ? 0 : 1)};
  transition: opacity 0.25s ease-in-out;
`;

export const CloseImage = styled(Img).attrs({
  style: {
    width: `${size}`,
    height: `${size}`,
  },
})`
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition: opacity 0.25s ease-in-out;
`;
