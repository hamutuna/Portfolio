// @flow
import styled from 'styled-components';

import { row } from '../../styles/common';
import { pc } from '../../styles/var';

export const Header = styled.header`
  ${row};
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: darkgray;
`;

export const Logo = styled.img`
  background-color: darkgray;
  width: 24px;
  height: 24px;
`;

export const Navi = styled.nav`
  display: none;

  ${pc} {
    display: block;
  }
`;

export const NaviItemList = styled.ol`
  ${pc} {
    ${row};
  }
`;

export const NaviItem = styled.li`
  ${pc} {
    &:not(:first-child) {
      margin-left: 75px;
    }
  }
`;
