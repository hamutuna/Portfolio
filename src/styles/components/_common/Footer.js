// @flow
import styled from 'styled-components';

import { column, row } from '../../common';

import _NaviItem from '../../../components/_common/NaviItem';
import Svg from '../../../components/_common/Svg';
import { wide, colors, weights } from '../../var';

export const Footer = styled.footer`
  ${column}
  width: 100%;
  margin-top: 32px;

  ${wide} {
    margin-top: 64px;
  }
`;

export const PageTop = styled.button`
  ${column}
  cursor: pointer;
`;

export const PageTopIcon = styled(Svg)`
  width: 66px;
  height: 27px;

  ${wide} {
    width: 88px;
    height: 32px;
  }
`;

export const PageTopText = styled.p`
  color: ${colors.wood};
  font-size: 12px;
  font-weight: ${weights.regular};
  margin-top: 4px;

  ${wide} {
    font-size: 14px;
  }
`;

export const Copy = styled.small`
  margin-top: 32px;
  font-size: 12px;
  font-weight: ${weights.regular};
  align-self: flex-end;
  margin-right: 28px;
  margin-bottom: 28px;

  ${wide} {
    font-size: 16px;
    margin-top: 36px;
    margin-right: 144px;
    margin-bottom: 80px;
  }
`;
