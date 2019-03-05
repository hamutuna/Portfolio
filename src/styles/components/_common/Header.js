// @flow
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import { Link } from 'gatsby';
import { row, column, dashedLine } from '../../common';
import { pc, colors, headerHeight, hexTo, rgba, weights } from '../../var';

import Svg from '../../../components/_common/Svg';

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
  background-color: ${(props: any) => {
    if (props.isShow) {
      return rgba(colors.black, 0.1);
    }

    return 'transparent';
  }};
  transition: background-color 0.25s ease-out;
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
`;

export const NaviItemList = styled.ol`
  ${column}
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 0;
  padding-left: 16px;
  box-sizing: border-box;
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
  transition: transform 0.25s ease-out;
  pointer-events: all;
`;

export const NaviLink = styled(Link)`
  margin-top: 16px;
  &:first-child {
    margin-top: 102px;
  }
  opacity: ${(props: any) => (props.isCurrentPage ? 0.2 : 1)};
  pointer-events: ${(props: any) => (props.isCurrentPage ? 'none' : 'all')};
`;

export const NaviButton = styled.button`
  color: ${colors.black};
  padding: 12px;
  font-size: 16px;
  width: 134px;
  text-align: left;
  &:active {
    text-decoration: underline;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 16px;
  margin-left: 12px;
  width: 100%;
`;

export const NaviTitle = styled.h2`
  font-size: 10px;
  font-weight: ${weights.regular};
`;

export const HorizontalLine = styled.div`
  ${dashedLine}
  margin-top: 4px;
  margin-left: -8px;
`;

const hamburgerSize = '56px';

export const HamburgerWrapper = styled.button`
  width: ${hamburgerSize};
  height: ${hamburgerSize};
  padding: 0;
  align-self: flex-start;
  top: 28px;
  right: 28px;
  position: absolute;
  z-index: 1;
  pointer-events: all;
  cursor: pointer;
`;

export const HamburgerIcon = styled(Svg)`
  width: ${hamburgerSize};
  height: ${hamburgerSize};
  opacity: ${(props) => (props.isShow ? 0 : 1)};
  transition: opacity 0.25s ease-out;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.25));
`;

const closeSize = '32px';

export const CloseIcon = styled(Svg)`
  width: ${closeSize};
  height: ${closeSize};
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition: opacity 0.25s ease-out;
`;

const logoSize = '60px';

export const LogoWrapper = styled.button`
  width: ${logoSize};
  height: ${logoSize};
  top: 28px;
  left: 28px;
  position: absolute;
  z-index: 1;
  pointer-events: ${(props) => (props.isShow ? 'all' : 'none')};
  cursor: pointer;
`;

export const LogoImage = styled(Img).attrs({
  style: {
    width: `${logoSize}`,
    height: `${logoSize}`,
  },
})`
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  transition: opacity 0.25s ease-out;
`;
