// @flow
import styled from 'styled-components';

import { column, row } from '../../common';

import _NaviItem from '../../../components/_common/NaviItem';
import Svg from '../../../components/_common/Svg';

export const Footer = styled.footer`
  ${column}
  width: 100%;
  margin-top: 32px;
`;

export const PageTop = styled.button`
  ${column}
  cursor: pointer;
`;

export const PageTopIcon = styled(Svg)`
  width: 66px;
  height: 27px;
`;

export const PageTopText = styled.p`
  color: #c4c4c4;
  font-size: 12px;
  margin-top: 4px;
`;

export const Copy = styled.small`
  margin-top: 32px;
  font-size: 12px;
  align-self: flex-end;
  margin-right: 28px;
  margin-bottom: 28px;
`;
