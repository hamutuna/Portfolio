// @flow
import styled from 'styled-components';

import { row } from '../../styles/common';

import _NaviItem from '../../components/_common/NaviItem';

export const Footer = styled.footer`
  width: 100%;
  height: 140px;
  margin-top: 180px;
`;

export const NaviItem = styled(_NaviItem)`
  ${row};
  justify-content: left;
  height: 85px;
  background-color: lightgray;

  &:not(:last-child) {
    border-bottom: 1px solid gray;
  }
`;

export const Copy = styled.small`
  ${row};
  width: 100%;
  height: 140px;
  background-color: darkgray;
`;
