// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { row } from '../../common';
import { pc, colors } from '../../var';

import _NaviItem from '../../../components/_common/NaviItem';

export const Header = styled.header`
  ${row};
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: ${colors.firstViewBg};
`;

export const Navi = styled.nav`
  ${row}
  width: 100%;
  justify-content: flex-end;
`;

export const NaviItemList = styled.ol`
  ${pc} {
    ${row};
  }
`;

export const NaviItem = styled(_NaviItem)`
  ${pc} {
    &:not(:first-child) {
      margin-left: 75px;
    }
  }
`;

export const HamburgerImage = styled(Img).attrs({
  style: {
    width: '30px',
    height: '30px',
  },
})``;
