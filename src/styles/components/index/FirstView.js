// @flow
import styled from 'styled-components';
import Img from 'gatsby-image';

import { column } from '../../common';
import { headerHeight, underFirstView, colors } from '../../var';

export const FirstView = styled.section`
  ${column}
  width: 100vw;
  height: calc(100vh - ${headerHeight} - ${underFirstView});
  background-color: ${colors.firstViewBg};
`;

export const BgImage = styled(Img).attrs({
  style: {
    width: '100%',
    height: '100%',
  },
})``;

const textMargin = 30;

export const FloatText = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 282px;
  transform: translate(-50%, 0);
  color: #6b4320;
  font-size: 28px;
  width: calc(100vw - ${textMargin * 2}px);
  max-width: 800px;
`;
