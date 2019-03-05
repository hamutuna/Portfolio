// @flow
import styled from 'styled-components';

import { column, row } from '../../common';

import _NaviItem from '../../../components/_common/NaviItem';
import Svg from '../../../components/_common/Svg';
import { colors, weights } from '../../var';

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
  color: ${colors.wood};
  font-size: 12px;
  font-weight: ${weights.regular};
  margin-top: 4px;
`;

export const Copy = styled.small`
  margin-top: 32px;
  font-size: 12px;
  font-weight: ${weights.regular};
  align-self: flex-end;
  margin-right: 28px;
  margin-bottom: 28px;
`;
