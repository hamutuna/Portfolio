// @flow
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import { row, column } from '../../common';
import { pc, colors, headerHeight, hexTo, rgba } from '../../var';

import _NaviItem from '../../../components/_common/NaviItem';

export const Item = styled.button`
  font-size: 16px;
  cursor: pointer;
  padding: 12px;
  min-width: 112px;
  text-align: left;
  font-weight: normal;
`;
